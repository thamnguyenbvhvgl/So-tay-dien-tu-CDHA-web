/* ============================================================
   Nhật ký tra cứu — Sổ tay điện tử CĐHA
   Ghi lại: ai (window.SOTAY_USER từ gate.js) mở mục nào, lúc nào.
   Hai kênh, chạy song song, lỗi mạng không ảnh hưởng giao diện:
     1) Bộ đếm Abacus (ẩn danh theo khóa, không cần đăng ký):
          i-<mã mục>            → số lượt mở từng kỹ thuật / công cụ
          u-<tên đăng nhập>     → tổng lượt tra cứu của từng người
          ud-<tên>-<YYYYMMDD>   → lượt của từng người theo ngày
        Xem tổng hợp tại trang thong-ke.html.
     2) Google Sheets qua Apps Script (có thời gian + tên + mục): dán URL
        "Ứng dụng web" vào LOG_URL bên dưới (xem Docs/Nhat_ky_tra_cuu_Google_Sheets.txt).
        Để trống = không gửi.
   Dùng: SOTAY_LOG(loai, id, ten, phanHe)   loai = "kt" (kỹ thuật) | "tab" (tab/công cụ)
   ============================================================ */
(function () {
  "use strict";
  var NS = "sotay-cdha-hvgl", BASE = "https://abacus.jasoncameron.dev";
  var LOG_URL = "";   // ← dán URL Apps Script (https://script.google.com/macros/s/.../exec)
  var seen = {};
  function ymd() {
    var d = new Date();
    return d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2);
  }
  function key(s) { return String(s || "").toLowerCase().replace(/[^a-z0-9_-]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60); }
  function hit(k) {
    try { fetch(BASE + "/hit/" + NS + "/" + k, { keepalive: true }).catch(function () {}); } catch (e) {}
  }
  window.SOTAY_LOG = function (loai, id, ten, phanHe) {
    if (!id) return;
    var u = window.SOTAY_USER || "";
    var k = loai + "|" + id, now = Date.now();
    if (seen[k] && now - seen[k] < 60000) return;   // cùng mục trong 60 giây: tính 1 lượt
    seen[k] = now;
    hit("i-" + key(id));
    if (u) { hit("u-" + key(u)); hit("ud-" + key(u) + "-" + ymd()); }
    if (LOG_URL) {
      var body = JSON.stringify({ t: new Date().toISOString(), u: u, loai: loai, id: id, ten: ten || "", phanHe: phanHe || "", page: location.pathname.replace(/^.*\//, "") });
      try {
        fetch(LOG_URL, { method: "POST", mode: "no-cors", keepalive: true, headers: { "Content-Type": "text/plain;charset=utf-8" }, body: body }).catch(function () {});
      } catch (e) {}
    }
  };
})();
