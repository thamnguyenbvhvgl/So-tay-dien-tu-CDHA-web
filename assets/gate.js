/* ============================================================
   Cổng đăng nhập (client-side) — Sổ tay điện tử CĐHA
   LƯU Ý: Đây là rào chặn truy cập dạng nhẹ cho trang tĩnh (GitHub Pages),
   KHÔNG phải bảo mật máy chủ. Ảnh ca bệnh thật vẫn được mã hóa AES riêng.
   - 1 tài khoản dùng chung. So khớp bằng băm SHA-256 (không để lộ mật khẩu gốc).
   - Đổi tài khoản: tính lại SHA-256 của "username:password" (chữ thường, phân cách ':')
     rồi thay vào CRED_HASH bên dưới.
   - Nhớ đăng nhập bằng localStorage (đăng nhập 1 lần trên thiết bị).
   ============================================================ */
(function () {
  "use strict";
  var KEY = "sotay-auth-v1";
  // SHA-256 của "khoacdha:KhoaCDHA@HVGL2026"
  var CRED_HASH = "cbfd8b80d92a310df7e346f505b734f6345a66c35d19ab14ffdb7f9f12974880";

  // Đã đăng nhập (áp dụng cả iframe cùng nguồn) → bỏ qua
  try { if (localStorage.getItem(KEY) === "1") return; } catch (e) {}

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

  function unlock() {
    try { localStorage.setItem(KEY, "1"); } catch (e) {}
    document.documentElement.classList.remove("gate-locked");
    var ov = document.getElementById("gate-ov"); if (ov) ov.parentNode.removeChild(ov);
    var s = document.getElementById("gate-style"); if (s) s.parentNode.removeChild(s);
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
        '<p style="margin:0 0 18px;font-size:13px;text-align:center;color:#94a3b8">Đăng nhập để truy cập (nội bộ Khoa CĐHA)</p>' +
        '<label for="gate-u" style="display:block;font-size:12.5px;margin:0 0 4px;color:#cbd5e1">Tên đăng nhập</label>' +
        '<input id="gate-u" name="username" type="text" autocomplete="username" autocapitalize="none" spellcheck="false" style="width:100%;box-sizing:border-box;padding:10px 12px;margin:0 0 12px;border:1px solid #475569;border-radius:9px;background:#0f172a;color:#f1f5f9;font-size:14px">' +
        '<label for="gate-p" style="display:block;font-size:12.5px;margin:0 0 4px;color:#cbd5e1">Mật khẩu</label>' +
        '<input id="gate-p" name="password" type="password" autocomplete="current-password" style="width:100%;box-sizing:border-box;padding:10px 12px;margin:0 0 6px;border:1px solid #475569;border-radius:9px;background:#0f172a;color:#f1f5f9;font-size:14px">' +
        '<div id="gate-msg" style="min-height:18px;font-size:12.5px;color:#f87171;margin:2px 0 10px"></div>' +
        '<button type="submit" id="gate-btn" style="width:100%;padding:11px;border:none;border-radius:9px;background:#2563eb;color:#fff;font-size:14px;font-weight:600;cursor:pointer">Đăng nhập</button>' +
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
        if (h === CRED_HASH) { unlock(); }
        else { btn.disabled = false; msg.textContent = "Sai tên đăng nhập hoặc mật khẩu."; pEl.value = ""; pEl.focus(); }
      }).catch(function () { btn.disabled = false; msg.textContent = "Lỗi kiểm tra đăng nhập."; });
    });
  }

  if (document.body) buildOverlay();
  else document.addEventListener("DOMContentLoaded", buildOverlay);
})();
