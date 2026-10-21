/* ============================================================================
   NỘI DUNG CÁC QUY TRÌNH  —  SỔ TAY ĐIỆN TỬ CĐHA
   ----------------------------------------------------------------------------
   ĐÂY LÀ FILE NỘI DUNG. Sửa quy trình ở ĐÂY, không cần đụng tới giao diện.
   Mỗi quy trình là một khối { ... } nằm giữa cặp ngoặc vuông [ ... ] bên dưới.

   CÁCH THÊM / SỬA 1 QUY TRÌNH (xem thêm README.md):
     - id        : mã riêng, không trùng nhau (vd "xq-so-thang")
     - phanHe    : "xquang"  hoặc  "ct-mri"
     - modality  : "X-quang" | "Siêu âm" | "CT" | "MRI"
     - nhom      : nhóm để lọc (vd "Sọ - Mặt", "Lồng ngực", "Sọ não"...)
     - ten       : tên hiển thị
     - tuKhoa    : các từ khóa phụ giúp tìm kiếm (mảng chuỗi), có thể để []
     - thongSo   : BẢNG THÔNG SỐ nổi bật — mảng { ten, giaTri }. Để [] nếu chưa có.
     - noiDung   : phần thân — mảng các mục { tieuDe, items: [ ... ] }
     - nguon     : lấy từ tài liệu nào (để truy xuất)

   ⚠️ KHÔNG tự bịa thông số y khoa (kV, mAs, liều thuốc...). Chỉ nhập số
      lấy từ tài liệu đã được Trưởng khoa / KTV trưởng duyệt.
   ============================================================================ */

window.SOTAY_QUYTRINH = [

  /* ---------------------------------------------------------------- X-QUANG */
  {
    id: "xq-so-thang",
    phanHe: "xquang",
    modality: "X-quang",
    nhom: "Sọ - Mặt",
    ten: "Chụp X-quang sọ thẳng",
    tuKhoa: ["so", "dau", "hop so", "chau dau", "skull ap"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "24 × 30 cm và đặt theo chiều dài" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 10–15 mAs (bề dày 18–21 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn để tia trung tâm đi xuyên qua u trán giữa và thẳng góc với mặt phim tại trung tâm" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương trán, xoang trán, hốc mắt, xoang sàng và bờ xương đá."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm sấp trên bàn chụp hình với mặt phẳng dọc giữa của thân mình nằm ngay đường giữa của bàn.",
        "Hai khuỷu tay bệnh nhân gập lại, đặt úp hai bàn tay ở hai bên đầu tại một vị trí thuận lợi và thoải mái.",
        "Điều chỉnh hai vai bệnh nhân cùng nằm trên mặt phẳng ngang.",
        "Đặt đầu bệnh nhân trên cát xét với mũi và trán tiếp xúc với cát xét, điều chỉnh đầu sao cho mặt phẳng dọc giữa và đường hốc mắt – lỗ tai vuông góc với cát xét.",
        "Điều chỉnh đầu bệnh nhân và cát xét sao cho u trán giữa nằm ngay trung tâm cát xét.",
        "Để giữ yên tư thế chúng ta có thể kê cằm bệnh nhân bằng chính nắm tay bệnh nhân hoặc bằng chiếc khăn tay xếp lại."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn để tia trung tâm đi xuyên qua u trán giữa và thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hình hộp sọ cân xứng và thấy rõ ràng trên phim.",
        "Bờ trên xương đá nằm giữa hốc mắt.",
        "Thấy rõ bản sọ ngoài.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-so-thang-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-so-thang-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-so-nghieng",
    phanHe: "xquang",
    modality: "X-quang",
    nhom: "Sọ - Mặt",
    ten: "Chụp X-quang sọ nghiêng",
    tuKhoa: ["so nghieng", "dau nghieng", "skull lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "24 × 30 cm và đặt theo chiều dài" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 10–15 mAs (bề dày 13–17 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay một điểm nằm trên trung điểm của đường hốc mắt – lỗ tai 2" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương trán, xương đỉnh, xương thái dương, xoang hàm và xương mặt."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm sấp trên bàn chụp hình với mặt phẳng dọc giữa của thân mình nằm ngay đường giữa của bàn.",
        "Đặt cánh tay bên cần chụp đuôi xuôi theo thân mình, đồng thời khuỷu tay phía đối diện gập lại với bàn tay úp trên bàn tại một vị trí thuận lợi và thoải mái.",
        "Đặt đầu bệnh nhân trên cát xét ở đúng thế nghiêng với bên cần chụp tiếp xúc sát cát xét, điều chỉnh đầu bệnh nhân sao cho mặt phẳng dọc giữa song song với cát xét, đường liên đồng tử vuông góc với cát xét.",
        "Điều chỉnh đầu bệnh nhân và cát xét sao cho điểm nằm trên trung điểm đường hốc mắt – lỗ tai 2,5 cm tại trung tâm cát xét hoặc định đầu nằm dưới bờ trên phim 5 cm.",
        "Để giữ yên chiều thế chúng ta có thể kê dưới cằm bệnh nhân bằng chính nắm tay bệnh nhân hoặc bằng chiếc khăn tay xếp lại."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay một điểm nằm trên trung điểm của đường hốc mắt – lỗ tai 2,5 cm, tia trung tâm đi xuyên qua điểm này và tới cát xét tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ toàn bộ hộp sọ.",
        "Khoảng cách giữa hai cành của xương hàm dưới ≤ 1 cm.",
        "Đường bờ hố yên không có bờ đôi.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-so-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-so-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },


  {
    id: "xq-long-nguc-thang",
    phanHe: "xquang",
    modality: "X-quang",
    nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang lồng ngực thẳng (phổi thẳng)",
    tuKhoa: ["phoi", "nguc", "chest", "long nguc", "cxr"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "30 × 40 cm" },
      { ten: "kV / mAs", giaTri: "52 kVp · 5 mAs (bề dày 21–24 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn sao cho tia trung tâm đi qua bờ trên đốt sống ngực thứ 4 trong trường hợp chụp phổi hoặc nơi bờ trên đốt sống ngực thứ 6 trong trường hợp chụp tim và động mạch chủ. Tia trung tâm thẳng góc với mặt phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Tim, phổi, động mạch và xương sườn. Đây là một tư thế căn bản dùng để chụp hình phổi và tim."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân đứng hoặc ngồi với mặt quay về phía giá giữ cassette.",
        "Nếu bệnh nhân đứng thì sức nặng của cơ thể phải được phân phối đồng đều trên cả hai bàn chân.",
        "Cho bệnh nhân ưỡn ngực về phía trước để mặt trước ngực tiếp xúc sát mặt phim.",
        "Điều chỉnh bệnh nhân sao cho bình diện giữa của thân mình nằm ngay đường giữa của phim, đoạn đặt cằm họ lên trên cassette với bình diện của đầu ở vị thế thẳng đứng.",
        "Dặn bệnh nhân chống hai bàn tay lên hông với lòng bàn tay xoay ra ngoài, đoạn dùng sức xoay hai vai về phía trước cho đến khi chúng tiếp xúc sát mặt phim với mục đích đẩy xương bả vai ra khỏi lồng xương sườn.",
        "Điều chỉnh hai vai sao cho chúng cùng nằm trên một bình diện ngang.",
        "Điều chỉnh cassette sao cho mỏm cùng vai nằm dưới bờ trên của cassette 5 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn sao cho tia trung tâm đi qua bờ trên đốt sống ngực thứ 4 trong trường hợp chụp phổi hoặc nơi bờ trên đốt sống ngực thứ 6 trong trường hợp chụp tim và động mạch chủ. Tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy đầy đủ hai trường phổi (thấy rõ cả góc sườn hoành);",
        "Thấy rõ đường bờ cột sống phía sau.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-longnguc-thang-ct.jpg",   caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-longnguc-thang-phim.jpg", caption: "Phim phổi thẳng — mẫu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  /* ------------------------------------------------- X-QUANG CHI TRÊN --- */
  {
    id: "xq-bantay-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang bàn tay thẳng (sau trước)",
    tuKhoa: ["ban tay", "hand pa", "xuong ban tay", "chi tren"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "40 kVp · 2,5 mAs (bề dày 3–5 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay khớp bàn ngón thứ 3" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương bàn tay, xương ngón tay, xương cổ tay và mô mềm xung quanh."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bàn tay bệnh nhân nằm trên phim với bàn tay úp xuống, các ngón tay duỗi thẳng, xòe ra và tiếp xúc sát mặt phim.",
        "Điều chỉnh bàn tay để khớp bàn ngón thứ 3 nằm ngay trung tâm phim.",
        "Giữ bất động cẳng tay bằng cách dùng một túi cát đặt ngang qua cổ tay bệnh nhân."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay khớp bàn ngón thứ 3, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy toàn bộ xương bàn tay, bao gồm cả các ngón tay và khớp cổ tay.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-bantay-thang-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-bantay-thang-phim.jpg", caption: "Phim X-quang bàn tay thẳng — mẫu đạt" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-bantay-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang bàn tay nghiêng",
    tuKhoa: ["ban tay nghieng", "hand lateral", "di vat ban tay"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs (bề dày 6–10 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay khớp bàn ngón" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương bàn tay, xương ngón tay, xương ngón cái ở tư thế sau trước thẳng và đặc biệt hữu ích để xác định dị vật ở bàn tay."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt nghiêng bàn tay bệnh nhân trên phim với cạnh xương trụ tiếp xúc sát phim, các ngón tay duỗi thẳng và lòng bàn tay thẳng góc với mặt phim, ngón cái thẳng góc với lòng bàn tay.",
        "Điều chỉnh bàn tay thế nào để khớp bàn ngón nằm ngay trung tâm phim và đường dài của cassette song song với trục dài của bàn tay và cẳng tay.",
        "Kê ngón cái trên một vật không cản tia để giữ cho nó khỏi rung động.",
        "Đặt túi cát ngang qua cẳng tay để giữ yên tư thế."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay khớp bàn ngón, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hình rõ nét.",
        "Xác định rõ dị vật cản quang ở bàn tay (nếu có).",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-bantay-nghieng-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-bantay-nghieng-phim.jpg", caption: "Phim bàn tay nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-bantay-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang bàn tay chếch",
    tuKhoa: ["ban tay chech", "hand oblique"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "42 kVp · 2,5 mAs (bề dày 4–6 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay khớp bàn ngón thứ 3" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương bàn tay, xương ngón tay và mô mềm xung quanh."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bàn tay bệnh nhân chếch trên phim với các ngón tay xòe ra và điều chỉnh thế nào để những khớp bàn ngón hợp với mặt phim một góc 45°.",
        "Chúng ta có thể dùng bông gòn chêm vào giữa các ngón tay để chúng xòe ra theo ý muốn.",
        "Đặt khuỷu tay bệnh nhân trên bàn chụp hình để giúp cho việc đặt bàn tay được dễ dàng và tạo sự thoải mái cho bệnh nhân."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay khớp bàn ngón thứ 3, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy toàn bộ xương bàn tay, bao gồm cả các ngón tay và khớp cổ tay.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-bantay-chech-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-bantay-chech-phim.jpg", caption: "Phim bàn tay chếch — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-bantay-ngoncai",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang ngón cái",
    tuKhoa: ["ngon cai", "thumb", "ngon tay cai"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "40 kVp · 2,5 mAs (bề dày 3–5 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay khớp bàn ngón thứ I" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương ngón cái."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bàn tay bệnh nhân trên phim với cẳng tay xoay vào trong thế nào để mặt sau ngón cái và mé ngoài ngón trỏ tiếp xúc sát phim và lòng bàn tay thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay khớp bàn ngón thứ I, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Khớp cổ bàn tay và khớp bàn ngón không chồng nhau trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-bantay-ngoncai-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-bantay-ngoncai-phim.jpg", caption: "Phim ngón cái — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotay-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cổ tay thẳng (sau trước)",
    tuKhoa: ["co tay", "wrist pa", "xuong co tay"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "42 kVp · 2,5 mAs (bề dày 4–6 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung điểm của đường thẳng nối liền hai mấu trâm (tức ngay xương thuyền)" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương cổ tay, đầu dưới xương trụ và xương quay, xương bàn tay và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bàn tay bệnh nhân nằm trên phim với lòng bàn tay úp xuống.",
        "Điều chỉnh bàn tay bệnh nhân thế nào để trung điểm của đường thẳng nối liền hai mỏm trâm xương trụ và xương quay nằm ngay trung tâm phim.",
        "Bảo bệnh nhân nắm bàn tay lại, đặt khuỷu tay bệnh nhân trên mặt bàn và dùng túi cát đặt lên cẳng tay để giữ yên chiều thế."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung điểm của đường thẳng nối liền hai mấu trâm (tức ngay xương thuyền), tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy toàn bộ cổ tay, bao gồm các xương bàn, xương cổ tay và đầu dưới hai xương cẳng tay.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotay-thang-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotay-thang-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotay-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cổ tay nghiêng",
    tuKhoa: ["co tay nghieng", "wrist lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs (bề dày 4–8 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương cổ tay, đầu dưới xương trụ, xương quay và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bàn tay bệnh nhân trên phim thật đúng ở tư thế nghiêng với các ngón tay duỗi thẳng và mấu trâm xương trụ nằm ngay trung tâm phim.",
        "Xoay cẳng tay ngả về phía sau một chút (khoảng 5°) để hai mấu trâm nằm chồng lên nhau.",
        "Nên đặt khuỷu tay bệnh nhân trên bàn để tạo sự thoải mái."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy toàn bộ cổ tay, bao gồm các xương bàn, xương cổ tay và đầu dưới hai xương cẳng tay.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotay-nghieng-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotay-nghieng-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotay-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cổ tay chếch",
    tuKhoa: ["co tay chech", "wrist oblique", "xuong thang"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "42 kVp · 2,5 mAs (bề dày 4–6 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay xương thuyền" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương cổ tay, đầu dưới xương trụ, xương quay và mô mềm. Tư thế này có giá trị đặc biệt trong việc quan sát khớp xương giữa xương thang và xương bàn tay thứ nhất."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bàn tay bệnh nhân nằm trên phim với cổ tay ngả về phía trước hợp với mặt phim một góc 45° và xương thuyền nằm ngay trung tâm phim.",
        "Kê bàn tay bệnh nhân trên một vật không cản tia để giữ yên tư thế."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay xương thuyền, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy toàn bộ bàn tay bao gồm các xương bàn tay, xương cổ tay và đầu dưới hai xương cẳng tay.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotay-chech-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-cotay-chech-phim.jpg", caption: "Phim cổ tay chếch — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotay-xuong-thuyen",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cổ tay xem xương thuyền",
    tuKhoa: ["xuong thuyen", "scaphoid", "co tay xuong thuyen"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "42 kVp · 2,5 mAs (bề dày 4–6 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung điểm của đường thẳng nối liền hai mấu trâm xương quay và xương trụ với đầu đèn được bẻ về phía cánh tay 45° và về phía xương trụ 45°" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương thuyền rất rõ ràng."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bàn tay bệnh nhân trên phim với lòng bàn tay tiếp xúc sát mặt phim, các ngón tay duỗi thẳng và xương thuyền nằm trên trung tâm phim 5cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung điểm của đường thẳng nối liền hai mấu trâm xương quay và xương trụ với đầu đèn được bẻ về phía cánh tay 45° và về phía xương trụ 45°."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotay-xuongthuyen-ct.jpg", caption: "Tư thế (nghiêng trụ) & hướng tia (Clark's)" },
      { src: "images/xq/xq-cotay-xuongthuyen-phim.jpg", caption: "Phim xương thuyền — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cangtay-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cẳng tay thẳng (trước sau)",
    tuKhoa: ["cang tay", "forearm ap", "xuong tru", "xuong quay"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm hay 15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs (bề dày 6–9 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa cẳng tay" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương trụ, xương quay và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt cẳng tay bệnh nhân nằm trên phim với cánh tay duỗi thẳng, lòng bàn tay lật ngửa và mặt sau cẳng tay tiếp xúc sát phim.",
        "Điều chỉnh cẳng tay sao cho toàn bộ chiều dài của nó nằm trọn trên phim.",
        "Có thể dùng túi cát đặt lên bàn tay và cánh tay để giữ bất động cẳng tay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa cẳng tay, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy toàn bộ xương trụ (1) và xương quay (2) chúng không bị chồng nhau, và thấy ít nhất một khớp khuỷu hoặc khớp cổ tay.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cangtay-thang-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-cangtay-thang-phim.jpg", caption: "Phim cẳng tay trước sau — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cangtay-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cẳng tay nghiêng",
    tuKhoa: ["cang tay nghieng", "forearm lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm hay 15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs (bề dày 8–11 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa cẳng tay" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương trụ, xương quay và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt cẳng tay bệnh nhân nằm trên phim với khuỷu tay gập lại một góc 90° và gờ trong cẳng tay (tức gờ xương trụ) tiếp xúc sát phim.",
        "Từ vị trí nằm nghiêng chúng ta ngả bàn tay về phía sau một chút khoảng 5° để cho mấu trâm trụ và quay nằm chồng lên nhau.",
        "Điều chỉnh cẳng tay sao cho toàn bộ chiều dài của nó nằm trọn trên phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa cẳng tay, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Xương quay và xương trụ đứng ở tư thế nghiêng (1/3 dưới của chúng chồng nhau).",
        "Khớp khuỷu và khớp cổ tay đứng ở tư thế nghiêng.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cangtay-nghieng-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-cangtay-nghieng-phim.jpg", caption: "Phim cẳng tay nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  /* ------------------------------------------ X-QUANG KHUỶU – CÁNH TAY ------------------------------------------ */

  {
    id: "xq-khuyu-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang khuỷu tay thẳng (trước sau)",
    tuKhoa: ["khuyu", "khuyu tay", "elbow ap", "khop khuyu"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs (bề dày 6–9 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Khớp khuỷu, đầu trên xương trụ và xương quay, đầu dưới xương cánh tay và mô mềm xung quanh."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt khuỷu tay bệnh nhân duỗi thẳng trên phim với mặt sau cẳng tay và cánh tay tiếp xúc sát phim và bàn tay lật ngửa.",
        "Điều chỉnh tay bệnh nhân sao cho mỏm trên lồi cầu trong nằm dưới trung tâm phim 2 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ khoảng khớp khuỷu (1) và nó ngay ở trung tâm phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-khuyu-truocsau-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-khuyu-truocsau-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },



  {
    id: "xq-khuyu-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang khuỷu tay nghiêng",
    tuKhoa: ["khuyu nghieng", "elbow lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs (bề dày 7–10 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Khớp khuỷu, đầu trên xương trụ và xương quay, đầu dưới xương cánh tay và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt khuỷu tay bệnh nhân trên phim với khuỷu gập lại một góc 90° và gờ trong của cẳng tay và cánh tay tiếp xúc sát phim và lòng bàn tay thẳng góc với mặt phim.",
        "Điều chỉnh khuỷu tay bệnh nhân sao cho các mỏm trên lồi cầu xương cánh tay nằm chồng lên nhau ngay trung tâm phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ đi qua khớp khuỷu và thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-khuyu-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-khuyu-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-khuyu-nghieng-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-canhtay-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang xương cánh tay thẳng (trước sau)",
    tuKhoa: ["canh tay", "xuong canh tay", "humerus ap"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm hay 15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "48 kVp · 2,5 mAs (bề dày 7–10 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa xương cánh tay" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương cánh tay và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt cẳng tay bệnh nhân nằm trên bàn chụp hình với mặt sau cánh tay tiếp xúc sát phim và bàn tay lật ngửa.",
        "Điều chỉnh cánh tay sao cho toàn bộ chiều dài của nó nằm trọn trên phim.",
        "Để giúp mặt sau cánh tay tiếp xúc sát phim hơn, ta nhấc vai đối diện lên cao đoạn dùng túi cát kê dưới vai để duy trì góc độ mong muốn."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa xương cánh tay, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-canhtay-truocsau-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-canhtay-truocsau-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-canhtay-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang xương cánh tay nghiêng",
    tuKhoa: ["canh tay nghieng", "humerus lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm hay 15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "48 kVp · 2,5 mAs (bề dày 7–10 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa xương cánh tay" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương cánh tay và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với đầu được kê cao trên một chiếc gối và kê phim trên một chiếc hộp.",
        "Đặt cánh tay nằm trọn trên phim với cẳng tay đặt trên bụng sao cho các lồi cầu nằm chồng lên nhau và thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa xương cánh tay, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-canhtay-nghieng-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-canhtay-nghieng-phim.jpg", caption: "Phim cánh tay nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  /* ------------------------------------------- X-QUANG VAI – XƯƠNG ĐÒN ------------------------------------------- */

  {
    id: "xq-vai-truocsau-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Vai - Đòn",
    ten: "Chụp X-quang vai thẳng (trước sau)",
    tuKhoa: ["vai", "khop vai", "shoulder ap", "chom xuong canh tay"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs (bề dày 13–16 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn sao cho tia trung tâm đi xuyên qua điểm giữa của đường thẳng nối liền đỉnh vai và đầu dưới của nếp gấp trước nách. Tia trung tâm sẽ thẳng góc với mặt phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Mỏm cùng vai, xương bả vai, chỏm xương cánh tay, một phần ngoài xương đòn và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với vai đau tiếp xúc sát phim.",
        "Để thực hiện điều này chúng ta nhấc cao vai đối diện lên khỏi mặt bàn một góc 15° đến 20° đoạn kê nó trên những túi cát.",
        "Điều chỉnh vai bệnh nhân sao cho mỏm cùng vai nằm dưới bờ trên của phim 5 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn sao cho tia trung tâm đi xuyên qua điểm giữa của đường thẳng nối liền đỉnh vai và đầu dưới của nếp gấp trước nách. Tia trung tâm sẽ thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-vai-truocsau-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-vai-truocsau-thang-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-vai-khop-cung-don",
    phanHe: "xquang", modality: "X-quang", nhom: "Vai - Đòn",
    ten: "Chụp X-quang xương đòn (trước sau)",
    tuKhoa: ["khop cung don", "ac joint", "cung don vai"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm (chụp hai lần) hoặc 30 × 40 cm (chụp một lần)" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs (bề dày 13–16 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trên từng khớp cùng đòn vai khi chụp hai lần và ngắm ngay trung điểm của đường thẳng nối liền hai khớp cùng đòn vai khi chụp một lần. Tia trung tâm thẳng góc với mặt phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Khớp cùng đòn vai, bao khớp, sự chảy máu và phồng lên của bao khớp."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân đứng thẳng quay lưng về phía giá giữ cassette, hai vai tựa sát vào mặt phim, hai tay duỗi thẳng, lòng bàn tay ngửa ra trước và cầm hai vật nặng."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trên từng khớp cùng đòn vai khi chụp hai lần và ngắm ngay trung điểm của đường thẳng nối liền hai khớp cùng đòn vai khi chụp một lần. Tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-vai-khop-cung-don-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-vai-khop-cung-don-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-vai-khop-cung-don-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-vai-nach-ngang",
    phanHe: "xquang", modality: "X-quang", nhom: "Vai - Đòn",
    ten: "Chụp X-quang vai nghiêng (tia ngang xuyên nách, bệnh nhân nằm)",
    tuKhoa: ["vai nach", "axillary", "vai nghieng nam"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs (bề dày 14–18 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Bẻ đầu đèn nằm ngang đoạn ngắm thế nào để tia trung tâm đi xuyên qua giữa nách đến vùng khớp cùng đòn vai" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Chỏm xương cánh tay, khớp cùng đòn vai và một phần xương bả vai."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với cánh tay bên vai lành duỗi xuôi xuống thân mình và cánh tay bên vai đau được xoay ra cách xa thân mình đến mức tối đa sao cho nó càng thẳng góc với trục dài thân mình càng tốt.",
        "Đặt cassette dựng đứng trên vai bệnh nhân sao cho mặt trên vai và phần trên xương cánh tay tiếp xúc phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Bẻ đầu đèn nằm ngang đoạn ngắm thế nào để tia trung tâm đi xuyên qua giữa nách đến vùng khớp cùng đòn vai, tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-vai-nachngang-ct.jpg", caption: "Tư thế (axial xuyên nách) & hướng tia (Clark's)" },
      { src: "images/xq/xq-vai-nachngang-phim.jpg", caption: "Phim vai axial — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-vai-ba-vai-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Vai - Đòn",
    ten: "Chụp X-quang xương bả vai nghiêng (tư thế Lilienfeld)",
    tuKhoa: ["ba vai", "xuong ba vai", "lilienfeld", "scapula lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm" },
      { ten: "kV / mAs", giaTri: "52 kVp · 2,5 mAs (bề dày 14–17 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Xoay đầu đèn nằm ngang" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương bả vai ở thế nghiêng, hình xương bả vai, mỏm cùng vai, mỏm quạ và chỏm xương cánh tay."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân đứng hoặc ngồi ở vị trí xéo với mặt trước của vai đau tiếp xúc sát phim.",
        "Để nhìn rõ cánh xương vai, bác sĩ Lilienfeld và bác sĩ Mazujuan khuyên chúng ta đặt cẳng tay bên vai đau lên vai đối diện đồng thời ép chặt cánh tay thật sát vào ngực nếu có thể được."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Xoay đầu đèn nằm ngang, ngắm ngay một điểm nằm trong điểm giữa của cạnh trong xương bả vai 2cm. Tia trung tâm thẳng góc với phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-vai-ba-vai-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-vai-ba-vai-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-vai-mom-qua",
    phanHe: "xquang", modality: "X-quang", nhom: "Vai - Đòn",
    ten: "Chụp X-quang mỏm quạ (trước sau)",
    tuKhoa: ["mom qua", "coracoid"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs (bề dày 13–16 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Bẻ đầu đèn về phía đầu một góc 10°-20° để tách xương đòn ra khỏi lồng ngực đoạn ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Mỏm quạ và xương đòn."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với vai đau tiếp xúc sát phim, cánh tay, cẳng tay, bàn tay bên vai đau ở vị trí ngửa."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Bẻ đầu đèn về phía đầu một góc 10°-20° để tách xương đòn ra khỏi lồng ngực đoạn ngắm đầu đèn ngay trung tâm phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-vai-momqua-ct.jpg", caption: "Tư thế mỏm quạ & hướng tia (Clark's)" },
      { src: "images/xq/xq-vai-momqua-phim.jpg", caption: "Phim mỏm quạ — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },


  /* ------------------------------- X-QUANG CHI DƯỚI (CẲNG/CỔ/BÀN CHÂN) ------------------------------- */

  {
    id: "xq-cangchan-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang cẳng chân thẳng (trước sau)",
    tuKhoa: ["cang chan", "leg ap", "xuong chay", "xuong mac"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs (bề dày 9–12 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa cẳng chân" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương chày, xương mác và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân ngồi hoặc nằm ngửa trên bàn chụp hình với cẳng chân đau được đặt trọn trên phim.",
        "Điều chỉnh cẳng chân bệnh nhân thế nào để bình diện liên mắt cá song song với mặt phim.",
        "Để thực hiện điều này chúng ta xoay bàn chân vào phía trong một chút, có thể dùng túi cát kê dưới lòng bàn chân hay đặt lên đùi bệnh nhân để giữ yên tư thế."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa cẳng chân, tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cangchan-truocsau-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-cangchan-truocsau-phim.jpg", caption: "Phim cẳng chân trước sau — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cangchan-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang cẳng chân nghiêng",
    tuKhoa: ["cang chan nghieng", "leg lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs (bề dày 8–11 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa cẳng chân" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương chày, xương mác và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm nghiêng về bên đau với cẳng chân đau được đặt nằm trọn trên phim và mặt bên của cẳng chân tiếp xúc sát mặt phim.",
        "Điều chỉnh cẳng chân để bình diện xuyên qua xương chày thẳng góc với mặt phim.",
        "Gập đầu gối chân lành lại rồi đưa về phía trước đoạn kê cẳng chân lành lên cao để tạo sự thoải mái cho bệnh nhân."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa cẳng chân, tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cangchan-nghieng-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-cangchan-nghieng-phim.jpg", caption: "Phim cẳng chân — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cochan-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang cổ chân thẳng (trước sau)",
    tuKhoa: ["co chan", "ankle ap", "mat ca"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "48 kVp · 2,5 mAs (bề dày 9–12 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa cổ chân" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương sên, khớp sên chày, đầu dưới xương chày và xương mác, khớp xương cổ chân và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân ngồi hoặc nằm ngửa trên bàn chụp hình với chân đau duỗi thẳng.",
        "Đặt cổ chân đau lên phim sao cho lòng bàn chân dựng đứng, gót chân tiếp xúc sát phim và mắt cá trong nằm ngay giữa phim.",
        "Xoay bàn chân vào phía trong một chút để đầu dưới của xương chày và xương mác bớt chồng lên nhau."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa cổ chân, nơi chỗ nhô cao lên của mắt cá trong, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cochan-truocsau-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cochan-truocsau-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },


  {
    id: "xq-cochan-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang cổ chân nghiêng",
    tuKhoa: ["co chan nghieng", "ankle lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "46 kVp · 2,5 mAs (bề dày 8–11 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương cổ chân, xương gót, đầu dưới xương chày, xương mác, khớp sên chày cùng những mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân ngồi hoặc nằm nghiêng, chân đau đặt trên bàn chụp hình với cổ chân đau được đặt nghiêng trên mặt phim thế nào để bình diện liên mắt cá thẳng góc với mặt phim và đầu mắt cá ngoài nằm ngay trung tâm phim.",
        "Dùng túi cát hay khung gỗ đặt dưới đầu bàn chân để dễ dàng trong việc đặt đúng tư thế."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cochan-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cochan-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-banchan-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang bàn chân thẳng (trước sau)",
    tuKhoa: ["ban chan", "foot ap", "xuong ban chan"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs (bề dày 7–9 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm bàn chân với đầu đèn được bẻ về phía đầu một góc 15°" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương ngón chân, xương bàn chân, xương cổ chân và mô mềm xung quanh."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bàn chân bệnh nhân nằm trên phim thế nào để lòng bàn chân tiếp xúc thật sát mặt phim, các ngón chân duỗi thẳng, xòe ra và ngón cái nằm dưới bờ trên của phim 2 cm.",
        "Chúng ta có thể dùng bông gòn chêm giữa các ngón chân để tách rời chúng ra.",
        "Điều chỉnh cassette sao cho trung tâm bàn chân nằm ngay giữa trục dọc của phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm bàn chân với đầu đèn được bẻ về phía đầu một góc 15°."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-banchan-truocsau-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-banchan-truocsau-phim.jpg", caption: "Phim bàn chân trước sau — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-banchan-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang bàn chân nghiêng",
    tuKhoa: ["ban chan nghieng", "foot lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "42 kVp · 2,5 mAs (bề dày 7–9 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương ngón chân, xương bàn chân, xương cổ chân, và mô mềm xung quanh."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân ngồi hoặc nằm nghiêng, bàn chân đau đặt nghiêng trên phim, với cạnh ngoài tiếp xúc sát mặt phim.",
        "Đầu gối bên chân đau có thể được kê cao để bình diện dọc của bàn chân song song mặt phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-banchan-nghieng-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-banchan-nghieng-phim.jpg", caption: "Phim bàn chân nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-banchan-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang bàn chân chếch",
    tuKhoa: ["ban chan chech", "foot oblique"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "46 kVp · 2,5 mAs (bề dày 8–10 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương ngón chân, xương bàn chân, xương cổ chân và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân ngồi trên bàn chụp hình, bàn chân đau được đặt trên phim với các ngón chân duỗi thẳng và ngón cái nằm dưới bờ trên của phim 2 cm.",
        "Nghiêng bàn chân bệnh nhân về phía ngón cái thế nào để bình diện của lòng bàn chân hợp với mặt phim một góc 45°."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-banchan-chech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-banchan-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-banchan-chech-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-xuonggot-duoitren",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương gót — tư thế dưới trên",
    tuKhoa: ["xuong got", "got chan", "calcaneus", "got duoi tren"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "54 kVp · 5 mAs (bề dày 8–12 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Bẻ đầu đèn về phía đầu một góc 40°" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương gót, mắt cá và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân ngồi hoặc nằm ngửa trên bàn chụp hình với gót chân đau tiếp xúc sát phim và bàn chân dựng đứng, khớp sên chày nằm ngay trung tâm phim.",
        "Điều chỉnh bàn chân thế nào để lòng bàn chân càng gần thẳng góc với mặt phim càng tốt.",
        "Để thực hiện điều này, chúng ta dùng một sợi dây buộc vào phần trên bệnh nhân và bảo bệnh nhân kéo về phía chân mình."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Bẻ đầu đèn về phía đầu một góc 40°, đoạn ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ đi vào lòng bàn chân nơi đầu gần xương bàn chân thứ 5 và xuyên ra ngoài đáy của khớp xương cổ chân."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-xuonggot-duoitren-ct.jpg", caption: "Tư thế xương gót axial & hướng tia (Clark's)" },
      { src: "images/xq/xq-xuonggot-duoitren-phim.jpg", caption: "Phim xương gót axial — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },


  /* ----------------------------------- X-QUANG GỐI / ĐÙI / CHẬU / HÁNG ----------------------------------- */

  {
    id: "xq-goi-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp gối thẳng (trước sau)",
    tuKhoa: ["goi", "khop goi", "knee ap", "banh che"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "52 kVp · 2,5 mAs (bề dày 11–14 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Đầu dưới xương đùi, đầu trên xương chày và xương mác, khớp gối, xương bánh chè và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân ngồi hoặc nằm ngửa trên bàn chụp hình với đầu gối cần chụp duỗi thẳng và đặt lên phim.",
        "Điều chỉnh cẳng chân để nó nằm thật đúng ở vị thế trước sau và điều chỉnh cassette sao cho bờ dưới xương bánh chè nằm ngay trung tâm phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-goi-truocsau-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-goi-truocsau-phim.jpg", caption: "Phim khớp gối trước sau — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-goi-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp gối nghiêng",
    tuKhoa: ["goi nghieng", "knee lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs (bề dày 10–13 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa bờ trên của lồi cầu xương đùi" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Giống tư thế trước sau."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm nghiêng về chân bên đau với đầu gối đau đặt lên phim và gập lại một góc 45°.",
        "Đưa chân lành về phía trước đoạn đặt nó trên bàn chụp hình.",
        "Điều chỉnh thế nào để bờ dưới xương bánh chè nằm ngay trung tâm phim và bình diện của những lồi cầu thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa bờ trên của lồi cầu xương đùi, tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-goi-nghieng-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-goi-nghieng-phim.jpg", caption: "Phim khớp gối nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-goi-beclere",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp gối tư thế Béclère (hố liên lồi cầu)",
    tuKhoa: ["beclere", "ho lien loi cau", "tunnel", "goi ngoi"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm" },
      { ten: "kV / mAs", giaTri: "52 kVp · 2,5 mAs (bề dày 11–14 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay bờ dưới xương bánh chè và hướng tia trung tâm về phía đầu một góc từ 30°-35°" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Tư thế này giúp ta đặc biệt nhìn thấy hố liên lồi cầu của xương đùi."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân ngồi trên bàn chụp hình với hai tay chống xuống bàn, thân hình hơi ngả về phía sau, chân lành duỗi thẳng và đầu gối bên cần chụp gập lại tạo thành một góc 60°.",
        "Dùng một cassette cong đặt dưới hốm khoeo chân."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "LƯU Ý: tài liệu gốc in 25 kVp cho tư thế Béclère (nghi lỗi in) — đã dùng 52 kVp như tư thế Camp–Coventry cùng mục đích khảo sát hố liên lồi cầu; đề nghị Trưởng khoa/KTV trưởng xác nhận.",
        "Ngắm đầu đèn ngay bờ dưới xương bánh chè và hướng tia trung tâm về phía đầu một góc từ 30°-35°."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-goi-beclere-ct.jpg", caption: "Tư thế hố liên lồi cầu & hướng tia (Clark's)" },
      { src: "images/xq/xq-goi-beclere-phim.jpg", caption: "Phim hố liên lồi cầu — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },


  {
    id: "xq-goi-settegast",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương bánh chè tiếp tuyến (tư thế Settegast)",
    tuKhoa: ["settegast", "banh che tiep tuyen", "skyline", "banh che"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "45 kVp · 2,5 mAs (bề dày 10–12 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn sao cho tia trung tâm thẳng góc với mặt khớp đùi bánh chè. Độ bẻ góc của đầu đèn tùy thuộc vào độ gập của đầu gối" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Đây là một tư thế đặc biệt dùng để xem xương bánh chè, những bờ dưới của nó cùng mặt khớp đùi – bánh chè."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm sấp với chân lành duỗi thẳng và chân đau gập lại, động tác gập phải được thực hiện một cách từ từ cho đến khi nào xương bánh chè đứng thẳng góc với mặt phim nếu có thể được.",
        "Dùng một sợi dây buộc quanh cổ chân đau."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn sao cho tia trung tâm thẳng góc với mặt khớp đùi bánh chè. Độ bẻ góc của đầu đèn tùy thuộc vào độ gập của đầu gối."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-goi-settegast-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-goi-settegast-ct2.jpg", caption: "Chiều thế (biến thể) & hướng tia" },
      { src: "images/xq/xq-goi-settegast-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-dui-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương đùi thẳng (trước sau)",
    tuKhoa: ["dui", "xuong dui", "femur ap"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "58 kVp · 2,5 mAs (bề dày 14–17 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa thân xương đùi" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương đùi và mô mềm xung quanh."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm ngửa, hai chân duỗi thẳng và đùi đau được đặt trọn trên phim.",
        "Xoay bàn chân đau vào phía trong một chút nhằm mục đích đặt bình diện lồi cầu và cổ xương đùi song song với mặt phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa thân xương đùi, tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-dui-truocsau-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-dui-truocsau-phim.jpg", caption: "Phim xương đùi trước sau — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-dui-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương đùi nghiêng",
    tuKhoa: ["dui nghieng", "femur lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "58 kVp · 2,5 mAs (bề dày 13–16 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa thân xương đùi" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương đùi và mô mềm chung quanh."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm nghiêng về bên đùi đau với chân lành đưa về phía trước và đùi đau được nằm trọn trên phim với mặt bên của đùi tiếp xúc sát mặt phim, có thể dùng túi cát đặt lên cẳng chân bên đau để giữ bất động."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa thân xương đùi, tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-dui-nghieng-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-dui-nghieng-phim.jpg", caption: "Phim xương đùi nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-khungchau-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khung chậu thẳng (trước sau)",
    tuKhoa: ["khung chau", "xuong chau", "pelvis ap", "chau"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "30 × 40 cm" },
      { ten: "kV / mAs", giaTri: "64 kVp · 15 mAs (bề dày 17–20 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung điểm đường thẳng nối liền hai gai chậu trước trên" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương chậu, phần trên xương đùi và phần dưới cột sống thắt lưng."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với bình diện giữa của thân mình nằm ngay đường giữa của bàn.",
        "Điều chỉnh cassette sao cho trung tâm phim nằm trên khớp liên mu khoảng 5 cm, hay bờ trên của phim nằm trên mào chậu khoảng 5 cm và bờ dưới của phim nằm dưới mấu chuyển nhỏ của xương đùi."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung điểm đường thẳng nối liền hai gai chậu trước trên, tia trung tâm sẽ thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-khungchau-truocsau-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-khungchau-truocsau-phim.jpg", caption: "Phim đạt yêu cầu (nữ)" },
      { src: "images/xq/xq-khungchau-truocsau-phim2.png", caption: "Phim đạt yêu cầu (nam)" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-khungchau-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khung chậu nghiêng",
    tuKhoa: ["khung chau nghieng", "pelvis lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "24 × 30 cm" },
      { ten: "kV / mAs", giaTri: "74 kVp · 30 mAs (bề dày 24–26 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung điểm đường thẳng nối liền mấu chuyển lớn của xương đùi và mào chậu. Tia trung tâm thẳng góc với mặt phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương cùng, xương cụt ở thế nghiêng. Đây cũng là một tư thế thường được áp dụng trong trường hợp cần định vị những vật lạ ở trong vùng xương chậu."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm nghiêng trên bàn chụp hình với hai tay duỗi thẳng về phía đầu, hai khuỷu tay gập lại và hai cẳng chân ôm lấy đầu.",
        "Hai chân co lại và trục dài của cột sống nằm ngay đường giữa của bàn hoặc phim.",
        "Điều chỉnh thân mình bệnh nhân thế nào để những mào chậu, những gai tọa và các hố chén nằm chồng lên nhau.",
        "Điều chỉnh cassette sao cho bờ trên phim nằm trên mào chậu khoảng 5 cm.",
        "Để giữ sự bất động của bệnh nhân, chúng ta dùng băng ép đặt ngang qua vùng u của xương chậu."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung điểm đường thẳng nối liền mấu chuyển lớn của xương đùi và mào chậu. Tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ xương cùng, xương cụt ở thế nghiêng.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-khungchau-nghieng-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-khungchau-nghieng-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },



  {
    id: "xq-hang-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp háng thẳng (trước sau)",
    tuKhoa: ["khop hang", "hang", "hip ap", "co xuong dui"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm" },
      { ten: "kV / mAs", giaTri: "64 kVp · 10 mAs (bề dày 17–20 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Gạch một đường thẳng nối liền gai chậu trước trên với bờ trên khớp mu" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Chỏm và cổ xương đùi, mấu chuyển lớn và hốm khớp chén."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình thế nào để xương chậu nằm thật ngay ngắn và cân xứng mặc dầu ta chỉ cần chụp một bên mà thôi.",
        "Để nhìn thấy chiều dài và chi tiết của xương đùi được tối đa, ta xoay bàn chân vào phía trong một góc khoảng 15° và giữ yên chiều thế bằng cách dùng túi cát đặt lên trên đầu bàn chân."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Gạch một đường thẳng nối liền gai chậu trước trên với bờ trên khớp mu, đoạn ngắm đầu đèn ngay một điểm nằm về phía dưới và về phía bên ngoài của trung điểm đường thẳng nối liền này 2, 5 cm. Tia trung tâm sẽ xuyên qua khớp háng và thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-hang-truocsau-ct.jpg", caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-hang-truocsau-phim.jpg", caption: "Phim khớp háng trước sau — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },


  {
    id: "xq-hang-chan-ech",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp háng tư thế chân ếch (tư thế Cleaves)",
    tuKhoa: ["chan ech", "cleaves", "frog leg", "hang hai ben"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "30 × 40 cm" },
      { ten: "kV / mAs", giaTri: "64 kVp · 10 mAs (bề dày 17–20 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương chậu, hốm khớp chén, chỏm và cổ xương đùi và những mô mềm. Trong tư thế này chúng ta sẽ được hình ảnh của chỏm và cổ xương đùi ở thế chếch chứ không phải ở thế nghiêng hoàn toàn. Hố chén vẫn giữ ở tư thế trước sau và cổ xương đùi sẽ không được nhìn thấy rõ ràng trên phim."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với bình diện giữa của thân mình nằm ngay đường giữa của bàn.",
        "Đặt hai lòng bàn chân của bệnh nhân chụm vào nhau với đầu gối gập lại, đoạn bảo bệnh nhân dùng sức kéo bẹt đùi ra ngoài đến mức tối đa.",
        "Điều chỉnh cassette thế nào để trung tâm phim nằm trên khớp liên mu khoảng 5 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-hang-chanech-ct.jpg", caption: "Tư thế chân ếch (Cleaves) & hướng tia (Clark's)" },
      { src: "images/xq/xq-hang-chanech-phim.jpg", caption: "Phim chân ếch (Cleaves) — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-hang-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp háng nghiêng",
    tuKhoa: ["hang nghieng", "hip lateral", "co xuong dui nghieng"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm" },
      { ten: "kV / mAs", giaTri: "74 kVp · 10 mAs (bề dày 24–26 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Đặt đầu đèn nằm ngang và điều chỉnh thế nào để tia trung tâm thẳng góc với trung điểm của trục dài cổ xương đùi" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Chỏm và cổ xương đùi, một phần trên xương đùi và hố chén."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với xương chậu được kê trên một vật không cản tia X sao cho u ngồi cao hơn khỏi mặt bàn khoảng 5 cm.",
        "Vật dùng để kê không được kéo rộng quá bờ nghiêng của thân mình để nó không làm trở ngại cho việc đặt cassette."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Đặt đầu đèn nằm ngang và điều chỉnh thế nào để tia trung tâm thẳng góc với trung điểm của trục dài cổ xương đùi."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ và đầy đủ vùng giải phẫu cần khảo sát trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-hang-nghieng-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-hang-nghieng-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  /* ----------------------------------------------- X-QUANG CỘT SỐNG ------ */
  {
    id: "xq-cotsong-co-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cổ thẳng",
    tuKhoa: ["cot song co", "cs co thang", "cervical ap", "dot song co"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "62 kVp · 10 mAs (bề dày 11–14 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay đỉnh sụn giáp trạng (C4)" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Các đốt sống cổ và mô mềm xung quanh."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với bình diện giữa của cổ và đầu nằm ngay đường giữa của bàn hoặc phim.",
        "Kéo cằm bệnh nhân vươn ra cho đến khi đường thẳng nối liền bờ dưới của răng cửa hàm trên và đầu mấu nhũ (mỏm chũm) hoặc cực ót thẳng góc với mặt phim.",
        "Giữ bất động đầu bệnh nhân bằng những túi cát hay kẹp đầu.",
        "Điều chỉnh cassette sao cho phần cao nhất của sụn giáp trạng nằm ngay trung tâm phim (tức đỉnh sụn giáp trạng)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay đỉnh sụn giáp trạng (C4), tia trung tâm thẳng góc với mặt phim tại trung tâm phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ các đốt sống cổ từ C3 - C7, và mặt trên và dưới của đốt sống.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-co-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-co-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-co-thang-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotsong-co-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cổ nghiêng",
    tuKhoa: ["cot song co nghieng", "cervical lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "64 kVp · 10 mAs (bề dày 11–14 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Thân sống, mỏm gai, đĩa đệm và mô mềm xung quanh."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân ngồi trên một chiếc ghế với bình diện giữa của đầu và cổ đứng thẳng theo chiều dọc và cằm hơi vươn ra phía trước.",
        "Hạ vai bệnh nhân xuống càng nhiều càng tốt để chúng không che lấp những đốt sống cổ ở dưới thấp.",
        "Để thực hiện được điều này chúng ta có thể cho bệnh nhân cầm những vật nặng ở hai bàn tay với tay duỗi thẳng xuống hai bên thân mình.",
        "Kéo cằm bệnh nhân vươn về phía trước sao cho xương hàm dưới không nằm chồng lên đốt sống cổ.",
        "Đặt cassette trên giá giữ cassette ở một bên vai bệnh nhân.",
        "Điều chỉnh cassette thế nào để bờ trên phim nằm ngang với bờ trên vành tai ngoài và cột sống cổ nằm ngay đường giữa của phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy 7 đốt sống cổ đúng ở tư thế nghiêng;",
        "Hình bờ trên và bờ dưới của các đốt sống cổ đặc biệt là C4 phải thật thẳng;",
        "Thấy được trọn vẹn mỏm gai (C7).",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]},
      { tieuDe: "Ghi chú", items: [
        "Tài liệu mô tả 2 biến thể: nằm nghiêng (FFD 1 m) và ngồi/đứng (FFD 1,8 m). Bản này áp dụng tư thế ngồi/đứng; chọn FFD theo thực tế."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-co-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-co-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-co-nghieng-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotsong-co-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cổ chếch",
    tuKhoa: ["cot song co chech", "cervical oblique", "lo tiep hop"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "62 kVp · 10 mAs (bề dày 10–13 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung điểm của đường thẳng nối liền đỉnh của sụn giáp trạng và mặt sau cổ" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Lỗ liên hợp và chân cung sống (cuống cung sống)."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Tư thế này có thể thực hiện được bằng cách đặt bệnh nhân đứng, nằm hay ngồi với lưng quay về phía cassette.",
        "Xoay thân mình bệnh nhân về phía không cần chụp sao cho bình diện giữa của cổ hợp với mặt phim một góc 45° và trục dài của cổ phải thẳng hợp theo với toàn thể thân mình.",
        "Nếu bệnh nhân ở vị trí nằm, chúng ta dùng túi cát kê dưới vai và mông để giữ yên chiếu thế và góc độ mong muốn.",
        "Kéo cằm bệnh nhân vươn về phía trước sao cho xương hàm dưới không nằm chồng lên các đốt sống cổ.",
        "Điều chỉnh cassette thế nào để đỉnh của sụn giáp trạng nằm ngay giữa chiều rộng của phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung điểm của đường thẳng nối liền đỉnh của sụn giáp trạng và mặt sau cổ, tia trung tâm thẳng góc với mặt phim tại trung tâm, chúng ta có thể bẻ đầu đèn về phía đầu một góc khoảng 15°."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ các lỗ liên hợp.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cs-co-chech-ct.jpg",   caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-cs-co-chech-phim.jpg", caption: "Phim cột sống cổ chếch — mẫu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-dotsong-co-c1c2",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang đốt sống cổ C1-C2 (há miệng)",
    tuKhoa: ["c1 c2", "dot song co cao", "ha mieng", "open mouth", "odontoid"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "70 kVp · 15 mAs (bề dày 10–14 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay giữa miệng đang há" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Đốt sống cổ thứ 1 và thứ 2."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với bình diện giữa của đầu và cổ nằm ngay đường giữa của bàn hoặc trên phim.",
        "Kéo cằm bệnh nhân vươn về phía trước cho đến khi đường thẳng nối liền bờ dưới của răng cửa hàm trên và đầu mấu nhũ hoặc cực ót thẳng góc với mặt phim.",
        "Bảo bệnh nhân há miệng ra càng lớn càng tốt và chúng ta có thể giữ cho miệng đang há bằng cách dùng một vật không cản tia đặt ở giữa miệng.",
        "Điều chỉnh cassette sao cho trung tâm phim nằm ngay giữa miệng đang há.",
        "Bảo bệnh nhân nói khẽ tiếng 'A' trong lúc chụp hình, động tác này sẽ làm cho lưỡi nằm sát sàn miệng để hình của lưỡi sẽ không nằm chồng lên đốt sống cổ thứ 1 (Atlas) và thứ 2 (Axis)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay giữa miệng đang há, tia trung tâm thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Mỏm răng, đốt trục (C2) và đốt đội (C1) được nhìn thấy qua miệng đang há, xương chũm không che mờ mỏm răng, đốt đội, đốt trục và thấy rõ khớp đội chũm.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-dotsong-co-c1c2-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-dotsong-co-c1c2-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotsong-nguc-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống ngực thẳng",
    tuKhoa: ["cot song nguc", "cs nguc", "thoracic ap", "dot song nguc"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 30 cm" },
      { ten: "kV / mAs", giaTri: "64 kVp · 10 mAs (bề dày 21–24 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Các đốt sống ngực."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với thân mình được điều chỉnh thật thẳng, bình diện giữa thẳng góc và nằm ngay đường giữa của bàn hoặc phim.",
        "Điều chỉnh cassette hoặc bệnh nhân sao cho bình diện hai mỏm cùng vai nằm dưới bờ trên phim 5 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ cột sống ngực trên phim bao gồm phần tiếp nối giữa cột sống cổ - ngực và cột sống ngực - lưng, đồng thời thấy rõ các khoảng liên sống;",
        "Mặt trên và dưới các đốt sống phải được thấy rõ ràng;",
        "Các chỗ tiếp giáp xương sườn phải được thấy rõ.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-nguc-thang-ct.png", caption: "Chiều thế (nằm)" },
      { src: "images/xq/xq-cotsong-nguc-thang-ct2.png", caption: "Chiều thế (đứng)" },
      { src: "images/xq/xq-cotsong-nguc-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-nguc-thang-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotsong-nguc-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống ngực nghiêng",
    tuKhoa: ["cot song nguc nghieng", "thoracic lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "74 kVp · 15 mAs (bề dày 30–34 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Thân sống, mỏm gai và đĩa đệm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm nghiêng trên bàn chụp hình hai tay duỗi thẳng về phía đầu và hai đầu gối gập lại.",
        "Điều chỉnh bệnh nhân thế nào để bình diện của lưng nằm sau đường giữa của bàn hoặc phim khoảng 8 cm và thẳng góc với mặt bàn.",
        "Điều chỉnh bệnh nhân và cassette sao cho bình diện của hai mỏm cùng vai nằm dưới bờ trên của phim khoảng 5 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Các bờ thân sống của các đốt sống ngực phải nghiêng thật đúng;",
        "Các bóng xương sườn bị xóa mờ;",
        "Phần tiếp nối giữa cột sống thắt lưng và cột sống ngực phải thấy được trên phim.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cs-nguc-nghieng-ct.jpg",   caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-cs-nguc-nghieng-phim.jpg", caption: "Phim cột sống ngực nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotsong-tl-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống thắt lưng thẳng",
    tuKhoa: ["cot song that lung", "cs that lung", "lumbar ap", "csl"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "74 kVp · 15 mAs (bề dày 30–34 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim. Tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Các đốt sống thắt lưng, đĩa đệm và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với thân mình thật thẳng và cột sống thắt lưng nằm ngay đường giữa của bàn hoặc phim.",
        "Điều chỉnh cassette hay bệnh nhân để bình diện xuyên qua mào chậu nằm ngay giữa chiều dài của phim.",
        "Kê đầu bệnh nhân trên một chiếc gối với hai bàn chân chống trên bàn và hai đầu gối gập lại.",
        "Việc làm này sẽ giúp cho phần cột sống thắt lưng ngả về phía trước tiếp xúc sát phim hơn, nhờ đó không bị sai lệch và phóng đại trên phim.",
        "Đặt hai tay bệnh nhân ở vị trí thuận lợi và thoải mái."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim. Tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "hình các bờ của thân đốt sống thắt lưng phải thật thẳng.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-tl-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-tl-thang-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotsong-tl-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống thắt lưng nghiêng",
    tuKhoa: ["cot song that lung nghieng", "lumbar lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "76 kVp · 30 mAs (bề dày 26–30 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Thân sống, mỏm gai, đĩa đệm và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm nghiêng trên bàn chụp hình với hai đầu gối gập lại ở nơi một vị trí thuận lợi và thoải mái, hai tay duỗi thẳng về phía trước hoặc phía đầu.",
        "Điều chỉnh bệnh nhân thế nào để bình diện mào chậu nằm chồng lên nhau hoàn toàn.",
        "Đặt dưới hốm hông nơi phía trên mào chậu những vật không cản quang để cho cột sống ngực, cột sống thắt lưng và xương cùng nằm trên một bình diện song song với mặt bàn.",
        "Điều chỉnh bệnh nhân hay cassette để cho trục dài của cột sống cũng như chỗ cao nhất của mào chậu nằm ngay giữa đường rộng của phim và bình diện xuyên qua mào chậu nằm ngay trung tâm phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hình thân các đốt sống thắt lưng đúng thế nghiêng;",
        "Phần tiếp nối cột sống ngực - cột sống thắt lưng và cột sống thắt lưng - cùng thấy rõ trên phim;",
        "Thấy rõ mỏm gai;",
        "Bờ sau các đốt sống phải thấy rõ nét.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cs-tl-nghieng-ct.jpg",   caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-cs-tl-nghieng-phim.jpg", caption: "Phim cột sống thắt lưng nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotsong-tl-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống thắt lưng chếch",
    tuKhoa: ["cot song that lung chech", "lumbar oblique", "scotty dog"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "76 kVp · 25 mAs (bề dày 21–25 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Tư thế này đặc biệt giúp nhìn thấy khớp mấu của cột sống thắt lưng. Chúng ta sẽ nhìn thấy những khớp mấu ở xa phim hiện lên rất rõ ràng và đó là những khớp mấu chúng ta cần quan sát."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình đoạn xoay thân mình họ về phía trái hay phải một góc 45° với đùi và vai cùng nằm trên một bình diện.",
        "Dùng vật kê dưới vai, mông và cẳng chân để giữ yên tư thế và làm thế nào để chúng không hiện hình trên phim (nếu là vật cản tian).",
        "Hai đầu gối bệnh nhân gập lại, hai tay đặt ở vị trí thuận lợi và thoải mái.",
        "Điều chỉnh cassette hay bệnh nhân sao cho bình diện xuyên qua hai mào chậu nằm ngay trung tâm phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Dấu hiệu 'Scottie dog' (chó Scottie) phải thấy rõ trên năm đốt sống thắt lưng;",
        "Thấy rõ các đĩa đệm.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-tl-chech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-tl-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-tl-chech-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },



  {
    id: "xq-cotsong-cungcut-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cùng cụt thẳng",
    tuKhoa: ["cung cut", "xuong cung", "xuong cut", "sacrum coccyx ap"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm" },
      { ten: "kV / mAs", giaTri: "66 kVp · 15 mAs (bề dày 19–23 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Bẻ đầu đèn về phía đầu một góc 15° đoạn ngắm tia trung tâm ngay một điểm nằm trên khớp liên mu 2cm. Tia trung tâm sẽ đi xuyên qua bờ trên của xương cùng hoặc bờ dưới của đốt sống thắt lưng thứ 5 đến phim. Chúng ta phải thận trọng trong việc ngắm đầu đèn vì nếu ngắm sai điểm đã chỉ định trên ta sẽ không thấy cơ cấu của xương cùng một cách rõ ràng" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương cùng, xương cụt, khớp cùng chậu và khớp thắt lưng cùng."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm ngửa trên bàn chụp hình với đầu được kê lên cao và hai chân duỗi thẳng.",
        "Điều chỉnh bệnh nhân thế nào để bình diện giữa của thân mình nằm ngay đường giữa của bàn hoặc phim và mào chậu nằm dưới bờ trên của phim 5 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Bẻ đầu đèn về phía đầu một góc 15° đoạn ngắm tia trung tâm ngay một điểm nằm trên khớp liên mu 2cm. Tia trung tâm sẽ đi xuyên qua bờ trên của xương cùng hoặc bờ dưới của đốt sống thắt lưng thứ 5 đến phim. Chúng ta phải thận trọng trong việc ngắm đầu đèn vì nếu ngắm sai điểm đã chỉ định trên ta sẽ không thấy cơ cấu của xương cùng một cách rõ ràng."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hình xương cùng, các khớp cùng chậu, L5 phải cân xứng, trọn vẹn, không bị che khuất.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-cungcut-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-cungcut-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-cungcut-thang-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-cotsong-cungcut-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cùng cụt nghiêng",
    tuKhoa: ["cung cut nghieng", "sacrum coccyx lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "20 × 30 cm" },
      { ten: "kV / mAs", giaTri: "76 kVp · 30 mAs (bề dày 29–35 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Khớp thắt lưng - cùng, xương cùng và xương cụt."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm thật đúng ở tư thế nghiêng trên bàn chụp với tay ở phía dưới gập lại và kê dưới đầu, tay ở phía trên và hai đầu gối gập lại đặt ở một vị trí thuận lợi và thoải mái.",
        "Điều chỉnh bệnh nhân để đường giữa nách kéo dài đến xương chậu nằm ngay đường giữa của bàn hoặc phim.",
        "Chúng ta nên dùng một vật không cản tia X đặt dưới hốm hông nơi phía trên mào chậu để cho cột sống ngực, cột sống thắt lưng và xương cùng cùng nằm trên một bình diện song song với mặt bàn.",
        "Điều chỉnh bệnh nhân để hai mào chậu hoàn toàn nằm chồng lên nhau và nằm dưới bờ trên phim 5 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ hình xương cùng cụt ở thế nghiêng.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-cungcut-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-cungcut-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-cungcut-nghieng-phim2.png", caption: "Phim đạt yêu cầu (2)" },
      { src: "images/xq/xq-cotsong-cungcut-nghieng-phim3.png", caption: "Phim đạt yêu cầu (3)" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  /* -------------------------------------------------- X-QUANG SỌ – MẶT --- */



  {
    id: "xq-blondeau",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang Blondeau (xoang mặt)",
    tuKhoa: ["blondeau", "waters", "xoang mat", "xoang ham", "xoang tran"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "24 × 30 cm và đặt theo chiều dài" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 10–15 mAs (bề dày 18–21 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Tia trung tâm đi từ vùng chẩm tới nhân trung và vuông góc với mặt phim tại trung tâm" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xoang trán, xoang sàng trước, xoang hàm, xoang bướm, xương mặt, xương mũi và xương gò má."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Tư thế này có thể thực hiện với bệnh nhân nằm sấp trên bàn chụp hình hoặc ngồi trên một chiếc ghế và quay mặt về phía giá giữ cát xét.",
        "Với bệnh nhân ngồi, chúng ta dễ dàng thực hiện hơn so với bệnh nhân nằm, vì khi ngồi bệnh nhân cảm thấy thoải mái và cũng dễ dàng hơn trong việc sắp đặt tư thế cho bệnh nhân.",
        "Đối với bệnh nhân ngồi Bệnh nhân ngồi trên một chiếc ghế và quay mặt về phía giá giữ cát xét, khoảng cách giữa bệnh nhân và giá giữ cát xét phải xa vừa đủ để bệnh nhân cảm thấy thoải mái khi đặt vùng mặt tiếp xúc với giá giữ cát xét.",
        "Hai khuỷu tay bệnh nhân gập lại, đặt úp hai bàn tay ở hai bên đầu tại một vị trí thuận lợi và thoải mái.",
        "Điều chỉnh hai vai bệnh nhân cùng nằm trên mặt phẳng ngang.",
        "Bệnh nhân há to miệng.",
        "Điều chỉnh đầu bệnh nhân và cát xét sao cho đỉnh cằm tiếp xúc với giá giữ cát xét, mặt phẳng dọc giữa của đầu vuông góc với cát xét, đường hốc mắt – lỗ tai hợp với cát xét một góc 37° (đầu mũi cách mặt phim 0,5 đến 1,5 cm), nhân trung nằm ngay trung tâm phim.",
        "Đối với bệnh nhân nằm Bệnh nhân nằm sấp trên bàn chụp hình với mặt phẳng dọc giữa của thân mình nằm ngay đường giữa của bàn.",
        "Hai khuỷu tay bệnh nhân gập lại, đặt úp hai bàn tay ở hai bên đầu tại một vị trí thuận lợi và thoải mái.",
        "Điều chỉnh hai vai bệnh nhân cùng nằm trên mặt phẳng ngang.",
        "Bệnh nhân há to miệng.",
        "Điều chỉnh đầu bệnh nhân và cát xét sao cho đỉnh cằm tiếp xúc với giá giữ cát xét, mặt phẳng dọc giữa của đầu vuông góc với cát xét, đường hốc mắt – lỗ tai hợp với cát xét một góc 37° (đầu mũi cách mặt phim 0,5 đến 1,5 cm), nhân trung nằm ngay trung tâm phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm đi từ vùng chẩm tới nhân trung và vuông góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hình hai hốc mắt cân xứng và thấy rõ ràng trên phim.",
        "Bờ trên xương đá nằm tiếp giáp với góc dưới xoang hàm.",
        "Xoang bướm được nhìn thấy qua miệng đang há.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-blondeau-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-blondeau-phim.jpg", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-blondeau-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-so-hirtz",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang sọ Hirtz (nền sọ)",
    tuKhoa: ["hirtz", "nen so", "submentovertex", "smv", "xoang buom", "xoang sang"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "24 × 30 cm và đặt theo chiều dài" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 15 mAs (bề dày 21–25 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Điều chỉnh đầu đèn sao cho tia trung tâm đi qua trung điểm của đường thẳng nối liền hai góc hàm và vuông góc với đường nhân trung. Tia trung tâm sẽ đi qua điểm nằm trước trung điểm đường thẳng nối liền hai ống tai ngoài 2 cm tới trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Tư thế này chủ yếu giúp chúng ta nhìn rõ xoang bướm, xoang sàng trước, xoang sàng sau. Ngoài ra tư thế này còn giúp ta nhìn thấy toàn thể đáy sọ, lỗ bầu dục, lỗ tròn nhỏ, khớp thái dương-hàm, xương hàm dưới, xoang hàm, mỏm răng C2 và lỗ chẩm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Tư thế này có thể thực hiện với bệnh nhân nằm ngửa trên bàn chụp hình hoặc ngồi trên một chiếc ghế và quay lưng về phía giá giữ cát xét.",
        "Với bệnh nhân ngồi, chúng ta dễ dàng thực hiện hơn so với bệnh nhân nằm, vì khi ngồi bệnh nhân cảm thấy thoải mái và cũng dễ dàng hơn trong việc sắp đặt chiều thế cho bệnh nhân.",
        "Đối với bệnh nhân ngồi Bệnh nhân ngồi trên một chiếc ghế và quay lưng về phía giá giữ cát xét, khoảng cách giữa bệnh nhân và giá giữ cát xét phải xa vừa đủ để bệnh nhân có thể ngả người ra phía sau và đỉnh đầu tiếp xúc với giá giữ cát xét.",
        "Điều chỉnh đầu bệnh nhân và cát xét sao cho đường nhân trung song song với cát xét, mặt phẳng dọc giữa vuông góc với cát xét và trung điểm đường thẳng nối liền u chẩm – u trán giữa nằm ngay trung tâm phim.",
        "Đối với bệnh nhân nằm Bệnh nhân nằm ngửa trên bàn chụp hình với mặt phẳng dọc giữa của thân mình nằm ngay đường giữa của bàn.",
        "Hai tay bệnh nhân xuôi theo thân mình tại một vị trí thuận lợi và thoải mái.",
        "Kê cao vai và lưng bệnh nhân trên một vật không cản quang để bệnh nhân dễ dàng ngửa đầu ra phía sau.",
        "Bệnh nhân ngả đầu ra phía sau cho tới khi đỉnh đầu tiếp xúc với cát xét.",
        "Điều chỉnh đầu bệnh nhân và cát xét sao cho đường nhân trung song song và mặt phẳng dọc giữa vuông góc với cát xét, đồng thời trung tâm phim nằm ngay trung điểm của đường thẳng nối liền chẩm – u trán giữa."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Điều chỉnh đầu đèn sao cho tia trung tâm đi qua trung điểm của đường thẳng nối liền hai góc hàm và vuông góc với đường nhân trung. Tia trung tâm sẽ đi qua điểm nằm trước trung điểm đường thẳng nối liền hai ống tai ngoài 2 cm tới trung tâm phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hình hộp sọ cân xứng và rõ ràng trên phim.",
        "Hai cung răng hàm trên và dưới nằm chồng lên nhau.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-so-hirtz-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-so-hirtz-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-xuong-chinh-mui",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang xương chính mũi nghiêng",
    tuKhoa: ["xuong chinh mui", "nasal bone", "xuong mui"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "24 × 30 cm và đặt theo chiều ngang" },
      { ten: "kV / mAs", giaTri: "92 kVp · 10–15 mAs (bề dày 2–4 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "75 cm" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn tại điểm giữa của xương mũi" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Xương mũi ở thế nghiêng. Đây là tư thế cơ bản thường được áp dụng để chụp xương mũi."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm sấp trên bàn chụp hình với mặt phẳng dọc giữa của thân mình nằm ngay đường giữa của bàn.",
        "Đặt cánh tay bên cần chụp đuôi xuôi theo thân mình, đồng thời khuỷu tay phía đối diện gập lại với bàn tay úp trên bàn tại một vị trí thuận lợi và thoải mái.",
        "Đặt đầu bệnh nhân trên cát xét ở đúng thế nghiêng, điều chỉnh đầu bệnh nhân sao cho mặt phẳng dọc giữa song song với cát xét, đường liên đồng tử vuông góc với cát xét.",
        "Điều chỉnh đầu bệnh nhân và cát xét sao cho điểm giữa xương mũi nằm ngay trung tâm phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn tại điểm giữa của xương mũi, tia trung tâm đi qua điểm này và vuông góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ hình ảnh xương chính mũi đúng ở thế nghiêng.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-mui-ct.jpg",   caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-mui-phim.jpg", caption: "Phim xương chính mũi nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },



  {
    id: "xq-khop-thai-duong-ham",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang khớp thái dương hàm",
    tuKhoa: ["khop thai duong ham", "tmj", "panorama ham", "thai duong ham"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "24 × 30 cm và đặt theo chiều dài" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 10–15 mAs (bề dày 13–17 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "75 cm" },
      { ten: "Tia trung tâm", giaTri: "Bẻ đầu đèn về phía chân một góc 25°" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Khớp thái dương – hàm và mẩu nhũ (mỏm chũm). Đây là tư thế cơ bản để chụp khớp thái dương – hàm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm sấp trên bàn chụp hình với mặt phẳng dọc giữa của thân mình nằm ngay đường giữa của bàn.",
        "Cánh tay bên cần chụp đuôi xuôi theo thân mình, cánh tay phía đối diện gập lại với bàn tay úp trên bàn tại một vị trí thuận lợi và thoải mái.",
        "Đặt đầu bệnh nhân trên cát xét ở đúng thế nghiêng.",
        "Điều chỉnh đầu sao cho mặt phẳng dọc giữa song song với cát xét, đường liên đồng tử vuông góc với cát xét.",
        "Điều chỉnh cát xét sao cho ống tai ngoài (hoặc nhĩ cầu bên cần chụp) nằm ngay trung tâm phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Bẻ đầu đèn về phía chân một góc 25°, ngắm tại một điểm nằm trên khớp thái dương – hàm phía xa phim 7 – 9 cm, tia trung tâm đi xuyên qua điểm này đến trung tâm phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hình ống tai trong và ngoài chồng lên nhau (lỗ ống tai trong và ngoài chồng lên nhau).",
        "Lồi cầu xương hàm dưới và ổ khớp thái dương – hàm rõ nét.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-tmj-ct.jpg",   caption: "Tư thế khớp thái dương hàm & hướng tia (Clark's)" },
      { src: "images/xq/xq-tmj-phim.jpg", caption: "Phim khớp thái dương hàm — mẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-schuller",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang tai tư thế Schüller (xương chũm)",
    tuKhoa: ["schuller", "schüller", "xuong chum", "tai", "mastoid", "viem tai giua"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "18 × 24 cm" },
      { ten: "Tia trung tâm", giaTri: "Cách lỗ tai đối diện 7 cm, chếch xuống chân 25–30°" },
      { ten: "Số thì chụp", giaTri: "2 lần: há miệng & ngậm miệng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "U dây thần kinh VIII; viêm tai giữa cấp/mạn; bệnh lý khớp thái dương hàm; chấn thương nghi vỡ xương đá; cholesteatoma; lỗ dò ống bán khuyên."
      ]},
      { tieuDe: "Chiều thế", items: [
        "Nằm ngửa, chếch về phía cần chụp, vai bên đối diện kê cao.",
        "Mặt phẳng chính diện song song phim; đầu hơi cúi để mặt phẳng Virchow song song bờ trên phim; lỗ tai ở giữa phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Nằm trong mặt phẳng qua lỗ tai; chiếu vào điểm cách lỗ tai bên đối diện 7 cm, chếch xuống phía chân 25–30°, đi tới lỗ tai bên cần chụp.",
        "Chụp 2 lần ở thì há miệng và ngậm miệng để khảo sát khớp thái dương hàm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Trung tâm hình có vết tròn sáng (ống lỗ tai trong – ngoài), phía sau là các tế bào chũm.",
        "Lồi cầu xương hàm ở phía trước lỗ tai, chồng lên hình xương đá."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-schuller-ct.jpg",   caption: "Tư thế xương chũm (Schüller) & hướng tia (Clark's)" },
      { src: "images/xq/xq-schuller-phim.jpg", caption: "Phim xương chũm (Schüller) — mẫu" }
    ],
    nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
  },


  /* ------------------------------------------------------- X-QUANG RĂNG --- */

  {
    id: "xq-rang-toan-canh",
    phanHe: "xquang", modality: "X-quang", nhom: "Răng",
    ten: "Chụp X-quang răng toàn cảnh (panorama)",
    tuKhoa: ["rang toan canh", "panorama", "opg", "toan ham", "cung rang"],
    thongSo: [
      { ten: "kV / mA / thời gian", giaTri: "≈ 60–70 kV · 10 mA · 12–14 giây" },
      { ten: "Tia trung tâm", giaTri: "Trước bình tai ~1 cm, vuông góc mặt cong xương hàm dưới" }
    ],
    noiDung: [
      { tieuDe: "Đại cương", items: [
        "Cho hình ảnh toàn bộ hai cung răng trên – dưới cùng các cấu trúc kế cận của xương hàm trên, hàm dưới và khớp thái dương hàm hai bên.",
        "Nguyên lý cắt lớp cổ điển: bóng tia X và phim di chuyển ngược chiều, quay quanh xương hàm dưới ~12–14 giây mỗi lần chụp."
      ]},
      { tieuDe: "Chiều thế", items: [
        "Đứng hoặc ngồi, lưng thẳng, mặt đối xứng qua mặt phẳng dọc giữa, không quá cúi/ngửa.",
        "Mặt phẳng qua đường nối lỗ tai – bờ dưới ổ mắt song song mặt sàn.",
        "Cắn răng cửa đúng vị trí rãnh lõm trên thanh cắn, đặt lưỡi áp sát vòm miệng cứng, bất động suốt quá trình chụp."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Khu trú phía trước bình tai ~1 cm, vuông góc mặt phẳng cong của xương hàm dưới; chùm tia di chuyển liên tục và ngược chiều phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ toàn bộ cung răng trên và dưới cùng các cấu trúc xương hàm liên quan.",
        "Đánh giá được số lượng và hình thái cung răng trong tương quan tổng thể với xương hàm."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-rang-toan-canh-ct.png", caption: "Chiều thế (máy chụp toàn cảnh)" },
      { src: "images/xq/xq-rang-toan-canh-phim.png", caption: "Phim panorama đạt yêu cầu" }
    ],
    nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
  },

  /* -------------------------------------- X-QUANG LỒNG NGỰC – BỤNG ------- */
  {
    id: "xq-phoi-dinh-uon",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang phổi tư thế đỉnh ưỡn",
    tuKhoa: ["dinh uon", "dinh phoi", "apical lordotic", "lordotic", "phoi"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "30 × 40 cm" },
      { ten: "kV / mAs", giaTri: "56 kVp · 5 mAs (bề dày 25–28 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn sao cho tia trung tâm xuyên qua đốt sống ngực thứ 4 và thẳng góc với mặt phim" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Đỉnh phổi, vùng phổi sau tim và chứng tràn dịch trung thất."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân đứng thẳng với mặt quay về phía giá giữ cassette.",
        "Điều chỉnh cassette sao cho bờ trên của phim nằm trên bờ vai khoảng 5cm, bình diện giữa của thân mình nằm ngay đường giữa của phim.",
        "Dặn bệnh nhân dùng hai tay nắm chặt vào hai đầu trên của giá giữ cassette rồi ưỡn bụng về phía trước cho đến khi nó tiếp xúc sát mặt phim và ngả người về phía sau để lồng ngực hợp với mặt phim một góc 45°."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn sao cho tia trung tâm xuyên qua đốt sống ngực thứ 4 và thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ đỉnh phổi.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]},
      { tieuDe: "Ghi chú", items: [
        "Tài liệu có 2 kiểu đỉnh ưỡn: sau–trước (Fleischner, đang áp dụng) và trước–sau (Lindblom, FFD 1,8 m, 56 kVp · 5 mAs)."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-dinhphoi-ct.jpg",   caption: "Tư thế đỉnh ưỡn & hướng tia (Clark's)" },
      { src: "images/xq/xq-dinhphoi-phim.jpg", caption: "Phim đỉnh phổi ưỡn — mẫu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-long-nguc-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang lồng ngực nghiêng",
    tuKhoa: ["long nguc nghieng", "phoi nghieng", "chest lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "30 × 40 cm" },
      { ten: "kV / mAs", giaTri: "64 kVp · 15 mAs (bề dày 29–34 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,2 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn sao cho tia trung tâm đi xuyên qua ngay giữa bờ trên đốt sống ngực thứ 4 khi chụp phổi" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Tim, phổi, động mạch chủ và đặc biệt là những khe liên thùy phổi, trung thất trước và trên. Tư thế này được xem như là một tư thế bổ túc cho tư thế sau trước, thường được dùng để định vị những tổn thương ở phổi, xem xét thùy phổi và những khe liên thùy. Đây cũng là tư thế căn bản dùng để chụp hình mạch máu tim và phế quản. Tư thế nghiêng trái được dùng để xem tim trái, phổi trái và ngược lại tư thế nghiêng phải được dùng để xem tim phải và phổi phải."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân đứng thật đúng ở tư thế nghiêng với bên cần chụp tiếp xúc sát phim.",
        "Đưa hai tay bệnh nhân lên cao với cẳng tay đặt trên đầu và vai bên cần chụp tiếp xúc sát mặt phim.",
        "Điều chỉnh cassette sao cho bờ trên của vai nằm dưới bờ trên phim khoảng 5 cm.",
        "Điều chỉnh bệnh nhân thế nào để thân mình thẳng đứng và bình diện giữa của thân mình song song với mặt phim, đường giữa nách nằm sau đường giữa của phim khoảng 5 cm.",
        "Trong trường hợp cần quan sát tim, chúng ta dùng bột Barium Sulfate pha đặc gấp ba lần so với khi dùng để chụp dạ dày.",
        "Nhờ thế thuốc sẽ xuống chậm và dính vào thành thực quản.",
        "Bảo bệnh nhân ngậm vài muỗng thuốc và chúng ta lấy hình trong lúc bệnh nhân đang nuốt."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn sao cho tia trung tâm đi xuyên qua ngay giữa bờ trên đốt sống ngực thứ 4 khi chụp phổi, và bờ trên đốt sống ngực thứ 6 hay thứ 7 khi chụp tim. Tia trung tâm thẳng góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Phổi được thấy đầy đủ trên phim (bao gồm đỉnh phổi và góc sườn hoành);",
        "Các chi tiết của phim rõ nét.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-nguc-nghieng-ct.jpg",   caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-nguc-nghieng-phim.jpg", caption: "Phim lồng ngực nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-xuong-uc-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang xương ức nghiêng",
    tuKhoa: ["xuong uc nghieng", "sternum lateral"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "24 × 30 cm" },
      { ten: "kV / mAs", giaTri: "74 kVp · 10 mAs (bề dày 29–34 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,2 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Toàn thể xương ức và mô mềm."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân đứng hay ngồi nghiêng thật thẳng trước giá giữ cassette, đoạn chúng ta điều chỉnh cassette thế nào để bờ trên cán ức nằm dưới bờ trên phim khoảng 4 cm.",
        "Xoay hai vai bệnh nhân ra phía sau và cho họ nắm hai bàn tay lại ở sau lưng.",
        "Đặt bệnh nhân sao cho vai của họ tiếp xúc sát mặt bàn hay mặt phim.",
        "Điều chỉnh thân mình bệnh nhân thật thẳng và xương ức nằm ngay đường giữa của bàn hay phim đồng thời mặt xương ức thẳng góc với mặt phim.",
        "Nếu bệnh nhân là nữ, chúng ta yêu cầu bệnh nhân kéo nhũ hoa sang hai bên đoạn dùng băng quấn lại để giữ yên vị trí mong muốn, nhờ đó bóng của nhũ hoa sẽ không làm mờ hình ảnh của xương ức."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Xương ức được nhìn thấy rõ ràng trên phim ở tư thế nghiêng.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]},
      { tieuDe: "Ghi chú", items: [
        "Tài liệu mô tả tư thế đứng/ngồi (đang áp dụng) và tư thế nằm nghiêng (cùng thông số)."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-uc-nghieng-ct.jpg",   caption: "Tư thế & hướng tia (Clark's)" },
      { src: "images/xq/xq-uc-nghieng-phim.jpg", caption: "Phim xương ức nghiêng — mẫu" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-xuong-uc-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang xương ức chếch",
    tuKhoa: ["xuong uc chech", "sternum oblique", "rao"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "24 × 30 cm" },
      { ten: "kV / mAs", giaTri: "64 kVp · 10 mAs (bề dày 23–26 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Toàn thể xương ức và mô mềm. Đây là một tư thế căn bản thường được dùng cùng với tư thế nghiêng."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Đặt bệnh nhân nằm sấp trên bàn chụp hình đoạn xoay thân mình họ về bên phải một góc từ 20° đến 30° với mặt trước ngực bên phải tiếp xúc sát mặt bàn hay mặt phim.",
        "Đặt cánh tay phải của bệnh nhân duỗi xuôi xuống theo thân mình trong khi đó tay trái đưa về phía đầu với cẳng tay trước mặt.",
        "Bảo bệnh nhân gập đầu gối lại đoạn tựa thân mình trên cẳng tay và đầu gối gập lại này để giữ yên chiếu thế.",
        "Điều chỉnh bệnh nhân sao cho xương ức nằm ngay đường giữa của bàn hoặc phim với bờ trên cán ức nằm dưới bờ trên phim 5 cm, đồng thời mông và vai bệnh nhân cùng nằm trên một bình diện."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung tâm phim, tia trung tâm sẽ thẳng góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Xương ức được nhìn thấy rõ ràng, không bị cột sống ngực hoặc xương bả vai chồng lên.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-xuong-uc-chech-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-xuong-uc-chech-phim2.png", caption: "Phim đạt yêu cầu (1)" },
      { src: "images/xq/xq-xuong-uc-chech-phim3.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Kỹ thuật chụp X quang thông thường – Tập 2 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-thuc-quan-co-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang thực quản cổ nghiêng",
    tuKhoa: ["thuc quan co", "thuc quan nghieng", "di vat thuc quan"],
    thongSo: [
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Chiếu ngang so với phim" }
    ],
    noiDung: [
      { tieuDe: "Chiều thế", items: [
        "Đứng hoặc ngồi trước giá phim, nghiêng về phía bên cần chụp, hai tay xuôi dọc cơ thể.",
        "Vai bên cần chụp sát giá phim, cằm hơi ngửa.",
        "Chỉnh mặt phẳng chính diện vuông góc trục cột sống cổ và vào giữa phim theo chiều dọc."
      ]},
      { tieuDe: "Tia trung tâm", items: [ "Bóng chiếu ngang so với phim." ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Lấy được toàn bộ đốt sống cổ; thấy rõ đường thực quản (khí/dị vật cản quang nếu có)."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-thuc-quan-co-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-thuc-quan-co-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-thuc-quan-co-nghieng-phim2.png", caption: "Phim đạt yêu cầu (2)" },
      { src: "images/xq/xq-thuc-quan-co-nghieng-phim3.png", caption: "Phim đạt yêu cầu (3)" }
    ],
    nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
  },

  {
    id: "xq-o-bung-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang ổ bụng không chuẩn bị (thẳng, đứng)",
    tuKhoa: ["o bung", "bung khong chuan bi", "abdomen", "asp", "tac ruot", "thung tang rong"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "35 × 43 cm hoặc 30 × 40 cm và đặt theo chiều dài" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 15–18 mAs (bề dày 17–21 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn tại mỏm mũi kiếm" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Cơ hoành, đáy phổi, bóng thận, gan và bóng hơi của đại tràng."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân đứng thẳng hoặc ngồi tựa lưng sát vào giá dựng cát xét, hai cánh tay đuôi xuôi theo thân mình.",
        "Điều chỉnh bệnh nhân và cát xét sao cho mặt phẳng dọc giữa của thân mình vuông góc và nằm ngay đường giữa của cát xét, mỏm mũi kiếm nằm ngay trung tâm phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn tại mỏm mũi kiếm, tia trung tâm đi qua điểm này và vuông góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy cả hai vòm hoành.",
        "Toàn ổ bụng xuất hiện trên phim đầy đủ và cân xứng.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-obung-ct.jpg", caption: "Chiều thế (đứng) & hướng tia" },
      { src: "images/xq/xq-o-bung-thang-ct2.png", caption: "Chiều thế (ngồi)" },
      { src: "images/xq/xq-obung-phim.jpg", caption: "Phim đạt yêu cầu (đứng)" },
      { src: "images/xq/xq-o-bung-thang-phim2.png", caption: "Phim đạt yêu cầu (ngồi)" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-o-bung-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang ổ bụng không chuẩn bị (nghiêng)",
    tuKhoa: ["o bung nghieng","bung the nghieng","voi hoa o bung","khoi mo o bung"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "35 × 43 cm hoặc 30 × 40 cm và đặt theo chiều dài" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 25–30 mAs (bề dày 26–30 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn để tia trung tâm vuông góc với mặt phim tại trung tâm" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Quan sát sự vôi hóa và những khối mờ trong ổ bụng."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm nghiêng với hai đầu gối gập lại.",
        "Điều chỉnh thân mình bệnh nhân sao cho mặt phẳng dọc giữa song song với cát sét, bụng nằm ngay đường giữa của bàn chụp.",
        "Hai khuỷu tay bệnh nhân gập lại đưa lên cao ôm lấy đầu.",
        "Điều chỉnh cát xét sao cho trung tâm phim nằm ngang bờ trên mào chậu."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn để tia trung tâm vuông góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hình ảnh rõ nét Thấy toàn bộ ổ bụng tư thế nghiêng từ vòm hoành trở xuống.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-o-bung-nghieng-ct.png", caption: "Chiều thế (nằm nghiêng, tia thẳng đứng)" },
      { src: "images/xq/xq-o-bung-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-o-bung-nam-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang ổ bụng sau – trước (bệnh nhân nằm nghiêng / decubitus)",
    tuKhoa: ["o bung nam nghieng","decubitus","muc nuoc hoi","tac ruot","liem hoi thung tang rong"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "35 × 43 cm hoặc 30 × 40 cm và đặt theo chiều dài" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 25–30 mAs (bề dày 26–30 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Bẻ đầu đèn nằm ngang và ngắm đều đèn ngay trung tâm phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Tư thế này giúp phát hiện mực nước hơi do tắc ruột hoặc liềm hơi do thủng tạng rỗng."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm nghiêng trên băng ca ít nhất 5 phút để hơi tự do nếu có sẽ di chuyển lên cao.",
        "Đầu được đặt trên một chiếc gối với hai đầu gối gập lại.",
        "hai tay ôm đầu.",
        "Đặt cát sét sát vào thành bụng trước, trục phim song song với mặt phẳng dọc dưới của thân mình.",
        "Điều chỉnh thân mình bệnh nhân sao cho hai hông và vai thẳng góc với bàn chụp hình, và trung điểm của đường thẳng nối liền hai mào chậu nằm ngay trung tâm phim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Bẻ đầu đèn nằm ngang và ngắm đều đèn ngay trung tâm phim, tia trung tâm vuông góc với mặt phim tại trung tâm phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ toàn bộ ổ bụng, đặc biệt là góc sườn hoành.",
        "Thấy từ vòm hoành đến bờ trên khớp mu.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-o-bung-nam-nghieng-ct.png", caption: "Chiều thế (nằm nghiêng, decubitus)" },
      { src: "images/xq/xq-o-bung-nam-nghieng-phim.png", caption: "Phim đạt yêu cầu (decubitus)" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  /* ---- Kỹ thuật XQ bổ sung theo tài liệu lỗi (chờ duyệt thông số) ---- */
  {
    id: "xq-cotsong-co-cui-ngua",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cổ cúi – ngửa (chức năng)",
    tuKhoa: ["cot song co cui ngua", "chuc nang cot song co", "flexion extension", "cuoi nga"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 20 cm" },
      { ten: "kV / mAs", giaTri: "Theo cài đặt máy (tham khảo cột sống cổ nghiêng)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,5 – 1,8 m" },
      { ten: "Tia trung tâm", giaTri: "Giữa cổ (ngang C4), vuông góc mặt phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Mục tiêu", items: [
        "Khảo sát chức năng (tầm vận động) cột sống cổ ở tư thế cúi và ngửa tối đa."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân ngồi hoặc đứng, đầu và cổ đặt đúng ở tư thế nghiêng.",
        "Chụp lần lượt hai phim: một phim cúi (gập) tối đa và một phim ngửa (duỗi) tối đa.",
        "Hạ hai vai xuống để không che các đốt sống cổ thấp."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm tia trung tâm vào giữa cổ (ngang mức C4) và vuông góc với mặt phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy đầy đủ các đốt sống cổ ở cả hai tư thế cúi và ngửa tối đa; bờ trên – dưới của C4 đúng thế nghiêng.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-co-cui-ngua-ct.png", caption: "Chiều thế cúi – ngửa" },
      { src: "images/xq/xq-cotsong-co-cui-ngua-phim.png", caption: "Phim đạt yêu cầu (cúi/ngửa)" }
    ],
    nguon: "Tài liệu chỉnh sửa Khoa CĐHA (Loi_XQ) — chờ Trưởng khoa/KTV trưởng duyệt thông số"
  },

  {
    id: "xq-cstl-gap-uon",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống thắt lưng gập – ưỡn (chức năng)",
    tuKhoa: ["cot song that lung gap uon", "chuc nang cstl", "flexion extension lumbar", "cui nga that lung"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "15 × 40 cm" },
      { ten: "kV / mAs", giaTri: "Theo cài đặt máy (tham khảo CSTL nghiêng)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngang mào chậu, nghiêng và vuông góc mặt phim" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Mục tiêu", items: [
        "Khảo sát chức năng (độ vững) cột sống thắt lưng ở tư thế cúi và ưỡn tối đa."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân đứng đúng ở tư thế nghiêng, tựa vào giá giữ cassette.",
        "Hai chân duỗi thẳng và song song, hơi dang, hai tay đưa thẳng lên đầu.",
        "Chụp lần lượt: một phim cúi tối đa và một phim ưỡn (ngửa) tối đa."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Hướng tia nghiêng và vuông góc với mặt phim, ngang mức mào chậu."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ các đốt sống thắt lưng ở cả hai thế cúi và ưỡn tối đa, đúng tư thế nghiêng.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cstl-gap-uon-ct.png", caption: "Chiều thế gập" },
      { src: "images/xq/xq-cstl-gap-uon-ct2.png", caption: "Chiều thế ưỡn" },
      { src: "images/xq/xq-cstl-gap-uon-ct3.png", caption: "Chiều thế (minh họa)" },
      { src: "images/xq/xq-cstl-gap-uon-phim.png", caption: "Phim đạt yêu cầu (gập/ưỡn)" }
    ],
    nguon: "Tài liệu chỉnh sửa Khoa CĐHA (Loi_XQ) — chờ Trưởng khoa/KTV trưởng duyệt thông số"
  },

  {
    id: "xq-nguc-tai-giuong",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang ngực tại giường (portable)",
    tuKhoa: ["nguc tai giuong", "xq tai giuong", "portable chest", "bedside", "phoi tai giuong"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "30 × 40 cm" },
      { ten: "kV / mAs", giaTri: "Theo cài đặt máy di động phù hợp người bệnh" },
      { ten: "Khoảng cách bóng – phim", giaTri: "Tối đa có thể (thường ~1 m)" },
      { ten: "Tia trung tâm", giaTri: "Vuông góc với tấm cassette" },
      { ten: "Lưới lọc", giaTri: "Không (tùy máy)" }
    ],
    noiDung: [
      { tieuDe: "Mục tiêu", items: [
        "Chụp phổi/tim cho người bệnh nặng, không di chuyển được, bằng máy X-quang di động tại giường."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Nâng đầu giường để người bệnh ở tư thế nửa ngồi (hoặc nằm) càng thẳng càng tốt.",
        "Đặt cassette sau lưng, tựa sát mặt sau lồng ngực; mặt phẳng dọc giữa vào giữa phim.",
        "Hai vai cùng mặt phẳng ngang; bờ trên cassette trên vai ~5 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm cassette, ngang mức đốt sống ngực 6–7."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy đủ hai trường phổi và góc sườn hoành trong giới hạn tư thế tại giường.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-nguc-tai-giuong-ct.png", caption: "Chiều thế chụp tại giường" },
      { src: "images/xq/xq-nguc-tai-giuong-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Tài liệu chỉnh sửa Khoa CĐHA (Loi_XQ) — chờ Trưởng khoa/KTV trưởng duyệt thông số"
  },

  {
    id: "xq-suon-chan-thuong",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang lồng ngực khảo sát xương sườn (chấn thương)",
    tuKhoa: ["xuong suon chan thuong", "gay suon", "long nguc chan thuong", "rib trauma"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "30 × 40 cm" },
      { ten: "kV / mAs", giaTri: "Theo cài đặt máy (tham khảo xương sườn / lồng ngực)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Vào vùng sườn tổn thương, vuông góc mặt phim" },
      { ten: "Lưới lọc", giaTri: "Tùy vùng (trên/dưới cơ hoành)" }
    ],
    noiDung: [
      { tieuDe: "Mục tiêu", items: [
        "Khảo sát xương sườn vùng chấn thương (tìm đường gãy), bổ sung cho phim phổi thường quy."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Chụp khu trú vào nửa lồng ngực bên tổn thương; có thể thêm tư thế chếch để bộc lộ đường gãy.",
        "Sườn trên cơ hoành: chụp ở thì hít vào; sườn dưới cơ hoành: chụp ở thì thở ra.",
        "Đưa xương bả vai ra khỏi lồng sườn khi khảo sát sườn phía sau trên cao."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm vào vùng sườn cần khảo sát, tia vuông góc mặt phim (tham khảo kỹ thuật xương sườn)."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ các cung sườn vùng tổn thương và tương quan với màng phổi/khoang phổi.",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-suon-chan-thuong-ct.png", caption: "Chiều thế" },
      { src: "images/xq/xq-suon-chan-thuong-ct2.png", caption: "Chiều thế (chếch)" },
      { src: "images/xq/xq-suon-chan-thuong-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-suon-chan-thuong-phim2.png", caption: "Phim đạt yêu cầu (2)" }
    ],
    nguon: "Tài liệu chỉnh sửa Khoa CĐHA (Loi_XQ) — chờ Trưởng khoa/KTV trưởng duyệt thông số"
  },


  {
    id: "xq-he-tiet-nieu",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang hệ tiết niệu (KUB)",
    tuKhoa: ["he tiet nieu", "kub", "than nieu quan bang quang", "soi tiet nieu", "bung tiet nieu"],
    thongSo: [
      { ten: "Cỡ phim", giaTri: "35 × 43 cm hoặc 30 × 40 cm và đặt theo chiều dài" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 15–18 mAs (bề dày 17–21 cm)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Tia trung tâm", giaTri: "Ngắm đầu đèn ngay trung điểm của đường thẳng nối liền hai mào chậu" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Phần cơ thể nhìn thấy", items: [
        "Bóng gan, lách, cơ thắt lưng (cơ Psoas), thận, bàng quang và đại tràng."
      ]},
      { tieuDe: "Chiếu thế", items: [
        "Bệnh nhân nằm ngửa trên bàn chụp hình, mặt phẳng dọc giữa của thân mình vuông góc và nằm ngay đường giữa của bàn.",
        "Hai đầu gối bệnh nhân gập lại ở một tư thế thuận lợi và thoải mái.",
        "Điều chỉnh hai vai bệnh nhân cùng nằm trên mặt phẳng ngang, hai tay bệnh nhân đưa thẳng lên đầu.",
        "Điều chỉnh cát xét sao cho trung tâm phim nằm ngay trung điểm của đường thẳng nối liền hai mào chậu."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Ngắm đầu đèn ngay trung điểm của đường thẳng nối liền hai mào chậu, tia trung tâm đi qua điểm này và vuông góc với mặt phim tại trung tâm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hình bụng cân xứng và thấy rõ ràng trên phim.",
        "Thấy được bờ trên khớp mu (Nếu có thể lấy cả hai vòm hoành).",
        "Phim rõ nét, tương phản tốt; có họ tên người bệnh, dấu P/T và ngày chụp."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-he-tiet-nieu-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-he-tiet-nieu-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-he-tiet-nieu-phim2.png", caption: "Phim có chú thích giải phẫu" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 3 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  /* ---- X-QUANG XƯƠNG SƯỜN – ỨC – ỨC ĐÒN (Tập 2) ---- */







  /* ---- X-QUANG TIM – PHỔI tư thế bổ sung (Tập 2) ---- */






  /* ------------------------------------- X-QUANG CÓ CẢN QUANG ------------ */
  {
    id: "xq-thuc-quan-da-day",
    phanHe: "xquang", modality: "X-quang", nhom: "XQ đặc biệt",
    ten: "Chụp X-quang thực quản – dạ dày (cản quang)",
    tuKhoa: ["thuc quan da day", "baryt", "barium meal", "da day ta trang", "doi quang kep"],
    thongSo: [
      { ten: "Thiết bị", giaTri: "Máy X-quang tăng sáng truyền hình, có bộ ép" },
      { ten: "Thuốc đối quang", giaTri: "Baryt (Micropaque) đường uống; + hơi (đối quang kép)" },
      { ten: "Chuẩn bị", giaTri: "Nhịn đói buổi sáng" }
    ],
    noiDung: [
      { tieuDe: "Đại cương", items: [
        "Khảo sát hình thái – chức năng thực quản, dạ dày, tá tràng bằng thuốc đối quang đường uống.",
        "Phần lớn chụp đối quang kép: tráng lớp Baryt mỏng rồi bơm hơi để bộc lộ tổn thương bề mặt."
      ]},
      { tieuDe: "Chuẩn bị người bệnh", items: [
        "Khám buổi sáng, nhịn đói, không uống nước, không hút thuốc.",
        "Không dùng thuốc có chất cản quang trong 3 ngày trước.",
        "Thuốc tăng/giảm nhu động (nếu cần) tiêm 15–20 phút trước chụp."
      ]},
      { tieuDe: "Các bước chính", items: [
        "Chụp niêm mạc: nằm ngửa chếch nhẹ trước trái, nuốt ~60 ml Baryt; xoay người để thuốc bám niêm mạc; chụp mặt trước và mặt sau.",
        "Chụp đầy thuốc: đứng uống 150–200 ml; chụp đoạn nối thực quản – tâm vị – túi phình (chếch trước phải); dạ dày đầy chụp thẳng/chếch/nghiêng; nằm ngửa; nằm sấp chếch trước phải để tách khung tá tràng.",
        "Đối quang kép: tiêm thuốc giảm nhu động, uống hơi/thuốc sủi, chụp mặt trước (nằm sấp) và mặt sau (nằm ngửa)."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "KHÔNG dùng Baryt khi nghi thủng tạng rỗng hoặc tắc ruột — thay bằng thuốc i-ốt tan trong nước."
      ]}
    ],
    nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
  },

  {
    id: "xq-ruot-non",
    phanHe: "xquang", modality: "X-quang", nhom: "XQ đặc biệt",
    ten: "Chụp X-quang ruột non (tiểu tràng)",
    tuKhoa: ["ruot non", "tieu trang", "small bowel", "baryt", "enteroclysis"],
    thongSo: [
      { ten: "Thiết bị", giaTri: "Máy tăng sáng truyền hình" },
      { ten: "Thuốc đối quang", giaTri: "Baryt pha ~30% đường uống (hoặc qua ống thông tá tràng)" },
      { ten: "Chuẩn bị", giaTri: "Ăn ít bã 2 ngày, nhuận tràng, thụt tháo sạch" }
    ],
    noiDung: [
      { tieuDe: "Đại cương & chỉ định", items: [
        "Tạo đối quang toàn bộ tiểu tràng (tá tràng → manh tràng), độ căng quai ruột vừa phải, không chồng lấp.",
        "Chỉ định: kém hấp thu, xuất huyết, tắc không rõ nguyên nhân, bệnh Crohn, đau bụng mơ hồ…"
      ]},
      { tieuDe: "Chuẩn bị người bệnh", items: [
        "Ăn không tồn đọng 2 ngày; nhuận tràng 2 ngày; ngừng thuốc ảnh hưởng nhu động/cản quang 12 giờ.",
        "Thụt tháo đại tràng 1,5–2 lít nước ấm (tránh trào ngược dịch/phân vào hồi – hỗng tràng)."
      ]},
      { tieuDe: "Các bước (đường uống)", items: [
        "Chụp bụng không chuẩn bị trước để loại trừ chống chỉ định.",
        "Uống ~300 ml Baryt 30%, theo dõi dưới tăng sáng.",
        "Chụp sau 20–30 phút (nằm ngửa, toàn bụng); uống thêm cốc 300 ml mỗi 30 phút đến khi thuốc ngấm hồi – manh tràng (có thể tới 1h30–2h).",
        "Chụp khu trú vùng hồi manh tràng để kết thúc. (Qua ống thông tá tràng: bơm 80–100 ml/phút, tổng ~1 lít, đối quang kép bằng hơi/methylcellulose.)"
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Nghi thủng ruột, nhồi máu mạc treo, xoắn ruột — không dùng Baryt."
      ]}
    ],
    nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
  },

  {
    id: "xq-dai-trang",
    phanHe: "xquang", modality: "X-quang", nhom: "XQ đặc biệt",
    ten: "Chụp X-quang đại tràng (barium enema)",
    tuKhoa: ["dai trang", "barium enema", "thut baryt", "khung dai trang"],
    thongSo: [
      { ten: "Thiết bị", giaTri: "Máy tăng sáng truyền hình" },
      { ten: "Thuốc đối quang", giaTri: "Baryt pha loãng 30–40% bơm qua hậu môn" },
      { ten: "Chuẩn bị", giaTri: "Ăn ít bã 2 ngày, nhuận tràng, thụt tháo sạch" }
    ],
    noiDung: [
      { tieuDe: "Đại cương", items: [
        "Cản quang khung đại tràng bằng dịch treo Baryt bơm qua hậu môn; điều kiện tiên quyết là thụt tháo ruột sạch hoàn toàn."
      ]},
      { tieuDe: "Chuẩn bị người bệnh", items: [
        "Ăn không tồn đọng (ít xơ bã, không thức ăn lên men) 2 ngày; nhuận tràng 2 ngày.",
        "Thụt tháo 1,5–2 lít nước ấm (đặt cao 40 cm, giữ 10 phút), làm 2 lần trước chụp."
      ]},
      { tieuDe: "Các bước chính", items: [
        "Chụp bụng không chuẩn bị trước.",
        "Bốc Baryt ấm đặt cao > 40 cm, luồn canuyn hậu môn, bơm từ từ dưới theo dõi tăng sáng.",
        "Chụp 3 thì: (1) đầy thuốc — đánh giá trương lực; (2) sau đi ngoài — xem niêm mạc; (3) bơm hơi đối quang kép — xem niêm mạc & thành.",
        "Tư thế theo đoạn: trực tràng (chếch sau trái, nghiêng), sigma (chếch sau trái), góc lách (chếch sau phải), góc gan…"
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Nghi thủng — dùng thuốc i-ốt tan trong nước thay cho Baryt."
      ]}
    ],
    nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
  },

  {
    id: "xq-uiv",
    phanHe: "xquang", modality: "X-quang", nhom: "XQ đặc biệt",
    ten: "Chụp niệu đồ tĩnh mạch (UIV)",
    tuKhoa: ["uiv", "niệu đồ tĩnh mạch", "ivu", "he tiet nieu", "than nieu quan bang quang"],
    thongSo: [
      { ten: "Thuốc đối quang", giaTri: "I-ốt tan trong nước, làm ấm 32–35°C" },
      { ten: "Liều / tốc độ tiêm", giaTri: "1 ml/kg (tối đa 2 ml/kg); 5–6 ml/giây" },
      { ten: "Xét nghiệm trước", giaTri: "Creatinine máu + phim bụng không chuẩn bị" }
    ],
    noiDung: [
      { tieuDe: "Đại cương", items: [
        "Khảo sát hình thái và chức năng bài tiết của đường dẫn niệu sau khi tiêm thuốc đối quang tĩnh mạch."
      ]},
      { tieuDe: "⚠️ Chống chỉ định / nguy cơ", items: [
        "Suy thận nặng, phụ nữ có thai, dị ứng i-ốt, tiểu đường, đa u tủy (Kahler), bệnh tim mạch nặng.",
        "Nhóm nguy cơ (tiền sử dị ứng, >60 tuổi, suy thận, tiểu đường, dùng chẹn bê-ta…): dùng thuốc không ion độ thẩm thấu thấp + dự phòng chống sốc (kháng H1, corticoid) theo phác đồ Bộ Y tế.",
        "Tiểu đường đang điều trị: ngưng thuốc 2 ngày trước và sau. Hai lần tiêm thuốc cách nhau ≥ 5 ngày."
      ]},
      { tieuDe: "Chuẩn bị người bệnh", items: [
        "Không thuốc cản quang 3 ngày trước; ăn ít bã, nhuận tràng nhẹ, thụt tháo; nhịn ăn 4 giờ (uống < 50 ml nước); đi tiểu trước khi lên bàn.",
        "Báo trước cảm giác nóng thoáng qua (20–30 giây) khi tiêm."
      ]},
      { tieuDe: "Sơ đồ chụp (chức năng thận bình thường)", items: [
        "Phim 5 phút: đánh giá chức năng bài tiết.",
        "1–2 phim trong 15 phút đầu: đài bể thận, niệu quản, bàng quang gần đầy thuốc.",
        "30 phút rút kim; nếu cần khảo sát bàng quang – niệu đạo: nhịn tiểu 2–3 giờ rồi chụp thì trước và sau đi tiểu.",
        "Ép niệu quản khi đường dẫn niệu trên không rõ (CHỐNG chỉ định ép: có thai, mới mổ bụng, tắc đường niệu, đau bụng cấp, phình ĐMC, u ổ bụng, thận ghép)."
      ]}
    ],
    nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
  },

  {
    id: "xq-tc-vtc",
    phanHe: "xquang", modality: "X-quang", nhom: "XQ đặc biệt",
    ten: "Chụp tử cung – vòi tử cung (HSG)",
    tuKhoa: ["tu cung voi tu cung", "hsg", "tc vtc", "vo sinh", "voi trung"],
    thongSo: [
      { ten: "Thuốc đối quang", giaTri: "I-ốt tan trong nước, bơm qua cổ tử cung" },
      { ten: "Thời điểm", giaTri: "4–8 ngày sau sạch kinh" },
      { ten: "Áp lực bơm tối đa", giaTri: "< 200 mmHg" }
    ],
    noiDung: [
      { tieuDe: "Đại cương & chỉ định", items: [
        "Khảo sát lòng tử cung và hai vòi tử cung bằng bơm thuốc đối quang qua lỗ cổ tử cung.",
        "Chỉ định: vô sinh, dị dạng/khối choán chỗ lòng tử cung, lạc nội mạc, kiểm tra vòng tránh thai."
      ]},
      { tieuDe: "⚠️ Chống chỉ định tuyệt đối", items: [
        "Mang thai (làm phần đầu chu kỳ; nghi ngờ → thử beta HCG).",
        "Nhiễm trùng phần phụ (nghi ngờ → công thức máu, tốc độ lắng, siêu âm tìm ứ nước vòi)."
      ]},
      { tieuDe: "Các bước chính", items: [
        "Chụp phim tiểu khung không chuẩn bị (tìm vôi hóa, chất cản quang).",
        "Tư thế phụ khoa; sát khuẩn; đặt mỏ vịt; thăm cổ tử cung (có khí hư/viêm → hoãn).",
        "Đặt dụng cụ vào cổ tử cung (đã đuổi hết bọt khí); bơm thuốc nhẹ từng đợt, theo dõi dưới tăng sáng.",
        "Chụp phim thẳng (lớp mỏng, rồi đầy thuốc) thấy lòng tử cung + hai vòi + thuốc ra phúc mạc.",
        "Nếu không thông: bơm áp lực cao (< 200 mmHg) duy trì 5 phút."
      ]}
    ],
    nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
  },

  {
    id: "xq-nieu-dao-bang-quang",
    phanHe: "xquang", modality: "X-quang", nhom: "XQ đặc biệt",
    ten: "Chụp niệu đạo – bàng quang ngược dòng",
    tuKhoa: ["nieu dao bang quang", "nguoc dong", "retrograde", "urethrocystography"],
    thongSo: [
      { ten: "Thuốc đối quang", giaTri: "I-ốt tan trong nước, bơm ngược dòng qua niệu đạo" },
      { ten: "Lượng bơm ban đầu", giaTri: "60–100 ml" },
      { ten: "Kỹ thuật", giaTri: "2 thì: ngược dòng + đi tiểu" }
    ],
    noiDung: [
      { tieuDe: "Đại cương & chỉ định", items: [
        "Khảo sát hình thái và chức năng bài xuất của đường niệu thấp (chủ yếu nam) bằng bơm thuốc đối quang ngược dòng.",
        "Chỉ định: túi thừa/u/vỡ bàng quang, bàng quang thần kinh; hẹp/túi thừa/rò niệu đạo; trào ngược bàng quang – niệu quản."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Đang nhiễm khuẩn tiết niệu (nghi ngờ → xét nghiệm nước tiểu trước)."
      ]},
      { tieuDe: "Chuẩn bị người bệnh", items: [
        "Đi tiểu trước khi lên bàn; thụt tháo phân trước chụp."
      ]},
      { tieuDe: "Các bước chính", items: [
        "Chụp niệu không chuẩn bị (sau đi tiểu).",
        "Sát khuẩn lỗ sáo, đặt ống thông Foley vào niệu đạo trước (cách hố thuyền 2–3 cm), bơm phồng bóng bằng NaCl 2–3 ml.",
        "Bơm 60–100 ml thuốc đối quang, theo dõi tăng sáng; ngừng nếu đau nhiều hoặc thoát thuốc ra thành niệu đạo.",
        "Chụp lúc bơm (nín thở): phim thẳng và chếch.",
        "Chụp bàng quang đầy (có thể bơm thêm NaCl ~200 ml): phim thẳng 30×40 cm lấy hết bàng quang và hai thận tìm trào ngược; chụp chếch/nghiêng."
      ]}
    ],
    nguon: "QUY TRÌNH XQ KHOA CĐHA BVHVGL.docx"
  },

  /* ============================================================ */
  /* X-QUANG — THÔNG SỐ & KỸ THUẬT (Từ điển X-quang)                          */
  /* Nguồn: Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA).            */
  /* ============================================================ */
  {
    id: "xq-ts-kvp",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "kVp — Điện thế bóng",
    tuKhoa: ["kvp", "dien the bong", "dam xuyen", "tuong phan", "tube voltage"],
    thongSo: [
      { ten: "Chụp ngực", giaTri: "100–120 kVp (đâm xuyên qua sườn, thấy nhu mô phổi/trung thất)" },
      { ten: "Chụp xương chi", giaTri: "50–65 kVp (tối đa tương phản trắng-đen, rõ bè xương)" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "kVp quyết định động năng chùm electron → độ đâm xuyên của tia X. kVp càng cao: đâm xuyên mạnh hơn, độ tương phản càng giảm (thang xám dài)."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-mas",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "mAs — Dòng hằng số bóng",
    tuKhoa: ["mas", "dong bong", "do den", "density", "quantum mottle", "nhieu"],
    thongSo: [
      { ten: "Vùng dày (bụng, CS thắt lưng)", giaTri: "mAs cao 40–80" },
      { ten: "Vùng mỏng (bàn tay, bàn chân)", giaTri: "mAs thấp 2–5" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý & ứng dụng", items: [
        "mAs quyết định số lượng photon tia X → độ đen phim (density) và trực tiếp quyết định liều bức xạ.",
        "Tăng mAs: phim đen hơn, giảm nhiễu lượng tử (quantum mottle) nhưng tăng liều."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-sid-oid",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "SID & OID — khoảng cách bóng–phim & vật–phim",
    tuKhoa: ["sid", "oid", "khoang cach", "phong dai", "mag", "source image distance"],
    thongSo: [
      { ten: "SID thường quy", giaTri: "100 cm (40 inch) — xương, bụng, cột sống" },
      { ten: "SID chụp phổi", giaTri: "180 cm (72 inch) — giảm bóng tim to giả" },
      { ten: "OID", giaTri: "Càng nhỏ càng tốt (áp sát detector); OID lớn → phóng đại & mờ viền" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "SID = tiêu điểm → detector; ảnh hưởng độ phóng đại & sắc nét.",
        "OID = vật → phim; đặt vùng chụp sát detector (OID≈0). Ngoại lệ: macroradiography cố tình tăng OID + tiêu điểm nhỏ.",
        "Định luật bình phương nghịch đảo: tăng SID gấp đôi → cường độ giảm 4 lần → phải tăng mAs 4 lần để giữ độ đen."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-grid",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Lưới chống mờ (Grid) & lỗi cắt tia",
    tuKhoa: ["grid", "luoi chong mo", "tan xa", "cut off", "off center", "off level"],
    thongSo: [
      { ten: "Bắt buộc dùng", giaTri: "Vùng dày > 10 cm (bụng, sọ, cột sống, khung chậu)" },
      { ten: "Không dùng", giaTri: "Chi nhỏ (bàn tay, cổ tay, bàn chân) — giảm liều" },
      { ten: "Lưu ý", giaTri: "Dùng grid phải tăng mAs 2–4 lần bù tia bị hấp thụ" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "Tấm lá chì xen kẽ hấp thụ tia tán xạ → tăng tương phản."
      ]},
      { tieuDe: "⚠️ Grid cut-off (phim trắng/mờ do cắt tia)", items: [
        "Off-level: lưới đặt nghiêng không vuông góc tia (trắng toàn bộ).",
        "Off-center: tia trung tâm lệch tâm lưới (trắng dần một phía).",
        "Off-focus: sai khoảng cách SID quy định của lưới hội tụ."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-tieu-diem",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Tiêu điểm phát tia, nguyên lý tiêu điểm đường & hiệu ứng gót Anode",
    tuKhoa: ["tieu diem", "focal spot", "anode heel", "line focus", "got anode"],
    thongSo: [
      { ten: "Tiêu điểm nhỏ", giaTri: "0,3–0,6 mm — chi tiết tinh tế (bàn tay, ngón, vú), giới hạn mAs" },
      { ten: "Tiêu điểm lớn", giaTri: "1,0–1,2 mm — vùng lớn cần mAs cao (bụng, CS thắt lưng, béo phì)" },
      { ten: "Góc vát Anode", giaTri: "thường 12–17°" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "Tiêu điểm càng nhỏ → ảnh càng sắc nét (giảm penumbra).",
        "Nguyên lý tiêu điểm đường: vát nghiêng bia Anode để tiêu điểm thực lớn (tản nhiệt tốt) mà tiêu điểm hiệu dụng nhỏ (nét hơn).",
        "Hiệu ứng gót Anode: chùm tia yếu phía Anode, mạnh phía Cathode → đặt phần cơ thể DÀY về phía Cathode (vd gốc đùi phía Cathode, gối phía Anode)."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-aec",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "AEC — Kiểm soát liều tự động & buồng ion hóa",
    tuKhoa: ["aec", "buong ion hoa", "automatic exposure", "ngat tia"],
    thongSo: [
      { ten: "Nguyên tắc", giaTri: "Buồng ion hóa tự ngắt thời gian phát tia khi đủ photon" }
    ],
    noiDung: [
      { tieuDe: "Ứng dụng & lưu ý", items: [
        "Phải định vị đúng vùng giải phẫu vào đúng buồng ion hóa (phổi PA: 2 buồng hai bên; cột sống: buồng trung tâm).",
        "KHÔNG dùng AEC khi có khớp giả/kim loại lớn — kim loại che tia làm AEC phát quá liều.",
        "Tại bàn điều khiển: tick chọn đúng ô buồng (trái–giữa–phải) tương ứng cơ quan."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-collimation",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Khu trú chùm tia (Collimation)",
    tuKhoa: ["collimation", "khu tru", "cua so chi", "truong chieu", "dap"],
    thongSo: [
      { ten: "Nguyên tắc vàng", giaTri: "Chỉ mở cửa sổ chì vừa đủ vùng cần chụp" }
    ],
    noiDung: [
      { tieuDe: "Lợi ích kép", items: [
        "Giảm diện tích cơ thể bị chiếu xạ (bảo vệ bệnh nhân).",
        "Giảm tia tán xạ → tăng tương phản & sắc nét.",
        "Khép cửa sổ chì là cách giảm DAP (tích số liều–diện tích) hiệu quả nhất."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-loc-tia",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Lọc tia X & HVL (lớp hấp thụ một nửa)",
    tuKhoa: ["loc tia", "filtration", "hvl", "half value layer", "nhom", "tia mem"],
    thongSo: [
      { ten: "Độ lọc tối thiểu", giaTri: "≥ 2,5 mm Nhôm (Al) tương đương (bóng thường quy)" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "Tấm nhôm/đồng chặn tia X năng lượng thấp (tia mềm) — tia mềm chỉ bị da hấp thụ gây hại, không tạo ảnh.",
        "Làm 'cứng' chùm tia, tăng năng lượng trung bình.",
        "HVL = độ dày vật liệu giảm một nửa cường độ chùm tia; dùng đánh giá chất lượng chùm tia khi kiểm định."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-chat-luong-anh",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Chất lượng ảnh: nhiễu, SNR, độ phân giải, DQE, MTF",
    tuKhoa: ["snr", "nhieu", "quantum mottle", "do phan giai", "dqe", "mtf", "resolution"],
    thongSo: [
      { ten: "Độ phân giải không gian", giaTri: "lp/mm — tăng khi tiêu điểm nhỏ, SID dài, OID ngắn, pixel nhỏ" },
      { ten: "SNR", giaTri: "Tăng mAs → tăng tín hiệu → tăng SNR (đổi lại tăng liều)" }
    ],
    noiDung: [
      { tieuDe: "Các khái niệm", items: [
        "Nhiễu lượng tử (quantum mottle): ảnh lốm đốm do thiếu photon (mAs quá thấp) — khắc phục bằng tăng mAs.",
        "Độ phân giải tương phản: phân biệt sắc xám mô gần nhau; kVp thấp & grid làm tăng tương phản.",
        "DQE: hiệu suất chuyển tia X thành tín hiệu — chỉ số quan trọng nhất đánh giá máy; DR > CR.",
        "MTF: độ trung thực tương phản theo kích thước chi tiết (dùng QA/QC); lý tưởng 1,0."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-ei-di",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Chỉ số phơi nhiễm (EI / DI)",
    tuKhoa: ["ei", "di", "exposure indicator", "deviation index", "qua lieu", "thieu tia"],
    thongSo: [
      { ten: "DI = 0", giaTri: "Hoàn hảo" },
      { ten: "DI > +3", giaTri: "Quá liều nặng" },
      { ten: "DI < -3", giaTri: "Thiếu tia nặng (nhiễu hạt)" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "Trong CR/DR, do máy tự bù sáng tối nên không thể nhìn mắt thường biết dư/thiếu tia → phải nhìn EI.",
        "Mỗi hãng có chuẩn EI khác nhau (Agfa S-value & Fuji/Konica S-number tỷ lệ nghịch; Carestream IgM tỷ lệ thuận)."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-anh-so",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Ảnh số: ma trận, pixel, bit depth, LUT",
    tuKhoa: ["ma tran", "matrix", "pixel", "bit depth", "lut", "windowing"],
    thongSo: [
      { ten: "Pixel mâm DR", giaTri: "~100–150 micromet" },
      { ten: "Bit depth", giaTri: "12-bit (4096 sắc xám) hoặc 14-bit (16384 sắc xám)" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "Ma trận = số hàng × cột (vd 2048×2048); ma trận lớn, pixel nhỏ → độ phân giải không gian cao.",
        "Bit depth càng lớn → tương phản càng mượt, dễ chỉnh cửa sổ (windowing) tìm tổn thương ẩn.",
        "LUT (bảng tham chiếu) định hình tương phản theo bộ phận — chọn sai quy trình (vd chụp ngực chọn menu bụng) sẽ áp sai LUT, ảnh xấu."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-tuong-tac-tia",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Tương tác tia X: Compton & quang điện",
    tuKhoa: ["compton", "quang dien", "photoelectric", "tan xa", "tuong tac"],
    thongSo: [
      { ten: "Quang điện (tạo tương phản)", giaTri: "Nhiều ở kVp thấp 50–70 & nguyên tố Z cao (xương, Bari, I-ốt)" }
    ],
    noiDung: [
      { tieuDe: "Hai tương tác chính", items: [
        "Tán xạ Compton: photon đập electron lớp ngoài, lệch hướng — KẺ THÙ của ảnh (gây mù mờ) và là nguồn phơi nhiễm nghề nghiệp chính cho KTV.",
        "Hiệu ứng quang điện: hấp thụ toàn phần — TẠO tương phản (xương hấp thụ nhiều → trắng); tăng quang điện đồng nghĩa tăng liều hấp thụ."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-sinh-tia",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Cơ chế sinh tia X trong bóng phát",
    tuKhoa: ["bremsstrahlung", "buc xa ham", "dac trung", "characteristic", "phat xa nhiet dien tu"],
    thongSo: [
      { ten: "Bức xạ hãm", giaTri: "~85–90% tia X, phổ liên tục (đa sắc) tới mức kVp cài đặt" },
      { ten: "Bức xạ đặc trưng", giaTri: "~10–15%, đơn sắc; với bóng Tungsten chỉ xuất hiện khi kVp ≥ 69,5" }
    ],
    noiDung: [
      { tieuDe: "Cơ chế", items: [
        "Phát xạ nhiệt điện tử (Cathode): dây tóc Tungsten nung nóng bứt electron tạo 'mây electron'; tăng mA → mây dày hơn → nhiều tia X.",
        "Bức xạ hãm (Bremsstrahlung): electron bị hạt nhân Tungsten phanh đột ngột, phát photon tia X.",
        "Bức xạ đặc trưng: electron lớp ngoài lấp chỗ trống lớp K, phát tia X bước sóng cố định."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-hinh-hoc",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Phóng đại, biến dạng & độ sắc nét (penumbra/umbra)",
    tuKhoa: ["phong dai", "bien dang", "elongation", "foreshortening", "penumbra", "umbra", "sac net"],
    thongSo: [
      { ten: "Ảnh thật nhất (1:1)", giaTri: "SID tối đa + OID tối thiểu" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "Phóng đại: ảnh luôn lớn hơn thật do chùm tia hình nón phân kỳ. Chụp ngực PA ép tim sát phim → bóng tim không to giả như AP.",
        "Biến dạng hình dáng: foreshortening (rút ngắn khi vật nghiêng) & elongation (kéo dài khi bẻ góc tia). KTV đôi khi chủ động bẻ góc (vd xương gót axial 40°) để tránh chồng khớp.",
        "Penumbra (mờ viền) giảm khi tiêu điểm nhỏ + SID dài + OID ngắn; Umbra là vùng bóng nét cần tối đa hóa."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-lieu-an-toan",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Liều & an toàn bức xạ (ESD, DAP, Kerma, tán xạ, rò rỉ)",
    tuKhoa: ["esd", "dap", "kap", "air kerma", "tan xa", "ro ri", "an toan buc xa", "ao chi"],
    thongSo: [
      { ten: "DAP (KAP)", giaTri: "Gy·cm² — chuẩn đánh giá nguy cơ ung thư ngẫu nhiên; giảm tốt nhất bằng collimation" },
      { ten: "Rò rỉ cho phép", giaTri: "≤ 1 mGy/giờ ở 1 m khi phát tia tối đa" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm liều", items: [
        "ESD: liều bề mặt da nơi tia vào; đánh giá nguy cơ bỏng da; tăng mạnh ở bệnh nhân béo phì.",
        "DAP = liều trong không khí × diện tích trường chiếu; Air Kerma = động năng giải phóng/khối lượng không khí."
      ]},
      { tieuDe: "An toàn KTV", items: [
        "Tán xạ bắn vào KTV: mặc áo chì, đứng sau bình phong chì, lùi xa nguồn (bình phương nghịch đảo).",
        "Rò rỉ: không ôm sát tay vào đầu bóng khi máy phát tia."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-cr-dr",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "CR vs DR & công nghệ detector",
    tuKhoa: ["cr", "dr", "detector", "flat panel", "csi", "psp", "tft", "selenium", "scintillator"],
    thongSo: [
      { ten: "CR", giaTri: "Cassette PSP → máy quét laser; chậm (1–2 phút/phim); liều cao hơn DR ~20–30%" },
      { ten: "DR", giaTri: "Flat panel (FPD); ảnh trong 1–3 giây; DQE cao → liều thấp" }
    ],
    noiDung: [
      { tieuDe: "Công nghệ detector", items: [
        "PSP (CR): màng Bari Fluorohalide ghi ảnh tiềm tàng — phải quét trong ≤ 8 giờ rồi xóa bằng ánh sáng trắng.",
        "DR gián tiếp (Scintillator CsI/GdOS + a-Si + TFT): phổ biến ~90% máy thường quy; CsI nét hơn GdOS.",
        "DR trực tiếp (a-Se): độ phân giải không gian tuyệt vời nhưng kém nhạy tia năng lượng cao → dùng độc quyền trong chụp nhũ ảnh (mammography).",
        "TFT: mảng bóng bán dẫn định hình pixel; rất dễ nứt nếu rơi mâm → tạo xảo ảnh chết điểm vĩnh viễn."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "xq-ts-he-thong-so",
    phanHe: "xquang", modality: "X-quang", nhom: "Thông số & Kỹ thuật",
    ten: "Hệ thống số hóa (PACS, DICOM, RIS/HIS) & xảo ảnh",
    tuKhoa: ["pacs", "dicom", "ris", "his", "worklist", "xao anh", "motion artifact", "fluoroscopy"],
    thongSo: [
      { ten: "Fluoroscopy pulsed", giaTri: "7,5 hoặc 15 fps giảm ~½ liều so với 30 fps mà mắt vẫn thấy mượt" }
    ],
    noiDung: [
      { tieuDe: "Hệ thống", items: [
        "PACS: lưu trữ & truyền hình ảnh; chụp xong bấm Send/Push → ảnh lên PACS, BS truy cập xem.",
        "DICOM: chuẩn định dạng + header (thông tin BN, liều, kVp/mAs); không nén sang JPEG/PNG để chẩn đoán.",
        "RIS/HIS: quản lý thông tin; Modality Worklist tự kéo danh sách BN xuống máy, tránh nhầm tên/tuổi."
      ]},
      { tieuDe: "⚠️ Xảo ảnh chuyển động", items: [
        "Không tự ý (tim, nhu động ruột): tăng mAs + thời gian cực ngắn (vd 10 ms).",
        "Tự ý (tay chân, hô hấp): ra lệnh nín thở rõ ràng, cố định bằng bao cát/dây đai cho trẻ em."
      ]}
    ],
    nguon: "Từ điển X-quang – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ------------------------------------------------------------------- CT */
  {
    id: "ct-so-nao-khong-tiem",
    phanHe: "ct-mri",
    modality: "CT",
    nhom: "Sọ não",
    ten: "Chụp CLVT sọ não không tiêm thuốc đối quang",
    tuKhoa: ["ct so nao", "cat lop vi tinh", "clvt dau", "head ct", "chan thuong so nao"],
    thongSo: [
      { ten: "Độ dày lát cắt trên lều", giaTri: "7 – 8 mm" },
      { ten: "Độ dày lát cắt dưới lều", giaTri: "2 – 3 mm" },
      { ten: "Tiêm thuốc đối quang", giaTri: "Không" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, đầu vào trước" }
    ],
    noiDung: [
      { tieuDe: "Đại cương", items: [
        "Kỹ thuật thăm khám nhu mô não, xương sọ, hệ thống xoang cạnh mũi và phần mềm da đầu — hiệu quả với cả bệnh lý nội và ngoại khoa."
      ]},
      { tieuDe: "Chỉ định", items: [
        "Chấn thương sọ não nghi chảy máu nội sọ, dị vật, lún sọ…",
        "Nghi bệnh lý nội sọ: u não trong trục và ngoài trục.",
        "Viêm não, áp xe não.",
        "Dị dạng mạch máu não, thông động – tĩnh mạch cảnh xoang hang…",
        "Dị dạng bẩm sinh, động kinh.",
        "Đột quỵ: nhồi máu não, chảy máu não các giai đoạn.",
        "Theo dõi sau điều trị, theo dõi tiến triển máu tụ…"
      ]},
      { tieuDe: "Chống chỉ định (tương đối)", items: [
        "Người bệnh quá kích thích, không nằm yên.",
        "Vùng thăm khám có nhiều kim loại gây nhiễu ảnh.",
        "Người bệnh có thai."
      ]},
      { tieuDe: "Các bước tiến hành", items: [
        "Nằm ngửa trên bàn chụp, đầu vào trước; di chuyển bàn vào máy, định vị tia sáng cho vùng thăm khám.",
        "Chụp định vị (scout).",
        "Đặt chương trình sọ não theo hai trình trên lều (7–8 mm) và dưới lều (2–3 mm).",
        "Phát tia, xử lý hình ảnh trên trạm làm việc, chọn ảnh bộc lộ bệnh lý để in phim.",
        "Bác sĩ đọc tổn thương, mô tả và in kết quả."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Các lớp cắt cân xứng.",
        "Độ tương phản tốt: phân biệt được chất trắng, chất xám.",
        "Hiển thị được thay đổi bất thường về tỷ trọng, hình thái của não, màng não, xương, xoang và phần mềm."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-so-nao-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ não",
    ten: "Chụp CLVT sọ não có tiêm thuốc đối quang",
    tuKhoa: ["ct so nao tiem", "clvt so nao co thuoc", "u nao", "ngam thuoc"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "Trên lều 7–8 mm · dưới lều 2–3 mm" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt tan trong nước, tiêm TM 1–1,5 ml/kg" },
      { ten: "Kim luồn", giaTri: "18–21 G" },
      { ten: "Chuẩn bị", giaTri: "Nhịn ăn 4 giờ (uống < 50 ml nước)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "U não trong/ngoài trục; viêm não – màng não, áp xe não.",
        "Dị dạng mạch máu não (đã phát hiện/nghi trên phim không tiêm).",
        "Tụ máu dưới màng cứng đồng tỷ trọng; theo dõi sau điều trị."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Tiền sử dị ứng (nhất là thuốc đối quang); có thai; nhiều kim loại vùng sọ (tương đối)."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa; chụp định vị; đặt chương trình sọ não 2 trình trên/dưới lều, trường bao trùm toàn bộ nhu mô não.",
        "Tiêm thuốc TM (tay hoặc máy bơm) 1–1,5 ml/kg; chụp sau tiêm.",
        "Xử lý ảnh, chọn ảnh bộc lộ bệnh lý, in phim."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Các lớp cắt cân xứng; phân biệt chất trắng – chất xám.",
        "Hiển thị thay đổi tỷ trọng/hình thái não, màng não, xương, xoang, phần mềm trước và sau tiêm."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-dm-canh",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ não",
    ten: "Chụp CLVT hệ động mạch cảnh có tiêm thuốc (CTA cảnh – sống)",
    tuKhoa: ["dm canh", "cta canh", "dong mach canh", "hep dong mach canh", "boc tach"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 4 dãy)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt, máy bơm điện 2 nòng, ~1,5 ml/kg" },
      { ten: "Test bolus", giaTri: "Ngang C4 (lượng test ~10 ml)" },
      { ten: "Trường chụp", giaTri: "Từ quai động mạch chủ đến hết nền sọ" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Hẹp/tắc động mạch cảnh – sống (đoạn ngoài sọ); bóc tách động mạch.",
        "Bất thường giải phẫu hệ cảnh – sống, trước mổ bắc cầu; loạn sản thành mạch; theo dõi sau điều trị."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Chống chỉ định thuốc đối quang; có thai; nhiều kim loại vùng khám (tương đối)."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, chụp định vị; đặt tĩnh mạch kim 18G nối máy bơm 2 nòng (thuốc + NaCl).",
        "Chụp không thuốc để xóa nền; test bolus ngang C4 tìm đỉnh thuốc.",
        "Chọn thời điểm phát tia trong thì bơm thuốc, trường từ quai ĐM chủ → nền sọ; đuổi thuốc bằng NaCl.",
        "Dựng hình MIP, MPR, VRT."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy rõ, đầy đủ hệ động mạch cảnh – đốt sống trên các hình tái tạo."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-tuoi-mau-nao",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ não",
    ten: "Chụp CLVT tưới máu não (CT Perfusion)",
    tuKhoa: ["tuoi mau nao", "ct perfusion", "dot quy", "penumbra", "nhoi mau nao"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt, máy bơm điện 2 nòng" },
      { ten: "Thông số đo", giaTri: "CBF, CBV, MTT, TTP (lưu lượng, cung lượng, thời gian)" }
    ],
    noiDung: [
      { tieuDe: "Đại cương & chỉ định", items: [
        "Đánh giá tưới máu não; đặc biệt đột quỵ nhồi máu tối cấp – tìm vùng tranh tối tranh sáng (penumbra) còn cứu được.",
        "U não (đánh giá tăng sinh mạch, phân bậc); hẹp mạch nghi ảnh hưởng tưới máu; theo dõi sau lấy huyết khối/tiêu sợi huyết."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Chống chỉ định thuốc i-ốt; có thai; nhiều kim loại vùng sọ (tương đối)."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, chụp định vị; đặt chương trình sọ não (dưới lều 2–3 mm, trên lều 7–8 mm); đánh giá sơ bộ tổn thương.",
        "Đặt TM kim 18G nối máy bơm 2 nòng; đặt lớp chụp tại vùng tổn thương cần đánh giá tưới máu; chụp theo chương trình mặc định.",
        "Xử lý ảnh: đo CBF, CBV, MTT, TTP của vùng thăm khám."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Thấy vùng nhu mô tranh tối – tranh sáng; hiển thị các mạch máu lớn vùng nền sọ."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-mach-mau-nao",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ não",
    ten: "Chụp CLVT mạch máu não (CTA não)",
    tuKhoa: ["mach mau nao", "cta nao", "phinh mach", "di dang mach nao", "ccx"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy; can thiệp ≥ 64 dãy)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt, máy bơm 2 nòng, ~1,5 ml/kg" },
      { ten: "Test bolus", giaTri: "Động mạch cảnh chung ngang C4" },
      { ten: "Trường chụp", giaTri: "Từ C4 đến hết đỉnh sọ" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Nghi bất thường mạch máu não: chảy máu dưới nhện/nhu mô/não thất; dị dạng mạch, phình mạch.",
        "Rò động – tĩnh mạch màng cứng, thông ĐM cảnh xoang hang; huyết khối tĩnh mạch/xoang tĩnh mạch; đánh giá mạch nuôi u màng não; theo dõi sau điều trị."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Chống chỉ định thuốc i-ốt; có thai; nhiều kim loại vùng sọ (tương đối)."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, chụp định vị; đặt TM kim 18G nối máy bơm 2 nòng.",
        "Chụp không thuốc xóa nền; test bolus ĐM cảnh chung ngang C4.",
        "Phát tia trong thì bơm thuốc, trường từ C4 → đỉnh sọ; đuổi thuốc bằng NaCl.",
        "Dựng hình động mạch não MIP, VRT, MPR."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Ảnh rõ nét, không rung/nhiễu cử động; hiển thị hệ động mạch não từ nền sọ đến vòm sọ."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-so-nao-3d",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ não",
    ten: "Chụp CLVT sọ não có dựng hình 3D",
    tuKhoa: ["so nao 3d", "dung hinh 3d", "lun so", "dinh khop so"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt ~1,5 ml/kg (khi dựng 3D mạch máu)" },
      { ten: "Kiểu dựng hình", giaTri: "3D nhu mô não / hộp sọ / mạch máu não" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Bất thường mạch máu não (phình, dị dạng, chảy máu); lún sọ, dính khớp sọ sớm, biến dạng hộp sọ.",
        "Dị vật cản quang trong sọ; u não có chỉ định mổ hoặc xạ định vị nổi (stereotaxy)."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Chống chỉ định thuốc i-ốt; có thai; nhiều kim loại vùng khám (tương đối)."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, chụp định vị; nếu dựng 3D mạch: đặt TM kim 18G, máy bơm 2 nòng, test bolus ĐM cảnh chung ngang C4, trường từ C4 → vòm sọ.",
        "Dựng hình MIP, MPR, VRT; chọn kiểu dựng theo mạch máu / nhu mô / hộp sọ."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Không nhiễu do chuyển động; dựng 3D mạch máu/nhu mô/hộp sọ rõ ràng, đầy đủ."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-sinh-thiet-nao",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ não",
    ten: "Chụp CLVT hướng dẫn sinh thiết não",
    tuKhoa: ["sinh thiet nao", "ct guided biopsy", "u nao sinh thiet"],
    thongSo: [
      { ten: "Vô cảm", giaTri: "Gây mê toàn thân nội khí quản" },
      { ten: "Dụng cụ", giaTri: "Kim dẫn đường (Trocar) 18G, súng + kim sinh thiết 18G" },
      { ten: "Độ dày lát cắt", giaTri: "3 mm (có dụng cụ đánh dấu trên da đầu)" }
    ],
    noiDung: [
      { tieuDe: "Đại cương & chỉ định", items: [
        "Lấy bệnh phẩm tổn thương (u não…) làm giải phẫu bệnh, định hướng điều trị; chẩn đoán phân biệt viêm/u, bệnh thoái hóa.",
        "Kỹ thuật cao, cần trang thiết bị đầy đủ và nhân lực chuyên môn cao."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Có thai; nhiều kim loại vùng khám (tương đối)."
      ]},
      { tieuDe: "Các bước chính", items: [
        "Gây mê NKQ; đặt người bệnh (ngửa/sấp/nghiêng tùy vị trí & hướng tiếp cận); chụp định vị.",
        "Đặt chương trình sọ não (độ dày 3 mm) có dụng cụ đánh dấu trên da đầu; khu trú vùng cần sinh thiết.",
        "Vô khuẩn, rạch da đầu, khoan 1 lỗ xương sọ; đưa kim 18G vào nhu mô; chụp định vị hướng và độ sâu (lặp lại nhiều lần).",
        "Tới tổn thương: bấm súng sinh thiết (thường 3 mảnh) cho vào lọ formol; rút kim, khâu da đầu, băng vô khuẩn, hồi tỉnh."
      ]},
      { tieuDe: "⚠️ Tai biến & xử trí", items: [
        "Chảy máu não (điều trị chuyên khoa); chảy máu da đầu (khâu, băng ép); nhiễm trùng (kháng sinh)."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-ham-mat-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Đầu - Mặt - Cổ",
    ten: "Chụp CLVT hàm – mặt không tiêm thuốc",
    tuKhoa: ["ham mat", "mui xoang", "hong", "chan thuong ham mat", "clvt xoang"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "3 mm, cắt xoắn ốc (bước nhảy = độ dày)" },
      { ten: "Hướng cắt", giaTri: "Cắt ngang (song song khẩu cái cứng) + đứng ngang" },
      { ten: "Cửa sổ", giaTri: "Xương + phần mềm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Chấn thương; viêm – nhiễm trùng; tổn thương u vùng hàm mặt, mũi xoang, họng." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [
        "Phụ nữ có thai (nhất là 3 tháng đầu — che chắn); trẻ nhỏ. Có thể thay bằng CHT."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Cắt ngang: nằm ngửa, mặt phẳng cắt song song khẩu cái cứng, từ nền sọ tới xương móng, độ dày 3 mm.",
        "Cắt đứng ngang: đầu ngửa tối đa (ngửa/sấp), từ chóp mũi tới gai sau cột sống cổ, độ dày 3 mm.",
        "Máy ≥ 16 dãy: chỉ cần cắt ngang xoắn ốc mỏng rồi tái tạo đứng ngang và các hướng khác.",
        "In phim cả 2 hướng, cửa sổ xương và phần mềm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [ "Mô tả rõ vị trí, cấu trúc, kích thước, sự lan rộng của tổn thương." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-ham-mat-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Đầu - Mặt - Cổ",
    ten: "Chụp CLVT hàm – mặt có tiêm thuốc",
    tuKhoa: ["ham mat tiem", "u ham mat", "viem ham mat"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "3 mm, cắt xoắn ốc" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt tan trong nước (máy bơm điện)" },
      { ten: "Cửa sổ", giaTri: "Xương + phần mềm (thì trước và sau tiêm)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Viêm – nhiễm trùng; tổn thương khối u vùng hàm mặt." ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Phụ nữ có thai, trẻ nhỏ (tương đối); chống chỉ định với thuốc đối quang."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Chụp cắt ngang + đứng ngang (độ dày 3 mm) như quy trình không tiêm.",
        "Nhịn ăn 4 giờ; tiêm thuốc i-ốt; chụp lại cắt ngang sau tiêm.",
        "In phim 2 hướng, thì trước và sau tiêm, cửa sổ xương + phần mềm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Mô tả vị trí, cấu trúc, kích thước, lan rộng và đặc điểm ngấm thuốc của tổn thương."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-ham-mat-nha-khoa",
    phanHe: "ct-mri", modality: "CT", nhom: "Đầu - Mặt - Cổ",
    ten: "Chụp CLVT hàm – mặt ứng dụng phần mềm nha khoa (Dentascan)",
    tuKhoa: ["nha khoa", "dentascan", "cay ghep rang", "implant", "panoscan"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "1 mm, khoảng cách 1 mm (không tiêm)" },
      { ten: "mAs", giaTri: "~50 mAs hàm trên · ~150 mAs hàm dưới" },
      { ten: "Tái tạo", giaTri: "Panoscan (song song cung răng) + cross-cut (vuông góc)" },
      { ten: "Cửa sổ tái tạo", giaTri: "WL 750 HU · WW 3500 HU" }
    ],
    noiDung: [
      { tieuDe: "Đại cương", items: [
        "Tái tạo ảnh theo giải phẫu cung răng, cho kích thước thật; quan trọng trong cấy ghép răng và chỉnh hình hàm mặt."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Cắt ngang độ dày 1 mm, cách 1 mm; hàm trên song song vòm miệng cứng, hàm dưới song song bờ nền xương hàm dưới.",
        "Định vị đường cong giữa cung răng; phần mềm tự tái tạo lát panoscan (song song) và cross-cut (vuông góc), dày 1 mm cách 1 mm.",
        "Có thể tái tạo 3D bề mặt mô mềm / xương / răng."
      ]},
      { tieuDe: "Nhận định (cấy ghép răng)", items: [
        "Đánh giá chất lượng xương (mật độ) và kích thước xương (chiều cao, độ rộng) tại vùng cấy ghép.",
        "Lưu ý mốc giải phẫu: nền mũi, đáy xoang hàm trên, ống thần kinh răng dưới."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-ham-mat-3d",
    phanHe: "ct-mri", modality: "CT", nhom: "Đầu - Mặt - Cổ",
    ten: "Chụp CLVT hàm – mặt có dựng hình 3D",
    tuKhoa: ["ham mat 3d", "dung hinh 3d mat", "chinh hinh ham mat"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "Cắt ngang mỏng xoắn ốc để tái tạo 3D" },
      { ten: "Kiểu dựng hình", giaTri: "3D bề mặt xương / phần mềm; MPR đa mặt phẳng" }
    ],
    noiDung: [
      { tieuDe: "Đại cương & chỉ định", items: [
        "Dựng hình 3D khối xương hàm mặt phục vụ chẩn đoán chấn thương phức tạp, dị dạng, lập kế hoạch phẫu thuật – chỉnh hình hàm mặt."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Chụp cắt ngang xoắn ốc lớp mỏng toàn vùng hàm mặt.",
        "Tái tạo đa mặt phẳng (MPR) và dựng bề mặt 3D (xương, phần mềm) theo mục đích thăm khám."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [ "Hình 3D rõ ràng, không nhiễu cử động; bộc lộ đầy đủ cấu trúc cần đánh giá." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-tai-xuong-da-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Đầu - Mặt - Cổ",
    ten: "Chụp CLVT tai – xương đá không tiêm thuốc",
    tuKhoa: ["tai xuong da", "xuong thai duong", "nghe kem", "u tai", "chong mat"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "1 mm, cắt xoắn ốc (độ phân giải cao)" },
      { ten: "Hướng cắt", giaTri: "Cắt ngang (mỏm trâm → bờ trên xương thái dương) + đứng ngang" },
      { ten: "Cửa sổ", giaTri: "Xương + phần mềm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Bất thường bẩm sinh; chấn thương; viêm – nhiễm trùng; nghe kém, ù tai, chóng mặt; tổn thương u."
      ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Có thai (nhất là 3 tháng đầu — che chắn); trẻ nhỏ. Có thể thay bằng CHT." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Cắt ngang độ dày 1 mm, song song khẩu cái cứng, từ mỏm trâm tới bờ trên xương thái dương.",
        "Cắt đứng ngang độ dày 1 mm, từ bờ trước tới bờ sau xương đá.",
        "Máy ≥ 16 dãy: cắt ngang xoắn ốc mỏng rồi tái tạo. In cửa sổ xương + phần mềm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [ "Mô tả rõ vị trí, cấu trúc, kích thước, lan rộng của tổn thương tai – xương đá." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-tai-xuong-da-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Đầu - Mặt - Cổ",
    ten: "Chụp CLVT tai – xương đá có tiêm thuốc",
    tuKhoa: ["tai xuong da tiem", "u tai tiem thuoc"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "1 mm, cắt xoắn ốc" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt tan trong nước (máy bơm điện)" },
      { ten: "Cửa sổ", giaTri: "Xương + phần mềm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Bất thường bẩm sinh; chấn thương; viêm – nhiễm trùng; nghe kém, ù tai, chóng mặt; tổn thương u (đánh giá ngấm thuốc)."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Có thai, trẻ nhỏ (tương đối); chống chỉ định với thuốc đối quang i-ốt." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nhịn ăn 4 giờ; chụp cắt ngang + đứng ngang độ dày 1 mm như quy trình không tiêm.",
        "Tiêm thuốc i-ốt; chụp sau tiêm; in cửa sổ xương + phần mềm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [ "Bộc lộ tổn thương trước và sau tiêm; mô tả đặc điểm ngấm thuốc." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-hoc-mat",
    phanHe: "ct-mri", modality: "CT", nhom: "Đầu - Mặt - Cổ",
    ten: "Chụp CLVT hốc mắt",
    tuKhoa: ["hoc mat ct", "orbit ct", "u hoc mat", "chan thuong hoc mat"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "3 mm, cắt xoắn ốc" },
      { ten: "Hướng cắt", giaTri: "Cắt ngang (bờ dưới → bờ trên hốc mắt) + đứng ngang" },
      { ten: "Thuốc đối quang", giaTri: "Tiêm i-ốt tùy chỉ định lâm sàng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Chấn thương; viêm – nhiễm trùng; tổn thương u vùng hốc mắt." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Có thai (nhất là 3 tháng đầu — che chắn). Có thể thay bằng CHT." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Cắt ngang độ dày 3 mm, song song khẩu cái cứng, từ bờ dưới tới bờ trên hốc mắt.",
        "Cắt đứng ngang độ dày 3 mm, từ chóp phía trước nhãn cầu tới bờ sau hốc mắt.",
        "Tiêm thuốc i-ốt tùy chỉ định; in 2 hướng, cửa sổ xương + phần mềm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [ "Mô tả rõ vị trí, cấu trúc, kích thước, lan rộng của tổn thương hốc mắt." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-long-nguc-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Lồng ngực",
    ten: "Chụp CLVT lồng ngực không tiêm thuốc",
    tuKhoa: ["ct nguc", "clvt long nguc", "phoi trung that", "thanh nguc"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "3–10 mm (tùy kích thước tổn thương), xoắn ốc" },
      { ten: "Trường chụp", giaTri: "Đỉnh phổi → góc sườn hoành (K phổi: tới tuyến thượng thận); FOV 32–40" },
      { ten: "Cửa sổ", giaTri: "Trung thất WL 35/WW 400 · Nhu mô WL −600÷−800/WW 1200" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Tổn thương thành ngực, phổi, trung thất, tim…" ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai (nhất là 3 tháng đầu — che chắn)." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ cao qua đầu; hít vào – nín thở nhiều lần cùng mức để các lớp cắt liên tiếp đúng.",
        "Chụp định vị lấy toàn bộ lồng ngực (nền cổ → hết cơ hoành).",
        "Chụp xoắn ốc liên tiếp từ đỉnh phổi đến hết góc sườn hoành, độ dày 3–10 mm."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [ "Lớp cắt liên tiếp đều, không nhiễu cử động; bộc lộ rõ nhu mô, trung thất, thành ngực." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-long-nguc-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Lồng ngực",
    ten: "Chụp CLVT lồng ngực có tiêm thuốc",
    tuKhoa: ["ct nguc tiem", "trung that tiem", "u phoi"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "3–10 mm, xoắn ốc" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 1,5–2 ml/kg; tốc độ 3–5 ml/s; chụp sau tiêm ~30 s" },
      { ten: "Cửa sổ", giaTri: "Trung thất WL 35/WW 400 · Nhu mô WL −600÷−800/WW 1200" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Tổn thương thành ngực, phổi, trung thất, tim cần đánh giá ngấm thuốc/mạch máu." ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Tuyệt đối: tiền sử dị ứng thuốc đối quang i-ốt.",
        "Tương đối: hen phế quản, cơ địa dị ứng, bệnh lý thận/suy thận, có thai."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ cao, hít – nín thở đều; đặt TM kim 18–20G chịu áp lực cao, nối máy bơm.",
        "Chụp định vị; chụp trước tiêm (đỉnh phổi → góc sườn hoành, độ dày 3–10 mm).",
        "Tiêm i-ốt 1,5–2 ml/kg tốc độ 3–5 ml/s; chụp lại toàn bộ trường phổi ở ~30 s sau tiêm."
      ]},
      { tieuDe: "⚠️ Tai biến & xử trí", items: [
        "Thoát thuốc ngoài mạch; buồn nôn/nôn (nằm nghiêng tránh sặc); dị ứng (chống dị ứng, solumedrol); sốc phản vệ — theo quy trình xử trí tai biến thuốc đối quang."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-phoi-hrct",
    phanHe: "ct-mri", modality: "CT", nhom: "Lồng ngực",
    ten: "Chụp CLVT phổi độ phân giải cao (HRCT)",
    tuKhoa: ["hrct", "do phan giai cao", "phoi ke", "gian phe quan", "bui phoi"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "1–2 mm; bước chuyển bàn 10–15 mm (hoặc xoắn ốc)" },
      { ten: "Thuốc đối quang", giaTri: "Không tiêm" },
      { ten: "Cửa sổ", giaTri: "Trung thất WL 35/WW 400 · Nhu mô WL −600÷−800/WW 900–1200" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Bệnh lý phế quản – phổi kẽ: giãn phế quản, bụi phổi, bệnh phổi mô kẽ…" ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Có thai; (không dùng thuốc nên ít liên quan dị ứng)." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ cao, hít – nín thở đều; chụp định vị toàn bộ lồng ngực.",
        "Chụp lớp cắt mỏng 1–2 mm từ đỉnh phổi đến hết góc sườn hoành, bước 10–15 mm; không tiêm thuốc."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [ "Nhu mô phổi độ phân giải cao, bộc lộ rõ cấu trúc phế quản – mô kẽ." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-dm-chu-nguc",
    phanHe: "ct-mri", modality: "CT", nhom: "Lồng ngực",
    ten: "Chụp CLVT động mạch chủ ngực (CTA ĐM chủ ngực)",
    tuKhoa: ["dm chu nguc", "cta dong mach chu", "phinh tach dm chu", "boc tach"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 4 dãy)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 100–120 ml, tốc độ 4–5 ml/s, + NaCl đuổi thuốc" },
      { ten: "Kỹ thuật canh thì", giaTri: "Bolus tracking tại gốc ĐM chủ" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Hội chứng ĐM chủ cấp (phình tách, máu tụ thành, loét xuyên thành); phình ĐM chủ; viêm ĐM chủ (Takayasu); hẹp eo; xơ vữa; chấn thương nghi tổn thương ĐM chủ."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Không hợp tác; dị ứng i-ốt, tiền sử hen; suy thận; có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, TM kim 18G nối máy bơm; chụp định vị (cổ → ngang vòm hoành; máy đa dãy thường lấy toàn bộ ĐM chủ ngực – bụng).",
        "Chụp trước tiêm (đánh giá máu tụ trong thành tăng tỷ trọng tự nhiên).",
        "Tiêm i-ốt 100–120 ml tốc độ 4–5 ml/s dùng bolus tracking; dựng hình MPR, MIP, VRT."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-dm-vanh",
    phanHe: "ct-mri", modality: "CT", nhom: "Lồng ngực",
    ten: "Chụp CLVT động mạch vành (MSCT mạch vành)",
    tuKhoa: ["dm vanh", "msct vanh", "mach vanh", "coronary cta", "dau nguc"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy chuyên dụng (≥ 64 dãy), có cổng ECG" },
      { ten: "Nhịp tim", giaTri: "Tốt khi < 70 l/p, tối ưu < 60 l/p (dùng chẹn bêta 1–2h trước)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 70–100 ml, tốc độ 4–5 ml/s, + NaCl" },
      { ten: "Tái tạo", giaTri: "Độ dày 0,75/0,4 mm, ở ~65–70% chu chuyển tim (R-R)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Đau ngực không điển hình; nghi bệnh mạch vành (sau gắng sức/siêu âm); yếu tố nguy cơ tim mạch.",
        "Sau phẫu thuật cầu nối/đặt stent; bất thường giải phẫu mạch vành; một số bệnh cơ tim, van tim."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Không hợp tác; dị ứng i-ốt, hen; suy thận; có thai; nhịp tim không đều/rung nhĩ; vật liệu kim loại."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, lắp ECG, TM kim 18G (tốt nhất cẳng tay), khống chế nhịp tim & loạn nhịp.",
        "Chụp định vị (chạc ba khí – phế quản → đáy tim; cầu nối: từ đỉnh phổi).",
        "Tiêm i-ốt 70–100 ml tốc độ 4–5 ml/s (test bolus/bolus tracking); tái tạo 0,75/0,4 mm ở 65–70% R-R; dựng MPR, MIP, VRT."
      ]},
      { tieuDe: "⚠️ Tai biến & xử trí", items: [
        "Thuốc hạ nhịp tim có thể gây tụt huyết áp (nghỉ, bù dịch); tai biến thuốc đối quang — theo quy trình xử trí."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-diem-voi-hoa-vanh",
    phanHe: "ct-mri", modality: "CT", nhom: "Lồng ngực",
    ten: "Chụp CLVT tính điểm vôi hóa động mạch vành (Calcium score)",
    tuKhoa: ["diem voi hoa vanh", "calcium score", "agatston", "sang loc mach vanh"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT (≥ 8 dãy), có cổng ECG" },
      { ten: "Thuốc đối quang", giaTri: "KHÔNG tiêm" },
      { ten: "Độ dày lát cắt", giaTri: "3 mm; trường từ chạc ba khí – phế quản tới mỏm tim" },
      { ten: "Thang điểm", giaTri: "Agatston" }
    ],
    noiDung: [
      { tieuDe: "Đại cương & chỉ định", items: [
        "Đánh giá mức độ vôi hóa (xơ vữa) động mạch vành, phân tầng nguy cơ biến cố tim mạch (không đánh giá mức độ hẹp).",
        "Sàng lọc ở người có yếu tố nguy cơ: tăng huyết áp, tăng mỡ máu, hút thuốc, tiền sử gia đình, cao tuổi."
      ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, lắp ECG, kiểm tra nhịp tim; chụp định vị.",
        "Chụp không tiêm từ chạc ba khí – phế quản tới mỏm tim, độ dày 3 mm; tái tạo lớp mỏng chồng.",
        "Tính điểm vôi hóa theo thang Agatston tại trạm làm việc."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [ "Không nhiễu cử động; tính được điểm vôi hóa từng nhánh và tổng." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-tang-tren-o-bung",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT tầng trên ổ bụng thường quy",
    tuKhoa: ["tang tren o bung", "gan mat tuy lach", "ct bung tren"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "5–8 mm (tổn thương nhỏ 3 mm)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 1,5–2 ml/kg, tốc độ 4–5 ml/s (tối thiểu 3)" },
      { ten: "Các thì chụp", giaTri: "ĐM 25–30 s · TM 60–70 s · muộn 5–7 phút" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Gan (u, viêm, áp xe, chấn thương); đường mật – túi mật (sỏi, u); tụy (viêm, u); lách; dạ dày – tá tràng; u mạc treo, áp xe dưới hoành." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Tiền sử dị ứng thuốc đối quang; thai những tuần đầu." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ lên đầu, nhịn thở; chụp trước và sau tiêm, từ vòm hoành.",
        "Thì trước tiêm: định vị, đo tỷ trọng (mỡ/vôi/máu), so sánh ngấm thuốc.",
        "Thì động mạch 25–30 s (giàu mạch u, thoát thuốc chảy máu); thì tĩnh mạch 60–70 s (thải thuốc, đụng dập/vỡ tạng); thì muộn 5–7 phút (u ngấm muộn)."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-bung-tieu-khung",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT bụng – tiểu khung thường quy",
    tuKhoa: ["bung tieu khung", "ct o bung", "vom hoanh khop mu"],
    thongSo: [
      { ten: "Trường chụp", giaTri: "Từ vòm hoành đến khớp mu" },
      { ten: "Độ dày lát cắt", giaTri: "5–8 mm (tổn thương nhỏ 3 mm)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 1,5–2 ml/kg, 4–5 ml/s; thì ĐM 25–30 s · TM 60–70 s · muộn 5–7 phút" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Gan – mật – tụy – lách; ống tiêu hóa (xuất huyết, chấn thương, u, viêm); u mạc treo, áp xe ổ bụng – tiểu khung; viêm bờm mỡ, hoại tử mạc nối." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Tiền sử dị ứng thuốc đối quang (cấp cứu vẫn chụp + chuẩn bị hộp chống sốc); thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ đầu, nhịn thở; chụp trước và sau tiêm toàn bộ bụng – tiểu khung (vòm hoành → khớp mu).",
        "3 thì động mạch / tĩnh mạch / muộn như tầng trên ổ bụng."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-tieu-khung",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT tiểu khung thường quy",
    tuKhoa: ["tieu khung", "tu cung buong trung", "bang quang tien liet tuyen", "ap xe phan phu"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "5–8 mm (tổn thương nhỏ 3 mm)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 1,5–2 ml/kg, 4–5 ml/s; thì ĐM 25–30 s · TM 60–70 s · muộn 5–7 phút" },
      { ten: "Lưu ý", giaTri: "Nghi rò đường bài xuất: chụp thì rất muộn khi bàng quang căng thuốc" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U tử cung – buồng trứng; viêm/áp xe phần phụ; u bàng quang – tiền liệt tuyến; viêm ruột thừa/túi thừa; u khoang dưới phúc mạc; rò bàng quang – âm đạo, trực tràng – âm đạo." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Tiền sử dị ứng thuốc đối quang." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ đầu, nhịn thở; chụp trước và sau tiêm vùng tiểu khung.",
        "3 thì ĐM/TM/muộn; thì muộn đánh giá thành ống tiêu hóa, thành ổ áp xe; nghi rò bài xuất → thì rất muộn."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-he-tiet-nieu-thuong-quy",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT hệ tiết niệu thường quy",
    tuKhoa: ["he tiet nieu", "soi than nieu quan", "dau quan than", "u than"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "5–8 mm" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 1,5–2 ml/kg, 4–5 ml/s (KHÔNG tiêm nếu suy thận)" },
      { ten: "Các thì", giaTri: "ĐM 25–30 s · TM 60–70 s · muộn/bài xuất 5–7 phút (hoặc muộn hơn khi giãn)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Cơn đau quặn thận; sỏi thận – niệu quản – bàng quang; u thận/đường bài xuất; dị dạng; viêm – áp xe; bệnh lý tiền liệt tuyến, túi tinh." ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Suy thận (không tiêm i-ốt); dị ứng thuốc; thai (cân nhắc)." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ đầu, nhịn thở; chụp trước và sau tiêm toàn bộ hệ tiết niệu.",
        "Thì muộn (bài xuất) quan trọng khi giãn đài bể thận/niệu quản do sỏi, u, chít hẹp — có thể chụp muộn hơn tùy bác sĩ."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Theo dõi dị ứng; tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-tang-tren-mach-tang",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT tầng trên ổ bụng có khảo sát mạch tạng",
    tuKhoa: ["mach tang", "than tang", "mac treo trang tren", "cta tang"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (có phần mềm dựng hình mạch)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 1,5–2 ml/kg, 4–5 ml/s" },
      { ten: "Dựng hình", giaTri: "3D, MIP, MPR mạch tạng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Bệnh lý gan – mật – tụy – lách – dạ dày (u, viêm, chấn thương) cần đánh giá mạch cấp máu/dẫn lưu.",
        "Bilan trước/sau ghép tạng; huyết khối tĩnh mạch cửa – tĩnh mạch gan; nghi huyết khối nhánh ĐM thân tạng, ĐM mạc treo tràng trên."
      ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Dị ứng thuốc đối quang; thai những tuần đầu." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Như tầng trên ổ bụng, dùng máy đa dãy; đánh giá nhu mô + động học ngấm thuốc + dựng hình mạch tạng (3D/MIP/MPR).",
        "3 thì động mạch / tĩnh mạch / muộn."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-he-tiet-nieu-mach-than",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT hệ tiết niệu khảo sát mạch thận và dựng hình bài xuất",
    tuKhoa: ["mach than", "cta than", "dung hinh bai xuat", "urography"],
    thongSo: [
      { ten: "Thuốc đối quang", giaTri: "I-ốt 90–120 ml, tốc độ 3 ml/s" },
      { ten: "Các thì", giaTri: "ĐM (vỏ thận) 20 s · nhu mô 60 s · bài xuất (muộn) 5–7 phút" },
      { ten: "Độ dày / tái tạo", giaTri: "Lát 3–5 mm xoắn ốc; tái tạo < 1 mm, đứng ngang" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Bất thường/viêm hệ tiết niệu; u thận, bệnh lý mạch thận; sỏi, thận ứ nước; đau quặn thận." ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Suy thận, dị ứng i-ốt, thai (cân nhắc)." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, tay trên đầu, nhịn thở; TM kim 18G; tiêm 90–120 ml tốc độ 3 ml/s.",
        "Thì trước tiêm (toàn đường niệu) → ĐM 20 s (vỏ thận) → nhu mô 60 s → bài xuất 5–7 phút (muộn hơn tùy chức năng thận).",
        "Dựng hình động mạch thận và đường bài xuất (MPR/MIP/VR); cửa sổ bụng WL +50/WW 400."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-gan-duong-mat",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT gan có dựng hình đường mật (gan 3 pha)",
    tuKhoa: ["gan 3 pha", "duong mat", "hcc", "u gan", "tac mat"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy)" },
      { ten: "Gan 3 pha", giaTri: "I-ốt 120 ml (2 ml/kg) 4 ml/s: ĐM 20 s · TM cửa 60 s · muộn 3–5 phút" },
      { ten: "Chụp thường", giaTri: "I-ốt 90 ml, 2,5 ml/s, chụp 45 s" },
      { ten: "Độ dày / cửa sổ", giaTri: "Lát 5 mm; tái tạo < 1 mm; cửa sổ WL +40/WW 350" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Gan 3 pha: u ngấm thuốc thì động mạch (HCC, di căn giàu mạch, adenoma, FNH).",
        "Chụp thường: u gan nghèo mạch (di căn đại – trực tràng), tăng áp TM cửa, tổn thương dạng nang; bổ sung siêu âm trong bệnh lý gan – mật, tắc mật, sỏi."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Suy thận, dị ứng i-ốt, thai (cân nhắc)." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, tay trên đầu, nhịn thở; chọn cách chụp (3 pha / thì TM cửa / thường), khu trú gan–mật hay lấy xuống tiểu khung khi tìm di căn.",
        "Gan 3 pha: 120 ml (2 ml/kg) 4 ml/s — ĐM 20 s, TM cửa 60 s; muộn 3–5 phút với u ngấm muộn (u máu gan).",
        "Dựng hình ĐM gan, TM cửa và đường mật (MPR/MIP/VR/3D)."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-huyet-dong-u",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT tạng khảo sát huyết động học khối u (CT tưới máu u)",
    tuKhoa: ["huyet dong u", "ct tuoi mau u", "tang sinh mach u", "perfusion u"],
    thongSo: [
      { ten: "Thuốc đối quang", giaTri: "I-ốt 40–70 ml, tốc độ 6 ml/s" },
      { ten: "Vùng cắt", giaTri: "Khu trú ~2 cm vào vị trí u đường kính lớn nhất" },
      { ten: "Chuỗi cắt động", giaTri: "1 giây/lát, lát 5–10 mm, kéo dài 25–30 s (một lần nín thở)" }
    ],
    noiDung: [
      { tieuDe: "Đại cương & chỉ định", items: [
        "Đánh giá tăng sinh mạch trong khối u (chẩn đoán, phân tầng nguy cơ, theo dõi sau điều trị).",
        "Chỉ định: khối u tạng lồng ngực, ổ bụng, tiểu khung…"
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Suy thận, dị ứng i-ốt, thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Chụp trước tiêm định vị u (vị trí, mật độ, kích thước) ở cuối thì thở ra.",
        "Chọn lát khu trú ~2 cm vào đường kính lớn nhất của u; chụp động 1 s/lát trong 25–30 s khi nín thở; tiêm 40–70 ml tốc độ 6 ml/s.",
        "Lập bản đồ tưới máu, dựng biểu đồ ngấm thuốc; so sánh u với ĐM chủ và nhu mô lành."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-ruot-non-khong-ong",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT ruột non không dùng ống thông (uống nước)",
    tuKhoa: ["ruot non ct", "ct enterography", "crohn", "uong nuoc lam gian ruot"],
    thongSo: [
      { ten: "Làm giãn ruột", giaTri: "Uống ~1000 ml nước trong ~15 phút + thuốc giảm trương lực TM" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 120 ml, 2,5–3 ml/s; chụp 60 s (chảy máu: thì ĐM 25 s)" },
      { ten: "Độ dày / cửa sổ", giaTri: "Trước tiêm 10 mm; sau tiêm 5 mm; cửa sổ bụng WL +50/WW 400" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U ruột non (chảy máu tiêu hóa, thiếu máu mạn không rõ trên nội soi); tắc ruột không hoàn toàn/tắc thấp; bệnh Crohn (rò, tắc); co kéo mạc treo." ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Dị ứng i-ốt; tắc ruột hoàn toàn; có thai. Nhịn ăn 12 giờ." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Uống ~1000 ml nước trong ~15 phút rồi tiêm thuốc giảm trương lực ruột.",
        "Chụp định vị (vòm hoành → xương mu); chụp trước tiêm (gan → bàng quang) đánh giá độ giãn, lát 10 mm Pitch 1,5 (chưa giãn đủ → uống thêm).",
        "Tiêm 120 ml i-ốt 2,5–3 ml/s, chụp xoắn ốc toàn bụng ~60 s (chảy máu: thì ĐM 25 s), lát 5 mm; tái tạo 0,6–1 mm; dựng MPR/MIP/VR/3D."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tiêu chảy do uống nhiều nước (điều trị nội); tai biến thuốc đối quang — theo quy trình." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-ruot-non-co-ong",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT ruột non có dùng ống thông (CT enteroclysis)",
    tuKhoa: ["ruot non ong thong", "enteroclysis", "ong hong trang"],
    thongSo: [
      { ten: "Ống thông", giaTri: "Ống hỗng tràng 8F đặt tới góc Treitz dưới X-quang tăng sáng" },
      { ten: "Bơm nước làm giãn", giaTri: "1500 ml (100–200 ml/phút, max 1600 mmHg; tối đa 2000 ml)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 120 ml, 2,5–3 ml/s; chụp 60 s (chảy máu: ĐM 25 s), lát 5 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U ruột non (chảy máu, thiếu máu mạn không rõ trên nội soi); tắc ruột không hoàn toàn/thấp; Crohn (rò, tắc); co kéo mạc treo." ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [
        "Dị ứng i-ốt; có thai; tắc ruột hoàn toàn.",
        "Không đặt được ống (rối loạn cơ thắt thực quản, hẹp nặng/rò, thoát vị hoành – trào ngược nặng, nối dạ dày – ruột)."
      ]},
      { tieuDe: "Kỹ thuật", items: [
        "Đặt ống hỗng tràng 8F (bôi gel) qua mũi tới góc Treitz dưới tăng sáng, cố định.",
        "Bơm nước làm đầy ruột ~1500 ml (100–200 ml/phút; nghi tắc thấp/ruột ngắn: ≤ 100 ml/phút); rút ống nếu gây nhiễu kim loại.",
        "Tiêm thuốc giảm trương lực; chụp trước tiêm 10 mm; sau tiêm 120 ml i-ốt 2,5–3 ml/s, chụp ~60 s, lát 5 mm; tái tạo 0,6–1 mm."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tiêu chảy (điều trị nội); tai biến thuốc đối quang — theo quy trình." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-dai-trang-noi-soi-ao",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CLVT đại tràng có nội soi ảo (CT colonography)",
    tuKhoa: ["dai trang noi soi ao", "ct colonography", "noi soi ao", "bom hoi dai trang"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT ≥ 8 dãy" },
      { ten: "Làm giãn", giaTri: "Bơm hơi qua hậu môn; chụp cả tư thế nằm ngửa và nằm sấp" },
      { ten: "Thông số", giaTri: "Lát 2,5 mm, 120 kV, 80–100 mAs; tái tạo 0,6–1 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Thăm khám đại tràng đoạn gần khi nội soi không qua được (u, hẹp, gập góc).",
        "Người bệnh chống chỉ định nội soi (suy hô hấp, chống đông, dị ứng thuốc nội soi)."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Cân nhắc tiêm i-ốt khi suy thận, dị ứng, có thai." ]},
      { tieuDe: "Chuẩn bị", items: [ "Ngày trước: ăn ít xơ, thức ăn loãng; uống thuốc tẩy ruột; uống nhiều nước; nhịn ăn trước chụp; kiêng sữa/bia/rượu." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Bơm hơi qua ống thông hậu môn đến mức chịu được; chụp định vị kiểm tra độ căng; chụp từ vòm hoành đến trực tràng thấp (có thể kèm tiêm i-ốt TM).",
        "Chuyển tư thế nằm sấp, bơm hơi tiếp, chụp lại toàn bộ khung đại tràng.",
        "Tái tạo nội soi ảo 3D kết hợp lát cắt ngang 2D (ngửa + sấp)."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang (khi có tiêm) — theo quy trình." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-cs-co-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống cổ không tiêm thuốc",
    tuKhoa: ["ct cot song co", "clvt cs co", "thoat vi dia dem co", "chan thuong cs co"],
    thongSo: [
      { ten: "Định vị", giaTri: "Sagittal, từ khớp thái dương hàm → bờ dưới D1" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, vai hạ thấp tối đa; nhịn thở, không nuốt" },
      { ten: "Cửa sổ", giaTri: "Xương + đĩa đệm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Chấn thương, u, viêm xương và phần mềm cột sống cổ; thoát vị đĩa đệm, thoái hóa, hẹp ống sống." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, vai hạ thấp, hai tay xuôi; nhịn thở & không nuốt khi chụp.",
        "Định vị sagittal (khớp thái dương hàm → bờ dưới D1); cắt theo hướng đĩa đệm (đánh giá thoát vị) hoặc toàn bộ cột sống cổ.",
        "In cửa sổ xương và cửa sổ đĩa đệm."
      ]},
      { tieuDe: "Tiêu chuẩn / nhận định", items: [ "Đánh giá vỡ/xẹp/trượt thân đốt, di lệch tường sau, cung sau, thoát vị đĩa đệm, hẹp ống sống, bất thường bẩm sinh." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-cs-co-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống cổ có tiêm thuốc",
    tuKhoa: ["ct cs co tiem", "u cot song co", "viem lao cot song"],
    thongSo: [
      { ten: "Định vị", giaTri: "Sagittal, khớp thái dương hàm → bờ dưới D1" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt tan trong nước (cắt lại sau tiêm)" },
      { ten: "Cửa sổ", giaTri: "Xương + đĩa đệm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U, viêm (lao) xương và phần mềm cột sống cổ, tủy sống — cần đánh giá ngấm thuốc." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Có thai, suy thận, dị ứng thuốc đối quang i-ốt." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, vai hạ thấp, nhịn thở không nuốt; nhịn ăn 4 giờ.",
        "Chụp như quy trình không tiêm, sau đó cắt lại sau tiêm thuốc i-ốt.",
        "Đối chiếu ảnh trước/sau tiêm; in cửa sổ xương + đĩa đệm."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-cs-co-3d",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống cổ có dựng hình 3D",
    tuKhoa: ["ct cs co 3d", "dung hinh cot song co"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy)" },
      { ten: "Định vị", giaTri: "Sagittal, khớp thái dương hàm → bờ dưới D1" },
      { ten: "Dựng hình", giaTri: "MPR, MIP, VRT, SSD" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Chấn thương, u, viêm xương và phần mềm cột sống cổ cần dựng hình không gian." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, vai hạ thấp, nhịn thở không nuốt; cắt xoắn ốc mỏng toàn bộ cột sống cổ.",
        "Dựng hình MPR, MIP, VRT, SSD; tái tạo mặt phẳng dọc giữa (sagittal) và trán (coronal)."
      ]},
      { tieuDe: "Tiêu chuẩn / nhận định", items: [ "Đánh giá thân đốt, cung sau, đĩa đệm, hẹp ống sống; tương quan giải phẫu, biến đổi tư thế cột sống trên 3D. Phối hợp lớp cắt quy ước với ảnh 3D." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-cs-nguc-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống ngực không tiêm thuốc",
    tuKhoa: ["ct cot song nguc", "clvt cs nguc", "chan thuong cs nguc"],
    thongSo: [
      { ten: "Định vị", giaTri: "Sagittal, từ C7–D1 đến D12–L1" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, hai tay giơ lên đầu; nhịn thở" },
      { ten: "Cửa sổ", giaTri: "Xương + đĩa đệm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Chấn thương, u, viêm xương và phần mềm cột sống ngực; thoát vị đĩa đệm, thoái hóa." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ đầu, nhịn thở; định vị sagittal toàn bộ cột sống ngực.",
        "Cắt theo hướng đĩa đệm hoặc toàn bộ; in cửa sổ xương + đĩa đệm."
      ]},
      { tieuDe: "Tiêu chuẩn / nhận định", items: [ "Đánh giá vỡ/xẹp/trượt thân đốt, cung sau, thoát vị, hẹp ống sống, bất thường bẩm sinh." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-cs-nguc-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống ngực có tiêm thuốc",
    tuKhoa: ["ct cs nguc tiem", "u cot song nguc"],
    thongSo: [
      { ten: "Định vị", giaTri: "Sagittal, từ C7–D1 đến D12–L1" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt tan trong nước (cắt lại sau tiêm)" },
      { ten: "Cửa sổ", giaTri: "Xương + đĩa đệm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U, viêm (lao) xương và phần mềm cột sống ngực, tủy sống — đánh giá ngấm thuốc." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Có thai, suy thận, dị ứng thuốc đối quang i-ốt." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ đầu, nhịn thở; nhịn ăn 4 giờ.",
        "Chụp như quy trình không tiêm, cắt lại sau tiêm; đối chiếu trước/sau tiêm."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-cs-nguc-3d",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống ngực có dựng hình 3D",
    tuKhoa: ["ct cs nguc 3d", "dung hinh cot song nguc"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy)" },
      { ten: "Định vị", giaTri: "Sagittal, từ C7–D1 đến D12–L1" },
      { ten: "Dựng hình", giaTri: "MPR, MIP, VRT, SSD" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Chấn thương, u, viêm cột sống ngực cần dựng hình không gian." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ đầu, nhịn thở; cắt xoắn ốc mỏng toàn bộ cột sống ngực.",
        "Dựng hình MPR, MIP, VRT, SSD; tái tạo sagittal và coronal."
      ]},
      { tieuDe: "Tiêu chuẩn / nhận định", items: [ "Đánh giá thân đốt, cung sau, hẹp ống sống; tương quan giải phẫu, biến dạng cột sống trên 3D." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-cs-tl-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống thắt lưng không tiêm thuốc",
    tuKhoa: ["ct cot song that lung", "clvt csl", "thoat vi dia dem that lung"],
    thongSo: [
      { ten: "Định vị", giaTri: "Sagittal, từ D12 đến S1" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, hai tay giơ lên đầu" },
      { ten: "Cửa sổ", giaTri: "Xương + đĩa đệm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Chấn thương, u, viêm xương và phần mềm cột sống thắt lưng; thoát vị đĩa đệm, thoái hóa, hẹp ống sống, trượt đốt sống." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ đầu; định vị sagittal (D12 → S1).",
        "Cắt theo hướng các đĩa đệm (L1-2 → L5-S1) hoặc toàn bộ; in cửa sổ xương + đĩa đệm."
      ]},
      { tieuDe: "Tiêu chuẩn / nhận định", items: [ "Đánh giá thân đốt, cung sau, thoát vị đĩa đệm, hẹp ống sống, trượt/thoái hóa, bất thường bẩm sinh." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-cs-tl-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống thắt lưng có tiêm thuốc",
    tuKhoa: ["ct csl tiem", "u cot song that lung"],
    thongSo: [
      { ten: "Định vị", giaTri: "Sagittal, từ D12 đến S1" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt tan trong nước (cắt lại sau tiêm)" },
      { ten: "Cửa sổ", giaTri: "Xương + đĩa đệm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U, viêm (lao) xương và phần mềm cột sống thắt lưng, tủy – rễ thần kinh — đánh giá ngấm thuốc." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Có thai, suy thận, dị ứng thuốc đối quang i-ốt." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ đầu; nhịn ăn 4 giờ.",
        "Chụp như quy trình không tiêm, cắt lại sau tiêm; đối chiếu trước/sau tiêm."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-cs-tl-3d",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống thắt lưng có dựng hình 3D",
    tuKhoa: ["ct csl 3d", "dung hinh cot song that lung"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy)" },
      { ten: "Định vị", giaTri: "Sagittal, từ D12 đến S1" },
      { ten: "Dựng hình", giaTri: "MPR, MIP, VRT, SSD" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Chấn thương, u, viêm cột sống thắt lưng cần dựng hình không gian; lập kế hoạch phẫu thuật." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, hai tay giơ đầu; cắt xoắn ốc mỏng toàn bộ cột sống thắt lưng.",
        "Dựng hình MPR, MIP, VRT, SSD; tái tạo sagittal và coronal."
      ]},
      { tieuDe: "Tiêu chuẩn / nhận định", items: [ "Đánh giá thân đốt, cung sau, hẹp ống sống, trượt đốt; tương quan giải phẫu trên 3D." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-khop-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp",
    ten: "Chụp CLVT khớp thường quy không tiêm thuốc",
    tuKhoa: ["ct khop", "clvt khop", "thoai hoa khop", "chan thuong khop"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "1,25–2,5 mm, cắt xoắn ốc" },
      { ten: "kV / mAs", giaTri: "120 kV · 150–250 mAs · vòng quay < 1 s" },
      { ten: "Cửa sổ", giaTri: "Xương + mô mềm (FOV nhỏ sát khớp)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U, viêm xương, thoái hóa khớp; tổn thương khớp do chấn thương; bất thường bẩm sinh khớp." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa (tư thế tùy khớp chụp); cắt ngang bao phủ toàn bộ khớp và đầu trên/dưới các xương cấu tạo khớp.",
        "Dựng ảnh MPR/3D theo các hướng, ưu tiên bộc lộ tổn thương; in cửa sổ xương + mô mềm."
      ]},
      { tieuDe: "Tiêu chuẩn / nhận định", items: [ "Hiển thị rõ cấu trúc khớp; phát hiện tổn thương nếu có." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-khop-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp",
    ten: "Chụp CLVT khớp thường quy có tiêm thuốc",
    tuKhoa: ["ct khop tiem", "u xuong khop", "viem xuong khop"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "1,25–2,5 mm, xoắn ốc" },
      { ten: "kV / mAs", giaTri: "120 kV · 150–250 mAs" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt TM 1–1,5 ml/kg, tốc độ 2–3 ml/s" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U xương khớp; viêm xương khớp, thoái hóa khớp; bất thường bẩm sinh — cần đánh giá ngấm thuốc." ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Có thai, suy thận, dị ứng thuốc đối quang i-ốt (tương đối)." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Cắt ngang bao phủ khớp như quy trình không tiêm; sau đó lặp lại các lớp cắt có tiêm i-ốt TM 1–1,5 ml/kg tốc độ 2–3 ml/s.",
        "Dựng MPR/3D; in cửa sổ xương + mô mềm."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-khop-tiem-o-khop",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp",
    ten: "Chụp CLVT khớp có tiêm thuốc vào ổ khớp (CT arthrography)",
    tuKhoa: ["ct arthrography", "tiem o khop", "chup khop can quang noi khop", "sun chem"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT (≥ 4 dãy) + X-quang tăng sáng truyền hình" },
      { ten: "Dụng cụ", giaTri: "Kim chọc khớp chuyên dụng" },
      { ten: "Thuốc", giaTri: "I-ốt pha nước muối sinh lý, bơm vào ổ khớp" }
    ],
    noiDung: [
      { tieuDe: "Đại cương", items: [ "Bộc lộ tổn thương kín đáo trong khớp (nhất là sau chấn thương) khó thấy trên các kỹ thuật thường quy — bơm thuốc đối quang nội khớp rồi chụp CLVT." ]},
      { tieuDe: "Các bước chính", items: [
        "Không cần gây tê; nằm trên bàn X-quang tăng sáng; sát khuẩn, trải toan vô khuẩn; định vị khe khớp.",
        "Chọc kim vào ổ khớp; trộn i-ốt + NaCl theo tỉ lệ/thể tích phù hợp từng khớp; bơm vào ổ khớp dưới kiểm soát tăng sáng.",
        "Rút kim, băng; chuyển sang phòng CT chụp khớp theo quy trình chụp khớp thông thường; xử lý ảnh, in phim."
      ]},
      { tieuDe: "⚠️ Tai biến & xử trí", items: [
        "Chảy máu/tụ máu vị trí chọc (băng ép, theo dõi); nhiễm trùng khớp (khám chuyên khoa); tai biến thuốc đối quang — theo quy trình."
      ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-xuong-chi-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp",
    ten: "Chụp CLVT xương chi không tiêm thuốc",
    tuKhoa: ["ct xuong chi", "clvt xuong", "gay xuong", "u xuong"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "1,25–2,5 mm, xoắn ốc" },
      { ten: "kV / mAs", giaTri: "120 kV · 150–250 mAs · vòng quay < 1 s" },
      { ten: "Cửa sổ", giaTri: "Xương + mô mềm (FOV nhỏ)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U, viêm xương, thoái hóa; tổn thương xương do chấn thương; bất thường bẩm sinh xương chi." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Phụ nữ có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa (tư thế chi giống chụp mạch chi); cắt ngang bao phủ vùng tổn thương hoặc toàn bộ chiều dài xương/chi.",
        "Dựng ảnh MPR/3D theo các hướng; in cửa sổ xương + mô mềm."
      ]},
      { tieuDe: "Tiêu chuẩn / nhận định", items: [ "Hiển thị rõ cấu trúc xương chi; phát hiện tổn thương nếu có." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-xuong-chi-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp",
    ten: "Chụp CLVT xương chi có tiêm thuốc",
    tuKhoa: ["ct xuong chi tiem", "u xuong phan mem", "viem xuong"],
    thongSo: [
      { ten: "Độ dày lát cắt", giaTri: "1,25–2,5 mm, xoắn ốc" },
      { ten: "kV / mAs", giaTri: "120 kV · 150–250 mAs" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt TM làm bộc lộ tổn thương" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "U xương và phần mềm; viêm xương cấp – mạn tính." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Dị ứng i-ốt, hen phế quản, suy gan – thận; có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Cắt ngang bao phủ vùng tổn thương/toàn bộ xương như quy trình không tiêm; kết hợp tiêm i-ốt TM bộc lộ tổn thương.",
        "Dựng ảnh xương và phần mềm MPR/3D; in cửa sổ xương + mô mềm."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-dm-chu-chau",
    phanHe: "ct-mri", modality: "CT", nhom: "Mạch máu",
    ten: "Chụp CLVT động mạch chủ – chậu (CTA chủ – chậu)",
    tuKhoa: ["dm chu chau", "cta chu chau", "phinh dm chu bung", "aaa"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy)" },
      { ten: "Thuốc đối quang", giaTri: "I-ốt 120 ml, tốc độ 3 ml/s" },
      { ten: "Thì chụp / độ dày", giaTri: "Thì ĐM sau tiêm 20 s; lát 3 mm; tái tạo 0,6–1 mm" },
      { ten: "Cửa sổ", giaTri: "WL +100/WW 350 (hoặc WL +80/WW 500)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Phình động mạch chủ bụng (kích thước, hình dạng, vị trí so ĐM thận/ngã ba chủ chậu, huyết khối/bóc tách).",
        "Bổ sung siêu âm Doppler; tổng kê trước phẫu thuật/can thiệp nội mạch; cấp cứu phình ĐM chủ đau bụng."
      ]},
      { tieuDe: "⚠️ Chống chỉ định", items: [ "Suy thận, dị ứng i-ốt, có thai (cân nhắc)." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, tay trên đầu; TM kim 18G; tiêm 120 ml i-ốt 3 ml/s (bơm điện).",
        "Thì trước tiêm: D12 → trần ổ cối, lát 10 mm; thì ĐM 20 s (túi phình → ĐM chậu gốc), lát 3 mm.",
        "Tái tạo lát mỏng 0,6–1 mm; dựng hình MPR, MIP, VR, 3D (liên quan ĐM thận, ĐM chậu)."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-mach-chi-tren",
    phanHe: "ct-mri", modality: "CT", nhom: "Mạch máu",
    ten: "Chụp CLVT mạch máu chi trên (CTA chi trên)",
    tuKhoa: ["mach chi tren", "cta chi tren", "hep tac dm chi tren"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy; tốt nhất ≥ 64)" },
      { ten: "Độ dày / pitch", giaTri: "Lát 0,5–0,625 mm; pitch 0,6–1,375; vòng quay 0,33–0,5 s" },
      { ten: "Canh thì", giaTri: "Bolus timing đặt điểm đo tại ĐM chủ ngực" },
      { ten: "Trường chụp", giaTri: "Từ quai ĐM chủ (hoặc ĐM dưới đòn) đến hết ngón tay" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Hẹp/tắc động mạch cấp – mạn; phình mạch, dị dạng mạch; kiểm tra sau đặt stent; đánh giá giải phẫu hệ ĐM chi trên." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Dị ứng i-ốt, hen; suy gan – thận; có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, giơ tay lên cao (hoặc xuôi tay khi cần đúng tư thế giải phẫu); đặt TM kim 18G ở chi đối diện.",
        "Cắt định hướng; cắt 5 mm trước tiêm đặt điểm đo tỷ trọng ĐM chủ ngực (Bolus timing); cắt sau tiêm từ quai ĐM chủ → ngón tay.",
        "Dựng ảnh MIP, VR theo các hướng."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-mach-chi-duoi",
    phanHe: "ct-mri", modality: "CT", nhom: "Mạch máu",
    ten: "Chụp CLVT mạch máu chi dưới (CTA chi dưới)",
    tuKhoa: ["mach chi duoi", "cta chi duoi", "hep tac dm chi duoi", "thieu mau chi"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (≥ 8 dãy; tốt nhất ≥ 64)" },
      { ten: "Độ dày / pitch", giaTri: "Lát 0,5–0,625 mm; pitch 0,6–1,375; vòng quay 0,33–0,5 s" },
      { ten: "Canh thì", giaTri: "Bolus timing tại đoạn cuối ĐM chủ bụng" },
      { ten: "Trường chụp", giaTri: "Từ ngã ba chủ – chậu đến hết ngón chân" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [ "Hẹp/tắc động mạch cấp – mạn; phình mạch, dị dạng mạch; kiểm tra sau đặt stent; đánh giá giải phẫu hệ ĐM chi dưới." ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Dị ứng i-ốt, hen; suy gan – thận; có thai." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa, chân hướng về khung máy, hai chân duỗi thẳng, buộc hai ngón chân cái cố định; TM kim 18G ở chi trên.",
        "Cắt định hướng; cắt 5 mm trước tiêm đặt điểm đo tỷ trọng đoạn cuối ĐM chủ bụng (Bolus timing); cắt sau tiêm từ ngã ba chủ – chậu → ngón chân.",
        "Dựng ảnh MIP, VR theo các hướng."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-tam-soat-toan-than",
    phanHe: "ct-mri", modality: "CT", nhom: "Toàn thân",
    ten: "Chụp CLVT tầm soát toàn thân",
    tuKhoa: ["toan than", "tam soat", "da chan thuong", "di can", "trauma ct"],
    thongSo: [
      { ten: "Máy", giaTri: "CLVT đa dãy (tốt nhất ≥ 64 dãy)" },
      { ten: "Trường chụp", giaTri: "Đỉnh sọ → hết tiểu khung (có thể mở rộng)" },
      { ten: "kV / mAs / vòng quay", giaTri: "120 kV · 130–300 mAs · 0,33–0,5 s" },
      { ten: "Độ dày", giaTri: "Trước tiêm 5 mm · thì ĐM 1,25–2,5 mm · thì TM cửa 2,5–5 mm" },
      { ten: "Thuốc đối quang", giaTri: "1,5–2 ml/kg, tốc độ 3–5 ml/s; Bolus timing ĐM chủ ngực (~200 HU) hoặc ĐM 25–27 s, TM 60 s" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tìm tổn thương di căn/xác định u nguyên phát.",
        "Đa chấn thương nặng cần nhanh chóng chẩn đoán vị trí và phân loại tổn thương."
      ]},
      { tieuDe: "⚠️ Chống chỉ định (tương đối)", items: [ "Dị ứng i-ốt, hen; suy gan – thận." ]},
      { tieuDe: "Kỹ thuật", items: [
        "Nằm ngửa; tầng ngực – bụng đưa tay lên đầu (tránh nhiễu); tầng sọ xuôi tay; đặt kim 18G (chi đối bên tổn thương ngực).",
        "Cắt liên tục cổ – ngực – bụng – tiểu khung trước tiêm và sau tiêm 2 thì ĐM/TM; dùng Bolus timing tại ĐM chủ ngực.",
        "Tái tạo MPR, MIP, VRT (lát 1,5–3 mm) và 3D theo tổn thương; theo dõi dị ứng muộn sau chụp."
      ]},
      { tieuDe: "⚠️ Tai biến", items: [ "Tai biến thuốc đối quang — theo quy trình xử trí." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  /* ============================================================ */
  /* CT — THAM KHẢO KỸ THUẬT (Từ điển CT / CT Angiography / Liều thấp / Tưới máu) */
  /* Nguồn: Từ điển CT – Wikiradiology KTV 3 Miền (giấy phép CC BY-SA) + công cụ    */
  /* CT Coronary Smart Protocol. Bổ trợ cho QUY TRÌNH CLVT của khoa; con số kỹ      */
  /* thuật đã được Trưởng khoa / BS duyệt (16/10/2026).                            */
  /* ============================================================ */

  /* ---- Mạch máu (CTA) ---- */
  {
    id: "ct-ref-ctpa",
    phanHe: "ct-mri", modality: "CT", nhom: "Mạch máu",
    ten: "CTA động mạch phổi (CTPA) — kỹ thuật",
    tuKhoa: ["ctpa", "thuyen tac phoi", "pe", "pulmonary embolism", "tac mach phoi"],
    thongSo: [
      { ten: "Chiều quét", giaTri: "Từ vòm hoành (dưới) lên đỉnh phổi (trên) để tránh xảo ảnh hô hấp" },
      { ten: "Lượng thuốc", giaTri: "50–70 ml, tốc độ 4,5–5 ml/s + saline chaser 30 ml" },
      { ten: "Timing", giaTri: "Bolus Tracking ROI tại trung tâm thân ĐM phổi; hoặc Test Bolus 10–15 ml + 30 ml muối" },
      { ten: "Tái tạo", giaTri: "MIP mỏng 3–5 mm Coronal/Axial; dựng cửa sổ phổi" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Nghi tắc mạch phổi (PE) cấp/mạn, ho ra máu, khó thở đột ngột, D-Dimer tăng cao."
      ]},
      { tieuDe: "Kỹ thuật & lưu ý", items: [
        "Nếu bệnh nhân không nín thở nổi: quét vùng đáy phổi trước (nơi dễ có huyết khối nhất).",
        "Dặn nín thở RẤT NHẸ NHÀNG (không rặn) — nín quá sức (Valsalva) đẩy thuốc dội về tĩnh mạch chủ, mạch phổi không có thuốc.",
        "Lựa chọn khác: Dual Energy (bản đồ tưới máu i-ốt phát hiện nhồi máu vi thể); High-pitch/Flash quét toàn ngực < 1 giây cho bệnh nhân thở máy / không nín thở."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ref-ccta",
    phanHe: "ct-mri", modality: "CT", nhom: "Mạch máu",
    ten: "CTA mạch vành (CCTA) — kỹ thuật & liều thuốc",
    tuKhoa: ["ccta", "mach vanh", "dm vanh", "coronary", "calcium score", "agatston"],
    thongSo: [
      { ten: "Yêu cầu nhịp tim", giaTri: "< 65 l/p, nhịp đều (BS cho chẹn beta nếu nhanh)" },
      { ten: "Nitroglycerin", giaTri: "Ngậm dưới lưỡi 3–5 phút trước bơm thuốc để giãn mạch vành" },
      { ten: "Lượng thuốc", giaTri: "60–80 ml, tốc độ 5–6 ml/s" },
      { ten: "Timing", giaTri: "Bolus Tracking ROI tại ĐM chủ xuống ngang ngã ba khí quản, trigger 100–150 HU" },
      { ten: "Tái tạo", giaTri: "Pha tâm trương (≈70–75% R-R); MPR cong theo LAD/LCx/RCA; VRT 3D" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tầm soát hẹp mạch vành, đau thắt ngực không điển hình, nguy cơ trung bình, đánh giá stent / cầu nối (CABG)."
      ]},
      { tieuDe: "Các bước", items: [
        "Chụp không thuốc đồng bộ điện tim: đo điểm vôi hóa mạch vành (Calcium Scoring – Agatston).",
        "Chụp có thuốc: quét từ carina đến hết đáy tim.",
        "Chọn chế độ theo nhịp: Tiến cứu (prospective, liều thấp, cần nhịp < 65) · Hồi cứu (retrospective, liều cao, đánh giá chức năng thất) · High-pitch/Flash (toàn tim 1 nhịp ~250 ms, cần nhịp rất đều chậm)."
      ]},
      { tieuDe: "💉 Tính liều thuốc", items: [
        "Dùng Máy tính liều CCTA ở tab ④ Công cụ: Tốc độ (ml/s) = (Cân nặng × IDR) ÷ (Nồng độ ÷ 1000); Tổng thể tích = Tốc độ × thời gian tiêm.",
        "IDR chuẩn 0,021 gI/kg/s; chọn kVp & IDR theo cân nặng (bảng tham chiếu trong công cụ)."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology & CT Coronary Smart Protocol v3.2 (khoa CĐHA)."
  },
  {
    id: "ct-ref-cta-canh-noi-so",
    phanHe: "ct-mri", modality: "CT", nhom: "Mạch máu",
    ten: "CTA động mạch cảnh & nội sọ — kỹ thuật",
    tuKhoa: ["cta canh", "noi so", "carotid", "cerebral", "lvo", "phinh mach", "aneurysm", "avm"],
    thongSo: [
      { ten: "Chiều quét", giaTri: "Từ quai ĐM chủ lên đỉnh sọ" },
      { ten: "Lát cắt", giaTri: "0,5–1 mm (mỏng nhất có thể)" },
      { ten: "Lượng thuốc", giaTri: "50–60 ml, tốc độ 4–5 ml/s" },
      { ten: "Timing", giaTri: "Bolus Tracking ROI quai ĐM chủ / thân chung ĐM cảnh, trigger ~100 HU" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Nhồi máu não cấp (tìm tắc mạch lớn LVO), phình ĐM não, xơ vữa hẹp ĐM cảnh, dị dạng AVM."
      ]},
      { tieuDe: "Kỹ thuật & lưu ý", items: [
        "Yêu cầu bệnh nhân TUYỆT ĐỐI không nuốt nước bọt khi tiêm — nuốt gây xảo ảnh cắt đứt ĐM cảnh ngang sụn giáp.",
        "Dựng VRT 3D từ tim lên não; MIP mỏng để đo độ hẹp / cổ túi phình.",
        "Lựa chọn khác: CT tưới máu não (Core/Penumbra); 4D CTA đánh giá chiều dòng chảy AVM / rò màng cứng (dAVF)."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ref-cta-dm-chu",
    phanHe: "ct-mri", modality: "CT", nhom: "Mạch máu",
    ten: "CTA động mạch chủ toàn bộ — kỹ thuật",
    tuKhoa: ["cta dm chu", "aorta", "boc tach", "dissection", "phinh", "evar", "tevar", "endoleak"],
    thongSo: [
      { ten: "Chiều quét", giaTri: "Đỉnh ngực (ngang nhánh cảnh) → chỗ đôi ĐM chậu (khớp mu)" },
      { ten: "Lượng thuốc", giaTri: "70–90 ml, tốc độ 4–5 ml/s" },
      { ten: "Timing", giaTri: "Bolus Tracking ROI tại ĐM chủ lên ngang gốc ĐM phổi" },
      { ten: "Pha", giaTri: "Không thuốc (tìm máu tụ trong vách IMH) + pha ĐM; thêm pha TM 70–80 s nếu theo dõi Stent-Graft" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Bóc tách ĐM chủ, phình ĐM chủ ngực-bụng, chấn thương ngực kín, theo dõi sau Stent-Graft (EVAR/TEVAR)."
      ]},
      { tieuDe: "Kỹ thuật & lưu ý", items: [
        "Phân biệt lòng thật (bắt thuốc mạnh) và lòng giả (bắt kém/trễ) trong bóc tách.",
        "ECG-gated vùng gốc ĐM chủ để triệt xảo ảnh nhịp tim (chẩn đoán bóc tách type A).",
        "Triple-rule-out (TRO): kết hợp ĐM vành + ĐM chủ + ĐM phổi trong 1 lần quét cho đau ngực cấp.",
        "Theo dõi Stent-Graft: thêm pha TM muộn tìm rò nội mạch (endoleak) chậm."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ref-cta-chi-duoi",
    phanHe: "ct-mri", modality: "CT", nhom: "Mạch máu",
    ten: "CTA động mạch chi dưới (Run-off) — kỹ thuật",
    tuKhoa: ["cta chi duoi", "run off", "run-off", "chi duoi", "tac mach", "dau cach hoi"],
    thongSo: [
      { ten: "Chiều quét", giaTri: "Từ rốn thận → tận ngón chân (trường Z dài > 1 m)" },
      { ten: "Pitch", giaTri: "Cài cao để quét kịp trước khi thuốc trôi về tĩnh mạch" },
      { ten: "Lượng thuốc", giaTri: "100–120 ml, tốc độ 4 ml/s" },
      { ten: "Timing", giaTri: "Test Bolus (khuyến cáo nhất) đo thời gian tới ĐM khoeo; hoặc Bolus Tracking ROI ĐM chủ bụng ngang rốn thận" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tắc mạch chi dưới cấp, đau cách hồi do xơ vữa, chấn thương đứt mạch, bản đồ mạch trước mổ vạt da."
      ]},
      { tieuDe: "Kỹ thuật & lưu ý", items: [
        "Bệnh nhân tiểu đường nặng / tắc mạn: dòng xuống chân rất chậm — quét quá nhanh sẽ vượt mặt thuốc (đen lòng mạch đoạn xa).",
        "Đa pha (multiphasic) 2–3 lần cách 10–15 s: đánh giá tuần hoàn bàng hệ khi hẹp tắc nặng.",
        "Dual-Energy loại bỏ xương (bone removal) tốt hơn trừ xương thủ công; dựng MIP/VRT 3D toàn bộ chậu + 2 chân."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ---- Sọ não - Thần kinh ---- */
  {
    id: "ct-ref-so-nao-thuong-quy",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ não",
    ten: "CT sọ não thường quy (không thuốc) — kỹ thuật & cửa sổ",
    tuKhoa: ["so nao thuong quy", "routine brain", "chan thuong so nao", "cua so xuong", "oml"],
    thongSo: [
      { ten: "FOV", giaTri: "220–240 mm" },
      { ten: "Hướng cắt", giaTri: "Xoắn ốc hoặc Axial tuần tự từ lỗ chẩm lên đỉnh sọ, song song đường OML" },
      { ten: "Độ dày", giaTri: "Thu nhận 0,625–1 mm; tái tạo 5 mm (giảm nhiễu nhu mô)" },
      { ten: "Cửa sổ xương", giaTri: "WW 2500 / WL 500, lát 1–2 mm (khảo sát xương đá, thành hốc mắt)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Chấn thương sọ não, tai biến (nhồi máu/xuất huyết), đau đầu đột ngột, theo dõi tụ máu dưới màng cứng, viêm màng não."
      ]},
      { tieuDe: "Kỹ thuật & lưu ý", items: [
        "Gantry nghiêng song song OML/SML để tránh tia chiếu trực tiếp thủy tinh thể (đục TTT bức xạ).",
        "Bệnh nhân không nuốt / đảo mắt khi quét.",
        "Tái tạo MPR Axial/Coronal/Sagittal; VRT 3D xương sọ đánh giá lún/nứt sọ."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ref-dot-quy-bo-ba",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ não",
    ten: "Bộ ba CT đột quỵ (NCCT + CTP + CTA) — kỹ thuật",
    tuKhoa: ["dot quy", "stroke", "ncct", "ctp", "cta", "code stroke", "lvo", "penumbra"],
    thongSo: [
      { ten: "NCCT", giaTri: "Không thuốc — loại trừ xuất huyết; tìm dấu nhồi máu sớm (ruy băng thùy đảo, ĐM não giữa tăng tỷ trọng)" },
      { ten: "CTP", giaTri: "Tiêm 40–50 ml (5 ml/s); quét lặp lại não 60 s; tính lõi nhồi máu & vùng tranh tối tranh sáng" },
      { ten: "CTA", giaTri: "Tiêm 50–60 ml (5 ml/s); quét từ quai ĐM chủ lên đỉnh sọ tìm tắc mạch lớn (LVO)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Nghi đột quỵ thiếu máu cục bộ cấp trong cửa sổ vàng (< 6 giờ, mở rộng đến 24 giờ)."
      ]},
      { tieuDe: "⚠️ Lưu ý khẩn cấp (Code Stroke)", items: [
        "Thời gian là não — setup máy và bơm tiêm điện nhanh nhất có thể.",
        "Canh Bolus Tracking tại cung ĐM chủ.",
        "Dựng MIP mỏng 10–15 mm đa mặt phẳng; phần mềm AI (RAPID, syngo.via) tự tính thể tích Penumbra."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ref-ctp",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ não",
    ten: "CT tưới máu não (CTP) trong đột quỵ — kỹ thuật",
    tuKhoa: ["ctp", "tuoi mau nao", "perfusion", "core", "penumbra", "mismatch", "cbv", "cbf", "tmax"],
    thongSo: [
      { ten: "Kỹ thuật quét", giaTri: "Dynamic/Cine lặp lại cùng vùng sọ 45–60 s" },
      { ten: "Độ phủ", giaTri: "Lý tưởng toàn não 16 cm; máy 64 dãy dùng Toggle/Shuttle đạt 8–10 cm" },
      { ten: "Cài đặt", giaTri: "80 kVp (tăng sáng i-ốt, giảm liều), mAs thấp" },
      { ten: "Thuốc", giaTri: "40–50 ml nồng độ cao 350–370 mgI/ml, 4–5 ml/s + saline 30–40 ml; delay 4–5 s" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Nhồi máu não cấp, nhất là cửa sổ mở rộng 6–24 giờ hoặc đột quỵ không rõ giờ khởi phát (wake-up)."
      ]},
      { tieuDe: "Phân định Core & Penumbra", items: [
        "Lõi nhồi máu (Core): mô đã chết — CBV giảm nặng (<30% bên đối diện), CBF giảm nặng, Tmax/MTT kéo dài.",
        "Penumbra: mô còn cứu được — Tmax kéo dài (>6 s), CBF giảm nhẹ, CBV bình thường/tăng.",
        "Mismatch = thể tích Tmax>6 s trừ Core. Mismatch > 1,8 và Core < 70 ml → có lợi khi can thiệp."
      ]},
      { tieuDe: "Timing & lưu ý", items: [
        "Fixed Delay (thường bắt đầu quét sau tiêm 4–5 s) để lấy baseline trước khi thuốc đến.",
        "Chọn đúng ĐM đầu vào (AIF – ĐM não giữa/trước) và TM đầu ra (VOF – xoang dọc trên); TDC phải mượt, đỉnh nhọn cao.",
        "Cố định đầu thật chặt — xảo ảnh lắc đầu là nguyên nhân hàng đầu hỏng biểu đồ."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ---- Ổ bụng - Tiểu khung ---- */
  {
    id: "ct-ref-bung-3-pha",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "CT bụng chậu 3 pha (gan/tụy) — kỹ thuật",
    tuKhoa: ["bung 3 pha", "gan", "tuy", "hcc", "hemangioma", "wash out", "triphasic"],
    thongSo: [
      { ten: "Lượng thuốc", giaTri: "1,5–2 ml/kg, tốc độ 3–4 ml/s" },
      { ten: "Timing", giaTri: "Bolus Tracking ROI ĐM chủ bụng ngang cơ hoành, trigger ~100–150 HU" },
      { ten: "Các pha", giaTri: "Không thuốc · ĐM gan 30–35 s · TM cửa 65–75 s · muộn 3–5 phút" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tầm soát u gan (HCC, hemangioma, FNH), xơ gan, viêm tụy cấp, u tụy, chấn thương tạng đặc."
      ]},
      { tieuDe: "Đặc điểm từng pha", items: [
        "Không thuốc: vôi hóa, sỏi, gan nhiễm mỡ, xuất huyết cấp.",
        "ĐM gan: HCC bắt thuốc mạnh; u tụy kém bắt thuốc nổi rõ trên nền tụy.",
        "TM cửa: nhu mô gan bắt thuốc mạnh nhất, HCC wash-out tối màu.",
        "Muộn: hemangioma lấp đầy thuốc; u/ xơ đường mật (cholangiocarcinoma)."
      ]},
      { tieuDe: "Tái tạo", items: [
        "MPR Coronal/Sagittal 2–3 mm; pha TM cửa quét toàn bụng chậu từ vòm hoành đến khớp mu."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ref-ctu",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "CT hệ tiết niệu đa pha (CTU) — kỹ thuật",
    tuKhoa: ["ctu", "urography", "he tiet nieu", "tieu mau", "tcc", "rcc", "split bolus"],
    thongSo: [
      { ten: "Pha không thuốc", giaTri: "Toàn bụng chậu — tìm sỏi cản quang" },
      { ten: "Pha vỏ tủy", giaTri: "30–40 s — phát hiện u thận" },
      { ten: "Pha thận đồ", giaTri: "90–100 s — tổn thương nhu mô, áp xe" },
      { ten: "Pha bài xuất", giaTri: "5–15 phút — thuốc đầy đài bể thận/niệu quản/bàng quang" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tiểu máu chưa rõ nguyên nhân, ung thư biểu mô đường niệu (TCC), u thận (RCC), chấn thương, dị dạng giải phẫu."
      ]},
      { tieuDe: "Kỹ thuật & lưu ý", items: [
        "Uống 500 ml nước trước chụp 30 phút để căng bàng quang, tăng bài niệu.",
        "Giảm liều: Split-bolus — tiêm lần 1, đợi 10 phút, tiêm lần 2, rồi chụp 1 pha duy nhất (có thuốc cả nhu mô lẫn đường bài xuất).",
        "Dựng VRT 3D/MIP cây đường niệu (như phim UIV cũ nhưng 3 chiều)."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ref-ldct-soi-nieu",
    phanHe: "ct-mri", modality: "CT", nhom: "Ổ bụng - Tiểu khung",
    ten: "CT bụng chậu liều thấp tìm sỏi niệu — kỹ thuật",
    tuKhoa: ["lieu thap", "soi nieu", "con dau quan than", "renal colic", "low dose"],
    thongSo: [
      { ten: "FOV", giaTri: "Vòm hoành → khớp mu" },
      { ten: "Thông số", giaTri: "100 kVp, 30–50 mAs (biến điệu liều tự động AEC)" },
      { ten: "Mức liều", giaTri: "CTDIvol ~2,0–3,0 mGy; liều hiệu dụng ~1,5–2,5 mSv (giảm 70–80% so với KUB CT thường)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Cơn đau quặn thận cấp nghi sỏi tiết niệu; theo dõi sau tán sỏi; người trẻ / thai phụ (khi SA, MRI không giải quyết được)."
      ]},
      { tieuDe: "Kỹ thuật & lưu ý", items: [
        "MPR Coronal mỏng 2–3 mm dò đường đi sỏi dọc niệu quản.",
        "Có thể tăng Noise Index vì sỏi canxi rất sáng, dễ thấy trên nền nhiễu.",
        "Hạn chế: khó đánh giá tổn thương mô mềm đi kèm (viêm ruột thừa non, u đặc nhỏ) do giảm độ phân giải tương phản."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ---- Lồng ngực ---- */
  {
    id: "ct-ref-hrct",
    phanHe: "ct-mri", modality: "CT", nhom: "Lồng ngực",
    ten: "HRCT phổi phân giải cao — kỹ thuật & cửa sổ",
    tuKhoa: ["hrct", "phoi phan giai cao", "benh phoi ke", "ild", "xo phoi", "ggo", "bay khi"],
    thongSo: [
      { ten: "Thuốc", giaTri: "KHÔNG tiêm cản quang" },
      { ten: "Lát cắt", giaTri: "Siêu mỏng 1–1,5 mm" },
      { ten: "Kernel", giaTri: "Thuật toán sắc nét cao (Sharp/Edge, vd b80f, Bone/Lung)" },
      { ten: "Cửa sổ phổi", giaTri: "WW 1500 / WL -600" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Bệnh phổi kẽ (ILD), xơ phổi, giãn phế quản, khí phế thũng, kính mờ (GGO) do Covid-19, lao."
      ]},
      { tieuDe: "Kỹ thuật & lưu ý", items: [
        "Quét thêm thì thở ra tối đa: phát hiện bẫy khí (air trapping).",
        "Nằm sấp (prone): phân biệt kính mờ đáy phổi do ứ máu trọng lực hay xơ phổi kẽ thật.",
        "Mấu chốt: nín thở tuyệt đối — ho/nhúc nhích 1 mm làm nhòe vi cấu trúc, mất giá trị chẩn đoán."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ref-ldct-phoi",
    phanHe: "ct-mri", modality: "CT", nhom: "Lồng ngực",
    ten: "CT ngực liều thấp tầm soát ung thư phổi (LDCT) — kỹ thuật",
    tuKhoa: ["ldct", "tam soat ung thu phoi", "lung screening", "not mo phoi", "fleischner"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nằm ngửa, 2 tay đưa cao, hít sâu nín thở" },
      { ten: "Thông số chuẩn", giaTri: "100–120 kVp, 20–40 mAs (BMI bình thường)" },
      { ten: "Mức liều", giaTri: "CTDIvol ≤ 3,0 mGy (~70 kg); liều hiệu dụng 1,0–1,5 mSv" },
      { ten: "Độ dày", giaTri: "Thu nhận ≤ 1 mm; tái tạo nhu mô 1–1,5 mm, MIP 3–5 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tầm soát người nguy cơ cao (50–80 tuổi, hút thuốc ≥ 20 bao-năm); theo dõi nốt mờ phổi theo Fleischner."
      ]},
      { tieuDe: "Điều chỉnh theo thể trạng", items: [
        "Gầy (BMI < 20): 80–100 kVp, < 20 mAs.",
        "Béo phì (BMI > 30): giữ 120 kVp, tăng mAs tối đa 60.",
        "Bắt buộc dùng tái tạo lặp IR mức trung bình/cao (SAFIRE 3, ASiR 50%, AIDR 3D)."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Tuyệt đối không tiêm thuốc cản quang.",
        "Tránh chụp lặp nếu lỡ nhúc nhích, trừ khi hình mất hoàn toàn giá trị."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ---- Toàn thân / Nhi ---- */
  {
    id: "ct-ref-panscan",
    phanHe: "ct-mri", modality: "CT", nhom: "Toàn thân",
    ten: "CT đa chấn thương (Pan-Scan) — kỹ thuật",
    tuKhoa: ["pan scan", "pan-scan", "da chan thuong", "polytrauma", "trauma"],
    thongSo: [
      { ten: "Chiến lược", giaTri: "Split-bolus / multi-pass" },
      { ten: "Thuốc", giaTri: "~100–120 ml" },
      { ten: "Pha chính", giaTri: "Quét 1 lần từ đỉnh phổi → khớp mu ở pha TM muộn ~65–70 s" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tai nạn nghiêm trọng, đa chấn thương, ngã cao, sốc mất máu chưa rõ nguyên nhân."
      ]},
      { tieuDe: "Các bước", items: [
        "Quét sọ não + cột sống cổ không thuốc (đánh giá xuất huyết sọ, gãy cổ ngay).",
        "Tiêm thuốc rồi quét thân mình pha TM muộn: vỡ tạng (gan/lách/thận), tràn máu màng phổi, vỡ khung chậu rò máu.",
        "Tái tạo nhanh cửa sổ xương toàn thân (Sagittal cột sống, VRT chậu/sườn); nghi bóc tách ĐM chủ thì tách riêng pha CTA ngực-bụng trước."
      ]},
      { tieuDe: "⚠️ Nguyên tắc thần tốc & sinh tồn", items: [
        "Cấp cứu ưu tiên; hạn chế di chuyển bệnh nhân, chụp thẳng trên ván cứng nếu cần.",
        "TUYỆT ĐỐI không tháo nẹp cổ khi chưa loại trừ gãy cột sống cổ.",
        "Phối hợp chặt với ekip hồi sức đang bóp bóng/truyền máu cạnh máy."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ref-nhi-lieu-thap",
    phanHe: "ct-mri", modality: "CT", nhom: "Toàn thân",
    ten: "CT nhi khoa liều thấp — kỹ thuật (Image Gently)",
    tuKhoa: ["nhi", "tre em", "pediatric", "lieu thap", "image gently", "weight based"],
    thongSo: [
      { ten: "Sơ sinh < 5 kg", giaTri: "70–80 kVp, 10–15 mAs" },
      { ten: "5–15 kg", giaTri: "80 kVp, 15–30 mAs" },
      { ten: "15–30 kg", giaTri: "80–100 kVp, 30–50 mAs" },
      { ten: "Pitch", giaTri: "Cao (>1,2) hoặc Flash — quét thần tốc tránh rung lắc" }
    ],
    noiDung: [
      { tieuDe: "Nguyên tắc", items: [
        "Trẻ em nhạy cảm bức xạ gấp 3–5 lần người lớn — rủi ro tích lũy ung thư rất cao; tuân thủ 'Image Gently'."
      ]},
      { tieuDe: "Kỹ thuật & lưu ý", items: [
        "Cài đặt theo cân nặng; quét cực khu trú, không mở tia thừa ngoài vùng giải phẫu.",
        "Tái tạo IR mức cao nhất máy hỗ trợ (Level 4–5).",
        "LUÔN che chắn tuyến giáp, vú, tinh hoàn/buồng trứng khi nằm ngoài vùng quét."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ---- Thông số & An toàn CT (từ điển) ---- */
  {
    id: "ct-ts-kvp",
    phanHe: "ct-mri", modality: "CT", nhom: "Thông số & An toàn",
    ten: "kVp — Điện thế bóng X-quang",
    tuKhoa: ["kvp", "dien the bong", "tube voltage", "dam xuyen", "tuong phan"],
    thongSo: [
      { ten: "Người lớn thường quy", giaTri: "100–120 kVp" },
      { ten: "Béo phì", giaTri: "120–140 kVp" },
      { ten: "CTA / trẻ em", giaTri: "70–80 kVp (tăng tương phản i-ốt, giảm liều)" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "kVp quyết định năng lượng & độ đâm xuyên của tia X. kVp càng cao: tia càng cứng, đâm xuyên mạnh nhưng độ tương phản giảm."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ts-mas",
    phanHe: "ct-mri", modality: "CT", nhom: "Thông số & An toàn",
    ten: "mAs — Dòng hằng số bóng",
    tuKhoa: ["mas", "dong bong", "tube current", "nhieu hat", "noise", "auto ma", "caredose"],
    thongSo: [
      { ten: "Quan hệ liều", giaTri: "Tỷ lệ thuận tuyến tính với liều bức xạ" },
      { ten: "Khuyến nghị", giaTri: "Luôn BẬT biến điệu liều tự động (Auto mA / CareDose / SmartmA)" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý & ứng dụng", items: [
        "mAs quyết định số lượng photon tia X. Đủ cao: ảnh mịn (ít nhiễu hạt); quá cao: quá liều không cần thiết.",
        "Auto mA tự tăng mAs ở vùng dày (vai, chậu), giảm ở vùng mỏng (cổ, phổi).",
        "Máy cũ không có Auto mA: KTV tự ước lượng mAs theo cân nặng & vùng giải phẫu."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ts-pitch",
    phanHe: "ct-mri", modality: "CT", nhom: "Thông số & An toàn",
    ten: "Pitch — Độ xoắn ốc",
    tuKhoa: ["pitch", "xoan oc", "windmill", "collimation"],
    thongSo: [
      { ten: "Pitch = 1", giaTri: "Bàn di chuyển bằng đúng bề rộng chùm tia" },
      { ten: "Pitch > 1 (1,2–1,5)", giaTri: "Quét thưa, nhanh — giảm liều; có thể xảo ảnh windmill" },
      { ten: "Pitch < 1 (0,2–0,3)", giaTri: "Quét chồng lấp, chậm — CTA mạch vành (ECG-gating), liều cao" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "Pitch = quãng đường bàn đi trong 1 vòng quay ÷ tổng bề dày chùm tia (collimation)."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ts-ir",
    phanHe: "ct-mri", modality: "CT", nhom: "Thông số & An toàn",
    ten: "Tái tạo lặp (Iterative Reconstruction - IR)",
    tuKhoa: ["ir", "iterative", "tai tao lap", "safire", "admire", "asir", "idose", "aidr", "fbp"],
    thongSo: [
      { ten: "Lợi ích chính", giaTri: "Cho phép hạ liều (giảm mAs) mà ảnh vẫn ít nhiễu" },
      { ten: "Tên theo hãng", giaTri: "Siemens SAFIRE/ADMIRE · GE ASiR/Veo · Philips iDose · Canon AIDR 3D" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "Thuật toán lặp thống kê lọc nhiễu nhiều lần, thay cho FBP cũ, trước khi xuất ảnh cuối."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ts-wwwl",
    phanHe: "ct-mri", modality: "CT", nhom: "Thông số & An toàn",
    ten: "Cửa sổ hiển thị (WW/WL) — bảng cửa sổ",
    tuKhoa: ["cua so", "window", "ww", "wl", "hounsfield", "hu"],
    thongSo: [
      { ten: "Sọ não", giaTri: "WW 80 / WL 40" },
      { ten: "Xương", giaTri: "WW 2000–2500 / WL 400–500" },
      { ten: "Nhu mô phổi", giaTri: "WW 1500 / WL -600" },
      { ten: "Gan / bụng", giaTri: "WW 350–400 / WL 40–50" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "Mắt người chỉ phân biệt ~30–40 sắc xám trong khi CT có ~4000 đơn vị HU → dùng cửa sổ kẹp dải xám vào mô cần xem.",
        "WL (center) = độ sáng trung tâm (đặt bằng HU của mô cần xem); WW = độ rộng dải xám (hẹp = tương phản cao)."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ts-alara",
    phanHe: "ct-mri", modality: "CT", nhom: "Thông số & An toàn",
    ten: "Nguyên tắc ALARA — an toàn bức xạ",
    tuKhoa: ["alara", "an toan buc xa", "giam lieu", "che chan", "chi"],
    thongSo: [
      { ten: "ALARA", giaTri: "As Low As Reasonably Achievable — liều thấp nhất mà vẫn đủ chất lượng chẩn đoán" }
    ],
    noiDung: [
      { tieuDe: "Thực hành", items: [
        "Hạn chế chụp CT lại nếu không cần thiết.",
        "Che chắn chì cho cơ quan nhạy cảm (giáp, vú, thủy tinh thể, tinh hoàn) nằm ngoài vùng quét.",
        "Cân nhắc kỹ với phụ nữ có thai và trẻ em; ưu tiên siêu âm / MRI nếu thay thế được."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ts-ctdi-dlp",
    phanHe: "ct-mri", modality: "CT", nhom: "Thông số & An toàn",
    ten: "Chỉ số liều bức xạ CT (CTDIvol & DLP)",
    tuKhoa: ["ctdivol", "dlp", "lieu buc xa", "dose report", "mgy"],
    thongSo: [
      { ten: "CTDIvol (mGy)", giaTri: "Liều hấp thụ trung bình trong một mặt cắt — cường độ chùm tia" },
      { ten: "DLP (mGy·cm)", giaTri: "CTDIvol × chiều dài vùng quét — tổng năng lượng bức xạ cả ca" }
    ],
    noiDung: [
      { tieuDe: "Thực hành", items: [
        "Luôn đính kèm Patient Protocol / Dose Report vào PACS để theo dõi liều tích lũy.",
        "Giảm DLP bằng cách thu hẹp chiều dài vùng quét (Z-axis) vừa đủ cơ quan đích, không quét thừa."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "ct-ts-cin",
    phanHe: "ct-mri", modality: "CT", nhom: "Thông số & An toàn",
    ten: "Dự phòng bệnh thận do thuốc cản quang (CIN)",
    tuKhoa: ["cin", "benh than", "thuoc can quang", "egfr", "creatinine", "locm", "iocm"],
    thongSo: [
      { ten: "Ngưỡng eGFR", giaTri: "< 30 ml/min/1,73m² = chống chỉ định tương đối nặng" },
      { ten: "Dự phòng tốt nhất", giaTri: "Hydrat hóa (truyền/uống nước) trước & sau tiêm 24h" }
    ],
    noiDung: [
      { tieuDe: "Thực hành", items: [
        "Bắt buộc kiểm tra Creatinine máu & eGFR trước tiêm.",
        "Ưu tiên thuốc áp lực thẩm thấu thấp (LOCM) hoặc đồng thẩm thấu (IOCM).",
        "Đối chiếu tiền sử dị ứng; quyết định tiêm theo bác sĩ."
      ]}
    ],
    nguon: "Từ điển CT – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ------------------------------------------------------------------ MRI */
  {
    id: "mri-so-nao-khong-tiem",
    phanHe: "ct-mri",
    modality: "MRI",
    nhom: "Sọ não",
    ten: "Chụp CHT sọ não không tiêm chất đối quang từ",
    tuKhoa: ["mri so nao", "cong huong tu dau", "cht so nao", "brain mri"],
    thongSo: [
      { ten: "Chuỗi xung thường quy", giaTri: "T1, T2, FLAIR" },
      { ten: "Hướng cắt", giaTri: "Axial (ngang), Coronal (đứng ngang), Sagittal (đứng dọc)" },
      { ten: "Chuỗi xung đặc biệt", giaTri: "T2*/SWI (chảy máu) · IR (chất xám) · Diffusion (nhồi máu, u, áp xe)" },
      { ten: "Tiêm thuốc đối quang từ", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Đại cương", items: [
        "CHT sọ não chẩn đoán sớm và chính xác nhiều bệnh lý thần kinh; ưu thế hơn CLVT ở nhồi máu giai đoạn sớm, nhồi máu hố sau…"
      ]},
      { tieuDe: "Chỉ định", items: [
        "Nghi bệnh lý nội sọ: u não trong trục, ngoài trục.",
        "Viêm não, màng não.",
        "Dị dạng mạch máu não, phình mạch, thông động – tĩnh mạch…",
        "Dị dạng bẩm sinh, động kinh, xơ cứng đa ổ.",
        "Teo não, sa sút trí tuệ, thoái hóa nhu mô não.",
        "Tăng áp lực nội sọ, giãn não thất.",
        "Đột quỵ: nhồi máu, chảy máu não các giai đoạn.",
        "Theo dõi sau điều trị."
      ]},
      { tieuDe: "Chống chỉ định", items: [
        "Máy tạo nhịp tim — CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI.",
        "Có kim loại từ tính trong người — chống chỉ định tương đối.",
        "Sợ ánh sáng, sợ nằm một mình.",
        "Không có khả năng nằm yên."
      ]},
      { tieuDe: "Các bước tiến hành", items: [
        "Nằm ngửa trên bàn chụp; di chuyển bàn vào khoang máy.",
        "Chụp định vị (scout view).",
        "Chuỗi xung thông thường T1, T2, FLAIR cho mọi đối tượng; cắt axial, coronal, sagittal.",
        "Chọn chuỗi xung đặc biệt theo bệnh lý: T2*/SWI (chảy máu), IR (chất xám), Diffusion (nhồi máu/u/áp xe)…",
        "Chạy từng xung, xử lý ảnh trên trạm làm việc, chọn ảnh bộc lộ bệnh lý để in phim.",
        "Bác sĩ đọc tổn thương, mô tả và in kết quả."
      ]},
      { tieuDe: "Tiêu chuẩn ảnh đạt", items: [
        "Hiển thị rõ các cấu trúc giải phẫu vùng thăm khám.",
        "Phát hiện được tổn thương nếu có."
      ]}
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },

  /* ============================================================ */
  /* MRI — PROTOCOL CHỤP THEO VÙNG (Từ điển MRI)                              */
  /* Nguồn: Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA). Bổ trợ cho     */
  /* QUY TRÌNH MRI của khoa; thông số đã được Trưởng khoa / BS duyệt.         */
  /* ============================================================ */
  {
    id: "mri-ref-so-nao",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI sọ não thường quy — protocol",
    tuKhoa: ["mri so nao", "routine brain", "flair", "dwi", "swi", "mprage"],
    thongSo: [
      { ten: "Chuỗi cơ bản", giaTri: "T1W Sag · T2W Ax · T2 FLAIR Ax · DWI/ADC · T2*GRE/SWI" },
      { ten: "FLAIR", giaTri: "TR 8000–9000, TE 90–120, TI 2500 — nhạy tổn thương chất trắng, phù não" },
      { ten: "Nâng cao", giaTri: "3D TOF MRA; 3D T1 MPRAGE (isotropic 1mm); T1W sau tiêm Gd" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Đau đầu/chóng mặt kéo dài, động kinh, theo dõi u/nang, viêm não-màng não, bệnh chất trắng (MS), sa sút trí tuệ."
      ]},
      { tieuDe: "Lưu ý & tiêm thuốc", items: [
        "Cố định đầu; dùng chống rung (PROPELLER/BLADE) ở T2W/FLAIR nếu bệnh nhân kích thích.",
        "Tiêm Gadolinium khi nghi u não, di căn, viêm màng não."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-dot-quy",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI đột quỵ não cấp — protocol",
    tuKhoa: ["dot quy", "stroke", "dwi", "mismatch", "perfusion", "lvo"],
    thongSo: [
      { ten: "DWI/ADC", giaTri: "b=0, 1000 — QUÉT ĐẦU TIÊN, xác định lõi nhồi máu" },
      { ten: "T2*GRE/SWI", giaTri: "Loại trừ xuất huyết (chống chỉ định tiêu sợi huyết)" },
      { ten: "FLAIR + 3D TOF MRA", giaTri: "Mismatch DWI/FLAIR định tuổi nhồi máu; TOF tìm tắc mạch lớn (LVO)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Yếu liệt nửa người/nói đớ/méo miệng đột ngột; nhồi máu cấp-tối cấp; đánh giá Penumbra."
      ]},
      { tieuDe: "⚠️ Lưu ý khẩn (Time is Brain)", items: [
        "Bộ xung cơ bản (DWI, GRE, FLAIR, TOF) hoàn thành dưới 8–10 phút; báo BS ngay khi thấy lõi nhồi máu trên DWI.",
        "Tiêm Gadolinium ở Perfusion DSC (TR 1500, 4–5 ml/s) & CE-MRA cổ (bổ sung)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-dam-roi-canh-tay",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI đám rối thần kinh cánh tay — protocol",
    tuKhoa: ["dam roi canh tay", "brachial plexus", "nho re", "tos", "schwannoma"],
    thongSo: [
      { ten: "Coronal STIR/T2W FatSat", giaTri: "TR 4000, TE 60, lát 3mm — rễ phù nề/đứt rách sáng rõ" },
      { ten: "3D SPACE/VISTA STIR", giaTri: "Isotropic 1mm — dựng MIP 3D toàn mạng đám rối" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Nhổ rễ do tai nạn xe máy, hội chứng lối ra lồng ngực (TOS), u thần kinh, viêm sau xạ trị."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Kê đệm 2 vai cố định chống rung (nhiễu do thở & mạch dưới đòn); chụp từ C4 đến T2."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-cs-co",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "MRI cột sống cổ — protocol",
    tuKhoa: ["cot song co", "cervical spine", "chen ep tuy", "thoat vi", "medic"],
    thongSo: [
      { ten: "Sagittal", giaTri: "T2W (TR 3000–4000, TE 100–120, lát 3mm) · T1W · STIR (TI 150–160)" },
      { ten: "Axial", giaTri: "T2W MEDIC/MERGE 3D hoặc 2D TSE — cắt vuông góc đĩa đệm tổn thương" },
      { ten: "Nâng cao", giaTri: "3D T2 SPACE/VISTA (myelography); T1 FatSat sau Gd nếu u tủy/lao" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Đau cổ vai gáy lan tay, tê/yếu tay, chèn ép tủy, thoát vị đĩa đệm cổ, chấn thương, viêm/lao/u tủy."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Đặt Saturation Band che trước cổ (thanh quản) xóa nhiễu nuốt & nhịp thở."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-cs-that-lung",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "MRI cột sống thắt lưng — protocol",
    tuKhoa: ["cot song that lung", "lumbar", "than kinh toa", "duoi ngua", "modic", "sau mo"],
    thongSo: [
      { ten: "Sagittal", giaTri: "T2W (lát 4mm, FOV 300) · T1W (Modic) · STIR (TI 160 — xẹp đốt do loãng xương)" },
      { ten: "Axial", giaTri: "T2W xếp block theo góc nghiêng từng đĩa đệm — hẹp lỗ liên hợp" },
      { ten: "Sau mổ", giaTri: "T1 FatSat sau Gd: phân biệt mô sẹo (bắt thuốc) vs đĩa đệm tái phát (không bắt)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Đau thắt lưng lan chân (đau thần kinh tọa), dấu chùm đuôi ngựa, thoát vị, trượt đốt, viêm cột sống dính khớp."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Kê gối dưới khoeo làm phẳng ưỡn thắt lưng, sát spine coil → tăng SNR."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-tien-liet-tuyen",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "MRI tiền liệt tuyến đa thông số (mpMRI, PI-RADS)",
    tuKhoa: ["tien liet tuyen", "prostate", "mpmri", "pi-rads", "psa", "dce"],
    thongSo: [
      { ten: "T2W độ phân giải cao", giaTri: "Ax/Sag/Cor (TR 4000, TE 100, lát 3mm, FOV 160)" },
      { ten: "DWI", giaTri: "b đa (50/400/800) + b siêu cao 1400–2000; tính bản đồ ADC" },
      { ten: "DCE", giaTri: "Độ phân giải thời gian < 10 s/pha, tổng 3–4 phút (có Gd)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tăng PSA, tầm soát ung thư TLT, định vị trước sinh thiết, phân giai đoạn, theo dõi sau điều trị."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Thụt tháo làm sạch trực tràng, nhịn tiểu vừa phải để giảm nhiễu nhu động & co thắt bàng quang."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-gan-dong-hoc",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "MRI gan mật động học — protocol",
    tuKhoa: ["gan dong hoc", "liver", "hcc", "li-rads", "dixon", "primovist", "vibe", "lava"],
    thongSo: [
      { ten: "Định vị & khảo sát", giaTri: "T2W SS-FSE/HASTE Ax&Cor (nín thở); DWI b=50/400/800" },
      { ten: "Dixon In/Out-phase", giaTri: "TE 1,2 & 2,4 ms (ở 3T) — phát hiện nhiễm mỡ" },
      { ten: "3D T1 GRE FatSat (VIBE/LAVA) động học", giaTri: "ĐM muộn 35s · TM cửa 70s · cân bằng 3 phút" },
      { ten: "Pha gan mật", giaTri: "20 phút với thuốc đặc hiệu (Primovist) — tìm vi di căn" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tầm soát/phân loại u gan (HCC, hemangioma, FNH, adenoma), xơ gan, nhiễm sắt/mỡ, theo dõi sau TACE/RFA."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Phụ thuộc nín thở — tập trước; nếu không nín được dùng Radial K-space (StarVIBE)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-mrcp",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "MRCP — chụp đường mật tụy",
    tuKhoa: ["mrcp", "duong mat", "soi ong mat chu", "cbd", "viem tuy", "space"],
    thongSo: [
      { ten: "2D MRCP thick slab", giaTri: "Lát siêu dày 40–50mm (TR >4000, TE >600), nín thở nhiều góc quanh CBD" },
      { ten: "3D MRCP (SPACE/VISTA)", giaTri: "Lát 1mm isotropic + Respiratory Triggering, tái tạo MIP 3D cây đường mật" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Sỏi ống mật chủ, viêm tụy cấp/mạn, u đường mật, chít hẹp đường mật, đánh giá trước ghép gan."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Nhịn ăn 4–6 giờ cho túi mật căng; uống nước dứa trước 15 phút xóa tín hiệu dịch dạ dày/tá tràng.",
        "Tiêm Gd tùy chọn khi nghi u đường mật / u đầu tụy."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-chau-nu",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "MRI khung chậu nữ (phụ khoa) — protocol",
    tuKhoa: ["chau nu", "phu khoa", "lac noi mac", "u xo tu cung", "co tu cung", "noi mac"],
    thongSo: [
      { ten: "T2W", giaTri: "Sagittal (FOV 240, lát 4mm) + Ax/Cor chếch theo trục buồng tử cung (lớp chuyển tiếp)" },
      { ten: "T1W / T1 FatSat", giaTri: "T1 toàn chậu (hạch, xương); T1 FatSat phân biệt nang mỡ (teratoma) vs nang máu (lạc nội mạc)" },
      { ten: "DCE (+Gd)", giaTri: "3D T1 GRE FatSat động học — đánh giá xâm lấn cơ tử cung trong ung thư nội mạc" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Lạc nội mạc tử cung, u xơ tử cung, ung thư cổ/nội mạc tử cung, khảo sát buồng trứng, dị dạng tử cung."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Không nhịn tiểu quá căng cũng không tiểu cạn; cân nhắc tiêm chống co thắt ruột (Buscopan)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-vai",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "MRI khớp vai — protocol",
    tuKhoa: ["vai", "shoulder", "chop xoay", "rotator cuff", "slap", "bankart", "arthrography"],
    thongSo: [
      { ten: "Coronal Obl T2/PD FatSat", giaTri: "TR 3000, TE 30–40, lát 3mm, FOV 140 — song song gân trên gai (rách gân)" },
      { ten: "Sagittal Obl + Axial FatSat", giaTri: "Tiết diện gân, cơ dưới vai; sụn viền trước/sau, gân nhị đầu" },
      { ten: "MR Arthrography", giaTri: "Tiêm Gd loãng nội khớp — rất nhạy rách sụn viền & rách bán phần mặt khớp" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Hội chứng chóp xoay, trật vai tái diễn, tổn thương sụn viền (SLAP/Bankart), viêm bao hoạt dịch, đông cứng khớp vai."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Cánh tay tư thế trung gian/xoay ngoài nhẹ; tránh xoay trong (dễ dương tính giả rách gân trên gai)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-khuyu",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "MRI khớp khuỷu — protocol",
    tuKhoa: ["khuyu", "elbow", "tennis elbow", "golfer", "ucl", "than kinh tru", "ocd"],
    thongSo: [
      { ten: "Coronal T2/PD FatSat + T1", giaTri: "TR 2500, TE 30, lát 3mm, FOV 120–140 — lồi cầu & dây chằng bên" },
      { ten: "Axial + Sagittal FatSat", giaTri: "Thần kinh trụ rãnh ròng rọc, gân nhị đầu bám tận; khớp cánh tay-trụ" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Viêm lồi cầu ngoài (tennis)/trong (golfer), rách UCL/RCL, chèn ép thần kinh trụ, viêm sụn bóc tách (OCD)."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Có thể chụp tư thế Superman (nằm sấp, tay giơ cao) đưa khuỷu vào isocenter để FatSat đồng nhất."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-co-tay",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "MRI cổ tay — protocol",
    tuKhoa: ["co tay", "wrist", "ong co tay", "tfcc", "kienbock", "de quervain"],
    thongSo: [
      { ten: "Coronal PD FatSat + T1", giaTri: "TR 2500, TE 30, lát 2mm, FOV 80–100 — TFCC & dây chằng thuyền-nguyệt" },
      { ten: "Ma trận", giaTri: "Rất cao (320×320 hoặc 384×384) do cấu trúc nhỏ; dùng cuộn dây chuyên dụng cổ tay" },
      { ten: "Nâng cao", giaTri: "3D T2* GRE (vi rách TFCC); T1 sau Gd (viêm khớp dạng thấp sớm)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Hội chứng ống cổ tay, rách TFCC, bệnh Kienböck, De Quervain, nang rễ thần kinh."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-ban-tay",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "MRI bàn tay / ngón tay — protocol",
    tuKhoa: ["ban tay", "ngon tay", "hand", "finger", "gan gap", "pulley", "glomus"],
    thongSo: [
      { ten: "Coronal STIR/T2 FatSat + T1", giaTri: "TR 3500, TE 40, lát 2–2,5mm, FOV 100–120" },
      { ten: "Axial + Sagittal FatSat", giaTri: "Cắt vuông góc ngón đánh giá ròng rọc A2/A4 & gân gấp" },
      { ten: "T1 FatSat sau Gd", giaTri: "Tiêu chuẩn vàng phát hiện u cuộn mạch (Glomus) dưới móng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Đứt gân gấp/duỗi, tổn thương ròng rọc (người leo núi), u cuộn mạch dưới móng, nhiễm trùng sâu."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Nếu chỉ 1 ngón, băng tách ngón đó khỏi ngón khác để giảm nhiễu & định vị FOV nhỏ."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-goi",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "MRI khớp gối — protocol",
    tuKhoa: ["goi", "knee", "acl", "pcl", "sun chem", "meniscus", "ocd", "banh che"],
    thongSo: [
      { ten: "Sagittal PD FatSat + T1", giaTri: "TR 2500–3000, TE 30–40, lát 3mm, FOV 150 — sụn chêm, ACL, PCL" },
      { ten: "Coronal + Axial PD FatSat", giaTri: "Dây chằng bên (MCL/LCL); khớp chè-đùi, mạc giữ bánh chè" },
      { ten: "Nâng cao", giaTri: "3D DESS/SPACE (thể tích sụn); T2 Mapping sụn (thoái hóa sớm)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Chấn thương thể thao, đứt ACL/PCL, rách sụn chêm, viêm xương sụn bóc tách, trật bánh chè, đau gối mạn."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Kê gối xoay ngoài 10–15° đưa ACL song song mặt phẳng Sagittal, tránh hiệu ứng thể tích bán phần."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-co-chan",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "MRI cổ chân — protocol",
    tuKhoa: ["co chan", "ankle", "achilles", "atfl", "cfl", "gan got", "delta"],
    thongSo: [
      { ten: "Sagittal PD FatSat + T1", giaTri: "TR 2500, TE 35, lát 3mm, FOV 140–160 — gân Achilles, cân gan chân" },
      { ten: "Axial + Coronal FatSat", giaTri: "Gân quanh mắt cá, dây chằng ATFL/PTFL; khe sên-chày, dây chằng Delta" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Rách gân gót, đứt ATFL/CFL, viêm gân chày sau, chấn thương vòm cổ chân, viêm sụn xương sên."
      ]},
      { tieuDe: "Lưu ý", items: [
        "⚠️ Gân Achilles dễ bị 'Magic Angle' (sáng giả ở ~55° trên T1/PD) — đối chiếu T2W (TE dài) để xác nhận.",
        "Tiêm Gd khi u phần mềm/viêm/nhiễm trùng gân gót."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-ban-chan",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "MRI bàn chân — protocol",
    tuKhoa: ["ban chan", "foot", "morton", "ban chan tieu duong", "stress fracture", "viem cot tuy"],
    thongSo: [
      { ten: "Long-axis STIR/PD FatSat + T1", giaTri: "TR 3500, TE 40, lát 3mm, FOV 160 — phù tủy xương/phần mềm" },
      { ten: "Short-axis PD FatSat", giaTri: "Cắt vuông góc trục bàn chân — rất nhạy u Morton ở kẽ ngón" },
      { ten: "T1 FatSat sau Gd", giaTri: "Bàn chân tiểu đường: phân biệt viêm loét phần mềm vs viêm cốt tủy" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "U thần kinh Morton, bàn chân đái tháo đường, gãy xương mỏi, viêm cân gan chân, viêm cốt tủy."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-xuong-dai",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "MRI xương dài (đùi, chày, cánh tay) — protocol",
    tuKhoa: ["xuong dai", "long bone", "u xuong", "osteosarcoma", "ewing", "viem cot tuy", "skip lesion"],
    thongSo: [
      { ten: "Coronal STIR + T1 toàn bộ xương", giaTri: "STIR (TR >4000, TI 150–160, FOV 400–480) dò ổ nhảy cóc (skip lesions)" },
      { ten: "Axial PD FatSat + T1 (khu trú)", giaTri: "Xâm lấn phần mềm, chèn ép bó mạch thần kinh; ranh giới vỏ-tủy" },
      { ten: "T1 FatSat sau Gd", giaTri: "Phần đặc của u, hoại tử u, theo dõi đáp ứng hóa trị" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "U xương ác tính (osteosarcoma, Ewing), viêm cốt tủy, nhồi máu xương, gãy vi thể, chèn ép khoang."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Chụp kèm ÍT NHẤT một khớp lân cận để đánh giá xâm lấn khớp."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-tim",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "MRI tim (CMR) — đánh giá sống còn cơ tim",
    tuKhoa: ["mri tim", "cmr", "cine", "lge", "viability", "ef", "mapping"],
    thongSo: [
      { ten: "Cine SSFP", giaTri: "Trục 2/3/4 buồng + trục ngắn đáy→mỏm — EF, rối loạn vận động vùng" },
      { ten: "T2W STIR / T1-T2 Mapping", giaTri: "Phù cơ tim cấp (viêm/nhồi máu); tính ECV" },
      { ten: "LGE", giaTri: "Chụp 10–15 phút sau Gd, TI scout xóa cơ tim lành — sẹo xuyên/dưới nội tâm mạc" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Sẹo nhồi máu cũ/mới, bệnh cơ tim phì đại/giãn, viêm cơ tim, lập kế hoạch trước can thiệp mạch vành."
      ]},
      { tieuDe: "⚠️ Lưu ý", items: [
        "Mắc ECG gating là sống còn: cạo lông ngực, lau cồn để sóng R đạt đỉnh; nín thở 10–15 s nhiều lần."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ref-vu",
    phanHe: "ct-mri", modality: "MRI", nhom: "Tuyến vú",
    ten: "MRI tuyến vú động học — protocol",
    tuKhoa: ["vu", "breast", "bi-rads", "brca", "dce", "tui nguc", "tic"],
    thongSo: [
      { ten: "T2W + STIR/FatSat", giaTri: "Ax & Sag (FOV 300–340, lát 3mm) — nang, sợi tuyến, phù" },
      { ten: "DWI/ADC", giaTri: "b=0, 800–1000 — u đặc hạn chế khuếch tán" },
      { ten: "3D T1 FatSat DCE", giaTri: "1 pha trước + 5–6 pha sau tiêm liên tục (60–90 s/pha), dựng đường cong TIC" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tầm soát nguy cơ cao (BRCA), đánh giá xâm lấn u đã biết, đáp ứng hóa trị tân bổ trợ, túi ngực vỡ."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Nằm sấp với Breast Coil chuyên dụng; chụp ngày 7–14 chu kỳ kinh để giảm ngấm thuốc nền sinh lý."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ============================================================ */
  /* MRI — THÔNG SỐ, VẬT LÝ & AN TOÀN (Từ điển MRI)                           */
  /* ============================================================ */
  {
    id: "mri-ts-tr-te",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "TR & TE — tạo tương phản T1/T2",
    tuKhoa: ["tr", "te", "thoi gian lap", "echo", "t1w", "t2w", "tuong phan"],
    thongSo: [
      { ten: "TR ngắn 400–700 ms", giaTri: "Tối ưu T1W" },
      { ten: "TR dài 3000–5000 ms", giaTri: "Tối ưu T2W/PD; tăng số lát tối đa" },
      { ten: "TE ngắn 10–25 ms", giaTri: "Giữ tín hiệu mô → T1W" },
      { ten: "TE dài 80–120 ms", giaTri: "Dịch sáng rực → T2W (TE dài giảm SNR)" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "TR = khoảng giữa 2 xung kích thích RF cùng 1 lát; TE = từ xung kích thích đến đỉnh tín hiệu dội.",
        "Muốn ảnh T1 khác biệt → TR ngắn; muốn T2 khác biệt → TE dài."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ts-ti",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "TI & các xung xóa (STIR / FLAIR)",
    tuKhoa: ["ti", "inversion time", "stir", "flair", "xoa mo", "xoa dich"],
    thongSo: [
      { ten: "STIR (xóa mỡ) tại 1.5T", giaTri: "TI ~150–170 ms" },
      { ten: "FLAIR (xóa dịch) tại 1.5T", giaTri: "TI ~2000–2500 ms" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "TI = khoảng từ xung đảo 180° đến xung kích thích 90°; chọn TI để triệt tín hiệu mô mục tiêu khi nó cắt qua 0.",
        "Ở hệ 3.0T cần tăng nhẹ giá trị TI."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ts-fov-matrix",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "FOV, ma trận, voxel, độ phân giải",
    tuKhoa: ["fov", "matrix", "ma tran", "voxel", "do phan giai", "isotropic", "pixel"],
    thongSo: [
      { ten: "Voxel", giaTri: "= (FOV/Matrix_x) × (FOV/Matrix_y) × bề dày lát" },
      { ten: "Isotropic voxel", giaTri: "x=y=z — chuẩn cho xung 3D (SPACE/FIESTA), MPR mọi hướng không nhòe" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý & đánh đổi", items: [
        "Thu hẹp FOV / tăng ma trận → nét hơn nhưng voxel nhỏ → SNR giảm; ép FOV nhỏ dễ xảo ảnh cuộn (dùng Phase Oversampling).",
        "Voxel dị hướng (lát dày) dựng MPR bị răng cưa; isotropic dựng MPR mượt."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ts-nex-slice",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "NEX/NSA, bề dày lát & slice gap",
    tuKhoa: ["nex", "nsa", "trung binh", "be day lat", "slice thickness", "slice gap", "cross-talk"],
    thongSo: [
      { ten: "NEX 1 → 2", giaTri: "SNR tăng ~41% (căn 2), giảm nhiễu chuyển động; thời gian nhân đôi" },
      { ten: "Slice gap", giaTri: "10–20% bề dày lát (chống nhiễu xuyên âm cross-talk); ảnh 3D gap = 0" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý", items: [
        "Lát mỏng 1–3mm: dựng 3D đẹp nhưng SNR thấp; lát dày 5–7mm: nhanh, SNR cao nhưng dễ che tổn thương nhỏ (thể tích bán phần)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ts-fa-etl-bw",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Flip angle, ETL, Echo spacing & bandwidth",
    tuKhoa: ["flip angle", "fa", "ernst", "etl", "echo train", "bandwidth", "rbw", "esp"],
    thongSo: [
      { ten: "FA", giaTri: "90° ở Spin Echo; 10–60° ở Gradient Echo (rút ngắn TR); FA lớn → SAR cao" },
      { ten: "ETL", giaTri: "Cao (16–32) rút ngắn T2W nhưng mờ ảnh & mỡ sáng; T1W giới hạn ETL < 10" },
      { ten: "Bandwidth rộng", giaTri: "Giảm xảo ảnh hóa học/kim loại, TE ngắn hơn; đổi lại nhiễu nhiều (giảm SNR)" }
    ],
    noiDung: [
      { tieuDe: "Ghi chú", items: [
        "Góc Ernst: góc lật tối ưu SNR cho một TR cố định (quan trọng ở GRE 3D/TOF).",
        "Echo spacing (ESP) ngắn giảm mờ TSE & méo EPI/DWI; tăng bandwidth để hạ ESP."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ts-kspace",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "K-space & quỹ đạo thu nhận",
    tuKhoa: ["k-space", "kspace", "fourier", "cartesian", "radial", "spiral", "centric", "phase encoding"],
    thongSo: [
      { ten: "Lõi (center) k-space", giaTri: "Quyết định tương phản & SNR" },
      { ten: "Rìa k-space", giaTri: "Quyết định độ sắc nét (resolution)" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "K-space = ma trận dữ liệu thô, biến đổi Fourier (iFFT) thành ảnh. Bệnh nhân cựa khi thu lõi → hỏng cả ảnh.",
        "Quỹ đạo: Cartesian (nhanh, dễ ghosting) · Radial/BLADE (kháng chuyển động, nhiễu sọc nan hoa) · Spiral (fMRI/tim siêu nhanh).",
        "Thứ tự pha: Centric (quét lõi trước — CE-MRA bắt đỉnh thuốc) · Linear (ổn định, Spin Echo thường quy)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ts-snr-cnr",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "SNR & CNR — tối ưu tín hiệu",
    tuKhoa: ["snr", "cnr", "tin hieu", "nhieu", "toi uu"],
    thongSo: [
      { ten: "Tăng SNR", giaTri: "Tăng B0, voxel, NEX (căn 2); giảm bandwidth; giảm gia tốc PI" },
      { ten: "Tăng CNR", giaTri: "Tiêm Gadolinium; xóa mỡ (FatSat); xóa dịch (FLAIR)" }
    ],
    noiDung: [
      { tieuDe: "Gỡ lỗi nhanh", items: [
        "Ảnh nhiễu hạt: tăng bề dày lát +1mm, tăng FOV +2cm, hoặc tăng NEX — tín hiệu hồi phục.",
        "SNR ∝ B0 × voxel × √NEX; nghịch với √bandwidth và hệ số gia tốc PI (g-factor)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-ts-tang-toc",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Tăng tốc: Parallel Imaging, Compressed Sensing, Partial Fourier",
    tuKhoa: ["parallel imaging", "sense", "grappa", "ipat", "compressed sensing", "partial fourier", "g-factor"],
    thongSo: [
      { ten: "SENSE (miền ảnh)", giaTri: "Tái tạo nhanh, mong manh với chuyển động" },
      { ten: "GRAPPA (miền k-space)", giaTri: "Kháng chuyển động — chủ lực MRI tim & EPI sọ não" },
      { ten: "Factor R=2", giaTri: "Giảm ½ thời gian; R>3 SNR giảm sâu (cần cuộn ≥32 kênh)" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "Parallel Imaging bỏ bớt dòng k-space, nội suy bằng vị trí nhiều cuộn dây; g-factor tăng khi coil hỏng → nhiễu trung tâm.",
        "Compressed Sensing: thu rất thưa (tới ~10–20%) + nội suy L1 → MRCP 3D từ 4 phút xuống ~15 s; tái tạo lâu.",
        "Partial Fourier / Half-scan: thu ~60–70% k-space, điền đối xứng Hermite — giảm thời gian, giảm SNR."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-vl-co-ban",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Vật lý cơ bản: B0, Larmor, tiến động, từ hóa",
    tuKhoa: ["b0", "larmor", "precession", "tien dong", "nmv", "mz", "mxy", "cong huong", "proton"],
    thongSo: [
      { ten: "Larmor", giaTri: "f = γ × B0; Hydrogen γ = 42,58 MHz/Tesla; tại 1.5T ≈ 63,86 MHz" },
      { ten: "Mxy (ngang)", giaTri: "Cuộn dây CHỈ thu được tín hiệu từ thành phần ngang này" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "B0 = từ trường chính (Tesla), luôn bật 24/7; tạo NMV (M0) nguồn gốc tín hiệu — 3T có NMV gấp đôi 1.5T.",
        "Cộng hưởng: tần số RF khớp đúng tần số Larmor của proton; Prescan dò tần số trung tâm.",
        "Tiến động (precession): trục spin đảo quanh B0 như con quay; B0 càng mạnh càng nhanh."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-vl-relaxation",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Thư giãn T1 / T2 / T2*, FID & Echo",
    tuKhoa: ["t1", "t2", "t2*", "relaxation", "thu gian", "fid", "echo", "rephasing", "spin echo"],
    thongSo: [
      { ten: "T1 (dọc Mz)", giaTri: "Phục hồi 63%; mỡ T1 ngắn (sáng T1W), nước T1 dài (tối T1W)" },
      { ten: "T2 (ngang Mxy)", giaTri: "Phân rã còn 37%; nước T2 dài (sáng T2W)" },
      { ten: "T2*", giaTri: "1/T2* = 1/T2 + 1/T2_inhomo; nền của GRE nhạy máu & SWI" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "FID tắt nhanh do mất đồng pha → cần xung 180° (Spin Echo) hoặc gradient (GRE) để tái hội tụ tạo Echo.",
        "Xung 180° của Spin Echo gột sạch lỗi từ trường B0 không đồng nhất → ảnh chân thực."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-vl-gradient",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Gradient: slew rate, biên độ, eddy current, PNS",
    tuKhoa: ["gradient", "slew rate", "amplitude", "eddy current", "pns", "db/dt", "duty cycle"],
    thongSo: [
      { ten: "Slew rate", giaTri: "T/m/s — cao → EPI/DWI nhanh & mỏng, ồn hơn, nguy cơ giật cơ (PNS)" },
      { ten: "Biên độ gradient", giaTri: "mT/m — cao (45–80) cho DWI b 2000–3000, lát mỏng" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "Gradient = từ trường phụ biến thiên theo không gian → định vị 3D (slice/phase/freq).",
        "Eddy currents (dòng xoáy) làm méo tín hiệu → cần shielded gradient + phần mềm hiệu chỉnh.",
        "dB/dt lớn (EPI) gây kích thích thần kinh ngoại vi (PNS) — máy giới hạn theo FDA; Duty cycle cao → báo Gradient over-temp."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-vl-chuoi-nen",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Họ chuỗi xung nền: Spin Echo, Gradient Echo, SSFP",
    tuKhoa: ["spin echo", "gradient echo", "gre", "ssfp", "bssfp", "truefisp", "fiesta", "spoiling", "flash"],
    thongSo: [
      { ten: "Spin Echo (90°–180°)", giaTri: "Chân thực, gột lỗi B0; nền T1/T2 TSE" },
      { ten: "Gradient Echo (FA nhỏ)", giaTri: "Nhanh; FA 10–15° T2*W (máu), FA 70–90° T1W" },
      { ten: "bSSFP (TrueFISP/FIESTA)", giaTri: "Tương phản T2/T1; tim Cine & thai nhi (dịch sáng chói)" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "SSFP: TR < T2 giữ từ hóa ở trạng thái cân bằng → ảnh 3D siêu nhanh; bSSFP có nhiễu dải đen (banding) nếu B0 xấu.",
        "Spoiling (RF/Gradient) phá Mxy dư → tạo T1W thuần (FLASH/SPGR/T1 FFE), lý tưởng sụn & sau tiêm Gd."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-vl-tu-tinh",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Tính từ của mô & dịch chuyển hóa học",
    tuKhoa: ["susceptibility", "nghich tu", "thuan tu", "sat tu", "chemical shift", "in phase", "out phase"],
    thongSo: [
      { ten: "Chemical shift (mỡ-nước)", giaTri: "~3,5 ppm; tại 1.5T lệch ~220 Hz, đối pha mỗi 2,2 ms (In/Out-phase)" },
      { ten: "Sắt từ", giaTri: "CHỐNG CHỈ ĐỊNH (bị hút như đạn) — máy tạo nhịp cũ, mảnh đạn sắt" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "Nghịch từ: mô người (nước, canxi) — xương canxi đen mọi xung.",
        "Thuận từ: Gadolinium, máu khử oxy, methemoglobin — rút ngắn T1 (sáng sau Gd) hoặc phá T2* (quầng đen vi xuất huyết).",
        "Độ nhạy từ (χ) của kim loại/khí/máu tụ làm cong vênh B0 → xảo ảnh nhạy từ (dùng Spin Echo, tăng bandwidth, MARS/SEMAC)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-xao-anh",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Xảo ảnh MRI thường gặp & cách khắc phục",
    tuKhoa: ["xao anh", "artifact", "aliasing", "gibbs", "ghosting", "zipper", "magic angle", "banding", "motion"],
    thongSo: [
      { ten: "Trục pha (Phase)", giaTri: "Nơi tập trung ghosting & aliasing — đặt vuông góc hướng cử động chính" }
    ],
    noiDung: [
      { tieuDe: "Các xảo ảnh & xử lý", items: [
        "Aliasing/wrap-around: mở rộng FOV hoặc bật No Phase Wrap / Phase Oversampling.",
        "Chemical shift: tăng bandwidth hoặc xóa mỡ. Gibbs/truncation: tăng ma trận.",
        "Motion/ghosting: nằm im, triggering/nín thở, đổi hướng pha, dùng BLADE/PROPELLER.",
        "Magic angle: sáng giả gân ở ~55° trên TE ngắn — đối chiếu T2W (TE dài).",
        "Zipper: cửa lồng Faraday hở/lọt sóng — đóng kín cửa phòng. Banding (bSSFP): shim B0 tốt hoặc rút TR < 4ms.",
        "Susceptibility (kim loại): Spin Echo + tăng bandwidth + ma trận; dùng MARS/SEMAC/MAVRIC."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-gating",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Đồng bộ & bù chuyển động (ECG, hô hấp, navigator)",
    tuKhoa: ["ecg gating", "trigger", "respiratory", "navigator", "breath hold", "sat band", "flow comp", "r-r"],
    thongSo: [
      { ten: "Trigger delay", giaTri: "Từ đỉnh sóng R đến phát xung — canh thì tâm trương (tim ít vận động)" },
      { ten: "Breath-hold", giaTri: "Nín thở 10–20 s cho xung bụng động học (VIBE/LAVA)" }
    ],
    noiDung: [
      { tieuDe: "Kỹ thuật", items: [
        "ECG gating: khoảng R-R thay cho TR trong chụp tim; loạn nhịp làm ảnh mờ — dán điện cực chuẩn / hạ nhịp.",
        "Respiratory triggering (đai bụng) & Navigator echo (bút chì ở vòm hoành) cho MRCP/gan khi không nín thở được.",
        "Saturation bands: chặn mạch cổ / thành bụng chống ghosting; Flow compensation làm sáng mạch/dịch & xóa nhiễu dòng chảy."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-phan-cung",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "Phần cứng: cuộn dây, shimming, đệm điện môi",
    tuKhoa: ["coil", "cuon day", "surface", "volume", "phased array", "shimming", "dielectric pad"],
    thongSo: [
      { ten: "Phased array (đa kênh)", giaTri: "SNR cao + phủ rộng; điều kiện cho chụp song song (SENSE/GRAPPA)" },
      { ten: "Đệm điện môi (3T)", giaTri: "Barium Titanate — xóa bóng đen hốc ở gan/bụng do cộng hưởng điện môi" }
    ],
    noiDung: [
      { tieuDe: "Khái niệm", items: [
        "Surface coil: SNR cao vùng nông, tối khi vào sâu; Volume coil (lồng chim): SNR đồng nhất toàn thể tích.",
        "Shimming: làm phẳng B0 trước chụp — bắt buộc chạy lại khi FatSat/MRS lỗi."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-an-toan",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số & Vật lý MRI",
    ten: "An toàn MRI: B0/Quench, SAR, tiếng ồn, thuốc Gd",
    tuKhoa: ["an toan", "quench", "sar", "5 gauss", "faraday", "acoustic", "gadolinium", "nsf", "cryo"],
    thongSo: [
      { ten: "SAR (W/kg)", giaTri: "Normal < 2 W/kg, First Level < 4 W/kg/15 phút; khai đúng cân nặng" },
      { ten: "Đường 5 Gauss", giaTri: "Ranh an toàn từ trường; eGFR < 30 → thận trọng Gd (nguy cơ NSF)" },
      { ten: "Tiếng ồn", giaTri: ">100–120 dB — bắt buộc nút tai/tai nghe cho MỌI bệnh nhân" }
    ],
    noiDung: [
      { tieuDe: "⚠️ An toàn", items: [
        "B0 bật 24/7 hút vật sắt từ — CẤM bình oxy, chìa khóa, xe lăn thường vào phòng máy.",
        "Nút Quench đỏ: CHỈ nhấn khi có người bị kẹt tính mạng bởi vật kim loại, không nhấn khi lỗi phần mềm.",
        "SAR giảm bằng: tăng TR, giảm số lát, giảm FA, giảm ETL. B1 (RF) sinh nhiệt (SAR).",
        "Lồng Faraday: không mở hé cửa phòng khi đang quét (lọt sóng → zipper).",
        "Gadolinium: ưu tiên macrocyclic; tránh dòng mạch thẳng đời cũ ở suy thận nặng (NSF)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ============================================================ */
  /* MRI — THƯ VIỆN CHUỖI XUNG (Từ điển MRI, gộp theo họ xung)                */
  /* ============================================================ */
  {
    id: "mri-cx-se-tse",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Spin Echo (SE) & Turbo/Fast SE (TSE/FSE)",
    tuKhoa: ["spin echo", "se", "tse", "fse", "t1w", "t2w", "pdw", "etl", "turbo"],
    thongSo: [
      { ten: "T1W", giaTri: "TR ngắn 400–600 ms, TE ngắn 10–20 ms" },
      { ten: "T2W", giaTri: "TR dài >2000 ms, TE dài >80 ms" },
      { ten: "PDW", giaTri: "TR dài >2000 ms, TE ngắn <30 ms" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý & ứng dụng", items: [
        "SE (90°–180°): SNR cao nhất, ít xảo ảnh kim loại nhất, nhưng chụp lâu. T1W: giải phẫu, mỡ, máu bán cấp, ngấm thuốc. T2W: phù/viêm/u. PDW: sụn, dây chằng, MS.",
        "TSE/FSE: phát chuỗi nhiều xung 180° (Echo Train) trong 1 TR → nhanh gấp hàng chục lần; là chuỗi xương sống thay SE.",
        "ETL (Turbo Factor) cao → nhanh hơn nhưng T2W mờ (blurring) và mỡ sáng (J-coupling)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-gre-swi",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Gradient Echo (GRE), T2*, SWI & QSM",
    tuKhoa: ["gre", "gradient echo", "flash", "spgr", "t2*", "swi", "swan", "qsm", "xuat huyet", "voi hoa"],
    thongSo: [
      { ten: "FA lớn 70–90°", giaTri: "→ T1W (nhanh, sau tiêm)" },
      { ten: "FA nhỏ 5–20°", giaTri: "→ T2*W (xuất huyết, sắt, vôi hóa)" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý & ứng dụng", items: [
        "GRE không dùng xung 180° → TR ngắn, chụp nhanh; nhạy T2* (mất tín hiệu ở chất có tính từ). Cực nhạy xảo ảnh kim loại — KHÔNG dùng khi có nẹp vít.",
        "SWI (hãng: Siemens SWI, GE SWAN, Philips SWIp): kết hợp magnitude + phase → siêu nhạy vi xuất huyết (DAI), phân biệt máu vs vôi hóa (phase map), tĩnh mạch nhỏ (MinIP).",
        "QSM: định lượng nồng độ sắt (nhân xám sâu — Parkinson/Alzheimer), phân biệt 100% vôi hóa vs xuất huyết."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-ir",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Chuỗi đảo hồi: FLAIR, DIR, PSIR, Real-IR",
    tuKhoa: ["flair", "dir", "double inversion", "psir", "real ir", "xoa dich", "ms"],
    thongSo: [
      { ten: "FLAIR", giaTri: "TI dài 2000–2500 ms (1.5T) — xóa dịch CSF, tổn thương sáng trên nền đen" },
      { ten: "DIR", giaTri: "2 xung đảo 180° (2 TI) — xóa cả CSF & chất trắng, chỉ hiện chất xám + tổn thương" }
    ],
    noiDung: [
      { tieuDe: "Ứng dụng", items: [
        "FLAIR: nhạy nhất với MS, thoái hóa chất trắng, tổn thương sát não thất/vỏ não, viêm màng não, xuất huyết dưới nhện. Hố sau có thể nhiễu dòng chảy CSF → kết hợp BLADE.",
        "DIR: tăng phát hiện MS sát vỏ não, loạn sản vỏ não khu trú (động kinh).",
        "PSIR: tái tạo nhạy pha cho LGE tim — thành công 100% dù chọn nhầm TI. Real-IR: giữ giá trị âm, tách bạch mô (tủy não trẻ sơ sinh)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-xoa-mo",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Xóa mỡ: STIR, SPIR, SPAIR, Dixon, Water Excitation",
    tuKhoa: ["stir", "spir", "spair", "dixon", "water excitation", "proset", "xoa mo", "fatsat"],
    thongSo: [
      { ten: "STIR", giaTri: "TI ngắn 140–170 ms (1.5T); xóa mỡ theo T1 — đồng đều, miễn nhiễm B0 không đều" },
      { ten: "Dixon", giaTri: "Thu In/Out-phase → 4 ảnh (In, Out, Water, Fat)" }
    ],
    noiDung: [
      { tieuDe: "Chọn kỹ thuật", items: [
        "STIR: tiêu chuẩn vàng phù tủy xương/chấn thương; cứu cánh vùng từ trường khó (cổ, vai, bàn chân). ⚠️ KHÔNG dùng sau tiêm Gd (xóa nhầm tổn thương ngấm thuốc).",
        "SPIR/SPAIR: xóa mỡ theo tần số — DÙNG ĐƯỢC sau tiêm Gd; SPAIR (xung đoạn nhiệt) kháng B0/B1 tốt, số 1 cho bụng/chậu/vú/cơ xương.",
        "Dixon: phát hiện mỡ vi thể (adenoma thượng thận, gan nhiễm mỡ) qua sụt tín hiệu Out-of-phase; định lượng mỡ.",
        "Water Excitation/PROSET: kích thích chọn lọc nước — tuyệt cho sụn khớp 3D, tránh lỗi FatSat nhòe viền."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-dwi",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Khuếch tán: DWI/ADC, DTI, DKI, IVIM, NODDI",
    tuKhoa: ["dwi", "adc", "dti", "tractography", "dki", "ivim", "noddi", "khuech tan", "b-value"],
    thongSo: [
      { ten: "DWI b-value", giaTri: "b=0 và b=800–1000 s/mm²; luôn đối chiếu ADC (loại T2 shine-through)" },
      { ten: "DTI", giaTri: "Đo ≥6 hướng (thường 20/30/64); bản đồ FA mã hóa màu" }
    ],
    noiDung: [
      { tieuDe: "Ứng dụng", items: [
        "DWI: đột quỵ nhồi máu siêu cấp (<30 phút), phân biệt áp xe vs u hoại tử, phân loại ác tính (ADC thấp = ác tính).",
        "DTI (Tractography): bản đồ bó sợi trước mổ u não; chấn thương sợi trục vi thể (DAI).",
        "DKI (≥3 b-value tới 2000–2500): phân độ u thần kinh đệm. IVIM (nhiều b thấp 0–200): tách khuếch tán thật & tưới máu, u gan/xơ gan không thuốc. NODDI: multi-shell, vi cấu trúc sợi trục (nghiên cứu)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-epi",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "EPI & biến thể (SE-EPI, GRE-EPI, RESOLVE, MUSE, ZOOMit)",
    tuKhoa: ["epi", "echo planar", "se-epi", "gre-epi", "resolve", "muse", "zoomit", "focus", "meo hinh"],
    thongSo: [
      { ten: "EPI", giaTri: "Thu toàn k-space 1 lát sau 1 xung RF (vài chục ms) — nền của DWI/DTI/DSC/fMRI" }
    ],
    noiDung: [
      { tieuDe: "Đặc điểm & biến thể", items: [
        "EPI cần slew rate cực cao; nhược điểm: méo hình ở ranh giới mô-khí & chemical shift lớn → FatSat triệt để.",
        "SE-EPI: chuẩn cho DWI lâm sàng, giảm méo vùng nền sọ/tiền liệt. GRE-EPI: nhanh nhất, cho fMRI & DSC (không dùng DWI).",
        "RESOLVE/RS-EPI (multi-shot + navigator): DWI độ phân giải cao, ít méo — vàng cho DWI tiền liệt/cổ tử cung. MUSE: DWI bụng. ZOOMit/FOCUS (reduced FOV): DWI khu trú tủy sống/u nhỏ."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-3d",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Xung 3D isotropic: MPRAGE, SPACE/CUBE/VISTA, CISS, VIBE/LAVA",
    tuKhoa: ["mprage", "mp2rage", "space", "cube", "vista", "ciss", "fiesta-c", "vibe", "lava", "thrive", "3d", "isotropic"],
    thongSo: [
      { ten: "MPRAGE", giaTri: "3D T1 isotropic — giải phẫu sọ não, neuronavigation, đo teo hồi hải mã" },
      { ten: "SPACE/CUBE/VISTA", giaTri: "3D TSE T2 góc lật biến thiên — MPR mọi hướng không nhòe" },
      { ten: "VIBE/LAVA/THRIVE", giaTri: "3D T1 GRE + xóa mỡ, nín thở 15–20s — động học bụng/vú" }
    ],
    noiDung: [
      { tieuDe: "Ứng dụng", items: [
        "MP2RAGE: 2 TI tự triệt thiên lệch B1 — bản đồ T1 ở 3T/7T.",
        "CISS/FIESTA-C: 2 lần bSSFP bù banding — dây thần kinh sọ bể não, ốc tai, rò dịch não tủy.",
        "VIBE-Dixon/LAVA-Flex: 1 lần nín thở ra 4 ảnh (In/Out/Water/Fat); eTHRIVE (Philips) tương đương."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-ssfp",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "SSFP & xung đơn phát (bSSFP/TrueFISP, HASTE, DRIVE)",
    tuKhoa: ["bssfp", "truefisp", "fiesta", "b-ffe", "haste", "ss-fse", "drive", "restore", "banding"],
    thongSo: [
      { ten: "bSSFP", giaTri: "Tương phản T2/T1; nước/dịch/máu sáng rực — tim Cine, thai nhi, cấu trúc ngập dịch" },
      { ten: "HASTE/SS-FSE", giaTri: "Half-Fourier, 1 lát < 1 giây — bệnh nhân không nín thở, MRCP thick slab" }
    ],
    noiDung: [
      { tieuDe: "Đặc điểm", items: [
        "bSSFP (Siemens TrueFISP, GE FIESTA, Philips b-FFE): TR/TE cực ngắn; dễ xảo ảnh sọc đen (banding) nếu B0 xấu → shim hoặc rút TR < 4 ms.",
        "DRIVE/RESTORE (driven equilibrium): thêm xung 90° cuối echo train ép phục hồi → T2 nhanh mà dịch vẫn trắng (cột sống, sọ não)."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-mra",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Chụp mạch MRA: TOF, PC-MRA, CE-MRA, không tiêm (FBI/QISS)",
    tuKhoa: ["mra", "tof", "pc-mra", "phase contrast", "ce-mra", "venc", "qiss", "native", "fbi", "react", "twist", "tricks"],
    thongSo: [
      { ten: "TOF", giaTri: "Không tiêm, dòng chảy vào sáng — đa giác Willis, phình ĐM nội sọ" },
      { ten: "PC-MRA VENC", giaTri: "TM/CSF 10–20 cm/s; ĐM nội sọ 60–100 cm/s (sai VENC → aliasing)" },
      { ten: "CE-MRA", giaTri: "Bolus Gd + 3D T1 GRE siêu tốc — ĐM chủ/cảnh/thận/chi dưới" }
    ],
    noiDung: [
      { tieuDe: "Lựa chọn", items: [
        "TOF 2D (dòng chậm, MRV) / 3D (nét, ĐM nội sọ); đặt Saturation Band chặn dòng không mong muốn.",
        "PC-MRA: định lượng vận tốc dòng (CSF, van tim), không bị shine-through máu tụ.",
        "CE-MRA: thành bại ở canh thuốc (Bolus Tracking/Test Bolus); đa pha TWIST/TRICKS loại rủi ro trượt thuốc.",
        "Không tiêm gating tim: NATIVE/FBI/TRANCE, QISS (ưu việt cho MRA chi dưới PAD), REACT (không cần ECG) — cho bệnh nhân suy thận chống chỉ định Gd."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-tuoi-mau",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Tưới máu: ASL (pCASL/PASL/FAIR), DSC, DCE",
    tuKhoa: ["asl", "pcasl", "pasl", "fair", "dsc", "dce", "tuoi mau", "perfusion", "cbf", "cbv", "ktrans"],
    thongSo: [
      { ten: "ASL", giaTri: "Không tiêm — dán nhãn từ máu ĐM cổ; pCASL là chuẩn hiện nay" },
      { ten: "DSC", giaTri: "T2* EPI + bolus Gd nhanh 4–5 ml/s — CBV/CBF/MTT/TTP" },
      { ten: "DCE", giaTri: "T1 3D nhanh nhiều pha + Gd — đường cong TIC, Ktrans/Kep/Ve" }
    ],
    noiDung: [
      { tieuDe: "Ứng dụng", items: [
        "ASL: tưới máu não không thuốc (trẻ em, thai phụ, suy thận); u tái phát vs hoại tử sau xạ; Moya Moya. pCASL hiệu suất >80% ở 3T; PASL/FAIR nhẹ SAR hơn.",
        "DSC: đột quỵ (Mismatch với DWI → Penumbra); CBV tăng trong u ác cao (Glioblastoma).",
        "DCE: ung thư vú (TIC type 3 wash-out), tiền liệt tuyến, u phần mềm; đánh giá đáp ứng kháng sinh mạch."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-chuc-nang",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Chức năng & phổ: fMRI (BOLD), MRS",
    tuKhoa: ["fmri", "bold", "resting state", "task", "mrs", "spectroscopy", "choline", "naa", "lactate"],
    thongSo: [
      { ten: "fMRI (BOLD)", giaTri: "T2* EPI; dao động tự phát <0,1 Hz (resting) hoặc block design (task)" },
      { ten: "MRS", giaTri: "Choline / Creatine / NAA / Lactate theo ppm; Single-voxel hoặc Multi-voxel" }
    ],
    noiDung: [
      { tieuDe: "Ứng dụng", items: [
        "fMRI: bản đồ vùng chức năng (ngôn ngữ/vận động/thị giác) trước mổ u não/động kinh; resting-state cho bệnh nhân liệt/hôn mê/nhũ nhi.",
        "MRS: u não (Choline tăng, NAA giảm), áp xe (Lipid/Lactate, amino acid), bệnh não gan/chuyển hóa. Bắt buộc xóa nước & shimming cẩn thận."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-tim",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Chuỗi xung tim: Cine, LGE, T1/T2 mapping, 4D Flow, Q-Flow",
    tuKhoa: ["cine", "lge", "mde", "molli", "shmolli", "sasha", "mapping", "4d flow", "q-flow", "tagging", "senc"],
    thongSo: [
      { ten: "Cine SSFP", giaTri: "ECG gating, 25–30 frame/chu kỳ — EF, thể tích thất, vận động vùng" },
      { ten: "LGE", giaTri: "10–15 phút sau Gd, TI scout xóa cơ tim lành — sẹo nhồi máu" },
      { ten: "Mapping", giaTri: "T1 (MOLLI/ShMOLLI/SASHA, tính ECV), T2 (phù), T2* (ứ sắt: cơ tim <10ms nặng)" }
    ],
    noiDung: [
      { tieuDe: "Ứng dụng", items: [
        "Cine: chuẩn vàng đo EF/thể tích/khối cơ tim. LGE/PSIR: định lượng % sẹo (viable), phân biệt bệnh cơ tim thiếu máu vs không.",
        "4D Flow & Q-Flow (2D PC): luồng phụt, hở van, shunt Qp/Qs, Wall Shear Stress. Tagging/SENC: sức căng cơ tim (strain) chẩn đoán sớm."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-chong-rung",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Chống chuyển động: PROPELLER/BLADE, Radial, StarVIBE/GRASP",
    tuKhoa: ["propeller", "blade", "radar", "multivane", "jet", "radial", "starvibe", "grasp", "golden angle", "chong rung"],
    thongSo: [
      { ten: "PROPELLER/BLADE", giaTri: "Thu dải xoay quanh tâm k-space — tự bù chuyển động; +20–30% thời gian" },
      { ten: "Radial/StarVIBE", giaTri: "Thu hình tia, nhiễu dạng sọc vô hại — bụng free-breathing" }
    ],
    noiDung: [
      { tieuDe: "Ứng dụng", items: [
        "PROPELLER/BLADE (GE/Siemens; Philips MultiVane, Canon JET, Fuji RADAR): T2W/FLAIR sọ não cho bệnh nhân kích thích/nhi khoa; T2W khung chậu chống nhu động.",
        "GRASP/Golden-angle Radial + Compressed Sensing: DCE gan free-breathing 3 phút; StarVIBE cho đầu-mặt-cổ (nuốt), ruột non."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },
  {
    id: "mri-cx-dinh-luong",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chuỗi xung MRI",
    ten: "Định lượng & tiên tiến: T2/T1rho map, MWI, MT, Elastography, CEST, UTE/ZTE, chống kim loại",
    tuKhoa: ["t2 mapping", "t1rho", "mwi", "mt", "mtr", "elastography", "mre", "cest", "apt", "ute", "zte", "mars", "semac", "silent", "synthetic"],
    thongSo: [
      { ten: "T2/T1rho map", giaTri: "Thoái hóa sụn siêu sớm (collagen/proteoglycan)" },
      { ten: "MRE", giaTri: "Chuẩn vàng không xâm lấn đo xơ gan (kPa), thang Metavir F1–F4" },
      { ten: "UTE/ZTE", giaTri: "TE micro-giây — xương vỏ/gân/phổi; ZTE cho ảnh giống CT & chụp im lặng" }
    ],
    noiDung: [
      { tieuDe: "Kỹ thuật", items: [
        "MWI (nước myelin): đo MWF trong MS. MT/MTR: dấu ấn phá myelin. CEST/APT: u tái phát vs hoại tử, nồng độ glucose/glutamate.",
        "Synthetic MRI (MAGiC/SyMRI): 1 lần quét ~5 phút tổng hợp T1W/T2W/FLAIR/STIR — cứu bệnh nhân sợ lồng kín/nhi.",
        "Silent Scan/Quiet Suite (ZTE/UTE): chụp im lặng cho trẻ ngủ. Chống kim loại MARS/SEMAC/MAVRIC + VAT: bệnh nhân thay khớp."
      ]}
    ],
    nguon: "Từ điển MRI – Wikiradiology KTV 3 Miền (CC BY-SA)."
  },

  /* ============================================================ */
  /* MRI — QUY TRÌNH CHÍNH THỨC CỦA KHOA (SOP)                                */
  /* Nguồn: QUY TRÌNH MRI KHOA CDHA BVHVGL.docx — đã được Trưởng khoa duyệt.  */
  /* Chống chỉ định "chung": máy tạo nhịp (tuyệt đối); kim loại từ tính/kẹp   */
  /* phẫu thuật <6 tháng; sợ khoang kín; không nằm yên; suy gan–thận (khi tiêm). */
  /* ============================================================ */

  /* ---- Sọ não - Thần kinh ---- */
  {
    id: "mri-sop-so-nao-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT sọ não CÓ tiêm thuốc đối quang từ",
    tuKhoa: ["so nao tiem", "u nao", "viem nao", "ap xe", "dot quy"],
    thongSo: [
      { ten: "Chuỗi thường quy", giaTri: "T1, T2, FLAIR (axial, coronal, sagittal)" },
      { ten: "Chuỗi đặc biệt", giaTri: "T2* (chảy máu), IR (chất xám), Diffusion (nhồi máu/u/áp xe)" },
      { ten: "Thì tiêm", giaTri: "Định vị T1 3 hướng hoặc 3D; tiêm TM 10 ml (tay hoặc máy)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U não các loại, viêm não–màng não, áp xe, dị dạng mạch não, động kinh, đột quỵ (nhồi máu/chảy máu các giai đoạn)."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (xem đầu mục SOP)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ cấu trúc giải phẫu; đánh giá tính chất ngấm thuốc của tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-mach-noi-so-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT hệ mạch máu hướng nội sọ KHÔNG tiêm",
    tuKhoa: ["mach nao", "tof", "pc", "phinh mach", "di dang mach", "xoang tinh mach"],
    thongSo: [
      { ten: "Thường quy", giaTri: "T1, T2, FLAIR; T2*/IR/Diffusion khi cần" },
      { ten: "Mạch", giaTri: "3D TOF (hệ động mạch) + 3D PC (hệ tĩnh mạch)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Dị dạng mạch não, hẹp mạch trong/ngoài sọ, phình ĐM, dị dạng TM, viêm tắc xoang TM, theo dõi sau nút dị dạng/phình mạch."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ cấu trúc giải phẫu mạch; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-dm-noi-so-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT hệ động mạch nội sọ CÓ tiêm",
    tuKhoa: ["dm noi so", "dsa mri", "phinh mach", "di dang"],
    thongSo: [
      { ten: "Trước tiêm", giaTri: "T1, T2, FLAIR; T2*/Diffusion; có thể TOF 3D không tiêm" },
      { ten: "Thì tiêm", giaTri: "Chuỗi mạch DSA-MRI, khung quai ĐM chủ → hết vòm sọ, bơm tiêm điện" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Dị dạng/hẹp mạch não, đột quỵ tìm tắc mạch lớn, dò ĐM cảnh–xoang hang, theo dõi sau điều trị nút mạch."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ cấu trúc giải phẫu mạch; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-tuyen-yen",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT tuyến yên CÓ tiêm",
    tuKhoa: ["tuyen yen", "pituitary", "prolactin", "u so hau", "dynamic"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla; phát hiện u rất nhỏ < 3 mm" },
      { ten: "Chuỗi", giaTri: "T1, T2, FLAIR (dựa đường CA-CP)" },
      { ten: "Thì tiêm", giaTri: "Chuỗi động học (dynamic), chủ yếu coronal vùng tuyến yên; bơm tiêm điện" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Nghi u tuyến yên (tăng prolactin/tiết sữa), lùn tuyến yên, u vùng yên (sọ hầu, nang Rathke), đái tháo nhạt, giảm thị lực do chèn giao thoa."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu tuyến yên; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-hoc-mat-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT hốc mắt & thần kinh thị giác KHÔNG tiêm",
    tuKhoa: ["hoc mat", "than kinh thi", "orbit", "u nhan cau"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla" },
      { ten: "Chuỗi", giaTri: "T1, T2, FLAIR theo trục dây thị; tất cả xóa mỡ (Fat-sat)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U nhãn cầu/hậu nhãn cầu (schwannoma, meningioma), lymphoma, u tuyến lệ, dị dạng mạch hậu nhãn, dò ĐM cảnh–xoang hang."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Lưu ý", items: ["Khám hốc mắt luôn kèm khám nội sọ."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-hoc-mat-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT hốc mắt & thần kinh thị giác CÓ tiêm",
    tuKhoa: ["hoc mat tiem", "than kinh thi", "orbit"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla" },
      { ten: "Thì tiêm", giaTri: "T1 xóa mỡ theo 3 hướng cắt (theo trục dây TK thị)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Như hốc mắt không tiêm, khi cần tiêm bộc lộ rõ tổn thương."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Lưu ý", items: ["Khám hốc mắt luôn kèm khám nội sọ."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-pho-so-nao",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT phổ sọ não (MRS)",
    tuKhoa: ["pho so nao", "mrs", "spectroscopy", "cholin", "naa", "voxel"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla" },
      { ten: "Phổ", giaTri: "Mono-voxel hoặc multi-voxel; đặt ô đo tại vùng ngấm thuốc, tránh xương/chảy máu" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U não trong/ngoài trục, viêm/áp xe, xơ cứng đa ổ, động kinh, sa sút trí tuệ, đột quỵ."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Lưu ý", items: ["Thường tiêm 1 lọ thuốc, T1 3 hướng xác định vùng đo; multi-voxel gồm tổn thương + phù + vùng lành đối diện để so sánh chất chuyển hóa."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-bo-soi-tk",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT các bó sợi thần kinh (DTI/Tractography)",
    tuKhoa: ["bo soi", "dti", "tractography", "tensor", "adc"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1.5 Tesla" },
      { ten: "Chuỗi", giaTri: "T1, T2, FLAIR; khuếch tán + bản đồ ADC; chuỗi tensor theo hướng bó sợi" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U não cạnh/xâm lấn bó sợi trục, xơ cứng đa ổ, dị dạng mạch, dị dạng bẩm sinh (lạc chỗ chất xám), động kinh."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (không nằm yên — có thể an thần)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Ảnh rõ, đủ chuỗi xung; các bó sợi trục hiển thị rõ."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-tuoi-mau-nao",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT tưới máu não (Perfusion)",
    tuKhoa: ["tuoi mau nao", "perfusion", "dsc", "cbv", "mtt", "ttp"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1.5 Tesla + bơm tiêm điện; kim 18G, 2 nòng" },
      { ten: "Thuốc", giaTri: "Bolus Gadolinium 0,2 ml/kg, tốc độ 5 ml/giây + đuổi 20 ml NaCl cùng tốc độ" },
      { ten: "Quét", giaTri: "T2* toàn bộ nhu mô não, lặp liên tục 40–45 giây ngay khi bơm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Nhồi máu não cấp (tìm vùng còn hồi phục), u não."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (chi tiết: thiết bị điện tử cấy ghép, kẹp kim loại < 6 tháng, người bệnh nặng)."] },
      { tieuDe: "Thông số tính", items: ["Bolus arrival time, TTP, MTT, CBV (tương đối), MAX, CBFI."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-khuech-tan-so-nao",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT khuếch tán sọ não (Diffusion)",
    tuKhoa: ["khuech tan", "diffusion", "dwi", "adc", "nhoi mau som"],
    thongSo: [
      { ten: "Máy", giaTri: "1,5 Tesla" },
      { ten: "Chuỗi", giaTri: "T1, T2, FLAIR; Diffusion b0 – b1000 (tùy lâm sàng) + bản đồ ADC" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Nhồi máu não giai đoạn sớm, viêm/áp xe não, bệnh chất trắng, khối choán chỗ, chấn thương sợi trục."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (thiết bị điện tử cấy ghép; kẹp kim loại < 6 tháng)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Đánh giá tổn thương & mức độ khuếch tán nhu mô não."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-nen-so-xuong-da",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Chụp CHT nền sọ & xương đá",
    tuKhoa: ["nen so", "xuong da", "ciss", "drive", "oc tai"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1.5 Tesla + bơm tiêm điện" },
      { ten: "Trước tiêm", giaTri: "T2 ngang 3 mm; 3D phân giải cao (CISS 3D / DRIVE); T2 coronal 3 mm; T1 ngang 3 mm; Diffusion EPI/HASTE 3–4 mm" },
      { ten: "Sau tiêm", giaTri: "Gd 0,1 mmol/kg, tốc độ 2 ml/giây; T1 ngang & coronal 3 mm có xóa mỡ (hoặc T1 3D xóa mỡ)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Bệnh lý nền sọ & xương đá: viêm/nhiễm trùng, u."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (thiết bị điện tử; kẹp kim loại < 6 tháng)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu nền sọ & xương đá; đánh giá tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },

  /* ---- Đầu - Mặt - Cổ ---- */
  {
    id: "mri-sop-mat-co-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Đầu - Mặt - Cổ",
    ten: "Chụp CHT vùng mặt – cổ KHÔNG tiêm",
    tuKhoa: ["mat co", "vung co", "chan thuong", "viem", "u"],
    thongSo: [
      { ten: "Chuỗi", giaTri: "T2 ngang 3 mm; T2 ngang 3 mm xóa mỡ; T2 coronal 3 mm (±xóa mỡ); T1 ngang 3 mm; Diffusion EPI/HASTE 3–4 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Chấn thương, viêm/nhiễm trùng, tổn thương u vùng mặt – cổ."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu vùng mặt – cổ; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-mat-co-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Đầu - Mặt - Cổ",
    ten: "Chụp CHT vùng mặt – cổ CÓ tiêm",
    tuKhoa: ["mat co tiem", "vung co", "u"],
    thongSo: [
      { ten: "Trước tiêm", giaTri: "Như quy trình không tiêm" },
      { ten: "Thì tiêm", giaTri: "Gd 0,1 mmol/kg, tốc độ 2 ml/giây; T1W 3 mm 3 hướng có xóa mỡ" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Chấn thương, viêm/nhiễm trùng, tổn thương u vùng mặt – cổ."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện & đánh giá ngấm thuốc tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },

  /* ---- Lồng ngực ---- */
  {
    id: "mri-sop-long-nguc-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Lồng ngực",
    ten: "Chụp CHT lồng ngực KHÔNG tiêm",
    tuKhoa: ["long nguc", "trung that", "thanh nguc", "phoi"],
    thongSo: [
      { ten: "Kỹ thuật", giaTri: "Chụp theo nhịp thở; T2W coronal & axial, T1W axial" },
      { ten: "Lát cắt", giaTri: "6–8 mm, khoảng cách 10–20%, FOV 380–400; pha chênh từ L-R" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương thành ngực, phổi, trung thất, tim."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu lồng ngực & cơ quan trong ngực; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-long-nguc-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Lồng ngực",
    ten: "Chụp CHT lồng ngực CÓ tiêm",
    tuKhoa: ["long nguc tiem", "trung that", "u"],
    thongSo: [
      { ten: "Kỹ thuật", giaTri: "Như quy trình không tiêm (T2W coronal & axial, T1W axial, 6–8 mm, FOV 380–400)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương thành ngực, phổi, trung thất, tim."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu lồng ngực; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-thong-khi-phoi",
    phanHe: "ct-mri", modality: "MRI", nhom: "Lồng ngực",
    ten: "Chụp CHT thông khí phổi",
    tuKhoa: ["thong khi phoi", "helium", "xenon", "hen", "copd"],
    thongSo: [
      { ten: "Máy & khí", giaTri: "≥ 1.5 Tesla; khí Helium-3 hoặc Xenon-129 phân cực cao" },
      { ten: "Chuỗi nhanh", giaTri: "FLASH, HASTE, bSSFP 3–20 s mỗi thì hít vào/thở ra; mã hóa màu" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Hen phế quản, COPD, xơ phổi, viêm phế quản tắc nghẽn."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Đánh giá được mức độ thông khí phổi (tỷ lệ hít vào/thở ra)."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },

  /* ---- Tuyến vú ---- */
  {
    id: "mri-sop-vu-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Tuyến vú",
    ten: "Chụp CHT tuyến vú KHÔNG tiêm",
    tuKhoa: ["vu", "tuyen vu", "breast", "dwi"],
    thongSo: [
      { ten: "Chuỗi", giaTri: "T1 coronal trường rộng (gồm hố nách, thượng đòn); T2 xóa mỡ axial; T1 xóa mỡ axial; Diffusion b800–b1000" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Đánh giá tổn thương vú nghi ngờ trên siêu âm."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Đánh giá nhu mô, lớp mỡ, núm vú, da, cơ thành ngực, hố nách; kết luận có cần tiêm thuốc tiếp hay không."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-vu-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Tuyến vú",
    ten: "Chụp CHT tuyến vú CÓ tiêm (động học)",
    tuKhoa: ["vu tiem", "breast dce", "birads", "duong cong"],
    thongSo: [
      { ten: "Trước tiêm", giaTri: "T1 coronal rộng; T2 xóa mỡ axial; T1 xóa mỡ axial; Diffusion b800–b1000" },
      { ten: "Động học", giaTri: "T1 xóa mỡ sau tiêm Gd 0,1 mmol/kg, 2 ml/giây; chụp phút 1,2,3,4,5 (axial) + T1 muộn (sagittal)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương vú nghi ngờ, đánh giá xâm lấn, sàng lọc gen ung thư, vú giả, theo dõi đáp ứng điều trị."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Đánh giá động học ngấm thuốc (tịnh tiến/cao nguyên/thải thuốc); kết luận theo BIRADS."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-pho-vu",
    phanHe: "ct-mri", modality: "MRI", nhom: "Tuyến vú",
    ten: "Chụp CHT phổ tuyến vú (MRS)",
    tuKhoa: ["pho vu", "mrs vu", "cholin", "lipid", "lactate"],
    thongSo: [
      { ten: "Nền", giaTri: "Như CHT vú có tiêm (động học Gd 0,1 mmol/kg, 2 ml/giây)" },
      { ten: "Phổ", giaTri: "Xung phổ tại vùng khối ngấm thuốc: Cholin, Lipid, Lactate" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Khối u vú nghi ngờ, bổ sung thông tin chuyển hóa & đánh giá đáp ứng điều trị."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["So sánh nồng độ Cholin/Lipid/Lactate qua các lần chụp."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },

  /* ---- Ổ bụng - Tiểu khung ---- */
  {
    id: "mri-sop-lo-ro-hau-mon",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT lỗ rò hậu môn – trực tràng",
    tuKhoa: ["lo ro", "hau mon", "truc trang", "fistula", "ap xe"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1.5 Tesla" },
      { ten: "Chuỗi", giaTri: "T1W/T2W FSE ngang–chếch hoặc T2 3D + STIR; (tiêm) T1 xóa mỡ Gd 0,1 mmol/kg, 2 ml/giây" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tìm & đánh giá đường rò nguyên phát/thứ phát, áp xe; liên quan với cơ thắt hậu môn."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ thành ống hậu môn, đường rò, thâm nhiễm viêm, ổ áp xe."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-o-bung-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT ổ bụng KHÔNG tiêm (trừ gan)",
    tuKhoa: ["o bung", "tuy", "lach", "than", "thuong than", "mrcp", "dwi"],
    thongSo: [
      { ten: "Chuỗi", giaTri: "T1W & T2W nhiều mặt phẳng, lát ≤ 1 cm; in/out-phase (u thượng thận/thận)" },
      { ten: "Chuyên biệt", giaTri: "MRCP (T2W) đường mật–tụy; DWI SS-EPI b=0 và b=500–1000; MR urography" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tụy, lách, thận–niệu quản–sau phúc mạc, tuyến thượng thận, đường mật–túi mật, ống tiêu hóa–phúc mạc; thay thế CT ở thai phụ/trẻ nhỏ/chống chỉ định i-ốt."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Đủ thông tin giải phẫu ổ bụng; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-o-bung-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT ổ bụng CÓ tiêm",
    tuKhoa: ["o bung tiem", "dong hoc", "gadolinium"],
    thongSo: [
      { ten: "Nền", giaTri: "Như ổ bụng không tiêm (T1/T2, MRCP, DWI)" },
      { ten: "Động học", giaTri: "Gd chelate TM: trước tiêm – ĐM – TM – cân bằng; T1 sau tiêm có xóa mỡ (không dùng STIR)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Như ổ bụng không tiêm, khi cần phát hiện/đặc trưng hóa u, bất thường mạch, tiến triển viêm."] },
      { tieuDe: "⚠️ Chống chỉ định tiêm Gd", items: ["Không có đường TM; dị ứng Gd chưa dự phòng; có thai (tương đối); GFR < 30 ml/phút hoặc suy thận cấp nặng; xơ hóa hệ thống do thận."] },
      { tieuDe: "Tiêu chuẩn", items: ["Đủ giải phẫu; phát hiện & đánh giá ngấm thuốc tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-gan-dac-hieu",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT gan với thuốc đối quang từ đặc hiệu mô",
    tuKhoa: ["gan dac hieu", "primovist", "gadoxetat", "hcc", "di can"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "≥ 1 Tesla; Gadoxetat sodium (Gd-EOB-DTPA) 0,05 mmol/kg, 2 ml/giây + đuổi 20 ml NaCl" },
      { ten: "Động học", giaTri: "T1 EG xóa mỡ ở giây 15; 80; phút 3 và phút 20; kèm chuỗi đường mật (MR cholangiography)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương khu trú ở gan: phân biệt adenoma/u máu/FNH/HCC với di căn."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Đủ giải phẫu gan–đường mật; phát hiện & đánh giá ngấm thuốc, kể cả thì gan mật muộn."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-chau-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT vùng chậu KHÔNG tiêm",
    tuKhoa: ["vung chau", "phu khoa", "co tu cung", "lac noi mac", "spair"],
    thongSo: [
      { ten: "Máy", giaTri: "1,5 Tesla" },
      { ten: "Chuỗi", giaTri: "T2 coronal xóa mỡ (SPAIR TI 80–120 ms) 6 mm; T1 axial xóa mỡ; T2/STIR coronal 4–6 mm; T2 sagittal 5 mm; FOV < 200 mm, ma trận 512(256)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U phụ khoa (cổ tử cung, tử cung, buồng trứng), lạc nội mạc, u cơ trơn tử cung, dị dạng bẩm sinh, u trực tràng/bàng quang/tiền liệt, biến chứng sau mổ, đau bụng thai phụ."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu tiểu khung trên 3 mặt phẳng; bộc lộ tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-chau-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT vùng chậu CÓ tiêm",
    tuKhoa: ["vung chau tiem", "phu khoa", "cap mau"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "≥ 1 Tesla; Gd 0,1 mmol/kg, 2 ml/giây, chụp 3 thì" },
      { ten: "Chuỗi", giaTri: "Trước tiêm như chậu không tiêm; sau tiêm T1 axial & coronal có xóa mỡ" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Như chậu không tiêm, khi cần phân biệt tổ chức & đánh giá cấp máu tổn thương."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu khung chậu; phát hiện tổn thương & mức ngấm thuốc."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-tien-liet-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT tuyến tiền liệt CÓ tiêm",
    tuKhoa: ["tien liet", "prostate", "ung thu tuyen tien liet"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "1,5 Tesla; Gd 0,1 mmol/kg, 2 ml/giây" },
      { ten: "Chuỗi", giaTri: "T2 axial/coronal 3–4 mm, T1 axial 2–3 mm; sau tiêm T1 axial; có thể dùng cuộn thu nội trực tràng, FOV nhỏ" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Nghi ung thư tuyến tiền liệt; theo dõi sau điều trị."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ toàn bộ tuyến tiền liệt & lân cận (túi tinh, trực tràng) 3 hướng; đánh giá ngấm thuốc."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-pho-tien-liet",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT phổ tuyến tiền liệt (MRS)",
    tuKhoa: ["pho tien liet", "mrs", "cholin", "citrate"],
    thongSo: [
      { ten: "Nền", giaTri: "Như tiền liệt có tiêm (Gd 0,1 mmol/kg, 2 ml/giây)" },
      { ten: "Phổ", giaTri: "Đơn/đa thể tích; Cholin, Lipid, Lactat (phân biệt phì đại lành/ung thư/viêm)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Nghi ung thư tiền liệt tuyến cần phân biệt qua chất chuyển hóa."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Xác định nồng độ & tỷ lệ các chất chuyển hóa."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-tang-tren-mach-tang",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT tầng trên ổ bụng có khảo sát mạch tạng",
    tuKhoa: ["tang tren o bung", "mach tang", "vibe", "trufisp", "dong hoc"],
    thongSo: [
      { ten: "Trước tiêm", giaTri: "TruFISP; T2 HASTE ±FS; T1 in/out-phase; T2 TSE 3D trigger 1,5–1,75 mm; T1 VIBE FS" },
      { ten: "Sau tiêm", giaTri: "Gd 0,2 ml/kg; VIBE FS ở 30/60/90/120/180 s; muộn 5/10/15 phút" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Bệnh lý khu trú/lan tỏa tạng tầng trên ổ bụng; phân biệt u/viêm, lành/ác."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (nhịn đói 6–8 giờ nếu chụp đường mật)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; đánh giá tưới máu & tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-biu-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT bìu, dương vật KHÔNG tiêm",
    tuKhoa: ["biu", "duong vat", "scrotum", "tinh hoan"],
    thongSo: [
      { ten: "Máy", giaTri: "1,5 Tesla" },
      { ten: "Chuỗi", giaTri: "HASTE coronal; T2 TSE sagittal; T2 TSE FS coronal; T2 axial; T1 & T1 FS axial (4 mm)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương bìu, dương vật chưa rõ trên siêu âm."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu vùng bẹn, bìu; phát hiện tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-biu-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT bìu, dương vật CÓ tiêm",
    tuKhoa: ["biu tiem", "duong vat"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "1,5 Tesla; Gd 0,2 ml/kg (kim 18G, bơm điện 2 nòng)" },
      { ten: "Sau tiêm", giaTri: "T1 xóa mỡ theo 3 hướng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Khảo sát hình thái + tưới máu tổn thương bìu/dương vật."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương & đặc điểm ngấm thuốc."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-san-chau-tong-phan",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT động học sàn chậu, tống phân",
    tuKhoa: ["san chau", "tong phan", "sa tang", "cine", "valsalva"],
    thongSo: [
      { ten: "Máy", giaTri: "1,5 Tesla" },
      { ten: "Kỹ thuật", giaTri: "Bơm gel 200–500 ml vào trực tràng; Cine TruFISP sagittal ghi thót hậu môn (~15 s) & rặn tống gel (~45–60 s); nghiệm pháp Valsalva" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Sa tạng chậu (sa sinh dục, tiểu són); tắc nghẽn đường thoát phân không do u."] },
      { tieuDe: "Chuẩn bị", items: ["Làm sạch trực tràng, tập thót hậu môn + Valsalva, tiểu sạch trước 15–30 phút."] },
      { tieuDe: "Tiêu chuẩn", items: ["Đánh giá động học sàn chậu & động học tống phân."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-ruot-non",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT ruột non (MR enterography)",
    tuKhoa: ["ruot non", "enterography", "manitol", "crohn", "viem ruot"],
    thongSo: [
      { ten: "Chuẩn bị", giaTri: "Nhịn ăn ≥ 4 giờ; uống 1000 ml manitol 2,5% trước 1 giờ" },
      { ten: "Chuỗi", giaTri: "T2 TSE FS/HASTE 6–8 mm; T1 GRE (FLASH); động học sau tiêm Gd 0,2 ml/kg ở 20/55/88 s; chống co bóp Hyoscine 20 mg" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Viêm, loét, chảy máu, u, áp xe ruột non."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ quai ruột non; phát hiện tổn thương & ngấm thuốc."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-tuoi-mau-tang",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT tưới máu tạng",
    tuKhoa: ["tuoi mau tang", "perfusion", "gan", "than", "tuy"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "≥ 1 Tesla; Perfusion T1 GRE, thuốc 3 ml/s + đuổi 20–30 ml NaCl 3–5 ml/s" },
      { ten: "Chuỗi", giaTri: "T2W, T1 in/out-phase, Diffusion/ADC; T1 3D xóa mỡ toàn bụng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Bệnh lý gan, đường mật, mạch máu (huyết khối/hẹp tắc), thận, tụy, lách."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Thông số tính", items: ["TTP, MTT, BV, rBV, apMTT."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-noi-soi-ao-dai-trang",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT nội soi ảo khung đại tràng",
    tuKhoa: ["noi soi ao", "dai trang", "colonography", "vibe"],
    thongSo: [
      { ten: "Chuẩn bị", giaTri: "Làm sạch ruột như nội soi; nằm sấp; Scopolamine 20 mg TM; bơm DOTAREM 20 ml/2 L nước qua hậu môn" },
      { ten: "Chuỗi", giaTri: "TruFISP; VIBE FS 2 mm toàn khung đại tràng; sau tiêm Gd 0,1 ml/kg, 2 ml/giây; dựng MIP/MPR/nội soi ảo" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Khối choán chỗ trong lòng đại tràng (u, u chèn ép)."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (+ hội chứng sợ khoang kín)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Dựng hình khung đại tràng; phát hiện tổn thương & ngấm thuốc."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-banh-nhau",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT đánh giá bánh nhau",
    tuKhoa: ["banh nhau", "rau cai rang luoc", "placenta", "haste"],
    thongSo: [
      { ten: "Máy", giaTri: "1,5 Tesla (không tiêm — chỉ an thần nếu cần)" },
      { ten: "Chuỗi", giaTri: "HASTE & HASTE FS, T1 in/out-phase (nín thở); cắt vuông góc bánh nhau 4 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Nghi bệnh lý bánh rau phát hiện trên siêu âm (rau cài răng lược…)."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ bánh rau & liên quan với cơ tử cung và thai."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-thai-nhi",
    phanHe: "ct-mri", modality: "MRI", nhom: "Ổ bụng - Tiểu khung",
    ten: "Chụp CHT thai nhi",
    tuKhoa: ["thai nhi", "fetal mri", "di tat thai", "haste"],
    thongSo: [
      { ten: "Điều kiện", giaTri: "Tuổi thai > 18 tuần (tốt nhất từ tuần 28); 1,5 Tesla; không tiêm" },
      { ten: "Chuỗi", giaTri: "HASTE 3 hướng (não & ngực–bụng), lát 4 mm, TR 1100/2600–4500 ms; Diffusion b0/b1000 + ADC; T1W fl2D" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Bất thường hệ TKTW hoặc cơ quan khác đã phát hiện trên siêu âm thường quy."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu thai; phát hiện dị tật."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },

  /* ---- Cột sống ---- */
  {
    id: "mri-sop-cs-co-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "Chụp CHT cột sống cổ KHÔNG tiêm",
    tuKhoa: ["cot song co", "tuy co", "thoat vi", "stir"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 0,2 Tesla" },
      { ten: "Chuỗi", giaTri: "T1W & T2W sagittal, T2W axial qua vị trí cần thiết, STIR sagittal (nếu cần)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương thân đốt, đĩa đệm, tủy sống, phần mềm quanh cột sống cổ."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu cột sống cổ; hiển thị tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-cs-co-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "Chụp CHT cột sống cổ CÓ tiêm",
    tuKhoa: ["cot song co tiem", "u tuy", "viem"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "1,5 Tesla; Gd 0,1 mmol/kg (kim 18G)" },
      { ten: "Sau tiêm", giaTri: "T1W nhiều hướng; T1 fatsat cho tổn thương thân đốt/đĩa đệm/phần mềm; u trong ống sống không cần fatsat" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U, viêm cột sống cổ cần tiêm thuốc bộc lộ rõ."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; đánh giá mức độ bắt thuốc của tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-cs-nguc-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "Chụp CHT cột sống ngực KHÔNG tiêm",
    tuKhoa: ["cot song nguc", "tuy nguc", "stir"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 0,2 Tesla" },
      { ten: "Chuỗi", giaTri: "T1W & T2W sagittal, T2W axial, STIR sagittal (nếu cần)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương thân đốt, đĩa đệm, tủy sống, phần mềm quanh cột sống ngực."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu cột sống ngực."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-cs-nguc-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "Chụp CHT cột sống ngực CÓ tiêm",
    tuKhoa: ["cot song nguc tiem", "u", "viem"],
    thongSo: [
      { ten: "Thuốc", giaTri: "Gd TM 0,1–0,2 ml/kg; XN Creatinin nếu nghi suy thận" },
      { ten: "Sau tiêm", giaTri: "T1W nhiều hướng; T1 fatsat cho thân đốt/đĩa đệm/phần mềm; u trong ống sống không fatsat" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U, viêm cột sống ngực cần tiêm thuốc (BS chuyên khoa quyết định)."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; đánh giá mức độ bắt thuốc tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-cs-tl-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "Chụp CHT cột sống thắt lưng KHÔNG tiêm",
    tuKhoa: ["cot song that lung", "thoat vi", "than kinh toa", "cung chau"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 0,2 Tesla" },
      { ten: "Chuỗi", giaTri: "T1W & T2W sagittal, T2W axial, STIR sagittal; STIR coronal/PD fatsat qua khớp cùng chậu (nếu cần)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương thân đốt, đĩa đệm, tủy, phần mềm quanh cột sống thắt lưng."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu cột sống thắt lưng."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-cs-tl-cung-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "Chụp CHT cột sống thắt lưng cùng CÓ tiêm",
    tuKhoa: ["cot song that lung cung", "u", "viem"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "1,5 Tesla; Gd 0,1 mmol/kg" },
      { ten: "Sau tiêm", giaTri: "T1W 3 hướng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U, viêm cột sống thắt lưng cùng cần tiêm thuốc."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; đánh giá mức ngấm thuốc tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },

  /* ---- Cơ xương khớp ---- */
  {
    id: "mri-sop-khop-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "Chụp CHT khớp KHÔNG tiêm",
    tuKhoa: ["khop", "sun", "day chang", "gan co", "bao hoat dich"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla" },
      { ten: "Chuỗi", giaTri: "Theo hướng cắt phù hợp vị trí khớp & loại tổn thương (BS CĐHA chỉ định)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương xương, sụn, bao hoạt dịch, dây chằng, gân cơ, phần mềm quanh khớp."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu khớp cần chụp."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-khop-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "Chụp CHT khớp CÓ tiêm (tĩnh mạch)",
    tuKhoa: ["khop tiem", "u", "viem"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "1,5 Tesla; Gd TM 0,1 mmol/kg" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương khớp cần tiêm thuốc TM (BS chuyên khoa quyết định)."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu khớp; đánh giá mức ngấm thuốc tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-khop-bom-noi-khop",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "Chụp CHT khớp CÓ bơm thuốc nội khớp (MR arthrography)",
    tuKhoa: ["bom noi khop", "arthrography", "sun vien", "chan thuong"],
    thongSo: [
      { ten: "Máy & dụng cụ", giaTri: "1,5 Tesla; X-quang tăng sáng, kim chọc khớp 21G" },
      { ten: "Bơm nội khớp", giaTri: "Trộn Gd + thuốc cản quang + NaCl theo tỉ lệ/thể tích từng khớp, bơm dưới màn tăng sáng; sau đó T1W 3 hướng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương sau chấn thương khó chẩn đoán bằng phương pháp thường quy."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Kim bơm nằm trong ổ khớp; rõ giải phẫu khớp."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-xuong-tuy-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "Chụp CHT xương & tủy xương KHÔNG tiêm",
    tuKhoa: ["xuong", "tuy xuong", "u xuong", "bone marrow"],
    thongSo: [
      { ten: "Máy", giaTri: "1,5 Tesla" },
      { ten: "Chuỗi", giaTri: "Theo hướng cắt phù hợp vị trí & loại tổn thương (BS CĐHA chỉ định)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Bệnh lý xương & tủy xương; phân giai đoạn u xương, đánh giá hiệu quả điều trị."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu xương & tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-xuong-tuy-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "Chụp CHT xương & tủy xương CÓ tiêm",
    tuKhoa: ["xuong tiem", "u xuong", "viem"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "1,5 Tesla; Gd TM 0,1 mmol/kg" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U, viêm xương & tủy xương cần tiêm thuốc."] },
      { tieuDe: "Chống chỉ định", items: ["Chung."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu xương; đánh giá mức ngấm thuốc tổn thương."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-phan-mem-chi-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "Chụp CHT phần mềm chi KHÔNG tiêm",
    tuKhoa: ["phan mem chi", "u phan mem", "co gan", "tirm"],
    thongSo: [
      { ten: "Máy", giaTri: "1,5 Tesla" },
      { ten: "Chuỗi", giaTri: "T1W, T2W, PD, T2W xóa mỡ (TIRM fat-sat), Diffusion; mặt phẳng theo chỉ định" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U phần mềm chi, chấn thương cơ/gân, loạn dưỡng/thoái hóa cơ, viêm/áp xe."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (thiết bị điện tử; kẹp kim loại < 6 tháng)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu chi & tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-phan-mem-chi-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "Chụp CHT phần mềm chi CÓ tiêm",
    tuKhoa: ["phan mem chi tiem", "u co", "di dang mach"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "1,5 Tesla; Gd TM 0,1 mmol/kg; T1W xóa mỡ sau tiêm (đánh giá động học)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U cơ/phần mềm, dị dạng mạch máu, viêm/áp xe."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (thiết bị điện tử; kẹp kim loại < 6 tháng)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ phần mềm chi; đánh giá mức độ & tính chất bắt thuốc."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-day-tk-ngoai-bien",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cơ xương khớp",
    ten: "Chụp CHT dây thần kinh ngoại biên",
    tuKhoa: ["day than kinh ngoai bien", "dam roi that lung cung", "than kinh dui", "neurography"],
    thongSo: [
      { ten: "Máy & cuộn", giaTri: "≥ 1 Tesla; cuộn ngực/khung chậu (phased-array)" },
      { ten: "Chuỗi", giaTri: "T1W, IR, T2W xóa mỡ coronal (chụp 2 bên so sánh); lát 4–7 mm, FOV 18–24 cm, từ L3 đến củ mu" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tổn thương đám rối thắt lưng–cùng/thần kinh đùi: sau chấn thương, đè ép, u/u bao dây TK, sẹo xơ sau xạ, phì đại dây TK."] },
      { tieuDe: "Chống chỉ định", items: ["Không tuyệt đối; tương đối: máy tạo nhịp (tùy loại), kim loại từ tính, không nằm yên lâu (30 phút–1 giờ)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Thần kinh bình thường hình oval, đồng tín hiệu cơ trên T1W; tổn thương: tăng kích thước, tăng tín hiệu bất thường trên T2W."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },

  /* ---- Mạch máu ---- */
  {
    id: "mri-sop-dm-chu-nguc",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT động mạch chủ ngực",
    tuKhoa: ["dm chu nguc", "phinh", "boc tach", "hep eo"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "≥ 1 Tesla; Gd 0,1 mmol/kg; bolus 2 ml/s cho 20 ml + đẩy 20–30 ml NaCl" },
      { ten: "Chuỗi", giaTri: "T1W 3D ngay sau tiêm; tái tạo MPR & VRT" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Phình, bóc tách, hẹp, tắc, viêm ĐM chủ ngực; hẹp eo ĐM chủ bẩm sinh."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ; suy thận ≥ độ 3 (nguy cơ xơ hóa hệ thống)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu ĐM chủ ngực."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-dm-vanh",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT động mạch vành",
    tuKhoa: ["dm vanh", "coronary mri", "kawasaki", "whole heart"],
    thongSo: [
      { ten: "Máy & ECG", giaTri: "≥ 1.5 Tesla; lắp điện cực ECG" },
      { ten: "Chuỗi", giaTri: "Hình thái & chức năng (2 buồng, 4 buồng, trục ngắn, đường ra thất); mạch vành Whole-heart 3D thu theo nhịp thở; Gd 0,1 mmol/kg" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Bất thường giải phẫu mạch vành (xuất phát, số lượng, đường đi), phình trong Kawasaki, tim bẩm sinh trước mổ."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (thiết bị điện tử; kẹp kim loại < 6 tháng)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu động mạch vành."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-tim",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT tim",
    tuKhoa: ["mri tim", "cmr", "cine", "song con co tim", "lge", "benh co tim"],
    thongSo: [
      { ten: "Máy", giaTri: "1,5 Tesla; ECG gating" },
      { ten: "Chuỗi", giaTri: "Hình thái & chức năng (2/4 buồng, trục ngắn, đường ra thất); tưới máu thì Rest/Stress; thì muộn sau 10 phút (sống còn cơ tim)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Tim bẩm sinh, bệnh mạch vành (chức năng thất, sống còn cơ tim), bệnh cơ tim, u tim, màng ngoài tim, van tim, chuyển hóa cơ tim."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu tim & ĐM vành; đánh giá được chức năng tim."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-dm-chu-chau",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT động mạch chủ – chậu",
    tuKhoa: ["dm chu chau", "phinh", "boc tach", "hep tac"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "≥ 1 Tesla; Test bolus 2 ml/s cho 20 ml + đẩy 20–30 ml NaCl" },
      { ten: "Chuỗi", giaTri: "T1W 3D; tái tạo MPR & VRT" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Phình, bóc tách, hẹp, tắc ĐM chủ – chậu."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ; suy thận ≥ độ 3 (tương đối)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-dm-chi-tren-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT động mạch chi trên KHÔNG tiêm",
    tuKhoa: ["dm chi tren", "native", "trace", "hep tac"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla" },
      { ten: "Chuỗi", giaTri: "NATIVE (Siemens) / TRACE (Philips); MPR & VRT" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Hẹp, tắc, phình, bóc tách ĐM chi trên."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-dm-chi-tren-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT động mạch chi trên CÓ tiêm",
    tuKhoa: ["dm chi tren tiem", "hep tac", "phinh"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "1,5 Tesla; Test bolus 2 ml/s cho 20 ml + đẩy 20–30 ml NaCl; T1W 3D, MPR & VRT" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Hẹp, tắc, phình, bóc tách ĐM chi trên."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ; suy thận ≥ độ 3 (tương đối)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-dm-chi-duoi-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT động mạch chi dưới KHÔNG tiêm",
    tuKhoa: ["dm chi duoi", "native", "trace", "hep tac"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla" },
      { ten: "Chuỗi", giaTri: "NATIVE (Siemens) / TRACE (Philips); MPR & VRT" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Hẹp, tắc, phình, bóc tách ĐM chi dưới."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-dm-chi-duoi-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT động mạch chi dưới CÓ tiêm",
    tuKhoa: ["dm chi duoi tiem", "run off", "hep tac"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "≥ 1 Tesla; Test bolus 2 ml/s cho 20 ml + đẩy 20–30 ml NaCl; T1W 3D, MPR & VRT" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Hẹp, tắc, phình, bóc tách ĐM chi dưới."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ; suy thận ≥ độ 3 (tương đối)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-dm-toan-than-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT động mạch toàn thân KHÔNG tiêm",
    tuKhoa: ["dm toan than", "takayasu", "hep eo", "ecg"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla; mắc ECG hoặc bộ thu tín hiệu mạch ngoại biên" },
      { ten: "Chuỗi", giaTri: "T1W thu theo ĐTĐ/mạch ngoại biên; MPR & VRT (chỉ an thần, không tiêm)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Phình, bóc tách, hẹp, tắc ĐM; viêm ĐM (Takayasu); hẹp eo ĐM chủ bẩm sinh."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ, hốc mắt."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-dm-toan-than-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT động mạch toàn thân CÓ tiêm",
    tuKhoa: ["dm toan than tiem", "takayasu"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "≥ 1.5 Tesla; Test bolus 2 ml/s cho 20 ml + đẩy 20–30 ml NaCl; T1W 3D, MPR & VRT" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Phình, bóc tách, hẹp, tắc ĐM; viêm ĐM (Takayasu); hẹp eo ĐM chủ."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ; suy thận ≥ độ 3 (tương đối)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu mạch máu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-tm-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT tĩnh mạch KHÔNG tiêm",
    tuKhoa: ["tinh mach", "huyet khoi", "mrv", "thong dong tinh mach"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1.5 Tesla; bộ thu tín hiệu mạch ngoại biên" },
      { ten: "Chuỗi", giaTri: "Định vị 3 bình diện; chuỗi TM theo bộ thu mạch ngoại biên; MPR & VRT" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Huyết khối tắc TM, thông động–tĩnh mạch, dị dạng mạch bẩm sinh."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ, hốc mắt."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-tm-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT tĩnh mạch CÓ tiêm",
    tuKhoa: ["tinh mach tiem", "huyet khoi", "mrv"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "≥ 1 Tesla; kim 18G; chuỗi TM có tiêm Gd; MPR & VRT" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Huyết khối tắc TM, thông động–tĩnh mạch, dị dạng mạch bẩm sinh."] },
      { tieuDe: "Chống chỉ định", items: ["Máy tạo nhịp; sợ khoang kín; dị vật kim loại trong sọ, hốc mắt; suy thận ≥ độ 3 (tương đối)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-bach-mach-khong-dac-hieu",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT bạch mạch CÓ tiêm thuốc không đặc hiệu",
    tuKhoa: ["bach mach", "lymphatic", "phu bach mach", "dynamic"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla" },
      { ten: "Tiêm", giaTri: "Trong da gian ngón mu bàn chân 4 điểm × 0,7–0,8 ml (Gd 15 ml + Lidocain 1% 1,5 ml); Dynamic 3D T1W GRE ở phút 5/10/15/20/25/30, lát 2 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Nghi tổn thương hệ bạch mạch."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (thiết bị điện tử; kẹp kim loại < 6 tháng)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Theo dõi dẫn lưu bạch mạch → hạch kheo/bẹn → đám rối chậu → TM dưới đòn; hạch bẹn bắt Gd sau 30–40 phút."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-bach-mach-dac-hieu",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mạch máu",
    ten: "Chụp CHT bạch mạch CÓ tiêm thuốc đặc hiệu (USPIO)",
    tuKhoa: ["bach mach dac hieu", "uspio", "hach di can"],
    thongSo: [
      { ten: "Máy & thuốc", giaTri: "≥ 1 Tesla; USPIO tĩnh mạch 2,6 mg/kg; chụp trước & sau tiêm 24 giờ" },
      { ten: "Chuỗi", giaTri: "T1W GRE, T2W FSE, T2W GRE, 3D T1W GRE (lát 3 mm, chủ yếu axial); bổ sung oblique theo vùng (nách/chậu)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Nghi tổn thương hệ bạch mạch (đánh giá hạch di căn)."] },
      { tieuDe: "Chống chỉ định", items: ["Chung (thiết bị điện tử; kẹp kim loại < 6 tháng)."] },
      { tieuDe: "Tiêu chuẩn", items: ["Hạch di căn không hấp thu USPIO → không mất tín hiệu T2W; so sánh trước/sau tiêm."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },

  /* ---- Toàn thân ---- */
  {
    id: "mri-sop-toan-than-khong-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Toàn thân",
    ten: "Chụp CHT toàn thân KHÔNG tiêm",
    tuKhoa: ["toan than", "whole body", "di can", "tam soat"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1 Tesla; cuộn thu bao phủ toàn thân" },
      { ten: "Thời gian", giaTri: "30–60 phút; chụp theo chuỗi xung BS đưa ra (chỉ an thần, không tiêm)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["U nguyên phát đánh giá lan rộng/di căn, phân giai đoạn; sau điều trị; tổn thương thứ phát chưa rõ nguồn; bệnh lan tỏa; tầm soát ác tính."] },
      { tieuDe: "Chống chỉ định", items: ["Chung; không chịu được thăm khám kéo dài (buồng kín, nằm lâu); người bệnh nặng hồi sức tích cực."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  },
  {
    id: "mri-sop-toan-than-tiem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Toàn thân",
    ten: "Chụp CHT toàn thân CÓ tiêm",
    tuKhoa: ["toan than tiem", "di can", "tam soat"],
    thongSo: [
      { ten: "Máy", giaTri: "≥ 1.5 Tesla; cuộn thu bao phủ toàn thân" },
      { ten: "Thời gian", giaTri: "30–60 phút; chuỗi trước & sau tiêm + bổ sung" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: ["Như toàn thân không tiêm (u nguyên phát, di căn xa, sau điều trị, tầm soát ác tính)."] },
      { tieuDe: "Chống chỉ định", items: ["Chung; thăm khám kéo dài; dị ứng Gd; suy gan; suy thận > độ II; người bệnh nặng hồi sức."] },
      { tieuDe: "Tiêu chuẩn", items: ["Rõ giải phẫu; phát hiện tổn thương nếu có."] }
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  }

];
