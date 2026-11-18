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
    "phong":    "2359c48fcd7800dd9c09cbc94ec5490d387af6d12ff3bda81452a4fd29523a0c",
    "tung":     "32d54c59fc5e7c1c76d3e379a44d33123075d8c9ac80032cc973e3d026151e9c",
    "tinh":     "c25a4e23020dc0ac0c32ffdf88737a27dde7ebb7135bd1f31eedbbc0f7ea1110",
    "vinh":     "e07cd0bf04465f76a0dab380cec74a65a0a7aed49e8c1383b7eaf1788da21cd6",
    "tho":      "bd827567c663d13a4d8972171144869cd21a01f23a05d66b1f6edfcd529cffe3",
    "nhan":     "12f72ebe1ef7c9f338fec2bdbf18633f6e39b8e7aaed08ddab430cf0cd53a284",
    "luyen":    "444f66445edc4991d35a405c34a4411a25ddcd3ef38c2e5acbc2e562eb307284",
    "tham":     "d1df9a85d523fdaf8b67d9a2734f2add22cf44bec01cf8ee927eab4b0813157b",
    "nguyetha": "32314ec7ddda50cc326a4b9b76a6bb10e79342901460bb538a8401bda6374c4a",
    "thang":    "4764699a19f536d89476df8699e17d116bab9a636bce694d9f6778e6b7ef6cb2",
    "xuanha":   "e8a74c94bba8ac6640793e1a628f65ffe9a50d62bc66df2983c5bb7aa162a0ab",
    "thao":     "94687e49dfb70216ad01c6f8c3f45b1ca13cdb9fa138b5c81b5007d5ff2193c2",
    "danh":     "afba38c89106112b4b0a8324c136cea051634845fc4495ad95cbe26b6f4ff7d2",
    "phu":      "9cb1f4cca33d8e8486f5b96e572283908e0edb6e63938f5221c968cdc93f9df5",
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
