# Sổ tay điện tử CĐHA — bộ file website

Đây là **toàn bộ website**, chạy một mình không cần mạng. Chép cả thư mục
`website/` này đi đâu cũng được (USB, máy trạm, máy chủ) rồi mở là dùng.

## Cách mở

Nhấp đúp vào **`index.html`** → website mở trong trình duyệt (Chrome/Edge/Firefox).
Không cần cài gì, không cần internet.

## Cấu trúc (nội dung tách riêng khỏi giao diện)

```
website/
├─ index.html          ← khung trang (ít khi phải sửa)
├─ assets/
│  ├─ style.css        ← GIAO DIỆN: màu, cỡ chữ, bố cục
│  └─ app.js           ← LOGIC: tìm kiếm, lọc, hiển thị (không chứa nội dung)
└─ data/
   ├─ quy-trinh.js     ← NỘI DUNG các quy trình  ← SỬA Ở ĐÂY
   └─ cong-cu.js       ← dữ liệu 3 công cụ khẩn cấp
```

> **Nguyên tắc:** muốn sửa một thông số hay thêm quy trình → chỉ mở
> `data/quy-trinh.js`. Không cần đụng tới giao diện, **không sợ làm hỏng website**.

## Thêm 1 quy trình mới

Mở `data/quy-trinh.js` bằng Notepad (hoặc VS Code), chép một khối `{ ... }`
có sẵn rồi sửa lại. Mẫu:

```js
{
  id: "xq-vi-du",              // mã riêng, KHÔNG trùng quy trình khác
  phanHe: "xquang",            // "xquang" hoặc "ct-mri"
  modality: "X-quang",         // X-quang | Siêu âm | CT | MRI
  nhom: "Lồng ngực",           // nhóm để lọc
  ten: "Chụp X-quang ... ",    // tên hiển thị
  tuKhoa: ["phoi", "chest"],   // từ khóa phụ giúp tìm (có thể để [])
  thongSo: [
    { ten: "kV", giaTri: "70 kV" },
    { ten: "Khoảng cách bóng – phim", giaTri: "1 m" }
  ],
  noiDung: [
    { tieuDe: "Chuẩn bị", items: [ "Dòng 1", "Dòng 2" ] },
    { tieuDe: "Tiêu chuẩn ảnh đạt", items: [ "..." ] }
  ],
  nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
},
```

Lưu file → mở lại `index.html` (hoặc bấm F5) là thấy ngay.

### Mẹo tránh lỗi
- Mỗi khối `{ ... }` cách nhau bằng dấu **phẩy**.
- Chuỗi chữ phải nằm trong `"..."`. Nếu trong câu có dấu `"`, đổi thành `'...'`.
- Giữ nguyên tên các mục (`id`, `ten`, `thongSo`...), chỉ đổi phần giá trị.

## ⚠️ An toàn người bệnh
Không tự điền con số y khoa (kV, mAs, liều thuốc, ml/kg, eGFR…) nếu chưa lấy
từ tài liệu đã được **Trưởng khoa / KTV trưởng duyệt**. Các công cụ còn dùng
số mẫu đều có cảnh báo màu vàng và sẽ được điền thật ở **Giai đoạn D**.
