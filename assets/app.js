/* ============================================================================
   LOGIC HIỂN THỊ  —  SỔ TAY ĐIỆN TỬ CĐHA
   Đọc dữ liệu từ window.SOTAY_QUYTRINH và window.SOTAY_CONGCU.
   KHÔNG chứa nội dung chuyên môn — nội dung nằm ở thư mục data/.
   ============================================================================ */
(function () {
  "use strict";

  var QT     = (window.SOTAY_QUYTRINH || []).concat(window.SOTAY_BENHLY || []);
  var CONGCU = window.SOTAY_CONGCU   || {};

  // --- tiện ích -------------------------------------------------------------
  // Bỏ dấu tiếng Việt để tìm kiếm "gõ sao cũng ra" (vd "so nao" khớp "sọ não")
  function boDau(s) {
    return (s || "")
      .toString()
      .normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/đ/g, "d").replace(/Đ/g, "D")
      .toLowerCase().trim();
  }
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return (s || "").toString()
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  // Tô vàng từ khóa trong chuỗi (giữ nguyên dấu gốc, so khớp không dấu).
  // Dò vị trí trên chuỗi đã bỏ dấu rồi mới esc từng mảnh, tránh lệch chỉ số do &<>.
  function highlight(text, qRaw) {
    text = (text || "").toString();
    var q = boDau(qRaw);
    if (!q) return esc(text);
    var norm = boDau(text); // mỗi ký tự tiếng Việt giữ đúng 1 ký tự -> cùng chỉ số với text
    var out = "", i = 0;
    while (i < text.length) {
      if (norm.substr(i, q.length) === q) {
        out += "<mark>" + esc(text.substr(i, q.length)) + "</mark>";
        i += q.length;
      } else {
        out += esc(text[i]); i++;
      }
    }
    return out;
  }

  // chuỗi gộp để tìm kiếm cho 1 quy trình
  function searchBlob(item) {
    var parts = [item.ten, item.nhom, item.modality].concat(item.tuKhoa || []);
    (item.thongSo || []).forEach(function (t) { parts.push(t.ten, t.giaTri); });
    (item.noiDung || []).forEach(function (s) {
      parts.push(s.tieuDe);
      (s.items || []).forEach(function (x) { parts.push(x); });
    });
    return boDau(parts.join(" "));
  }
  QT.forEach(function (it) { it._blob = searchBlob(it); });

  // --- trạng thái -----------------------------------------------------------
  var state = { view: "xquang", query: "", group: "*" };

  var $ = function (id) { return document.getElementById(id); };
  var searchInput = $("searchInput");
  var searchClear = $("searchClear");
  var cardList    = $("cardList");
  var emptyState  = $("emptyState");
  var resultMeta  = $("resultMeta");
  var groupFilter = $("groupFilter");
  var listView    = $("listView");
  var toolsView   = $("toolsView");
  var viewNote    = $("viewNote");

  // --- lọc + render danh sách ----------------------------------------------
  function currentSet() {
    return QT.filter(function (it) { return it.phanHe === state.view; });
  }

  function renderGroupChips() {
    groupFilter.innerHTML = "";
    if (state.view === "cong-cu") { groupFilter.hidden = true; return; }
    groupFilter.hidden = false;
    var groups = [];
    currentSet().forEach(function (it) {
      if (groups.indexOf(it.nhom) === -1) groups.push(it.nhom);
    });
    groups.sort(function (a, b) { return a.localeCompare(b, "vi"); });

    var all = el("button", "chip" + (state.group === "*" ? " is-active" : ""), "Tất cả");
    all.onclick = function () { state.group = "*"; render(); };
    groupFilter.appendChild(all);

    groups.forEach(function (g) {
      var c = el("button", "chip" + (state.group === g ? " is-active" : ""), esc(g));
      c.onclick = function () { state.group = (state.group === g ? "*" : g); render(); };
      groupFilter.appendChild(c);
    });
  }

  function matchList() {
    var q = boDau(state.query);
    return currentSet().filter(function (it) {
      if (state.group !== "*" && it.nhom !== state.group) return false;
      if (q && it._blob.indexOf(q) === -1) return false;
      return true;
    });
  }

  function badgeClass(m) {
    if (m === "CT") return "ct";
    if (m === "MRI") return "mri";
    return "";
  }

  function renderCards() {
    var items = matchList();
    cardList.innerHTML = "";
    emptyState.hidden = items.length !== 0;
    resultMeta.textContent = items.length
      ? items.length + " quy trình" + (state.query ? " khớp “" + state.query + "”" : "")
      : "";

    items.forEach(function (it) {
      var card = el("button", "card");
      card.setAttribute("data-modality", it.modality);
      card.onclick = function () { openDetail(it); };

      var top = el("div", "card-top");
      top.appendChild(el("span", "badge " + badgeClass(it.modality), esc(it.modality)));
      top.appendChild(el("span", "badge ghost", esc(it.nhom)));
      if (it.hinhAnh && it.hinhAnh.length) {
        top.appendChild(el("span", "badge ghost", "📷 " + it.hinhAnh.length));
      }
      card.appendChild(top);

      card.appendChild(el("p", "card-title", highlight(it.ten, state.query)));

      // xem trước tối đa 3 thông số nổi bật
      if (it.thongSo && it.thongSo.length) {
        var pp = el("div", "card-params");
        it.thongSo.slice(0, 3).forEach(function (t) {
          pp.appendChild(el("span", "param-pill",
            esc(t.ten) + ": <b>" + esc(t.giaTri) + "</b>"));
        });
        card.appendChild(pp);
      }
      cardList.appendChild(card);
    });
  }

  // --- bảng chi tiết --------------------------------------------------------
  var overlay    = $("detailOverlay");
  var detailBody = $("detailBody");

  // --- Ảnh ca bệnh thật mã hóa (AES-256-CBC, mở bằng mật khẩu) -------------
  // Chỉ dùng cho bản công khai: ảnh để ở dạng .enc = salt(16)|iv(16)|ciphertext.
  function encDeriveKey(password, salt, iter) {
    return crypto.subtle.importKey(
      "raw", new TextEncoder().encode(password), "PBKDF2", false, ["deriveKey"]
    ).then(function (base) {
      return crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: salt, iterations: iter, hash: "SHA-256" },
        base, { name: "AES-CBC", length: 256 }, false, ["decrypt"]);
    });
  }
  function wireEnc(root) {
    var panels = root.querySelectorAll(".enc-panel");
    Array.prototype.forEach.call(panels, function (p) {
      var btn = p.querySelector(".enc-btn"),
          inp = p.querySelector(".enc-pass"),
          msg = p.querySelector(".enc-msg");
      function open() {
        var pwd = inp.value || "";
        if (!pwd) { msg.textContent = "Nhập mật khẩu."; return; }
        if (!window.crypto || !crypto.subtle) {
          msg.textContent = "Trình duyệt không hỗ trợ giải mã (cần mở bằng HTTPS)."; return;
        }
        btn.disabled = true; msg.textContent = "Đang mở ảnh…";
        var url = p.getAttribute("data-enc"),
            iter = parseInt(p.getAttribute("data-iter"), 10) || 150000;
        fetch(url).then(function (r) { return r.arrayBuffer(); }).then(function (ab) {
          var b = new Uint8Array(ab);
          return encDeriveKey(pwd, b.slice(0, 16), iter).then(function (key) {
            return crypto.subtle.decrypt({ name: "AES-CBC", iv: b.slice(16, 32) }, key, b.slice(32));
          });
        }).then(function (plain) {
          var u8 = new Uint8Array(plain);
          if (!(u8[0] === 0x89 && u8[1] === 0x50)) throw new Error("magic");
          var img = document.createElement("img");
          img.src = URL.createObjectURL(new Blob([u8], { type: "image/png" }));
          img.alt = "Ảnh ca bệnh thật"; img.loading = "lazy";
          p.parentNode.replaceChild(img, p);
        }).catch(function () {
          btn.disabled = false; msg.textContent = "Sai mật khẩu hoặc không mở được ảnh.";
        });
      }
      btn.addEventListener("click", open);
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") open(); });
    });
  }

  function openDetail(it) {
    var h = "";
    h += '<h1 class="detail-title">' + esc(it.ten) + "</h1>";
    h += '<p class="detail-meta">' + esc(it.modality) + " · " + esc(it.nhom) +
         (it.id ? " · mã: " + esc(it.id) : "") + "</p>";

    if (it.thongSo && it.thongSo.length) {
      h += '<div class="param-box">';
      it.thongSo.forEach(function (t) {
        h += '<div class="param-row"><span class="k">' + esc(t.ten) +
             '</span><span class="v">' + esc(t.giaTri) + "</span></div>";
      });
      h += "</div>";
    }
    (it.noiDung || []).forEach(function (s) {
      var nt = (s.tieuDe || "").replace(/^[^A-Za-z]+/, "").toLowerCase();
      var cls = "sec", ico = "";
      if (nt.indexOf("cảnh báo") === 0) { cls = "sec callout warn"; ico = "⚠️ "; }
      else if (nt.indexOf("lưu ý") === 0) { cls = "sec callout note"; ico = "💡 "; }
      h += '<div class="' + cls + '"><h3>' + ico + esc(s.tieuDe) + "</h3><ul>";
      (s.items || []).forEach(function (x) { h += "<li>" + esc(x) + "</li>"; });
      h += "</ul></div>";
    });
    if (it.hinhAnh && it.hinhAnh.length) {
      var imgTitle = (it.phanHe === "benh-ly") ? "Hình ảnh ca lâm sàng" : "Hình ảnh";
      var hasReal = false;
      var figHtml = function (im) {
        var cap = esc(im.caption || "");
        var src = (im.src || "").toString();
        var s = '<figure class="img-fig">';
        if (src) {
          hasReal = true;
          s += '<img loading="lazy" src="' + esc(src) + '" alt="' + cap + '">';
        } else if (im.enc) {
          s += '<div class="enc-panel" data-enc="' + esc(im.enc) + '" data-iter="' + (im.iter || 150000) + '">' +
               '<div class="enc-lock">🔒 Ảnh ca bệnh thật — cần mật khẩu</div>' +
               '<input type="password" class="enc-pass" placeholder="Nhập mật khẩu" autocomplete="off">' +
               '<button type="button" class="enc-btn">Mở ảnh</button>' +
               '<div class="enc-msg"></div></div>';
        } else {
          s += '<div class="img-missing">Chưa có ảnh<br><small>chèn ảnh được phép dùng</small></div>';
        }
        s += '<figcaption>' + cap +
             (im.nguon ? '<span class="img-src">Nguồn ảnh: ' + esc(im.nguon) + '</span>' : "") +
             "</figcaption></figure>";
        return s;
      };
      // phân nhóm: chiều thế (người thật) vs phim đạt yêu cầu
      var gCT = [], gPH = [];
      it.hinhAnh.forEach(function (im) {
        var sl = (im.src || "").toLowerCase(), cl = (im.caption || "").toLowerCase();
        var isPhim = /-phim\d*\.(png|jpe?g|webp|gif)$/.test(sl) ||
                     (/\bphim\b|film/.test(cl) && !/chiều thế|hướng tia/.test(cl));
        (isPhim ? gPH : gCT).push(im);
      });
      h += '<div class="sec"><h3>' + imgTitle + '</h3>';
      if (gPH.length && gCT.length) {
        h += '<h4 class="img-sub">Chiều thế</h4><div class="img-grid img-row">';
        gCT.forEach(function (im) { h += figHtml(im); });
        h += '</div><h4 class="img-sub">Phim đạt yêu cầu</h4><div class="img-grid img-row">';
        gPH.forEach(function (im) { h += figHtml(im); });
        h += "</div>";
      } else {
        h += '<div class="img-grid">';
        it.hinhAnh.forEach(function (im) { h += figHtml(im); });
        h += "</div>";
      }
      if (hasReal) h += '<p class="img-hint">Chạm vào ảnh để phóng to.</p>';
      h += "</div>";
    }
    if (it.nguon) {
      h += '<p class="detail-meta">Nguồn: ' + esc(it.nguon) + "</p>";
    }
    detailBody.innerHTML = h;
    wireEnc(detailBody);
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    overlay.scrollTop = 0;
  }
  function closeDetail() {
    overlay.hidden = true;
    document.body.style.overflow = "";
  }
  $("detailClose").onclick = closeDetail;
  overlay.onclick = function (e) { if (e.target === overlay) closeDetail(); };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !overlay.hidden) closeDetail();
  });

  // --- phóng to ảnh (lightbox) ---------------------------------------------
  var lightbox    = $("lightbox");
  var lightboxImg = $("lightboxImg");
  detailBody.addEventListener("click", function (e) {
    if (e.target && e.target.tagName === "IMG") {
      lightboxImg.src = e.target.src;
      lightboxImg.alt = e.target.alt || "";
      lightbox.hidden = false;
    }
  });
  function closeLightbox() { lightbox.hidden = true; lightboxImg.src = ""; }
  $("lightboxClose").onclick = closeLightbox;
  lightbox.onclick = function (e) { if (e.target === lightbox) closeLightbox(); };
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });

  // --- công cụ khẩn cấp -----------------------------------------------------
  function renderTools() {
    toolsView.innerHTML = "";
    toolsView.appendChild(buildCCTATool());
    toolsView.appendChild(buildDoseTool());
    toolsView.appendChild(buildAnaphylaxisTool());
    toolsView.appendChild(buildCPRTool());
    toolsView.appendChild(buildMriChecklist());
  }

  function buildCCTATool() {
    var d = CONGCU.lieuCCTA || {};
    var cn = d.canNang || {}, idr = d.idr || {}, tg = d.thoiGian || {};
    var card = el("div", "tool-card");
    card.appendChild(el("h2", null, "🫀 Máy tính liều thuốc CCTA (ĐM vành)"));
    card.appendChild(el("p", "tool-desc",
      "Tính tốc độ tiêm và tổng thể tích thuốc theo công thức WB-IDR (cân nặng × hệ số thuốc ÷ nồng độ)."));

    function field(label, id, type, val, extra) {
      var f = el("div", "field");
      f.innerHTML = '<label for="' + id + '">' + label + '</label>' +
        '<input id="' + id + '" type="' + type + '" inputmode="decimal" ' +
        (extra || "") + ' value="' + val + '">';
      return f;
    }
    card.appendChild(field("Cân nặng (kg) — " + (cn.min || "?") + "–" + (cn.max || "?"),
      "cctaW", "number", cn.macDinh != null ? cn.macDinh : "",
      'min="' + cn.min + '" max="' + cn.max + '"'));
    card.appendChild(field("Hệ số thuốc IDR (gI/kg/s) — chuẩn " + (idr.macDinh || "?"),
      "cctaIdr", "number", idr.macDinh != null ? idr.macDinh : "",
      'min="' + idr.min + '" max="' + idr.max + '" step="0.001"'));

    // nồng độ: select
    var fN = el("div", "field");
    var opts = (d.nongDo || []).map(function (v) {
      return '<option value="' + v + '"' + (v === d.nongDoMacDinh ? " selected" : "") +
        ">" + v + " mgI/ml</option>";
    }).join("");
    fN.innerHTML = '<label for="cctaConc">Nồng độ i-ốt</label>' +
      '<select id="cctaConc">' + opts + "</select>";
    card.appendChild(fN);

    card.appendChild(field("Thời gian tiêm (s) — " + (tg.min || "?") + "–" + (tg.max || "?"),
      "cctaT", "number", tg.macDinh != null ? tg.macDinh : "",
      'min="' + tg.min + '" max="' + tg.max + '"'));

    var res = el("div", "calc-result",
      '<div>Tốc độ tiêm: <span class="big" id="cctaFlow">—</span> ml/s</div>' +
      '<div>Tổng thể tích: <span class="big" id="cctaVol">—</span> ml</div>' +
      '<div class="calc-flag" id="cctaFlag"></div>');
    card.appendChild(res);

    // bảng tham chiếu kVp / IDR theo cân nặng
    if (d.bangThamChieu && d.bangThamChieu.length) {
      var tbl = '<div class="sec"><h3>Bảng tham chiếu kVp &amp; IDR theo cân nặng</h3>' +
        '<div class="ref-table"><table><thead><tr>' +
        '<th>Cân nặng</th><th>BMI</th><th>Điện thế (kVp)</th><th>IDR (gI/kg/s)</th>' +
        '</tr></thead><tbody>';
      d.bangThamChieu.forEach(function (r) {
        tbl += "<tr><td>" + esc(r.can) + "</td><td>" + esc(r.bmi) +
          "</td><td>" + esc(r.kvp) + "</td><td>" + esc(r.idr) + "</td></tr>";
      });
      tbl += "</tbody></table></div></div>";
      var box = el("div"); box.innerHTML = tbl;
      card.appendChild(box.firstChild);
    }

    if (d.luuY && d.luuY.length) {
      var ul = el("div", "sec", "<h3>Lưu ý</h3><ul>" +
        d.luuY.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>");
      card.appendChild(ul);
    }
    if (d.nguon) card.appendChild(el("p", "detail-meta", "Nguồn công thức: " + esc(d.nguon)));

    function recalc() {
      var w = parseFloat($("cctaW").value);
      var iv = parseFloat($("cctaIdr").value);
      var conc = parseFloat($("cctaConc").value);
      var t = parseFloat($("cctaT").value);
      var of = $("cctaFlow"), ov = $("cctaVol"), flag = $("cctaFlag");
      if (!(w > 0) || !(iv > 0) || !(conc > 0) || !(t > 0)) {
        of.textContent = "—"; ov.textContent = "—"; flag.textContent = ""; return;
      }
      var flow = (w * iv) / (conc / 1000);   // ml/s
      var vol = flow * t;                     // ml
      of.textContent = Math.round(flow * 10) / 10;
      ov.textContent = Math.round(vol);
      flag.className = "calc-flag";
      flag.innerHTML = "Công thức: (" + w + " × " + iv + ") ÷ " + (conc / 1000) +
        " = <b>" + (Math.round(flow * 10) / 10) + "</b> ml/s; × " + t + "s = <b>" +
        Math.round(vol) + "</b> ml.";
    }
    ["cctaW", "cctaIdr", "cctaT"].forEach(function (id) { $(id).oninput = recalc; });
    $("cctaConc").onchange = recalc;
    recalc();
    return card;
  }

  function noticeEl(text, ok) {
    return el("div", "notice" + (ok ? " ok" : ""),
      '<span aria-hidden="true">' + (ok ? "✅" : "⚠️") + "</span><span>" + esc(text) + "</span>");
  }

  function buildDoseTool() {
    var d = CONGCU.lieuCanQuang || {};
    var loai = d.loaiKhaoSat || [];
    var card = el("div", "tool-card");
    card.appendChild(el("h2", null, "💉 Máy tính liều thuốc cản quang (i-ốt)"));
    card.appendChild(el("p", "tool-desc",
      "Ước tính thể tích thuốc và tải i-ốt theo cân nặng. Liều ml/kg theo QUY TRÌNH CLVT của khoa."));

    // Cân nặng
    var fW = el("div", "field");
    fW.innerHTML = '<label for="dw">Cân nặng người bệnh (kg)</label>' +
                   '<input id="dw" type="number" inputmode="decimal" min="0" placeholder="vd 60">';
    card.appendChild(fW);

    // Loại khảo sát → ml/kg
    var fT = el("div", "field");
    var optsT = loai.map(function (l, i) {
      return '<option value="' + i + '">' + esc(l.ten) + " (" +
        (l.mlKgMin === l.mlKgMax ? l.mlKgMin : l.mlKgMin + "–" + l.mlKgMax) + " ml/kg)</option>";
    }).join("");
    fT.innerHTML = '<label for="dtype">Loại khảo sát</label><select id="dtype">' + optsT + "</select>";
    if (loai.length) card.appendChild(fT);

    // Nồng độ i-ốt
    var fN = el("div", "field");
    var optsN = (d.nongDo || []).map(function (v) {
      return '<option value="' + v + '"' + (v === d.nongDoMacDinh ? " selected" : "") + ">" + v + " mgI/ml</option>";
    }).join("");
    fN.innerHTML = '<label for="dconc">Nồng độ i-ốt</label><select id="dconc">' + optsN + "</select>";
    if ((d.nongDo || []).length) card.appendChild(fN);

    // eGFR
    var fG = el("div", "field");
    fG.innerHTML = '<label for="degfr">eGFR (mL/phút/1,73m²) — nếu có</label>' +
                   '<input id="degfr" type="number" inputmode="decimal" min="0" placeholder="vd 85">';
    card.appendChild(fG);

    var res = el("div", "calc-result",
      '<div>Thể tích ước tính: <span class="big" id="dres">—</span> ml' +
      ' <span class="calc-sub" id="drange"></span></div>' +
      '<div>Tải i-ốt: <span class="big" id="diod">—</span> gI</div>' +
      '<div class="calc-flag" id="dflag"></div>' +
      '<div class="calc-flag" id="degfrflag"></div>');
    card.appendChild(res);

    if (d.luuY && d.luuY.length) {
      card.appendChild(el("div", "sec", "<h3>Lưu ý</h3><ul>" +
        d.luuY.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"));
    }

    function recalc() {
      var w = parseFloat($("dw").value);
      var egfr = parseFloat($("degfr").value);
      var conc = parseFloat(($("dconc") || {}).value) || d.nongDoMacDinh || 0;
      var l = loai[parseInt(($("dtype") || {}).value, 10)] ||
              { mlKgMin: d.congThucMacDinh, mlKgMax: d.congThucMacDinh, tocDo: "" };
      var out = $("dres"), iod = $("diod"), rng = $("drange"), flag = $("dflag"), gf = $("degfrflag");
      if (!(w > 0)) { out.textContent = "—"; iod.textContent = "—"; rng.textContent = ""; flag.textContent = ""; gf.textContent = ""; return; }
      var vMin = w * l.mlKgMin, vMax = w * l.mlKgMax;
      var vMid = (vMin + vMax) / 2;
      out.textContent = Math.round(vMid);
      rng.textContent = (l.mlKgMin === l.mlKgMax)
        ? "(" + l.mlKgMin + " ml/kg)"
        : "(" + Math.round(vMin) + "–" + Math.round(vMax) + " ml)";
      if (conc > 0) iod.textContent = Math.round(vMid * conc / 1000 * 10) / 10;
      flag.className = "calc-flag";
      flag.innerHTML = l.mlKgMin + (l.mlKgMax !== l.mlKgMin ? "–" + l.mlKgMax : "") +
        " ml/kg × " + w + " kg" + (l.tocDo ? "; tốc độ " + esc(l.tocDo) : "") + ".";
      if (!isNaN(egfr) && d.nguongEGFR) {
        if (egfr < d.nguongEGFR.chongChiDinh) {
          gf.className = "calc-flag warn";
          gf.textContent = "⚠️ eGFR < " + d.nguongEGFR.chongChiDinh + " — thận trọng cao, hội chẩn / theo quy trình khoa (ngưỡng tham chiếu chung).";
        } else if (egfr < d.nguongEGFR.canTrong) {
          gf.className = "calc-flag warn";
          gf.textContent = "⚠️ eGFR < " + d.nguongEGFR.canTrong + " — cân nhắc trước khi tiêm (ngưỡng tham chiếu chung).";
        } else {
          gf.className = "calc-flag ok";
          gf.textContent = "eGFR trong ngưỡng tham chiếu chung.";
        }
      } else { gf.textContent = ""; }
    }
    fW.querySelector("input").oninput = recalc;
    fG.querySelector("input").oninput = recalc;
    if ($("dtype")) $("dtype").onchange = recalc;
    if ($("dconc")) $("dconc").onchange = recalc;
    recalc();
    return card;
  }

  // --- vẽ "bản đồ quy trình" (flowchart) dùng chung cho phản vệ & CPR ------
  function liList(items) {
    return "<ul>" + (items || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
  }
  function renderFlow(card, flow) {
    (flow || []).forEach(function (b, i) {
      if (i > 0) card.appendChild(el("div", "flow-arrow", "▼"));
      if (b.loai === "row") {
        if (b.tieuDe) card.appendChild(el("div", "flow-rowtitle", esc(b.tieuDe)));
        var row = el("div", "flow-row");
        (b.cot || []).forEach(function (c) {
          row.appendChild(el("div", "flow-col " + (c.mau || ""),
            '<div class="flow-h">' + esc(c.muc) + "</div>" + liList(c.items)));
        });
        card.appendChild(row);
      } else {
        var cls = "flow-box " + (b.loai === "nhan" ? "emph " : "") +
                  (b.loai === "dich" ? "goal " : "") + (b.mau || "");
        card.appendChild(el("div", cls,
          '<div class="flow-h">' + esc(b.tieuDe) + "</div>" +
          (b.items && b.items.length ? liList(b.items) : "")));
      }
    });
  }

  function buildAnaphylaxisTool() {
    var p = CONGCU.phanVe || {};
    var card = el("div", "tool-card");
    card.appendChild(el("h2", null, "🚨 Phác đồ xử trí phản vệ"));
    card.appendChild(el("p", "tool-desc", esc(p.nguon || "")));
    if (p.luuYDau) card.appendChild(noticeEl(p.luuYDau, false));
    renderFlow(card, p.flow);
    return card;
  }

  function buildCPRTool() {
    var p = CONGCU.ngungTuanHoan || {};
    if (!p.flow) return el("div");
    var card = el("div", "tool-card");
    card.appendChild(el("h2", null, "❤️‍🩹 Cấp cứu ngừng tuần hoàn (CPR)"));
    card.appendChild(el("p", "tool-desc", esc(p.nguon || "")));
    if (p.luuYDau) card.appendChild(noticeEl(p.luuYDau, false));
    renderFlow(card, p.flow);
    return card;
  }

  function buildMriChecklist() {
    var m = CONGCU.bangKiemMRI || {};
    var card = el("div", "tool-card");
    card.appendChild(el("h2", null, "🧲 Bảng kiểm an toàn MRI"));
    card.appendChild(el("p", "tool-desc",
      "Rà soát trước khi đưa người bệnh vào khoang máy. Nội dung lấy từ quy trình MRI của khoa."));

    function group(title, items, cls) {
      if (!items || !items.length) return;
      var g = el("div", "check-group" + (cls ? " " + cls : ""));
      g.appendChild(el("h3", null, title));
      items.forEach(function (txt) {
        var row = el("label", "check-item");
        var cb = el("input"); cb.type = "checkbox";
        cb.onchange = function () { row.classList.toggle("checked", cb.checked); };
        row.appendChild(cb);
        row.appendChild(el("span", null, esc(txt)));
        g.appendChild(row);
      });
      card.appendChild(g);
    }
    group("⛔ Chống chỉ định TUYỆT ĐỐI", m.tuyetDoi, "tuyetdoi");
    group("⚠️ Chống chỉ định tương đối", m.tuongDoi);
    group("✔️ Chuẩn bị trước chụp", m.chuanBi);
    if (m.nguon) card.appendChild(el("p", "detail-meta", "Nguồn: " + esc(m.nguon)));
    return card;
  }

  // --- chuyển phân hệ -------------------------------------------------------
  function setView(v) {
    state.view = v; state.group = "*";
    Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (t) {
      t.classList.toggle("is-active", t.getAttribute("data-view") === v);
    });
    var isTools = (v === "cong-cu");
    listView.hidden = isTools;
    toolsView.hidden = !isTools;
    if (isTools) renderTools();
    render();
  }

  function render() {
    if (viewNote) {
      if (state.view === "benh-ly") {
        viewNote.hidden = false;
        viewNote.innerHTML = "⚠️ <b>Mục tham khảo</b> — các dấu hiệu bệnh lý để KTV đối chiếu khi chụp. " +
          "KTV <b>không kết luận chẩn đoán</b>; mọi nội dung chờ Bác sĩ CĐHA / Trưởng khoa duyệt. " +
          "Ảnh trích từ sách đã ghi nguồn; vui lòng chèn ảnh đúng bản quyền.";
      } else {
        viewNote.hidden = true;
        viewNote.innerHTML = "";
      }
    }
    renderGroupChips();
    if (state.view !== "cong-cu") renderCards();
  }

  // --- gắn sự kiện ----------------------------------------------------------
  Array.prototype.forEach.call(document.querySelectorAll(".tab"), function (t) {
    t.onclick = function () { setView(t.getAttribute("data-view")); };
  });
  searchInput.oninput = function () {
    state.query = searchInput.value;
    searchClear.hidden = !searchInput.value;
    render();
  };
  searchClear.onclick = function () {
    searchInput.value = ""; state.query = ""; searchClear.hidden = true;
    searchInput.focus(); render();
  };

  // --- nền sáng / tối (nhớ lựa chọn trên máy này) ---------------------------
  var themeBtn = $("themeToggle");
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    themeBtn.textContent = (t === "dark" ? "☀️" : "🌙");
  }
  var saved = null;
  try { saved = localStorage.getItem("sotay-theme"); } catch (e) {}
  applyTheme(saved || "light");
  themeBtn.onclick = function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("sotay-theme", next); } catch (e) {}
  };

  // --- khởi động ------------------------------------------------------------
  setView("xquang");
})();
