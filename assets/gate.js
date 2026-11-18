/* ============================================================
   Cổng đăng nhập (client-side) — Sổ tay điện tử CĐHA
   LƯU Ý: Đây là rào chặn truy cập dạng nhẹ cho trang tĩnh (GitHub Pages),
   KHÔNG phải bảo mật máy chủ. Ảnh ca bệnh thật vẫn được mã hóa AES riêng.
   - Mỗi KTV một tài khoản riêng (để ghi nhật ký tra cứu theo người dùng).
     USERS = { "tên đăng nhập": SHA-256("tên đăng nhập:mật khẩu") }.
   - KHÔNG ghi mật khẩu gốc ở đây (file này công khai). Thêm/đổi tài khoản:
       printf '%s' 'user:matkhau' | sha256sum   → dán vào USERS.
   - Phiên đăng nhập có hiệu lực trong NGÀY (máy dùng chung ở khoa: mỗi ngày
     đăng nhập lại để lượt tra cứu ghi đúng người). Nút "Đổi người dùng" ở chân trang.
   - Cung cấp cho các trang: window.SOTAY_USER (tên đăng nhập hiện tại),
     window.SOTAY_LOGOUT(), sự kiện "sotay-login" khi vừa đăng nhập xong.
   ============================================================ */
(function () {
  "use strict";
  var KEY = "sotay-auth-v3";
  var USERS = {
    "phong":    "8b6d1d90653d9b06a4cbd833d4bc46c61954eb6ac7100a8677c18ee6eab6150d",
    "tung":     "491db76b6a68a0fa7fbc335e19258eb9765eaffc8d99054c5fc61a43d3452ff7",
    "tinh":     "ba5eec0be4002fcaebc7329840860f85783a6f0884ac0927b3524c0caa30247f",
    "vinh":     "1d9bb6b1723d3f2ec1edef09e04c67cc5c8aa626e4259b64609802640e63b245",
    "tho":      "bbde78a45396faa8d08555e3fd2d301de0f31f15a99276948932cb37c7012536",
    "nhan":     "f1d7c1a6818b29284b8189505bfea659bfa7167dc70a3fe39e1af8fa7cb7633d",
    "luyen":    "92bef0bb28c90fa891507a394a95a6b6c7b32745b4d04088491f4899ceb916a2",
    "tham":     "d24b51183b3b3ec48ff16e928915c606b9950a0178479bd7f9a2a3a7d976c9cc",
    "nguyetha": "b2bae32761743e30052bd26f2267d31ace8f4bd807a805e07a3955a481073dc9",
    "thang":    "8e5f90cbafbc48a121a8bad9bafdd5c951ed5499999fd7e830dfba1df7038dfd",
    "xuanha":   "6ca4b44e302825b06ba2e2f6095ba79e478223db516cbf11113e72c0dd690b0f",
    "thao":     "fc0b3dfe54a6bcef2ce9c3faa5a4cb53b5ef4735fc4904e8b884cb94a56dcd81",
    "danh":     "0320813c48254687f46ed6b2b42ebc0f049e89884f3abda7d3c4261aee6cc3a4",
    "phu":      "69e2a7beca3f29eee893144988002a7bf5819510543dfa255e355ed04ae0c987",
    "cdha":     "b3fe52b12f60650dbe547b3ceb97796d119a691c10a9d4cf2af19e7a3637ed99"  /* tài khoản chung: bác sĩ / khách */
  };

  function today() {
    var d = new Date();
    return d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2);
  }
  function readSession() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY) || "null");
      if (s && s.u && USERS[s.u] && s.d === today()) return s;
    } catch (e) {}
    return null;
  }
  var sess = readSession();
  window.SOTAY_USER = sess ? sess.u : "";
  window.SOTAY_LOGOUT = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    try { location.reload(); } catch (e) {}
  };

  // Đã đăng nhập hôm nay (áp dụng cả iframe cùng nguồn) → bỏ qua
  if (sess) return;

  // Ẩn nội dung trang cho tới khi đăng nhập (tránh lộ nội dung / nhấp nháy)
  var st = document.createElement("style");
  st.id = "gate-style";
  st.textContent =
    "html.gate-locked{background:#0f172a}" +
    "html.gate-locked body{visibility:hidden !important}" +
    "html.gate-locked #gate-ov{visibility:visible !important}";
  (document.head || document.documentElement).appendChild(st);
  document.documentElement.classList.add("gate-locked");

  function sha256Hex(msg) {
    var data = new TextEncoder().encode(msg);
    return crypto.subtle.digest("SHA-256", data).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return ("0" + b.toString(16)).slice(-2);
      }).join("");
    });
  }

  function unlock(u) {
    try { localStorage.setItem(KEY, JSON.stringify({ u: u, d: today() })); } catch (e) {}
    window.SOTAY_USER = u;
    document.documentElement.classList.remove("gate-locked");
    var ov = document.getElementById("gate-ov"); if (ov) ov.parentNode.removeChild(ov);
    var s = document.getElementById("gate-style"); if (s) s.parentNode.removeChild(s);
    try { window.dispatchEvent(new CustomEvent("sotay-login", { detail: { user: u } })); } catch (e) {}
  }

  function buildOverlay() {
    if (document.getElementById("gate-ov")) return;
    var ov = document.createElement("div");
    ov.id = "gate-ov";
    ov.setAttribute("style", "position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:#0f172a;font-family:system-ui,'Segoe UI',Roboto,Arial,sans-serif;visibility:visible");
    ov.innerHTML =
      '<form id="gate-form" autocomplete="on" style="width:min(92vw,360px);box-sizing:border-box;background:#1e293b;border:1px solid #334155;border-radius:16px;padding:26px 24px;box-shadow:0 18px 50px rgba(0,0,0,.45);color:#e2e8f0">' +
        '<div style="text-align:center;margin-bottom:6px;font-size:34px">🔒</div>' +
        '<h1 style="margin:0 0 4px;font-size:18px;font-weight:700;text-align:center;color:#f1f5f9">Sổ tay điện tử CĐHA</h1>' +
        '<p style="margin:0 0 18px;font-size:13px;text-align:center;color:#94a3b8">Đăng nhập bằng tài khoản riêng của bạn (nội bộ Khoa CĐHA)</p>' +
        '<label for="gate-u" style="display:block;font-size:12.5px;margin:0 0 4px;color:#cbd5e1">Tên đăng nhập</label>' +
        '<input id="gate-u" name="username" type="text" autocomplete="username" autocapitalize="none" spellcheck="false" style="width:100%;box-sizing:border-box;padding:10px 12px;margin:0 0 12px;border:1px solid #475569;border-radius:9px;background:#0f172a;color:#f1f5f9;font-size:14px">' +
        '<label for="gate-p" style="display:block;font-size:12.5px;margin:0 0 4px;color:#cbd5e1">Mật khẩu</label>' +
        '<input id="gate-p" name="password" type="password" autocomplete="current-password" style="width:100%;box-sizing:border-box;padding:10px 12px;margin:0 0 6px;border:1px solid #475569;border-radius:9px;background:#0f172a;color:#f1f5f9;font-size:14px">' +
        '<div id="gate-msg" style="min-height:18px;font-size:12.5px;color:#f87171;margin:2px 0 10px"></div>' +
        '<button type="submit" id="gate-btn" style="width:100%;padding:11px;border:none;border-radius:9px;background:#2563eb;color:#fff;font-size:14px;font-weight:600;cursor:pointer">Đăng nhập</button>' +
        '<p style="margin:12px 0 0;font-size:11.5px;text-align:center;color:#64748b">Mỗi ngày đăng nhập một lần. Lượt tra cứu được ghi nhận theo tài khoản để đánh giá đề án cải tiến chất lượng.</p>' +
      '</form>';
    document.body.appendChild(ov);
    var form = ov.querySelector("#gate-form");
    var msg = ov.querySelector("#gate-msg");
    var uEl = ov.querySelector("#gate-u"), pEl = ov.querySelector("#gate-p"), btn = ov.querySelector("#gate-btn");
    try { uEl.focus(); } catch (e) {}
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var u = (uEl.value || "").trim().toLowerCase();
      var p = pEl.value || "";
      if (!u || !p) { msg.textContent = "Nhập tên đăng nhập và mật khẩu."; return; }
      if (!(window.crypto && crypto.subtle)) { msg.textContent = "Trình duyệt không hỗ trợ (cần HTTPS)."; return; }
      btn.disabled = true; msg.textContent = "";
      sha256Hex(u + ":" + p).then(function (h) {
        if (USERS[u] && h === USERS[u]) { unlock(u); }
        else { btn.disabled = false; msg.textContent = "Sai tên đăng nhập hoặc mật khẩu."; pEl.value = ""; pEl.focus(); }
      }).catch(function () { btn.disabled = false; msg.textContent = "Lỗi kiểm tra đăng nhập."; });
    });
  }

  if (document.body) buildOverlay();
  else document.addEventListener("DOMContentLoaded", buildOverlay);
})();
