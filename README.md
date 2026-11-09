# Sổ tay điện tử CĐHA — bộ file website

Website tra cứu quy trình kỹ thuật X-quang · CT · MRI của Khoa Chẩn đoán hình ảnh,
Bệnh viện Hùng Vương Gia Lai. Trang tĩnh: chạy trên GitHub Pages, hoặc mở trực tiếp
từ USB / máy trạm (nhấp đúp `index.html`) — không cần cài đặt.

Có cổng đăng nhập dạng nhẹ (`assets/gate.js`): chỉ hạn chế truy cập giao diện,
**không** phải bảo mật máy chủ. Không đưa thông tin người bệnh vào các file dữ liệu.

## Cấu trúc

```
website/
├─ index.html           ← chuyển thẳng tới app.html
├─ app.html             ← GIAO DIỆN CHÍNH: thanh app, tìm kiếm, trang chủ, công cụ khẩn cấp, máy tính liều & eGFR
├─ chon-protocol.html   ← khung chọn protocol theo vùng (nhúng trong app.html; ?item=<id> mở thẳng 1 kỹ thuật)
├─ trang-v1.html        ← giao diện tìm kiếm cũ (v1)
├─ robots.txt           ← chặn công cụ tìm kiếm index
├─ assets/
│  ├─ style.css         ← màu (token sáng/tối), cỡ chữ, bố cục
│  ├─ app.js            ← logic dùng cho trang-v1 (render, ảnh mã hóa .enc)
│  └─ gate.js           ← cổng đăng nhập (chỉ chứa mã băm, KHÔNG ghi mật khẩu gốc)
├─ data/
│  ├─ quy-trinh.js      ← NỘI DUNG các quy trình  ← SỬA Ở ĐÂY
│  ├─ cong-cu.js        ← phản vệ, CPR, thoát mạch, liều cản quang, CCTA, bảng kiểm MRI
│  └─ benh-ly.js        ← ca lâm sàng tham khảo
└─ images/xq/           ← ảnh kỹ thuật: <id>-ct.* = chiều thế, <id>-phim.* = phim đạt
```

Trang nội bộ (KHÔNG đưa lên bản công khai): `tham-dinh.html`, `phieu-ban-giao.html`,
`kiem-tra.html` (tự kiểm tra dữ liệu), `mau-giao-dien.html`.

## Thêm / sửa một quy trình

Mở `data/quy-trinh.js`, chép một khối `{ ... }` có sẵn rồi sửa:

```js
{
  id: "xq-vi-du",              // mã riêng, KHÔNG trùng; tiền tố xq- / ct- / mri-
  phanHe: "xquang",            // "xquang" hoặc "ct-mri"
  modality: "X-quang",         // X-quang | CT | MRI
  nhom: "Lồng ngực",           // phải đúng tên nhóm đang dùng (quyết định ô vùng hiển thị)
  ten: "Chụp X-quang ...",
  tuKhoa: ["phoi", "chest"],   // không dấu, giúp tìm kiếm
  thongSo: [ { ten: "kV / mAs", giaTri: "..." } ],
  noiDung: [ { tieuDe: "Chuẩn bị", items: ["..."] } ],
  nguon: "Tên tài liệu nguồn",
  ngayDuyet: "08/11/2026",     // (tùy chọn) có → hiện nhãn "✓ Đã duyệt <ngày>"
  trangThai: "tham-khao",      // (tùy chọn) → nhãn "Tham khảo"
  an: true                     // (tùy chọn) ẩn khỏi giao diện khi chưa duyệt
},
```

Lưu file → F5. Sau khi sửa, mở `kiem-tra.html` để quét lỗi (thiếu trường, trùng mã, ảnh hỏng).

## Cập nhật lên web công khai

Không chép tay. Dùng script (Git Bash) với bản clone repo `So-tay-dien-tu-CDHA-web`:

```
tools/sync-public.sh <đường-dẫn-clone>
```

Script tự loại trang nội bộ, ảnh ca bệnh gốc, đổi ảnh ca sang bản `.enc`, xóa file đã bỏ,
và chặn nếu `gate.js` còn ghi mật khẩu. Kiểm `git diff` rồi mới commit + push.
Khi đổi CSS/HTML: tăng token `?v=` (một số chung cho mọi trang).

## ⚠️ An toàn người bệnh
Không tự điền con số y khoa (kV, mAs, liều thuốc, mL/kg, eGFR…) nếu chưa lấy từ tài liệu
nguồn rõ ràng và được Trưởng khoa / KTV trưởng duyệt. Máy CT/MRI của khoa không có
tính năng perfusion — không thêm nội dung tưới máu.
