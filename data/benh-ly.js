/* ============================================================================
   NGÂN HÀNG CA LÂM SÀNG / BỆNH LÝ  —  SỔ TAY ĐIỆN TỬ CĐHA
   ----------------------------------------------------------------------------
   ĐÂY LÀ FILE THAM KHẢO. Chứa các ca lâm sàng và dấu hiệu bệnh lý trên
   X-quang / CT / MRI để KTV đối chiếu khi chụp. KHÔNG phải quy trình/SOP.

   ⚠️ TOÀN BỘ nội dung mục này là THAM KHẢO, chờ Bác sĩ chẩn đoán hình ảnh /
      Trưởng khoa duyệt trước khi dùng để kết luận. KTV không kết luận chẩn đoán.

   CÁCH THÊM 1 CA (chép 1 khối { ... } rồi sửa):
     - id        : mã riêng, không trùng (vd "bl-ct-hcc")
     - phanHe    : luôn là "benh-ly"
     - modality  : "X-quang" | "CT" | "MRI"  (hiện huy hiệu màu + để tìm)
     - nhom      : nhóm cơ quan để lọc — xem DANH SÁCH NHÓM bên dưới
     - ten       : tên bệnh lý / ca
     - tuKhoa    : từ khóa phụ giúp tìm (mảng chuỗi)
     - thongSo   : vài "đặc điểm khóa" ngắn — mảng { ten, giaTri }. Để [] nếu chưa có.
     - noiDung   : phần thân — mảng mục { tieuDe, items: [ ... ] }
     - hinhAnh   : mảng ảnh ca — mỗi ảnh { src, caption, nguon }
                     • src   : đường dẫn ảnh, vd "images/benh-ly/ten-anh.png"
                               ĐỂ TRỐNG ("") => hiện ô "Chưa có ảnh" để chèn sau.
                     • caption: chú thích ảnh
                     • nguon : NGUỒN ẢNH (bắt buộc ghi) — ca của khoa hay sách nào, trang mấy.
     - nguon     : nguồn tài liệu tham khảo của cả ca.

   DANH SÁCH NHÓM thống nhất (để lọc gọn):
     "Thần kinh - Sọ não" · "Đầu - Mặt - Cổ" · "Lồng ngực" · "Tim - Mạch máu"
     "Tiêu hóa - Gan mật" · "Tiết niệu - Sinh dục" · "Cơ xương khớp" · "Cột sống"

   ⚠️ KHÔNG bịa số đo / tỷ trọng HU cụ thể của người bệnh. Mô tả dấu hiệu
      kinh điển thì ghi rõ nguồn sách; số liệu của ca thật lấy từ hồ sơ ca đó.
   ============================================================================ */

