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
    "phong00047":    "abe10fa093da30c6e0d75c001bd2fbd9e58a38b6acf73565f7f7161540171e1e",
    "tung00100":     "65047e218bbc5bbb7b0de7c0d97d49f99dca5329fed5991335454b3f683b4350",
    "tinh00031":     "05ac2d3820b5eea5aa6ec0de9b4cd96917aa68cf01cf3841e0d62d77ed10cfd3",
    "vinh00030":     "117713fb4a3e14d6e4a91df39bbaee95722d9342268bd4f0ce542580fb25e30a",
    "tho00277":      "0dfd704224ff29c4ba100653a029185927c4697ed48e6797978571179feb412f",
    "nhan00153":     "188ff43b91d07b30e962c85558b47e17594b95404ea4fb13950f6f5a75351ab5",
    "luyen00168":    "1715f0bd4b77906f64eb58a1779376fad48e05a6fffe17e1aa8dad93bd68310b",
    "tham00177":     "46be9eac6d1f121aadfc89de4905d09a980adb58141d3d49e8fedde53ee1310e",
    "ha00209":       "97c852aaec25d66c22fc3ca7dc4841f081979977ce129000e1a9937fc109916a",
    "thang00565":    "4424057081abe3580e9dcdfab3f9893c78c329f5d9086b3252d256554da03bc8",
    "ha00599":       "baa62c2c160dee2446bd7e14e9cf47bae65952f0552387b32074cf31a00ce4cb",
    "thao00802":     "8be61ae59daec7313b3fab5180fe7941c7abd9e999decb8e499bf9696ab8b43e",
    "danh01020":     "383a167b924388e8559d6d76c5a440598117abbe434fd03e094c50962253dd2b",
    "phu01132":      "822ebb564f15dbc3a58ba6ede727dd0467242ba854240a044f602c2b999217b3",
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