window.SOTAY_BENHLY = [

  /* ---- CA CÓ ẢNH THỰC CỦA KHOA (mẫu đầy đủ) ------------------------------ */
  {
    id: "bl-cta-chi-duoi",
    phanHe: "benh-ly",
    modality: "CT",
    nhom: "Tim - Mạch máu",
    ten: "CTA động mạch chi dưới — ca minh họa kỹ thuật",
    tuKhoa: ["cta", "mach mau", "chi duoi", "dong mach", "hep tac mach", "peripheral"],
    thongSo: [
      { ten: "Kỹ thuật", giaTri: "CTA có tiêm thuốc, dựng MIP / VRT toàn bộ cây động mạch chi dưới" },
      { ten: "Điểm cần đọc", giaTri: "Vị trí hẹp / tắc, tuần hoàn bàng hệ, tái lưu thông đoạn xa" }
    ],
    noiDung: [
      { tieuDe: "Bối cảnh", items: [
        "Ca minh họa quy trình CTA động mạch chi dưới do khoa thực hiện, dùng để đối chiếu kỹ thuật dựng hình.",
        "Mục tiêu KTV: canh thời điểm thuốc tối ưu ở đoạn xa, phủ hết từ ĐM chủ bụng tới bàn chân, dựng MIP/VRT đủ các bình diện."
      ]},
      { tieuDe: "Dấu hiệu cần quan sát", items: [
        "Đoạn hẹp: giảm khẩu kính lòng mạch ngấm thuốc; đoạn tắc: mất tín hiệu thuốc trong lòng mạch.",
        "Tuần hoàn bàng hệ quanh đoạn tắc.",
        "Chất lượng thì thuốc ở đoạn xa (khoeo, chày, mu chân) — yếu tố quyết định giá trị phim."
      ]},
      { tieuDe: "Lưu ý kỹ thuật", items: [
        "Buộc nhẹ 2 ngón chân cái để cố định, giảm xảo ảnh cử động.",
        "Bolus tracking đặt ở đoạn cuối ĐM chủ bụng; theo dõi để không quét quá nhanh vượt cột thuốc ở đoạn xa."
      ]}
    ],
    hinhAnh: [
      { src: "",
        caption: "Ca bệnh thật của khoa — ảnh chỉ xem ở bản nội bộ (mở bằng mật khẩu).",
        nguon: "Ca lâm sàng của khoa CĐHA – BV Hùng Vương Gia Lai (CN. Nguyễn Hồng Thắm)." }
    ],
    nguon: "Ca lâm sàng khoa CĐHA – BV Hùng Vương Gia Lai."
  },

  /* ---- CÁC KHUNG CA MẪU (chờ chèn ảnh được phép dùng + BS duyệt) ---------- */
  {
    id: "bl-ct-xuat-huyet-nao",
    phanHe: "benh-ly",
    modality: "CT",
    nhom: "Thần kinh - Sọ não",
    ten: "Xuất huyết trong não (CT không tiêm)",
    tuKhoa: ["xuat huyet", "chay mau nao", "mau tu", "hemorrhage", "dot quy"],
    thongSo: [
      { ten: "Thì chụp", giaTri: "CT sọ não KHÔNG tiêm thuốc (cấp cứu đột quỵ)" },
      { ten: "Dấu hiệu khóa", giaTri: "Khối tăng tỷ trọng tự nhiên trong nhu mô / khoang" }
    ],
    noiDung: [
      { tieuDe: "Dấu hiệu điển hình", items: [
        "Ổ tăng tỷ trọng tự nhiên (máu tươi) trong nhu mô não, não thất hoặc khoang dưới nhện.",
        "Có thể kèm phù quanh ổ, hiệu ứng choán chỗ, đè đẩy đường giữa."
      ]},
      { tieuDe: "Ý nghĩa với KTV", items: [
        "Ưu tiên chụp nhanh, không tiêm ở giai đoạn cấp; đảm bảo không bỏ sót lát mỏng nền sọ.",
        "Báo bác sĩ ngay khi thấy khối tăng tỷ trọng rộng / đè đẩy đường giữa."
      ]}
    ],
    hinhAnh: [
      { src: "", caption: "CT xuất huyết trong não — ô tăng tỷ trọng tự nhiên.",
        nguon: "CHÈN ẢNH: ca của khoa hoặc trích Learning Radiology (W. Herring) — ghi rõ trang." }
    ],
    nguon: "Tham khảo: Learning Radiology – Recognizing the Basics (W. Herring); dấu hiệu kinh điển."
  },
  {
    id: "bl-ct-thuyen-tac-phoi",
    phanHe: "benh-ly",
    modality: "CT",
    nhom: "Lồng ngực",
    ten: "Thuyên tắc động mạch phổi (CTPA)",
    tuKhoa: ["thuyen tac phoi", "ctpa", "pe", "embolism", "dong mach phoi"],
    thongSo: [
      { ten: "Kỹ thuật", giaTri: "CTPA — bolus tracking tại thân ĐM phổi" },
      { ten: "Dấu hiệu khóa", giaTri: "Khuyết thuốc trong lòng động mạch phổi" }
    ],
    noiDung: [
      { tieuDe: "Dấu hiệu điển hình", items: [
        "Khuyết thuốc (filling defect) trong lòng động mạch phổi khi đang ngấm thuốc tối ưu.",
        "Thì thuốc đúng ĐM phổi là yếu tố quyết định — canh bolus tại thân ĐM phổi."
      ]},
      { tieuDe: "Ý nghĩa với KTV", items: [
        "Sai thì thuốc (quá sớm/quá muộn) dễ gây dương/âm tính giả — cần chụp lại đúng thì.",
        "Nín thở đúng nhịp để giảm xảo ảnh cử động vùng đáy phổi."
      ]}
    ],
    hinhAnh: [
      { src: "", caption: "CTPA — khuyết thuốc trong lòng động mạch phổi.",
        nguon: "CHÈN ẢNH: ca của khoa hoặc trích Fundamentals of Body CT (Webb) — ghi rõ trang." }
    ],
    nguon: "Tham khảo: Fundamentals of Body CT (Webb, Brant, Major)."
  },
  {
    id: "bl-ct-hcc-gan",
    phanHe: "benh-ly",
    modality: "CT",
    nhom: "Tiêu hóa - Gan mật",
    ten: "Ung thư biểu mô tế bào gan — HCC (CT 3 pha)",
    tuKhoa: ["hcc", "ung thu gan", "u gan", "3 pha", "wash out", "bat thuoc"],
    thongSo: [
      { ten: "Kỹ thuật", giaTri: "CT gan 3 pha (động mạch – tĩnh mạch cửa – muộn)" },
      { ten: "Dấu hiệu khóa", giaTri: "Bắt thuốc mạnh thì ĐM, thải thuốc (wash-out) thì muộn" }
    ],
    noiDung: [
      { tieuDe: "Dấu hiệu điển hình", items: [
        "Khối bắt thuốc mạnh ở thì động mạch.",
        "Thải thuốc (wash-out) ở thì tĩnh mạch cửa / thì muộn, có thể thấy vỏ bao ngấm thuốc muộn."
      ]},
      { tieuDe: "Ý nghĩa với KTV", items: [
        "Phải đủ và đúng cả 3 pha — thiếu một pha làm mất dấu hiệu đặc trưng.",
        "Canh thời điểm thì động mạch chuẩn (bolus tracking) là then chốt."
      ]}
    ],
    hinhAnh: [
      { src: "", caption: "HCC — bắt thuốc thì ĐM và wash-out thì muộn.",
        nguon: "CHÈN ẢNH: ca của khoa hoặc trích Fundamentals of Body CT (Webb) — ghi rõ trang." }
    ],
    nguon: "Tham khảo: Fundamentals of Body CT (Webb, Brant, Major)."
  },
  {
    id: "bl-ct-soi-nieu-quan",
    phanHe: "benh-ly",
    modality: "CT",
    nhom: "Tiết niệu - Sinh dục",
    ten: "Sỏi niệu quản (CT hệ niệu không tiêm)",
    tuKhoa: ["soi nieu quan", "soi than", "ure", "stone", "he nieu", "than ung nuoc"],
    thongSo: [
      { ten: "Kỹ thuật", giaTri: "CT hệ niệu không tiêm, lát mỏng" },
      { ten: "Dấu hiệu khóa", giaTri: "Nốt tăng tỷ trọng trong lòng niệu quản + giãn đài bể thận phía trên" }
    ],
    noiDung: [
      { tieuDe: "Dấu hiệu điển hình", items: [
        "Nốt tăng tỷ trọng trong lòng niệu quản.",
        "Giãn niệu quản và đài – bể thận phía trên viên sỏi; có thể thâm nhiễm mỡ quanh thận."
      ]},
      { tieuDe: "Ý nghĩa với KTV", items: [
        "Lát mỏng liên tục để không bỏ sót sỏi nhỏ.",
        "Thường không cần tiêm thuốc để phát hiện sỏi."
      ]}
    ],
    hinhAnh: [
      { src: "", caption: "Sỏi niệu quản — nốt tăng tỷ trọng, thận ứ nước phía trên.",
        nguon: "CHÈN ẢNH: ca của khoa (bộ ảnh sỏi hiện có) — xác nhận nguồn trước khi dùng." }
    ],
    nguon: "Tham khảo: tài liệu triệu chứng CT khoa CĐHA."
  },
  {
    id: "bl-xq-tran-khi-mang-phoi",
    phanHe: "benh-ly",
    modality: "X-quang",
    nhom: "Lồng ngực",
    ten: "Tràn khí màng phổi (X-quang ngực)",
    tuKhoa: ["tran khi", "mang phoi", "pneumothorax", "xep phoi", "nguc thang"],
    thongSo: [
      { ten: "Tư thế", giaTri: "X-quang ngực thẳng, tốt nhất thì hít vào (hoặc thở ra nếu nghi ngờ)" },
      { ten: "Dấu hiệu khóa", giaTri: "Đường viền màng phổi tạng + vùng sáng vô mạch ngoại vi" }
    ],
    noiDung: [
      { tieuDe: "Dấu hiệu điển hình", items: [
        "Thấy bờ lá tạng màng phổi, bên ngoài là vùng tăng sáng không còn vân mạch máu phổi.",
        "Tràn khí lượng nhiều có thể đẩy trung thất sang bên đối diện (tràn khí áp lực — cấp cứu)."
      ]},
      { tieuDe: "Ý nghĩa với KTV", items: [
        "Nghi tràn khí ít: cân nhắc chụp thêm thì thở ra để dễ thấy.",
        "Thấy dấu hiệu đẩy trung thất: báo bác sĩ ngay (nguy cơ tràn khí áp lực)."
      ]}
    ],
    hinhAnh: [
      { src: "", caption: "Tràn khí màng phổi — đường viền màng phổi tạng, vùng vô mạch.",
        nguon: "CHÈN ẢNH: ca của khoa hoặc trích Learning Radiology (W. Herring) — ghi rõ trang." }
    ],
    nguon: "Tham khảo: Learning Radiology – Recognizing the Basics (W. Herring)."
  }

];
