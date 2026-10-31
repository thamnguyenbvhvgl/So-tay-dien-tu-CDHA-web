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

  /* ===================================================================== */
  /* ==== CHƯƠNG III: KỸ THUẬT CHỤP CỘT SỐNG (nguồn: Kỹ thuật chụp X-quang 2) */
  /* ===================================================================== */

  {
    id: "xq-cotsong-co-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cổ tư thế trước sau (C1–C7)",
    tuKhoa: ["cot song co", "cs co thang", "cervical ap", "dot song co", "truoc sau"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng trước – sau (AP)" },
      { ten: "kV / mAs", giaTri: "62 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý liên quan đến cột sống cổ đoạn giữa và dưới (từ C3 đến C7).",
        "Bộc lộ gãy mỏm gai các đốt sống cổ dưới, gãy lún xẹp đốt sống và thoát vị nhân tủy đĩa đệm."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế nằm ngửa hoặc đứng, hai tay để xuôi theo thân mình."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Chỉnh đầu bệnh nhân sao cho đường thẳng nối từ bờ dưới của các răng cửa trên đến nền sọ (đỉnh mỏm chũm) vuông góc với bàn và/hoặc tấm nhận ảnh.",
        "Đường thẳng nối từ đỉnh xương hàm dưới đến nền sọ phải song song với tia trung tâm đã được tạo góc.",
        "Đảm bảo đầu hoặc lồng ngực không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chếch lên phía đầu một góc từ 15 độ đến 20 độ.",
        "Chiếu tia trung tâm đi vào ngang mức bờ dưới của sụn giáp để đi qua đốt sống C4.",
        "Chỉnh tâm tấm nhận ảnh vào tia trung tâm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở. Bệnh nhân không được nuốt trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Các thân đốt sống từ C3 đến T2; nhìn thấy rõ khoảng cách giữa các cuống cung và các khe đĩa đệm."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay: thể hiện qua các mỏm gai và các khớp ức đòn (nếu thấy được) có khoảng cách bằng nhau tính từ các bờ ngoài của cột sống.",
        "Xương hàm dưới và nền sọ phải chồng ảnh lên hai đốt sống cổ đầu tiên.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-co-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-co-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-co-thang-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-co-divat",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cổ tư thế nghiêng khảo sát dị vật",
    tuKhoa: ["cot song co nghieng", "di vat", "duong tho", "thanh quan", "khi quan", "cervical soft tissue lateral"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng (đứng/ngồi)" },
      { ten: "kV / mAs", giaTri: "56 kVp · 8 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khảo sát tìm dị vật cản quang của thanh quản và khí quản chứa khí, bao gồm cả vùng tuyến giáp, tuyến ức và thực quản đoạn trên."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân nên ở tư thế đứng nếu có thể, ngồi hoặc đứng nghiêng (có thể chụp nghiêng phải hoặc nghiêng trái và có thể chụp nằm trên bàn nếu cần thiết)."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tư thế bệnh nhân sao cho đường thở trên nằm ngay chính giữa tia trung tâm và tấm nhận ảnh (thanh quản và khí quản nằm phía trước các đốt sống cổ và ngực).",
        "Xoay hai vai ra phía sau, hai cánh tay buông thõng và hai bàn tay đan vào nhau để sau lưng.",
        "Hơi nâng cằm lên và yêu cầu bệnh nhân nhìn thẳng về phía trước.",
        "Điều chỉnh chiều cao của tấm nhận ảnh sao cho bờ trên của nó ngang mức lỗ tai ngoài."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc vào giữa tấm nhận ảnh, ngang mức đốt sống cổ C6 hoặc C7, tức là điểm giữa của lồi thanh quản sụn giáp.",
        "Tia trung tâm nằm ở điểm giữa của mặt phẳng đứng dọc giữa và bờ ngoài lồng ngực."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Giới hạn chùm tia khu trú vào vùng mô mềm của cổ."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Thực hiện phát tia trong khi bệnh nhân hít vào sâu và chậm để đảm bảo không khí lấp đầy khí quản và đường thở trên."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Thanh quản và khí quản phải chứa đầy khí và được bộc lộ rõ ràng."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Việc định tâm cho vùng cổ (thanh quản và khí quản đoạn gần) phải bao gồm lỗ tai ngoài ở bờ trên hình ảnh và đốt sống T2 hoặc T3 ở bờ dưới. Nếu khảo sát chính ở thanh quản đoạn xa và khí quản, cần định tâm thấp hơn để bao trùm khu vực từ C3 đến T4 hoặc T5 trên hình ảnh.",
        "Bóng của hai vai chủ yếu phải nằm ở phía sau và không được chồng ảnh lên vùng khí quản."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-co-divat-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-co-divat-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-co-divat-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-dotsong-co-c1c2",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang đốt sống cổ thứ 1 và thứ 2 tư thế trước sau “há miệng”",
    tuKhoa: ["c1 c2", "dot song co cao", "ha mieng", "open mouth", "odontoid", "mom nha"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau, há miệng (C1–C2)" },
      { ten: "kV / mAs", giaTri: "70 kVp · 15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý (đặc biệt là gãy xương) liên quan đến C1, C2 và các cấu trúc mô mềm lân cận.",
        "Bộc lộ các gãy xương mỏm nha và gãy Jefferson."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế nằm ngửa hoặc đứng với hai tay để xuôi theo thân mình. Đặt đầu lên mặt bàn, sử dụng các dụng cụ bất động nếu cần."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Chỉnh đầu bệnh nhân sao cho khi há miệng, đường thẳng nối từ bờ dưới của răng cửa trên đến nền sọ (đỉnh mỏm chũm) vuông góc với bàn và/hoặc tấm nhận ảnh, hoặc tạo góc cho tia trung tâm tương ứng.",
        "Đảm bảo đầu (góc hàm và đỉnh mỏm chũm cách đều tấm nhận ảnh) hoặc ngực không bị xoay.",
        "Đảm bảo miệng há rộng tối đa trong khi phát tia. Thực hiện bước này cuối cùng và thao tác nhanh chóng, vì bệnh nhân rất khó duy trì tư thế này."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Tia trung tâm đi thẳng qua giữa miệng đang há.",
        "Chỉnh tâm tấm nhận ảnh vào tia trung tâm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Mỏm nha và thân đốt sống C2, các khối bên và mỏm ngang của C1, và các khớp đội–trục được bộc lộ qua miệng đang há."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Độ gập/ngửa cổ tối ưu, thể hiện qua sự chồng ảnh của bờ dưới các răng cửa trên lên nền sọ. Cả răng và nền sọ đều không được chồng lên mỏm nha.",
        "Nếu răng chồng lên phần trên của mỏm nha, hãy chỉnh lại tư thế bằng cách ngửa cổ nhẹ hoặc tạo góc tia trung tâm hơi chếch lên đầu.",
        "Nếu nền sọ chồng lên phần trên của mỏm nha, hãy chỉnh lại tư thế bằng cách gập cổ nhẹ hoặc tạo góc tia trung tâm hơi chếch về phía chân (nền sọ và/hoặc các răng cửa trên sẽ bị dịch chuyển khoảng 2,5 cm cho mỗi 5° góc chếch về phía chân).",
        "Không xoay: thể hiện qua khoảng cách bằng nhau từ các khối bên và/hoặc mỏm ngang của C1 đến lồi cầu xương hàm dưới, và mỏm gai của C2 nằm ở chính giữa. Sự xoay có thể tạo ra hình ảnh giống bệnh lý do gây ra các khoảng trống không đều giữa các khối bên và mỏm nha.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-dotsong-co-c1c2-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-dotsong-co-c1c2-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-dotsong-co-c1c2-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-co-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cổ tư thế nghiêng",
    tuKhoa: ["cot song co nghieng", "cervical lateral", "khe khop lien dot"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng (đứng/ngồi)" },
      { ten: "kV / mAs", giaTri: "62 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý liên quan đến cột sống cổ và các cấu trúc mô mềm lân cận, bao gồm thoái hóa cột sống và thoái hóa khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế đứng nghiêng, có thể ngồi hoặc đứng, áp một vai vào tấm nhận ảnh đặt thẳng đứng."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng ngang giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Chỉnh tâm tấm nhận ảnh vào tia trung tâm, sao cho bờ trên của tấm nhận ảnh cao hơn lỗ tai ngoài khoảng 3 đến 5 cm.",
        "Hạ thấp hai vai (có thể cho bệnh nhân xách tạ trọng lượng bằng nhau ở cả hai tay).",
        "Yêu cầu bệnh nhân thả lỏng và hạ hai vai xuống, đưa ra trước càng nhiều càng tốt (thực hiện bước này cuối cùng ngay trước khi phát tia vì tư thế này khó duy trì).",
        "Nâng cằm ra trước (để tránh xương hàm dưới chồng ảnh lên các đốt sống phía trên)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Chiếu tia trung tâm theo hướng ngang vào C4 (ngang mức bờ trên sụn giáp)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở cuối thì thở ra gắng sức (để hạ vai xuống mức tối đa)."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Thân các đốt sống cổ, khe đĩa đệm, các khối trụ khớp, mỏm gai và khớp mỏm khớp."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Nhìn thấy rõ các khe khớp liên đốt sống từ C1 đến C7–T1. Nếu bờ trên của T1 không được bộc lộ, cần chụp thêm các hình ảnh bổ sung như hướng chiếu cổ – ngực nghiêng.",
        "Các cành lên của xương hàm dưới không được chồng lên C1 đến C2.",
        "Các khối trụ khớp phải và trái cùng với khớp mỏm khớp của mỗi đốt sống phải chồng khít lên nhau.",
        "Các thân đốt sống không được bị chồng ảnh bởi các khối trụ khớp và các mỏm gai khi nhìn nghiêng."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-co-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-co-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-co-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-co-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cổ tư thế chếch",
    tuKhoa: ["cot song co chech", "cervical oblique", "lo gian dot song", "rao lao rpo lpo"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch 45° (ưu tiên chếch trước RAO/LAO)" },
      { ten: "kV / mAs", giaTri: "62 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý liên quan đến cột sống cổ và các cấu trúc mô mềm lân cận, bao gồm hẹp lỗ gian đốt sống.",
        "Nên thực hiện cả hai hướng chiếu chếch phải và chếch trái để so sánh. Các tư thế chếch trước (RAO, LAO) được ưu tiên hơn do giúp giảm liều tia tới tuyến giáp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Ưu tiên tư thế đứng (ngồi hoặc đứng), nhưng có thể thực hiện ở tư thế nằm nếu tình trạng bệnh nhân bắt buộc."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Đặt hai tay bệnh nhân xuôi theo thân mình; nếu bệnh nhân nằm, hãy đặt hai tay theo cách cần thiết để giúp duy trì tư thế.",
        "Xoay thân người và đầu thành tư thế chếch 45 độ. Sử dụng thước đo độ hoặc dụng cụ đo góc khác nếu cần thiết để đảm bảo góc 45°.",
        "Nâng cằm ra trước để tránh xương hàm dưới chồng ảnh lên các đốt sống. Việc nâng cằm quá cao sẽ làm nền sọ chồng lên đốt sống C1."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Chếch trước (RAO, LAO): Hướng tia trung tâm chếch 15° về phía chân vào C4 (ngang mức bờ trên sụn giáp).",
        "Chếch sau (RPO, LPO): Hướng tia trung tâm chếch 15° lên phía đầu vào C4."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Chếch trước: Lỗ gian đốt sống và cuống cung ở bên gần tấm nhận ảnh nhất.",
        "Chếch sau: Lỗ gian đốt sống và cuống cung ở bên xa tấm nhận ảnh nhất."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Các khe đĩa đệm và các lỗ gian đốt sống cần khảo sát (từ C2 đến C7) phải mở rộng và đồng đều về kích thước cũng như hình dạng.",
        "Các cuống cung cần khảo sát phải được thể hiện ở dạng nhìn nghiêng hoàn toàn, còn ở phía đối diện, các cuống cung nhìn thẳng trực diện phải nằm thẳng hàng trên đường giữa của thân đốt sống cổ.",
        "Các cuống cung nhìn thẳng trực diện thẳng hàng ở đường giữa thân đốt sống cổ và có thể quan sát được các khớp mỏm khớp cho thấy sự xoay quá mức; các lỗ gian đốt sống và cuống cung bị che khuất cho thấy sự xoay chưa đủ.",
        "Cành lên của xương hàm dưới không được chồng ảnh lên các đốt sống cổ phía trên và nền sọ không được chồng lên đốt sống C1."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-co-chech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-co-chech-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-co-cui-ngua",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống cổ tư thế động cúi, ngửa",
    tuKhoa: ["cot song co cui ngua", "chuc nang", "flexion extension", "dong"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng, cúi tối đa & ngửa tối đa" },
      { ten: "kV / mAs", giaTri: "62 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Tuyệt đối không thực hiện các tư thế này trên bệnh nhân chấn thương cho đến khi được bác sĩ cho phép sau khi đã đánh giá hình ảnh X-quang chụp nghiêng tia ngang hoặc chụp cắt lớp vi tính cột sống cổ."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khảo sát chức năng để đánh giá biên độ vận động trước – sau của các đốt sống.",
        "Theo dõi sau phẫu thuật làm cứng khớp cột sống."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế đứng nghiêng, có thể ngồi hoặc đứng, hai tay buông thõng hai bên."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng ngang giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Đảm bảo tư thế nghiêng hoàn toàn, không xoay khung chậu, vai hoặc đầu.",
        "Thả lỏng và hạ hai vai xuống càng thấp càng tốt (có thể cho bệnh nhân xách tạ ở mỗi tay).",
        "Tư thế cúi tối đa: Yêu cầu bệnh nhân gập cằm xuống cho đến khi chạm ngực hoặc gập hết mức có thể chịu đựng (không để bệnh nhân rướn người về phía trước để đảm bảo toàn bộ cột sống cổ nằm trong vùng chụp).",
        "Tư thế ngửa tối đa: Nâng cằm và ngả đầu ra sau hết mức có thể (không để bệnh nhân ngả người về phía sau để đảm bảo toàn bộ cột sống cổ nằm trong vùng chụp)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Chiếu tia trung tâm theo hướng ngang vào C4 (ngang mức bờ trên sụn giáp)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở cuối thì thở ra gắng sức.",
        "Lưu ý: Các tư thế này gây khó chịu cho bệnh nhân; không giữ bệnh nhân ở các tư thế này lâu hơn mức cần thiết."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Phải bao gồm từ C1 đến C7 trên hình ảnh, mặc dù C7 có thể không được bộc lộ hoàn toàn ở một số bệnh nhân."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay đầu, thể hiện qua sự chồng khít của các cành lên xương hàm dưới.",
        "Tư thế cúi tối đa: Các mỏm gai phải tách rời nhau rõ rệt.",
        "Tư thế ngửa tối đa: Các mỏm gai phải nằm sát nhau."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-co-cuingua-ct.png", caption: "Chiều thế — cúi tối đa" },
      { src: "images/xq/xq-cotsong-co-cuingua-ct2.png", caption: "Chiều thế — ngửa tối đa" },
      { src: "images/xq/xq-cotsong-co-cuingua-phim.png", caption: "Phim đạt yêu cầu (cúi & ngửa)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-nguc-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống ngực tư thế trước sau",
    tuKhoa: ["cot song nguc thang", "thoracic spine ap", "dot song nguc"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (AP)" },
      { ten: "kV / mAs", giaTri: "64 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý liên quan đến cột sống ngực, chẳng hạn như gãy lún xẹp, bán trật khớp hoặc gù cột sống."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa (ưu tiên) với hai tay để xuôi theo thân mình và đầu đặt trên bàn hoặc trên một chiếc gối mỏng. Nếu bệnh nhân không thể chịu đựng được tư thế nằm ngửa, cho bệnh nhân đứng với hai tay buông xuôi và trọng lượng cơ thể phân bố đều trên hai chân."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Gập hai đầu gối và khớp háng để làm giảm độ cong sinh lý của cột sống ngực.",
        "Đảm bảo lồng ngực hoặc khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm vào T7 hoặc dưới góc ức khoảng 3–5 cm. Việc định hướng tâm tương tự như khi chụp X-quang ngực hướng chiếu trước sau."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì thở ra. Việc thở ra làm giảm thể tích khí trong lồng ngực giúp độ sáng đồng đều hơn."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Thân các đốt sống ngực, khe khớp liên đốt sống, mỏm gai và mỏm ngang, các cung sau xương sườn và các khớp sườn – đốt sống."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Cột sống từ C7 đến L1 nằm ở chính giữa tấm nhận ảnh.",
        "Không xoay, thể hiện qua các khớp ức đòn có khoảng cách bằng nhau tính từ cột sống.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-nguc-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-nguc-thang-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-nguc-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống ngực tư thế nghiêng",
    tuKhoa: ["cot song nguc nghieng", "thoracic spine lateral"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "74 kVp · 15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý liên quan đến cột sống ngực, chẳng hạn như gãy lún xẹp, bán trật khớp hoặc gù cột sống."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm nghiêng (ưu tiên), đầu gối lên gối và gập hai đầu gối. Đối với tư thế đứng, đặt hai tay duỗi thẳng ra trước, trọng lượng cơ thể phân bố đều trên hai chân."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh nửa sau của lồng ngực (nằm giữa mặt phẳng đứng ngang giữa và bờ sau của lồng ngực) thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Nâng hai cánh tay bệnh nhân tạo thành góc vuông với cơ thể, gập khuỷu tay.",
        "Kê đệm dưới eo sao cho toàn bộ cột sống gần như song song với mặt bàn. Sờ các mỏm gai để xác định độ thẳng hàng.",
        "Gập khớp háng và đầu gối, kê đệm giữa hai đầu gối.",
        "Đảm bảo hai vai hoặc khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với trục dọc của cột sống ngực.",
        "Hướng tia trung tâm vào T7 hoặc dưới mỏm gai đốt sống cổ 7 khoảng 18 đến 21 cm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở hai cạnh dọc theo cấu trúc giải phẫu (khu trú cả bốn cạnh nếu có thể)."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Sử dụng kỹ thuật thở hoặc nín thở ở cuối thì thở ra gắng sức. Kỹ thuật thở rất hữu ích để làm mờ các vân phổi và bờ xương sườn không mong muốn chồng lên các đốt sống ngực nếu bệnh nhân có thể hợp tác."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Thân các đốt sống ngực, các khe khớp liên đốt sống và các lỗ gian đốt sống. Từ T1 đến T3 sẽ không được bộc lộ rõ. Thực hiện chụp hướng chiếu cổ – ngực nghiêng (tư thế người bơi) nếu cần khảo sát đặc biệt các đốt sống ngực trên."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Các khe đĩa đệm phải mở rộng.",
        "Không xoay, thể hiện qua sự chồng khít của các bờ sau thân đốt sống. Do sự gia tăng khoảng cách từ vật thể đến phim ở một bên, các cung sau xương sườn sẽ không chồng khít hoàn toàn, đặc biệt ở những bệnh nhân có lồng ngực rộng. Không xoay khi khoảng cách giữa các cung sau xương sườn nhỏ hơn 1,25 cm."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-nguc-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-nguc-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-nguc-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống ngực tư thế chếch",
    tuKhoa: ["cot song nguc chech", "thoracic spine oblique", "khop mom khop", "lien mau"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch 70° so mặt bàn (ưu tiên chếch trước)" },
      { ten: "kV / mAs", giaTri: "74 kVp · 15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý liên quan đến các khớp mỏm khớp (khớp liên mấu) của cột sống ngực.",
        "Cần thực hiện cả hai hướng chiếu chếch phải và chếch trái để so sánh.",
        "Hình ảnh có thể chụp ở tư thế chếch sau hoặc chếch trước. Các tư thế chếch trước được khuyến cáo vì giúp giảm đáng kể liều lượng bức xạ tới tuyến vú."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Khởi đầu đặt bệnh nhân ở tư thế nằm nghiêng (được ưu tiên hơn), đầu kê trên gối và hai đầu gối gập lại. Đối với tư thế đứng, đảm bảo trọng lượng cơ thể phân bố đều trên hai chân."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Xoay cơ thể 20° so với tư thế nghiêng hoàn toàn để tạo thành một góc chếch 70° so với mặt bàn. Đảm bảo hai vai và khung chậu xoay đều nhau.",
        "Gập khớp háng, đầu gối và cánh tay để tạo sự ổn định theo yêu cầu.",
        "Chỉnh cột sống thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Chếch sau (nằm): Đưa cánh tay gần mặt bàn nhất lên trên và ra trước; cánh tay gần bóng phát tia nhất đặt hướng xuống dưới và ra sau.",
        "Chếch trước (nằm): Đưa cánh tay gần mặt bàn nhất hướng xuống dưới và ra sau; cánh tay gần bóng phát tia nhất đặt hướng lên trên và ra trước.",
        "Đứng chếch trước: Trọng lượng phân bố đều hai chân; xoay toàn bộ cơ thể, hai vai và khung chậu 20° ra trước so với tư thế nghiêng; gập khuỷu và đặt cánh tay gần tấm nhận ảnh nhất lên hông; nâng cánh tay đối diện tựa lên đỉnh đầu."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm vào T7 hoặc dưới góc ức khoảng 5 cm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở hai cạnh dọc theo cấu trúc giải phẫu (khu trú cả bốn cạnh nếu có thể)."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở cuối thì thở ra gắng sức."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Các khớp mỏm khớp: Các tư thế chếch trước bộc lộ các khớp mỏm khớp nằm ở phía xa bóng phát (gần phim); các tư thế chếch sau bộc lộ các khớp mỏm khớp nằm ở phía gần bóng phát (xa phim)."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Các khớp mỏm khớp của bên cần khảo sát phải mở rộng. Tuy nhiên, mức độ gù của cột sống sẽ quyết định có bao nhiêu khớp mỏm khớp được nhìn thấy rõ ràng."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-nguc-chech-ct.png", caption: "Chiều thế — nằm chếch" },
      { src: "images/xq/xq-cotsong-nguc-chech-ct2.png", caption: "Chiều thế — đứng chếch" },
      { src: "images/xq/xq-cotsong-nguc-chech-phim.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-tl-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống thắt lưng tư thế trước sau",
    tuKhoa: ["cot song that lung thang", "lumbar ap", "l4 l5", "mao chau"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (AP), có thể PA/đứng" },
      { ten: "kV / mAs", giaTri: "74 kVp · 15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của đốt sống thắt lưng, bao gồm gãy xương, vẹo cột sống và các quá trình tân sinh (khối u)."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa với hai tay để xuôi theo thân mình và đầu đặt trên gối (cũng có thể thực hiện ở tư thế nằm sấp hoặc đứng).",
        "Việc gập nhẹ hai đầu gối giúp làm thẳng cột sống, từ đó mở rộng các khe đĩa đệm gian đốt sống.",
        "Có thể chụp PA (nằm sấp) giúp đặt các khe gian đốt sống gần như song song hơn với chùm tia phân kỳ. Tư thế đứng hữu ích để thể hiện trạng thái chịu lực tự nhiên của cột sống."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc lưới lọc tia.",
        "Gập hai đầu gối và khớp háng để làm giảm độ cong sinh lý ưỡn của cột sống.",
        "Đảm bảo lồng ngực hoặc khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm ngang mức mào chậu (khoảng gian đốt L4–L5)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì thở ra."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Thân các đốt sống thắt lưng, các khớp gian đốt sống, mỏm gai và mỏm ngang, khớp cùng chậu và xương cùng được bộc lộ.",
        "Bao gồm từ khoảng T11 đến phần xa của xương cùng."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Bệnh nhân không bị xoay, thể hiện qua các khớp cùng chậu cách đều các mỏm gai, các mỏm gai nằm trên đường giữa của cột sống và các mỏm ngang có chiều dài bằng nhau."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-tl-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-tl-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-tl-thang-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-tl-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống thắt lưng tư thế nghiêng",
    tuKhoa: ["cot song that lung nghieng", "lumbar lateral", "l5 s1", "truot dot song"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "74 kVp · 15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của đốt sống thắt lưng bao gồm gãy xương, trượt đốt sống, các quá trình tân sinh (khối u) và loãng xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế nằm nghiêng, đầu kê trên gối, hai đầu gối gập lại, kê đệm giữa hai đầu gối và mắt cá chân để duy trì tư thế nghiêng hoàn toàn và đảm bảo thoải mái.",
        "Bệnh nhân khung chậu rộng và lồng ngực hẹp có thể cần góc tia trung tâm chếch về phía chân 5°–8° ngay cả khi đã kê đệm.",
        "Nếu có vẹo cột sống sang bên, đặt bệnh nhân nằm nghiêng sao cho phần lõm (hoặc phần lồi) của cột sống hướng xuống dưới để mở rộng các khe đĩa đệm tốt hơn."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc lưới lọc tia.",
        "Gập hai đầu gối và khớp háng để làm giảm độ cong sinh lý ưỡn của cột sống.",
        "Đảm bảo lồng ngực hoặc khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm ngang mức mào chậu (khoang gian đốt L4–L5). Hướng chiếu này bao gồm các đốt sống thắt lưng, xương cùng và có thể cả xương cụt."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì thở ra."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Các lỗ gian đốt sống từ L1 đến L4, thân các đốt sống, khớp gian đốt sống, mỏm gai và bản lề L5–S1. Tùy kích thước tấm nhận ảnh, toàn bộ xương cùng cũng có thể được bộc lộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Cột sống nằm song song với tấm nhận ảnh, thể hiện qua các lỗ gian đốt sống và khe khớp gian đốt sống mở rộng.",
        "Không xoay, thể hiện qua sự chồng khít của các khuyết ngồi lớn và bờ sau thân đốt sống."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-tl-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-tl-nghieng-ct2.png", caption: "Chiều thế — minh hoạ góc tia 5° về chân" },
      { src: "images/xq/xq-cotsong-tl-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-tl-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống thắt lưng tư thế chếch",
    tuKhoa: ["cot song that lung chech", "lumbar oblique", "ho eo", "cho scottie", "khuyet eo cung sau"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch 45° (RPO/LPO hoặc RAO/LAO)" },
      { ten: "kV / mAs", giaTri: "76 kVp · 25 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khuyết eo cung sau (ví dụ: hở eo đốt sống).",
        "Cần thực hiện cả hai hướng chiếu chếch phải và chếch trái."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa hơi nghiêng (chếch sau phải và chếch sau trái) hoặc nằm sấp hơi nghiêng (chếch trước phải và chếch trước trái), hai tay duỗi thẳng và đầu đặt trên gối."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Xoay cơ thể 45° và chỉnh cột sống thẳng trục với đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Đảm bảo hai vai và khung chậu xoay đều nhau. Gập đầu gối để tạo sự ổn định và đưa cánh tay nằm xa tấm nhận ảnh nhất vắt ngang qua ngực.",
        "Kê đệm bọt biển thấu quang dưới vai và khung chậu để duy trì tư thế, tránh bệnh nhân bám vào mép bàn gây kẹt ngón tay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm vào L3 ngang mức bờ sườn dưới (trên mào chậu khoảng 3–5 cm) và cách gai chậu trước trên của bên được nâng cao vào trong khoảng 5 cm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì thở ra."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Quan sát được các khớp mỏm khớp (chếch sau phải/trái bộc lộ các khớp nằm sát phim; chếch trước phải/trái bộc lộ các khớp nằm xa phim)."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Bệnh nhân xoay chính xác 45° thể hiện qua các khớp mỏm khớp mở rộng và cuống cung (mắt của “chó Scottie”) nằm giữa đường giữa và bờ trước của thân đốt sống.",
        "Cuống cung nằm lùi về phía sau trên thân đốt sống cho thấy xoay quá mức; cuống cung nằm lệch ra phía trước cho thấy xoay chưa đủ."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-tl-chech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotsong-tl-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotsong-tl-chech-phim2.png", caption: "Phim đạt yêu cầu (chú thích — “chó Scottie”)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cstl-gap-uon",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang cột sống thắt lưng tư thế động gập, ưỡn",
    tuKhoa: ["cot song that lung gap uon", "chuc nang", "flexion extension lumbar", "dong"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng, gập tối đa & ưỡn tối đa" },
      { ten: "kV / mAs", giaTri: "76 kVp · 25 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Đánh giá khả năng vận động tại vị trí làm cứng khớp cột sống.",
        "Thu được hai hình ảnh với bệnh nhân ở tư thế nghiêng (một hình cúi tối đa và một hình ngửa tối đa)."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế nằm nghiêng, đầu kê trên gối, hai đầu gối gập lại, có đệm lót giữa hai đầu gối.",
        "Đặt bờ dưới của tấm nhận ảnh thấp hơn mào chậu khoảng 3–5 cm.",
        "Có thể thực hiện với bệnh nhân đứng thẳng hoặc ngồi trên ghế đẩu. Khung chậu giữ cố định tối đa, đóng vai trò điểm tựa (điểm xoay) trong suốt quá trình thay đổi tư thế."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng ngang giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Gập tối đa: Sử dụng khung chậu làm điểm tựa, yêu cầu bệnh nhân cuộn tròn người (gập về phía trước) và kéo hai chân lên cao nhất có thể.",
        "Ưỡn tối đa: Sử dụng khung chậu làm điểm tựa, yêu cầu bệnh nhân di chuyển thân và hai chân ra phía sau xa nhất có thể để ưỡn tối đa trục dọc cơ thể. Đảm bảo lồng ngực/khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm vào giữa tấm nhận ảnh."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì thở ra."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Các đốt sống ngực và thắt lưng, bao gồm khoảng 3–5 cm mào chậu."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Cột sống nằm song song với tấm nhận ảnh, thể hiện qua các lỗ gian đốt sống và khe khớp gian đốt sống mở rộng.",
        "Không xoay, thể hiện qua sự chồng khít của các khuyết ngồi lớn và bờ sau thân đốt sống."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotsong-tl-gapuon-ct.png", caption: "Chiều thế — gập & ưỡn" },
      { src: "images/xq/xq-cotsong-tl-gapuon-phim.png", caption: "Phim đạt yêu cầu (gập & ưỡn)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-cungcut-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang xương cùng tư thế trước sau",
    tuKhoa: ["xuong cung thang", "sacrum ap", "khop cung chau"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (AP)" },
      { ten: "kV / mAs", giaTri: "66 kVp · 15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của xương cùng, bao gồm cả gãy xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa, hai tay để xuôi theo thân mình, đầu kê gối, hai chân duỗi thẳng và có đệm lót dưới khoeo chân để thoải mái."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Đảm bảo khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chếch lên phía đầu một góc 15°–20°.",
        "Chiếu tia trung tâm vào điểm cách khớp mu 5 cm về phía trên."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Xương cùng, khớp cùng chậu và khe đĩa đệm gian đốt sống L5–S1."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay, thể hiện qua sự thẳng hàng của mào cùng giữa và xương cụt với khớp mu.",
        "Sự thẳng hàng chính xác của xương cùng và tia trung tâm giúp bộc lộ xương cùng không bị biến dạng thu ngắn; xương mu và các lỗ cùng không bị chồng lên nhau."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-xuongcung-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-xuongcung-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-xuongcung-thang-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-cut-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang xương cụt tư thế trước sau",
    tuKhoa: ["xuong cut thang", "coccyx ap"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (AP)" },
      { ten: "kV / mAs", giaTri: "66 kVp · 15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của xương cụt, bao gồm cả gãy xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa, hai tay để xuôi theo thân mình, đầu kê gối, hai chân duỗi thẳng và có đệm lót dưới khoeo chân để thoải mái."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Đảm bảo khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chếch về phía chân một góc 10°–15°.",
        "Chiếu tia trung tâm vào điểm cách khớp mu 5 cm về phía trên."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Xương cụt."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Sự thẳng hàng chính xác của xương cụt và tia trung tâm giúp bộc lộ xương cụt không bị chồng ảnh và được chiếu lên phía trên xương mu.",
        "Các đốt xương cụt phải mở rộng. Nếu không, chúng có thể đã dính lại hoặc cần tăng góc tia trung tâm (độ cong của xương cụt càng lớn càng cần góc lớn).",
        "Xương cụt phải cách đều các thành bên của lỗ chậu hông, cho thấy bệnh nhân không bị xoay."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-xuongcut-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-xuongcut-thang-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  {
    id: "xq-cotsong-cungcut-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Cột sống",
    ten: "Chụp X-quang xương cùng cụt tư thế nghiêng",
    tuKhoa: ["cung cut nghieng", "sacrum coccyx lateral"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "76 kVp · 30 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của xương cùng và xương cụt, bao gồm cả gãy xương.",
        "Lưu ý: Xương cùng và xương cụt thường được chụp cùng nhau. Các hướng chiếu AP riêng biệt là bắt buộc do yêu cầu các góc tia trung tâm khác nhau, nhưng hướng chiếu nghiêng có thể thực hiện chỉ với một lần phát tia nếu định tâm cẩn thận để bao gồm cả xương cùng và xương cụt."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế nằm nghiêng, đầu kê trên gối và hai đầu gối gập lại."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh trục dọc của xương cùng và xương cụt thẳng trục với tia trung tâm và đường giữa của bàn và/hoặc tấm nhận ảnh.",
        "Đảm bảo khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm vào điểm cách gai chậu trước trên khoảng 8–10 cm về phía sau."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Xương cùng, khớp L5–S1 và xương cụt."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay, thể hiện qua sự chồng khít của các khuyết ngồi lớn và chỏm xương đùi."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cungcut-nghieng-ct.png", caption: "Chiều thế — tổng quát" },
      { src: "images/xq/xq-cungcut-nghieng-ct2.png", caption: "Chiều thế — cận cảnh" },
      { src: "images/xq/xq-cungcut-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cungcut-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương III: Kỹ thuật chụp cột sống"
  },

  /* ===================================================================== */
  /* ==== CHƯƠNG IV: KỸ THUẬT CHỤP LỒNG NGỰC (nguồn: Kỹ thuật chụp X-quang 2) */
  /* ===================================================================== */

  {
    id: "xq-suon-ap",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang xương sườn tư thế trước sau",
    tuKhoa: ["xuong suon", "ribs ap", "suon truoc sau", "tren co hoanh", "duoi co hoanh"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (AP)" },
      { ten: "kV / mAs", giaTri: "55–60 kVp · 5–10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của xương sườn, bao gồm gãy xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Tư thế đứng được ưu tiên cho phần trên cơ hoành nếu tình trạng bệnh nhân cho phép; nằm ngửa cho phần dưới cơ hoành."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của lưới lọc tia hoặc bàn/giá chụp Bucky đứng.",
        "Xoay hai vai về phía trước để tách hai xương bả vai ra khỏi các trường phổi.",
        "Nâng cằm để tránh chồng ảnh lên các xương sườn trên; nhìn thẳng về phía trước.",
        "Đảm bảo lồng ngực hoặc khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Trên cơ hoành: Tia trung tâm vuông góc với tấm nhận ảnh, ngang mức T7 (bờ trên tấm nhận ảnh cao hơn vai khoảng 4 cm).",
        "Dưới cơ hoành: Tia trung tâm vuông góc, hướng ngang mức mũi ức (bờ dưới tấm nhận ảnh ngang mức mào chậu)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào vùng cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì hít vào đối với các xương sườn trên cơ hoành và nín thở ở thì thở ra đối với các xương sườn dưới cơ hoành."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Trên cơ hoành: Phải quan sát được các xương sườn từ 1 đến 10.",
        "Dưới cơ hoành: Phải quan sát được các xương sườn từ 9 đến 12."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Lồng ngực không có dấu hiệu bị xoay.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-suon-ap-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-suon-ap-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-suon-ap-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-suon-pa",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang xương sườn tư thế sau trước",
    tuKhoa: ["xuong suon sau truoc", "ribs pa"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Sau trước (PA)" },
      { ten: "kV / mAs", giaTri: "55–60 kVp · 5–10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của xương sườn, bao gồm gãy xương (ưu tiên cho các xương sườn trên cơ hoành)."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Ưu tiên tư thế đứng hoặc nằm sấp nếu cần thiết, với hai tay buông thõng hai bên."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của lưới lọc tia hoặc bàn/giá chụp Bucky đứng.",
        "Xoay hai vai về phía trước để tách hai xương bả vai ra khỏi các trường phổi.",
        "Đảm bảo lồng ngực hoặc khung chậu không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh, hướng vào T7 (dưới mỏm gai đốt sống cổ 7 khoảng 18–20 cm, tương tự chụp X-quang ngực PA).",
        "Chỉnh tâm tấm nhận ảnh ngang mức tia trung tâm (bờ trên tấm nhận ảnh cao hơn vai khoảng 4 cm)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào vùng cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì hít vào đối với các xương sườn trên cơ hoành và nín thở ở thì thở ra đối với các xương sườn dưới cơ hoành."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Quan sát được các xương sườn từ 1 đến 10 ở trên cơ hoành."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Lồng ngực không có dấu hiệu bị xoay.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-suon-pa-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-suon-pa-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-suon-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang xương sườn tư thế chếch",
    tuKhoa: ["xuong suon chech", "ribs oblique", "cung nach", "rpo lpo rao lao"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch 45° (RPO/LPO hoặc RAO/LAO)" },
      { ten: "kV / mAs", giaTri: "55–60 kVp · 5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của xương sườn, bao gồm gãy xương. Các tư thế chếch bộc lộ phần cung nách của các xương sườn, vùng không nhìn rõ trên các hướng chiếu AP – PA.",
        "Chấn thương phía sau – ngoài: Các tư thế chếch sau, bên bị tổn thương đặt gần tấm nhận ảnh.",
        "Chấn thương phía trước – ngoài: Các tư thế chếch trước, bên bị tổn thương đặt xa tấm nhận ảnh."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Ưu tiên tư thế đứng cho các xương sườn trên cơ hoành nếu tình trạng bệnh nhân cho phép và nằm ngửa đối với các xương sườn dưới cơ hoành."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Xoay bệnh nhân một góc 45° theo tư thế chếch sau hoặc chếch trước, với bên bị tổn thương nằm sát tấm nhận ảnh nhất (chếch sau) hoặc xa tấm nhận ảnh nhất (chếch trước). Xoay cột sống ra xa vị trí tổn thương.",
        "Đưa cánh tay của bên nâng cao lên trên đầu; duỗi cánh tay đối diện xuống dưới và ra sau, tránh xa lồng ngực.",
        "Nếu nằm, gập đầu gối của bên nâng cao để giúp duy trì tư thế.",
        "Để bộc lộ cung nách các xương sườn bên phải: RPO hoặc LAO. Để bộc lộ bên trái: LPO hoặc RAO."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh, định tâm vào điểm giữa bờ ngoài xương sườn và cột sống.",
        "Trên cơ hoành: hướng vào vị trí ngang mức T7 (bờ trên tấm nhận ảnh cao hơn vai khoảng 4 cm).",
        "Dưới cơ hoành: hướng vào vị trí giữa mũi ức và bờ sườn dưới (bờ dưới cassette ngang mức mào chậu)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào vùng khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì hít vào đối với các xương sườn trên cơ hoành và nín thở ở thì thở ra đối với các xương sườn dưới cơ hoành."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Trên cơ hoành: Các xương sườn 1 đến 10 phải được bao gồm và nằm trên cơ hoành.",
        "Dưới cơ hoành: Các xương sườn 9 đến 12 phải được bao gồm và nằm dưới cơ hoành; phần cung nách của các xương sườn khảo sát được chiếu rõ ra ngoài, cột sống dịch chuyển ra xa vùng khảo sát."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Tư thế chếch 45° chính xác hiển thị rõ phần cung nách của các xương sườn theo hướng nhìn nghiêng, với cột sống đã dịch chuyển ra khỏi vùng khảo sát. Không có sự chồng ảnh lên nhau."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-suon-chech-ct.png", caption: "Chiều thế — đứng, trên cơ hoành" },
      { src: "images/xq/xq-suon-chech-ct2.png", caption: "Chiều thế — bộc lộ cung nách" },
      { src: "images/xq/xq-suon-chech-ct3.png", caption: "Chiều thế — dưới cơ hoành (che chì)" },
      { src: "images/xq/xq-suon-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-suon-chech-phim2.png", caption: "Phim đạt yêu cầu (dưới cơ hoành)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-xuong-uc-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang xương ức tư thế chếch sau trước",
    tuKhoa: ["xuong uc chech", "sternum rao", "pa oblique sternum"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch sau – trước (RAO 15°–20°)" },
      { ten: "kV / mAs", giaTri: "64 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của xương ức, bao gồm gãy xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đứng (ưu tiên) hoặc nằm sấp hơi xoay người; cánh tay phải buông thõng bên hông, cánh tay trái giơ lên."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Đặt bệnh nhân nằm chếch 15°–20° về phía bên phải (tư thế RAO).",
        "Chỉnh trục dọc của xương ức thẳng trục với tia trung tâm và đường giữa của bàn hoặc giá chụp Bucky đứng.",
        "Có thể chụp LPO nếu không chụp được RAO. Nếu bệnh nhân không thể xoay, có thể tạo góc tia trung tâm 15°–20° chéo qua bên phải để chiếu xương ức ra ngoài cột sống, lên trên bóng tim."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm vào giữa xương ức (cách đường giữa 2,5 cm về bên trái và mũi ức)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Trường khu trú hẹp và dài vào vùng xương ức."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Có thể dùng kỹ thuật thở nếu bệnh nhân hợp tác; nếu không, yêu cầu nín thở ở thì thở ra."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Xương ức được hiển thị, chồng lên bóng tim."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Sự xoay đúng tư thế thể hiện qua việc xương ức nằm dọc theo cột sống mà không bị chồng bởi các đốt sống. Xương ức không bị biến dạng."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-xuonguc-chech-ct.png", caption: "Chiều thế & hướng tia (RAO)" },
      { src: "images/xq/xq-xuonguc-chech-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-xuong-uc-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang xương ức tư thế nghiêng",
    tuKhoa: ["xuong uc nghieng", "sternum lateral"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng (đứng/nằm nghiêng)" },
      { ten: "kV / mAs", giaTri: "74 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,2 m (khuyến cáo 1,5–1,8 m để giảm phóng đại)" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý của xương ức, bao gồm gãy xương.",
        "Gãy lún xương ức."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đứng (ưu tiên) hoặc nằm nghiêng."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Đứng: Đặt bệnh nhân đứng hoặc ngồi, hai vai và hai cánh tay kéo ra sau.",
        "Nằm nghiêng: Hai cánh tay giơ lên qua đầu và giữ hai vai đưa ra sau.",
        "Chỉnh trục dọc của xương ức thẳng trục với tia trung tâm và đường giữa của lưới lọc tia hoặc bàn/giá chụp Bucky đứng.",
        "Đảm bảo tư thế nghiêng hoàn toàn, không bị xoay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm vào giữa xương ức và mũi ức.",
        "Nên dùng SID 152–183 cm để giảm độ phóng đại của xương ức do tăng khoảng cách vật – phim."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Trường khu trú hẹp và dài vào vùng xương ức."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì hít vào."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ xương ức với sự chồng ảnh tối thiểu của các mô mềm."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Tư thế chính xác, không bị xoay: không có sự chồng ảnh của xương cánh tay, bờ vai hoặc mô mềm lên xương ức; toàn bộ xương ức không bị chồng bởi các xương sườn."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-xuonguc-nghieng-ct.png", caption: "Chiều thế — đứng" },
      { src: "images/xq/xq-xuonguc-nghieng-ct2.png", caption: "Chiều thế — nằm nghiêng" },
      { src: "images/xq/xq-xuonguc-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-ucdon-pa",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang khớp ức đòn tư thế sau trước",
    tuKhoa: ["khop uc don", "sternoclavicular pa", "sc joint"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Sau trước (PA)" },
      { ten: "kV / mAs", giaTri: "52 kVp · 5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Bán trật khớp hoặc các bệnh lý khác của khớp ức đòn."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân nằm sấp, đầu kê gối nghiêng sang một bên, hai tay giơ lên cạnh đầu hoặc để xuôi theo thân mình (cũng có thể chụp đứng hướng sau trước)."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của lưới lọc tia hoặc bàn/giá chụp đứng (Bucky).",
        "Đảm bảo hai vai không bị xoay.",
        "Chỉnh tâm tấm nhận ảnh vào tia trung tâm (dưới mỏm gai đốt sống cổ 7 khoảng 7 cm, ngang mức T2–T3)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc, hướng ngang mức T2–T3, hoặc dưới mỏm gai đốt sống cổ 7 khoảng 7 cm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào vùng khớp ức đòn."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì thở ra."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Bờ ngoài của cán ức và phần trong của hai xương đòn được bộc lộ nằm ở hai bên cột sống, nhìn xuyên qua sự chồng ảnh của các xương sườn và hai phổi."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Bệnh nhân không bị xoay, thể hiện qua khoảng cách từ các khớp ức đòn đến cột sống bằng nhau ở cả hai bên.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-ucdon-pa-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-ucdon-pa-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-ucdon-pa-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-ucdon-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang khớp ức đòn tư thế chếch",
    tuKhoa: ["khop uc don chech", "sternoclavicular oblique", "rao lao sc"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch trước 10°–15° (RAO/LAO)" },
      { ten: "kV / mAs", giaTri: "56 kVp · 5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Tách khớp, bán trật khớp hoặc các bệnh lý khác của khớp ức đòn."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Nằm sấp, xoay nhẹ lồng ngực (10°–15°) với cánh tay ở bên nâng cao đặt phía trước bệnh nhân và cánh tay đối diện đặt phía sau.",
        "Xoay 10°–15° ở tư thế chếch trước sẽ bộc lộ tốt nhất khớp ức đòn bên sát phim: RAO bộc lộ khớp bên phải, LAO bộc lộ khớp bên trái. Với độ xoay nhỏ hơn (5°–10°), khớp ức đòn đối diện (xa phim) hiển thị ngay cạnh cột sống."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Với bệnh nhân xoay 10°–15°, căn chỉnh và định tâm mỏm gai cách tia trung tâm và đường giữa của lưới/bàn/Bucky đứng từ 3–5 cm ra phía ngoài (về phía bên được nâng cao)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc ngang mức T2–T3, hoặc dưới mỏm gai đốt sống cổ 7 khoảng 7,5 cm, và cách mặt phẳng đứng dọc giữa 2,5–5 cm ra phía ngoài (về phía bên được nâng cao)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào vùng khớp ức đòn."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở ở thì thở ra."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Cán ức, phần trong của hai xương đòn và khớp ức đòn được bộc lộ rõ nhất ở bên nằm sát phim. Khớp ức đòn ở bên xa phim sẽ bị biến dạng thu ngắn."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Bệnh nhân xoay đúng tư thế giúp quan sát khớp ức đòn bên sát phim mà không bị chồng ảnh lên cột sống hoặc cán ức."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-ucdon-chech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-ucdon-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-ucdon-chech-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-long-nguc-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang tim và phổi tư thế sau trước (với bệnh nhân đứng)",
    tuKhoa: ["phoi", "nguc", "chest pa", "long nguc thang", "cxr", "tim phoi", "phoi thang"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Sau trước (PA), bệnh nhân đứng" },
      { ten: "kV / mAs", giaTri: "52 kVp · 5 mAs (có thể 100–120 kVp kỹ thuật cao áp)" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khi thực hiện ở tư thế đứng, hướng tia sau – trước giúp bộc lộ các bệnh lý tràn dịch màng phổi, tràn khí màng phổi, xẹp phổi và các dấu hiệu nhiễm trùng."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân đứng thẳng, hai chân hơi giang ra, trọng lượng cơ thể phân bố đều trên hai chân.",
        "Nâng cằm, tì cằm tựa vào tấm nhận ảnh.",
        "Đặt hai tay chống lên vùng hông thấp, lòng bàn tay hướng ra ngoài, khuỷu tay hơi gập.",
        "Xoay hai vai về phía trước ép sát vào tấm nhận ảnh để đưa xương bả vai ra khỏi trường phổi; hạ thấp hai vai để đẩy xương đòn xuống dưới đỉnh phổi."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của tấm nhận ảnh, đảm bảo khoảng cách đều nhau giữa thành bên lồng ngực và các mép tấm nhận ảnh.",
        "Đảm bảo lồng ngực không bị xoay bằng cách đặt mặt phẳng đứng ngang giữa song song với tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh và chiếu thẳng vào mặt phẳng đứng dọc giữa ngang mức đốt sống T7 (ngang mức góc dưới xương bả vai)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Giới hạn chùm tia ở cả bốn cạnh khu trú vào khu vực trường phổi (bờ trên của trường sáng ngang mức mỏm gai đốt sống cổ 7, bờ bên vươn tới mép da bên ngoài)."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Thực hiện phát tia vào cuối thì hít vào sâu và nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Bao gồm cả hai phổi từ đỉnh phổi đến các góc sườn hoành và khí quản chứa khí từ mức T1 trở xuống.",
        "Dấu ấn vùng rốn phổi, bóng tim, các mạch máu lớn và lồng ngực xương được bộc lộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Cằm nâng đủ cao để tránh chồng ảnh lên đỉnh phổi; hai vai xoay đủ về phía trước để tránh xương bả vai chồng lên trường phổi.",
        "Không xoay: hai khớp ức đòn cách đều đường giữa cột sống; khoảng cách từ bờ ngoài xương sườn đến cột sống bằng nhau ở hai bên.",
        "Hít vào hết sức: quan sát được tối thiểu 10 cung sau xương sườn nằm trên vòm hoành (nhiều bệnh nhân thấy 11 cung).",
        "Tâm trường khu trú (tia trung tâm) hướng vào vùng T7 ở hầu hết bệnh nhân."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-nguc-pa-ct.png", caption: "Chiều thế & hướng tia (đứng)" },
      { src: "images/xq/xq-nguc-pa-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-nguc-pa-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-nguc-tai-giuong",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang tim và phổi tư thế trước sau (với bệnh nhân nằm)",
    tuKhoa: ["nguc ap", "chest ap supine", "tai giuong", "portable", "nam"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (AP), bệnh nhân nằm" },
      { ten: "kV / mAs", giaTri: "52 kVp · 5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m (thực tế có thể ngắn hơn khi chụp tại giường)" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Hướng chiếu này bộc lộ các bệnh lý liên quan đến phổi, cơ hoành và trung thất.",
        "Việc xác định các mức khí – dịch (tràn dịch màng phổi) đòi hỏi tư thế đứng hoàn toàn với tia trung tâm nằm ngang, giống hướng chiếu PA hoặc chụp ngực tư thế nằm nghiêng."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân nằm ngửa trên bàn chụp.",
        "Đẩy hai vai của bệnh nhân về phía trước bằng cách xoay hai cánh tay vào trong."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Đặt tấm nhận ảnh ở dưới hoặc phía sau bệnh nhân; chỉnh tâm tấm nhận ảnh thẳng trục với tia trung tâm (bờ trên tấm nhận ảnh cao hơn vai khoảng 4–5 cm).",
        "Căn chỉnh bệnh nhân vào giữa tia trung tâm và tấm nhận ảnh; kiểm tra bằng cách nhìn bệnh nhân từ trên xuống, gần vị trí bóng phát tia."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chếch về phía chân để vuông góc với trục dọc của xương ức (thường ± 5° để tránh xương đòn che khuất đỉnh phổi).",
        "Tia trung tâm hướng ngang mức T7 (hoặc đường liên vú)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Giới hạn chùm tia ở cả bốn cạnh khu trú vào khu vực trường phổi (bờ trên của trường sáng ngang mức mỏm gai đốt sống cổ 7)."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Thực hiện phát tia vào cuối thì hít vào sâu và nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Tiêu chuẩn tương tự hướng chiếu PA, với ba ngoại lệ: bóng tim to hơn do phóng đại (SID ngắn hơn, khoảng cách tim – phim tăng); hạn chế đánh giá tràn dịch màng phổi; thường chỉ thấy 8–9 cung sau xương sườn trên cơ hoành và hai phổi mờ hơn do không thông khí hoàn toàn."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Góc tia trung tâm chính xác: phải thấy 3 cung sau xương sườn nằm trên xương đòn, cho thấy vùng đỉnh phổi không bị che khuất."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-nguc-ap-ct.png", caption: "Chiều thế & hướng tia (nằm ngửa)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-long-nguc-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang tim và phổi tư thế nghiêng",
    tuKhoa: ["long nguc nghieng", "chest lateral", "nguc nghieng"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng (ưu tiên nghiêng trái)" },
      { ten: "kV / mAs", giaTri: "64 kVp · 15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,2 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Một góc nhìn 90 độ so với hướng chiếu thẳng có thể bộc lộ các bệnh lý nằm phía sau tim, các mạch máu lớn và xương ức."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân đứng thẳng, áp sườn trái vào tấm nhận ảnh trừ khi có triệu chứng ở bên phải (khi đó chụp nghiêng phải nếu bác sĩ yêu cầu).",
        "Hai tay giơ cao qua đầu, nâng cằm lên."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Đặt bệnh nhân vào trung tâm của tia trung tâm và tấm nhận ảnh ở cả mặt trước và mặt sau.",
        "Đặt bệnh nhân ở tư thế nghiêng hoàn toàn (mặt phẳng đứng ngang vuông góc và mặt phẳng đứng dọc song song với tấm nhận ảnh).",
        "Hạ tia trung tâm và tấm nhận ảnh xuống một chút so với tư thế chụp thẳng nếu cần thiết."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc, hướng vào giữa lồng ngực ngang mức đốt sống ngực 7."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Giới hạn chùm tia ở cả bốn cạnh khu trú vào khu vực trường phổi (bờ trên của trường sáng ngang mức mỏm gai đốt sống cổ 7)."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Thực hiện phát tia vào cuối thì hít vào sâu và nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Bao gồm toàn bộ hai phổi từ đỉnh phổi đến các góc sườn hoành và từ xương ức ở phía trước đến các cung sau xương sườn và lồng ngực ở phía sau."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Cằm và hai tay được nâng đủ cao để tránh các mô mềm chồng ảnh quá mức lên đỉnh phổi.",
        "Vùng rốn phổi nằm ở khoảng trung tâm của tấm nhận ảnh."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-nguc-nghieng-ct.png", caption: "Chiều thế — đứng" },
      { src: "images/xq/xq-nguc-nghieng-ct2.png", caption: "Chiều thế — bệnh nhân không đứng được" },
      { src: "images/xq/xq-nguc-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-nguc-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-phoi-dinh-uon",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang tim và phổi tư thế đỉnh ưỡn",
    tuKhoa: ["phoi dinh uon", "lordotic", "apical", "duoi don"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Đỉnh ưỡn (AP lordotic)" },
      { ten: "kV / mAs", giaTri: "56 kVp · 5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Loại trừ các nốt vôi hóa và khối u nằm dưới xương đòn."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân đứng cách tấm nhận ảnh khoảng 30 cm và ngả người ra sau sao cho hai vai, cổ và mặt sau đầu tựa vào tấm nhận ảnh.",
        "Hai tay chống lên hông, lòng bàn tay hướng ra ngoài; hai vai xoay về phía trước.",
        "Nếu bệnh nhân yếu/không đứng vững: chụp AP với bệnh nhân nằm ngửa, hai vai xoay trước, tia trung tâm chếch lên phía đầu 15°–20° hướng vào giữa xương ức."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa thẳng trục với tia trung tâm và đường giữa của tấm nhận ảnh.",
        "Chỉnh tâm tấm nhận ảnh thẳng trục với tia trung tâm; bờ trên tấm nhận ảnh cao hơn vai khoảng 7–8 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh, hướng vào giữa xương ức."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Giới hạn chùm tia ở cả bốn cạnh khu trú vào khu vực trường phổi (bờ trên của trường sáng ngang mức mỏm gai đốt sống cổ 7)."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Thực hiện phát tia vào cuối thì hít vào sâu và nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Phải bao gồm toàn bộ hai trường phổi và hai xương đòn."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Hai xương đòn gần như nằm ngang và nằm phía trên/cao hơn đỉnh phổi, với các đầu trong của xương đòn bị chồng ảnh bởi các cung sườn số 1.",
        "Các xương sườn biến dạng, các cung sau gần như nằm ngang và chồng ảnh lên các cung trước.",
        "Không xoay: các đầu ức của hai xương đòn cách đều cột sống ở mỗi bên; bờ ngoài các xương sườn hai bên cách đều cột sống.",
        "Tâm trường khu trú (tia trung tâm) ở giữa xương ức với giới hạn khu trú thấy rõ ở trên và dưới."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-nguc-dinhuon-ct.png", caption: "Chiều thế — đứng ưỡn" },
      { src: "images/xq/xq-nguc-dinhuon-ct2.png", caption: "Chiều thế — nằm" },
      { src: "images/xq/xq-nguc-dinhuon-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  {
    id: "xq-nguc-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực",
    ten: "Chụp X-quang tim và phổi tư thế ngực chếch",
    tuKhoa: ["nguc chech", "chest oblique", "rao lao chest", "tim mach mau lon"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch trước 45° (RAO/LAO; có thể 45°–60°)" },
      { ten: "kV / mAs", giaTri: "56 kVp · 5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1,8 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khảo sát các bệnh lý liên quan đến hai trường phổi, khí quản và các cấu trúc trung thất.",
        "Xác định kích thước và đường viền của bóng tim và các mạch máu lớn."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân đứng thẳng, xoay 45° áp vai trước trái vào tấm nhận ảnh (chếch trước trái) hoặc áp vai trước phải (chếch trước phải).",
        "Gấp cánh tay ở bên gần tấm nhận ảnh nhất, đặt bàn tay chống lên hông, lòng bàn tay hướng ra ngoài.",
        "Nâng cánh tay đối diện lên, đặt bàn tay tựa lên đầu hoặc giá chụp ngực để giữ thăng bằng, giữ cánh tay giơ cao nhất có thể.",
        "Bệnh nhân nhìn thẳng về phía trước, nâng cằm.",
        "Lưu ý: Với các tư thế chếch trước, bên cần khảo sát thường là bên xa tấm nhận ảnh nhất; do đó chếch trước phải bộc lộ phổi trái rõ nhất. Một số khảo sát tim – mạch máu lớn cần xoay 45°–60°; xoay ít hơn (15°–20°) có thể bộc lộ tốt hơn các vùng phổi khác nhau."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Nhìn từ hướng bóng phát tia X, căn chỉnh bệnh nhân vào giữa tia trung tâm và tấm nhận ảnh, với bờ trên tấm nhận ảnh cao hơn mỏm gai đốt sống cổ 7 khoảng 2,5 cm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc, hướng ngang mức đốt sống ngực 7 (dưới mỏm gai đốt sống cổ 7 khoảng 18–20 cm).",
        "Tia trung tâm nằm ở điểm giữa của mặt phẳng đứng dọc giữa và bờ ngoài lồng ngực."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Giới hạn chùm tia ở cả bốn cạnh khu trú vào khu vực trường phổi (bờ trên của trường sáng ngang mức mỏm gai đốt sống cổ 7)."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Thực hiện phát tia vào cuối thì hít vào sâu và nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Bao gồm cả hai phổi từ đỉnh phổi đến các góc sườn hoành. Nhìn thấy khí quản, các mạch máu lớn và đường viền bóng tim (bộc lộ rõ nhất ở tư thế chếch trước trái góc 60°)."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Để đánh giá xoay 45°: khoảng cách từ bờ ngoài các xương sườn đến cột sống ở bên xa tấm nhận ảnh nhất phải gấp khoảng hai lần khoảng cách này ở bên gần tấm nhận ảnh nhất. Tia trung tâm hướng vào vùng đốt sống ngực 7."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-nguc-chech-ct.png", caption: "Chiều thế — chếch trước phải (RAO)" },
      { src: "images/xq/xq-nguc-chech-ct2.png", caption: "Chiều thế — chếch trước trái (LAO)" },
      { src: "images/xq/xq-nguc-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-nguc-chech-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật chụp X-quang 2 — Chương IV: Kỹ thuật chụp lồng ngực"
  },

  /* ---------------------------------------------------------------- X-QUANG */
  {
    id: "xq-so-moc-giai-phau",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Mốc giải phẫu & đường định vị hộp sọ",
    tuKhoa: ["moc giai phau so", "duong dinh vi", "oml", "ioml", "tea", "glabella", "nasion", "acanthion", "positioning lines"],
    thongSo: [],
    noiDung: [
      { tieuDe: "Mốc giải phẫu hộp sọ", items: [
        "TEA (Top of ear attachment): điểm bám trên của vành tai (nơi bờ trên vành tai tiếp giáp đầu).",
        "Auricle/pinna: loa tai (vành tai); Tragus: bình tai (nắp tai).",
        "Glabella: điểm giữa hai cung mày; Nasion: điểm gốc mũi; Acanthion: điểm chân gai mũi trước.",
        "Mental point: điểm cằm (điểm nhô nhất của cằm); Gonion: góc hàm (góc xương hàm dưới).",
        "SOM: bờ trên ổ mắt; IOM: bờ dưới ổ mắt; Outer/Inner canthus: khóe mắt ngoài/trong.",
        "EAM (điểm tai): lỗ tai ngoài; Inion: ụ chẩm ngoài."
      ]},
      { tieuDe: "Đường định vị hộp sọ", items: [
        "GAL (Glabelloalveolar line): đường gian mày – ổ răng.",
        "GML (Glabellomeatal line): đường gian mày – tai.",
        "OML (Orbitomeatal line): đường ổ mắt – tai.",
        "IOML (Infraorbitomeatal line – đường nền Reid): đường bờ dưới ổ mắt – tai.",
        "AML (Acanthiomeatal line): đường gai mũi – tai.",
        "LML (Lips-meatal line): đường môi – tai; MML (Mentomeatal line): đường cằm – tai."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-so-moc1.png", caption: "Mốc giải phẫu — nhìn nghiêng" },
      { src: "images/xq/xq-so-moc2.png", caption: "Mốc giải phẫu — nhìn thẳng" },
      { src: "images/xq/xq-so-moc3.png", caption: "Đường định vị hộp sọ" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Bài 1: Kỹ thuật chụp sọ, mặt, xoang"
  },

  {
    id: "xq-so-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang sọ thẳng",
    tuKhoa: ["so thang", "towne", "ap axial", "chau dau", "lo cham"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (Towne — AP chếch chân)" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 10–15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương sọ (di lệch vào trong và ra ngoài) và bệnh Paget."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Tháo bỏ tất cả vật dụng bằng kim loại, nhựa hoặc vật thể tháo rời khác khỏi đầu bệnh nhân.",
        "Chụp với bệnh nhân ở tư thế đứng hoặc nằm ngửa."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Gập cằm xuống, đưa đường ổ mắt – lỗ tai (OML) vuông góc với tấm nhận ảnh. Nếu bệnh nhân không gập cổ đủ, chỉnh đường IOML vuông góc; thêm đệm lót thấu quang dưới đầu nếu cần.",
        "Chỉnh mặt phẳng đứng dọc giữa (MSP) thẳng trục với tia trung tâm và đường giữa của lưới lọc tia hoặc mặt bàn/thiết bị nhận ảnh.",
        "Đảm bảo đầu không bị xoay hoặc nghiêng; đỉnh sọ nằm trong trường khu trú."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Góc tia trung tâm chếch về phía chân 30° so với đường OML, hoặc 37° so với đường IOML.",
        "Hướng tia trung tâm vào MSP, cao hơn ụ mày khoảng 6,5 cm để tia đi qua lỗ chẩm ngang mức nền xương chẩm.",
        "Chỉnh tâm tấm nhận ảnh vào tia trung tâm hướng tới.",
        "Lưu ý: Nếu đặt IOML vuông góc thay cho OML thì tăng góc tia lên 37° về phía chân (duy trì góc 30° giữa tia và OML — chênh lệch 7° giữa OML và IOML)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Xương chẩm, phần đá xương thái dương và lỗ chẩm được hiển thị cùng với lưng yên và mấu giường sau nằm trong bóng của lỗ chẩm."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Các mào đá phải đối xứng, cho thấy đầu không bị xoay.",
        "Lưng yên và mấu giường sau quan sát thấy bên trong lỗ chẩm cho thấy góc tia và độ gập cổ chính xác. Tạo góc/gập cổ chưa đủ sẽ chiếu lưng yên phía trên lỗ chẩm; quá mức sẽ chồng cung sau C1 lên lưng yên và thu ngắn lưng yên. Mấu giường lệch sang bên trong lỗ chẩm cho thấy đầu bị nghiêng."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-so-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-so-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-so-thang-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Bài 1: Kỹ thuật chụp sọ, mặt, xoang"
  },

  {
    id: "xq-so-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang sọ tư thế nghiêng",
    tuKhoa: ["so nghieng", "skull lateral", "ho yen"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng (lateral)" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 10–15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Chấn thương sọ, gãy xương sọ, bệnh lý xương sọ và vùng hố yên.",
        "Kiểm tra cả hai bên để so sánh khi cần; bên nằm sát tấm nhận ảnh được bộc lộ rõ nhất."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Tháo bỏ tất cả vật dụng kim loại hoặc nhựa khỏi đầu và cổ.",
        "Bệnh nhân nằm sấp (đầu nghiêng) hoặc đứng, áp mặt bên của đầu cần khảo sát sát tấm nhận ảnh."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng đứng dọc giữa (MSP) song song với mặt bàn/bề mặt thiết bị nhận ảnh.",
        "Chỉnh đường liên đồng tử (IPL) vuông góc với tấm nhận ảnh.",
        "Chỉnh đường ổ mắt – lỗ tai (IOML) song song với bờ ngang của tấm nhận ảnh.",
        "Đảm bảo đầu không bị xoay hoặc nghiêng (kê đệm dưới cằm nếu cần)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm vào điểm cao hơn lỗ tai ngoài (EAM) khoảng 5 cm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ hộp sọ ở tư thế nghiêng; hố yên và lưng yên nhìn nghiêng; mảnh sàng, xoang bướm và vùng thái dương được bộc lộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay: hai cành xương hàm dưới chồng khít; hai trần hốc mắt chồng khít.",
        "Không nghiêng: sàn hố sọ trước và sàn các hố sọ chồng khít lên nhau.",
        "Hố yên và lưng yên không có bờ đôi."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-so-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-so-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-so-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Bài 1: Kỹ thuật chụp sọ, mặt, xoang"
  },

  /* ------------------------------------------------- X-QUANG CHI TRÊN --- */
  {
    id: "xq-bantay-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang bàn tay thẳng (sau trước)",
    tuKhoa: ["ban tay", "hand pa", "sau truoc", "xuong ban tay", "chi tren"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau" },
      { ten: "kV / mAs", giaTri: "40 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương, trật khớp hoặc dị vật ở các xương ngón tay, xương bàn tay và tất cả các khớp của bàn tay.",
        "Các quá trình bệnh lý như loãng xương và thoái hóa khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp, bàn tay và cẳng tay duỗi thẳng."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Đặt sấp bàn tay sao cho lòng bàn tay áp sát vào tấm nhận ảnh; các ngón tay hơi xòe ra.",
        "Chỉnh trục dọc của bàn tay và cẳng tay thẳng trục với trục dọc của tấm nhận ảnh.",
        "Chỉnh tâm bàn tay và cổ tay vào giữa tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào khớp bàn ngón thứ ba.",
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào các bờ ngoài của bàn tay và cổ tay."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hướng chiếu PA của toàn bộ bàn tay, cổ tay và khoảng 2.5 cm đầu dưới cẳng tay được bộc lộ rõ.",
        "Hướng chiếu PA của bàn tay thể hiện hình ảnh chếch của ngón cái."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của bàn tay và cổ tay thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Bàn tay không bị xoay, thể hiện qua sự xuất hiện đối xứng ở cả hai bên hoặc độ lõm của thân các xương bàn tay và xương đốt ngón của các ngón từ 2 đến 5, cùng với lượng mô mềm bằng nhau ở mỗi bên của các ngón từ 2 đến 5.",
        "Các ngón tay nên được tách ra một chút sao cho phần mô mềm không bị chồng lên nhau.",
        "Các khớp bàn ngón và khớp gian ngón phải mở rộng, cho thấy vị trí tia trung tâm chính xác và bàn tay đã được đặt sấp hoàn toàn.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở khớp bàn ngón thứ ba."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-bantay-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-bantay-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-bantay-thang-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-bantay-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang bàn tay nghiêng",
    tuKhoa: ["ban tay nghieng", "hand lateral", "di vat ban tay", "chi tren"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Hướng chiếu nghiêng ở tư thế duỗi hoặc gập là một phương pháp thay thế cho hướng chiếu nghiêng xòe quạt để xác định vị trí dị vật ở bàn tay và các ngón tay; nó cũng cho thấy các gãy xương bàn tay bị di lệch ra trước hoặc ra sau. Hướng chiếu nghiêng ở tư thế gập tự nhiên có thể ít gây đau đớn hơn cho bệnh nhân."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp, bàn tay và cẳng tay duỗi thẳng."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Xoay bàn tay và cổ tay, với phía ngón cái hướng lên trên, vào tư thế nghiêng hoàn toàn, với các khớp bàn ngón từ ngón thứ 2 đến thứ 5 nằm ở giữa tấm nhận ảnh và thẳng trục với tia trung tâm.",
        "Nghiêng duỗi: Duỗi thẳng các ngón tay và ngón cái, và tựa vào một khối hỗ trợ thấu quang. Đảm bảo rằng tất cả các ngón tay và xương bàn tay được chồng khít hoàn toàn để có tư thế nghiêng hoàn toàn.",
        "Nghiêng gập: Gập các ngón tay thành một tư thế gập tự nhiên, với ngón cái chạm nhẹ vào ngón trỏ; duy trì tư thế nghiêng hoàn toàn."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào các khớp bàn ngón từ ngón thứ 2 đến thứ 5."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào các bờ ngoài của bàn tay và cổ tay."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ bàn tay, cổ tay và khoảng 2.5 cm đầu dưới cẳng tay được bộc lộ. Ngón cái sẽ xuất hiện ở tư thế hơi chếch và không bị chồng ảnh, với các khe khớp mở rộng."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của bàn tay và cổ tay thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Bàn tay và cổ tay phải ở tư thế nghiêng hoàn toàn, thể hiện qua các điểm sau: đầu dưới xương quay và xương trụ chồng lên nhau; các xương bàn tay và các xương đốt ngón chồng lên nhau.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở các khớp bàn ngón từ ngón thứ 2 đến thứ 5."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-bantay-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-bantay-nghieng-ct2.png", caption: "Chiều thế (2)" },
      { src: "images/xq/xq-bantay-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-bantay-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-bantay-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang bàn tay chếch",
    tuKhoa: ["ban tay chech", "hand oblique", "xuong ban tay", "chi tren"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương và trật khớp ở các xương ngón tay, xương bàn tay và tất cả các khớp của bàn tay.",
        "Các quá trình bệnh lý, chẳng hạn như loãng xương và thoái hóa khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp, bàn tay và cẳng tay duỗi thẳng."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Đặt sấp bàn tay lên tấm nhận ảnh; chỉnh tâm và trục dọc của bàn tay thẳng trục với trục dọc của tấm nhận ảnh.",
        "Xoay toàn bộ bàn tay và cổ tay ra ngoài một góc 45° và kê bằng miếng xốp hình chêm thấu quang hoặc khối bậc thang, như hình minh họa, sao cho tất cả các ngón tay được tách rời và song song với tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào khớp bàn ngón thứ ba."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào các bờ ngoài của bàn tay và cổ tay."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hướng chiếu chếch của toàn bộ bàn tay, cổ tay và khoảng 2.4 cm đầu dưới cẳng tay được bộc lộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của bàn tay và cổ tay thẳng hàng với tấm nhận ảnh.",
        "Độ chếch 45° được thể hiện qua các điểm sau: thân các xương bàn tay không được chồng lên nhau; có một chút chồng lấp ở chỏm xa của các xương bàn tay thứ ba, thứ tư và thứ năm nhưng chỏm xa của xương bàn tay thứ hai và thứ ba không được chồng lên nhau; sự chồng lấp quá mức của các xương bàn tay cho thấy bàn tay bị xoay quá mức, và sự tách rời quá nhiều cho thấy bàn tay xoay chưa đủ.",
        "Các khớp bàn ngón (MCP) và khớp gian ngón (IP) mở rộng mà không có sự biến dạng thu ngắn của các đốt ngón giữa hoặc đốt ngón xa, cho thấy các ngón tay đặt song song với tấm nhận ảnh."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-bantay-chech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-bantay-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-bantay-chech-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },
  {
    id: "xq-cotay-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cổ tay thẳng (sau – trước)",
    tuKhoa: ["co tay", "wrist pa", "co tay thang", "sau truoc", "chi tren"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "42 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy đầu dưới xương quay hoặc xương trụ, gãy đơn thuần mỏm trâm quay hoặc mỏm trâm trụ, và gãy các xương cổ tay riêng lẻ.",
        "Các quá trình bệnh lý, chẳng hạn như viêm tủy xương và viêm khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp với bàn tay và cẳng tay duỗi thẳng.",
        "Hạ thấp vai sao cho vai, khuỷu tay và cổ tay nằm trên cùng một mặt phẳng ngang."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh trục dọc của bàn tay và cổ tay thẳng hàng với tấm nhận ảnh, vùng cổ tay đặt ở trung tâm tia trung tâm.",
        "Đặt sấp bàn tay, hơi khum bàn tay lại để cổ tay và vùng xương cổ tay tiếp xúc sát với tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào vùng giữa các xương cổ tay."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng cổ tay; bao gồm đầu dưới xương quay và xương trụ, và phần giữa các xương bàn tay."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Quan sát thấy phần giữa và phần gần các xương bàn tay; các xương cổ tay; đầu dưới xương quay, xương trụ và các khớp liên quan; cùng với các mô mềm thích hợp của khớp cổ tay, chẳng hạn như các đệm mỡ và dải mỡ.",
        "Không phải tất cả các khe khớp giữa các xương cổ tay đều mở rộng do hình dạng không đều dẫn đến sự chồng lấp."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của bàn tay, cổ tay và cẳng tay thẳng hàng với tấm nhận ảnh.",
        "Tư thế PA hoàn toàn được thể hiện qua các điểm sau: hình dạng độ lõm bằng nhau ở mỗi bên thân phần gần các xương bàn tay; khoảng cách giữa phần gần các xương bàn tay gần như bằng nhau; có sự tách rời của đầu dưới xương quay và xương trụ ngoại trừ một sự chồng ảnh tối thiểu có thể xảy ra ở khớp quay trụ dưới.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở vùng giữa các xương cổ tay."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotay-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotay-thang-ct2.png", caption: "Chiều thế (2)" },
      { src: "images/xq/xq-cotay-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotay-thang-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-cotay-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cổ tay nghiêng",
    tuKhoa: ["co tay nghieng", "wrist lateral", "colles", "smith", "barton"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy hoặc trật khớp đầu dưới xương quay hoặc xương trụ, cụ thể là các kiểu gãy trật ra trước - sau như gãy Barton, gãy Colles hoặc gãy Smith.",
        "Thoái hóa khớp cũng có thể được phát hiện, chủ yếu ở xương thang và khớp cổ tay - bàn tay thứ nhất."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp, cánh tay và cẳng tay đặt trên bàn, khuỷu tay gập khoảng 90°. Đặt cổ tay và bàn tay lên tấm nhận ảnh ở tư thế nghiêng với ngón cái hướng lên trên. Vai, khuỷu tay và cổ tay phải nằm trên cùng một mặt phẳng ngang."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh trục dọc và tâm của bàn tay, cổ tay thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Điều chỉnh bàn tay và cổ tay vào tư thế nghiêng hoàn toàn, với các ngón tay gập thoải mái; nếu cần hỗ trợ để chống cử động, hãy sử dụng một khối hỗ trợ thấu quang và bao cát, đặt khối này tựa vào bàn tay và các ngón tay đang duỗi như hình minh họa."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào vùng giữa các xương cổ tay."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng cổ tay; bao gồm đầu dưới xương quay và xương trụ, và phần giữa các xương bàn tay."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Đầu dưới xương quay và xương trụ, các xương cổ tay, và ít nhất đến phần giữa các xương bàn tay được bộc lộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của bàn tay, cổ tay và cẳng tay phải thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Tư thế nghiêng hoàn toàn được thể hiện qua các điểm sau: chỏm xương trụ phải chồng lấp lên đầu dưới xương quay; phần gần của các xương bàn tay thứ hai đến thứ năm phải thẳng hàng và chồng lên nhau.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở vùng giữa các xương cổ tay."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotay-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotay-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotay-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-cotay-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cổ tay chếch",
    tuKhoa: ["co tay chech", "wrist oblique", "xuong thang", "xuong thuyen"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy đầu dưới xương quay hoặc xương trụ, gãy đơn thuần mỏm trâm quay hoặc mỏm trâm trụ, và gãy các xương cổ tay riêng lẻ.",
        "Các quá trình bệnh lý, chẳng hạn như viêm tủy xương và viêm khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp với bàn tay và cẳng tay duỗi thẳng.",
        "Hạ thấp vai sao cho vai, khuỷu tay và cổ tay nằm trên cùng một mặt phẳng ngang."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh trục dọc và tâm của bàn tay, cổ tay thẳng hàng với tấm nhận ảnh.",
        "Từ tư thế đặt sấp bàn tay, xoay cổ tay và bàn tay ra ngoài một góc 45°.",
        "Để tạo sự ổn định, đặt một miếng xốp hỗ trợ góc 45° dưới phía ngón cái của bàn tay để nâng đỡ bàn tay và cổ tay ở tư thế chếch 45° (Hình 4-91) hoặc hơi gập các ngón tay để làm khum bàn tay sao cho các đầu ngón tay tựa nhẹ lên tấm nhận ảnh (Hình 4-90)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào vùng giữa các xương cổ tay."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng cổ tay; bao gồm đầu dưới xương quay và xương trụ, và phần giữa các xương bàn tay."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Quan sát thấy đầu dưới xương quay, xương trụ, các xương cổ tay và ít nhất đến phần giữa các xương bàn tay.",
        "Xương thang và xương thuyền phải được bộc lộ rõ, chỉ có một chút chồng lấp của các xương cổ tay khác ở mặt trong của chúng."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của bàn tay, cổ tay và cẳng tay thẳng hàng với tấm nhận ảnh.",
        "Tư thế chếch 45° hoàn toàn của cổ tay được thể hiện qua các điểm sau: chỏm xương trụ bị chồng lấp một phần bởi đầu dưới xương quay; phần gần của các xương bàn tay thứ ba đến thứ năm (nền các xương bàn tay) phần lớn chồng lên nhau.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở vùng giữa các xương cổ tay."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotay-chech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotay-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotay-chech-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-cotay-xuong-thuyen",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cổ tay tư thế sau trước xem xương thuyền",
    tuKhoa: ["xuong thuyen", "scaphoid", "co tay xuong thuyen", "ulnar deviation", "gay xuong thuyen"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Xem xương thuyền" },
      { ten: "kV / mAs", giaTri: "42 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Nếu bệnh nhân có khả năng bị chấn thương cổ tay, không được cố gắng thực hiện tư thế này trước khi hoàn thành một loạt các hình ảnh chụp cổ tay thường quy và được đánh giá để loại trừ khả năng gãy đầu dưới cẳng tay hoặc gãy cổ tay, hoặc cả hai."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khả năng gãy xương thuyền. Các trường hợp gãy xương không di lệch có thể yêu cầu chụp thêm các hướng chiếu bổ sung hoặc chụp cắt lớp vi tính cổ tay."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp, đặt cổ tay và bàn tay lên tấm nhận ảnh, lòng bàn tay úp xuống, vai, khuỷu tay và cổ tay nằm trên cùng một mặt phẳng ngang."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Đặt cổ tay như khi chụp hướng chiếu PA—lòng bàn tay úp xuống và bàn tay, cổ tay thẳng hàng với tâm của trục dọc tấm nhận ảnh, xương thuyền nằm ở trung tâm tia trung tâm.",
        "Giữ nguyên cẳng tay, nhẹ nhàng nghiêng bàn tay ra ngoài (di chuyển về phía xương trụ) ở mức độ tối đa mà bệnh nhân có thể chịu đựng được mà không nhấc hoặc xoay đầu dưới cẳng tay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Góc tia trung tâm hướng về phía gần từ 10° đến 15°, dọc theo trục dọc của cẳng tay và hướng về phía khuỷu tay. (Góc tia trung tâm phải vuông góc với trục dọc của xương thuyền).",
        "Hướng tia trung tâm vào xương thuyền. (Xác định vị trí xương thuyền tại điểm cách mỏm trâm quay 2 cm về phía xa và phía trong)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng các xương cổ tay."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Các trường hợp gãy xương thuyền khó phát hiện có thể yêu cầu chụp nhiều hướng chiếu với các góc tia trung tâm khác nhau. Gồm bốn hướng chiếu với tia trung tâm chếch về phía gần ở các góc 0°, 10°, 20° và 30°."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Đầu dưới xương quay và xương trụ, các xương cổ tay, và phần gần các xương bàn tay được bộc lộ rõ.",
        "Xương thuyền phải được bộc lộ rõ ràng, không bị biến dạng thu ngắn, và các khe khớp cổ tay lân cận phải mở rộng (chứng minh góc tia trung tâm chính xác)."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của cổ tay và cẳng tay phải thẳng hàng với bờ bên của tấm nhận ảnh.",
        "Độ lệch trụ phải được quan sát rõ qua góc tạo bởi trục dọc các xương bàn tay so với trục của xương quay và xương trụ.",
        "Cổ tay không bị xoay thể hiện qua sự bộc lộ của đầu dưới xương quay và xương trụ, với khớp quay trụ dưới chỉ bị chồng lấp tối thiểu.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở xương thuyền."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cotay-xuong-thuyen-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cotay-xuong-thuyen-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cotay-xuong-thuyen-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },
  {
    id: "xq-cangtay-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cẳng tay tư thế trước sau",
    tuKhoa: ["cang tay", "forearm ap", "xuong quay", "xuong tru", "chi tren"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương và trật khớp xương quay hoặc xương trụ.",
        "Các quá trình bệnh lý chẳng hạn như viêm tủy xương hoặc viêm khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp, bàn tay và cánh tay duỗi thẳng hoàn toàn và lòng bàn tay ngửa."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Hạ thấp vai để đặt toàn bộ chi trên trên cùng một mặt phẳng ngang.",
        "Chỉnh và định tâm cẳng tay theo trục dọc của tấm nhận ảnh, đảm bảo lấy được cả khớp cổ tay và khớp khuỷu.",
        "Hướng dẫn bệnh nhân nghiêng người sang bên nếu cần để đặt toàn bộ cổ tay, cẳng tay và khuỷu tay ở tư thế thẳng (trước sau) nhất có thể (Lồi cầu trong và lồi cầu ngoài phải cách đều tấm nhận ảnh)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm giữa cẳng tay."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú các bờ bên sát với vùng cẳng tay thực tế, khu trú tối thiểu ở cả hai đầu để tránh cắt phạm cấu trúc giải phẫu ở cả hai khớp."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Bộc lộ hướng chiếu AP của toàn bộ xương quay và xương trụ, cùng với tối thiểu hàng gần của các xương cổ tay và đầu dưới xương cánh tay, và các mô mềm liên quan, chẳng hạn như các đệm mỡ và dải mỡ của khớp cổ tay và khớp khuỷu."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của cẳng tay phải thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Không bị xoay, thể hiện qua các lồi cầu xương cánh tay được bộc lộ ở góc nhìn nghiêng, với chỏm, cổ và lồi củ xương quay bị xương trụ chồng lấp một chút.",
        "Các khe khớp cổ tay và khuỷu tay chỉ mở một phần do sự phân kỳ của chùm tia.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở khoảng giữa của xương quay và xương trụ."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cangtay-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cangtay-thang-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-cangtay-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cẳng tay tư thế nghiêng",
    tuKhoa: ["cang tay nghieng", "forearm lateral", "xuong quay", "xuong tru", "chi tren"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương và trật khớp xương quay hoặc xương trụ.",
        "Các quá trình bệnh lý chẳng hạn như viêm tủy xương hoặc viêm khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp, khuỷu tay gập 90°."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Hạ thấp vai để đặt toàn bộ chi trên trên cùng một mặt phẳng ngang.",
        "Chỉnh và định tâm cẳng tay theo trục dọc của tấm nhận ảnh; đảm bảo bao gồm cả khớp cổ tay và khớp khuỷu trên tấm nhận ảnh.",
        "Xoay bàn tay và cổ tay vào tư thế nghiêng hoàn toàn, và kê tay để chống cử động, nếu cần. (Đảm bảo đầu dưới xương quay và xương trụ chồng khít trực tiếp lên nhau).",
        "Đối với cẳng tay cơ bắp to, đặt vật hỗ trợ dưới bàn tay và cổ tay khi cần thiết để đặt xương quay và xương trụ song song với tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm giữa cẳng tay."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú các bờ bên sát với vùng cẳng tay thực tế, khu trú tối thiểu ở cả hai đầu để tránh cắt phạm cấu trúc giải phẫu ở cả hai khớp."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hướng chiếu nghiêng của toàn bộ xương quay và xương trụ, hàng gần các xương cổ tay, và đầu dưới xương cánh tay được bộc lộ, cũng như các mô mềm liên quan, chẳng hạn như đệm mỡ và dải mỡ của khớp cổ tay và khớp khuỷu."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của cẳng tay phải thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Khuỷu tay gập 90°.",
        "Không xoay, thể hiện qua chỏm xương trụ chồng lên xương quay, và các lồi cầu xương cánh tay chồng khít lên nhau.",
        "Chỏm xương quay phải chồng lên mỏm vẹt, và lồi củ xương quay được bộc lộ.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở trung điểm của xương quay và xương trụ."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cangtay-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cangtay-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-khuyu-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang khuỷu tay tư thế trước sau",
    tuKhoa: ["khuyu tay", "elbow ap", "khop khuyu", "chi tren"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương và trật khớp khuỷu tay.",
        "Các quá trình bệnh lý, chẳng hạn như viêm tủy xương và viêm khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp, với khuỷu tay duỗi hoàn toàn nếu có thể."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Duỗi khuỷu tay, ngửa bàn tay, chỉnh cánh tay và cẳng tay thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Chỉnh tâm khớp khuỷu vào giữa tấm nhận ảnh.",
        "Yêu cầu bệnh nhân nghiêng người sang bên nếu cần để có được hướng chiếu AP thực sự. (Sờ các lồi cầu xương cánh tay để đảm bảo chúng song song với tấm nhận ảnh).",
        "Kê đỡ bàn tay nếu cần để chống cử động."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào giữa khớp khuỷu, vị trí này cách trung điểm của đường nối hai lồi cầu khoảng 2 cm về phía xa."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng khảo sát."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Đầu dưới xương cánh tay, khe khớp khuỷu, cùng với đầu trên xương quay và xương trụ được bộc lộ rõ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của cánh tay phải thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Không bị xoay, thể hiện qua hình ảnh hai lồi cầu được bộc lộ ở góc nhìn nghiêng (profile) và chỏm, cổ, lồi củ xương quay tách rời hoặc chỉ bị xương trụ chồng lên một chút.",
        "Mỏm khuỷu phải nằm lọt trong hố mỏm khuỷu khi cánh tay duỗi hoàn toàn.",
        "Khe khớp khuỷu mở rộng khi cánh tay duỗi hoàn toàn và định tâm tia trung tâm chính xác.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở giữa khớp khuỷu."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-khuyu-truocsau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-khuyu-truocsau-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-khuyu-truocsau-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-khuyu-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang khuỷu tay tư thế nghiêng",
    tuKhoa: ["khuyu tay nghieng", "elbow lateral", "mom khuyu", "dem mo", "chi tren"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương và trật khớp khuỷu tay.",
        "Một số quá trình bệnh lý về xương nhất định, chẳng hạn như viêm tủy xương và viêm khớp.",
        "Có thể quan sát thấy sự nâng lên hoặc di lệch của các đệm mỡ khớp khuỷu."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân ngồi ở cuối bàn chụp, khuỷu tay gập 90°."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh trục dọc của cẳng tay thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Chỉnh tâm khớp khuỷu vào tia trung tâm và vào giữa tấm nhận ảnh.",
        "Hạ thấp vai sao cho xương cánh tay và cẳng tay nằm trên cùng một mặt phẳng ngang.",
        "Xoay bàn tay và cổ tay vào tư thế nghiêng hoàn toàn, ngón cái hướng lên trên.",
        "Đặt vật hỗ trợ dưới bàn tay và cổ tay để nâng cao bàn tay và đầu dưới cẳng tay nếu cần đối với trường hợp cẳng tay to nhiều cơ bắp, sao cho cẳng tay song song với tấm nhận ảnh để có được tư thế nghiêng hoàn toàn của khuỷu tay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào giữa khớp khuỷu (một điểm cách mặt sau của mỏm khuỷu có thể sờ thấy dễ dàng khoảng 4 cm [1½ inches] về phía trong)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng khảo sát."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hướng chiếu nghiêng của đầu dưới xương cánh tay và đầu trên cẳng tay, mỏm khuỷu, và có thể nhìn thấy các mô mềm cũng như đệm mỡ của khớp khuỷu."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của cẳng tay phải thẳng hàng với trục dọc của tấm nhận ảnh, với khớp khuỷu gập 90°.",
        "Khoảng một nửa chỏm xương quay bị chồng lấp bởi mỏm vẹt, và mỏm khuỷu phải được bộc lộ ở góc nhìn nghiêng.",
        "Hướng chiếu nghiêng hoàn toàn được thể hiện qua ba vòng cung đồng tâm của rãnh ròng rọc, các gờ đôi của chỏm con và ròng rọc, và khuyết ròng rọc của xương trụ. Ngoài ra, có sự chồng khít của các lồi cầu xương cánh tay.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở trung điểm của khớp khuỷu."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-khuyu-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-khuyu-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-khuyu-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },
  {
    id: "xq-canhtay-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cánh tay tư thế trước sau",
    tuKhoa: ["canh tay", "humerus ap", "xuong canh tay", "chi tren", "truoc sau"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "48 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không cố gắng xoay cánh tay nếu nghi ngờ có gãy xương hoặc trật khớp."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương và trật khớp xương cánh tay.",
        "Các quá trình bệnh lý bao gồm loãng xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế đứng hoặc nằm ngửa. Điều chỉnh chiều cao của cassette sao cho khớp vai và khớp khuỷu cách đều hai đầu của tấm nhận ảnh."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Xoay cơ thể bệnh nhân về phía bên tổn thương khi cần thiết để đưa vai và phần gần xương cánh tay tiếp xúc với cassette.",
        "Chỉnh xương cánh tay thẳng hàng với trục dọc của tấm nhận ảnh, trừ khi cần đặt chéo phim để lấy được cả khớp vai và khớp khuỷu.",
        "Duỗi bàn tay và cẳng tay hết mức bệnh nhân có thể chịu đựng được.",
        "Dạng cánh tay ra một chút và nhẹ nhàng ngửa bàn tay sao cho hai lồi cầu của khuỷu tay song song và cách đều tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm giữa của xương cánh tay."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở các cạnh bên vào giới hạn bờ mô mềm của xương cánh tay và vai. (Bờ dưới của trường khu trú nên bao gồm khớp khuỷu và tối thiểu khoảng 2.5 cm đầu trên cẳng tay."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hướng chiếu AP bộc lộ toàn bộ xương cánh tay, bao gồm cả khớp vai và khớp khuỷu."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của xương cánh tay phải thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Hướng chiếu AP thực sự được thể hiện ở phần gần xương cánh tay qua các điểm sau: củ lớn (greater tubercle) được bộc lộ rõ ở mặt ngoài; chỏm xương cánh tay (humeral head) nhìn thấy một phần ở mặt trong, với sự chồng lấp tối thiểu lên ổ chảo (glenoid cavity).",
        "Phần xa xương cánh tay: cả lồi cầu ngoài và lồi cầu trong đều được bộc lộ rõ (in profile).",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-canhtay-truocsau-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-canhtay-truocsau-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-canhtay-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang cánh tay tư thế nghiêng",
    tuKhoa: ["canh tay nghieng", "humerus lateral", "xuong canh tay", "chi tren"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "48 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không cố gắng xoay cánh tay nếu nghi ngờ có gãy xương hoặc trật khớp (Hướng chiếu nghiêng xoay — Hướng chiếu ngoài trong hoặc trong ngoài: Xương cánh tay). Không cố gắng xoay cánh tay nếu nghi ngờ có gãy xương hoặc trật khớp."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương và trật khớp xương cánh tay.",
        "Các quá trình bệnh lý bao gồm loãng xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân và vùng chụp", items: [
        "Đặt bệnh nhân ở tư thế đứng hoặc nằm ngửa cho hướng chiếu ngoài trong hoặc trong ngoài.",
        "Ngoài trong: Đặt bệnh nhân đứng với lưng tựa vào tấm nhận ảnh và khuỷu tay hơi gập, xoay cơ thể về phía bên tổn thương khi cần thiết để đưa xương cánh tay và vai tiếp xúc với cassette. Xoay cánh tay vào trong theo yêu cầu để đạt được tư thế nghiêng; hai lồi cầu vuông góc với tấm nhận ảnh.",
        "Trong ngoài: Cho bệnh nhân quay mặt về phía tấm nhận ảnh và xoay chếch cơ thể nếu cần (20° đến 30° so với tư thế PA) để xương cánh tay tiếp xúc sát với tấm nhận ảnh; gập khuỷu tay 90° như hình minh họa.",
        "Điều chỉnh chiều cao của cassette sao cho khớp vai và khớp khuỷu cách đều hai đầu của cassette."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm giữa của xương cánh tay."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào giới hạn bờ mô mềm của xương cánh tay, đảm bảo bao gồm toàn bộ khớp vai và khớp khuỷu."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hướng chiếu nghiêng của toàn bộ xương cánh tay, bao gồm cả khớp khuỷu và khớp vai, được bộc lộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Tư thế nghiêng thực sự được thể hiện qua các điểm sau: hai lồi cầu hoàn toàn chồng khít lên nhau; củ bé được bộc lộ rõ ở mặt trong, bị phần dưới của ổ chảo chồng lấp một phần.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-canhtay-nghieng-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-canhtay-nghieng-phim.jpg", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },
  {
    id: "xq-vai-truocsau-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang khớp vai tư thế trước sau (thẳng)",
    tuKhoa: ["khop vai", "vai thang", "ap shoulder", "truoc sau", "o chao canh tay"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương hoặc trật khớp phần gần (đầu trên) xương cánh tay và đai vai.",
        "Lắng đọng canxi trong cơ, gân, hoặc các cấu trúc bao hoạt dịch.",
        "Các tình trạng thoái hóa bao gồm loãng xương và thoái hóa khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Thực hiện chụp phim với bệnh nhân ở tư thế đứng hoặc nằm ngửa. (Tư thế đứng thường ít gây đau đớn hơn cho bệnh nhân, nếu tình trạng cho phép).",
        "Xoay nhẹ cơ thể về phía bên tổn thương nếu cần thiết để đặt vai tiếp xúc sát với tấm nhận ảnh hoặc mặt bàn."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tư thế bệnh nhân để đưa khớp vai (khớp ổ chảo - cánh tay) vào giữa tấm nhận ảnh.",
        "Dạng nhẹ cánh tay đang duỗi thẳng; xoay ngoài cánh tay (ngửa bàn tay) cho đến khi hai lồi cầu của đầu dưới xương cánh tay song song với tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm dưới mỏm quạ 2.5 cm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh, với bờ trên và bờ ngoài điều chỉnh theo giới hạn các mô mềm."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hướng chiếu AP bộc lộ phần gần xương cánh tay, hai phần ba ngoài của xương đòn và phần trên xương bả vai, bao gồm cả mối liên quan giữa chỏm xương cánh tay và ổ chảo."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Sự xoay ngoài hoàn toàn được thể hiện qua hình ảnh củ lớn được bộc lộ rõ ở mặt ngoài của phần gần xương cánh tay.",
        "Củ bé bị chồng lấp lên chỏm xương cánh tay.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-vai-truocsau-thang-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-vai-truocsau-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-vai-truocsau-thang-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-vai-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang khớp vai tư thế nghiêng",
    tuKhoa: ["khop vai nghieng", "vai nghieng", "lateral shoulder", "xoay trong", "o chao canh tay"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không cố gắng xoay cánh tay nếu nghi ngờ có gãy xương hoặc trật khớp."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương hoặc trật khớp phần gần (đầu trên) xương cánh tay và đai vai.",
        "Lắng đọng canxi trong cơ, gân, hoặc các cấu trúc bao hoạt dịch.",
        "Các tình trạng thoái hóa bao gồm loãng xương và thoái hóa khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Thực hiện chụp phim với bệnh nhân ở tư thế đứng hoặc nằm ngửa. (Tư thế đứng thường ít gây đau đớn hơn cho bệnh nhân, nếu tình trạng cho phép).",
        "Xoay nhẹ cơ thể về phía bên tổn thương, nếu cần thiết, để đặt vai tiếp xúc sát với tấm nhận ảnh hoặc mặt bàn."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tư thế bệnh nhân để đưa khớp vai (khớp ổ chảo - cánh tay) vào giữa tấm nhận ảnh.",
        "Dạng nhẹ cánh tay đang duỗi thẳng; xoay trong cánh tay (sấp bàn tay) cho đến khi hai lồi cầu của đầu dưới xương cánh tay vuông góc với tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm dưới mỏm quạ 2.5 cm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh, với bờ ngoài và bờ trên điều chỉnh theo giới hạn các mô mềm."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hướng chiếu nghiêng của phần gần xương cánh tay, hai phần ba ngoài của xương đòn và phần trên xương bả vai được bộc lộ, bao gồm cả mối liên quan giữa chỏm xương cánh tay và ổ chảo."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Tư thế xoay trong hoàn toàn được thể hiện qua hình ảnh củ bé được bộc lộ rõ ở mặt trong của chỏm xương cánh tay.",
        "Đường viền của củ lớn phải được nhìn thấy chồng lên chỏm xương cánh tay.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-vai-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-vai-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-vai-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-vai-y-view",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang khớp vai tư thế nghiêng Y (scapular Y)",
    tuKhoa: ["vai y view", "scapular y", "trat khop vai", "nghieng ba vai", "mom qua"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Y view" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không cố gắng xoay cánh tay nếu nghi ngờ có gãy xương hoặc trật khớp."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương hoặc trật khớp phần gần (đầu trên) xương cánh tay và xương bả vai.",
        "Chỏm xương cánh tay được bộc lộ nằm dưới mỏm quạ trong trường hợp trật khớp ra trước; đối với trường hợp ít phổ biến hơn là trật khớp ra sau, chỏm xương cánh tay được bộc lộ nằm dưới mỏm cùng vai.",
        "Hướng chiếu xuất sắc để bộc lộ rõ góc nhìn nghiêng của mỏm quạ và gai xương bả vai."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Thực hiện chụp phim với bệnh nhân ở tư thế đứng hoặc nằm. (Tư thế đứng thường ít gây đau đớn hơn cho bệnh nhân)."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Xoay bệnh nhân vào tư thế chếch trước giống như chụp nghiêng xương bả vai với bệnh nhân quay mặt vào tấm nhận ảnh. Sờ góc trên của xương bả vai và khớp cùng vai - đòn. Xoay bệnh nhân cho đến khi một đường thẳng tưởng tượng nối hai điểm này vuông góc với tấm nhận ảnh. Do sự khác biệt giữa các bệnh nhân, độ xoay chếch của cơ thể có thể dao động từ 45° đến 60°. Chỉnh tâm khớp ổ chảo - cánh tay (khớp vai) vào tia trung tâm và vào giữa tấm nhận ảnh.",
        "Dạng nhẹ cánh tay nếu có thể để không làm chồng lấp phần gần xương cánh tay lên các xương sườn; không cố gắng xoay cánh tay."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào khớp ổ chảo - cánh tay (khớp vai) (dưới đỉnh vai khoảng 5 hoặc 6 cm)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng khảo sát."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hướng chiếu nghiêng thực sự của xương bả vai, phần gần xương cánh tay và khớp ổ chảo - cánh tay."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Thân mỏng của xương bả vai phải được nhìn thấy ở dạng đường thẳng (on end) mà không bị các xương sườn chồng lên.",
        "Mỏm cùng vai và mỏm quạ phải xuất hiện dưới dạng hai nhánh trên gần như đối xứng của chữ \"Y\".",
        "Chỏm xương cánh tay phải xuất hiện chồng lên gốc của chữ \"Y\" nếu xương cánh tay không bị trật khớp.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-vai-y-view-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-vai-y-view-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-vai-y-view-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" },
      { src: "images/xq/xq-vai-y-view-phim3.png", caption: "Phim đạt yêu cầu (3)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-xuong-don",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang xương đòn tư thế thẳng, chếch",
    tuKhoa: ["xuong don", "clavicle", "gay xuong don", "ap axial", "khop cung don"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng, chếch" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy hoặc trật khớp xương đòn.",
        "Quy trình thường quy của khoa thường bao gồm cả hướng chiếu thẳng và chếch."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Thực hiện chụp phim với bệnh nhân ở tư thế đứng hoặc nằm ngửa, hai cánh tay để dọc theo thân người, nâng cằm và nhìn thẳng về phía trước. Mặt sau của vai phải tiếp xúc sát với tấm nhận ảnh hoặc mặt bàn, không xoay cơ thể."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tâm xương đòn và tấm nhận ảnh vào tia trung tâm. (Có thể dễ dàng sờ thấy xương đòn với đầu trong ở khuyết tĩnh mạch cảnh và đầu ngoài ở khớp cùng đòn phía trên vai)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "AP: Tia trung tâm chiếu vuông góc với điểm giữa xương đòn.",
        "AP theo trục: Tia trung tâm chếch lên phía đầu (cephalad) từ 15° đến 30° hướng vào điểm giữa xương đòn."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào vùng xương đòn. (Đảm bảo bao gồm cả khớp cùng đòn và khớp ức đòn)."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ xương đòn được bộc lộ, bao gồm cả khớp cùng đòn, khớp ức đòn và mỏm cùng vai."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Xương đòn được bộc lộ mà không bị biến dạng thu ngắn. Điểm giữa xương đòn chồng lên góc trên xương bả vai. Phải nhìn thấy các bờ của trường khu trú."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-xuong-don-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-xuong-don-ct2.png", caption: "Chiều thế (2)" },
      { src: "images/xq/xq-xuong-don-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },

  {
    id: "xq-xuong-ba-vai",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi trên",
    ten: "Chụp X-quang xương bả vai",
    tuKhoa: ["xuong ba vai", "scapula", "gay xuong ba vai", "nghieng ba vai"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương bả vai."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Thực hiện chụp với bệnh nhân nằm ngửa, đặt cánh tay bên tổn thương vắt ngang qua ngực.",
        "Sờ khớp cùng đòn và bờ trên của xương bả vai, sau đó xoay bệnh nhân cho đến khi đường thẳng tưởng tượng nối hai điểm này vuông góc với tấm nhận ảnh; động tác này sẽ nâng vai bên tổn thương lên cho đến khi thân xương bả vai ở tư thế nghiêng hoàn toàn.",
        "Gập đầu gối bên tổn thương để giúp bệnh nhân duy trì tư thế cơ thể nằm chếch này."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Sờ các bờ của xương bả vai bằng cách dùng ngón tay và ngón cái nắm lấy bờ trong và bờ ngoài của thân xương bả vai.",
        "Cẩn thận điều chỉnh độ xoay của cơ thể khi cần thiết để đưa mặt phẳng của thân xương bả vai vuông góc với tấm nhận ảnh.",
        "Chỉnh bệnh nhân trên mặt bàn sao cho tâm của bờ ngoài (nách) xương bả vai nằm ở trung tâm tia trung tâm và tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm hướng vào điểm giữa của bờ ngoài xương bả vai."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia sát vào vùng xương bả vai."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ xương bả vai phải được bộc lộ ở tư thế nghiêng."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Tư thế nghiêng thực sự được thể hiện qua sự chồng khít trực tiếp của bờ trong (bờ sống) và bờ ngoài.",
        "Thân xương bả vai phải được nhìn thấy ở dạng góc nhìn nghiêng không bị các xương sườn chồng lấp.",
        "Càng nhiều càng tốt, xương cánh tay không được chồng lên vùng khảo sát của xương bả vai.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-xuong-ba-vai-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-xuong-ba-vai-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương I: Kỹ thuật chụp chi trên"
  },
  /* ------------------------------------------------- X-QUANG CHI DƯỚI --- */
  {
    id: "xq-banchan-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang bàn chân tư thế trước sau",
    tuKhoa: ["ban chan truoc sau", "ban chan ap", "xuong ban chan", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Vị trí và mức độ gãy xương, sự thẳng trục của các mảnh gãy, các bất thường ở khe khớp, tràn dịch mô mềm.",
        "Vị trí của các dị vật cản quang."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân nằm ngửa; kê gối dưới đầu bệnh nhân; gập đầu gối và đặt mặt lòng bàn chân (gan bàn chân) của chân cần chụp áp sát và bằng phẳng lên tấm nhận ảnh."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Duỗi (gập về phía lòng bàn chân) bàn chân nhưng vẫn giữ mặt lòng bàn chân áp sát và vững chắc trên tấm nhận ảnh.",
        "Chỉnh trục dọc của bàn chân thẳng hàng và vào tâm tia trung tâm (CR) cũng như trục dọc của phần tấm nhận ảnh đang được phơi nhiễm. (Sử dụng bao cát nếu cần để tránh tấm nhận ảnh bị trượt trên mặt bàn).",
        "Nếu cần cố định, hãy gập cả đầu gối bên đối diện và tựa vào đầu gối bên tổn thương để hỗ trợ."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Góc tia trung tâm chếch 10° về phía sau (hướng về phía gót chân) sao cho tia trung tâm vuông góc với các xương bàn chân.",
        "Hướng tia trung tâm vào nền xương bàn chân thứ ba."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào các bờ ngoài của bàn chân."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ bàn chân phải được bộc lộ, bao gồm tất cả các xương đốt ngón, các xương bàn chân và xương ghe, các xương chêm, cùng với xương hộp."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của bàn chân phải thẳng hàng với trục dọc của phần tấm nhận ảnh được phơi nhiễm.",
        "Không bị xoay, thể hiện qua khoảng cách gần như bằng nhau giữa các xương bàn chân từ thứ hai đến thứ năm. Nền của xương bàn chân thứ nhất và thứ hai thường tách rời nhau, nhưng nền của xương bàn chân từ thứ hai đến thứ năm có vẻ chồng lấp lên nhau.",
        "Khe khớp giữa xương chêm thứ nhất và thứ hai phải được bộc lộ.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-banchan-truocsau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-banchan-truocsau-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-banchan-truocsau-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },

  {
    id: "xq-banchan-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang bàn chân tư thế nghiêng",
    tuKhoa: ["ban chan nghieng", "ban chan lateral", "xuong ban chan", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Vị trí và mức độ gãy xương, sự thẳng trục của các mảnh gãy, các bất thường ở khe khớp, tràn dịch mô mềm.",
        "Vị trí của các dị vật cản quang."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế nằm nghiêng; kê gối dưới đầu bệnh nhân."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Gập đầu gối bên chân tổn thương khoảng 45°; đặt chân đối diện ra phía sau chân bị thương để tránh xoay quá mức chân tổn thương.",
        "Cẩn thận gập mu bàn chân nếu có thể để hỗ trợ định vị tư thế nghiêng thực sự cho bàn chân và cổ chân.",
        "Đặt vật hỗ trợ dưới cẳng chân và đầu gối nếu cần sao cho mặt lòng bàn chân vuông góc với tấm nhận ảnh. Không xoay bàn chân quá mức.",
        "Chỉnh trục dọc của bàn chân thẳng hàng với trục dọc của tấm nhận ảnh (trừ khi cần đặt chéo phim để lấy được toàn bộ bàn chân).",
        "Chỉnh vùng giữa nền các xương bàn chân vào trung tâm tia trung tâm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào xương chêm trong (ngang mức nền xương bàn chân thứ ba)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào các bờ ngoài da của bàn chân, bao gồm khoảng 2 đến 3 cm về phía gần (phía trên) khớp cổ chân."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ bàn chân phải được bộc lộ, với tối thiểu 2.5 cm phần xa của xương chày - xương mác.",
        "Các xương bàn chân gần như chồng lấp lên nhau, chỉ có lồi củ xương bàn chân thứ năm được nhìn thấy ở góc nhìn nghiêng."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của bàn chân phải thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Tư thế nghiêng thực sự đạt được khi khớp chày - sên (tibiotalar joint) mở rộng, phần xa xương mác bị chồng lấp bởi phần sau xương chày, và phần xa các xương bàn chân chồng lên nhau.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-banchan-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-banchan-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-banchan-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },

  {
    id: "xq-banchan-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang bàn chân tư thế chếch",
    tuKhoa: ["ban chan chech", "ban chan oblique", "xoang co chan", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch" },
      { ten: "kV / mAs", giaTri: "44 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Vị trí và mức độ gãy xương, sự thẳng trục của các mảnh gãy, các bất thường ở khe khớp, tràn dịch mô mềm.",
        "Vị trí của các dị vật cản quang."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân nằm ngửa hoặc ngồi; gập đầu gối, đặt mặt lòng bàn chân lên bàn; xoay cơ thể hơi xa khỏi bên cần chụp."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh trục dọc của bàn chân thẳng hàng với trục dọc của tấm nhận ảnh và tia trung tâm.",
        "Xoay bàn chân vào trong để đặt mặt lòng bàn chân tạo một góc từ 30° đến 40° so với mặt phẳng của tấm nhận ảnh. Mặt phẳng chung của mu bàn chân phải song song với tấm nhận ảnh và vuông góc với tia trung tâm.",
        "Sử dụng khối hỗ trợ thấu quang 45° để chống cử động. Sử dụng bao cát nếu cần thiết để tránh tấm nhận ảnh bị trượt trên mặt bàn."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào nền xương bàn chân thứ ba."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào các bờ ngoài của bàn chân."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ bàn chân phải được bộc lộ, từ các đốt ngón xa đến phần sau xương gót và phần gần xương sên."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của bàn chân phải thẳng hàng với trục dọc của tấm nhận ảnh.",
        "Độ chếch chính xác được thể hiện khi các xương bàn chân từ thứ ba đến thứ năm không bị chồng lấp. Xương bàn chân thứ nhất và thứ hai cũng phải không bị chồng lấp ngoại trừ vùng nền xương.",
        "Lồi củ ở nền xương bàn chân thứ năm được nhìn thấy ở góc nhìn nghiêng (profile) và được bộc lộ rõ.",
        "Các khe khớp xung quanh xương hộp và xoang cổ chân (sinus tarsi) mở rộng và được bộc lộ tốt khi bàn chân được đặt ở tư thế chếch chính xác.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-banchan-chech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-banchan-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-banchan-chech-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },

  {
    id: "xq-got-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương gót hướng chiếu lòng - mu bàn chân (axial)",
    tuKhoa: ["xuong got axial", "calcaneus", "got chan long mu", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng (lòng - mu)" },
      { ten: "kV / mAs", giaTri: "54 kVp · 5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý hoặc gãy xương có di lệch vào trong hoặc ra ngoài."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa hoặc ngồi trên bàn với chân duỗi thẳng hoàn toàn."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tâm và trục khớp cổ chân thẳng hàng với tia trung tâm và phần tấm nhận ảnh đang được phơi nhiễm.",
        "Gập mu bàn chân sao cho mặt lòng bàn chân gần như vuông góc với tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Hướng tia trung tâm vào nền xương bàn chân thứ ba để tia đi ra ở một mức ngay phía dưới mắt cá ngoài.",
        "Góc tia trung tâm chếch lên phía đầu 40° so với trục dọc của bàn chân (góc này cũng sẽ là 40° so với phương thẳng đứng nếu trục dọc của bàn chân vuông góc với tấm nhận ảnh)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia sát vào vùng xương gót."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ xương gót phải được bộc lộ từ lồi củ xương gót ở phía sau đến khớp sên - gót ở phía trước."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không bị xoay; một phần của mỏm chân đế xương sên phải được bộc lộ rõ ở mặt trong.",
        "Với bàn chân được gập 90° thích hợp, sự căn chỉnh và góc tia trung tâm chính xác được thể hiện qua khe khớp sên - gót mở rộng, lồi củ xương gót không bị biến dạng và xương gót được kéo dài đầy đủ.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-got-truocsau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-got-truocsau-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-got-truocsau-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },

  {
    id: "xq-got-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương gót tư thế nghiêng",
    tuKhoa: ["xuong got nghieng", "calcaneus lateral", "got chan", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "54 kVp · 5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các tổn thương xương liên quan đến xương gót, xương sên và khớp sên - gót.",
        "Bộc lộ mức độ và sự thẳng trục của các mảnh gãy."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm nghiêng, bên tổn thương nằm dưới. Kê gối dưới đầu bệnh nhân. Gập đầu gối bên chân tổn thương khoảng 45°; đặt chân đối diện ra phía sau chân bị thương."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tâm xương gót vào tia trung tâm và vào phần không bị che của tấm nhận ảnh, với trục dọc của bàn chân song song với mặt phẳng tấm nhận ảnh.",
        "Đặt vật hỗ trợ dưới đầu gối và cẳng chân nếu cần để đặt mặt lòng bàn chân vuông góc với tấm nhận ảnh.",
        "Đặt cổ chân và bàn chân ở tư thế nghiêng thực sự, tư thế này đặt mắt cá ngoài nằm phía sau mắt cá trong khoảng 1 cm.",
        "Gập mu bàn chân sao cho mặt lòng bàn chân tạo thành góc vuông với cẳng chân."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào một điểm cách mắt cá trong 2.5 cm về phía dưới."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào các bờ ngoài da để bao gồm khớp cổ chân ở phía trên và toàn bộ xương gót."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Bộc lộ rõ góc nhìn nghiêng của xương gót với xương sên và phần dưới của chày - mác ở phía trên, xương ghe ở phía trước, cùng với khe khớp sên - gót và khe khớp gót - hộp mở rộng."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không bị xoay, thể hiện qua sự chồng khít của các phần trên xương sên, khe khớp sên - gót mở rộng, và mắt cá ngoài chồng lên phần sau của xương chày và xương sên.",
        "Xoang cổ chân và khe khớp gót - hộp phải mở rộng.",
        "Việc khu trú bốn cạnh phải bao gồm khớp cổ chân ở phía gần (phía trên) cùng với khớp sên - ghe và nền xương bàn chân thứ năm ở phía trước."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-got-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-got-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-got-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },
  {
    id: "xq-cochan-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang cổ chân tư thế trước sau",
    tuKhoa: ["co chan", "ankle ap", "truoc sau", "mat ca", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "48 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các tổn thương xương hoặc bệnh lý liên quan đến khớp cổ chân, đầu dưới xương chày và xương mác, phần gần xương sên và phần gần xương bàn chân thứ năm."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa; kê gối dưới đầu bệnh nhân; hai chân phải duỗi thẳng hoàn toàn."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tâm và trục của khớp cổ chân thẳng hàng với tia trung tâm và trục dọc của phần tấm nhận ảnh đang được phơi nhiễm.",
        "Không ép gập mu bàn chân một cách cưỡng bức; để bàn chân ở tư thế tự nhiên.",
        "Điều chỉnh bàn chân và cổ chân để có hướng chiếu AP thực sự. Đảm bảo toàn bộ cẳng chân không bị xoay. Đường nối hai mắt cá không được song song với tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm giữa hai mắt cá chân."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào các bờ ngoài da; bao gồm một nửa gần của các xương bàn chân và phần xa của xương chày - xương mác."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Một phần ba dưới xương chày - xương mác, mắt cá ngoài và mắt cá trong, xương sên và nửa gần của các xương bàn chân phải được bộc lộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Trục dọc của cẳng chân phải thẳng hàng với trường khu trú và tấm nhận ảnh.",
        "Không bị xoay nếu phần trong của khớp gọng kìm mở và phần ngoài đóng.",
        "Có sự chồng lấp một phần của đầu dưới xương chày và xương sên lên đầu dưới xương mác.",
        "Trường khu trú bốn cạnh phải bao gồm từ 1/3 dưới cẳng chân đến nửa gần của các xương bàn chân. Tất cả các mô mềm xung quanh cũng phải được bao gồm."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cochan-truocsau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cochan-truocsau-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cochan-truocsau-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },

  {
    id: "xq-cochan-chech",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang cổ chân tư thế chếch",
    tuKhoa: ["co chan chech", "ankle oblique", "gong kim", "mortise", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Chếch" },
      { ten: "kV / mAs", giaTri: "48 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Đánh giá các bệnh lý liên quan đến toàn bộ gọng kìm cổ chân và phần gần xương bàn chân thứ năm, một vị trí thường bị gãy."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa; kê gối dưới đầu bệnh nhân; hai chân phải duỗi thẳng hoàn toàn."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tâm và trục của khớp cổ chân thẳng hàng với tia trung tâm và trục dọc của phần tấm nhận ảnh đang được phơi nhiễm.",
        "Không ép gập mu bàn chân; để bàn chân ở tư thế duỗi tự nhiên (cho phép quan sát được nền xương bàn chân thứ năm, một vị trí gãy xương phổ biến).",
        "Xoay trong toàn bộ cẳng chân và bàn chân khoảng 15° đến 20° cho đến khi đường nối hai mắt cá song song với tấm nhận ảnh.",
        "Đặt vật hỗ trợ áp vào bàn chân nếu cần để chống cử động."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm giữa hai mắt cá."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào các bờ ngoài da; bao gồm một nửa gần của các xương bàn chân và phần xa của xương chày - xương mác."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Một phần ba dưới xương chày và xương mác, trần chày bao gồm cả đầu xương nếu có, mắt cá ngoài và mắt cá trong, xương sên, và nửa gần của các xương bàn chân phải được bộc lộ.",
        "Toàn bộ khớp gọng kìm cổ chân phải mở và được bộc lộ rõ (khe hở từ 3 đến 4 mm trên toàn bộ mặt xương sên là bình thường; rộng thêm 2 mm là bất thường)."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Độ chếch thích hợp đối với khớp gọng kìm được thể hiện qua việc bộc lộ khớp gọng kìm mở ở cả mặt ngoài và mặt trong cùng với các mắt cá được bộc lộ rõ.",
        "Chỉ có một chút chồng lấp tối thiểu tại khớp chày - mác dưới.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cochan-chech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cochan-chech-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cochan-chech-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },

  {
    id: "xq-cochan-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang cổ chân tư thế nghiêng",
    tuKhoa: ["co chan nghieng", "ankle lateral", "xuong sen", "xuong got", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "48 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Hướng chiếu này hữu ích trong việc đánh giá gãy xương, trật khớp và tràn dịch khớp liên quan đến các bệnh lý khớp khác."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm nghiêng, bên tổn thương nằm dưới; kê gối dưới đầu bệnh nhân; gập đầu gối bên chân tổn thương khoảng 45°; đặt chân đối diện ra phía sau chân bị thương để tránh xoay quá mức."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tâm và trục khớp cổ chân thẳng hàng với tia trung tâm và trục dọc của phần tấm nhận ảnh đang được phơi nhiễm.",
        "Đặt vật hỗ trợ dưới đầu gối khi cần thiết để đặt cẳng chân và bàn chân ở tư thế nghiêng thực sự.",
        "Gập mu bàn chân sao cho mặt lòng bàn chân tạo thành góc vuông với cẳng chân hoặc gập hết mức bệnh nhân có thể chịu đựng được; không dùng lực cưỡng ép. (Điều này giúp duy trì tư thế nghiêng thực sự)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào mắt cá trong."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia bao gồm từ phần xa (đầu dưới) xương chày và xương mác đến vùng giữa các xương bàn chân."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Một phần ba dưới xương chày và xương mác với phần xa xương mác bị chồng lấp lên bởi phần xa xương chày, xương sên và xương gót bộc lộ ở góc nhìn nghiêng.",
        "Lồi củ xương bàn chân thứ năm, xương ghe và xương hộp cũng được quan sát thấy."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không bị xoay, thể hiện qua việc đầu dưới xương mác chồng lên nửa sau của xương chày.",
        "Khớp chày - sên mở rộng với khe khớp đồng đều.",
        "Trường khu trú phải bao gồm 1/3 dưới cẳng chân, xương gót, lồi củ xương bàn chân thứ năm và các cấu trúc mô mềm xung quanh.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cochan-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cochan-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cochan-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },
  {
    id: "xq-cangchan-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang cẳng chân tư thế trước sau",
    tuKhoa: ["cang chan", "tibia fibula ap", "xuong chay", "xuong mac", "truoc sau"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các bệnh lý liên quan đến gãy xương, dị vật, hoặc tổn thương xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa; kê gối dưới đầu bệnh nhân; chân phải duỗi thẳng hoàn toàn."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Điều chỉnh khung chậu, đầu gối và cẳng chân vào tư thế AP thực sự mà không bị xoay.",
        "Đặt bao cát sát vào bàn chân nếu cần để cố định, và gập mu bàn chân 90° so với cẳng chân nếu có thể.",
        "Đảm bảo rằng cả khớp cổ chân và khớp gối cách các đầu mép của tấm nhận ảnh từ 3 đến 5 cm.",
        "Nếu chi quá dài, đặt cẳng chân theo đường chéo (từ góc này sang góc kia) trên một tấm nhận ảnh 35 x 43 cm để đảm bảo bao gồm cả hai khớp."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm giữa của cẳng chân."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả hai bên dọc theo bờ ngoài da, với khu trú toàn phần ở hai đầu tấm nhận ảnh để bao gồm tối đa các khớp gối và cổ chân."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ xương chày và xương mác, bao gồm cả khớp cổ chân và khớp gối, phải có trên phim chụp này (hoặc hai phim nếu cần)."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không bị xoay, thể hiện qua hình ảnh các lồi cầu xương đùi và lồi cầu xương chày được bộc lộ rõ với lồi củ gian lồi cầu nằm ở giữa hố gian lồi cầu.",
        "Có sự chồng lấp một phần của xương mác và xương chày ở cả hai đầu trên và dưới.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cangchan-truocsau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cangchan-truocsau-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-cangchan-truocsau-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },
  {
    id: "xq-cangchan-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang cẳng chân tư thế nghiêng",
    tuKhoa: ["cang chan nghieng", "tibia fibula lateral", "xuong chay", "xuong mac", "nghieng"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Xác định vị trí các tổn thương và dị vật cũng như đánh giá mức độ.",
        "Bộc lộ sự thẳng trục của các mảnh gãy."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế nằm nghiêng, bên tổn thương nằm dưới; chân đối diện có thể đặt ra phía sau chân bị thương và được hỗ trợ bằng gối hoặc bao cát."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Đảm bảo cẳng chân ở tư thế nghiêng thực sự. (Mặt phẳng của xương bánh chè phải vuông góc với tấm nhận ảnh).",
        "Đảm bảo rằng cả khớp cổ chân và khớp gối cách các đầu mép của tấm nhận ảnh từ 3 đến 5 cm để các tia phân kỳ không đẩy khớp nào ra khỏi tấm nhận ảnh.",
        "Nếu chi quá dài, đặt cẳng chân theo đường chéo (từ góc này sang góc kia) trên một tấm nhận ảnh để đảm bảo bao gồm cả hai khớp. (Ngoài ra, nếu cần, có thể chụp thêm một phim thứ hai trên tấm nhận ảnh nhỏ hơn tập trung vào khớp gần vị trí chấn thương nhất)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm giữa của cẳng chân."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả hai bên dọc theo bờ ngoài da, với khu trú toàn phần ở hai đầu tấm nhận ảnh để bao gồm tối đa các khớp gối và cổ chân."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Toàn bộ xương chày và xương mác, bao gồm cả khớp cổ chân và khớp gối, phải có trên phim chụp này (hoặc hai phim nếu cần)."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Tư thế nghiêng thực sự của xương chày và xương mác không bị xoay sẽ bộc lộ lồi củ xương chày ở góc nhìn nghiêng, một phần chỏm trên xương mác bị chồng lấp bởi xương chày, và đường viền của đầu dưới xương mác được nhìn thấy xuyên qua nửa sau của xương chày.",
        "Các bờ sau của lồi cầu xương đùi phải xuất hiện chồng khít lên nhau.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-cangchan-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-cangchan-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },
  {
    id: "xq-goi-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp gối tư thế trước sau",
    tuKhoa: ["khop goi", "knee ap", "truoc sau", "mam chay", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương, tổn thương hoặc các thay đổi về xương liên quan đến bệnh lý thoái hóa khớp ảnh hưởng đến đầu dưới xương đùi, đầu trên xương chày và xương mác, xương bánh chè và khớp gối.",
        "Bộc lộ sự thẳng trục của các mảnh gãy."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa, không xoay khung chậu; kê gối dưới đầu bệnh nhân; chân phải được duỗi thẳng hoàn toàn."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tâm và trục của cẳng chân và khớp gối thẳng hàng với tia trung tâm và đường giữa của mặt bàn hoặc tấm nhận ảnh.",
        "Xoay chân vào trong từ 3° đến 5° để có hướng chiếu AP khớp gối thực sự (hoặc cho đến khi đường nối hai lồi cầu trên song song với mặt phẳng của tấm nhận ảnh).",
        "Đặt bao cát cạnh bàn chân và cổ chân để cố định nếu cần thiết."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Chỉnh tia trung tâm song song với các diện khớp (mâm chày), tia trung tâm chiếu vuông góc với tấm nhận ảnh."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở hai bên vào các bờ ngoài da và ở hai đầu theo các bờ mép của tấm nhận ảnh."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Đầu dưới xương đùi, đầu trên xương chày và xương mác được bộc lộ.",
        "Khe khớp đùi - chày phải mở rộng, với các diện khớp của xương chày được nhìn thấy ở dạng đường thẳng và chỉ bộc lộ một diện tích bề mặt tối thiểu."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không bị xoay, thể hiện qua sự xuất hiện đối xứng của các lồi cầu xương đùi và xương chày cùng với khe khớp.",
        "Khoảng một nửa trong của chỏm xương mác bị chồng lấp bởi xương chày.",
        "Lồi củ gian lồi cầu nằm ở giữa hố gian lồi cầu.",
        "Tia trung tâm và tâm của trường khu trú phải nằm ở giữa khe khớp gối."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-goi-truocsau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-goi-truocsau-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-goi-truocsau-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },
  {
    id: "xq-goi-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp gối tư thế nghiêng",
    tuKhoa: ["khop goi nghieng", "knee lateral", "nghieng", "banh che", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương, các tổn thương và những bất thường ở khe khớp."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Tư thế này dành cho những bệnh nhân có thể gập khớp gối từ 20° đến 30°. Thực hiện chụp với bệnh nhân nằm nghiêng, bên tổn thương nằm dưới; kê gối dưới đầu bệnh nhân; đặt vật hỗ trợ dưới đầu gối của chân đối diện đặt phía sau chân đang khảo sát để tránh xoay quá mức."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Điều chỉnh độ xoay của cơ thể và cẳng chân cho đến khi khớp gối ở tư thế nghiêng thực sự (hai lồi cầu trên xương đùi chồng khít trực tiếp lên nhau và mặt phẳng xương bánh chè vuông góc với mặt phẳng tấm nhận ảnh).",
        "Gập đầu gối từ 20° đến 30° đối với hướng chiếu nằm nghiêng.",
        "Chỉnh tâm cẳng chân và khớp gối thẳng hàng với tia trung tâm và đường giữa của mặt bàn hoặc tấm nhận ảnh."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Việc gập khớp gối thêm sẽ làm căng các cơ và gân, điều này có thể che khuất những thông tin chẩn đoán quan trọng trong khe khớp. Xương bánh chè sẽ bị kéo vào rãnh gian lồi cầu, đồng thời che khuất chi tiết mô mềm từ tình trạng tràn dịch hoặc sự di lệch đệm mỡ. Việc gập gối thêm cũng có thể dẫn đến sự tách rời các mảnh vỡ trong trường hợp gãy xương bánh chè, nếu có."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Góc tia trung tâm chếch lên phía đầu từ 5° đến 7° đối với hướng chiếu nằm nghiêng.",
        "Hướng tia trung tâm vào điểm cách lồi cầu trong xương đùi 2.5 cm về phía dưới."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở hai bên vào các bờ ngoài da, khu trú toàn phần ở hai đầu theo các bờ mép của tấm nhận ảnh để bao gồm tối đa xương đùi, xương chày và xương mác."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Đầu dưới xương đùi, đầu trên xương chày và xương mác, cùng xương bánh chè được bộc lộ ở góc nhìn nghiêng.",
        "Khớp đùi - bánh chè và khớp gối phải mở rộng."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Việc xoay quá mức hoặc xoay chưa đủ có thể được xác định bằng cách nhận biết củ cơ khép trên lồi cầu trong, nếu có thể nhìn thấy, và bằng mức độ chỏm xương mác bị chồng lấp bởi xương chày (xoay quá mức thì chỏm mác ít bị chồng lấp hơn; xoay chưa đủ thì chồng lấp nhiều hơn).",
        "Tư thế nghiêng thực sự của khớp gối không bị xoay thể hiện các bờ sau của hai lồi cầu xương đùi chồng khít trực tiếp lên nhau.",
        "Xương bánh chè phải được nhìn thấy ở góc nhìn nghiêng với khe khớp đùi - bánh chè mở.",
        "Góc tia trung tâm chếch lên đầu từ 5° đến 10° sẽ dẫn đến sự chồng khít trực tiếp của các bờ dưới của các lồi cầu đùi.",
        "Khớp gối nằm ở trung tâm của trường khu trú."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-goi-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-goi-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-goi-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },
  {
    id: "xq-goi-chiuluc",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp gối tư thế trước sau hai bên chịu lực",
    tuKhoa: ["khop goi chiu luc", "knee weight bearing", "hai ben", "thoai hoa", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng chịu lực" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khe khớp đùi - chày của khớp gối được bộc lộ để khảo sát khả năng thoái hóa sụn hoặc các bệnh lý khớp gối khác.",
        "Chụp cả hai khớp gối trên cùng một lần phơi nhiễm để so sánh."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế đứng trên bục gắn liền hoặc ghế đẩu để đưa bệnh nhân lên đủ cao cho chùm tia X ngang.",
        "Đặt hai bàn chân hướng thẳng về phía trước với trọng lượng cơ thể phân bố đều trên cả hai chân; cung cấp tay vịn để bệnh nhân đứng vững."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tâm và trục của cả hai cẳng chân và khớp gối thẳng hàng với tia trung tâm và đường giữa của mặt bàn cũng như tấm nhận ảnh; chiều cao tấm nhận ảnh được điều chỉnh theo tia trung tâm."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Chỉnh tia trung tâm song song với các diện khớp (mâm chày), tia trung tâm chiếu vuông góc với tấm nhận ảnh. Tia trung tâm chiếu vuông góc với tấm nhận ảnh (bệnh nhân có kích thước trung bình), hoặc chếch về phía chân từ 5° đến 10° đối với bệnh nhân gầy, hướng vào điểm giữa hai khớp gối ở mức cách đỉnh xương bánh chè 1.25 cm về phía dưới."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia vào vùng khớp gối hai bên, bao gồm một phần đầu dưới xương đùi và đầu trên xương chày cho mục đích đánh giá sự thẳng trục."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Đầu dưới xương đùi, đầu trên xương chày, xương mác và các khe khớp đùi - chày được bộc lộ ở cả hai bên."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không bị xoay ở cả hai khớp gối, thể hiện qua sự xuất hiện đối xứng của các lồi cầu xương đùi và lồi cầu xương chày.",
        "Khoảng một nửa đầu trên xương mác bị xương chày chồng lấp lên.",
        "Trường khu trú phải được định tâm vào khe khớp gối và bao gồm đủ xương đùi cùng xương chày để xác định trục dọc của các xương dài này nhằm đánh giá sự thẳng trục."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-goi-chiuluc-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-goi-chiuluc-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },
  {
    id: "xq-goi-settegast",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp gối tư thế tiếp tuyến khảo sát xương bánh chè",
    tuKhoa: ["banh che tiep tuyen", "patella tangential", "settegast", "hughston", "sunrise", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Tiếp tuyến (bánh chè)" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không nên thực hiện việc gập gối quá mức (Phương pháp Settegast và Hobbs cải tiến) cho đến khi đã loại trừ gãy xương bánh chè bằng các hướng chiếu khác."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Bốn phương pháp bổ sung cho các hướng chiếu tiếp tuyến của xương bánh chè và khớp đùi - bánh chè được mô tả. Ưu điểm và nhược điểm của mỗi phương pháp đều được ghi nhận. Cả hai bên thường được chụp để so sánh."
      ]},
      { tieuDe: "Tư thế 1 — Hướng chiếu dưới - trên", items: [
        "Tư thế bệnh nhân và vùng chụp: Đặt bệnh nhân nằm ngửa, hai chân khép lại, đặt vật hỗ trợ đủ kích thước dưới đầu gối để gập gối 40° đến 45° (hai chân thả lỏng). Đảm bảo không xoay chân. Đặt tấm nhận ảnh nằm nghiêng, tựa lên giữa đùi, nghiêng sao cho vuông góc với tia trung tâm. Sử dụng bao cát và băng keo, hoặc các phương pháp khác để cố định tấm nhận ảnh ở vị trí này. Không khuyến cáo yêu cầu bệnh nhân ngồi dậy để giữ tấm nhận ảnh vì điều này có thể đưa vùng đầu và cổ của bệnh nhân vào đường đi của chùm tia X.",
        "Tia trung tâm: Hướng tia trung tâm từ dưới lên trên, tạo góc từ 10° đến 15° so với cẳng chân để tiếp tuyến với khớp đùi - bánh chè. Sờ các bờ của xương bánh chè để xác định góc tia trung tâm cụ thể cần thiết để đi qua khe khớp đùi - bánh chè.",
        "Ưu – nhược điểm: Ưu điểm lớn nhất là không cần thiết bị đặc biệt và bệnh nhân có tư thế khá thoải mái. Nhược điểm duy nhất là khó khăn trong việc giữ tấm nhận ảnh nếu bệnh nhân không thể hợp tác hoàn toàn."
      ]},
      { tieuDe: "Tư thế 2 — Phương pháp Hughston", items: [
        "Tư thế bệnh nhân và vùng chụp: Hướng chiếu này có thể thực hiện chụp hai bên trên một tấm nhận ảnh. Đặt bệnh nhân nằm sấp, tấm nhận ảnh đặt dưới đầu gối; từ từ gập gối 55°; yêu cầu bệnh nhân dùng băng gạc để giữ bàn chân, hoặc tựa bàn chân lên thiết bị hỗ trợ (không tựa lên hộp khu trú chùm tia).",
        "Tia trung tâm: Chỉnh tia trung tâm khoảng 15° đến 20° so với trục dọc của cẳng chân (tiếp tuyến với khớp đùi - bánh chè). Hướng tia trung tâm vào điểm giữa khớp đùi - bánh chè.",
        "Ưu – nhược điểm: Tư thế này tương đối thoải mái cho bệnh nhân, và cơ tứ đầu đùi có thể được thư giãn. Nhược điểm lớn là yêu cầu tư thế nằm sấp, gây khó khăn cho một số bệnh nhân. Ngoài ra, có thể gây biến dạng hình ảnh do việc căn chỉnh các bộ phận cơ thể khó khăn và sự vướng víu của các hộp khu trú chùm tia lớn khi chỉnh góc bóng X-quang."
      ]},
      { tieuDe: "Tư thế 3 — Phương pháp Settegast", items: [
        "Tư thế bệnh nhân và vùng chụp: Đặt bệnh nhân nằm sấp, với tấm nhận ảnh đặt dưới đầu gối; từ từ gập gối tối thiểu 90°; yêu cầu bệnh nhân giữ băng gạc hoặc băng keo để duy trì tư thế.",
        "Tia trung tâm: Hướng tia trung tâm tiếp tuyến với khe khớp đùi - bánh chè (15° đến 20° so với cẳng chân). Khoảng cách SID tối thiểu là 102 cm.",
        "Ưu – nhược điểm: Nhược điểm chính của phương pháp này là việc gập gối quá mức làm căng cơ tứ đầu đùi và kéo xương bánh chè vào rãnh gian lồi cầu, làm giảm giá trị chẩn đoán của hướng chiếu."
      ]},
      { tieuDe: "Tư thế 4 — Phương pháp Hobbs cải tiến (tiếp tuyến ngồi trên - dưới)", items: [
        "Tư thế bệnh nhân và vùng chụp: Phương pháp này có thể thực hiện chụp hai bên trên một tấm nhận ảnh. Cho bệnh nhân ngồi trên ghế, tấm nhận ảnh đặt dưới đầu gối tựa trên bục hoặc vật hỗ trợ để giúp giảm khoảng cách vật thể - phim (OID); hai đầu gối nên được gập lại với bàn chân đặt hơi lùi xuống dưới gầm ghế.",
        "Tia trung tâm: Chỉnh tia trung tâm vuông góc với tấm nhận ảnh (tiếp tuyến với khớp đùi - bánh chè). Hướng tia trung tâm vào điểm giữa khớp đùi - bánh chè. Khoảng cách SID tối thiểu là 123 đến 128 cm để giảm độ phóng đại do OID tăng.",
        "Ưu – nhược điểm: Ưu điểm chính là bệnh nhân có thể được khám trong khi ngồi trên ghế, tư thế này cũng ít đòi hỏi phải điều chỉnh bóng X-quang. Nhược điểm chính là đòi hỏi phải gập đầu gối quá mức."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-goi-settegast-ct.png", caption: "Chiều thế — Tư thế 1 (dưới - trên)" },
      { src: "images/xq/xq-goi-settegast-ct2.png", caption: "Chiều thế — Tư thế 2 (Hughston)" },
      { src: "images/xq/xq-goi-settegast-ct3.png", caption: "Chiều thế — Tư thế 3 (Settegast)" },
      { src: "images/xq/xq-goi-settegast-ct4.png", caption: "Chiều thế — Tư thế 4 (Hobbs)" },
      { src: "images/xq/xq-goi-settegast-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-goi-settegast-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Chương II: Kỹ thuật chụp chi dưới"
  },

  {
    id: "xq-dui-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương đùi tư thế trước sau (phần giữa và phần xa)",
    tuKhoa: ["dui", "xuong dui", "femur ap", "phan xa", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "50 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Lưu ý", items: [
        "Nếu vùng khảo sát nằm ở khu vực phần gần (đầu trên) xương đùi, khuyến cáo thực hiện quy trình chụp khớp háng một bên hoặc chụp khung chậu thường quy."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khảo sát phần giữa và phần xa xương đùi, bao gồm cả khớp gối để phát hiện và đánh giá tình trạng gãy xương và/hoặc các tổn thương xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát. Đảm bảo rằng tấm chắn không che khuất bất kỳ phần nào của xương đùi."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân nằm ngửa, với xương đùi nằm ở đường giữa của bàn chụp; kê gối dưới đầu bệnh nhân."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh trục dọc xương đùi thẳng hàng với tia trung tâm và đường giữa của mặt bàn hoặc tấm nhận ảnh.",
        "Xoay chân vào trong khoảng 5° để có tư thế AP thực sự, giống như chụp AP khớp gối. (Đối với phần gần xương đùi, cần xoay chân vào trong từ 15° đến 20°, giống như chụp AP khớp háng).",
        "Đảm bảo rằng khớp gối được bao gồm trong tấm nhận ảnh, lưu ý đến sự phân kỳ của chùm tia X. (Bờ dưới của tấm nhận ảnh nên ở vị trí dưới khớp gối khoảng 5 cm)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với xương đùi và tấm nhận ảnh.",
        "Hướng tia trung tâm vào điểm giữa của tấm nhận ảnh."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia sát vào hai bên bờ ngoài của xương đùi với giới hạn khu trú ở hai đầu bằng với các mép viền của phim chụp.",
        "Quy trình chụp bao gồm cả hai khớp: các quy trình thường quy tại khoa thường bao gồm cả hai khớp trên tất cả các phim chụp khảo sát xương đùi ban đầu. Đối với bệnh nhân to lớn, cần sử dụng thêm một tấm nhận ảnh nhỏ hơn thứ hai để chụp AP khớp gối hoặc khớp háng, đảm bảo rằng cả khớp háng và khớp gối đều được bộc lộ đầy đủ. Nếu khớp háng được đưa vào phim chụp, chân phải được xoay vào trong từ 15° đến 20° để bộc lộ rõ cổ xương đùi ở góc nhìn nghiêng."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hai phần ba dưới của xương đùi, bao gồm cả khớp gối, phải được bộc lộ trên phim.",
        "Khe khớp gối sẽ không hiển thị mở rộng hoàn toàn do sự phân kỳ của chùm tia X."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không bị xoay, điều này được chứng minh qua hình ảnh các lồi cầu xương đùi và xương chày xuất hiện đối xứng về kích thước và hình dạng, với đường viền của xương bánh chè nằm hơi lệch về phía trong xương đùi.",
        "Khoảng một phần nửa trong của chỏm xương mác phải bị chồng lấp bởi xương chày.",
        "Xương đùi phải nằm ở trung tâm trường khu trú và trục dọc của xương đùi thẳng hàng với trục dọc của tấm nhận ảnh, đồng thời khe khớp gối cách bờ dưới tấm nhận ảnh tối thiểu 2,5 cm.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-dui-truocsau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-dui-truocsau-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Bài 5: Xương đùi"
  },

  {
    id: "xq-dui-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương đùi tư thế nghiêng (phần giữa và phần xa)",
    tuKhoa: ["dui nghieng", "femur lateral", "phan xa", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "58 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không cố gắng thực hiện tư thế này nếu bệnh nhân bị chấn thương nặng."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Đối với trường hợp nghi ngờ chấn thương, nếu vùng khảo sát nằm ở khu vực phần gần (đầu trên) xương đùi, khuyến cáo thực hiện quy trình chụp khớp háng chấn thương một bên. Đối với trường hợp không chấn thương, chụp nghiêng phần gần xương đùi."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khảo sát phần giữa và phần xa xương đùi, bao gồm cả khớp gối để phát hiện và đánh giá tình trạng gãy xương và/hoặc các tổn thương xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát. Đảm bảo rằng tấm chắn không che khuất bất kỳ phần nào của xương đùi."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế nằm nghiêng, hoặc nằm ngửa đối với bệnh nhân chấn thương."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Gập khớp gối khoảng 45° với bệnh nhân nằm nghiêng về bên tổn thương, và chỉnh trục xương đùi thẳng hàng với đường giữa của bàn chụp hoặc tấm nhận ảnh.",
        "Đặt chân không tổn thương ra phía sau chân bị thương để tránh xoay quá mức.",
        "Điều chỉnh tấm nhận ảnh để bao gồm khớp gối (bờ dưới tấm nhận ảnh nên cách khớp gối khoảng 5 cm về phía dưới). Ở người lớn, thông thường sẽ cần thêm một tấm nhận ảnh thứ hai để bao gồm phần gần xương đùi và khớp háng."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với xương đùi và tấm nhận ảnh, hướng vào điểm giữa của tấm nhận ảnh."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia sát vào hai bên bờ ngoài của xương đùi với giới hạn khu trú ở hai đầu bằng với các mép viền của phim chụp."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Bộc lộ hai phần ba dưới của xương đùi, bao gồm cả khớp gối.",
        "Khe khớp gối sẽ không hiển thị mở rộng, và các bờ dưới của các lồi cầu xương đùi sẽ không chồng khít lên nhau do sự phân kỳ của chùm tia X."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Bờ trước và bờ sau của lồi cầu trong và lồi cầu ngoài xương đùi phải chồng khít lên nhau và thẳng hàng với khe khớp đùi - bánh chè mở rộng.",
        "Xương đùi phải nằm ở trung tâm trường khu trú với khe khớp gối cách bờ dưới tấm nhận ảnh tối thiểu 2,5 cm.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-dui-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-dui-nghieng-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Bài 5: Xương đùi"
  },

  {
    id: "xq-dui-nghieng-gan",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương đùi tư thế nghiêng (phần giữa và phần gần)",
    tuKhoa: ["dui nghieng gan", "femur proximal lateral", "co xuong dui", "chi duoi"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng" },
      { ten: "kV / mAs", giaTri: "58 kVp · 2,5 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không cố gắng thực hiện tư thế này cho những bệnh nhân có khả năng gãy xương hông (khớp háng) hoặc phần gần xương đùi. Tham khảo quy trình chụp nghiêng khớp háng chấn thương trong chương này."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khảo sát phần giữa và phần gần xương đùi bao gồm cả hướng chiếu nghiêng khớp háng để phát hiện và đánh giá tình trạng gãy xương và các tổn thương xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát. Đảm bảo rằng tấm chắn không che khuất bất kỳ phần nào của xương đùi."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đặt bệnh nhân ở tư thế nằm nghiêng, bên tổn thương nằm dưới; kê gối dưới đầu bệnh nhân."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Gập khớp gối bên tổn thương khoảng 45° và chỉnh trục xương đùi thẳng hàng với đường giữa của bàn chụp. (Lưu ý rằng phần gần và phần giữa của xương đùi nằm gần với mặt trước của đùi hơn).",
        "Duỗi và kê vật hỗ trợ cho chân không tổn thương ra phía sau đầu gối bên bị thương, đồng thời cho bệnh nhân lăn nhẹ ra sau (về phía sau) khoảng 15° để tránh chồng lấp phần gần xương đùi và khớp háng.",
        "Điều chỉnh tấm nhận ảnh để bao gồm khớp háng, lưu ý đến sự phân kỳ của chùm tia X. (Sờ gai chậu trước trên và đặt bờ trên của tấm nhận ảnh ngang mức với mốc giải phẫu này)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với xương đùi và tấm nhận ảnh, hướng vào điểm giữa của tấm nhận ảnh."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia sát vào hai bên bờ ngoài của xương đùi với giới hạn khu trú ở hai đầu bằng với các mép viền của phim chụp."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Một phần hai đến hai phần ba trên của phần gần xương đùi, bao gồm cả khớp háng, được bộc lộ.",
        "Phần gần xương đùi và khớp háng không được bị chồng lấp bởi chi đối diện."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Có sự chồng lấp của mấu chuyển lớn và mấu chuyển bé lên thân xương đùi, chỉ bộc lộ một phần nhỏ của các mấu chuyển ở mặt trong.",
        "Phần lớn mấu chuyển lớn bị chồng lấp bởi cổ xương đùi.",
        "Xương đùi phải nằm ở trung tâm trường khu trú với khớp háng cách bờ trên tấm nhận ảnh tối thiểu 2,5 cm.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-dui-nghieng-gan-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-dui-nghieng-gan-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-dui-nghieng-gan-phim2.png", caption: "Phim đạt yêu cầu (chú thích giải phẫu)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Bài 5: Xương đùi"
  },

  {
    id: "xq-khungchau-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khung chậu tư thế trước sau (khớp háng hai bên)",
    tuKhoa: ["khung chau", "xuong chau", "pelvis ap", "chau", "khop hang hai ben"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "64 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không cố gắng xoay chân vào trong nếu nghi ngờ có gãy xương hoặc trật khớp háng. Thực hiện tư thế với sự cử động tối thiểu của chân bị thương."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương, trật khớp, bệnh lý thoái hóa và các tổn thương xương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn tuyến sinh dục cho tất cả bệnh nhân nam. Tuy nhiên, việc che chắn buồng trứng ở nữ giới thường không thể thực hiện được mà không che khuất các cấu trúc giải phẫu thiết yếu của khung chậu (trừ khi chỉ khảo sát vùng khớp háng)."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân nằm ngửa, hai tay để dọc theo thân người hoặc vắt ngang qua ngực trên; kê gối dưới đầu và hỗ trợ dưới đầu gối; có thể thực hiện ở tư thế đứng kèm theo điều chỉnh chi dưới để xoay phần gần xương đùi vào tư thế giải phẫu nếu không nghi ngờ gãy xương."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh mặt phẳng dọc giữa của bệnh nhân thẳng hàng với đường giữa của bàn chụp và tia trung tâm.",
        "Đảm bảo khung chậu không bị xoay; khoảng cách từ mặt bàn đến mỗi gai chậu trước trên phải bằng nhau.",
        "Tách rời hai chân và bàn chân, sau đó xoay trong trục dọc của bàn chân và chi dưới từ 15° đến 20° (xem cảnh báo ở trên). Kỹ thuật viên có thể phải đặt bao cát giữa hai gót chân và dùng băng keo dán phần trên của hai bàn chân lại với nhau hoặc sử dụng thêm bao cát tựa vào bàn chân để duy trì tư thế này."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào trung điểm giữa mức gai chậu trước trên và khớp mu. Điểm này nằm cách gai chậu trước trên khoảng 5 cm về phía dưới.",
        "Nếu thực hiện như một phần của quy trình chụp khớp háng, điểm trung tâm nên được hạ thấp xuống khoảng 5 cm ngang mức giữa chỏm hoặc cổ xương đùi để bao gồm nhiều phần gần xương đùi hơn."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng khảo sát."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Đai chậu, đốt sống L5, xương cùng và xương cụt, chỏm và cổ xương đùi, cùng các mấu chuyển lớn được bộc lộ rõ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Các mấu chuyển bé hoàn toàn không được nhìn thấy; đối với nhiều bệnh nhân, chỉ nhìn thấy phần đỉnh.",
        "Các mấu chuyển lớn phải xuất hiện với kích thước và hình dạng bằng nhau.",
        "Không bị xoay được thể hiện qua sự xuất hiện đối xứng của các cánh chậu, gai ngồi và hai lỗ bịt.",
        "Lỗ bịt bị thu ngắn hoặc đóng kín cho thấy có sự xoay về hướng đó. (Lỗ bịt bên phải bị đóng hoặc hẹp hơn so với bên trái cho thấy khung chậu xoay sang phải).",
        "Các gai ngồi bên phải và bên trái (nếu thấy) phải có kích thước bằng nhau.",
        "Việc định tâm chính xác được thể hiện qua việc bộc lộ toàn bộ khung chậu và phần trên xương đùi mà không bị biến dạng thu ngắn trong trường khu trú.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-khungchau-truocsau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-khungchau-truocsau-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-khungchau-truocsau-phim2.png", caption: "Phim đạt yêu cầu (chú thích giải phẫu)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Bài 6: Khung chậu và khớp háng"
  },

  {
    id: "xq-hang-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp háng thẳng tư thế trước sau (một bên)",
    tuKhoa: ["khop hang", "hang", "hip ap", "co xuong dui", "mot ben"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "74 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không cố gắng xoay chân nếu nghi ngờ có gãy xương. Nên hoàn thành một phim chụp AP khung chậu bao gồm cả hai khớp háng để so sánh trước khi thực hiện phim chụp AP khớp háng một bên đối với các trường hợp có thể là chấn thương khớp háng hoặc khung chậu."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khám sau phẫu thuật hoặc theo dõi để bộc lộ ổ cối, chỏm xương đùi, cổ xương đùi và mấu chuyển lớn.",
        "Đánh giá tình trạng và vị trí của bất kỳ dụng cụ chỉnh hình nào hiện có."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân nằm ngửa, hai tay để dọc theo thân người hoặc vắt ngang qua ngực trên."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Xác định vị trí cổ xương đùi và chỉnh thẳng hàng với tia trung tâm cũng như đường giữa của mặt bàn và/hoặc tấm nhận ảnh.",
        "Đảm bảo không xoay khung chậu (khoảng cách từ các gai chậu trước trên đến mặt bàn phải bằng nhau).",
        "Xoay chân bên tổn thương vào trong từ 15° đến 20° (xem cảnh báo ở trên)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm cách trung tâm cổ xương đùi từ 2,5 đến 5 cm về phía dưới (để bao gồm toàn bộ dụng cụ chỉnh hình của khớp háng, nếu có). Cổ xương đùi có thể được xác định ở vị trí khoảng 3 đến 5 cm (1 đến 2 inches) về phía trong và 8 đến 10 cm về phía dưới so với gai chậu trước trên."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng khảo sát."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Một phần ba trên của xương đùi phải được bộc lộ, cùng với ổ cối và các phần lân cận của xương mu, xương ngồi và xương chậu.",
        "Bất kỳ dụng cụ chỉnh hình hiện có nào cũng phải được nhìn thấy toàn bộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Mấu chuyển lớn cùng với chỏm và cổ xương đùi phải được nhìn thấy ở góc nhìn nghiêng hoàn toàn mà không bị biến dạng thu ngắn.",
        "Mấu chuyển bé không được nhô ra khỏi bờ trong của xương đùi; ở một số bệnh nhân, chỉ nhìn thấy đỉnh của nó khi chân được xoay vào trong đủ mức.",
        "Trường khu trú phải thể hiện toàn bộ khớp háng và bất kỳ dụng cụ chỉnh hình nào một cách trọn vẹn.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-hang-truocsau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-hang-truocsau-phim.png", caption: "Phim đạt yêu cầu (có dụng cụ chỉnh hình)" },
      { src: "images/xq/xq-hang-truocsau-phim2.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Bài 6: Khung chậu và khớp háng"
  },

  {
    id: "xq-hang-chan-ech",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khung chậu tư thế chân ếch",
    tuKhoa: ["chan ech", "cleaves", "frog leg", "khung chau chan ech", "loan san khop hang"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "64 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không thực hiện tư thế này trên bệnh nhân có bệnh lý phá hủy khớp háng hoặc có khả năng gãy xương hay trật khớp háng."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khảo sát khớp háng không do chấn thương.",
        "Loạn sản phát triển khớp háng, còn được gọi là trật khớp háng bẩm sinh."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn tuyến sinh dục cho cả bệnh nhân nam và nữ mà không làm che khuất các cấu trúc giải phẫu thiết yếu."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân nằm ngửa, kê gối dưới đầu và vắt chéo hai tay qua ngực."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Căn chỉnh bệnh nhân vào đường giữa của bàn chụp và/hoặc tấm nhận ảnh, thẳng hàng với tia trung tâm.",
        "Đảm bảo khung chậu không bị xoay (khoảng cách từ mỗi gai chậu trước trên đến mặt bàn phải bằng nhau).",
        "Chỉnh tâm tấm nhận ảnh vào tia trung tâm, ngang mức chỏm xương đùi, với bờ trên của tấm nhận ảnh xấp xỉ ngang mức mào chậu.",
        "Gập cả hai đầu gối khoảng 90°, như minh họa.",
        "Áp hai mặt lòng bàn chân vào nhau và dạng cả hai đùi một góc từ 40° đến 45° so với phương thẳng đứng. Đảm bảo cả hai xương đùi được dạng một góc bằng nhau và khung chậu không bị xoay.",
        "Đặt vật hỗ trợ dưới mỗi chân để giúp bệnh nhân giữ vững tư thế nếu cần thiết."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào một điểm cách mức gai chậu trước trên (ASIS) khoảng 7,5 cm về phía dưới (cách khớp mu 2,5 cm về phía trên)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng khảo sát."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Chỏm và cổ xương đùi, ổ cối và vùng mấu chuyển hai bên đều được nhìn thấy trên cùng một phim chụp."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không có sự xoay, thể hiện qua sự xuất hiện đối xứng của các xương chậu, đặc biệt là cánh chậu, hai lỗ bịt và các gai ngồi (nếu có thể nhìn thấy).",
        "Chỏm và cổ xương đùi cùng với các mấu chuyển lớn và bé phải xuất hiện đối xứng nhau.",
        "Các mấu chuyển bé phải có kích thước bằng nhau, nằm nhô ra khỏi bờ dưới hoặc bờ trong của xương đùi.",
        "Phần lớn diện tích của mấu chuyển lớn xuất hiện chồng lấp lên cổ xương đùi, cổ xương đùi có hình ảnh bị thu ngắn.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-hang-chanech-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-hang-chanech-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Bài 6: Khung chậu và khớp háng"
  },

  {
    id: "xq-hang-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khớp háng tư thế nghiêng",
    tuKhoa: ["hang nghieng", "hip lateral", "co xuong dui nghieng"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Thẳng" },
      { ten: "kV / mAs", giaTri: "74 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo", items: [
        "Không thực hiện tư thế này trên bệnh nhân có bệnh lý phá hủy khớp háng hoặc có khả năng gãy xương hay trật khớp háng. Điều này có thể dẫn đến sự di lệch đáng kể của các mảnh gãy (xem các hướng chiếu nghiêng chấn thương)."
      ]},
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Hướng chiếu nghiêng để đánh giá khớp háng và phần gần xương đùi trong các tình trạng khớp háng không do chấn thương."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân nằm ngửa, chỉnh vùng khớp háng bên tổn thương thẳng hàng với tia trung tâm và đường giữa của bàn chụp và/hoặc tấm nhận ảnh."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Gập khớp gối và khớp háng bên tổn thương, như minh họa, với lòng bàn chân áp vào mặt trong của chân đối diện, càng gần đầu gối càng tốt.",
        "Dạng xương đùi 45° so với phương thẳng đứng để khảo sát vùng phần gần xương đùi nói chung.",
        "Chỉnh tâm cổ xương đùi bên tổn thương vào tia trung tâm và đường giữa của tấm nhận ảnh cũng như mặt bàn. (Cổ xương đùi nằm cách gai chậu trước trên từ 7,5 đến 10 cm về phía dưới).",
        "Độ dạng xương đùi tối ưu để bộc lộ cổ xương đùi mà không bị biến dạng thu ngắn là từ 20° đến 30° so với phương thẳng đứng ở hầu hết bệnh nhân."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với tấm nhận ảnh, hướng vào điểm giữa cổ xương đùi (trung tâm của tấm nhận ảnh)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở cả bốn cạnh vào vùng khảo sát."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Bộc lộ góc nhìn nghiêng của ổ cối, chỏm và cổ xương đùi, vùng mấu chuyển, và một phần ba trên của xương đùi."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Sự dạng xương đùi thích hợp được thể hiện qua cổ xương đùi nhìn nghiêng rõ (in profile), bị mấu chuyển lớn chồng lấp lên.",
        "Việc định tâm chính xác được thể hiện qua cổ xương đùi nằm ở trung tâm trường khu trú.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-hang-nghieng-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-hang-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-hang-nghieng-phim2.png", caption: "Phim đạt yêu cầu (bên đối diện)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 1 — Bài 6: Khung chậu và khớp háng"
  },

  /* -------------------------------------------------- X-QUANG SỌ – MẶT --- */

  {
    id: "xq-blondeau",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang tư thế Blondeau (thế Waters há miệng)",
    tuKhoa: ["blondeau", "waters", "xoang mat", "xoang ham", "xoang buom", "ha mieng"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Blondeau (Waters há miệng)" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 10–15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các tình trạng viêm (viêm xoang,…).",
        "Polyp và nang xoang."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Tháo bỏ tất cả vật dụng kim loại hoặc nhựa khỏi đầu và cổ. Đặt bệnh nhân ở tư thế đứng."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Ngửa cổ, đặt cằm và mũi tựa vào mặt bàn/bề mặt thiết bị nhận ảnh đứng.",
        "Điều chỉnh đầu cho đến khi đường ổ mắt – lỗ tai tạo góc 37° so với tấm nhận ảnh (đường cằm – lỗ tai vuông góc khi ngậm miệng).",
        "Chỉnh mặt phẳng đứng dọc giữa vuông góc với đường giữa của lưới lọc tia hoặc mặt bàn/thiết bị nhận ảnh đứng; đảm bảo không bị xoay hoặc nghiêng.",
        "Hướng dẫn bệnh nhân há miệng bằng cách “hạ hàm dưới xuống mà không cử động đầu” (đường cằm – lỗ tai không còn vuông góc nữa).",
        "Chỉnh tâm tấm nhận ảnh vào tia trung tâm và ngang mức gai mũi."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm thoát ra tại gai mũi."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Các xoang hàm trên (phần dưới được quan sát thấy, không bị chồng bởi mỏm huyệt răng và các mào đá), bờ dưới ổ mắt, góc nhìn chếch của các xoang trán, và các xoang bướm được bộc lộ qua miệng há."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay: khoảng cách từ MSP (vách ngăn mũi phần xương) đến bờ ngoài ổ mắt bằng nhau hai bên; khoảng cách từ bờ ngoài ổ mắt đến vỏ xương sọ bên bằng nhau hai bên.",
        "Độ ngửa cổ chính xác thể hiện qua các mào đá nằm ngay dưới các xoang hàm trên."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-blondeau-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-blondeau-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-blondeau-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Bài 1: Kỹ thuật chụp sọ, mặt, xoang"
  },

  {
    id: "xq-so-hirtz",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang sọ tư thế Hirtz",
    tuKhoa: ["hirtz", "smv", "nen so", "xoang buom", "xoang sang", "lo oval", "lo gai"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Hirtz (dưới cằm – đỉnh, SMV)" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các tình trạng viêm (viêm xoang,…).",
        "Polyp và nang xoang."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Tháo bỏ tất cả vật dụng kim loại hoặc nhựa khỏi đầu và cổ.",
        "Đặt bệnh nhân ở tư thế đứng (nếu có thể) để bộc lộ các mức dịch – khí."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Nâng cằm, ngửa cổ tối đa cho đến khi đường IOML song song với mặt bàn/bề mặt thiết bị nhận ảnh đứng; đỉnh đầu tựa vào mặt bàn/giá chụp.",
        "Chỉnh MSP vuông góc với đường giữa của lưới lọc tia hoặc mặt bàn/thiết bị nhận ảnh đứng; đảm bảo không bị xoay hoặc nghiêng.",
        "Lưu ý: Nếu không ngửa cổ đủ, tạo góc chếch cho bóng phát tia để tia vuông góc với đường IOML. Tư thế này rất khó chịu; cài đặt sẵn mọi hằng số và chụp nhanh nhất có thể."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu vuông góc với đường IOML.",
        "Hướng tia trung tâm vào điểm giữa hai góc hàm, ngang mức dưới lồi cằm khoảng 4–5 cm.",
        "Chỉnh tâm tấm nhận ảnh vào tia trung tâm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Xoang bướm, xoang sàng, hố mũi và xoang hàm trên được bộc lộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Mối tương quan đúng giữa đường IOML và tia trung tâm: lồi cằm nằm phía trước các xoang sàng.",
        "Không xoay: MSP song song với bờ của tấm nhận ảnh.",
        "Không nghiêng: khoảng cách giữa cành lên xương hàm dưới và vỏ xương sọ bên bằng nhau hai bên."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-so-hirtz-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-so-hirtz-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-so-hirtz-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Bài 1: Kỹ thuật chụp sọ, mặt, xoang"
  },

  {
    id: "xq-xuong-chinh-mui",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang xương mũi tư thế nghiêng",
    tuKhoa: ["xuong mui", "xuong chinh mui", "nasal bone lateral", "gay xuong mui"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nghiêng (hai bên để so sánh)" },
      { ten: "kV / mAs", giaTri: "92 kVp · 10 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "75 cm" },
      { ten: "Lưới lọc", giaTri: "Không" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương chính mũi.",
        "Kiểm tra cả hai bên để so sánh; bên nằm sát tấm nhận ảnh (IR) nhất được bộc lộ rõ nhất."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Tháo bỏ tất cả vật dụng kim loại hoặc nhựa khỏi đầu và cổ. Bệnh nhân nằm sấp hoặc đứng."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Đặt mặt bên của đầu áp sát tấm nhận ảnh, bên cần khảo sát nằm gần tấm nhận ảnh nhất; đặt xương chính mũi vào giữa tấm nhận ảnh.",
        "Điều chỉnh đầu ở tư thế nghiêng hoàn toàn (kê miếng xốp dưới cằm nếu cần).",
        "Chỉnh MSP song song với tấm nhận ảnh; IPL vuông góc; IOML vuông góc với bờ trước của tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc với tấm nhận ảnh.",
        "Hướng tia trung tâm vào điểm thấp hơn điểm giữa hai chân mày khoảng 1,25 cm."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chùm tia ở tất cả các cạnh trong phạm vi 5 cm xung quanh xương chính mũi."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Xương chính mũi cùng các cấu trúc mô mềm của mũi, khớp trán mũi và gai mũi trước được bộc lộ."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Xương chính mũi được bộc lộ rõ mà không bị xoay.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-xuong-chinh-mui-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-xuong-chinh-mui-phim.png", caption: "Phim đạt yêu cầu" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Bài 5: Kỹ thuật chụp xương mũi, răng"
  },

  {
    id: "xq-khop-thai-duong-ham",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang khớp thái dương – hàm tư thế Schuller",
    tuKhoa: ["khop thai duong ham", "tmj", "schuller", "loi cau", "ha mieng ngam mieng"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Schuller (nghiêng, há & ngậm miệng)" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 10–15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "75 cm" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Mối liên quan bất thường hoặc biên độ vận động bất thường giữa lồi cầu và hố thái dương hàm.",
        "Thường chụp cả hai tư thế há miệng và ngậm miệng."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Bệnh nhân đứng hoặc nằm sấp hơi nghiêng. Đặt đầu ở tư thế nghiêng hoàn toàn, bên cần khảo sát nằm sát tấm nhận ảnh nhất."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Điều chỉnh đầu ở tư thế nghiêng hoàn toàn, có thể xoay nhẹ cơ thể để tạo sự thoải mái.",
        "Chỉnh đường liên đồng tử (IPL) vuông góc với tấm nhận ảnh.",
        "Chỉnh MSP song song với mặt bàn hoặc bề mặt thiết bị nhận ảnh.",
        "Chỉnh đường IOML vuông góc với bờ trước của tấm nhận ảnh."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Góc tia trung tâm chếch về phía chân 25°–30°, hướng vào điểm ra trước khoảng 1,3 cm và lên trên 5 cm so với lỗ tai ngoài (EAM) của bên được nâng cao.",
        "Chỉnh tâm tấm nhận ảnh vào khớp thái dương hàm được chiếu."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Khớp thái dương hàm nằm gần tấm nhận ảnh nhất được hiển thị rõ.",
        "Hình ngậm miệng: lồi cầu nằm bên trong hố hàm dưới; hình há miệng: lồi cầu di chuyển đến bờ trước (củ khớp) của hố."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Các khớp thái dương hàm được bộc lộ không bị xoay, thể hiện qua sự chồng khít của các bờ ngoài."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-khop-thai-duong-ham-ct.png", caption: "Chiều thế — ngậm miệng" },
      { src: "images/xq/xq-khop-thai-duong-ham-ct2.png", caption: "Chiều thế — há miệng" },
      { src: "images/xq/xq-khop-thai-duong-ham-phim.png", caption: "Phim đạt yêu cầu (ngậm & há)" },
      { src: "images/xq/xq-khop-thai-duong-ham-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Bài 1: Kỹ thuật chụp sọ, mặt, xoang"
  },

  /* ------------------------------------------------------- X-QUANG RĂNG --- */

  {
    id: "xq-rang-toan-canh",
    phanHe: "xquang", modality: "X-quang", nhom: "Răng",
    ten: "Chụp X-quang răng toàn cảnh (Panorama)",
    tuKhoa: ["rang toan canh", "panorama", "opg", "xuong ham duoi", "toan bo rang"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Panorama (máy chụp toàn cảnh)" },
      { ten: "kV / mAs", giaTri: "Mặc định của máy" },
      { ten: "Khoảng cách bóng – phim", giaTri: "Cố định theo máy" },
      { ten: "Lưới lọc", giaTri: "Theo máy" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Gãy xương hoặc các quá trình nhiễm trùng của xương hàm dưới.",
        "Xem và đánh giá toàn bộ răng hai hàm."
      ]},
      { tieuDe: "Bảo vệ bức xạ và chuẩn bị máy", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát.",
        "Đặt bóng phát tia và tấm nhận ảnh ở vị trí bắt đầu; nâng giá đỡ cằm lên xấp xỉ ngang mức cằm của bệnh nhân."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Tháo bỏ tất cả vật dụng kim loại, nhựa và vật thể tháo rời khác khỏi đầu và cổ.",
        "Giải thích cho bệnh nhân cách bóng phát tia và tấm nhận ảnh quay và thời gian phát tia.",
        "Đặt cằm tựa lên khối cắn; không để đầu và cổ vươn về phía trước; đứng sát máy, giữ cột sống thẳng và đẩy hông về phía trước."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Điều chỉnh chiều cao giá đỡ cằm đến khi đường IOML song song với sàn nhà; mặt phẳng nhai nghiêng 10° từ sau ra trước.",
        "Chỉnh MSP trùng với vạch trung tâm dọc của giá đỡ cằm.",
        "Đặt khối cắn giữa hai răng cửa; hướng dẫn bệnh nhân mím môi và đặt lưỡi lên vòm miệng."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm cố định, hướng hơi chếch lên phía đầu để các cấu trúc cùng độ cao không chồng lên nhau.",
        "Khoảng cách bóng – tấm nhận ảnh cố định tùy theo từng máy chụp toàn cảnh."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Cài đặt mặc định của máy."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Hiển thị răng, xương hàm dưới, khớp thái dương hàm, hố mũi, xoang hàm trên, cung tiếp và xương hàm trên."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay/nghiêng: các khớp thái dương hàm trên cùng một mặt phẳng ngang; cành lên và răng sau có độ phóng đại bằng nhau hai bên; răng trước – sau sắc nét, phóng đại đồng đều.",
        "Đặt đúng tư thế: lồi cằm hơi thấp hơn góc hàm; xương hàm dưới hình bầu dục; mặt phẳng nhai song song trục dọc hình ảnh; răng hai hàm hơi tách, không chồng; cột sống cổ không chồng lên các khớp thái dương hàm."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-rang-toan-canh-ct.png", caption: "Chiều thế — vào máy Panorama" },
      { src: "images/xq/xq-rang-toan-canh-ct2.png", caption: "Chiều thế — đường định vị IOML" },
      { src: "images/xq/xq-rang-toan-canh-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-rang-toan-canh-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Bài 5: Kỹ thuật chụp xương mũi, răng"
  },

  /* -------------------------------------- X-QUANG LỒNG NGỰC – BỤNG ------- */

  {
    id: "xq-o-bung-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang bụng không chuẩn bị thế trước - sau với bệnh nhân đứng",
    tuKhoa: ["o bung dung", "bung dung", "muc dich khi", "tac ruot", "khi tu do", "thung tang rong"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (AP), bệnh nhân đứng" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 15–18 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Các mức dịch – khí và khí tự do trong ổ phúc mạc dưới cơ hoành; nghi ngờ tắc ruột.",
        "Thực hiện chụp tư thế đứng trước nếu bệnh nhân có thể tự đi lại hoặc ngồi xe lăn ở tư thế thẳng đứng."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát. Dùng tấm chắn tuyến sinh dục đối với bệnh nhân nam."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Đứng thẳng, hai chân hơi dang ra, lưng tựa vào bàn hoặc thiết bị lưới lọc.",
        "Hai cánh tay đặt dọc hai bên, cách xa cơ thể.",
        "Chỉnh MSP của cơ thể thẳng trục với đường giữa của bàn hoặc Bucky đứng."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Không xoay khung chậu hoặc hai vai.",
        "Điều chỉnh chiều cao tấm nhận ảnh sao cho tâm cao hơn mào chậu khoảng 5 cm (để bao gồm cơ hoành); bệnh nhân trung bình thì bờ trên tấm nhận ảnh xấp xỉ ngang mức nách."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc và hướng vào giữa tấm nhận ảnh."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát; bắt buộc bao gồm vùng bụng trên."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Dạ dày chứa khí, các quai ruột và các mức dịch – khí nếu có; bao gồm cả hai vòm cơ hoành và càng nhiều phần bụng dưới càng tốt.",
        "Bóng khí tự do hình liềm nhỏ trong ổ phúc mạc (nếu có) nhìn thấy dưới vòm hoành phải, cách xa phần khí trong dạ dày."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay: các cánh chậu đối xứng, bờ ngoài các xương sườn cách đều cột sống.",
        "Cột sống thẳng (trừ khi có vẹo), thẳng trục với tâm tấm nhận ảnh."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-o-bung-thang-ct.png", caption: "Chiều thế & hướng tia (đứng)" },
      { src: "images/xq/xq-o-bung-thang-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-o-bung-thang-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Chương II: Kỹ thuật chụp bụng không chuẩn bị"
  },

  {
    id: "xq-o-bung-nam-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang bụng thế nằm nghiêng tia ngang trước - sau (decubitus)",
    tuKhoa: ["bung nam nghieng", "decubitus", "tia ngang", "khi tu do", "muc dich khi", "nam nghieng trai"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Nằm nghiêng, tia ngang, trước sau (ưu tiên nghiêng trái)" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 25–30 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Khối u vùng bụng, mức dịch – khí, và khả năng tích tụ khí tự do trong ổ phúc mạc.",
        "Một lượng nhỏ khí tự do trong ổ phúc mạc được bộc lộ tốt nhất bằng chụp ngực tư thế đứng PA.",
        "Quan trọng: Bệnh nhân nên nằm nghiêng tối thiểu 5 phút trước khi phát tia (ưu tiên 10–20 phút) để khí bay lên/dịch tích tụ, quan sát tốt lượng nhỏ khí tự do.",
        "Tư thế nằm nghiêng trái tia ngang bộc lộ tốt nhất khí tự do ở vùng gan (góc phần tư trên phải), tránh xa bóng hơi dạ dày."
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Nằm nghiêng trên đệm thấu quang, tỳ chặt vào bàn hoặc thiết bị Bucky đứng (khóa bánh xe cáng).",
        "Nằm trên bề mặt cứng (ván ép hồi sức/ván lưng) đặt dưới ga để tránh võng làm cắt lẹm giải phẫu.",
        "Hai đầu gối gập nhẹ, chân này chồng lên chân kia để giữ ổn định; hai tay giơ lên gần đầu."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Điều chỉnh bệnh nhân và cáng sao cho tâm tấm nhận ảnh và tia trung tâm cao hơn mào chậu khoảng 5 cm (để lấy cơ hoành); bờ trên tấm nhận ảnh xấp xỉ ngang mức nách.",
        "Đảm bảo khung chậu hoặc hai vai không bị xoay; chỉnh MSP vào giữa tấm nhận ảnh nhưng đảm bảo phần bụng trên được bao gồm rõ."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm chiếu ngang, hướng vào tâm tấm nhận ảnh, cao hơn mào chậu khoảng 5 cm (chùm tia ngang để bộc lộ mức dịch – khí và khí tự do)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát; bắt buộc bao gồm vùng bụng trên."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Dạ dày chứa khí, các quai ruột và các mức dịch – khí nếu có; phải bao gồm cả hai vòm cơ hoành."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay: các cánh chậu đối xứng, bờ ngoài các xương sườn cách đều cột sống.",
        "Cột sống thẳng (trừ khi có vẹo), thẳng trục với tâm tấm nhận ảnh."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-o-bung-nam-nghieng-ct.png", caption: "Chiều thế & hướng tia (nằm nghiêng, tia ngang)" },
      { src: "images/xq/xq-o-bung-nam-nghieng-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-o-bung-nam-nghieng-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Chương II: Kỹ thuật chụp bụng không chuẩn bị"
  },

  {
    id: "xq-he-tiet-nieu",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang bụng không chuẩn bị thế trước - sau với bệnh nhân nằm ngửa (hệ tiết niệu - KUB)",
    tuKhoa: ["kub", "he tiet nieu", "bung khong chuan bi", "soi than", "soi nieu quan", "nam ngua"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (AP), nằm ngửa (KUB)" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 15–18 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định lâm sàng", items: [
        "Nghi ngờ sỏi thận, sỏi niệu quản, sỏi bàng quang,… sau hậu phẫu sỏi, đặt sonde,…"
      ]},
      { tieuDe: "Bảo vệ bức xạ", items: [
        "Che chắn các mô nhạy cảm với bức xạ nằm ngoài vùng khảo sát."
      ]},
      { tieuDe: "Tư thế bệnh nhân", items: [
        "Nằm ngửa, chỉnh MSP thẳng trục với đường giữa của bàn hoặc tấm nhận ảnh.",
        "Hai cánh tay đặt hai bên, cách xa cơ thể; hai chân duỗi thẳng, có đệm lót dưới khoeo chân nếu giúp thoải mái hơn."
      ]},
      { tieuDe: "Vùng chụp", items: [
        "Chỉnh tâm tấm nhận ảnh ngang mức mào chậu, bờ dưới tấm nhận ảnh ngang mức khớp mu.",
        "Khung chậu hoặc hai vai không bị xoay (kiểm tra hai gai chậu trước trên cách đều mặt bàn)."
      ]},
      { tieuDe: "Tia trung tâm", items: [
        "Tia trung tâm vuông góc và hướng vào giữa tấm nhận ảnh (ngang mức mào chậu)."
      ]},
      { tieuDe: "Khuyến cáo khu trú chùm tia", items: [
        "Khu trú chặt chùm tia ở cả bốn cạnh vào cấu trúc giải phẫu cần khảo sát."
      ]},
      { tieuDe: "Hô hấp", items: [
        "Nín thở trong quá trình phát tia."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Giải phẫu bộc lộ", items: [
        "Đường viền của gan, lách, thận, các đoạn dạ dày và ruột chứa khí, và vòm khớp mu đối với vùng bàng quang."
      ]},
      { tieuDe: "Tiêu chuẩn phim đạt — Tư thế", items: [
        "Không xoay: các cánh chậu, lỗ bịt và gai ngồi đối xứng, bờ ngoài các xương sườn dưới cách đều cột sống.",
        "Khu trú chùm tia vào vùng khảo sát."
      ]}
    ],
    hinhAnh: [
      { src: "images/xq/xq-he-tiet-nieu-ct.png", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-he-tiet-nieu-phim.png", caption: "Phim đạt yêu cầu" },
      { src: "images/xq/xq-he-tiet-nieu-phim2.png", caption: "Phim đạt yêu cầu (chú thích)" }
    ],
    nguon: "Kỹ thuật X-quang thông thường 3 — Chương II: Kỹ thuật chụp bụng không chuẩn bị"
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

  /* CT — SỌ NÃO · HÀM MẶT–XOANG · TAI XƯƠNG ĐÁ · MẠCH MÁU (Cẩm nang kỹ thuật CLVT) */
  {
    id: "ct-so-nao-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
    ten: "Chụp CLVT sọ não không tiêm thuốc (NECT)",
    tuKhoa: ["ct so nao", "nect", "clvt dau", "head ct", "chan thuong so nao", "dot quy", "xuat huyet nao", "cua so dot quy", "bone window", "oml"],
    thongSo: [
      { ten: "Phạm vi quét", giaTri: "Từ nền sọ (lỗ chẩm) đến hết vòm sọ (vertex)" },
      { ten: "Điện thế / Dòng", giaTri: "120 kVp · 135–350 mAs (tùy máy & tuổi)" },
      { ten: "DFOV", giaTri: "22–24 cm (phủ trọn hộp sọ)" },
      { ten: "Độ dày tái tạo", giaTri: "Nhu mô 3–5 mm (hố sau 3 mm · trên lều 8 mm) · xương 1.25–2.5 mm (từ dữ liệu 0.625 mm)" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, đầu vào trước; OML/SML vuông góc mặt bàn" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định (NECT)", items: [
        "Chấn thương sọ não: tụ máu nội sọ, lún sọ, vỡ vòm/nền sọ, dị vật.",
        "Đột quỵ cấp: phân biệt xuất huyết não vs nhồi máu não cấp; theo dõi tụ máu dưới màng cứng.",
        "Đau đầu cấp tính đột ngột; tai biến mạch máu não.",
        "Đánh giá ban đầu nghi u não, áp xe não, dị dạng mạch (AVM); theo dõi sau điều trị."
      ]},
      { tieuDe: "Chống chỉ định (tương đối)", items: [
        "Bệnh nhân kích thích không hợp tác (cân nhắc an thần).",
        "Dị vật kim loại vùng đầu gây xảo ảnh nặng.",
        "Phụ nữ có thai."
      ]},
      { tieuDe: "Tư thế & định vị", items: [
        "Nằm ngửa, đầu hướng vào gantry trước (Head First), cố định đầu cân xứng hai bên.",
        "Chỉnh cổ gập nhẹ để đường OML (hốc mắt – lỗ tai) hoặc SML vuông góc mặt bàn.",
        "Nghiêng gantry song song OML/SML để tránh tia X chiếu trực tiếp thủy tinh thể (giảm liều, bảo vệ mắt).",
        "Chụp định vị (scout) thế nghiêng để đặt dải quét."
      ]},
      { tieuDe: "Cài đặt cửa sổ quan sát", bang: {
        cols: ["Cửa sổ", "WL (HU)", "WW (HU)", "Mục đích"],
        rows: [
          ["Nhu mô trên lều", "35–40", "70–100", "Nhu mô não trên lều"],
          ["Nhu mô hố sau", "35–40", "140–200", "Mở rộng WW giảm xảo ảnh vệt đen do xương đá"],
          ["Đột quỵ (Stroke)", "30–35", "30–40", "Cửa sổ cực hẹp, tăng tương phản chất xám–trắng, phát hiện nhồi máu sớm"],
          ["Xương (Bone)", "350–500", "1200–2500", "Lún sọ, đường gãy vỡ xương sọ"]
        ]
      }},
      { tieuDe: "Tiêu chuẩn đạt & khắc phục xảo ảnh", items: [
        "Lát Axial cân đối hai bên; não thất cân đối đường giữa; ranh giới chất xám–trắng rõ; hố sau rõ.",
        "Xảo ảnh cử động: cố định tốt, chụp nhanh. Kim loại: tháo dị vật, mở rộng cửa sổ.",
        "Cứng hóa chùm tia hố sau: dùng WW rộng 140–200 hoặc phần mềm giảm xảo ảnh. Thể tích bán phần: cắt lát mỏng."
      ]}
    ],
    nguon: "Cẩm nang CLVT sọ não – hàm mặt – tai xương đá — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-so-nao-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
    ten: "Chụp CLVT sọ não có tiêm thuốc cản quang (CECT)",
    tuKhoa: ["ct so nao tiem", "cect", "clvt so nao co thuoc", "u nao", "ngam thuoc", "viem mang nao", "ap xe nao"],
    thongSo: [
      { ten: "Phạm vi quét", giaTri: "Từ nền sọ (lỗ chẩm) đến hết vòm sọ (vertex)" },
      { ten: "Điện thế / Dòng", giaTri: "120 kVp · 135–350 mAs" },
      { ten: "Độ dày tái tạo", giaTri: "Nhu mô 3–5 mm · xương 1.25–2.5 mm" },
      { ten: "Tiêm thuốc", giaTri: "I-ốt 300–400 mgI/mL · 80–100 mL (1–2 mL/kg) · 1.5–3.0 mL/s" },
      { ten: "Thời gian trễ", giaTri: "Thì muộn ~ 5 phút (u/áp xe/viêm màng não); Bolus tracking khi CTA" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định (CECT)", items: [
        "Đánh giá tăng sinh mạch & ngấm thuốc của u nội sọ (trong và ngoài trục).",
        "Viêm não, viêm màng não, áp xe não.",
        "Dị dạng mạch máu não đã phát hiện hoặc nghi ngờ trên NECT.",
        "Tụ máu dưới màng cứng đồng đậm độ.",
        "Đánh giá & theo dõi sau phẫu thuật/điều trị u não, dị dạng mạch."
      ]},
      { tieuDe: "Quy trình tiêm thuốc", items: [
        "Thuốc cản quang I-ốt 300–400 mgI/mL; liều 80–100 mL (1–2 mL/kg); tốc độ 1.5–3.0 mL/s.",
        "Quét thì muộn ~ 5 phút sau tiêm để đánh giá ngấm thuốc u não, áp xe, viêm màng não.",
        "Dùng Bolus tracking khi khảo sát mạch máu não (CTA)."
      ]},
      { tieuDe: "Thận trọng & cửa sổ", items: [
        "Sàng lọc tiền sử dị ứng I-ốt; đánh giá chức năng thận (eGFR) trước tiêm.",
        "Cửa sổ nhu mô (WL 35–40 / WW 70–100) kết hợp mô mềm; cửa sổ xương khi cần (WL 350–500 / WW 1200–2500)."
      ]}
    ],
    nguon: "Cẩm nang CLVT sọ não – hàm mặt – tai xương đá — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-ham-mat-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
    ten: "Chụp CLVT hàm – mặt – xoang không tiêm thuốc",
    tuKhoa: ["ct ham mat", "xoang", "clvt xoang", "fess", "chan thuong ham mat", "le fort", "cung to vo", "san o mat", "viem xoang"],
    thongSo: [
      { ten: "Điện thế / Dòng", giaTri: "120 kVp · 20–200 mAs (xoang liều thấp); 180–250 mAs (chấn thương)" },
      { ten: "Độ dày thu nhận", giaTri: "0.625–1.25 mm" },
      { ten: "Lát tái tạo", giaTri: "Axial < 3 mm · Coronal & Sagittal < 2 mm (0.5–1 mm để xem ngách xoang)" },
      { ten: "Hướng cắt", giaTri: "Axial song song khẩu cái cứng; Coronal trực tiếp hoặc tái tạo (MSCT ≥ 16 dãy)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Chấn thương khối xương mặt: vỡ xương hàm, gãy cung tò vò, vỡ thành/sàn ổ mắt, gãy Le Fort I/II/III.",
        "Viêm mũi xoang mạn tính hoặc tái phát; polyp mũi xoang.",
        "Đánh giá bản đồ giải phẫu trước phẫu thuật nội soi xoang (FESS).",
        "U lành/ác vùng mũi họng, hàm mặt."
      ]},
      { tieuDe: "Tư thế & hướng cắt", items: [
        "Axial: nằm ngửa, mặt phẳng giữa trùng trục bàn, lớp cắt song song khẩu cái cứng. Khảo sát xoang: từ chân răng hàm trên đến hết bờ trên xoang trán; hàm mặt: từ xương móng đến hết xoang trán.",
        "Coronal: cắt trực tiếp (nằm sấp/ngửa ngửa cổ tối đa, gantry vuông góc khẩu cái cứng) hoặc tái tạo Coronal/Sagittal từ dữ liệu cắt mỏng."
      ]},
      { tieuDe: "Cài đặt cửa sổ", bang: {
        cols: ["Cửa sổ", "WL (HU)", "WW (HU)", "Mục đích"],
        rows: [
          ["Xoang (Sinus)", "250", "2500", "Thông thoáng ngách xoang, vách ngăn"],
          ["Xương chấn thương", "300–400", "1600–4000", "Đường gãy xương rạn nứt nhỏ"],
          ["Mô mềm", "40–50", "350–400", "Tổn thương mô mềm, cơ vận nhãn"]
        ]
      }},
      { tieuDe: "Dựng hình 3D VRT", items: [
        "Tái tạo đa mặt phẳng (MPR) và bề mặt 3D VRT giúp đánh giá toàn diện hình thái gãy xương trong chấn thương phức tạp."
      ]}
    ],
    nguon: "Cẩm nang CLVT sọ não – hàm mặt – tai xương đá — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-ham-mat-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
    ten: "Chụp CLVT hàm – mặt – xoang có tiêm thuốc cản quang",
    tuKhoa: ["ct ham mat tiem", "u ham mat", "ap xe mo mem mat", "u xoang", "xam lan", "clvt xoang tiem"],
    thongSo: [
      { ten: "Điện thế / Dòng", giaTri: "120 kVp · 180–250 mAs" },
      { ten: "Tiêm thuốc", giaTri: "Thể tích 100 mL · tốc độ 2.0 mL/s · thời gian trễ 50–70 giây" },
      { ten: "Lát tái tạo", giaTri: "Axial < 3 mm · Coronal/Sagittal < 2 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định tiêm thuốc", items: [
        "Nghi u, áp xe mô mềm vùng hàm mặt – xoang.",
        "Tổn thương nghi xâm lấn (u ngách mũi họng, u khối xương mặt)."
      ]},
      { tieuDe: "Quy trình tiêm & cửa sổ", items: [
        "Tiêm 100 mL, tốc độ 2.0 mL/s, thì sau tiêm 50–70 giây.",
        "Cửa sổ mô mềm (WL 40–50 / WW 350–400) đánh giá ngấm thuốc; kết hợp cửa sổ xương (WL 300–400 / WW 1600–4000)."
      ]},
      { tieuDe: "Dựng hình 3D VRT", items: [
        "MPR + 3D VRT khối xương mặt hỗ trợ phẫu thuật tạo hình, răng hàm mặt."
      ]}
    ],
    nguon: "Cẩm nang CLVT sọ não – hàm mặt – tai xương đá — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-tai-xuong-da-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
    ten: "Chụp CLVT tai xương đá (HRCT) không tiêm thuốc",
    tuKhoa: ["tai xuong da", "hrct", "temporal bone", "cholesteatoma", "oc tai", "chuoi xuong con", "oc tai dien tu", "u day viii", "viem tai giua", "xo cung tai", "glomus"],
    thongSo: [
      { ten: "Bản chất", giaTri: "HRCT độ phân giải cao, lát siêu mỏng < 1 mm + kernel xương sắc nét (Sharp/Bone)" },
      { ten: "Điện thế / Dòng", giaTri: "120–140 kVp · 170–200 mAs" },
      { ten: "Độ dày thu nhận", giaTri: "0.625 mm" },
      { ten: "Độ dày tái tạo", giaTri: "0.3–0.625 mm (tối ưu độ phân giải không gian)" },
      { ten: "DFOV", giaTri: "~ 9.6 cm, thu nhỏ tập trung từng bên tai (Right & Left)" },
      { ten: "Thuật toán (Kernel)", giaTri: "Sharp / Bone (tăng độ sắc nét bờ xương)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Dị tật bẩm sinh vùng tai (ngoài / giữa / trong).",
        "Chấn thương vỡ xương đá (vỡ dọc/ngang), gãy xương chũm, trật chuỗi xương con.",
        "Viêm tai giữa, viêm xương chũm cấp/mạn, Cholesteatoma.",
        "Nghe kém, điếc dẫn truyền/tiếp nhận, ù tai, xơ cứng tai (Otosclerosis).",
        "Trước/sau phẫu thuật cấy ghép ốc tai điện tử.",
        "U dây thần kinh VIII (Acoustic Neuroma), u cuộn mạch (Glomus tumor)."
      ]},
      { tieuDe: "Tư thế & phạm vi quét", items: [
        "Nằm ngửa cân xứng, đầu cố định chắc trong giá đỡ.",
        "Axial: mặt phẳng song song OML / nhân trung, từ dưới mỏm chũm đến hết đỉnh / trần hòm tai (Tegmen tympani).",
        "Coronal: vuông góc trần hốc mắt / nhân trung, từ trước khớp thái dương hàm đến hết bờ sau xương chũm."
      ]},
      { tieuDe: "Cài đặt cửa sổ", bang: {
        cols: ["Cửa sổ", "WL (HU)", "WW (HU)", "Mục đích"],
        rows: [
          ["Xương cực rộng", "400–500", "1500–4000", "Cân bằng xương đá đặc vs hốc khí hòm tai; chuỗi xương con"],
          ["Mô mềm", "35–40", "140–350", "U dây thần kinh VIII, tổn thương hoại tử lan ngoài xương đá"]
        ]
      }},
      { tieuDe: "Tiêm thuốc (khi có chỉ định)", items: [
        "Áp dụng khi nghi u dây thần kinh VIII, u cuộn mạch, dị dạng mạch máu thái dương, nhiễm trùng biến chứng nội sọ.",
        "Thể tích 100 mL · tốc độ 2.0 mL/s · thời gian trễ 50–70 giây."
      ]}
    ],
    nguon: "Cẩm nang CLVT sọ não – hàm mặt – tai xương đá — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-mach-mau-nao",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
    ten: "Chụp CLVT mạch máu não (CTA & CTV)",
    tuKhoa: ["ct mach mau nao", "cta nao", "ctv", "tinh mach nao", "phinh dong mach", "avm", "boc tach dong mach", "da giac willis", "cow", "bolus tracking", "huyet khoi xoang tinh mach"],
    thongSo: [
      { ten: "Đường truyền", giaTri: "Kim 18–20G tĩnh mạch khuỷu (chịu áp lực 300 PSI)" },
      { ten: "Thuốc cản quang", giaTri: "I-ốt 350–370 mgI/mL · 60–80 mL · 4.0–5.0 mL/s + đuổi NaCl 30–40 mL" },
      { ten: "Định thì", giaTri: "Bolus tracking — ROI ĐM cảnh chung (C4) hoặc ĐM chủ lên, ngưỡng 100–120 HU" },
      { ten: "Điện thế / Dòng", giaTri: "120 kVp · Auto mA (150–800 mA)" },
      { ten: "Độ dày", giaTri: "Thu nhận 0.625 mm (64 dãy) / 1.25 mm (16 dãy); tái tạo 0.625–1.25 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định — động mạch (CTA)", items: [
        "Đột quỵ nhồi máu não cấp: xác định vị trí tắc mạch, đánh giá tuần hoàn bàng hệ.",
        "Dị dạng động – tĩnh mạch (AVM), rò động – tĩnh mạch màng cứng (dAVF).",
        "Phình động mạch não gây xuất huyết dưới nhện (SAH) hoặc xuất huyết nhu mô.",
        "Bóc tách động mạch cảnh / đốt sống; hẹp vữa xơ hệ ĐM cảnh và vòng Willis."
      ]},
      { tieuDe: "Chỉ định — tĩnh mạch (CTV)", items: [
        "Nghi huyết khối xoang tĩnh mạch màng cứng (Dural Sinus Thrombosis).",
        "Đánh giá lưu thông tĩnh mạch não sâu và các xoang ngang, xoang Sigma, xoang dọc trên."
      ]},
      { tieuDe: "Chuẩn bị & đường truyền", items: [
        "Kim 18–20G tĩnh mạch khuỷu / nền tay phải (chịu 300 PSI).",
        "Thuốc I-ốt nồng độ cao 350–370 mgI/mL, 60–80 mL, 4.0–5.0 mL/s; đuổi ngay 30–40 mL NaCl cùng tốc độ.",
        "Bolus tracking: ROI tại ĐM cảnh chung (ngang C4) hoặc ĐM chủ lên, ngưỡng kích hoạt 100–120 HU."
      ]},
      { tieuDe: "Protocol quét", bang: {
        cols: ["Thông số", "CTA Đa giác Willis (CoW)", "CTA ĐM cảnh & não"],
        rows: [
          ["Phạm vi quét", "Trên xoang trán → dưới nền sọ 1 cm", "Bờ dưới quai ĐMC → đỉnh đầu (vertex)"],
          ["Chế độ quét", "Helical (xoắn ốc)", "Helical (xoắn ốc)"],
          ["Collimation", "0.625 mm (64 dãy) / 1.25 mm (16 dãy)", "0.625 mm / 1.25 mm"],
          ["Lát tái tạo", "0.625 mm / bước 0.625 mm", "1.25 mm / bước 0.625 mm"],
          ["kVp / mA", "120 kVp · 250–500 mA (Auto)", "120 kVp · Auto mA 150–800"],
          ["DFOV", "25 cm (chi tiết ~18 cm)", "25 cm (chi tiết ~20 cm)"]
        ]
      }},
      { tieuDe: "Dựng hình hậu kỳ", items: [
        "MPR Axial/Coronal/Sagittal mỏng 1–2 mm khảo sát đường đi ĐM cảnh và các nhánh não trước/giữa/sau.",
        "MIP mỏng 3–5 mm và MIP dày 10–20 mm bộc lộ cây mạch, phát hiện tắc/hẹp/túi phình nhỏ.",
        "VRT + trừ xương (Bone Subtraction) bộc lộ mạch không bị che; xoay 360° xác định cổ túi phình & góc can thiệp."
      ]},
      { tieuDe: "Chống chỉ định & thận trọng", items: [
        "Dị ứng nặng / sốc phản vệ với thuốc I-ốt; suy thận nặng (eGFR < 30 mL/phút/1.73m²).",
        "Phụ nữ có thai (chỉ khi cấp cứu đe dọa tính mạng, che chắn bụng)."
      ]}
    ],
    nguon: "Cẩm nang CLVT mạch máu não – hàm mặt – tai xương đá — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-mach-chi-duoi",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp & chi",
    ten: "Chụp CLVT mạch máu chi dưới (CTA mạch máu chi dưới)",
    tuKhoa: ["cta chi duoi", "run-off", "mach mau chi duoi", "tac dong mach", "xo vua", "dau cach hoi", "test bolus", "dm khoeo", "da pha"],
    thongSo: [
      { ten: "Phạm vi quét", giaTri: "Từ rốn thận (ngang ĐM chậu chung) đến đầu ngón chân (> 1 m); Pitch cao > 1.0" },
      { ten: "Thuốc cản quang", giaTri: "I-ốt 350–370 mgI/mL · 100–120 mL · 4.0 mL/s + đuổi NaCl 40 mL" },
      { ten: "Định thì", giaTri: "Test Bolus (ROI ĐM khoeo) — khuyên dùng; hoặc Bolus tracking (ROI ĐMC bụng rốn thận, ngưỡng 100–150 HU)" },
      { ten: "Điện thế / Dòng", giaTri: "120 kVp · 200–400 mA" },
      { ten: "Độ dày", giaTri: "Thu nhận 0.625 mm (64 dãy) / 1.25 mm (16 dãy); tái tạo 0.625–1.25 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tắc động mạch cấp tính do huyết khối.",
        "Xơ vữa gây hẹp tắc mạn tính (đau cách hồi, hoại tử đầu chi).",
        "Chấn thương gãy xương phức tạp gây đứt / dập rách mạch máu.",
        "Khảo sát bản đồ mạch máu chuẩn bị phẫu thuật ghép vạt da."
      ]},
      { tieuDe: "Kỹ thuật định thì (quan trọng)", items: [
        "Test Bolus (khuyên dùng nhất): tiêm nháp 15–20 mL, ROI tại ĐM khoeo (Popliteal) để tính chính xác thời điểm thuốc đạt đỉnh — tránh máy quét vượt mặt dòng thuốc, nhất là bệnh nhân hẹp tắc mạn / tiểu đường dòng chậm.",
        "Bolus tracking: ROI ĐMC bụng ngang rốn thận, ngưỡng 100–150 HU, cài scan delay kéo dài cho thuốc kịp xuống ngón chân.",
        "Quét đa pha: trường hợp hẹp tắc nặng dòng đến muộn — quét lặp 2–3 lần vùng cẳng – bàn chân (cách nhau 10–15 giây) để đánh giá tuần hoàn bàng hệ."
      ]},
      { tieuDe: "Protocol kỹ thuật", bang: {
        cols: ["Thông số", "MSCT 16 dãy", "MSCT 64 dãy trở lên"],
        rows: [
          ["Phạm vi quét", "Rốn thận → ngón chân", "Rốn thận → ngón chân"],
          ["Collimation", "1.25 mm × 16", "0.625 mm × 64"],
          ["Lát tái tạo", "1.25 mm / 0.8 mm", "0.625 mm / 0.625 mm"],
          ["kVp / mA", "120 kVp · 200–300 mA", "120 kVp · 250–400 mA"],
          ["Thể tích / tốc độ", "100–120 mL (4.0 mL/s)", "100–120 mL (4.0 mL/s)"]
        ]
      }},
      { tieuDe: "Dựng hình hậu kỳ", items: [
        "Loại bỏ xương (Dual-Energy Bone Removal / Subtraction) bộc lộ toàn bộ hệ mạch trên MIP và 3D VRT.",
        "Đoạn mạch nhỏ cẳng chân & bàn chân bắt buộc đánh giá trên MPR dọc theo lòng mạch."
      ]}
    ],
    nguon: "Cẩm nang CLVT mạch máu chi – hàm mặt – tai xương đá — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-mach-chi-tren",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp & chi",
    ten: "Chụp CLVT mạch máu chi trên (CTA mạch máu chi trên)",
    tuKhoa: ["cta chi tren", "mach mau chi tren", "dm duoi don", "tos", "hoi chung loi thoat nguc", "avf", "superman", "beam hardening"],
    thongSo: [
      { ten: "Phạm vi quét", giaTri: "Từ gốc ĐM dưới đòn (quai ĐMC) đến hết đầu ngón tay" },
      { ten: "Đường truyền", giaTri: "BẮT BUỘC tiêm ở TAY ĐỐI DIỆN chi khảo sát (tránh beam hardening đè ĐM dưới đòn/nách)" },
      { ten: "Thuốc cản quang", giaTri: "80–100 mL · 3.5–4.5 mL/s" },
      { ten: "Định thì", giaTri: "Bolus tracking — ROI ĐM chủ xuống hoặc ĐM dưới đòn" },
      { ten: "Tư thế", giaTri: "Nằm ngửa giơ 2 tay qua đầu (Superman) thường quy; xuôi thân khi chấn thương cấp" },
      { ten: "Độ dày tái tạo", giaTri: "0.625 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Hẹp tắc ĐM dưới đòn, ĐM nách, ĐM cánh tay và quay / trụ.",
        "Hội chứng lối thoát ngực (Thoracic Outlet Syndrome – TOS).",
        "Dị dạng động – tĩnh mạch (AVM); chấn thương đứt rách mạch.",
        "Lập bản đồ mạch trước phẫu thuật tạo cầu nối động – tĩnh mạch (AVF) lọc máu chu kỳ."
      ]},
      { tieuDe: "Quy tắc đặt đường truyền (rất quan trọng)", items: [
        "BẮT BUỘC tiêm thuốc ở tay ĐỐI DIỆN với chi cần khảo sát.",
        "Nếu tiêm cùng bên tổn thương: thuốc đậm độ cao trong tĩnh mạch nông gây xảo ảnh cứng hóa chùm tia (Beam Hardening) đè lấp ĐM dưới đòn và ĐM nách → sai lệch chẩn đoán."
      ]},
      { tieuDe: "Tư thế & phạm vi", items: [
        "Nằm ngửa, giơ 2 tay qua đầu (Superman) cho khảo sát mạch thường quy; để tay xuôi thân trong chấn thương cấp.",
        "Hội chứng lối thoát ngực (TOS): chụp 2 thì — thì 1 tay giơ cao, thì 2 tay xuôi dọc thân để so sánh mức độ chèn ép ĐM dưới đòn.",
        "Phạm vi quét từ gốc ĐM dưới đòn (quai ĐMC) xuống hết đầu ngón tay."
      ]},
      { tieuDe: "Thông số & dựng hình", items: [
        "Liều thuốc 80–100 mL, tốc độ 3.5–4.5 mL/s; ROI Bolus tracking tại ĐM chủ xuống hoặc ĐM dưới đòn.",
        "Tái tạo lát mỏng 0.625 mm; dựng hình MIP và 3D VRT cây mạch máu toàn bộ tay."
      ]}
    ],
    nguon: "Cẩm nang CLVT mạch máu chi – hàm mặt – tai xương đá — Khoa CĐHA BVHVGL"
  },

  /* CT — CỘT SỐNG (cổ · ngực · thắt lưng–cùng · Spinal CTA) + MẠCH MÁU NGỰC (Cẩm nang kỹ thuật CLVT) */
  {
    id: "ct-cs-co-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống cổ không tiêm thuốc",
    tuKhoa: ["ct cot song co", "clvt cot song co", "c-spine", "jefferson", "hangman", "mom nha", "odontoid", "khoa dien khop", "chan thuong cot song co"],
    thongSo: [
      { ten: "Chế độ quét", giaTri: "Helical xoắn ốc liên tục (KHÔNG nghiêng gantry)" },
      { ten: "Phạm vi quét", giaTri: "Nền sọ / clivus (khớp đội–chẩm, C1–C2) → hết đốt D1 (bản lề cổ–ngực)" },
      { ten: "Điện thế / Dòng", giaTri: "140 kVp · Auto mA 125–325" },
      { ten: "DFOV", giaTri: "13–16 cm (tập trung riêng cột sống cổ)" },
      { ten: "Tái tạo", giaTri: "Nhu mô 2.5 mm/bước 1.25 (Standard) · Xương & MPR 2.0–2.5 mm/bước 1.25 (Bone)" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, kéo hạ thấp 2 vai tối đa (Shoulder Pull-Down)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Chấn thương cột sống cổ cấp (gãy vững / mất vững, mảnh xương chèn ép tủy – rễ).",
        "Thoái hóa: hẹp ống sống trung tâm, hẹp lỗ ghép, chèn ép rễ, OPLL.",
        "U nguyên phát / di căn cột sống; viêm thân sống – đĩa đệm, lao, áp xe ngoài màng cứng.",
        "Định vị bắt vít cuống sống, đo ống sống trước mổ, kiểm tra độ vững dụng cụ hậu phẫu."
      ]},
      { tieuDe: "Tư thế & hạ thấp bóng vai", items: [
        "Nằm ngửa, đầu trong giá đỡ thẳng trục dọc đường giữa.",
        "Kéo 2 vai xuôi xuống tối đa (dặn bệnh nhân hạ vai / dùng đai hỗ trợ) để tách xương vai khỏi tầng C7–T1, triệt xảo ảnh cứng hóa chùm tia vùng chuyển tiếp cổ – ngực.",
        "Scout 2 bình diện thẳng (AP) và nghiêng (Lateral)."
      ]},
      { tieuDe: "Nguyên tắc quét", items: [
        "Quét xoắn ốc liên tục không tạo khoảng trống (gaps), lát mỏng thể tích để dựng MPR.",
        "KHÔNG nghiêng gantry theo từng khe đĩa đệm (phương pháp cũ dễ bỏ sót mảnh đĩa di trú hoặc khuyết eo)."
      ]},
      { tieuDe: "Thông số protocol", bang: {
        cols: ["Thông số", "16 dãy (16-MDCT)", "64 dãy trở lên"],
        rows: [
          ["Thu nhận (Acquisition)", "0.625 mm × 16 = 10 mm", "0.625 mm × 32–64 = 20–40 mm"],
          ["Vòng quay / Pitch", "0.8 s / Pitch 0.562", "0.8 s / Pitch 0.531"],
          ["kVp / mA", "140 kVp · Auto mA 125–325", "140 kVp · Auto mA 125–325"],
          ["DFOV", "13–16 cm", "13–16 cm"],
          ["Tái tạo xương & MPR", "2.0–2.5 mm/bước 1.25 (Bone)", "2.0–2.5 mm/bước 1.25 (Bone)"]
        ]
      }},
      { tieuDe: "Cài đặt cửa sổ", bang: {
        cols: ["Cửa sổ", "WL (HU)", "WW (HU)", "Mục đích"],
        rows: [
          ["Xương (Bone)", "300–400", "2000–4000", "Vỏ xương, bè xương, khớp đội–chẩm, đội–trục"],
          ["Mô mềm (Soft)", "50", "350", "Bao màng cứng, đĩa đệm, máu tụ phần mềm trước cột sống"]
        ]
      }},
      { tieuDe: "Tổn thương cổ đặc thù", items: [
        "Gãy Jefferson (C1): vỡ bung cung trước & sau đốt đội do nén dọc trục.",
        "Gãy Hangman (C2): gãy qua eo đốt trục, thân C2 trượt trước so với C3 (cơ chế quá ưỡn).",
        "Gãy mỏm nha C2 (Odontoid): Type I (đỉnh), Type II (nền – hay gặp, dễ khớp giả), Type III (lan thân C2) — CT Coronal/Sagittal là tiêu chuẩn vàng.",
        "Khóa diện khớp 2 bên (Bilateral Locked Facets): gập cổ quá mức, diện khớp 'cài nhau' hẹp nặng ống sống."
      ]}
    ],
    nguon: "Cẩm nang CLVT cột sống — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-cs-co-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống cổ có tiêm thuốc",
    tuKhoa: ["ct cot song co tiem", "u cot song co", "viem dia dem", "ap xe ngoai mang cung", "hau phau cot song", "xo seo"],
    thongSo: [
      { ten: "Tiêm thuốc", giaTri: "100 mL tĩnh mạch · 1.5–2.0 mL/s · quét thì tĩnh mạch muộn (scan delay 60–70 giây)" },
      { ten: "Tái tạo & cửa sổ", giaTri: "Như thì không tiêm; cửa sổ mô mềm (WL 50 / WW 350) đánh giá ngấm thuốc" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định tiêm thuốc", items: [
        "U cột sống nguyên phát hoặc di căn ngoài màng cứng — đánh giá mức cấp máu & xâm lấn mô mềm.",
        "Viêm thân đốt sống – đĩa đệm nhiễm khuẩn, áp xe ngoài màng cứng (ngấm thuốc dạng viền).",
        "Hậu phẫu: phân biệt xơ sẹo sau mổ (ngấm thuốc đồng nhất sớm) với thoát vị đĩa đệm tái phát (không ngấm bên trong)."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Phần lớn chấn thương / thoái hóa cổ đơn thuần KHÔNG cần tiêm thuốc.",
        "Tổn thương mạch máu tủy (rò màng cứng, AVM) → xem mục 'Chụp CLVT mạch máu tủy sống (Spinal CTA)'."
      ]}
    ],
    nguon: "Cẩm nang CLVT cột sống — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-cs-nguc-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống ngực không tiêm thuốc",
    tuKhoa: ["ct cot song nguc", "t-spine", "chance", "gay lun", "di can cot song nguc", "loang xuong"],
    thongSo: [
      { ten: "Chế độ quét", giaTri: "Helical xoắn ốc liên tục toàn ngực" },
      { ten: "Phạm vi quét", giaTri: "Bờ trên D1 → bờ dưới D12 (trọn 12 đốt ngực + khớp sườn–sống 2 bên)" },
      { ten: "Điện thế / Dòng", giaTri: "140 kVp · Auto mA 100–350" },
      { ten: "DFOV", giaTri: "14–18 cm (riêng trục cột sống)" },
      { ten: "Tái tạo", giaTri: "Nhu mô 2.5 mm/bước 1.25 (Standard) · Xương & MPR 2.0–2.5 mm/bước 1.25 (Bone)" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, 2 tay giơ cao qua đầu; nín thở nông sau hít vào nhẹ" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Chấn thương cột sống ngực; biến dạng xẹp lún thân đốt.",
        "U di căn (ưa thích ở cột sống ngực — từ ung thư vú, phổi, tiền liệt tuyến).",
        "Viêm thân sống – đĩa đệm, lao; đánh giá hậu phẫu."
      ]},
      { tieuDe: "Tư thế & phạm vi", items: [
        "2 tay giơ cao qua đầu đưa khối cơ – xương cánh tay ra khỏi lồng ngực, giảm xảo ảnh vệt ngang.",
        "Hướng dẫn nín thở nông để tránh rung động lồng ngực / vòm hoành ở đoạn ngực thấp.",
        "Phạm vi bờ trên D1 → bờ dưới D12; scout AP + Lateral."
      ]},
      { tieuDe: "Thông số protocol", bang: {
        cols: ["Thông số", "16 dãy", "64 dãy trở lên"],
        rows: [
          ["Thu nhận", "0.625 mm × 16 = 10 mm", "0.625 mm × 32–64 = 20–40 mm"],
          ["Vòng quay / Pitch", "0.8 s / Pitch 0.562", "0.8 s / Pitch 0.531"],
          ["kVp / mA", "140 kVp · Auto mA 100–350", "140 kVp · Auto mA 100–350"],
          ["DFOV", "14–18 cm", "14–18 cm"],
          ["Tái tạo xương & MPR", "2.0–2.5 mm/bước 1.25 (Bone)", "2.0–2.5 mm/bước 1.25 (Bone)"]
        ]
      }},
      { tieuDe: "Cài đặt cửa sổ", bang: {
        cols: ["Cửa sổ", "WL (HU)", "WW (HU)", "Mục đích"],
        rows: [
          ["Xương (Bone)", "400", "2000–4000", "Vỏ/bè xương, đường gãy, cung sau"],
          ["Mô mềm (Soft)", "50", "350", "Máu tụ, phần mềm quanh sống"]
        ]
      }},
      { tieuDe: "Tổn thương ngực đặc thù", items: [
        "Gãy Chance (T10–T12): đường gãy ngang xuyên thân đốt + cung sau do gập quá mức (tai nạn ô tô, dây an toàn qua bụng); thấy rõ trên Sagittal & 3D VRT.",
        "Gãy lún nén thân đốt (loãng xương): giảm chiều cao thân, vỡ mâm sụn nhưng thành sau & cung sau nguyên vẹn, ống sống không xâm lấn.",
        "Di căn: phân biệt tiêu xương (lytic) / xơ xương (blastic) / hỗn hợp."
      ]}
    ],
    nguon: "Cẩm nang CLVT cột sống — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-cs-nguc-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống ngực có tiêm thuốc",
    tuKhoa: ["ct cot song nguc tiem", "u di can cot song", "viem than song", "ap xe", "hau phau"],
    thongSo: [
      { ten: "Tiêm thuốc", giaTri: "100 mL · 1.5–2.0 mL/s · thì tĩnh mạch muộn (delay 60–70 giây)" },
      { ten: "Cửa sổ", giaTri: "Mô mềm WL 50 / WW 350 đánh giá ngấm thuốc; kết hợp cửa sổ xương" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định tiêm thuốc", items: [
        "U nguyên phát / di căn ngoài màng cứng — đánh giá cấp máu & xâm lấn mô mềm cạnh sống.",
        "Viêm thân đốt sống – đĩa đệm, áp xe ngoài màng cứng / cạnh sống.",
        "Theo dõi sau điều trị u, sau phẫu thuật."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Chấn thương / thoái hóa ngực đơn thuần không cần tiêm.",
        "Tổn thương mạch máu tủy → xem mục 'Chụp CLVT mạch máu tủy sống (Spinal CTA)'."
      ]}
    ],
    nguon: "Cẩm nang CLVT cột sống — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-cs-tl-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống thắt lưng không tiêm thuốc",
    tuKhoa: ["ct cot song that lung", "l-spine", "khuyet eo", "pars defect", "scottie dog", "thoat vi dia dem", "hep ong song", "dot chuyen tiep", "truot dot song"],
    thongSo: [
      { ten: "Chế độ quét", giaTri: "Helical xoắn ốc liên tục (không khoảng trống)" },
      { ten: "Phạm vi quét", giaTri: "Bờ trên L1 → bờ trên S1 / qua khớp cùng chậu" },
      { ten: "Điện thế / Dòng", giaTri: "140 kVp · Auto mA 150–380" },
      { ten: "DFOV", giaTri: "14–16 cm (tập trung trục cột sống)" },
      { ten: "Tái tạo", giaTri: "Nhu mô 2.5 mm/bước 1.25 (Standard) · Xương & MPR 2.0–2.5 mm/bước 1.25 (Bone)" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, 2 tay giơ cao qua đầu; kê đệm tam giác dưới khoeo (knee flexion) làm phẳng ưỡn thắt lưng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Chấn thương; vỡ eo đốt sống (spondylolysis), trượt đốt sống.",
        "Hẹp ống sống trung tâm, hẹp lỗ ghép, đau thần kinh tọa kháng trị; thoát vị đĩa đệm (khi chống chỉ định MRI).",
        "U nguyên phát / di căn; viêm thân sống – đĩa đệm, áp xe cơ thắt lưng chậu; định vị bắt vít, hậu phẫu."
      ]},
      { tieuDe: "Tư thế & đếm đốt chuyển tiếp", items: [
        "Nằm ngửa, 2 tay giơ cao; đệm tam giác dưới khoeo giúp gập nhẹ gối – háng, làm phẳng ưỡn thắt lưng, mở rộng lỗ liên hợp, giữ bất động.",
        "Scout AP CỰC KỲ quan trọng để đếm chính xác số đốt, nhận diện đốt chuyển tiếp (cùng hóa L5 / thắt lưng hóa S1, xương sườn cụt 13) — ngăn mổ nhầm tầng.",
        "Phạm vi bờ trên L1 → bờ trên S1 / qua khớp cùng chậu."
      ]},
      { tieuDe: "Thông số protocol", bang: {
        cols: ["Thông số", "16 dãy", "64 dãy trở lên"],
        rows: [
          ["Thu nhận", "0.625 mm × 16 = 10 mm", "0.625 mm × 32–64 = 20–40 mm"],
          ["Vòng quay / Pitch", "0.8 s / Pitch 0.562", "0.8 s / Pitch 0.531"],
          ["kVp / mA", "140 kVp · Auto mA 150–380", "140 kVp · Auto mA 150–380"],
          ["DFOV", "14–16 cm", "14–16 cm"],
          ["Tái tạo xương & MPR", "2.0–2.5 mm/bước 1.25 (Bone)", "2.0–2.5 mm/bước 1.25 (Bone)"]
        ]
      }},
      { tieuDe: "Cài đặt cửa sổ", bang: {
        cols: ["Cửa sổ", "WL (HU)", "WW (HU)", "Mục đích"],
        rows: [
          ["Xương (Bone)", "400", "2000–4000", "Khuyết eo, chồi xương, diện khớp"],
          ["Mô mềm (Soft)", "50", "350", "Đĩa đệm, bao màng cứng, áp xe cơ thắt lưng chậu"]
        ]
      }},
      { tieuDe: "Tổn thương thắt lưng đặc thù", items: [
        "Khuyết eo (Spondylolysis / pars defect, hay gặp L5): dấu 'đứt cổ chó Scottie dog' trên Axial & Sagittal.",
        "Bệnh lý đĩa đệm (danh pháp quốc tế): phình đồng tâm (bulge > 25% chu vi) vs thoát vị lồi (protrusion) / tống xuất (extrusion, sequestration).",
        "Hẹp ống sống & lỗ ghép: phì đại diện khớp, dày dây chằng vàng, chồi xương mâm sụn (đường kính trước–sau < 10–12 mm)."
      ]}
    ],
    nguon: "Cẩm nang CLVT cột sống — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-cs-tl-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT cột sống thắt lưng có tiêm thuốc",
    tuKhoa: ["ct cot song that lung tiem", "u cot song", "viem dia dem", "ap xe co that lung chau", "hau phau", "xo seo tai phat"],
    thongSo: [
      { ten: "Tiêm thuốc", giaTri: "100 mL · 1.5–2.0 mL/s · thì tĩnh mạch muộn (delay 60–70 giây)" },
      { ten: "Cửa sổ", giaTri: "Mô mềm WL 50 / WW 350 đánh giá ngấm thuốc" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định tiêm thuốc", items: [
        "U nguyên phát / di căn ngoài màng cứng — cấp máu & xâm lấn mô mềm.",
        "Viêm đĩa đệm – thân sống, áp xe ngoài màng cứng, áp xe cơ thắt lưng chậu (Psoas) ngấm thuốc dạng viền.",
        "Hậu phẫu: phân biệt xơ sẹo (ngấm đồng nhất sớm) vs thoát vị tái phát (không ngấm bên trong)."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Chấn thương / thoái hóa đơn thuần không cần tiêm.",
        "Tổn thương mạch máu tủy → xem mục 'Chụp CLVT mạch máu tủy sống (Spinal CTA)'."
      ]}
    ],
    nguon: "Cẩm nang CLVT cột sống — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-mach-mau-tuy",
    phanHe: "ct-mri", modality: "CT", nhom: "Cột sống",
    ten: "Chụp CLVT mạch máu tủy sống (Spinal CTA)",
    tuKhoa: ["spinal cta", "mach mau tuy", "ro mang cung tuy", "spinal dural avf", "avm tuy", "dong mach adamkiewicz", "bolus tracking"],
    thongSo: [
      { ten: "Đường truyền", giaTri: "Kim 18G tĩnh mạch cẳng tay" },
      { ten: "Thuốc cản quang", giaTri: "120 mL · 370 mgI/mL · 6.0 mL/s (cực nhanh) + đuổi 40 mL NaCl" },
      { ten: "Định thì", giaTri: "Bolus tracking — ROI ĐM chủ ngực / ĐM chủ dưới cơ hoành, kích hoạt thì động mạch khi ~125 HU" },
      { ten: "Phạm vi & tái tạo", giaTri: "Nền sọ → hết xương cùng; lát 1.25 mm/bước 0.625 mm (máy 16–64 dãy)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Rò động – tĩnh mạch màng cứng tủy (Spinal dural AVF).",
        "Dị dạng động – tĩnh mạch tủy (Spinal AVM).",
        "Bóc tách / tổn thương mạch nuôi tủy (động mạch Adamkiewicz)."
      ]},
      { tieuDe: "Kỹ thuật tiêm & định thì", items: [
        "Bơm tiêm lực 120 mL thuốc 370 mgI/mL, tốc độ 6.0 mL/s, đuổi 40 mL NaCl.",
        "Bolus tracking ROI tại ĐM chủ ngực / dưới cơ hoành, kích hoạt quét thì động mạch khi đậm độ ~125 HU.",
        "Sau thì động mạch có thể quét lặp thì tĩnh mạch trễ để đánh giá tĩnh mạch dẫn lưu."
      ]},
      { tieuDe: "Dựng hình", items: [
        "MIP mỏng 3–5 mm và 3D VRT có trừ xương để bộc lộ mạng động mạch tủy, động mạch rễ và cuống rò màng cứng."
      ]}
    ],
    nguon: "Cẩm nang CLVT cột sống — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-dm-chu-nguc",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
    ten: "Chụp CLVT động mạch chủ ngực (CTA ĐM chủ ngực)",
    tuKhoa: ["cta dong mach chu nguc", "thoracic aorta", "boc tach", "aortic dissection", "stanford", "imh", "pau", "phinh dmc", "ecg gating", "tevar", "candy cane"],
    thongSo: [
      { ten: "Phạm vi quét", giaTri: "Thì ĐM: đỉnh phổi (hoặc góc hàm nếu bóc tách lan lên) → ngã ba chậu (Stanford B); + thì không tiêm từ cung ĐMC → dưới ĐMC bụng 2 cm" },
      { ten: "Đường truyền", giaTri: "Kim 18G (tối thiểu 20G) tĩnh mạch khuỷu PHẢI (chịu 300 PSI)" },
      { ten: "Thuốc cản quang", giaTri: "80–120 mL (350–400 mgI/mL) · 4.0–5.0 mL/s + đuổi 30–40 mL NaCl" },
      { ten: "Định thì", giaTri: "Bolus tracking — ROI cung ĐMC / ĐMC xuống (ngang Carina), ngưỡng 100–150 HU, delay 3–5 giây" },
      { ten: "ECG gating", giaTri: "Rất khuyến cáo — triệt xảo ảnh co bóp gốc ĐMC lên (tránh dương tính giả bóc tách Stanford A)" },
      { ten: "Tái tạo", giaTri: "0.625–1.25 mm; kernel Standard / Vascular Smooth" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Hội chứng động mạch chủ cấp (AAS): bóc tách (Stanford A/B), máu tụ trong thành (IMH), loét xuyên thành (PAU).",
        "Phình quai & thân động mạch chủ ngực (theo dõi, lập kế hoạch TEVAR).",
        "Chấn thương đụng dập cuống mạch lớn vùng ngực; hẹp eo ĐMC, dị tật bẩm sinh quai động mạch."
      ]},
      { tieuDe: "Chuẩn bị & nín thở", items: [
        "Nhịn ăn ≥ 4 giờ; kim 18G tĩnh mạch khuỷu phải (300 PSI); kiểm tra dị ứng I-ốt, eGFR.",
        "Hít vào nhẹ và nín thở — TUYỆT ĐỐI không rặn / Valsalva (làm dội ngược & loãng thuốc)."
      ]},
      { tieuDe: "Thì chụp & hướng quét", items: [
        "Thì không tiêm (phát hiện máu tụ trong thành ngấm vôi, tổn thương tăng đậm độ tự nhiên) + thì động mạch.",
        "Hướng quét chân → đầu (Caudocranial) bắt đáy tim & quai ĐMC lúc thuốc đậm nhất, tránh xảo ảnh thở đáy phổi."
      ]},
      { tieuDe: "Thông số protocol", bang: {
        cols: ["Thông số", "16 dãy", "64 dãy trở lên"],
        rows: [
          ["Thu nhận", "16 × 1.25 mm = 20 mm", "64 × 0.625 mm = 40 mm"],
          ["Tái tạo", "1.0–1.25 mm / bước 0.8 mm", "0.625 mm / bước 0.4–0.5 mm"],
          ["Pitch", "0.9–1.0 (theo ECG)", "0.9–1.2 (Flash tới 3.2)"],
          ["kVp / mAs", "120 kVp · 150–350 mAs", "100–120 kVp · 150–400 mAs"],
          ["Thuốc / tốc độ", "80–120 mL · 4.0 mL/s", "80–100 mL · 4.0–5.0 mL/s"]
        ]
      }},
      { tieuDe: "Cửa sổ & dựng hình", items: [
        "Cửa sổ: Mạch máu (WL 150–180 / WW 600–800), Trung thất (WL 40–50 / WW 350–400), Phổi (WL −600…−700 / WW 1200–1600).",
        "Curved MPR chếch dọc (Candy Cane) dọc toàn bộ cung ĐMC; 3D VRT xoay 360° đo đường kính, cổ túi phình, chọn Stent Graft (EVAR/TEVAR)."
      ]},
      { tieuDe: "Tiêu chuẩn đạt", items: [
        "Đậm độ lòng ĐMC > 300 HU (lý tưởng 350–400), ngấm đồng nhất từ gốc đến ngã ba chậu; không xảo ảnh co bóp gốc ĐMC lên."
      ]}
    ],
    nguon: "Cẩm nang CLVT động mạch chủ ngực & động mạch phổi — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-ref-ctpa",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
    ten: "Chụp CLVT động mạch phổi (CTPA)",
    tuKhoa: ["ctpa", "dong mach phoi", "thuyen tac phoi", "pulmonary embolism", "pe", "d-dimer", "hampton hump", "iodine map", "dual energy", "cteph", "bolus tracking"],
    thongSo: [
      { ten: "Phạm vi & chiều quét", giaTri: "Từ đáy phổi (vòm hoành) → đỉnh phổi; chiều quét BẮT BUỘC dưới → trên (Caudocranial)" },
      { ten: "Điện thế / Dòng", giaTri: "100–120 kVp (80–100 kVp ở 64 dãy để tăng đậm độ I-ốt) · Auto mA 150–350" },
      { ten: "Thuốc cản quang", giaTri: "50–75 mL (350–370 mgI/mL) · 4.5–5.0 mL/s + đuổi 30–40 mL NaCl" },
      { ten: "Định thì", giaTri: "Bolus tracking — ROI THÂN ĐM phổi chính, ngưỡng 70–100 HU, delay 2–3 giây (đạt đỉnh nhanh 8–12 giây)" },
      { ten: "Tái tạo & cửa sổ", giaTri: "0.625–1.25 mm; cửa sổ mạch máu WL 150–180 / WW 700" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Thuyên tắc động mạch phổi cấp (PE): đau ngực đột ngột + khó thở, tụt HA, ho ra máu, D-Dimer tăng cao.",
        "Yếu tố nguy cơ huyết khối tĩnh mạch sâu chi dưới (DVT).",
        "Dị dạng thông động – tĩnh mạch phổi; tăng áp ĐM phổi vô căn hoặc mạn do huyết khối (CTEPH)."
      ]},
      { tieuDe: "Chiều quét đảo chiều (sống còn)", items: [
        "Bắt đầu từ ĐÁY phổi (dưới vòm hoành) quét ngược lên đỉnh phổi.",
        "Lý do: > 70% huyết khối tập trung nhánh thùy dưới / đáy phổi — quét đáy ngay khi thuốc đậm nhất; nếu bệnh nhân thở dốc cuối ca thì chỉ đỉnh phổi bị ảnh hưởng (vùng ít bệnh lý)."
      ]},
      { tieuDe: "Thông số protocol", bang: {
        cols: ["Thông số", "16 dãy", "64 dãy trở lên"],
        rows: [
          ["Thu nhận", "16 × 0.625–1.25 mm = 10–20 mm", "64 × 0.625 mm = 40 mm"],
          ["Tái tạo", "1.0–1.25 mm / bước 0.6 mm", "0.625 mm / bước 0.4 mm"],
          ["Thời gian quét ngực", "5–8 giây", "1–3 giây (triệt xảo ảnh thở)"],
          ["kVp / mA", "100–120 kVp · Auto 150–350 mA", "80–100 kVp · Auto mA"],
          ["Thuốc / tốc độ", "60–75 mL · 4.0–4.5 mL/s", "50–60 mL · 4.5–5.0 mL/s"]
        ]
      }},
      { tieuDe: "Tiêm thuốc & định thì", items: [
        "Bolus ngắn đậm 50–70 mL, tốc độ rất cao 4.5–5.0 mL/s (máy 2 nòng).",
        "Bơm đuổi 30–40 mL NaCl cùng tốc độ — rửa sạch thuốc đọng ở tim phải & TMC trên, triệt xảo ảnh cứng hóa chùm tia che ĐM phổi phải.",
        "Bolus tracking ROI thân ĐM phổi chính, ngưỡng 70–100 HU, kích hoạt tức thì (delay 2–3 giây)."
      ]},
      { tieuDe: "CT năng lượng kép & bản đồ tưới máu", items: [
        "DECT (80/140 kVp hoặc Spectral) tách đậm độ I-ốt khỏi mô phổi.",
        "Bản đồ tưới máu phổi (Iodine Perfusion Map) phát hiện khiếm khuyết tưới máu vi thể do huyết khối nhánh ngoại vi."
      ]},
      { tieuDe: "Cửa sổ, dựng hình & tiêu chuẩn đạt", items: [
        "Cửa sổ: Mạch máu (WL 150–180 / WW 600–800), Trung thất, Phổi (WL −600…−700 / WW 1200–1600 — tìm nhồi máu phổi hình nêm Hampton's Hump).",
        "MIP mỏng/dày tìm khuyết thuốc (filling defect) của cục máu đông.",
        "Đạt chuẩn: đậm độ thân ĐM phổi > 250 HU (lý tưởng > 350), ngấm đến hạ phân thùy cấp 4–5; tim phải & TMC trên đã rửa sạch; không xảo ảnh thở đáy phổi."
      ]}
    ],
    nguon: "Cẩm nang CLVT động mạch chủ ngực & động mạch phổi — Khoa CĐHA BVHVGL"
  },

  /* CT — ĐỘNG MẠCH VÀNH · HỆ TIẾT NIỆU · LỒNG NGỰC & LDCT (Cẩm nang kỹ thuật CLVT) */
  {
    id: "ct-diem-voi-hoa-vanh",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
    ten: "Chụp CLVT tính điểm vôi hóa động mạch vành (Calcium score)",
    tuKhoa: ["calcium score", "diem voi hoa vanh", "agatston", "ccs", "ecg gated", "tam soat mach vanh", "blooming", "khong tiem"],
    thongSo: [
      { ten: "Kiểu quét", giaTri: "Cine / Prospective ECG Triggering (ngắt quãng), KHÔNG tiêm thuốc" },
      { ten: "Phạm vi quét", giaTri: "1 cm dưới trạc ba khí quản (Carina) → hết đáy / mỏm tim" },
      { ten: "Đồng bộ ECG", giaTri: "Thì giữa/cuối tâm trương (~75% khoảng R-R)" },
      { ten: "Tái tạo", giaTri: "2.5 mm lát liên tiếp" },
      { ten: "Điện thế / Dòng", giaTri: "120 kVp · 250–500 mA (tùy thể trạng)" },
      { ten: "DFOV", giaTri: "25 cm (tập trung diện tích tim)" }
    ],
    noiDung: [
      { tieuDe: "Nguyên lý & mục đích", items: [
        "Chuỗi quét CT ngực ngắt quãng đồng bộ ECG, KHÔNG tiêm thuốc.",
        "Mức vôi hóa tương quan thuận với xơ vữa động mạch vành và dự báo nguy cơ biến cố tim mạch."
      ]},
      { tieuDe: "Thang điểm Agatston & phân tầng nguy cơ", bang: {
        cols: ["Điểm Agatston (CCS)", "Mức vôi hóa", "Phân tầng nguy cơ"],
        rows: [
          ["0", "Không phát hiện vôi hóa", "Rất thấp / âm tính"],
          ["1 – 10", "Vôi hóa tối thiểu", "Thấp"],
          ["11 – 100", "Vôi hóa nhẹ", "Nhẹ"],
          ["101 – 400", "Vôi hóa trung bình", "Trung bình"],
          ["> 400", "Vôi hóa diện rộng / nặng", "Cao"]
        ]
      }},
      { tieuDe: "Ảnh hưởng đến chụp CCTA", items: [
        "Vôi hóa lớn gây ảnh giả 'nở hoa' (Blooming) che lòng mạch, đánh giá quá mức mức độ hẹp.",
        "Máy 64 dãy thường quy: CCS > 400 thường cân nhắc ngưng CCTA có thuốc do sai lệch cao.",
        "Máy Dual Source / đa dãy mới: vẫn chụp được nếu vôi hóa rải rác; ngưng nếu mật độ cao tập trung một nhánh chính."
      ]},
      { tieuDe: "Ghi chú kỹ thuật", items: [
        "Agatston tính trên tổn thương vôi hóa đậm độ > 130 HU, diện tích ≥ 1 mm² (≥ 3 pixel liên tiếp)."
      ]}
    ],
    nguon: "Cẩm nang CLVT động mạch vành — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-dm-vanh",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
    ten: "Chụp CLVT động mạch vành (MSCT mạch vành – CCTA)",
    tuKhoa: ["ct dong mach vanh", "ccta", "coronary cta", "msct mach vanh", "stent", "cabg", "ecg gating", "metoprolol", "nitroglycerin", "bolus tracking"],
    thongSo: [
      { ten: "Nhịp tim mục tiêu", giaTri: "50–65 l/ph (lý tưởng < 60); Metoprolol 25–100 mg uống / IV 5 mg (tối đa 30 mg); Ivabradine nếu CCĐ chẹn beta" },
      { ten: "Giãn mạch vành", giaTri: "Nitroglycerin xịt/ngậm dưới lưỡi 3–5 phút trước tiêm" },
      { ten: "Đường truyền", giaTri: "Kim 18G (tối thiểu 20G) tĩnh mạch khuỷu PHẢI (4.5–5.5 mL/s)" },
      { ten: "Thuốc cản quang", giaTri: "60–80 mL (60–70 mL Dual Source · 350–370 mgI/mL) · 4.5–5.5 mL/s + đuổi 30–50 mL NaCl" },
      { ten: "Định thì", giaTri: "Bolus tracking ROI ĐM chủ, ngưỡng 100–150 HU, delay 5–6 giây; hoặc Test bolus" },
      { ten: "Phạm vi & tái tạo", giaTri: "Gốc ĐMC/Carina → dưới mỏm tim 2 cm (CABG: từ trên xương đòn); lát 0.625 mm, pha 70–80% R-R (hoặc 40–50% khi nhịp nhanh)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Tầm soát bệnh ĐM vành (CAD) ở nguy cơ trung bình / đau thắt ngực không điển hình.",
        "Kiểm tra độ thông Stent, cầu nối sau phẫu thuật bắc cầu chủ – vành (CABG).",
        "Dị dạng bẩm sinh ĐM vành (vị trí xuất phát, số lượng, đường đi bất thường).",
        "Phân tích bản chất mảng xơ vữa (vôi hóa cứng vs mềm giàu lipid nguy cơ cao)."
      ]},
      { tieuDe: "Chống chỉ định", items: [
        "Thuốc I-ốt: phản vệ nặng, có thai, eGFR < 30.",
        "Chẹn beta: hen nặng / COPD tiến triển, nhịp < 50, block nhĩ thất độ II/III.",
        "Nitroglycerin: đang dùng ức chế PDE-5 (Sildenafil/Tadalafil trong 24–48h), HA tâm thu < 100 mmHg, hẹp van ĐMC nặng, bệnh cơ tim phì đại tắc nghẽn."
      ]},
      { tieuDe: "Chuẩn bị & tối ưu sinh hiệu", items: [
        "Kiểm soát nhịp tim (chẹn beta / Ivabradine) đạt 50–65 l/ph, đều.",
        "Nitroglycerin dưới lưỡi giãn tối đa mạch vành trước tiêm.",
        "Đường truyền tĩnh mạch khuỷu phải; luyện bệnh nhân nín thở sâu, đều theo câu lệnh."
      ]},
      { tieuDe: "Phương pháp đồng bộ ECG", bang: {
        cols: ["Kỹ thuật", "Cơ chế", "Ưu điểm", "Hạn chế / liều"],
        rows: [
          ["Prospective Triggering (tiền cứu)", "Phát tia ngắt quãng đúng pha tâm trương", "Giảm liều đáng kể (1–8 mSv)", "Cần nhịp tim chậm & đều"],
          ["Retrospective Gating (hồi cứu)", "Quét xoắn ốc liên tục suốt chu kỳ tim", "Tái tạo mọi pha (0–95%), đánh giá EF & cử động thành tim", "Liều cao hơn (6–18 mSv)"],
          ["High-pitch Flash / 1 nhịp tim", "Quét toàn tim trong ~250 ms (1 nhịp)", "Liều cực thấp (< 1–3 mSv), siêu nhanh", "Chỉ máy 2 đầu phát / đa dãy mới"]
        ]
      }},
      { tieuDe: "Tái tạo & phân tích mảng xơ vữa", items: [
        "Tái tạo 0.625 mm; ưu tiên pha 70–80% R-R (tâm thu 40–50% khi nhịp nhanh); Curved MPR dọc LAD / LCx / RCA, MIP, 3D VRT.",
        "Mảng mềm: lipid 40–50 HU, mô xơ ~100 HU (nguy cơ nứt vỡ cao); mảng vôi hóa > 130 HU.",
        "Khảo sát độ thông Stent (lưu ý beam hardening) và các nhánh cầu nối CABG."
      ]},
      { tieuDe: "Tiêu chuẩn đạt", items: [
        "Đậm độ thất trái & ĐM vành > 350 HU (tối thiểu > 250–300); thuốc đồng nhất tim trái, tim phải đã thoát sạch; mạch vành giãn rộng; không xảo ảnh cử động hô hấp / tim."
      ]}
    ],
    nguon: "Cẩm nang CLVT động mạch vành — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-he-tiet-nieu-thuong-quy",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT hệ tiết niệu không tiêm thuốc",
    tuKhoa: ["ct tiet nieu khong tiem", "ct kub", "ct soi nieu", "stone protocol", "soi than", "soi nieu quan", "dau quan than", "hu soi", "phlebolith", "low dose"],
    thongSo: [
      { ten: "Mục đích", giaTri: "CT sỏi / KUB không thuốc — độ nhạy 98%, đặc hiệu 96–98% phát hiện sỏi tiết niệu" },
      { ten: "Phạm vi quét", giaTri: "Cực trên 2 thận (ngang D11–D12) → hết bờ dưới khớp mu (trọn đáy bàng quang)" },
      { ten: "Liều thấp", giaTri: "mAs 50–100 (hoặc AEC); liều hiệu dụng ~1.5–3.0 mSv" },
      { ten: "Lưu ý", giaTri: "TUYỆT ĐỐI KHÔNG uống thuốc cản quang đường tiêu hóa (che lấp niệu quản)" },
      { ten: "Điện thế", giaTri: "120 kVp" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Cơn đau quặn thận cấp nghi sỏi thận / niệu quản / bàng quang.",
        "Theo dõi kích thước, vị trí sỏi & đo đậm độ HU để chọn phương pháp can thiệp (ESWL / PCNL / nội soi ngược dòng).",
        "Chống chỉ định tuyệt đối với I-ốt (suy thận nặng, tiền sử sốc phản vệ).",
        "Vôi hóa thận (nephrocalcinosis), máu tụ tự nhiên quanh thận."
      ]},
      { tieuDe: "Dự đoán bản chất sỏi theo đậm độ HU", bang: {
        cols: ["Thành phần sỏi", "Đậm độ (HU)", "Chiến lược can thiệp"],
        rows: [
          ["Axit Uric", "200 – 450", "Đáp ứng tốt kiềm hóa nước tiểu (thuốc làm tan sỏi)"],
          ["Struvite (nhiễm trùng)", "500 – 700", "Hay tạo sỏi san hô; phẫu thuật lấy sỏi + kháng sinh"],
          ["Cystine", "600 – 800", "Rối loạn chuyển hóa; đề kháng ESWL"],
          ["Canxi Oxalate / Phosphate", "900 – 1600+", "Rất cứng; > 1000 HU kém đáp ứng ESWL, ưu tiên nội soi tán sỏi"]
        ]
      }},
      { tieuDe: "Phân biệt sỏi niệu quản với vôi hóa tĩnh mạch chậu (Phleboliths)", items: [
        "Dấu quầng sáng mô mềm (Soft-tissue Rim Sign): sỏi niệu quản có vòng mô mềm (thành niệu quản phù) bao quanh; phlebolith không có.",
        "Tâm vôi hóa: phlebolith thường tâm giảm tỷ trọng (rỗng giữa), có 'đuôi sao chổi' (Comet-tail) về mạch máu tiểu khung; sỏi đặc đồng nhất nằm đúng đường niệu quản.",
        "Tư thế nằm sấp bổ sung: sỏi kẹt lỗ niệu quản cố định vị trí, sỏi tự do lăn ra thành trước bàng quang."
      ]}
    ],
    nguon: "Cẩm nang CLVT hệ tiết niệu — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-he-tiet-nieu-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT hệ tiết niệu có tiêm thuốc cản quang (CTU)",
    tuKhoa: ["ct tiet nieu tiem", "ctu", "ct urography", "u than", "rcc", "bosniak", "angiomyolipoma", "tcc", "nieu do", "split bolus", "da mau", "dai mau"],
    thongSo: [
      { ten: "Chuẩn bị", giaTri: "Uống 500–1000 mL nước lọc + nhịn tiểu; KHÔNG cản quang đường tiêu hóa; Furosemide 5–10 mg IV (tùy chọn, làm căng đều niệu quản)" },
      { ten: "Thuốc cản quang", giaTri: "100–120 mL (300–370 mgI/mL) · 3.0–4.0 mL/s" },
      { ten: "Đa pha khối u thận", giaTri: "NECT · Vỏ tủy (30–40s) · Thận đồ (90–100s) · Bài tiết (5–10 phút)" },
      { ten: "Cảnh báo thận", giaTri: "Kiểm tra Creatinine/eGFR; eGFR < 30 → hội chẩn / phương pháp thay thế (PC-AKI)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Đái máu đại thể / vi thể tái diễn không rõ nguyên nhân (tầm soát ung thư đường niệu — chỉ định vàng ở người > 40 tuổi).",
        "U nhu mô thận: phân biệt u lành (AML, Oncocytoma) với ung thư tế bào thận (RCC).",
        "U biểu mô đường niệu (TCC) đài bể thận, niệu quản, bàng quang.",
        "Nhiễm trùng phức tạp (viêm đài bể thận, áp xe thận/quanh thận, lao); chấn thương hệ niệu; đánh giá người hiến thận."
      ]},
      { tieuDe: "Protocol đa pha khối u thận", bang: {
        cols: ["Pha", "Delay", "Đặc điểm & ý nghĩa"],
        rows: [
          ["Không tiêm (NECT)", "0", "Tỷ trọng nền; vôi hóa; mỡ vi thể trong AML"],
          ["Vỏ tủy (Corticomedullary)", "30–40 giây", "Vỏ thận ngấm mạnh (> 150–200 HU), tủy chưa ngấm; khảo sát ĐM thận, u tế bào sáng giàu mạch"],
          ["Thận đồ (Nephrogenic)", "90–100 giây", "Nhu mô ngấm đồng đều (120–150 HU) — PHA QUAN TRỌNG NHẤT phát hiện u thận"],
          ["Bài tiết (Excretory)", "5–10 phút", "Thuốc vào đài bể thận; đánh giá xâm lấn/phá hủy xoang thận & niệu mạc"]
        ]
      }},
      { tieuDe: "Phân biệt u lành / ác & nang Bosniak 2019", bang: {
        cols: ["Bosniak", "Đặc điểm CT", "Nguy cơ ác tính", "Xử trí"],
        rows: [
          ["I", "Nang đơn thuần, thành mỏng, dịch 0–20 HU, không vách/vôi, không ngấm", "0%", "Lành; không theo dõi"],
          ["II", "Vài vách mỏng < 1mm, vôi hóa mịn, nang tăng tỷ trọng < 3cm, không ngấm", "< 1%", "Lành; không can thiệp"],
          ["IIF", "Nhiều vách mỏng, vôi hóa thô, > 3cm, có thể ngấm nhẹ vách, không nốt sùi", "~ 5%", "Theo dõi CT/MRI 6–12–24 tháng"],
          ["III", "Thành/vách dày đều > 2mm, bờ không đều, ngấm rõ (> 15 HU)", "~ 50%", "Nghi ác; cắt bán phần / bóc u"],
          ["IV", "Nốt sùi đặc / khối mô mềm ngấm thuốc mạnh", "> 85–90%", "Ác (Cystic RCC); cắt thận triệt căn / bán phần"]
        ]
      }},
      { tieuDe: "Quy tắc ngấm thuốc & đặc điểm u", items: [
        "Ngấm thuốc thực thụ khi tăng ≥ 15–20 HU sau tiêm (10–15 HU nghi ngờ; < 10 HU = nang đơn thuần).",
        "AML: vùng mỡ âm tính (−20 đến −80 HU) trong u. Clear cell RCC: giàu mạch, ngấm mạnh/sớm thì vỏ tủy, wash-out nhanh, hay hoại tử/xuất huyết. Papillary/Chromophobe: nghèo mạch, ngấm từ từ đạt đỉnh thì thận đồ."
      ]},
      { tieuDe: "CT niệu đồ (CTU): đa pha vs chia liều", bang: {
        cols: ["Giao thức", "Quy trình", "Ưu / nhược"],
        rows: [
          ["Single-Bolus (đa pha)", "NECT → tiêm 100–120 mL (3 mL/s) → thận đồ (90–100s) → bài tiết (8–15 phút)", "Tách bạch pha nhu mô & đường niệu; liều tia cao (quét 3 lần)"],
          ["Split-Bolus (chia liều)", "NECT → Bolus 1 (30–50 mL, chờ 8–10 phút) → Bolus 2 (70–80 mL, 3 mL/s) → quét 1 lần ở 90–100s", "Giảm 40–50% liều tia; không đo riêng ΔHU thận thì bài tiết"]
        ]
      }},
      { tieuDe: "Tối ưu lấp đầy niệu quản, cửa sổ & dựng hình", items: [
        "Nghiệm pháp lăn trở (prone / rolling) trước thì bài tiết + truyền 250 mL NaCl giữ dòng bài niệu, tránh khuyết thuốc giả do nhu động.",
        "Cửa sổ: mô mềm/nhu mô (WL 40–50 / WW 350–400), sỏi (WL 150–250 / WW 600–1000), bài tiết – niệu đồ (WL 300–400 / WW 800–1200).",
        "Dựng hình: Curved MPR dọc niệu quản; MIP dày thì bài tiết (mô phỏng UIV); 3D VRT lập bản đồ trước PCNL / cắt thận bán phần."
      ]}
    ],
    nguon: "Cẩm nang CLVT hệ tiết niệu — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-long-nguc-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
    ten: "Chụp CLVT lồng ngực không tiêm thuốc",
    tuKhoa: ["ct long nguc khong tiem", "ct nguc", "hrct", "benh phoi mo ke", "ild", "xo phoi", "khi phe thung", "gian phe quan", "not phoi", "fleischner", "tran khi", "tran dich"],
    thongSo: [
      { ten: "Phạm vi quét", giaTri: "Đỉnh phổi (1–2 cm trên xương đòn) → hết vòm hoành & góc sườn hoành 2 bên" },
      { ten: "Điện thế / Dòng", giaTri: "120 kVp (140 nếu béo) · Auto mA 100–150 (Noise Index ~15)" },
      { ten: "Pitch", giaTri: "1.2–1.5" },
      { ten: "Tái tạo", giaTri: "Nhu mô 2.5–5 mm; mỏng 0.625–1.25 mm; kernel Standard (trung thất) + High-res/Bone (phổi)" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, 2 tay giơ cao qua đầu; hít vào sâu, nín thở nhẹ (không Valsalva)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Bệnh nhu mô phổi lan tỏa, bệnh phổi mô kẽ (ILD), xơ phổi, khí phế thũng, giãn phế quản.",
        "Nốt phổi đơn độc / theo dõi kích thước nốt theo khuyến cáo Fleischner; tầm soát (LDCT — mục riêng).",
        "Tràn khí / tràn dịch màng phổi đơn thuần; chấn thương đụng dập, gãy xương sườn / xương ức."
      ]},
      { tieuDe: "Thông số protocol thường quy", bang: {
        cols: ["Thông số", "16 dãy", "64 dãy trở lên"],
        rows: [
          ["Collimation", "16 × 1.25 mm = 20 mm", "64 × 0.625 mm = 40 mm"],
          ["Pitch", "1.2–1.375", "1.375–1.5"],
          ["kVp / mA", "120 kVp · AEC 100–150", "120 kVp (100–120) · AEC"],
          ["Nhu mô", "2.5–5 mm / bước 1.25–2.5", "2.5 mm / bước 1.25"],
          ["Lát mỏng", "1.25 mm / bước 0.625", "0.625–1.0 mm / bước 0.5"]
        ]
      }},
      { tieuDe: "HRCT (độ phân giải cao) — mô kẽ", items: [
        "3 nguyên tắc: lát siêu mỏng 0.625–1.25 mm (triệt thể tích bán phần); kernel tần số cao / Bone; ma trận 512×512 + DFOV khu trú. KHÔNG tiêm thuốc.",
        "Thì Nằm ngửa hít vào (Supine Inspiration): bản đồ tổng thể mô kẽ, dày vách liên tiểu thùy, kính mờ, nốt phổi.",
        "Thì Nằm ngửa thở ra (Expiration): phát hiện bẫy khí (Air Trapping) — vùng bệnh giữ đậm độ đen quá sáng.",
        "Thì Nằm sấp (Prone): phân biệt xẹp phổi thụ động vùng đáy (biến mất khi nằm sấp) với xơ hóa dưới màng phổi thực thụ (còn tồn tại)."
      ]},
      { tieuDe: "Cài đặt cửa sổ", bang: {
        cols: ["Cửa sổ", "WL (HU)", "WW (HU)", "Mục đích"],
        rows: [
          ["Nhu mô phổi (Lung)", "−600…−700", "1200–1700", "Nhu mô, phế quản, nốt phổi, khí thũng, màng phổi"],
          ["Trung thất (Mediastinal)", "40–50", "350–400", "Tim, mạch lớn, hạch, mỡ trung thất, dịch"],
          ["Xương (Bone)", "400–700", "2000–2500", "Xương sườn, ức, cột sống ngực, vôi hóa"]
        ]
      }}
    ],
    nguon: "Cẩm nang CLVT lồng ngực & tầm soát phổi liều thấp — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-long-nguc-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
    ten: "Chụp CLVT lồng ngực có tiêm thuốc",
    tuKhoa: ["ct long nguc tiem", "cect nguc", "ung thu phoi", "tnm", "hach trung that", "u trung that", "ap xe phoi", "mu mang phoi", "di can thuong than"],
    thongSo: [
      { ten: "Thuốc cản quang", giaTri: "70–100 mL (1.5 mL/kg · 300–370 mgI/mL) · 2.5–3.0 mL/s + đuổi 30–50 mL NaCl" },
      { ten: "Thời gian trễ", giaTri: "35–50 giây (thì tĩnh mạch / trung thất)" },
      { ten: "Đường truyền", giaTri: "Kim 18–20G tĩnh mạch khuỷu" },
      { ten: "Phạm vi (ung thư phổi)", giaTri: "Mở rộng xuống qua hết 2 tuyến thượng thận (ngang L2) tầm soát di căn" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định tiêm thuốc", items: [
        "Chẩn đoán & phân giai đoạn TNM ung thư phổi (hạch rốn phổi, hạch trung thất ngấm thuốc, xâm lấn màng phổi & mạch máu lớn).",
        "Khối u trung thất (u tuyến ức, u tế bào mầm, teratoma, u thần kinh).",
        "Nhiễm trùng phổi nặng, viêm mủ màng phổi, áp xe phổi, tổn thương hoại tử.",
        "Nghi thuyên tắc ĐM phổi (CTPA — mục riêng); bóc tách / phình / vỡ ĐMC ngực; AVM phổi; chấn thương rách mạch cuống tim."
      ]},
      { tieuDe: "Tiêm & định thì", items: [
        "70–100 mL (1.5 mL/kg), 2.5–3.0 mL/s, bơm đuổi 30–50 mL NaCl (rửa sạch TM dưới đòn / chủ trên, giảm beam hardening che đỉnh phổi phải & trung thất trên).",
        "Scan delay 35–50 giây (thì trung thất) — ngấm đồng nhất hạch, u & phân biệt mạch máu trung thất."
      ]},
      { tieuDe: "Cửa sổ & xảo ảnh", items: [
        "Cửa sổ: phổi (WL −600…−700 / WW 1200–1700), trung thất (WL 40–50 / WW 350–400), xương, mạch máu/PE (WL 150–180 / WW 700–800).",
        "Beam hardening do thuốc đậm ở TM dưới đòn / chủ trên → khắc phục bằng bơm đuổi 40–50 mL NaCl cùng tốc độ."
      ]}
    ],
    nguon: "Cẩm nang CLVT lồng ngực & tầm soát phổi liều thấp — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-ref-ldct-phoi",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
    ten: "Chụp CLVT phổi liều thấp tầm soát (LDCT)",
    tuKhoa: ["ldct", "tam soat ung thu phoi", "lung screening", "low dose ct", "nlst", "goi-nam", "pack-years", "uspstf", "acr", "iterative reconstruction", "not mo phoi"],
    thongSo: [
      { ten: "Tiêm thuốc", giaTri: "TUYỆT ĐỐI KHÔNG TIÊM" },
      { ten: "Điện thế / Dòng", giaTri: "100–120 kVp · 20–40 mAs (gầy < 20; béo 50–60)" },
      { ten: "Liều", giaTri: "CTDIvol ≤ 3.0 mGy (mục tiêu ≤ 1.5); liều hiệu dụng 1.0–1.5 mSv (~1/5 CT ngực thường)" },
      { ten: "Lát cắt", giaTri: "Thu nhận ≤ 1.0 mm (0.625 mm máy 64 dãy); tái tạo 1.0–1.5 mm" },
      { ten: "Tái tạo", giaTri: "Bắt buộc tái tạo lặp (IR / ASiR / SAFIRE / AIDR / Deep Learning); MIP mỏng 3–5 mm" }
    ],
    noiDung: [
      { tieuDe: "Bản chất & cơ sở", items: [
        "Tương phản phổi tự nhiên cực lớn (nhu mô −700…−900 HU vs nốt đặc +30…+50 HU, chênh > 700 HU) → giảm mạnh liều mà vẫn thấy nốt vài mm.",
        "Thử nghiệm NLST: LDCT giảm 20% tử vong do ung thư phổi so với X-quang ngực; liều ~1.0–1.5 mSv."
      ]},
      { tieuDe: "Đối tượng tầm soát (USPSTF / ACR)", items: [
        "Tuổi 50–80.",
        "Hút thuốc nặng ≥ 20 gói-năm (số gói/ngày × số năm).",
        "Đang hút hoặc đã cai trong vòng 15 năm.",
        "Tiền sử phơi nhiễm nghề (amiăng, bụi phóng xạ) / tiền sử gia đình ung thư phổi."
      ]},
      { tieuDe: "Thông số LDCT (chuẩn ACR)", bang: {
        cols: ["Thông số", "Thể trạng chuẩn (BMI 20–30)", "Gầy / béo phì"],
        rows: [
          ["kVp", "100–120", "Gầy < 20: 80–100; béo > 30: 120"],
          ["mAs", "20–40 (hoặc AEC)", "Gầy: < 20; béo: 50–60"],
          ["CTDIvol", "≤ 3.0 mGy (mục tiêu ≤ 1.5)", "≤ 3.0 mGy (người 70 kg)"],
          ["Liều hiệu dụng", "1.0–1.5 mSv", "Giữ < 2.0 mSv"],
          ["Lát thu nhận", "≤ 1.0 mm", "≤ 1.0 mm"]
        ]
      }},
      { tieuDe: "Vai trò tái tạo lặp (IR)", items: [
        "mA cực thấp (20–40 mAs) → nhiễu lượng tử tăng mạnh trên FBP truyền thống.",
        "LDCT bắt buộc kết hợp tái tạo lặp (ASiR / SAFIRE / AIDR 3D / Deep Learning IR): triệt nhiễu hạt, phục hồi độ tương phản bờ nốt mà vẫn giữ liều siêu thấp."
      ]}
    ],
    nguon: "Cẩm nang CLVT lồng ngực & tầm soát phổi liều thấp — Khoa CĐHA BVHVGL"
  },

  /* CT — Ổ BỤNG – TIỂU KHUNG (NECT & đa pha: gan, chấn thương, tụy, thận, ruột thừa, đại–trực tràng) */
  {
    id: "ct-tang-tren-o-bung",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT ổ bụng – tiểu khung không tiêm thuốc",
    tuKhoa: ["ct o bung khong tiem", "nect bung", "clvt o bung", "soi nieu", "voi hoa tuy", "gan nhiem mo", "gan nhiem sat", "mau tu", "xuat huyet noi"],
    thongSo: [
      { ten: "Phạm vi quét", giaTri: "Trên vòm hoành 2 cm → hết khớp mu" },
      { ten: "Điện thế / Dòng", giaTri: "120 kVp (140 nếu > 90 kg) · Auto mA 250–400" },
      { ten: "Độ dày tái tạo", giaTri: "Nhu mô 2.5–5 mm; sỏi hệ niệu tái tạo mỏng 1.25 mm (không bỏ sót sỏi đoạn chậu, lỗ niệu quản)" },
      { ten: "Chuẩn bị", giaTri: "Nhịn ăn 4–6 giờ; đường uống nước/trung tính 800–1000 mL chia 3 đợt" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, 2 tay giơ cao qua đầu" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định (không tiêm)", items: [
        "Đau quặn thận nghi sỏi thận – niệu quản – bàng quang.",
        "Đánh giá vôi hóa tụy trong viêm tụy mạn.",
        "Gan nhiễm mỡ (< 40–50 HU) hoặc gan nhiễm sắt (> 70 HU).",
        "Máu tụ tự nhiên / xuất huyết nội ổ bụng."
      ]},
      { tieuDe: "Chuẩn bị bệnh nhân", items: [
        "Nhịn ăn 4–6 giờ; kiểm tra dị ứng I-ốt & chức năng thận (nếu dự kiến tiêm thì sau).",
        "Đường uống: nước lọc / dung dịch trung tính 800–1000 mL, chia 3 đợt (450 mL trước 45–60 phút tới đại tràng; 250 mL trước 20 phút căng hồi tràng; 200 mL tại bàn chụp căng dạ dày – tá tràng).",
        "Bơm trực tràng (khi nghi rò tiêu hóa, vỡ đại tràng, u trực tràng): 500–1000 mL nước ấm hoặc I-ốt pha loãng 2–3% (tránh Barium đậm đặc gây xảo ảnh vệt sáng)."
      ]},
      { tieuDe: "Cài đặt cửa sổ", bang: {
        cols: ["Cửa sổ", "WL (HU)", "WW (HU)", "Mục đích"],
        rows: [
          ["Nhu mô gan", "70", "150", "Cửa sổ hẹp, tăng tương phản tìm u gan nhỏ"],
          ["Mô mềm bụng", "40–50", "350–400", "Ruột, mỡ mạc treo, dịch tự do, tạng đặc"],
          ["Xương", "300–500", "1600–2500", "Gãy xương chậu, di căn tiêu/xơ xương"],
          ["Phổi (đáy phổi)", "−600…−700", "1500", "Tràn khí màng phổi, xẹp đáy phổi đi kèm"]
        ]
      }}
    ],
    nguon: "Cẩm nang CLVT ổ bụng – tiểu khung — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-tang-tren-o-bung-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT ổ bụng – tiểu khung có tiêm thuốc cản quang",
    tuKhoa: ["ct o bung tiem", "da pha", "multiphasic", "u gan", "hcc", "hemangioma", "chan thuong bung", "vo tang", "u tuy", "viem tuy", "u than", "viem ruot thua", "u dai trang", "thi tinh mach cua"],
    thongSo: [
      { ten: "Đường truyền", giaTri: "Kim 18–20G tĩnh mạch khuỷu (300 PSI); thử bơm 20 mL NaCl kiểm tra thông suốt trước tiêm" },
      { ten: "Thuốc cản quang", giaTri: "100–150 mL (1.5–2 mL/kg · 350 mgI/mL) · 3.0–4.0 mL/s (5 mL/s nếu CTA) + đuổi 30–50 mL NaCl" },
      { ten: "Các thì quét", giaTri: "NECT · ĐM sớm 15–22s · ĐM muộn 35–40s · TM cửa 65–75s · thận đồ 90–100s · trễ 3–15 phút" },
      { ten: "Phạm vi", giaTri: "Trên vòm hoành → hết khớp mu" }
    ],
    noiDung: [
      { tieuDe: "Các thì quét đa pha (Multiphasic CT)", bang: {
        cols: ["Pha (thì)", "Delay", "Mục đích khảo sát chính"],
        rows: [
          ["Trước tiêm (NECT)", "0", "Sỏi thận, vôi hóa tụy, mỡ trong u gan, máu tụ tự nhiên"],
          ["Động mạch sớm", "15–22 giây", "CTA mạch máu tạng, phình / bóc tách mạch bụng"],
          ["Động mạch muộn", "35–40 giây", "U tăng sinh mạch: HCC, FNH, adenoma, u đảo tụy"],
          ["Tĩnh mạch cửa (PVP)", "65–75 giây", "Toàn bộ ổ bụng; di căn gan nghèo mạch; vỡ tạng"],
          ["Thận đồ", "90–100 giây", "Ung thư tế bào thận (RCC), áp xe thận"],
          ["Trễ (bài tiết)", "3–15 phút", "U máu lấp đầy, ung thư đường mật, sỏi/rò niệu"]
        ]
      }},
      { tieuDe: "Protocol U gan (HCC, u máu, FNH)", items: [
        "Cấp máu kép: gan lành 80% từ TM cửa, HCC ~100% từ ĐM gan tân sinh.",
        "Thì ĐM muộn (35–40s): HCC ngấm thuốc mạnh không đồng nhất (Arterial Hyperenhancement).",
        "Thì TM cửa (65–75s): nhu mô gan đỉnh ngấm, HCC rửa thuốc nhanh (Wash-out) → giảm đậm độ.",
        "Thì trễ (3–5 phút): vỏ bao xơ giả HCC ngấm muộn; u máu lấp đầy dần từ ngoại vi vào trung tâm."
      ]},
      { tieuDe: "Protocol chấn thương bụng cấp", items: [
        "TUYỆT ĐỐI KHÔNG uống cản quang.",
        "Thì TM cửa (65–75s) toàn bụng đánh giá đường rách nhu mô, tụ máu dưới bao gan/lách/thận.",
        "Bổ sung thì ĐM (~25s) khi nghi thoát mạch (Active Bleeding — ổ thuốc đậm độ cao tương đương ĐM trong ổ máu tụ).",
        "Thêm thì bài tiết chậm (5–10 phút) khi vỡ thận lan đài bể thận để xác định rò nước tiểu sau phúc mạc."
      ]},
      { tieuDe: "Protocol tụy (u & viêm tụy)", items: [
        "Uống nước lọc làm căng tá tràng (tránh xảo ảnh vệt sáng che đầu tụy).",
        "Thì nhu mô tụy (40–50s): nhu mô ngấm tối đa; ung thư biểu mô tuyến tụy nghèo mạch → ổ giảm đậm độ trên nền tụy sáng.",
        "Thì TM cửa (65–75s): đánh giá xâm lấn & huyết khối TM mạc treo tràng trên / TM cửa."
      ]},
      { tieuDe: "Protocol thận – tiết niệu & ruột thừa / đại–trực tràng", items: [
        "Thận – tiết niệu (CTU): NECT (sỏi) · Vỏ tủy 30–40s · Thận đồ 90–100s · Bài tiết 5–15 phút; Split-bolus giảm ~50% liều (xem mục 'Hệ tiết niệu có tiêm').",
        "Viêm ruột thừa: tái tạo lát mỏng 1.25–2 mm Axial & Coronal; tiêu chuẩn ruột thừa > 6 mm, thành dày > 2 mm ngấm mạnh, thâm nhiễm mỡ quanh, sỏi phân kẹt gốc.",
        "U đại – trực tràng: làm sạch ruột + bơm hơi/nước căng thành; dấu hiệu dày thành không đều, hẹp lòng, thâm nhiễm mỡ mạc treo (thì TM cửa + MPR)."
      ]},
      { tieuDe: "Thông số protocol", bang: {
        cols: ["Thông số", "16 dãy", "64 dãy trở lên"],
        rows: [
          ["Collimation", "16 × 1.25 mm = 20 mm", "64 × 0.625 mm = 40 mm"],
          ["Pitch", "1.375", "1.2–1.375"],
          ["kVp / mA", "120 kVp (140 > 90kg) · Auto 250–400", "120 kVp (100–120) · Auto (NI 12–14)"],
          ["Tái tạo mỏng (MPR)", "2.0–2.5 mm / bước 1.25", "1.0–1.25 mm / bước 0.625"],
          ["Thuốc / tốc độ", "100–150 mL · 3.0 mL/s", "100–125 mL · 3.5–4.0 mL/s (5 nếu CTA)"]
        ]
      }},
      { tieuDe: "Dựng hình, cửa sổ & cảnh báo", items: [
        "MPR Coronal & Sagittal lát mỏng 2–3 mm (ranh giới u tụy – mạch mạc treo, chiều dài u đại tràng, thoát vị hoành).",
        "Cửa sổ: nhu mô gan (WL 70 / WW 150), mô mềm bụng (WL 40–50 / WW 350–400), xương, phổi đáy.",
        "Chỉ tiêm khi eGFR cho phép; nếu thoát mạch (extravasation): dừng tiêm ngay, chườm lạnh, nâng cao chi, đánh giá chèn ép khoang."
      ]}
    ],
    nguon: "Cẩm nang CLVT ổ bụng – tiểu khung — Khoa CĐHA BVHVGL"
  },

  /* CT — CÁC KHỚP & CHI (per-joint bone CT · xương chi · CT Arthrography) */
  {
    id: "ct-khop-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp & chi",
    ten: "Chụp CLVT khớp không tiêm thuốc",
    tuKhoa: ["ct khop", "msk ct", "khop vai", "khop hang", "khop goi", "co chan", "co tay", "bankart", "hill-sachs", "schatzker", "sanders", "anteversion", "tt-tg", "gout", "dect", "nhieu kim loai", "3d vrt"],
    thongSo: [
      { ten: "Nguyên tắc", giaTri: "Đưa khớp vào đúng tâm gantry (Isocenter); đưa bộ phận không liên quan ra khỏi trường tia; cố định tuyệt đối chống xảo ảnh cử động" },
      { ten: "Thu nhận / tái tạo", giaTri: "Thu nhận 0.625 mm (sub-mm isotropic); tái tạo 0.5–1.5 mm" },
      { ten: "Pitch", giaTri: "0.6–1.0 (pitch nhỏ tăng độ nét)" },
      { ten: "Điện thế / Dòng", giaTri: "120 kVp (140 nếu có kim loại; DECT 80/140 kVp tìm Gout) · Auto mA 100–250" },
      { ten: "DFOV", giaTri: "10–16 cm (khớp nhỏ); 25–35 cm (khung chậu)" },
      { ten: "Kernel", giaTri: "Bone/Sharp (xương) + Standard (mô) + tái tạo lặp (IR)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Chấn thương gãy phạm khớp phức tạp (mâm chày, ổ cối, xương gót, trần chày Pilon, xương thuyền); đánh giá độ lún mặt khớp.",
        "Trật khớp kèm bong mấu bám dây chằng; can xương chậm liền / khớp giả; dị vật xương–sụn tự do trong ổ khớp.",
        "Thoái hóa khớp nặng (hẹp khe, gai xương, khuyết xương dưới sụn); hoại tử vô mạch chỏm đùi (AVN); viêm xương tủy mạn tìm mảnh xương mục (sequestrum); u xương.",
        "Hậu phẫu & khớp nhân tạo (lỏng, tiêu xương do hạt mòn, gãy quanh chuôi) — ưu thế hơn MRI (nhiễu kim loại)."
      ]},
      { tieuDe: "Nguyên tắc tư thế", items: [
        "Đưa vùng khảo sát vào đúng Isocenter, cố định bằng đệm mút & đai.",
        "Cổ tay / cẳng tay: tư thế 'Superman' (nằm sấp, tay giơ qua đầu vào giữa gantry) đưa thân ra khỏi tia, giảm beam hardening, liều cực thấp.",
        "Khớp vai: tay bên chụp xuôi thân (xoay ngoài trung tính), tay đối diện giơ cao qua đầu (giảm > 60% beam hardening)."
      ]},
      { tieuDe: "Protocol theo khớp", bang: {
        cols: ["Khớp", "Tư thế & chống nhiễu", "DFOV", "Mục tiêu lâm sàng"],
        rows: [
          ["Vai", "Nằm ngửa, tay chụp xuôi thân, tay lành giơ cao qua đầu", "14–16 cm", "Mất xương Bankart, Hill-Sachs, rách sụn viền (CT Arthrography)"],
          ["Háng – chậu", "Nằm ngửa, 2 chân xoay trong 15°, 2 tay giơ qua đầu", "16–18 cm (1 bên) / 32 cm", "Vỡ ổ cối (Judet/Letournel), gãy cổ xương đùi, góc Anteversion, AVN"],
          ["Gối – cẳng chân", "Nằm ngửa, chân vào trước, gối duỗi, bàn chân 90°", "14–16 cm", "Lún mâm chày (Schatzker), khoảng cách TT-TG, bong sụn"],
          ["Cổ tay – xương thuyền", "Superman (nằm sấp tay giơ cao qua đầu)", "10–12 cm", "Gãy xương thuyền kín đáo, trật DRUJ"],
          ["Cổ chân – xương gót", "Nằm ngửa, chân vào trước, bàn chân gấp 90°", "12–14 cm", "Gãy xương gót (Sanders), Pilon, Lisfranc"]
        ]
      }},
      { tieuDe: "Điểm đo & phân loại chính", items: [
        "Vai: đo % mất xương bờ trước dưới ổ chảo (Bony Bankart) trên 3D 'glenoid en-face' — > 20–25% → chỉ định Latarjet thay vì khâu sụn viền; khuyết Hill-Sachs bờ sau trên chỏm.",
        "Háng: đo góc xoay trước cổ xương đùi (Femoral Anteversion); phân loại vỡ ổ cối Judet/Letournel.",
        "Gối: phân loại gãy mâm chày Schatzker I–VI; lún > 4–5 mm → phẫu thuật; TT-TG > 20 mm → mổ chuyển lồi củ chày (trật bánh chè tái diễn).",
        "Cổ chân: gãy xương gót phân loại Sanders I–IV trên Coronal Oblique vuông góc diện khớp dưới sên; tổn thương Lisfranc."
      ]},
      { tieuDe: "Thông số protocol", bang: {
        cols: ["Thông số", "16 dãy", "64 dãy trở lên"],
        rows: [
          ["Collimation", "16 × 0.625 mm = 10 mm", "64 × 0.625 mm = 40 mm"],
          ["Thu nhận / tái tạo", "0.625–1.25 mm / recon 1.0–1.5 mm", "0.625 mm isotropic / recon 0.5–0.625 mm"],
          ["Pitch", "0.8–1.0", "0.6–0.9"],
          ["kVp / mAs", "120 (140 nếu kim loại) · 100–250 mAs", "120 (DECT 80/140 tìm Gout) · Auto mA"]
        ]
      }},
      { tieuDe: "Cài đặt cửa sổ", bang: {
        cols: ["Cửa sổ", "WL (HU)", "WW (HU)", "Mục đích"],
        rows: [
          ["Xương thường quy", "300–500", "1500–2500", "Đường nứt gãy, khuyết eo, mất xương ổ chảo"],
          ["Xương siêu rộng", "500–700", "3000–4000", "BẮT BUỘC khi có nẹp vít / khớp nhân tạo"],
          ["Mô mềm khớp", "40–50", "350–450", "Tụ máu, phù nề quanh khớp, u phần mềm"],
          ["CT Arthrography", "250–350", "1200–1600", "Làm dịu chói thuốc, bộc lộ ranh giới sụn khớp"]
        ]
      }},
      { tieuDe: "Dựng hình, nhiễu kim loại & DECT Gout", items: [
        "3D VRT xoay 360° + 'bóc tách ảo' (xóa chỏm cánh tay nhìn ổ chảo, xóa chỏm đùi nhìn ổ cối) — lập kế hoạch phẫu thuật.",
        "Xảo ảnh kim loại (nẹp vít, khớp nhân tạo): dùng MAR/SEMAR/iMAR + tăng 140 kVp + mở cửa sổ WW 3000–4000.",
        "DECT (80/140 kVp) tách tinh thể Urate (mã màu xanh lá) chẩn đoán Gout độ nhạy & đặc hiệu > 90% kể cả chưa có tophi lâm sàng."
      ]}
    ],
    nguon: "Cẩm nang CLVT các khớp và chi — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-xuong-chi-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp & chi",
    ten: "Chụp CLVT chi trên – chi dưới không tiêm thuốc",
    tuKhoa: ["ct xuong chi", "cang tay", "cang chan", "xuong dai", "xuong thuyen", "scaphoid", "druj", "galeazzi", "monteggia", "pilon", "gay xuong", "superman"],
    thongSo: [
      { ten: "Nguyên tắc", giaTri: "Đưa chi vào đúng Isocenter; tư thế Superman (chi trên) đưa thân ra khỏi tia → liều thấp; cố định vững" },
      { ten: "Thu nhận / tái tạo", giaTri: "0.625–1.25 mm isotropic; tái tạo 0.5–1.5 mm (dọc & vuông góc trục xương)" },
      { ten: "Điện thế / Dòng", giaTri: "120 kVp (140 nếu kim loại) · Auto mA" },
      { ten: "DFOV", giaTri: "Khu trú chi tổn thương (khớp nhỏ 10–14 cm)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Gãy xương dài phức tạp, gãy kín đáo dễ bỏ sót trên X-quang thường quy.",
        "Can xương chậm liền / khớp giả; dị vật; đánh giá trước & sau kết hợp xương.",
        "Khảo sát độ di lệch, số mảnh rời trên dựng hình 3D."
      ]},
      { tieuDe: "Chi trên (cẳng tay – cổ tay)", items: [
        "Tư thế Superman (nằm sấp, tay giơ cao qua đầu vào giữa gantry).",
        "Gãy xương thuyền (Scaphoid): tái tạo lát siêu mỏng 0.5–0.625 mm dọc trục lớn & vuông góc trục xương thuyền — phát hiện gãy không di lệch, đánh giá nguy cơ hoại tử vô mạch cực trên.",
        "Khớp quay – trụ dưới (DRUJ): gãy Galeazzi (1/3 dưới xương quay + trật DRUJ), gãy Monteggia (1/3 trên xương trụ + trật chỏm quay); chụp sấp/ngửa tối đa đánh giá mất vững động học DRUJ."
      ]},
      { tieuDe: "Chi dưới (cẳng chân)", items: [
        "Gãy 2 xương cẳng chân phức tạp: quét toàn bộ cẳng chân xuống hết mắt cá.",
        "Gãy trần chày (Pilon) do lực nén dồn dọc trục."
      ]},
      { tieuDe: "Thông số & cửa sổ", items: [
        "Thông số kỹ thuật, cửa sổ xương/mô mềm và dựng hình 3D VRT, giảm nhiễu kim loại (MAR) — xem mục 'Chụp CLVT khớp không tiêm thuốc'."
      ]}
    ],
    nguon: "Cẩm nang CLVT các khớp và chi — Khoa CĐHA BVHVGL"
  },
  {
    id: "ct-khop-arthrography",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp & chi",
    ten: "Chụp CLVT khớp có tiêm thuốc cản quang nội khớp (CT Arthrography)",
    tuKhoa: ["ct arthrography", "bom thuoc noi khop", "khop co tiem", "slap", "sun vien", "labral tear", "fai", "tfcc", "ocd", "chop xoay", "fluoroscopy"],
    thongSo: [
      { ten: "Kỹ thuật", giaTri: "Tiêm I-ốt pha loãng vào khoang bao hoạt dịch dưới hướng dẫn màn tăng sáng (Fluoroscopy) / siêu âm, vô trùng tuyệt đối" },
      { ten: "Pha thuốc", giaTri: "I-ốt 300 mgI/mL pha NaCl / Lidocaine tỷ lệ 1:1–1:2 (tránh quá đậm gây chói mất chi tiết sụn)" },
      { ten: "Thời gian vàng", giaTri: "Chụp CT trong 15–30 phút sau tiêm (sau 30–45 phút thuốc bị màng hoạt dịch hấp thu → mất giá trị chẩn đoán)" },
      { ten: "Cửa sổ", giaTri: "WL 250–350 / WW 1200–1600 (làm dịu chói thuốc, bộc lộ ranh giới sụn)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Rách sụn viền ổ chảo khớp vai (SLAP, Bankart thoái hóa); rách bán phần mặt khớp gân chóp xoay.",
        "Rách sụn viền ổ cối khớp háng (labral tear), tổn thương va chạm háng – ổ cối (FAI – Cam/Pincer).",
        "Bong sụn khớp bóc tách (Osteochondritis Dissecans – OCD) khớp gối hoặc xương sên.",
        "Rách phức hợp sụn sợi tam giác cổ tay (TFCC), rách dây chằng thuyền – nguyệt."
      ]},
      { tieuDe: "Quy trình bơm thuốc & thể tích từng khớp", bang: {
        cols: ["Khớp", "Đường chọc & kim", "Thể tích", "Mục đích"],
        rows: [
          ["Vai (Glenohumeral)", "Kim 21–22G, chọc mặt trước dưới (Fluo/SA)", "8–12 mL", "Rách SLAP, sụn viền trước, gân chóp xoay"],
          ["Háng (Hip)", "Kim 20–22G dài, chọc trước trên cổ xương đùi", "8–10 mL", "Rách sụn viền ổ cối, FAI (Cam/Pincer)"],
          ["Gối (Knee)", "Kim 20G, chọc bờ ngoài bánh chè vào ngách trên", "20–35 mL (± khí — tương phản kép)", "Sụn khớp sau mổ sụn chêm, OCD"],
          ["Cổ tay (Wrist)", "Kim 23–25G, chọc khớp quay – cổ tay / cổ tay giữa", "2–3.5 mL", "Rách TFCC, dây chằng thuyền – nguyệt"]
        ]
      }},
      { tieuDe: "Lưu ý", items: [
        "Vô trùng tuyệt đối; thuốc pha loãng tránh chói sáng.",
        "Phải hoàn tất quét CT trong 15–30 phút sau tiêm — quá muộn thuốc khuếch tán vào mô kẽ làm mờ ranh giới rách sụn."
      ]}
    ],
    nguon: "Cẩm nang CLVT các khớp và chi — Khoa CĐHA BVHVGL"
  },






















  {
    id: "ct-dm-chu-chau",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT động mạch chủ chậu (CTA động mạch chủ chậu)",
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
    id: "ct-tam-soat-toan-than",
    phanHe: "ct-mri", modality: "CT", nhom: "Toàn thân",
    ten: "Chụp CLVT toàn thân có tiêm thuốc cản quang",
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
  {
    id: "ct-toan-than-da-chan-thuong-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Toàn thân",
    ten: "Chụp CLVT toàn thân không tiêm thuốc",
    tuKhoa: ["toan than da chan thuong", "pan scan khong tiem", "polytrauma"],
    thongSo: [
      { ten: "Thông số", giaTri: "Chờ Trưởng khoa duyệt" }
    ],
    noiDung: [
      { tieuDe: "Ghi chú", items: [ "Thì khảo sát nền không tiêm trong quy trình đa chấn thương. Nội dung kỹ thuật sẽ bổ sung sau khi duyệt." ]}
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

  /* ---- Lồng ngực ---- */

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
  /* ============================================================ */
  /* MRI — SỌ NÃO: PROTOCOL THƯỜNG QUY & THEO BỆNH LÝ                         */
  /* Nguồn: Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL.                 */
  /* ============================================================ */
  {
    id: "mri-so-dot-quy",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    khanCap: true,
    ten: "MRI đột quỵ / nhồi máu não cấp",
    tuKhoa: ["dot quy", "stroke", "nhoi mau", "dwi", "adc", "penumbra", "perfusion", "lvo"],
    thongSo: [
      { ten: "1. Axial DWI/ADC", giaTri: "Bắt buộc đầu tiên — phát hiện nhồi máu tối cấp (1–4h), xác định tuổi tổn thương" },
      { ten: "2. Axial GRE/SWI", giaTri: "Phát hiện sớm xuất huyết nhu mô / vi xuất huyết đi kèm" },
      { ten: "3–4. T2W FSE · FLAIR", giaTri: "Đánh giá nhu mô kéo dài T2 và diện phù nề, tổn thương chất trắng" },
      { ten: "5–7. MRA TOF-3D · PC 2D · PWI", giaTri: "Tắc/hẹp mạch & vòng Willis · hướng dòng chảy · diện giảm tưới máu (penumbra)" }
    ],
    noiDung: [
      { tieuDe: "Thứ tự ưu tiên các chuỗi xung (cắt giảm tối đa thời gian cấp cứu)", items: [
        "1. Axial DWI/ADC: bắt buộc đầu tiên — nhồi máu tối cấp (1–4h) và xác định tuổi tổn thương.",
        "2. Axial GRE/SWI: phát hiện sớm xuất huyết nhu mô hoặc vi xuất huyết đi kèm.",
        "3. Axial T2W FSE: tổn thương nhu mô kéo dài thời gian T2.",
        "4. Axial FLAIR: diện phù nề và tổn thương chất trắng.",
        "5. MRA TOF-3D: tắc/hẹp động mạch nội sọ và vòng Willis (không tiêm thuốc).",
        "6. MRA 2D Phase Contrast: thông tin hướng dòng chảy các mạch máu lớn.",
        "7. Perfusion PWI: diện giảm tưới máu để xác định vùng tranh tối tranh sáng (penumbra)."
      ]},
      { tieuDe: "Cảnh báo — Time is Brain", items: [
        "DWI/ADC phải là chuỗi xung đầu tiên; GRE/SWI loại trừ xuất huyết trước khi cân nhắc tiêu sợi huyết.",
        "Chỉ tiêm thuốc khi thực hiện PWI hoặc MRA-CE."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-tra-cuu-nhanh",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Bảng tra cứu nhanh MRI sọ não theo lâm sàng",
    tuKhoa: ["tra cuu nhanh", "bang protocol", "chi dinh lam sang", "chuoi xung bo sung", "quick reference"],
    noiDung: [
      { tieuDe: "Bảng tra cứu nhanh theo định hướng lâm sàng", bang: {
        cols: ["Chỉ định lâm sàng", "Chuỗi xung bổ sung / đặc biệt", "Chỉ định tiêm Gadolinium"],
        rows: [
          ["U não / di căn", "T1 3D FS, FLAIR+C, pMRI, MRS (TE 35/144), DTI", "Bắt buộc: T1 3D FS+C, FLAIR+C"],
          ["Đột quỵ cấp", "DWI/ADC (ưu tiên), GRE/SWI, MRA TOF-3D, PWI", "Chỉ khi làm PWI hoặc MRA-CE"],
          ["Tuyến yên / vùng yên", "T1/T2 Cor-Sag mỏng 2mm, Dynamic T1 Coronal 5-phase", "Bắt buộc: Dynamic T1 + T1 FS+C"],
          ["Động kinh / hải mã", "Axial IR, Axial FLAIR 3mm, Coronal FLAIR 3mm vuông góc hồi hải mã", "Khi nghi u/dị dạng, hoặc khởi phát > 65 tuổi"],
          ["Cavernoma / vi xuất huyết", "T2*GRE (TE>25ms) hoặc SWI", "Thường không ngấm thuốc"],
          ["Viêm màng não / áp xe", "DWI/ADC (áp xe), FLAIR+C, T1 FS+C", "Bắt buộc: T1 FS+C và FLAIR+C"],
          ["Xơ cứng rải rác", "Sagittal FLAIR mỏng đường giữa, 3D DIR, T1 FS+C", "Đánh giá mảng xơ cứng đang hoạt động"]
        ]
      }}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-nao-thuong-quy",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI sọ não thường quy",
    tuKhoa: ["mri so nao", "cong huong tu dau", "cht so nao", "brain mri", "routine brain", "flair", "dwi", "swi", "mra"],
    thongSo: [
      { ten: "Cuộn thu tín hiệu", giaTri: "Head Coil chuyên dụng; tia laser định vị tại ụ trán giữa / giữa hai chân mày" },
      { ten: "Hướng cắt", giaTri: "Axial (ngang) · Coronal (đứng ngang) · Sagittal (đứng dọc)" },
      { ten: "Chuỗi cơ bản", giaTri: "T1WI (SE/TSE) · T2WI (FSE) · T2 FLAIR · DWI/ADC (b=0, b=1000) · T2*GRE/SWI" },
      { ten: "Nâng cao", giaTri: "TOF 3D MRA (không tiêm) · T1W sau tiêm Gadolinium khi có chỉ định" },
      { ten: "Tiêm thuốc đối quang từ", giaTri: "Tùy bệnh lý — xem mục Quy trình tiêm Gadolinium" }
    ],
    noiDung: [
      { tieuDe: "Chuẩn bị bệnh nhân & an toàn từ trường", items: [
        "Sàng lọc an toàn: loại bỏ hoàn toàn vật dụng kim loại (trang sức, kẹp tóc, răng giả, thiết bị điện tử); sàng lọc chống chỉ định tuyệt đối/tương đối (máy tạo nhịp tim, kẹp phình mạch kim loại cũ, mảnh đạn).",
        "Hướng dẫn bệnh nhân: giải thích quy trình, thời gian chụp và tiếng ồn lớn từ cuộn chênh từ (trang bị nút tai / tai nghe chống ồn); dặn giữ nguyên tư thế đầu suốt quá trình.",
        "Định vị tư thế: nằm ngửa, cố định đầu chuẩn xác trong Head Coil."
      ]},
      { tieuDe: "Định hướng lát cắt", items: [
        "Axial: song song đường nối bờ dưới gối thể chai và lồi thể chai; FOV phủ từ đỉnh sọ đến hết lỗ chẩm và tiểu não.",
        "Coronal: vuông góc mặt cắt Axial, song song thân não hoặc đường nối hai ống tai ngoài.",
        "Sagittal: song song đường giữa trên mặt cắt Coronal và Axial."
      ]},
      { tieuDe: "Các chuỗi xung thường quy & vai trò", bang: {
        cols: ["Chuỗi xung", "Hướng cắt", "Đặc điểm & kỹ thuật", "Vai trò chẩn đoán"],
        rows: [
          ["T1WI (SE/TSE)", "Axial / Sagittal", "DNT tối, mỡ sáng, tương phản mô não chuẩn; bắt thuốc Gd mạnh", "Giải phẫu vỏ não, nhân xám; đánh giá tổn thương trước/sau tiêm"],
          ["T2WI (FSE)", "Axial / Coronal", "DNT sáng, mô phù sáng; độ phân giải không gian cao", "Phù nề, hố sau, hốc mắt, dây thần kinh sọ"],
          ["T2 FLAIR", "Axial / Coronal", "Khử tín hiệu DNT tự do (DNT đen), giữ tín hiệu T2 của mô phù", "Nhạy nhất với phù nề, u, viêm, mảng hủy myelin"],
          ["DWI & ADC", "Axial (b=0, b=1000)", "Đánh giá hạn chế khuếch tán phân tử nước", "Nhồi máu cấp (1–4h), áp xe, mật độ tế bào u"],
          ["T2*GRE / SWI", "Axial", "Nhạy hiệu ứng vi từ trường", "Vi xuất huyết (hemosiderin), vôi hóa, di căn, DAI"],
          ["TOF 3D MRA", "Axial / tái tạo 3D", "Dựng hình động mạch nội sọ không tiêm (hiệu ứng dòng chảy)", "Hẹp/tắc mạch, phình mạch, AVM vòng Willis"]
        ]
      }},
      { tieuDe: "Lưu ý — QUY TẮC VÀNG", items: [
        "'Khuếch tán (DWI/ADC) cho tất cả bệnh nhân': luôn chạy DWI/ADC sớm trong quy trình để tránh bỏ sót nhồi máu não tối cấp.",
        "Tra protocol theo từng chỉ định lâm sàng tại mục 'Bảng tra cứu nhanh MRI sọ não theo lâm sàng'."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-tuyen-yen",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI tuyến yên",
    tuKhoa: ["tuyen yen", "pituitary", "microadenoma", "macroadenoma", "rathke", "dynamic", "prolactin"],
    thongSo: [
      { ten: "Khảo sát khu trú", giaTri: "FOV nhỏ 180–200 mm · lát cắt mỏng 2.0–3.0 mm" },
      { ten: "Định hướng", giaTri: "Coronal & Sagittal song song/vuông góc với hoành yên và cuống tuyến yên" },
      { ten: "Chuỗi cốt lõi", giaTri: "T1W Sag & Cor mỏng 2mm (trước tiêm) · T2W Cor FS · Dynamic T1 Coronal 5-phase · T1W FS+C (Sag/Cor/Ax)" },
      { ten: "Dynamic", giaTri: "Tiêm 5 ml Gadolinium tốc độ 1.2–2.0 ml/s; chụp 5 lát lặp lại tại 30s, 60s, 90s, 120s" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Vi u tuyến yên (microadenoma < 10mm), u lớn (macroadenoma > 10mm), u củ yên, nang Rathke, hố yên trống.",
        "Đái tháo nhạt, rối loạn nội tiết (tăng Prolactin, GH, ACTH)."
      ]},
      { tieuDe: "Kỹ thuật & chuỗi xung bổ sung", items: [
        "Khảo sát khu trú: FOV 180–200 mm, lát cắt mỏng 2.0–3.0 mm.",
        "T1W Sagittal & Coronal mỏng (2mm) trước tiêm thuốc tương phản.",
        "T2W Coronal FS (xóa mỡ): đánh giá xâm lấn xoang hang và cấu trúc thị giác.",
        "Dynamic T1 Coronal 5-phase: tiêm 5 ml Gadolinium (1.2–2.0 ml/s), chụp lặp lại liên tục tại 30s, 60s, 90s, 120s.",
        "T1W FS+C (Sagittal, Coronal, Axial): chụp toàn bộ sọ sau tiêm để loại trừ tổn thương phối hợp."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Khởi chạy chuỗi Dynamic T1 Coronal đồng thời với lúc bắt đầu bơm thuốc để không bỏ lỡ thì bắt thuốc sớm của vi u."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-dong-kinh",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI động kinh / xơ cứng hồi hải mã",
    tuKhoa: ["dong kinh", "epilepsy", "hai ma", "hippocampal sclerosis", "loan san vo nao", "cortical dysplasia"],
    thongSo: [
      { ten: "Axial IR", giaTri: "TR 7000 ms, TE 70 ms — tăng tương phản chất trắng/chất xám" },
      { ten: "Axial FLAIR 3mm", giaTri: "TR 8500 ms, TE 110 ms — song song đường nối mấu giường trước - bờ dưới lồi thể chai" },
      { ten: "Coronal FLAIR 3mm (cốt lõi)", giaTri: "VUÔNG GÓC trục dài đồi thị / hải mã; phủ toàn bộ thùy thái dương hai bên" },
      { ten: "T1 3D MP-RAGE / SPGR", giaTri: "1 mm, thể tích đẳng hướng, tái tạo đa mặt phẳng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Động kinh mới khởi phát, động kinh kháng thuốc.",
        "Tìm xơ cứng hồi hải mã (hippocampal sclerosis), loạn sản vỏ não (cortical dysplasia), u nhỏ hoặc dị dạng mạch."
      ]},
      { tieuDe: "Quy trình kỹ thuật chuyên sâu", items: [
        "Protocol sọ thường quy đầy đủ: T1, T2, FLAIR, DWI/ADC, GRE.",
        "Axial IR (Inversion Recovery): TR 7000 ms, TE 70 ms — tăng tương phản chất trắng/chất xám.",
        "Axial FLAIR 3mm: TR 8500 ms, TE 110 ms — song song đường nối mấu giường trước hố yên và bờ dưới lồi thể chai.",
        "Coronal FLAIR 3mm: vuông góc trục dài đồi thị/hải mã (vuông góc đường nối mấu giường trước - lồi thể chai, hoặc song song bờ trước cầu não); phủ toàn bộ thùy thái dương hai bên để so sánh thể tích và tín hiệu hải mã.",
        "T1 3D MP-RAGE / SPGR 1mm: thu dữ liệu thể tích đẳng hướng, tái tạo đa mặt phẳng đánh giá độ dày vỏ não và cấu trúc hải mã."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Coronal FLAIR 3mm vuông góc trục dài hải mã là chuỗi xung cốt lõi — bắt buộc định hướng đúng để phát hiện bất đối xứng thể tích/tín hiệu hai bên hải mã."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-di-dang-mach",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI dị dạng mạch máu não",
    tuKhoa: ["di dang mach", "avm", "davf", "cavernoma", "dva", "mra", "mrv"],
    thongSo: [
      { ten: "Dựng hình mạch", giaTri: "TOF 3D MRA khu trú · MRV · CE-MRA thời gian (phân biệt thì động/tĩnh mạch)" },
      { ten: "Phát hiện hemosiderin", giaTri: "T2*GRE hoặc SWI (bắt buộc cho cavernoma)" },
      { ten: "Sau tiêm", giaTri: "T1W 3D + C (động mạch nuôi, tĩnh mạch dẫn lưu)" }
    ],
    noiDung: [
      { tieuDe: "Phân loại & đặc điểm kỹ thuật", items: [
        "Dị dạng động-tĩnh mạch (AVM): búi mạch (nidus) có shunt động-tĩnh mạch dòng chảy cao. Bổ sung TOF 3D MRA khu trú, MRV và T1W 3D+C để đánh giá động mạch nuôi và tĩnh mạch dẫn lưu.",
        "Dò động-tĩnh mạch màng cứng (DAVF): shunt trực tiếp trong thành xoang màng cứng. Cần CE-MRA thời gian để phân biệt thì động mạch và tĩnh mạch (phân độ Cognard).",
        "Dị dạng dạng hang (Cavernoma): không có shunt dòng chảy cao; thấy dấu hiệu 'bắp nổ' (popcorn) với quầng giảm tín hiệu hemosiderin bao quanh.",
        "Bất thường tĩnh mạch bẩm sinh (DVA): biến thể giải phẫu tĩnh mạch; T1W+C thể hiện tĩnh mạch dẫn lưu dạng 'đầu sứa' (caput medusae) / 'cây cọ'; thường không cần can thiệp."
      ]},
      { tieuDe: "Cảnh báo", items: [
        "Cavernoma BẮT BUỘC chụp T2*GRE hoặc SWI — các chuỗi xung thường quy có thể bỏ sót tổn thương và vi xuất huyết đi kèm."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-u-nao",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI u não",
    tuKhoa: ["u nao", "brain tumor", "glioma", "di can", "mrs", "pho", "tuoi mau", "perfusion", "dti"],
    thongSo: [
      { ten: "Cốt lõi sau tiêm", giaTri: "T1W 3D FS + Gd (cả 3 mặt phẳng) · FLAIR + Gd" },
      { ten: "Cộng hưởng từ Phổ (MRS)", giaTri: "Single Voxel (TE 35 & 144 ms) · Multi-Voxel cho glioma thâm nhiễm" },
      { ten: "Tưới máu (pMRI)", giaTri: "Đánh giá thể tích máu não tương đối (rCBV) — phân độ ác tính glioma" },
      { ten: "DTI", giaTri: "Đánh giá chèn ép/đứt gãy bó sợi thần kinh vận động trước mổ" }
    ],
    noiDung: [
      { tieuDe: "Quy trình chụp nâng cao", items: [
        "T1W 3D FS + Gd (3 mặt phẳng): đánh giá mức độ ngấm thuốc, ranh giới khối u, hoại tử trung tâm và phá vỡ hàng rào máu não.",
        "FLAIR + Gd bổ sung: phát hiện thâm nhiễm màng mềm (carcinomatosis màng mềm) hoặc u xâm lấn khoang dưới nhện.",
        "Cộng hưởng từ Phổ (MRS): Single Voxel (TE 35 & 144 ms) cho tổn thương mới phát hiện; Multi-Voxel cho glioma thâm nhiễm.",
        "Tưới máu MRI (pMRI): đánh giá rCBV giúp phân độ ác tính glioma.",
        "DTI (Diffusion Tensor Imaging): đánh giá chèn ép/đứt gãy các bó sợi thần kinh vận động trước phẫu thuật."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Dùng MRS với TE 135–144 ms để phân biệt u tái phát (tăng Choline) với hoại tử sau xạ trị (tăng Lipid/Lactate)."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-viem-mang-nao",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI viêm màng não / áp xe não",
    tuKhoa: ["viem mang nao", "meningitis", "ap xe nao", "abscess", "flair gd", "leptomeningitis"],
    thongSo: [
      { ten: "Nền", giaTri: "Protocol sọ thường quy + DWI/ADC" },
      { ten: "Sau tiêm", giaTri: "Axial T1W+C · Coronal T1W FS+C · FLAIR + Gd" }
    ],
    noiDung: [
      { tieuDe: "Protocol khảo sát", items: [
        "Protocol sọ thường quy + DWI/ADC: áp xe não hạn chế khuếch tán mạnh ở vùng trung tâm.",
        "Axial T1W+C và Coronal T1W FS+C."
      ]},
      { tieuDe: "Cảnh báo", items: [
        "BẮT BUỘC chụp FLAIR + Gd (sau tiêm) — chuỗi xung nhạy nhất phát hiện thâm nhiễm viêm màng mềm (leptomeningitis) và khoang dưới nhện."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-huy-myelin",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI bệnh hủy Myelin / xơ cứng rải rác (MS)",
    tuKhoa: ["huy myelin", "xo cung rai rac", "multiple sclerosis", "ms", "dawson", "3d dir"],
    thongSo: [
      { ten: "Nền", giaTri: "Protocol sọ thường quy" },
      { ten: "Bổ sung", giaTri: "Sagittal FLAIR mỏng đường giữa · 3D DIR · T1W FS + C" }
    ],
    noiDung: [
      { tieuDe: "Protocol khảo sát", items: [
        "Protocol sọ thường quy.",
        "Sagittal FLAIR cắt mỏng đường giữa: bộc lộ mảng tổn thương vuông góc não thất — dấu hiệu 'ngón tay Dawson'.",
        "3D DIR (Double Inversion Recovery): khử đồng thời DNT và chất trắng, tăng tương phản mảng MS vỏ/dưới vỏ.",
        "T1W FS + C: đánh giá mảng MS đang hoạt động (ngấm thuốc)."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-chan-thuong",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI chấn thương sọ & xuất huyết",
    tuKhoa: ["chan thuong so", "xuat huyet", "dai", "diffuse axonal injury", "gre", "swi"],
    thongSo: [
      { ten: "Nền", giaTri: "Protocol sọ thường quy" },
      { ten: "Bắt buộc", giaTri: "Axial GRE (TE > 25 ms) hoặc SWI" },
      { ten: "Xuất huyết không do chấn thương", giaTri: "T1 + C và FLAIR + C (tìm u/dị dạng ẩn)" }
    ],
    noiDung: [
      { tieuDe: "Protocol khảo sát", items: [
        "Protocol sọ thường quy.",
        "Axial GRE (TE > 25 ms) hoặc SWI: bắt buộc để phát hiện tổn thương sợi trục lan tỏa (DAI) và vi xuất huyết.",
        "Xuất huyết nhu mô không do chấn thương: tiêm thuốc T1 + C và FLAIR + C để tìm u / dị dạng ẩn."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-sa-sut-tri-tue",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "MRI sa sút trí tuệ & bệnh lý ngoại tháp",
    tuKhoa: ["sa sut tri tue", "dementia", "alzheimer", "parkinson", "ngoai thap", "hai ma", "mp-rage"],
    thongSo: [
      { ten: "Sa sút trí tuệ (Alzheimer)", giaTri: "Sag T1 · Ax T1/T2 · DWI · Coronal FLAIR mỏng vuông góc trục dài thùy thái dương · T1 3D SPGR/MP-RAGE (đo thể tích hải mã)" },
      { ten: "Bệnh lý ngoại tháp (Parkinson)", giaTri: "Dùng chuỗi Spin Echo (SE) thường quy thay Fast Spin Echo (TSE)" }
    ],
    noiDung: [
      { tieuDe: "Protocol khảo sát", items: [
        "Sa sút trí tuệ (Alzheimer): Sagittal T1, Axial T1/T2, DWI, Coronal FLAIR cắt mỏng vuông góc trục dài thùy thái dương, và T1 3D SPGR / MP-RAGE để đo thể tích hải mã.",
        "Bệnh lý ngoại tháp (Parkinson): dùng chuỗi xung Spin Echo (SE) thường quy thay vì Fast Spin Echo (TSE) để đánh giá chính xác tín hiệu nhân xám trung ương."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-so-tiem-gadolinium",
    phanHe: "ct-mri", modality: "MRI", nhom: "Sọ não",
    ten: "Quy trình tiêm thuốc đối quang từ (Gadolinium)",
    tuKhoa: ["gadolinium", "tiem thuoc", "doi quang tu", "egfr", "dynamic", "ce-mra", "care bolus"],
    thongSo: [
      { ten: "Đường truyền", giaTri: "Kim 22G tại tĩnh mạch khuỷu tay; kiểm tra eGFR > 30 mL/min/1.73m²" },
      { ten: "Liều lượng", giaTri: "0.1 mmol/kg (≈ 5–10 ml) + 20 ml NaCl 0.9% đuổi thuốc" },
      { ten: "Tốc độ tiêm thường", giaTri: "1.5–2.0 ml/s; chụp T1W sau tiêm 2–3 phút" }
    ],
    noiDung: [
      { tieuDe: "Chuẩn bị đường truyền", items: [
        "Đặt kim truyền tĩnh mạch 22G tại tĩnh mạch khuỷu tay.",
        "Kiểm tra chức năng thận: eGFR > 30 mL/min/1.73m²."
      ]},
      { tieuDe: "Liều lượng thuốc", items: [
        "Gadolinium tiêu chuẩn 0.1 mmol/kg thể trọng (tương đương 5–10 ml) + 20 ml dung dịch Natri Clorid 0.9% đuổi thuốc."
      ]},
      { tieuDe: "Kỹ thuật tiêm theo bệnh lý", items: [
        "Tiêm thông thường: bơm thuốc 1.5–2.0 ml/s; chụp các chuỗi T1W post-contrast sau 2–3 phút.",
        "Tiêm Dynamic tuyến yên: bơm tiêm tự động 5 ml Gadolinium tốc độ 1.2–2.0 ml/s; khởi chạy chuỗi T1 Dynamic Coronal đồng thời với lúc bắt đầu bơm thuốc.",
        "CE-MRA / Care Bolus: đặt lát cắt theo dõi tại đoạn chia đôi động mạch cảnh; kích hoạt tự động chuỗi 3D MRA khi thuốc vừa ngấm vào động mạch cảnh."
      ]},
      { tieuDe: "Cảnh báo", items: [
        "Bắt buộc kiểm tra eGFR > 30 mL/min/1.73m² trước khi tiêm Gadolinium để phòng xơ hóa hệ thống do thận (NSF)."
      ]}
    ],
    nguon: "Protocol MRI sọ não & bệnh lý — Khoa CĐHA BVHVGL"
  },

  /* ============================================================ */
  /* MRI — CỘT SỐNG (phân vùng: cổ · ngực · thắt lưng – cùng · toàn trục)      */
  /* Nguồn: Protocol MRI cột sống chi tiết (1.5T Philips) — Khoa CĐHA BVHVGL.  */
  /* ============================================================ */
  {
    id: "mri-cs-co",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "MRI cột sống cổ",
    tuKhoa: ["cot song co", "cervical spine", "c-spine", "thoat vi dia dem co", "tuy co", "mffe", "stir", "chen ep re than kinh"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Head-Neck Array Coil đa kênh chuyên dụng" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, cổ trung tính, cố định cằm chống cử động" },
      { ten: "Mặt phẳng", giaTri: "Sagittal (chính) · Axial (theo đĩa C2/3–C7/T1 hoặc vuông góc trục tủy) · Coronal (rễ & đám rối cánh tay)" },
      { ten: "Lát cắt chung", giaTri: "Slice thickness 3.0 mm · Gap 10% · NSA 2 · SENSE 1.5 (Axial mFFE: SENSE Off)" },
      { ten: "FOV", giaTri: "Sagittal 220–240 · Axial 180–200 · Coronal 200–220 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Thoát vị đĩa đệm & thoái hóa cột sống cổ, hẹp ống sống, chèn ép rễ thần kinh / tủy cổ.",
        "Chấn thương cột sống cổ: gãy xẹp, dập tủy, trượt đốt sống.",
        "Viêm thân sống – đĩa đệm cổ, áp xe ngoài màng cứng.",
        "U tủy cổ, u dây thần kinh (neurinoma, meningioma, glioma tủy)."
      ]},
      { tieuDe: "Định hướng lát cắt", items: [
        "Sagittal: song song đường dọc giữa cột sống cổ trên Coronal localizer; FOV phủ từ nền sọ / lồi cầu chẩm đến hết T2–T3.",
        "Axial: song song từng đĩa đệm (C2/3 → C7/T1) khi tìm thoát vị; hoặc liên tục vuông góc trục tủy cổ khi nghi u, chấn thương, tổn thương tủy.",
        "Coronal: song song bờ sau các thân đốt sống cổ — đánh giá rễ thần kinh và đám rối cánh tay."
      ]},
      { tieuDe: "Các chuỗi xung thường quy & vai trò", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE / TI (ms)", "Slice thickness · FOV (mm)", "Vai trò chẩn đoán"],
        rows: [
          ["Sagittal T1 TSE", "Sagittal", "450–550 / 10–12 / –", "3.0 · 220–240", "Giải phẫu thân sống, tủy xương, thoái hóa Modic 2"],
          ["Sagittal T2 TSE", "Sagittal", "3000–3500 / 100–110 / –", "3.0 · 220–240", "DNT sáng, thoát vị đĩa đệm, hẹp ống sống cổ"],
          ["Sagittal STIR", "Sagittal", "3500–4000 / 60 / 150", "3.0 · 220–240", "Nhạy nhất với phù tủy xương, dập dây chằng sau"],
          ["Axial T2* mFFE", "Axial", "600–800 / 16–20 / –", "3.0 · 180–200", "Phân biệt gai xương vôi hóa (đen) vs thoát vị đĩa đệm mềm"],
          ["Axial T2 TSE", "Axial", "3500–4000 / 100–110 / –", "3.0 · 180–200", "Chèn ép rễ thần kinh trong lỗ liên hợp"],
          ["Coronal T2 TSE", "Coronal", "3000–3500 / 100 / –", "3.0 · 200–220", "Đám rối thần kinh cánh tay, vẹo cột sống cổ"]
        ]
      }},
      { tieuDe: "Bệnh lý, chấn thương & quy định tiêm thuốc (+C)", items: [
        "Thoát vị đĩa đệm & thoái hóa cổ: KHÔNG TIÊM — đánh giá bằng T1 TSE, T2 TSE và T2* mFFE.",
        "Chấn thương cổ (gãy xẹp, dập tủy, trượt): thường KHÔNG tiêm cấp cứu; BẮT BUỘC Sagittal STIR và Axial T2* mFFE để tìm vi xuất huyết trong tủy và phù dây chằng liên gai.",
        "Viêm thân sống – đĩa đệm & áp xe ngoài màng cứng: BẮT BUỘC TIÊM — Sagittal / Coronal / Axial T1 FS + C.",
        "U tủy cổ / u dây thần kinh: BẮT BUỘC TIÊM — T1 FS + C ba mặt phẳng hoặc 3D T1 e-THRIVE cắt mỏng đẳng hướng 1 mm."
      ]},
      { tieuDe: "Chuỗi xung sau tiêm (+C)", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE / TI (ms)", "Slice thickness · FOV (mm)", "Vai trò chẩn đoán"],
        rows: [
          ["Sagittal T1 FS + C", "Sagittal", "500–600 / 10–12 / –", "3.0 · 220–240", "U tủy cổ, viêm thân sống – đĩa đệm sau tiêm Gd"],
          ["Axial T1 FS + C", "Axial", "500–600 / 10–12 / –", "3.0 · 180–200", "Viền ngấm thuốc áp xe ngoài màng cứng"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI (máy tạo nhịp, dị vật kim loại từ tính) trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI cột sống chi tiết (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-cs-nguc",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "MRI cột sống ngực",
    tuKhoa: ["cot song nguc", "thoracic spine", "t-spine", "ep tuy nguc", "di can xuong nguc", "viem tuy cat ngang", "ms tuy", "stir"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Spine Matrix Coil đa kênh vùng ngực" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, đặt đai theo dõi hô hấp (Respiratory Trigger) quanh ngực/bụng để triệt nhiễu thở" },
      { ten: "Mặt phẳng", giaTri: "Sagittal (FOV rộng phủ C7–L2, cần marker định vị) · Axial (vuông góc đoạn tủy ngực tổn thương)" },
      { ten: "Lát cắt chung", giaTri: "Slice thickness 3.0–3.5 mm · Gap 10% · NSA 2 · SENSE 1.5–1.8" },
      { ten: "FOV", giaTri: "Sagittal 320–350 · Axial 200–220 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Thoát vị đĩa đệm ngực (ít gặp), chèn ép tủy ngực.",
        "Chấn thương & ép tủy ngực cấp tính.",
        "U di căn xương ngực / đa u tủy (multiple myeloma).",
        "Viêm tủy cắt ngang (transverse myelitis), xơ cứng rải rác (MS) tủy ngực."
      ]},
      { tieuDe: "Định hướng lát cắt", items: [
        "Sagittal: song song trục tủy ngực, FOV rộng 320–350 mm phủ từ C7 đến L2; đặt marker định vị đốt sống chính xác.",
        "Axial: vuông góc đoạn tủy ngực tổn thương; do ống sống ngực hẹp nên lát cắt mỏng 3.0–3.5 mm."
      ]},
      { tieuDe: "Các chuỗi xung cốt lõi & vai trò", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE / TI (ms)", "Slice thickness · FOV (mm)", "Vai trò chẩn đoán"],
        rows: [
          ["Sagittal T1 TSE", "Sagittal", "400–500 / 10–12 / –", "3.5 · 320–350", "Hình thái thân đốt sống, tủy xương T-spine"],
          ["Sagittal T2 TSE", "Sagittal", "3200–3800 / 100–120 / –", "3.5 · 320–350", "DNT sáng, diện chèn ép tủy ngực"],
          ["Sagittal STIR", "Sagittal", "3500–4000 / 60–70 / 150", "3.5 · 320–350", "Bắt buộc: phát hiện sớm di căn xương & viêm đĩa đệm"],
          ["Axial T2 TSE", "Axial", "3500–4200 / 100–110 / –", "3.5 · 200–220", "Cắt mỏng khu trú qua đoạn tủy ngực nghi tổn thương"]
        ]
      }},
      { tieuDe: "Bệnh lý, chấn thương & quy định tiêm thuốc (+C)", items: [
        "Thoát vị đĩa đệm ngực (ít gặp): KHÔNG TIÊM — khảo sát trên T1, T2 và Axial T2.",
        "Chấn thương & ép tủy ngực cấp: T1, T2 và STIR; tiêm bổ sung khi nghi u máu vỡ hoặc tụ máu ngoài màng cứng nhiễm trùng.",
        "U di căn xương ngực / đa u tủy: BẮT BUỘC TIÊM — Sagittal và Axial T1 FS + C đánh giá u xâm lấn khoang màng tủy.",
        "Viêm tủy cắt ngang / MS tủy ngực: BẮT BUỘC TIÊM — T1 FS + C tìm mảng hủy myelin ngấm thuốc hoạt động."
      ]},
      { tieuDe: "Chuỗi xung sau tiêm (+C)", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE / TI (ms)", "Slice thickness · FOV (mm)", "Vai trò chẩn đoán"],
        rows: [
          ["Sagittal T1 FS + C", "Sagittal", "450–550 / 10–12 / –", "3.5 · 320–350", "U tủy ngực, di căn xương, mảng viêm tủy cắt ngang"],
          ["Axial T1 FS + C", "Axial", "450–550 / 10–12 / –", "3.5 · 200–220", "Mức độ xâm lấn màng tủy & phần mềm quanh sống"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI và dùng Respiratory Trigger để loại nhiễu nhịp thở."
      ]}
    ],
    nguon: "Protocol MRI cột sống chi tiết (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-cs-tl",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "MRI cột sống thắt lưng – cùng",
    tuKhoa: ["cot song that lung", "lumbar spine", "l-spine", "thoat vi dia dem", "truot dot song", "fbss", "mo cu", "ap xe co that lung chau", "psoas", "khop cung chau", "modic"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Spine Matrix Coil vùng thắt lưng – cùng" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, kê gối dưới khoeo làm phẳng độ ưỡn thắt lưng, cột sống áp sát coil" },
      { ten: "Mặt phẳng", giaTri: "Sagittal dọc giữa · Axial theo từng đĩa (L3/4, L4/5, L5/S1; 3–4 lát/tầng) · Coronal Oblique khớp cùng chậu khi cần" },
      { ten: "Lát cắt chung", giaTri: "Slice thickness 4.0 mm (Coronal Oblique 3.0 mm) · Gap 10% · NSA 2 · SENSE 1.5" },
      { ten: "FOV", giaTri: "Sagittal 260–280 (phủ T12 → hết xương cùng – cụt) · Axial 180–200 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Thoát vị đĩa đệm & trượt đốt sống thắt lưng, chèn ép rễ / chùm đuôi ngựa.",
        "Hội chứng sau mổ cột sống (FBSS): phân biệt xơ sẹo vs thoát vị tái phát.",
        "Viêm đĩa đệm – thân sống thắt lưng, áp xe cơ thắt lưng chậu (psoas).",
        "Viêm khớp cùng chậu; gãy xẹp xốp xương cấp (Modic 1)."
      ]},
      { tieuDe: "Định hướng lát cắt", items: [
        "Sagittal dọc giữa: song song đường dọc giữa, FOV 260–280 mm phủ từ T12 đến hết xương cùng – cụt (S5/Coccyx).",
        "Axial: song song từng khoảng đĩa đệm (L3/4, L4/5, L5/S1); mỗi tầng 3–4 lát từ bờ dưới thân trên đến bờ trên thân dưới.",
        "Coronal Oblique (khớp cùng chậu): nghiêng song song bề mặt xương cùng — bắt buộc trong viêm khớp cùng chậu."
      ]},
      { tieuDe: "Các chuỗi xung cốt lõi & vai trò", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE / TI (ms)", "Slice thickness · FOV (mm)", "Vai trò chẩn đoán"],
        rows: [
          ["Sagittal T1 TSE", "Sagittal", "400–500 / 10–12 / –", "4.0 · 260–280", "Giải phẫu thân sống, trượt đốt sống, thoái hóa Modic"],
          ["Sagittal T2 TSE", "Sagittal", "3000–3600 / 100–110 / –", "4.0 · 260–280", "Thoát vị đĩa đệm, hẹp ống sống thắt lưng"],
          ["Sagittal STIR", "Sagittal", "3500–4000 / 60–70 / 150", "4.0 · 260–280", "Phù tủy xương Modic 1, gãy xẹp xốp xương cấp"],
          ["Axial T2 TSE", "Axial", "3500–4000 / 110–120 / –", "4.0 · 180–200", "Cắt song song từng đĩa đệm (L3/4, L4/5, L5/S1)"],
          ["Coronal Oblique STIR", "Coronal Obl.", "3500–4000 / 60–70 / 150", "3.0 · 260–280", "Khảo sát khớp cùng chậu"]
        ]
      }},
      { tieuDe: "Bệnh lý, chấn thương & quy định tiêm thuốc (+C)", items: [
        "Thoát vị đĩa đệm & trượt đốt sống: KHÔNG TIÊM — đánh giá chèn ép rễ / chùm đuôi ngựa trên Sagittal T1, T2 và Axial T2.",
        "Hội chứng sau mổ (FBSS): BẮT BUỘC TIÊM — Gadolinium phân biệt mô xơ sẹo (bắt thuốc mạnh ngay sau tiêm) với thoát vị tái phát (không bắt thuốc hoặc chỉ bắt viền muộn).",
        "Viêm đĩa đệm – thân sống & áp xe cơ thắt lưng chậu (psoas): BẮT BUỘC TIÊM — T1 FS + C ba mặt phẳng.",
        "Viêm khớp cùng chậu: Coronal STIR cắt mỏng và Coronal T1 FS + C khu trú khớp cùng chậu."
      ]},
      { tieuDe: "Chuỗi xung sau tiêm (+C)", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE / TI (ms)", "Slice thickness · FOV (mm)", "Vai trò chẩn đoán"],
        rows: [
          ["Axial T1 FS + C", "Axial", "400–500 / 10–12 / –", "4.0 · 180–200", "Phân biệt mô xơ sẹo mổ cũ (ngấm) vs thoát vị tái phát"],
          ["Sagittal T1 FS + C", "Sagittal", "400–500 / 10–12 / –", "4.0 · 260–280", "Xơ sẹo mổ cũ, thoát vị tái phát, bệnh lý cột sống (lao…)"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI cột sống chi tiết (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-cs-toan-truc",
    phanHe: "ct-mri", modality: "MRI", nhom: "Cột sống",
    ten: "MRI toàn trục cột sống",
    tuKhoa: ["toan truc cot song", "whole spine", "ghep hinh", "auto-stitching", "mobiflex", "di can xuong da o", "da u tuy", "rong tuy", "syrinx", "ep tuy"],
    thongSo: [
      { ten: "Kỹ thuật ghép hình", giaTri: "Auto-Stitching / MobiFlex (Philips 1.5T), chia 3 trạm: C-spine · T-spine · L-spine/Sacrum" },
      { ten: "Mặt phẳng", giaTri: "Sagittal toàn trục (ghép 3 trạm)" },
      { ten: "Chuỗi xung chủ lực", giaTri: "T1 TSE · T2 TSE · STIR toàn trục" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Ép tủy không rõ vị trí trên lâm sàng.",
        "Di căn xương đa ổ, đa u tủy (multiple myeloma).",
        "Đánh giá độ rộng rỗng tủy (syrinx).",
        "Vẹo cột sống phức tạp."
      ]},
      { tieuDe: "Kỹ thuật ghép hình (Auto-Stitching)", items: [
        "Dùng tính năng ghép hình tự động (MobiFlex / Auto-Stitching) trên máy Philips 1.5T.",
        "Chia làm 3 trạm: C-spine, T-spine, L-spine/Sacrum rồi ghép thành ảnh toàn trục liền mạch."
      ]},
      { tieuDe: "Chuỗi xung toàn trục", items: [
        "Sagittal T1 TSE toàn trục (ghép 3 trạm).",
        "Sagittal T2 TSE toàn trục (ghép 3 trạm).",
        "Sagittal STIR toàn trục (ghép 3 trạm) — chuỗi xung nhạy nhất tìm vi di căn toàn bộ thân đốt sống."
      ]},
      { tieuDe: "Bảng tổng hợp nguyên tắc tiêm thuốc tương phản cột sống", bang: {
        cols: ["Nhóm bệnh lý / chấn thương", "Tiêm thuốc (+C)", "Chuỗi xung bắt buộc sau tiêm & ghi chú"],
        rows: [
          ["Thoát vị đĩa đệm, thoái hóa cột sống", "KHÔNG TIÊM", "Chỉ T1, T2, T2* mFFE, STIR. Không tiêm trừ mổ cũ nghi xơ sẹo."],
          ["Chấn thương cấp (gãy xẹp, dập tủy)", "KHÔNG TIÊM (thường quy)", "Sag T1, T2, STIR, Ax T2*. Tiêm khi nghi vỡ u máu hoặc nhiễm trùng."],
          ["Mổ cũ: thoát vị tái phát vs xơ sẹo (FBSS)", "BẮT BUỘC TIÊM", "T1 FS + C (Axial/Sagittal). Xơ sẹo ngấm thuốc ngay; thoát vị tái phát không ngấm."],
          ["Viêm thân sống – đĩa đệm, áp xe ngoài màng cứng", "BẮT BUỘC TIÊM", "T1 FS + C 3 mặt phẳng; xóa mỡ bộc lộ viền ngấm thuốc ổ áp xe."],
          ["U tủy, u dây thần kinh, di căn xương", "BẮT BUỘC TIÊM", "T1 FS + C 3 mặt phẳng hoặc 3D T1 e-THRIVE; đánh giá ranh giới u và xâm lấn màng tủy."]
        ]
      }}
    ],
    nguon: "Protocol MRI cột sống chi tiết (1.5T Philips) — Khoa CĐHA BVHVGL"
  },

  /* ============================================================ */
  /* MRI — BỤNG (phân theo khả năng nín thở + bệnh lý & tiêm động học gan)     */
  /* Nguồn: Protocol MRI vùng bụng & tiêm thuốc động học (1.5T Philips).       */
  /* ============================================================ */
  {
    id: "mri-bung-nin-tho-tot",
    phanHe: "ct-mri", modality: "MRI", nhom: "Bụng",
    ten: "MRI bụng — bệnh nhân hợp tác tốt (nín thở)",
    tuKhoa: ["mri bung", "abdomen", "gan", "lien", "mrcp", "tuy", "than", "dynamic", "e-thrive", "thrive", "nin tho", "breath hold", "dixon", "hcc", "primovist", "tiem dong hoc", "care bolus"],
    thongSo: [
      { ten: "Đối tượng", giaTri: "BN trẻ, tỉnh táo, hợp tác tốt, nín thở ổn định 12–18 giây/lần phát xung" },
      { ten: "Cuộn thu (Coil)", giaTri: "Body Array / Sense Torso / dStream Torso, phủ từ vòm hoành đến hết vòm háng" },
      { ten: "Chuẩn bị", giaTri: "Nhịn ăn 4–6 giờ · Buscopan 20 mg (IM/IV chậm) chống co thắt ruột" },
      { ten: "Nhịp thở", giaTri: "Nín thở cuối thì thở ra nhẹ nhàng (end-expiration) để vòm hoành ổn định" },
      { ten: "Máy", giaTri: "1.5T Philips (Achieva / Ingenia / Multiva)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Bệnh lý gan: HCC, u máu (hemangioma), FNH, adenoma, di căn, áp xe.",
        "Tụy & đường mật: MRCP, viêm tụy, u tụy (adenocarcinoma), IPMN.",
        "Thận & tuyến thượng thận: ung thư tế bào thận (RCC), nang Bosniak, adenoma thượng thận."
      ]},
      { tieuDe: "Chuẩn bị bệnh nhân & cuộn thu", items: [
        "Nhịn ăn 4–6 giờ: dạ dày trống, giảm nhu động ruột, túi mật căng dịch — điều kiện để MRCP đường mật nét căng.",
        "Tiêm Hyoscine butylbromide (Buscopan) 20 mg bắp hoặc tĩnh mạch chậm để triệt nhiễu nhu động ruột.",
        "Huấn luyện nín thở ở cuối thì thở ra nhẹ nhàng, đồng nhất giữa các chuỗi trước và sau tiêm.",
        "Đặt Body Array / Torso Coil phủ liên tục vòm hoành → vòm háng."
      ]},
      { tieuDe: "Kỹ thuật nín thở tốt & các chuỗi xung chính", items: [
        "T1 3D Dynamic Fat Sat (e-THRIVE / mTHRIVE): GRE 3D xóa mỡ cắt mỏng đẳng hướng 2 mm, chụp động học 4 thì sau tiêm, 12–15 giây/thì.",
        "Dual-Echo Dixon T1 FFE (In-Phase & Out-of-Phase): nín thở 15 giây, phát hiện mỡ nội tế bào trong mô gan/khối u.",
        "MRCP 3D Breath-Hold: dựng hình đường mật 3D, nín thở 18–20 giây cho ảnh sắc nét.",
        "T2 TSE / SS-TSE (HASTE) và DWI/ADC bổ sung khảo sát hình thái và tán xạ."
      ]},
      { tieuDe: "Protocol theo cơ quan", items: [
        "GAN: In/Out-of-Phase (Dixon) tìm thoái hóa mỡ & vi mỡ nội bào; T2 TSE (±FS) phân biệt u máu (T2 sáng rực 'bóng đèn') với HCC/di căn; DWI/ADC (b0, b50, b800) đánh giá hạn chế khuếch tán; T1 Dynamic 3D (e-THRIVE) 4 thì cho mọi u nghi ác tính.",
        "TỤY & ĐƯỜNG MẬT: MRCP 3D DRIVE (Respiratory Triggered, T2 TE > 600 ms + xung Restore) dựng hình cây mật tụy; MRCP 2D Thick-Slab SS-TSE (lát dày 40–50 mm, 2 giây) xem nhanh toàn cảnh; T1 FS e-THRIVE tụy (nhu mô tụy lành sáng, giảm tín hiệu trong viêm/u).",
        "THẬN & THƯỢNG THẬN: thượng thận BẮT BUỘC In/Out-of-Phase (adenoma lành sụt tín hiệu mạnh trên Out-of-Phase); thận chụp T2 TSE, DWI/ADC và T1 Dynamic e-THRIVE 3 thì — Vỏ tủy (~25s), Tủy thận (~100s), Bài tiết (3–5 phút)."
      ]},
      { tieuDe: "Tiêm thuốc tương phản động học gan", items: [
        "Cơ chế cấp máu kép: nhu mô gan lành nhận 75–80% từ TM cửa, 20–25% từ ĐM gan; HCC nhận 90–100% từ ĐM gan tân tạo → chụp động học bắt trọn 'Wash-in' / 'Wash-out'.",
        "Đường truyền: kim 18–20G tĩnh mạch khuỷu; bơm tiêm 2 nòng — nòng A Gadolinium, nòng B 20–30 mL NaCl 0.9% đuổi thuốc.",
        "Thuốc ngoại bào (ECA — Gadovist, Dotarem, Magnevist): 0.1 mmol/kg, bơm 1.5–2.0 mL/s.",
        "Thuốc đặc hiệu tế bào gan (HBA — Primovist / Gd-EOB-DTPA): 0.025 mmol/kg (0.1 mL/kg), bơm 1.0–1.5 mL/s, bổ sung THÌ TẾ BÀO GAN (HBP) phút 15–20.",
        "Care Bolus Tracking: đặt Tracker Slice tại ĐMC bụng trên nhánh thân tạng; khi thuốc vào ĐMC khởi chạy e-THRIVE sau trễ 8–10 giây để bắt trọn thì động mạch muộn."
      ]},
      { tieuDe: "Các thì chụp động học gan (Dynamic Timeline)", bang: {
        cols: ["Thì chụp", "Mốc thời gian", "Hình ảnh mạch máu & nhu mô", "Ý nghĩa chẩn đoán"],
        rows: [
          ["Trước tiêm (Native)", "0 giây", "Chưa có thuốc; tín hiệu tự nhiên nhu mô gan", "Khảo sát mỡ, xuất huyết bán cấp, hoại tử (T1 sáng tự nhiên)"],
          ["Động mạch muộn (Late Arterial)", "20–25 giây", "ĐMC bụng & ĐM gan sáng rực; TM cửa ngấm nhẹ; nhu mô gan chưa ngấm mạnh", "THÌ VÀNG phát hiện u giàu mạch; 'Wash-in' của HCC, FNH, u máu"],
          ["Tĩnh mạch cửa (Portal Venous)", "60–70 giây", "TM cửa & TM gan ngấm tối đa; nhu mô gan lành ngấm đỉnh điểm", "'Wash-out' của HCC; bộc lộ u nghèo mạch (di căn, áp xe)"],
          ["Cân bằng / Trễ (Equilibrium)", "3–5 phút", "Mạch máu & nhu mô giảm ngấm; tín hiệu cân bằng", "Vỏ bao u HCC; u máu ngấm tiến dần vào trung tâm"],
          ["Tế bào gan (HBP – Primovist)", "15–20 phút", "Nhu mô gan lành & đường mật sáng rực T1W", "HCC & di căn khuyết ngấm (tối đầm); FNH sáng"]
        ]
      }},
      { tieuDe: "Phân biệt tổn thương gan theo thì ngấm thuốc", bang: {
        cols: ["Bệnh lý gan", "ĐM muộn", "TM cửa", "Trễ (3–5 ph)", "Tế bào gan (HBP)"],
        rows: [
          ["HCC", "Bắt thuốc mạnh (Wash-in)", "Thải nhanh (Wash-out)", "Vỏ bao u ngấm rõ", "Khuyết ngấm (tối đầm)"],
          ["Hemangioma (u máu)", "Nốt ngấm ngoại vi", "Ngấm lấp đầy tiến dần vào trong", "Lấp đầy hoàn toàn (sáng rực)", "Khuyết ngấm (tối)"],
          ["FNH", "Bắt thuốc mạnh, đồng nhất", "Đồng tín hiệu nhu mô gan", "Sẹo trung tâm ngấm muộn", "Tăng / đồng tín hiệu (sáng)"],
          ["Di căn gan", "Viền ngấm nhẹ ngoại vi", "Khuyết ngấm nhu mô", "Khuyết ngấm", "Khuyết ngấm (tối đầm)"],
          ["Áp xe gan", "Viền ngấm dày / mạnh", "Viền ngấm kéo dài", "Phù quanh ổ áp xe", "Khuyết ngấm (tối)"]
        ]
      }},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE", "Hô hấp & ghi chú"],
        rows: [
          ["Dual-Echo FFE (In/Out)", "120–150 / In 4.6 · Out 2.3", "5.0mm/10% · 350–400", "1 · 1.5", "Nín thở 15s; lấy đồng thời In & Out-of-Phase"],
          ["Axial T2 TSE FS", "1800–2500 / 80–100", "5.0mm/10% · 350–400", "2 · 1.5", "Respiratory Triggered (đai thở); hình thái nhu mô"],
          ["Axial SS-TSE (HASTE)", "800–1000 / 80–90", "5.0mm/10% · 350–400", "1 · Off", "Nín thở nhẹ / thở tự do (<1s/lát); khảo sát nhanh"],
          ["3D e-THRIVE Dynamic", "4.0–5.0 / 2.0–2.4", "2.0mm/0% · 360–400", "1 · 1.8", "Nín thở 12–15s/thì; T1 3D xóa mỡ, 4 thì sau tiêm"],
          ["MRCP 3D DRIVE", "1500–2000 / 650–700", "1.5mm/0% · 300–320", "1 · 1.5", "Respiratory Triggered; T2 TE cực dài dựng cây đường mật"],
          ["Free-Breathing DWI", "3000–4000 / 65–75", "5.0mm/10% · 360–400", "4–6 · 1.5", "Thở tự do; b-values 0, 50, 800 s/mm²"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; thận trọng Buscopan ở bệnh nhân glôcôm góc đóng, bí tiểu do phì đại tiền liệt tuyến, nhịp tim nhanh."
      ]}
    ],
    nguon: "Protocol MRI vùng bụng & tiêm thuốc động học (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-bung-tho-tu-do",
    phanHe: "ct-mri", modality: "MRI", nhom: "Bụng",
    ten: "MRI bụng — bệnh nhân thở tự do",
    tuKhoa: ["mri bung", "tho tu do", "free breathing", "respiratory triggering", "dai tho", "bellows", "navigator", "4d radial", "stack of stars", "golden angle", "ss-tse", "haste", "dwi", "benh nhan nang"],
    thongSo: [
      { ten: "Đối tượng", giaTri: "BN cao tuổi, bệnh phổi/tim (COPD, suy tim), thở nông, trẻ em; nặng/hôn mê không nín thở được" },
      { ten: "Cuộn thu (Coil)", giaTri: "Body Array / Sense Torso / dStream Torso, phủ vòm hoành → vòm háng" },
      { ten: "Kỹ thuật kiểm soát thở", giaTri: "Respiratory Triggering (đai thở) · Respiratory Navigator (cổng vòm hoành) · 4D FreeBreathing Radial Stack-of-Stars" },
      { ten: "Chuẩn bị", giaTri: "Nhịn ăn 4–6 giờ · Buscopan 20 mg chống co thắt (như kỹ thuật nín thở)" },
      { ten: "Máy", giaTri: "1.5T Philips (Achieva / Ingenia / Multiva)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định / đối tượng", items: [
        "Bệnh nhân không nín thở ổn định: cao tuổi, COPD / suy tim, thở nông, trẻ em.",
        "Bệnh nhân hoàn toàn không thể nín thở (hôn mê, già yếu, bệnh nặng) nhưng vẫn cần tiêm tương phản động học chất lượng cao."
      ]},
      { tieuDe: "Kỹ thuật 2 — Đồng bộ đai thở (Respiratory Triggering) & Navigator", items: [
        "Đai thở (Bellows): gắn đai khí quanh bụng; máy theo dõi đồ thị nhịp thở và chỉ phát xung thu dữ liệu đúng cuối thì thở ra (khi cơ hoành đứng yên). Áp dụng T2 TSE High-Resolution và MRCP 3D DRIVE.",
        "Navigator vòm hoành: đặt hộp định vị (Navigator Box) ở vòm hoành phải; máy phát xung ngắn theo dõi vị trí hoành, chỉ ghi tín hiệu khi hoành trong cửa sổ chấp nhận (Acceptance Window 2–3 mm).",
        "Single-Shot T2 TSE (SS-TSE / HASTE): thu toàn bộ mặt phẳng < 1 giây/lát, bệnh nhân chỉ thở nhẹ nhàng tự nhiên.",
        "Free-Breathing DWI: chụp DWI thở tự do, tăng số lần trung bình tín hiệu (NSA 4–6) để triệt xảo ảnh chuyển động."
      ]},
      { tieuDe: "Kỹ thuật 3 — 4D FreeBreathing Radial Stack-of-Stars", items: [
        "Lấy mẫu K-space hướng tâm (Radial / Golden Angle): các nan hoa liên tục đi qua trung tâm K-space + bộ lọc Respiratory Soft-Gating & KWIC triệt xảo ảnh mờ nhòe do hô hấp.",
        "Bệnh nhân thở tự do bình thường liên tục 3–5 phút; máy tự tái tạo 20–24 thì động học (mỗi thì ~10 giây), chất lượng tương đương hoặc vượt nín thở tốt.",
        "Đây là kỹ thuật tiêm tương phản động học cho bệnh nhân không nín thở được (thay cho e-THRIVE breath-hold)."
      ]},
      { tieuDe: "So sánh 3 kỹ thuật quản lý nhịp thở", bang: {
        cols: ["Thông số / chuỗi xung", "KT1: Nín thở tốt", "KT2: Đồng bộ đai thở", "KT3: 4D FreeBreathing Radial"],
        rows: [
          ["Yêu cầu bệnh nhân", "Nín thở 12–18 giây/thì", "Thở đều theo đai thở", "Thở tự do hoàn toàn (BN nặng/hôn mê)"],
          ["T1 Dynamic +C", "e-THRIVE 3D (12–15s/thì), lát 2 mm", "Dễ mờ nhòe nếu nín thở kém", "4D FreeBreathing Stack-of-Stars, thở tự do 3–5 phút"],
          ["T2W hình thái", "T2 TSE / SS-TSE (15s)", "T2 TSE + Respiratory Triggering", "T2 TSE + Triggering / Navigator"],
          ["Mật – MRCP 3D", "MRCP 3D (nín thở 18s)", "MRCP 3D DRIVE + Triggering (cuối thì thở ra)", "MRCP 3D DRIVE + Diaphragmatic Navigator"],
          ["DWI tán xạ", "Single-Shot EPI DWI (18s)", "Free-Breathing DWI (NSA 4–6)", "Free-Breathing DWI (NSA 4–6)"]
        ]
      }},
      { tieuDe: "Thông số các chuỗi thở tự do (1.5T Philips)", bang: {
        cols: ["Chuỗi xung", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE", "Hô hấp & ghi chú"],
        rows: [
          ["Axial T2 TSE FS", "1800–2500 / 80–100", "5.0mm/10% · 350–400", "2 · 1.5", "Respiratory Triggered (đai thở); hình thái nhu mô"],
          ["Axial SS-TSE (HASTE)", "800–1000 / 80–90", "5.0mm/10% · 350–400", "1 · Off", "Thở tự do (<1s/lát); khảo sát nhanh toàn bụng"],
          ["4D FreeBreathing 3D", "4.5–5.5 / 2.1–2.5", "2.5mm/0% · 360–400", "1 · Off", "Thở tự do hoàn toàn (Radial Stack-of-Stars 3–5 phút)"],
          ["MRCP 3D DRIVE", "1500–2000 / 650–700", "1.5mm/0% · 300–320", "1 · 1.5", "Respiratory Triggered / Navigator; dựng cây đường mật"],
          ["Free-Breathing DWI", "3000–4000 / 65–75", "5.0mm/10% · 360–400", "4–6 · 1.5", "Thở tự do; b-values 0, 50, 800 s/mm²"]
        ]
      }},
      { tieuDe: "Lưu ý", items: [
        "Tiêm tương phản động học ở bệnh nhân thở tự do thực hiện bằng 4D FreeBreathing Radial (20–24 thì).",
        "Nguyên tắc các thì (động mạch muộn · TM cửa · trễ · tế bào gan) và bảng phân biệt tổn thương gan — xem mục 'MRI bụng — bệnh nhân hợp tác tốt (nín thở)'."
      ]},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI vùng bụng & tiêm thuốc động học (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-bung-ruot-thua-thai",
    phanHe: "ct-mri", modality: "MRI", nhom: "Bụng",
    ten: "MRI bụng — ruột thừa ở bệnh nhân có thai",
    tuKhoa: ["ruot thua", "viem ruot thua", "co thai", "mang thai", "appendicitis", "pregnancy", "khong ion hoa"],
    thongSo: [
      { ten: "Trạng thái", giaTri: "Đang biên soạn — chờ tài liệu protocol riêng" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định (tóm tắt)", items: [
        "MRI là phương pháp hình ảnh KHÔNG ion hóa, dùng chẩn đoán viêm ruột thừa ở phụ nữ mang thai khi siêu âm không kết luận được."
      ]},
      { tieuDe: "Lưu ý", items: [
        "Quy trình chi tiết (chuỗi xung, thông số, chống chỉ định) đang được biên soạn và sẽ cập nhật khi có tài liệu. Tài liệu MRI vùng bụng (1.5T Philips) hiện tại chưa bao gồm protocol này."
      ]}
    ],
    nguon: "Khoa CĐHA BVHVGL — đang cập nhật"
  },

  /* ============================================================ */
  /* MRI — MẶT CỔ (u/viêm/áp xe/hạch/tuyến nước bọt · hốc mắt · dây TK sọ)     */
  /* Nguồn: Protocol MRI mặt cổ & bệnh lý (1.5T Philips) — Khoa CĐHA BVHVGL.   */
  /* ============================================================ */
  {
    id: "mri-matco-chung",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mặt cổ",
    ten: "MRI mặt – cổ (u, viêm, áp xe, hạch, tuyến nước bọt)",
    tuKhoa: ["mat co", "vung co", "face neck", "u vom hong", "hau hong", "thanh quan", "ap xe khoang co", "hach co", "tuyen nuoc bot", "mang tai", "duoi ham", "warthin", "t1 fs"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Head-Neck Array Coil đa kênh chuyên dụng" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, cổ trung tính; dặn giữ đầu, không cử động lưỡi / nuốt khi phát xung" },
      { ten: "FOV", giaTri: "Phủ liên tục từ nền sọ xuống khớp ức đòn / quai động mạch chủ (không bỏ sót hạch cổ sâu)" },
      { ten: "Chống xảo ảnh", giaTri: "Đặt Flow Saturation Bands trên & dưới trường chụp để triệt xảo ảnh đập ĐM/TM cảnh" },
      { ten: "Tiêm thuốc", giaTri: "Gd 0.1 mmol/kg (0.2 ml/kg), 1.5–2.0 ml/s; T1 FS + C BẮT BUỘC sau tiêm" },
      { ten: "Máy", giaTri: "1.5T Philips (Achieva / Ingenia / Multiva)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "U vòm họng, hầu họng & thanh quản (đánh giá xâm lấn nền sọ, xoang hang, khoang quanh họng, hạch cổ).",
        "Viêm & áp xe khoang cổ sâu (khoang mặt, sau họng, khoang cảnh).",
        "U tuyến nước bọt (tuyến mang tai, dưới hàm).",
        "Hạch cổ: phân biệt hạch viêm phản ứng vs hạch di căn."
      ]},
      { tieuDe: "Chuẩn bị & chống xảo ảnh", items: [
        "Hướng dẫn bệnh nhân giữ đầu cố định, không cử động lưỡi hay nuốt nước bọt liên tục khi máy phát xung.",
        "Đặt dải bão hòa dòng chảy (Flow Saturation Bands) phía trên và dưới trường chụp để triệt xảo ảnh đập của động mạch & tĩnh mạch cảnh.",
        "Head-Neck Array Coil; FOV phủ nền sọ → khớp ức đòn / quai ĐMC."
      ]},
      { tieuDe: "Các chuỗi xung cốt lõi & vai trò", items: [
        "T1W TSE (Axial / Coronal): độ phân giải giải phẫu cao nhất; đánh giá tủy xương nền sọ, xương hàm dưới; mất/chèn ép dải mỡ khoang quanh họng là dấu hiệu u xâm lấn.",
        "T2W TSE (Axial / Coronal / Sagittal): hình thái khối u, ranh giới tổn thương, dịch hoại tử & dịch xoang cạnh mũi.",
        "T2 FS (Fat Sat) / STIR — BẮT BUỘC XÓA MỠ: triệt tín hiệu mỡ tự nhiên dày, bộc lộ u, ổ viêm, áp xe, phù mô mềm & hạch cổ phát sáng.",
        "DWI & ADC Map: phân biệt u lành vs ác, hạch viêm (ADC cao) vs hạch di căn (ADC thấp), áp xe mủ đặc (hạn chế khuếch tán mạnh) vs u hoại tử dịch lỏng."
      ]},
      { tieuDe: "Quy trình tiêm thuốc (+C)", items: [
        "Bắt buộc tiêm cho mọi trường hợp nghi U, viêm, áp xe hoặc hạch cổ. Gd 0.1 mmol/kg (0.2 ml/kg), tĩnh mạch khuỷu 1.5–2.0 ml/s.",
        "Quy tắc BẮT BUỘC: T1W sau tiêm phải XÓA MỠ (T1 FS + C) — vì mỡ cổ sáng trên T1 sẽ che khuất tổn thương ngấm thuốc nếu không xóa mỡ.",
        "Chụp T1 FS + C ít nhất 2 mặt phẳng (Axial & Coronal/Sagittal) hoặc 3D T1 e-THRIVE xóa mỡ mỏng 1.5 mm."
      ]},
      { tieuDe: "Protocol theo bệnh lý", bang: {
        cols: ["Nhóm bệnh lý", "Mục tiêu khảo sát", "Chuỗi xung trước tiêm", "Sau tiêm (+C)", "Dấu hiệu key"],
        rows: [
          ["U vòm họng, hầu họng & thanh quản", "Xâm lấn nền sọ, xoang hang, khoang quanh họng & hạch cổ", "Ax T1W, T2W, T2 FS; Cor/Sag T2 FS; DWI/ADC", "Ax, Cor & Sag T1 FS + C mỏng 3.5 mm", "U xâm lấn phần mềm & hạch di căn ngấm thuốc / hoại tử"],
          ["Viêm & áp xe khoang cổ sâu", "Khoang bị ảnh hưởng, viền áp xe & mủ", "Ax T1W, Ax & Cor T2 FS, DWI/ADC", "Ax & Cor T1 FS + C (xóa mỡ bắt buộc)", "Ổ mủ hạn chế khuếch tán mạnh; viền ngấm thuốc dày"],
          ["U tuyến nước bọt (mang tai, dưới hàm)", "Phân biệt u lành (Pleomorphic, Warthin) vs ác (Mucoepidermoid, Adenoid Cystic)", "Ax/Cor T1W, T2W, T2 FS mỏng 3 mm, DWI/ADC", "Dynamic T1 3D e-THRIVE (5–6 thì) & T1 FS + C 3 mặt phẳng", "Warthin ADC rất thấp, wash-out sớm; adenoma ADC cao; u ác ngấm không đều"]
        ]
      }},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "Mục đích"],
        rows: [
          ["Axial T1 TSE", "Axial", "500 / 10", "3.5mm/10% · 230–250", "Giải phẫu tủy xương nền sọ & mỡ khoang quanh họng"],
          ["Axial T2 FS", "Axial", "3800 / 80", "3.5mm/10% · 230–250", "Xóa mỡ bộc lộ u, phù nề & hạch cổ sâu"],
          ["Axial DWI", "Axial", "3200 / 70", "3.5mm/10% · 230–250", "b0, b500, b1000 + ADC phân biệt lành vs ác"],
          ["Axial T1 FS + C", "Axial", "550 / 10", "3.5mm/10% · 230–250", "BẮT BUỘC xóa mỡ, từ nền sọ xuống quai ĐMC"],
          ["Cor/Sag T1 FS + C", "Cor/Sag", "550 / 10", "3.5mm/10% · 230–250", "Đánh giá lan rộng chiều dọc nền sọ & hạ họng"]
        ]
      }},
      { tieuDe: "Lưu ý", items: [
        "Nếu T1 FS bị xảo ảnh do không đồng nhất từ trường (bề mặt cổ không phẳng), chuyển sang STIR hoặc T1 Dixon.",
        "Luôn đối chiếu T1 FS trước và sau tiêm để khẳng định tổn thương thực sự bắt thuốc."
      ]},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI mặt cổ & bệnh lý (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-matco-hoc-mat",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mặt cổ",
    ten: "MRI hốc mắt (orbit)",
    tuKhoa: ["hoc mat", "orbit", "u hoc mat", "viem hoc mat", "mat giap trang", "graves", "day than kinh thi", "co van nhan", "t1 fs"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Head / Head-Neck Array Coil" },
      { ten: "Mặt cắt chủ lực", giaTri: "Axial & Coronal T2 FS / STIR mỏng 3 mm theo trục dây thần kinh thị" },
      { ten: "Tiêm thuốc", giaTri: "Gd 0.1 mmol/kg; T1 FS + C BẮT BUỘC (xóa mỡ hốc mắt)" },
      { ten: "Máy", giaTri: "1.5T Philips" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "U hốc mắt, viêm hốc mắt (viêm giả u, viêm mô tế bào).",
        "Bệnh mắt giáp trạng (Graves) — dày các cơ vận nhãn.",
        "Tổn thương dây thần kinh thị (viêm, u thần kinh thị)."
      ]},
      { tieuDe: "Chuỗi xung", items: [
        "Axial T1W, T2W đánh giá giải phẫu & hình thái tổn thương.",
        "Axial & Coronal T2 FS / STIR mỏng 3 mm, đặt theo trục dây thần kinh thị.",
        "Xóa mỡ bắt buộc để bộc lộ tổn thương trong hốc mắt nhiều mỡ."
      ]},
      { tieuDe: "Tiêm thuốc (+C)", items: [
        "Axial, Coronal & Sagittal Oblique T1 FS + C (bắt buộc Fat Sat).",
        "T1 FS + C xóa hoàn toàn mỡ hốc mắt, nổi bật ngấm thuốc dây thần kinh thị & cơ vận nhãn."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "Mục đích"],
        rows: [
          ["Coronal T2 FS", "Coronal", "3500 / 80", "3.0mm/0% · 180–200", "Vuông góc dây TK thị, xóa mỡ hốc mắt"],
          ["T1 FS + C (Ax/Cor/Sag-Obl)", "3 mặt phẳng", "550 / 10", "3.5mm · 230–250", "Bắt buộc xóa mỡ; nổi bật ngấm thuốc TK thị & cơ vận nhãn"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI mặt cổ & bệnh lý (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-matco-day-tk-so",
    phanHe: "ct-mri", modality: "MRI", nhom: "Mặt cổ",
    ten: "MRI dây thần kinh sọ (góc cầu tiểu não – CPA)",
    tuKhoa: ["day than kinh so", "cpa", "goc cau tieu nao", "u day than kinh", "acoustic neuroma", "schwannoma", "day v", "day vii", "day viii", "3d ciss", "fiesta", "drive", "xung dot than kinh mach mau"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Head Array Coil" },
      { ten: "Chuỗi xung chủ lực", giaTri: "3D CISS / FIESTA / DRIVE cắt mỏng đẳng hướng 0.6–0.7 mm qua ngách xương đá" },
      { ten: "Tiêm thuốc", giaTri: "Gd 0.1 mmol/kg; 3D T1 FS + C (3D e-THRIVE / MP-RAGE) cắt mỏng hố sau" },
      { ten: "Máy", giaTri: "1.5T Philips" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "U dây thần kinh V, VIII (acoustic neuroma / schwannoma).",
        "Xung đột thần kinh – mạch máu (đau dây V, co giật nửa mặt).",
        "Khảo sát dây thần kinh sọ trong góc cầu tiểu não (CPA) & ống tai trong."
      ]},
      { tieuDe: "Chuỗi xung", items: [
        "Axial T1W, T2W nền.",
        "3D CISS / FIESTA / DRIVE cắt mỏng đẳng hướng 0.6 mm qua ngách xương đá — bộc lộ ranh giới dây thần kinh trong dịch não tủy.",
        "Sau tiêm: 3D T1 FS + C (3D e-THRIVE / MP-RAGE) cắt mỏng hố sau — u ngấm thuốc rõ."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "Mục đích"],
        rows: [
          ["3D DRIVE / CISS", "Axial 3D", "1500 / 200", "0.7mm/0% · 180–200", "Dựng 3D khảo sát dây VII, VIII trong góc cầu tiểu não"],
          ["3D T1 FS + C", "3D hố sau", "e-THRIVE / MP-RAGE", "~1.5mm · hố sau", "U dây thần kinh ngấm thuốc (acoustic neuroma)"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI mặt cổ & bệnh lý (1.5T Philips) — Khoa CĐHA BVHVGL"
  },

  /* ============================================================ */
  /* MRI — CHẬU (phụ khoa nữ; các mục khác chờ tài liệu)                       */
  /* Nguồn: Protocol MRI chậu nữ & bệnh lý (1.5T Philips) — Khoa CĐHA BVHVGL.  */
  /* ============================================================ */
  {
    id: "mri-chau-phu-khoa-nu",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chậu",
    ten: "MRI chậu – phụ khoa nữ",
    tuKhoa: ["chau nu", "phu khoa", "female pelvis", "u xo tu cung", "adenomyosis", "lac noi mac", "endometriosis", "die", "u buong trung", "o-rads", "ung thu co tu cung", "ung thu niem mac tu cung", "junctional zone"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Body Array / Sense Torso Coil, phủ từ mào chậu xuống hết khớp mu & tầng sinh môn" },
      { ten: "Chuẩn bị", giaTri: "Nhịn ăn 4–6 giờ · Buscopan 20 mg (IM/IV chậm) chống co thắt ruột" },
      { ten: "Bàng quang", giaTri: "Chứa nước tiểu vừa phải (đi tiểu hết trước chụp 30–60 phút)" },
      { ten: "Mặt phẳng T2 High-Res", giaTri: "Sagittal (trục dọc TC) · Axial-Obl (vuông góc TC/CTC) · Coronal-Obl (song song TC)" },
      { ten: "Tiêm thuốc", giaTri: "Dynamic 3D T1 FS khi nghi ác tính / DIE (thì cơ tử cung ~50–60s)" },
      { ten: "Máy", giaTri: "1.5T Philips (Achieva / Ingenia / Multiva)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "U xơ tử cung & adenomyosis.",
        "Lạc nội mạc tử cung (endometriosis & lạc nội mạc sâu – DIE).",
        "Khối u buồng trứng (phân loại O-RADS MRI).",
        "Ung thư cổ tử cung & ung thư niêm mạc tử cung (chẩn đoán giai đoạn)."
      ]},
      { tieuDe: "Chuẩn bị bệnh nhân", items: [
        "Nhịn ăn 4–6 giờ để ruột trống, giảm nhu động quai ruột.",
        "Tiêm Buscopan 20 mg (IM hoặc IV chậm) ngay trước chụp triệt nhiễu nhu động ruột.",
        "Bàng quang chứa vừa phải: quá căng đẩy tử cung ra sau gây méo giải phẫu, quá trống làm gấp khúc tử cung.",
        "Tùy chọn: bơm 50–100 ml gel siêu âm vào âm đạo / trực tràng trong khảo sát DIE để bộc lộ nốt thâm nhiễm."
      ]},
      { tieuDe: "Bộ chuỗi xung cốt lõi & vai trò", bang: {
        cols: ["Chuỗi xung cốt lõi", "Quy cách đặt mặt cắt", "Ứng dụng & giá trị chẩn đoán"],
        rows: [
          ["T2W TSE High-Res (Sag · Ax-Obl · Cor-Obl)", "Sag: trục dọc TC; Ax-Obl: vuông góc TC/CTC; Cor-Obl: song song TC", "Bộc lộ 3 lớp giải phẫu TC (nội mạc · JZ · cơ TC); xâm lấn parametrium & dị dạng TC"],
          ["T1W TSE & T1 Fat Sat", "Axial & Sagittal phủ toàn tiểu khung; đối chiếu T1 thường & T1 FS", "Phân biệt endometrioma (T1 sáng, FS vẫn sáng) vs teratoma (T1 sáng, FS xóa đen); máu cũ & vi xuất huyết nốt DIE"],
          ["DWI & ADC Map", "b0, b500, b800/1000; tái tạo ADC định lượng", "K cổ TC & K niêm mạc TC (ADC rất thấp); O-RADS u buồng trứng; hạch chậu & di căn phúc mạc"]
        ]
      }},
      { tieuDe: "Quy trình tiêm thuốc tương phản (+C)", items: [
        "KHÔNG CẦN TIÊM: u xơ tử cung thường quy (trước nội khoa / tắc mạch), adenomyosis đơn thuần, tầm soát dị dạng bẩm sinh tử cung — khảo sát đủ trên T2W High-Res 3 mặt phẳng, T1W/T1 FS và DWI/ADC.",
        "BẮT BUỘC TIÊM (Dynamic 3D T1 FS): K cổ tử cung, K niêm mạc tử cung, u buồng trứng / cạnh tử cung nghi ác, lạc nội mạc sâu (DIE). Liều 0.1 mmol/kg Gd, bơm 1.5–2.0 ml/s.",
        "Các thì sau tiêm: Động mạch (~25–30s) ngấm sớm/muộn của u; Cơ tử cung (~50–60s) ĐÁNH GIÁ ĐỘ SÂU XÂM LẤN CƠ TỬ CUNG; Trễ (~3–5 phút) nốt thâm nhiễm DIE & vỏ bao u."
      ]},
      { tieuDe: "Protocol chuyên sâu theo bệnh lý", bang: {
        cols: ["Bệnh lý phụ khoa", "Mục tiêu chẩn đoán", "Protocol bắt buộc"],
        rows: [
          ["U xơ TC & Adenomyosis", "Định vị u xơ (FIGO); phân biệt u xơ vs sarcôm cơ TC; adenomyosis (JZ > 12 mm)", "T2W High-Res 3 mặt phẳng; T1W Axial; DWI/ADC"],
          ["Lạc nội mạc (Endometriosis & DIE)", "Nang lạc nội mạc buồng trứng; nốt DIE ở dây chằng TC–trực tràng, âm đạo, bàng quang", "T1W & T1 FS; T2W mỏng 3 mm (shading sign); T1 FS + C (nốt DIE ngấm muộn)"],
          ["U buồng trứng (O-RADS MRI)", "Phân loại lành/ác; chồi u, vách ngăn, thành phần nang", "T2W 3 mặt phẳng; T1W/T1 FS; DWI/ADC; DCE Dynamic T1 FS"],
          ["Ung thư cổ tử cung", "Kích thước u, độ sâu xâm lấn; parametrium (FIGO IIB) & hạch chậu", "Ax-Obl T2W High-Res (vuông góc CTC); Sag T2W; DWI/ADC; Dynamic T1 FS + C"],
          ["Ung thư niêm mạc tử cung", "Độ sâu xâm lấn cơ TC (<50% vs ≥50%); xâm lấn CTC & hạch chậu", "Ax-Obl T2W High-Res (vuông góc buồng TC); Dynamic T1 FS + C (thì cơ TC ~50–60s); DWI/ADC"]
        ]
      }},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE"],
        rows: [
          ["Sagittal T2 TSE", "Sagittal", "3500 / 100", "4.0mm/10% · 220–240", "2 · 1.5"],
          ["Ax-Obl T2 High-Res", "Axial Oblique", "3800 / 100", "3.0–4.0mm/10% · 200–220", "2 · 1.5"],
          ["Cor-Obl T2 High-Res", "Coronal Oblique", "3800 / 100", "3.0–4.0mm/10% · 200–220", "2 · 1.5"],
          ["Axial T1 TSE / T1 FS", "Axial", "500 / 10", "4.0mm/10% · 220–240", "2 · 1.5"],
          ["Axial DWI (b1000)", "Axial", "3200 / 70", "4.0mm/10% · 220–240", "3 · 1.8"],
          ["3D T1 FS (e-THRIVE)", "Axial 3D", "4.5 / 2.2", "2.0mm/0% · 240–260", "1 · 1.5"],
          ["Ax/Cor T1 FS + C", "Axial / Coronal", "550 / 10", "3.5mm/10% · 220–240", "2 · 1.5"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; thận trọng Buscopan ở bệnh nhân glôcôm góc đóng, bí tiểu do phì đại tiền liệt tuyến, nhịp tim nhanh."
      ]}
    ],
    nguon: "Protocol MRI chậu nữ & bệnh lý (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-chau-tien-liet",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chậu",
    ten: "MRI tiền liệt tuyến (mpMRI, PI-RADS v2.1)",
    tuKhoa: ["tien liet tuyen", "prostate", "mpmri", "pi-rads", "pirads", "dwi", "adc", "dce", "vung ngoai vi", "pz", "vung chuyen tiep", "tz", "ung thu tien liet tuyen", "phu khoa nam"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Pelvic Phased-Array Coil (tối đa SNR vùng tiểu khung)" },
      { ten: "Chuẩn bị", giaTri: "Thụt tháo trực tràng sạch khí/phân · Buscopan 20 mg (IV/IM) · bàng quang vừa phải (tiểu hết trước 30–60 phút)" },
      { ten: "Phân vùng giải phẫu", giaTri: "PZ ngoại vi (70–80% thể tích, 70–75% ung thư) · TZ chuyển tiếp (~20%, BPH + 20% ung thư) · CZ trung tâm · AFMS mô đệm xơ cơ trước" },
      { ten: "Bộ xung mpMRI", giaTri: "T2W High-Res + DWI/ADC (high-b ≥ 1400) + DCE Dynamic 3D" },
      { ten: "Tiêm thuốc", giaTri: "Gd 0.1 mmol/kg (0.2 ml/kg), 2.0–3.0 ml/s; DCE ≤ 15s/thì, kéo dài > 2 phút" },
      { ten: "Máy", giaTri: "1.5T Philips (Achieva / Ingenia / Multiva)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Phát hiện, định vị và phân độ ung thư tiền liệt tuyến theo PI-RADS v2.1.",
        "Đánh giá vỏ bao tuyến, xâm lấn túi tinh, cổ bàng quang và di căn hạch chậu."
      ]},
      { tieuDe: "Chuẩn bị bệnh nhân (4 bước)", items: [
        "Sàng lọc an toàn: kiểm tra kim loại, máy tạo nhịp, thiết bị cấy ghép.",
        "Chuẩn bị đường ruột: thụt tháo trực tràng sạch phân/khí (khí gây xảo ảnh nhạy từ trên DWI) + Buscopan 20 mg.",
        "Kiểm soát bàng quang: tiểu hết trước 30–60 phút, giữ nước tiểu vừa phải.",
        "Tư thế & coil: nằm ngửa, đệm gối thả lỏng; đặt Pelvic Phased-Array Coil."
      ]},
      { tieuDe: "Bộ chuỗi xung đa thông số (mpMRI) theo PI-RADS v2.1", bang: {
        cols: ["Chuỗi xung mpMRI", "Mặt cắt & quy cách", "Thông số", "Vai trò PI-RADS v2.1"],
        rows: [
          ["T2W High-Res (primary TZ)", "Ax-Obl (vuông góc thành trước trực tràng cho PZ/vỏ bao; song song trục tuyến cho TZ) · Sag · Cor", "≤3mm, Gap 0%, FOV 12–20cm, 0.7×0.4mm", "QUYẾT ĐỊNH vùng chuyển tiếp (TZ); vỏ bao, phá vỡ vỏ, xâm lấn túi tinh & cổ bàng quang"],
          ["DWI & ADC (primary PZ)", "Ax-Obl trùng hướng Axial T2W", "≤4mm, Gap 0%; b = 0, 800–1000, ≥1400 (high-b)", "QUYẾT ĐỊNH vùng ngoại vi (PZ); u ác DWI sáng rực b1400/2000, ADC tối đầm"],
          ["DCE Dynamic 3D (+C)", "Ax-Obl phủ đáy → đỉnh tuyến", "3D T1 FS GRE, ≤15s/thì, tổng > 2 phút", "Bổ trợ tăng sinh mạch / ngấm sớm; nâng PI-RADS 3 → 4 ở PZ"],
          ["3D Dynamic thở tự do (4D)", "Ax-Obl (thở tự do liên tục)", "Radial Stack-of-Stars, KWIC + Soft-Gating", "Cho BN không nín thở / bệnh nặng; triệt xảo ảnh thở"],
          ["Pelvic Staging FOV lớn", "Ax T1W / T2W FOV lớn", "4–5mm, Gap 10%, FOV 28–35cm", "Di căn hạch chậu (trong/ngoài/trước xương cùng) & xương chậu"]
        ]
      }},
      { tieuDe: "Quy tắc phân độ & nâng điểm PI-RADS v2.1", bang: {
        cols: ["Vùng giải phẫu", "Chuỗi quyết định", "Quy tắc điểm", "Nâng PI-RADS 3 → 4"],
        rows: [
          ["Vùng ngoại vi (PZ)", "DWI / ADC", "Điểm phụ thuộc mức hạn chế khuếch tán DWI/ADC", "DWI = 3: DCE(+) ngấm sớm khu trú → PI-RADS 4; DCE(−) → giữ 3"],
          ["Vùng chuyển tiếp (TZ)", "T2W High-Res", "Điểm phụ thuộc hình thái tổn thương trên T2W", "T2W = 3: DWI = 5 (sáng rực / ADC tối > 1.5cm) → PI-RADS 4; DWI < 5 → giữ 3"]
        ]
      }},
      { tieuDe: "Khắc phục xảo ảnh phòng máy (PI-QUAL)", bang: {
        cols: ["Xảo ảnh", "Dấu hiệu", "Giải pháp tại phòng máy"],
        rows: [
          ["Motion (ruột/thở)", "Ghosting, mờ nhòe", "Thụt tháo + Buscopan 20 mg; chuyển 4D FreeBreathing Radial"],
          ["Susceptibility (khí/kim loại)", "Méo hình, hố đen (> 5mm)", "Thụt sạch khí; đổi hướng mã hóa pha; tăng Receiver Bandwidth"],
          ["Chemical Shift", "Viền sáng/tối ranh giới mỡ–nước", "Tăng Receiver Bandwidth; tối ưu xóa mỡ"],
          ["Aliasing (cuộn hình)", "Hình cuộn chồng lấp nhu mô", "Tăng FOV (12–20cm); tăng ma trận"],
          ["Low SNR", "Nhiễu hạt (grainy)", "Dùng Pelvic Phased-Array Coil; tăng TR / voxel / NSA"]
        ]
      }},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Lát/Gap · FOV (mm)", "NSA · SENSE"],
        rows: [
          ["Pelvis Sag T2 TSE", "Sagittal", "3500 / 100", "3.0mm/0% · 200–220", "2 · 1.5"],
          ["Ax-Obl T2 High-Res", "Axial Oblique", "3800 / 100", "3.0mm/0% · 180–200", "2 · 1.5"],
          ["Cor T2 High-Res", "Coronal", "3500 / 100", "3.0mm/0% · 180–200", "2 · 1.5"],
          ["Ax DWI (b0/800/1400–2000)", "Axial Oblique", "3200 / 70", "3.0–4.0mm/0% · 180–220", "3 · 1.8"],
          ["DCE Dynamic 3D (≤15s/thì)", "Axial", "4.2 / 2.1", "2.0mm/0% · 200–220", "1 · 1.5"],
          ["Pelvis Staging Ax T1/T2", "Axial", "550 / 10", "4.0–5.0mm/10% · 280–350", "2 · 1.5"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI; thận trọng Buscopan (glôcôm góc đóng, bí tiểu, nhịp nhanh)."
      ]}
    ],
    nguon: "Protocol MRI tiền liệt tuyến mpMRI (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-chau-ro-hau-mon",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chậu",
    ten: "MRI đường rò & áp xe hậu môn",
    tuKhoa: ["ro hau mon", "duong ro hau mon", "ap xe hau mon", "anal fistula", "perianal abscess", "parks", "co that", "tang sinh mon", "stir", "t1 fs", "co nang hau mon"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Pelvic Phased-Array Coil, phủ từ mào chậu đến tầng sinh môn" },
      { ten: "Chuẩn bị", giaTri: "Nhịn ăn 4–6 giờ · BẮT BUỘC thụt tháo trực tràng 1–2 giờ trước chụp · Buscopan 20 mg" },
      { ten: "Mặt cắt chủ lực", giaTri: "Ax-Obl (vuông góc trục ống hậu môn) & Cor-Obl (song song trục ống hậu môn)" },
      { ten: "Tiêm thuốc", giaTri: "BẮT BUỘC T1 FS + C (xóa mỡ) 3 mặt phẳng; Gd 0.1 mmol/kg, 1.5–2.0 ml/s" },
      { ten: "Máy", giaTri: "1.5T Philips" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Đường rò hậu môn (phân loại theo Parks): bộc lộ lỗ rò trong/ngoài, nhánh phụ, liên quan phức hợp cơ thắt.",
        "Áp xe hậu môn / quanh hậu môn: định vị ổ mủ, viền áp xe.",
        "MRI là 'chuẩn vàng' nhờ độ phân giải mô mềm cao đánh giá tương quan tổn thương với cơ thắt & cơ nâng hậu môn."
      ]},
      { tieuDe: "Chuẩn bị bệnh nhân", items: [
        "Nhịn ăn 4–6 giờ; BẮT BUỘC thụt tháo sạch trực tràng 1–2 giờ trước chụp (loại phân & khí → triệt xảo ảnh nhạy từ).",
        "Tiêm Buscopan 20 mg (bắp/IV) giảm nhu động ruột.",
        "Nằm ngửa duỗi chân (hoặc nằm sấp); Pelvic Phased-Array Coil."
      ]},
      { tieuDe: "Chuỗi xung & quy cách đặt lát", items: [
        "Ax-Obl & Cor-Obl T2 FS / STIR (≤3 mm): làm phát sáng dải rò và ổ mủ ẩn.",
        "Ax-Obl & Cor-Obl T2W High-Res: bộc lộ 4 lớp cơ thắt, lỗ rò trong/ngoài, nhánh phụ.",
        "Ax-Obl đặt VUÔNG GÓC trục ống hậu môn; Cor-Obl SONG SONG trục ống hậu môn (đánh giá liên quan cơ nâng hậu môn).",
        "Sagittal T2W làm localizer định vị góc nghiêng ống hậu môn."
      ]},
      { tieuDe: "Quy trình tiêm thuốc (+C) & dấu hiệu", items: [
        "BẮT BUỘC TIÊM: Gd 0.1 mmol/kg, 1.5–2.0 ml/s; chụp T1 FS + C (xóa mỡ) 3 mặt phẳng.",
        "Rò hoạt động: thành rò ngấm thuốc mạnh rực rỡ.",
        "Ổ áp xe: viền vỏ bao ngấm thuốc dày, trung tâm mủ không ngấm.",
        "Rò xơ hóa cũ: hoàn toàn KHÔNG ngấm thuốc."
      ]},
      { tieuDe: "Phân loại đường rò hậu môn theo Parks", bang: {
        cols: ["Loại rò (Parks)", "Tỷ lệ", "Đặc điểm trên MRI"],
        rows: [
          ["Gian cơ thắt (Intersphincteric)", "~70%", "Đường rò đi trong khoang gian cơ thắt"],
          ["Qua cơ thắt (Transsphincteric)", "~25%", "Xuyên qua cả cơ thắt trong và cơ thắt ngoài"],
          ["Trên cơ thắt (Suprasphincteric)", "~5%", "Lên trên cơ nâng hậu môn rồi vòng xuống khoang ngồi–trực tràng"],
          ["Ngoài cơ thắt (Extrasphincteric)", "~1%", "Từ trực tràng xuyên qua cơ nâng hậu môn ra da"]
        ]
      }},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "Ghi chú"],
        rows: [
          ["Sagittal T2 TSE", "Sagittal", "3500 / 100", "3.5mm/10% · 220–240", "Định vị góc nghiêng ống hậu môn"],
          ["Ax-Obl T2 FS High-Res", "Axial Oblique", "3800 / 80", "3.0mm/0% · 180–200", "Vuông góc trục ống hậu môn"],
          ["Cor-Obl T2 FS High-Res", "Coronal Oblique", "3800 / 80", "3.0mm/0% · 180–200", "Song song trục ống hậu môn"],
          ["Ax/Cor T1 FS + C", "Axial / Coronal", "550 / 10", "3.0mm/0% · 180–200", "BẮT BUỘC xóa mỡ sau tiêm"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI đường rò hậu môn & ung thư trực tràng (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-chau-ung-thu-truc-trang",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chậu",
    ten: "MRI ung thư trực tràng (chẩn đoán giai đoạn)",
    tuKhoa: ["ung thu truc trang", "rectal cancer", "dai trang doan thap", "t-staging", "t-stage", "mrf", "crm", "ncrt", "mac treo truc trang", "dwi", "gel truc trang"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Pelvic Phased-Array Coil, phủ mào chậu → tầng sinh môn" },
      { ten: "Chuẩn bị", giaTri: "Nhịn ăn · thụt tháo trực tràng · Buscopan 20 mg · bơm 50–100 ml gel siêu âm ấm vào trực tràng (làm căng lòng, bộc lộ bề dày u)" },
      { ten: "Mặt cắt quyết định", giaTri: "Axial-Obl T2W High-Res VUÔNG GÓC thành trực tràng tại u (quyết định T-stage) + Sagittal định vị u + Cor-Obl (u thấp)" },
      { ten: "Tiêm thuốc", giaTri: "KHÔNG tiêm thường quy (ESUR/ESMO); chỉ tiêm khi nghi tái phát, đánh giá NCRT hoặc xâm lấn bàng quang" },
      { ten: "Máy", giaTri: "1.5T Philips" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Chẩn đoán giai đoạn ung thư trực tràng (T-stage, mạc treo trực tràng MRF, bờ cắt phẫu thuật CRM).",
        "Tầm soát hạch di căn mạc treo & tiểu khung.",
        "Đánh giá đáp ứng sau hóa xạ trị tiền phẫu (NCRT) — phân biệt u tồn dư với xơ hóa."
      ]},
      { tieuDe: "Chuẩn bị bệnh nhân", items: [
        "Nhịn ăn 4–6 giờ; thụt tháo sạch trực tràng; Buscopan 20 mg giảm nhu động.",
        "Bơm 50–100 ml gel siêu âm ấm vào trực tràng làm căng lòng, bộc lộ rõ bề dày u và độ xâm lấn."
      ]},
      { tieuDe: "Chuỗi xung & quy cách đặt lát", items: [
        "Sagittal T2W High-Res: xác định vị trí u (thấp / giữa / cao).",
        "Axial Oblique T2W High-Res (≤3 mm, FOV nhỏ): cắt VUÔNG GÓC thành trực tràng tại u — xung QUYẾT ĐỊNH T-stage, đánh giá phá vỡ lớp cơ, xâm lấn MRF & CRM.",
        "Coronal Oblique T2W cho u thấp.",
        "Axial DWI (b0, b800, b1000/1400) + ADC: hạch di căn mạc treo & đánh giá đáp ứng NCRT."
      ]},
      { tieuDe: "Quy định tiêm thuốc (+C)", items: [
        "KHÔNG tiêm thường quy (theo ESUR/ESMO): T2W High-Res & DWI đạt độ chính xác > 90% T-stage.",
        "Tiêm thường quy dễ gây ngấm thuốc mô viêm → đánh giá quá mức giai đoạn (overstaging).",
        "Chỉ tiêm khi: nghi u tái phát, đánh giá sau NCRT, hoặc nghi xâm lấn bàng quang."
      ]},
      { tieuDe: "Phân độ T-staging ung thư trực tràng trên MRI", bang: {
        cols: ["Giai đoạn", "Đặc điểm hình ảnh MRI"],
        rows: [
          ["T1 / T2", "Khu trú niêm mạc / lớp cơ; bờ ngoài lớp cơ láng mịn"],
          ["T3 (a/b/c/d)", "U phá vỡ lớp cơ ăn ra mạc treo trực tràng (<1mm · 1–5mm · 5–15mm · >15mm)"],
          ["T4a / T4b", "Ăn thủng phúc mạc tạng / xâm lấn bàng quang, tử cung, xương cùng"],
          ["CRM (+)", "Khoảng cách ngắn nhất từ u/hạch đến mạc treo trực tràng (MRF) ≤ 1 mm"]
        ]
      }},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "Ghi chú"],
        rows: [
          ["Sagittal T2 TSE", "Sagittal", "3500 / 100", "3.5mm/10% · 220–240", "Định vị vị trí u (thấp/giữa/cao)"],
          ["Ax-Obl T2 High-Res", "Axial Oblique", "4000 / 100", "3.0mm/0% · 160–180", "Vuông góc thành trực tràng tại u — quyết định T-stage"],
          ["Axial DWI (b0/800/1000–1400)", "Axial", "3200 / 70", "3.5mm/0% · 200–220", "Hạch di căn mạc treo; đáp ứng NCRT"],
          ["3D T1 FS (e-THRIVE)", "Axial 3D", "4.5 / 2.2", "2.0mm/0% · 220–240", "Chỉ khi nghi u tái phát / xâm lấn"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Khi có tiêm: chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI đường rò hậu môn & ung thư trực tràng (1.5T Philips) — Khoa CĐHA BVHVGL"
  },

  /* ============================================================ */
  /* MRI — CHI & CÁC KHỚP (xương-mô mềm chi + 6 khớp ngoại vi)                 */
  /* Nguồn: Protocol MRI xương-mô mềm chi & khớp ngoại vi (1.5T Philips).      */
  /* ============================================================ */
  {
    id: "mri-chi-xuong-mo-mem",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chi & các khớp",
    ten: "MRI xương & mô mềm chi",
    tuKhoa: ["xuong chi", "mo mem chi", "canh tay", "cang tay", "dui", "cang chan", "u xuong", "osteosarcoma", "ewing", "u mo mem", "sarcoma", "lipoma", "liposarcoma", "viem xuong tuy", "ap xe", "penumbra", "skip lesion", "dce"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Body Array / Torso / Dedicated Limb Coil; đặt chi ở Isocenter để xóa mỡ đều" },
      { ten: "Đặt FOV", giaTri: "Phủ TOÀN BỘ chiều dài xương tổn thương + tối thiểu 1 khớp kề cận (phát hiện skip lesions)" },
      { ten: "Marker", giaTri: "Dán Vitamin E / B12 lên khối u sờ thấy, điểm đau hoặc sẹo mổ cũ để định FOV chính xác" },
      { ten: "So sánh 2 bên", giaTri: "Chụp 1 chuỗi T2 FS FOV lớn so sánh 2 bên khi u lan tỏa / phù nề rộng" },
      { ten: "Tiêm thuốc", giaTri: "T1 FS + C 3 mặt phẳng + DCE-MRI khi nghi u / viêm / áp xe" },
      { ten: "Máy", giaTri: "1.5T Philips (Achieva / Ingenia / Multiva)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "U xương (osteosarcoma, Ewing sarcoma, chondrosarcoma).",
        "U mô mềm chi (liposarcoma, synovial sarcoma, lipoma).",
        "Viêm xương tủy cấp/mạn, áp xe mô mềm.",
        "Đánh giá đáp ứng sau hóa trị tiền phẫu & định hướng sinh thiết (biopsy targeting)."
      ]},
      { tieuDe: "Nguyên tắc đặt FOV & chuẩn bị", items: [
        "Phủ toàn bộ chiều dài xương tổn thương + 1 khớp kề cận để không bỏ sót skip lesions trong ống tủy.",
        "Dán marker Vitamin E / B12 lên vị trí tổn thương sờ thấy / điểm đau / sẹo mổ.",
        "So sánh 2 bên bằng 1 chuỗi T2 FS FOV lớn khi tổn thương lan tỏa.",
        "Đặt chi cần chụp ở Isocenter; chi lệch tâm ưu tiên STIR / Dixon để xóa mỡ đều."
      ]},
      { tieuDe: "Bộ chuỗi xung cốt lõi & vai trò", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "Hình ảnh & vai trò chẩn đoán"],
        rows: [
          ["T1W TSE", "Axial / Coronal / Sagittal", "Mỡ tủy sáng, vỏ xương đen; thay thế tủy mỡ, xâm lấn tủy, mỡ gian cơ, lipoma. BẮT BUỘC ≥ 2 mặt phẳng trước tiêm."],
          ["T2 FS / STIR", "Axial & Coronal/Sagittal", "Mỡ đen, dịch/u/phù sáng rực; u, phù tủy xương, phù mô mềm, phản ứng màng xương, tràn dịch khớp."],
          ["PD FS", "Axial / Coronal", "Tương phản cao sụn–gân–dịch; tổn thương sụn khớp kề cận, gân bám tận, mạc sâu gian cơ."],
          ["DWI & ADC", "Axial", "U lành vs ác (sarcoma); áp xe hoại tử (ADC rất thấp) vs u hoại tử. b = 0, 500, 800/1000."],
          ["T2* mFFE / GE", "Axial", "Hemosiderin / vôi hóa đen tụ; vi xuất huyết, vôi hóa trong u, GCTTS, PVNS."]
        ]
      }},
      { tieuDe: "Quy trình tiêm thuốc (+C) & DCE-MRI", items: [
        "KHÔNG CẦN TIÊM: lipoma lành điển hình, nang xương/nang hoạt dịch lành, dập cơ/tụ máu giai đoạn rõ, gãy xương cấp không nghi u — chụp đủ T1W, T2 FS/STIR, PD FS.",
        "BẮT BUỘC TIÊM (IV Gd): nghi u xương, u mô mềm, viêm xương tủy, áp xe mô mềm (Penumbra sign), đánh giá đáp ứng hóa trị.",
        "Kỹ thuật: T1 FS + C (xóa mỡ) 3 mặt phẳng + T1 3D e-THRIVE Dynamic (DCE 5–6 thì) + ảnh trừ (subtracted) khẳng định ngấm thuốc."
      ]},
      { tieuDe: "Protocol nâng cao theo bệnh lý", bang: {
        cols: ["Bệnh lý", "Chuỗi xung", "Mục tiêu chẩn đoán"],
        rows: [
          ["U xương ác (Osteosarcoma, Ewing)", "T1W toàn bộ chiều dài xương, T2 FS Ax & Cor, DWI/ADC, T1 FS + C 3 mặt phẳng", "Lan rộng trong tủy (skip lesions), phá hủy vỏ, phản ứng màng xương (Codman, sunburst), u mô mềm ngoài xương, xâm lấn bó mạch TK / khớp"],
          ["U mô mềm (Sarcoma vs Lipoma)", "T1W, T2 FS, DWI/ADC, DCE-MRI, T1 FS + C", "Lipoma lành (xóa đen hoàn toàn T1 FS, không ngấm) vs liposarcoma (vách dày > 3mm ngấm, thành phần đặc); tương quan mạc sâu & bó mạch TK"],
          ["Viêm xương tủy & áp xe mô mềm", "T1W, T2 FS/STIR, T1 FS + C 3 mặt phẳng", "Penumbra sign trên T1W; viền ngấm thuốc rực rỡ quanh ổ mủ không ngấm"]
        ]
      }},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE"],
        rows: [
          ["T1W TSE", "Axial / Coronal", "450 / 10", "4.0mm/10% · 180–350", "2 · 1.5"],
          ["T2W FS", "Axial / Coronal", "3800 / 80", "4.0mm/10% · 180–350", "2 · 1.5"],
          ["STIR (chi lệch tâm, TI 150)", "Coronal / Sagittal", "3800 / 60", "4.0mm/10% · 220–400", "2 · 1.5"],
          ["PD FS", "Axial / Coronal", "2800 / 30", "3.5mm/10% · 160–240", "2 · 1.5"],
          ["Axial DWI", "Axial", "3200 / 70", "4.0mm/10% · 180–350", "3 · 1.8"],
          ["T1 FS + C", "3 mặt phẳng", "550 / 10", "4.0mm/10% · 180–350", "2 · 1.5"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI xương & mô mềm chi (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-khop-vai",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chi & các khớp",
    ten: "MRI khớp vai",
    tuKhoa: ["khop vai", "shoulder", "chop xoay", "gan tren gai", "sun vien", "o chao", "slap", "bankart", "mr arthrography", "ctm"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Shoulder Dedicated Coil" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, tay duỗi sát thân, xoay ngoài nhẹ (ngửa lòng bàn tay nhẹ)" },
      { ten: "Hướng mặt cắt", giaTri: "Cor-Obl (song song gân trên gai) · Sag-Obl (vuông góc gân trên gai) · Ax-Obl (vuông góc ổ chảo)" },
      { ten: "FOV", giaTri: "160–180 mm, độ phân giải cao" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định & bệnh lý thường gặp", items: [
        "Rách gân chóp xoay (rotator cuff).",
        "Rách sụn viền ổ chảo: SLAP, Bankart; mất vững khớp vai."
      ]},
      { tieuDe: "Chuỗi xung & tiêm thuốc", items: [
        "Chuỗi xung chuẩn: PD FS (chuẩn vàng), T1 TSE, 3D FFE (sụn viền / sụn khớp).",
        "KHÔNG tiêm cho rách chóp xoay thoái hóa thường quy.",
        "Direct MR Arthrography (CTM) khi nghi rách sụn viền SLAP / Bankart mạn tính: tiêm 10–15 ml Gd pha loãng (2 mmol/L) vào ổ khớp dưới hướng dẫn siêu âm / DSA, chụp T1 FS 3 mặt phẳng trong 30 phút."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE"],
        rows: [
          ["PD FS Cor-Obl", "Coronal Oblique", "2800 / 30", "3.0mm/10% · 160–180", "2 · 1.5"],
          ["T1 TSE Cor-Obl", "Coronal Oblique", "500 / 10", "3.0mm/10% · 160–180", "2 · Off"]
        ]
      }}
    ],
    nguon: "Protocol MRI khớp ngoại vi (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-khop-goi",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chi & các khớp",
    ten: "MRI khớp gối",
    tuKhoa: ["khop goi", "knee", "acl", "day chang cheo truoc", "pcl", "sun chem", "meniscus", "sun khop", "dess", "medic"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Knee Dedicated Coil" },
      { ten: "Tư thế", giaTri: "Nằm ngửa, chân vào trước, gấp nhẹ gối 5–10° để làm căng dây chằng chéo trước (ACL)" },
      { ten: "Hướng mặt cắt", giaTri: "Sag-Obl (song song ACL) · Coronal (song song đường nối 2 lồi cầu đùi) · Axial (mặt khớp bánh chè – đùi)" },
      { ten: "FOV", giaTri: "150–160 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định & bệnh lý thường gặp", items: [
        "Đứt dây chằng chéo trước / sau (ACL / PCL).",
        "Rách sụn chêm (meniscus); tổn thương sụn khớp."
      ]},
      { tieuDe: "Chuỗi xung & tiêm thuốc", items: [
        "PD FS 3 mặt phẳng (chuẩn vàng), T1 TSE Coronal, 3D DESS / MEDIC đánh giá bản đồ sụn khớp.",
        "KHÔNG tiêm cho chấn thương thể thao thường quy; IV Gd khi nghi u / viêm / nhiễm trùng sau mổ tái tạo dây chằng."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE"],
        rows: [
          ["PD FS Sag-Obl", "Sagittal Oblique", "2800 / 30", "3.0mm/10% · 150–160", "2 · 1.5"],
          ["PD FS Coronal", "Coronal", "2800 / 30", "3.0mm/10% · 150–160", "2 · 1.5"]
        ]
      }}
    ],
    nguon: "Protocol MRI khớp ngoại vi (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-khop-hang",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chi & các khớp",
    ten: "MRI khớp háng",
    tuKhoa: ["khop hang", "hip", "avn", "hoai tu vo mach", "chom xuong dui", "gay co xuong dui", "fai", "va cham hang o coi", "sun vien o coi"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Body/Pelvic Array (tầm soát 2 bên) + Surface Coil (khu trú 1 bên)" },
      { ten: "Protocol 2 bước", giaTri: "Tầm soát 2 bên (Coronal STIR/T1, FOV 360–400 mm) + Khu trú 1 bên (Sag/Cor/Ax Oblique, FOV 180–200 mm, song song cổ đùi)" },
      { ten: "FOV", giaTri: "2 bên 360–400 mm · 1 bên 180–200 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định & bệnh lý thường gặp", items: [
        "Hoại tử vô mạch chỏm xương đùi (AVN) — nhạy nhất.",
        "Gãy cổ xương đùi kín; hội chứng va chạm háng – ổ cối (FAI); rách sụn viền ổ cối."
      ]},
      { tieuDe: "Chuỗi xung & tiêm thuốc", items: [
        "Tầm soát 2 bên Coronal STIR/T1; khu trú 1 bên PD FS / T1 Oblique song song cổ đùi.",
        "Direct MR Arthrography (CTM) khi nghi rách sụn viền ổ cối (FAI) trên phim thường."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE / TI (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE"],
        rows: [
          ["Coronal STIR (2 bên)", "Coronal", "3800 / 60 / 150", "4.0mm/10% · 360–400", "2 · 1.8"],
          ["PD FS Ax-Obl (1 bên)", "Axial Oblique", "2800 / 30 / –", "3.0mm/10% · 180–200", "2 · 1.5"]
        ]
      }}
    ],
    nguon: "Protocol MRI khớp ngoại vi (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-khop-khuyu",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chi & các khớp",
    ten: "MRI khớp khuỷu tay",
    tuKhoa: ["khop khuyu", "elbow", "tennis elbow", "golfer elbow", "viem loi cau", "gan nhi dau", "superman"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Elbow / Surface Coil" },
      { ten: "Tư thế", giaTri: "Nằm ngửa tay duỗi sát thân, hoặc nằm sấp giơ tay qua đầu (tư thế 'Superman')" },
      { ten: "Hướng mặt cắt", giaTri: "Cor-Obl (song song 2 lồi cầu cánh tay) · Ax-Obl · Sagittal" },
      { ten: "FOV", giaTri: "120–140 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định & bệnh lý thường gặp", items: [
        "Tennis elbow (viêm lồi cầu ngoài), Golfer's elbow (viêm lồi cầu trong).",
        "Đứt gân cơ nhị đầu đầu xa."
      ]},
      { tieuDe: "Chuỗi xung & tiêm thuốc", items: [
        "PD FS (chuẩn vàng), T1 TSE; 3D FFE khi cần đánh giá sụn.",
        "KHÔNG tiêm cho viêm gân / chấn thương thường quy; IV Gd khi nghi u / viêm / áp xe."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE"],
        rows: [
          ["PD FS Cor-Obl", "Coronal Oblique", "2500 / 30", "3.0mm/10% · 120–140", "2 · Off"]
        ]
      }}
    ],
    nguon: "Protocol MRI khớp ngoại vi (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-khop-co-tay",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chi & các khớp",
    ten: "MRI khớp cổ tay",
    tuKhoa: ["khop co tay", "wrist", "tfcc", "sun soi tam giac", "day chang thuyen nguyet", "hoai tu xuong thuyen", "kienbock", "xuong nguyet"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Wrist Dedicated Coil" },
      { ten: "Hướng mặt cắt", giaTri: "Coronal (song song mỏm trâm quay – mỏm trâm trụ) · Axial · Sagittal" },
      { ten: "FOV", giaTri: "100–120 mm, độ phân giải rất cao" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định & bệnh lý thường gặp", items: [
        "Phức hợp sụn sợi tam giác (TFCC); rách dây chằng thuyền – nguyệt.",
        "Hoại tử xương thuyền (AVN); bệnh Kienböck (hoại tử xương nguyệt)."
      ]},
      { tieuDe: "Chuỗi xung & tiêm thuốc", items: [
        "PD FS (chuẩn vàng), T1 TSE; 3D FFE đánh giá dây chằng & sụn.",
        "Direct MR Arthrography khi nghi rách TFCC / dây chằng nội tại; IV Gd khi nghi u / viêm."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE"],
        rows: [
          ["PD FS Coronal", "Coronal", "2500 / 30", "2.5mm/0% · 100–120", "2 · Off"]
        ]
      }}
    ],
    nguon: "Protocol MRI khớp ngoại vi (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-khop-co-chan",
    phanHe: "ct-mri", modality: "MRI", nhom: "Chi & các khớp",
    ten: "MRI khớp cổ chân",
    tuKhoa: ["khop co chan", "ankle", "gan achilles", "day chang sen mac", "got mac", "can ban chan", "vom sen", "olt"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Ankle / Foot Dedicated Coil" },
      { ten: "Tư thế", giaTri: "Cổ chân vuông góc 90° so với cẳng chân" },
      { ten: "Hướng mặt cắt", giaTri: "Sagittal · Ax-Obl · Cor-Obl" },
      { ten: "FOV", giaTri: "140–160 mm" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định & bệnh lý thường gặp", items: [
        "Rách / viêm gân Achilles; dây chằng sên – mác trước/sau, gót – mác.",
        "Viêm cân bàn chân; tổn thương sụn vòm sên (OLT)."
      ]},
      { tieuDe: "Chuỗi xung & tiêm thuốc", items: [
        "PD FS (chuẩn vàng), T1 TSE; STIR khi cổ chân lệch tâm Isocenter.",
        "KHÔNG tiêm cho chấn thương gân / dây chằng thường quy; IV Gd khi nghi u / viêm / áp xe."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "NSA · SENSE"],
        rows: [
          ["PD FS Sagittal", "Sagittal", "2600 / 30", "3.0mm/10% · 140–160", "2 · 1.5"]
        ]
      }}
    ],
    nguon: "Protocol MRI khớp ngoại vi (1.5T Philips) — Khoa CĐHA BVHVGL"
  },

  /* ============================================================ */
  /* MRI — VÚ (động học DCE BI-RADS · kiểm tra túi ngực silicone)              */
  /* Nguồn: Protocol MRI vú & bệnh lý (1.5T Philips) — Khoa CĐHA BVHVGL.       */
  /* ============================================================ */
  {
    id: "mri-vu-dong-hoc",
    phanHe: "ct-mri", modality: "MRI", nhom: "Vú",
    ten: "MRI động học tuyến vú (DCE-MRI, BI-RADS)",
    tuKhoa: ["vu", "tuyen vu", "breast", "dce-mri", "dce", "dynamic", "bi-rads", "birads", "duong cong dong hoc", "kinetic", "ung thu vu", "idc", "ilc", "dcis", "subtraction", "mip", "prone"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Breast Dedicated Phased-Array Coil (7–16 kênh) — không dùng coil bề mặt thường" },
      { ten: "Tư thế", giaTri: "Nằm sấp (prone), 2 bầu vú buông thõng tự do vào 2 hố thu của coil" },
      { ten: "Thời điểm vàng", giaTri: "Chưa mãn kinh: ngày 7–14 chu kỳ (pha nang noãn, BPE thấp); mãn kinh: bất kỳ; đang HRT: ngưng 4–6 tuần" },
      { ten: "DCE Dynamic", giaTri: "3D T1 FS GRE (mTHRIVE/e-THRIVE/VIBE) ≤1.5–2.0 mm; 1 Native + 5–6 thì, 60s/thì, tổng 6–7 phút" },
      { ten: "Tiêm thuốc", giaTri: "Gd 0.1 mmol/kg, 2.0 ml/s (bơm đôi), đuổi 20 ml NaCl; khởi chạy Dynamic đồng thời bơm thuốc" },
      { ten: "Máy", giaTri: "1.5T Philips (Achieva / Ingenia / Multiva)" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Phát hiện & chẩn đoán ung thư vú (độ nhạy > 95%); đánh giá giai đoạn trước mổ.",
        "Tầm soát nhóm nguy cơ cao; đánh giá tổn thương khó kết luận trên nhũ ảnh / siêu âm."
      ]},
      { tieuDe: "Thời điểm vàng & tư thế", items: [
        "Phụ nữ chưa mãn kinh: BẮT BUỘC chụp ngày 7–14 chu kỳ để triệt bắt thuốc nền nhu mô (BPE), tránh giả âm/dương tính.",
        "Mãn kinh: chụp bất kỳ; đang dùng liệu pháp hormone (HRT) nên ngưng 4–6 tuần trước chụp.",
        "Nằm sấp, 2 vú buông thõng vào hố thu; cố định nhẹ tránh ép dẹp mô vú."
      ]},
      { tieuDe: "Chuỗi xung hình thái không tiêm", items: [
        "Axial T2W Fat Sat / STIR: nang vú (sáng rực), phù nề nhu mô, hạch nách, tụ dịch quanh túi ngực.",
        "Axial T1W Non-Fat Sat: mỡ nhu mô, mỡ nội u, xuất huyết bán cấp (methemoglobin sáng T1), bao cơ ngực lớn.",
        "Axial DWI & ADC (b0, b800/1000): u ác (IDC) hạn chế khuếch tán mạnh — DWI sáng, ADC tối < 1.0 × 10⁻³ mm²/s."
      ]},
      { tieuDe: "Kỹ thuật DCE 3D & ảnh trừ", items: [
        "3D T1 FS Gradient Echo cắt mỏng đẳng hướng ≤ 1.5–2.0 mm; 1 thì Native + 5–6 thì sau tiêm (60s/thì).",
        "Ảnh trừ (subtraction) = sau tiêm trừ trước tiêm → loại tín hiệu mỡ/tuyến, chỉ bộc lộ vùng ngấm thuốc.",
        "Dựng hình MIP 3D xem toàn cảnh mạng mạch máu u vú."
      ]},
      { tieuDe: "Phân tích đường cong động học (Kinetic Curves)", bang: {
        cols: ["Đường cong", "Đặc điểm động học", "Tỷ lệ ác tính", "Gợi ý bệnh lý"],
        rows: [
          ["Type 1: Persistent (tăng dần)", "Ngấm thuốc tăng dần liên tục, không có thì thải", "< 6% (thường lành)", "U xơ tuyến vú (fibroadenoma), thay đổi sợi tuyến"],
          ["Type 2: Plateau (đi ngang)", "Ngấm nhanh thì sớm, đi ngang ổn định thì muộn", "64–70% (nghi ngờ)", "Tổn thương ranh giới, u diệp thể"],
          ["Type 3: Washout (thải nhanh)", "Ngấm cực nhanh thì sớm, thải nhanh thì muộn", "> 85% (rất cao)", "Ung thư vú (IDC, ILC), DCIS"]
        ]
      }},
      { tieuDe: "Phân loại tổn thương BI-RADS MRI", items: [
        "Bắt thuốc dạng khối (Mass): đánh giá hình dạng (tròn/bầu dục/không đều), đường bờ (rõ/không đều/tua gai) và kiểu ngấm nội u (đồng nhất/không đồng nhất/ngấm viền).",
        "Bắt thuốc không dạng khối (NME): phân bố dạng dải (segmental) / dạng ống (ductal) → nguy cơ ác tính cao (DCIS)."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "Ghi chú"],
        rows: [
          ["Axial T2W Fat Sat", "Axial", "4000 / 80", "4.0mm/10% · 320–340", "Nang, phù nề, hạch nách"],
          ["Axial T1W Non-FS", "Axial", "550 / 10", "4.0mm/10% · 320–340", "Mỡ tự nhiên, xuất huyết"],
          ["Axial DWI (b0/800–1000)", "Axial", "3200 / 70", "4.0mm/0% · 320–340", "ADC; ác tính ADC tối < 1.0"],
          ["DCE 3D mTHRIVE", "Axial 3D", "4.5 / 2.2", "1.5mm/0% · 320–350", "1 Native + 5–6 thì (+C), 60s/thì"],
          ["Post-Contrast T1 FS", "Coronal", "550 / 10", "3.0mm/10% · 320–340", "BẮT BUỘC xóa mỡ, đánh giá hạch nách"]
        ]
      }},
      { tieuDe: "Cảnh báo", items: [
        "Chỉ tiêm Gadolinium khi eGFR > 30 mL/phút/1.73m²; kiểm tra chống chỉ định MRI trước khi chụp."
      ]}
    ],
    nguon: "Protocol MRI vú & bệnh lý (1.5T Philips) — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-vu-tui-nguc",
    phanHe: "ct-mri", modality: "MRI", nhom: "Vú",
    ten: "MRI vú kiểm tra túi ngực (silicone)",
    tuKhoa: ["tui nguc", "implant", "silicone", "vo tui nguc", "linguine sign", "keyhole", "teardrop", "bao xo", "bia-alcl", "silicone-only", "water-only", "granuloma", "prone"],
    thongSo: [
      { ten: "Cuộn thu (Coil)", giaTri: "Breast Dedicated Phased-Array Coil" },
      { ten: "Tư thế", giaTri: "Nằm sấp (prone), 2 vú buông thõng vào hố thu" },
      { ten: "Chuỗi xung chuyên biệt", giaTri: "Silicone-only T2W (xóa nước & mỡ) · Water-only T2W (xóa silicone) · Axial T2W FSE Non-FS" },
      { ten: "Tiêm thuốc", giaTri: "KHÔNG cần tiêm cho kiểm tra túi ngực đơn thuần" },
      { ten: "Máy", giaTri: "1.5T Philips" }
    ],
    noiDung: [
      { tieuDe: "Chỉ định", items: [
        "Đánh giá tính toàn vẹn túi ngực silicone: vỡ trong bao, vỡ ngoài bao, bao xơ co thắt.",
        "MRI là phương pháp chính xác nhất cho túi ngực silicone."
      ]},
      { tieuDe: "Chuỗi xung chuyên biệt (silicone-selective)", items: [
        "Silicone-only T2W (xóa nước & mỡ): chỉ giữ tín hiệu silicone (sáng rực trên nền đen) — nhạy nhất phát hiện gel rò ra ngoài vỏ túi.",
        "Water-only / Silicone-suppressed T2W: xóa silicone, giữ nước & nhu mô — phát hiện tụ dịch quanh túi, áp xe, u vú đi kèm.",
        "Axial T2W FSE Non-Fat Sat: khảo sát vỏ bao, phân biệt nếp gấp sinh lý (radial folds) với dải vỡ vỏ túi."
      ]},
      { tieuDe: "Dấu hiệu vỡ túi ngực trên MRI", items: [
        "Vỡ trong bao (intracapsular): vỏ túi rách nhưng gel còn trong bao xơ — Dấu hiệu mì Ý (Linguine sign: vỏ túi gập cuộn trôi bồng bềnh trong gel); Dấu hiệu lỗ khóa / giọt nước (Keyhole / Teardrop sign).",
        "Vỡ ngoài bao (extracapsular): vỏ túi & bao xơ đều rách, gel thoát ra nhu mô / hạch nách / cơ ngực lớn tạo u hạt silicone (silicone granuloma)."
      ]},
      { tieuDe: "Quy định tiêm thuốc (+C)", items: [
        "Kiểm tra túi ngực đơn thuần: KHÔNG CẦN TIÊM.",
        "Chỉ tiêm khi: nghi u vú đi kèm, bao xơ co thắt viêm nghi nhiễm trùng, hoặc đánh giá u lympho liên quan túi ngực (BIA-ALCL)."
      ]},
      { tieuDe: "Thông số vận hành 1.5T Philips", bang: {
        cols: ["Chuỗi xung", "Mặt cắt", "TR / TE (ms)", "Slice thickness/Gap · FOV (mm)", "Ghi chú"],
        rows: [
          ["Silicone-only T2W", "Axial", "4500 / 100", "4.0mm/0% · 320–340", "Xóa nước & mỡ, chỉ silicone sáng"],
          ["Water-only T2W", "Axial", "4000 / 90", "4.0mm/0% · 320–340", "Xóa silicone, bộc lộ dịch & mô vú"],
          ["Axial T2W FSE Non-FS", "Axial", "4000 / 80", "4.0mm/10% · 320–340", "Vỏ bao: nếp gấp sinh lý vs dải vỡ"]
        ]
      }}
    ],
    nguon: "Protocol MRI vú & bệnh lý (1.5T Philips) — Khoa CĐHA BVHVGL"
  },

  /* ============================================================ */
  /* MRI — AN TOÀN CỘNG HƯỞNG TỪ (MRI SAFETY, chuẩn ACR)                       */
  /* Nguồn: Tổng hợp an toàn MRI theo ACR — Khoa CĐHA BVHVGL.                  */
  /* ============================================================ */
  {
    id: "mri-at-nang-luong",
    phanHe: "ct-mri", modality: "MRI", nhom: "An toàn MRI",
    ten: "An toàn MRI — 3 nguồn năng lượng & 4 vùng ACR",
    tuKhoa: ["an toan mri", "mri safety", "b0", "tu truong tinh", "gradient", "rf", "sar", "pns", "tieng on", "missile effect", "dan ban", "acr zone", "4 vung", "zone iv", "quench"],
    thongSo: [
      { ten: "Nguyên tắc", giaTri: "MRI KHÔNG gây nhiễm xạ, nhưng có 3 năng lượng vật lý nguy cơ: B0 · Gradient (dB/dt) · RF (B1)" },
      { ten: "Chuẩn áp dụng", giaTri: "ACR (American College of Radiology)" }
    ],
    noiDung: [
      { tieuDe: "Tổng quan", items: [
        "Khác X-quang/CT, MRI không dùng bức xạ ion hóa — không gây nhiễm xạ.",
        "Môi trường MRI chứa 3 dạng năng lượng có thể gây hiệu ứng sinh học nghiêm trọng: từ trường tĩnh (B0), gradient từ trường, trường điện từ vô tuyến (RF)."
      ]},
      { tieuDe: "Ba nguồn năng lượng vật lý & nguy cơ", bang: {
        cols: ["Tác nhân", "Cơ chế / hiện tượng", "Nguy cơ y khoa", "Phòng ngừa & giới hạn"],
        rows: [
          ["Từ trường tĩnh B0 (1.0–3.0T)", "Tồn tại liên tục 24/7; lực hút vật sắt từ", "Hiệu ứng đạn bắn (xe lăn, bình oxy, kéo → đạn); momen xoắn dịch chuyển cấy ghép (clip phình mạch, van tim)", "Kiểm soát tuyệt đối kim loại vào Zone IV; nam châm thử cầm tay > 1000 Gauss; sàng lọc tiền sử cấy ghép"],
          ["Gradient từ trường (dB/dt)", "Bật/tắt liên tục cuộn chênh từ (lực Lorentz)", "Tiếng ồn > 120 dB; kích thích thần kinh ngoại vi (PNS, châm chích/co cơ); chớp sáng (phosphenes)", "BẮT BUỘC tai nghe/nút tai giảm > 30 dB; giới hạn slew rate an toàn; khuyên không đan tay/chân"],
          ["Trường vô tuyến RF (B1)", "Xung RF gây cộng hưởng & tích nhiệt mô", "SAR (W/kg) tăng nhiệt cơ thể (nhất là mắt & tinh hoàn); BỎNG NHIỆT do vòng lặp dòng điện", "Giới hạn SAR < 0.4 W/kg (toàn thân) hoặc < 4.0 W/kg (cục bộ); tránh vòng lặp; đệm cách ly da–da & da–máy"]
        ]
      }},
      { tieuDe: "Bốn khu vực an toàn (ACR 4-Zone Model)", bang: {
        cols: ["Phân vùng", "Định nghĩa & vị trí", "Đối tượng truy cập", "Kiểm soát an toàn"],
        rows: [
          ["Zone I (tự do)", "Ngoài phòng khám, hành lang chung, lối đi công cộng", "Mọi người", "Không hạn chế an toàn từ trường"],
          ["Zone II (chuẩn bị)", "Tiếp đón, thay đồ, hỏi bệnh, khai sàng lọc", "BN & người nhà dưới giám sát nhân sự MR", "Bảng câu hỏi sàng lọc, thay trang phục, tháo kim loại"],
          ["Zone III (hạn chế)", "Phòng điều khiển, hành lang vào phòng máy", "CHỈ nhân viên MR (cấp 1&2) + BN đã sàng lọc", "Khóa cửa tự động, biển cảnh báo, cổng từ / nam châm cầm tay"],
          ["Zone IV (phòng nam châm)", "Nơi đặt khối nam châm (nằm trong Zone III)", "CHỈ nhân viên MR cấp 2 + BN đã kiểm tra an toàn", "Biển nguy hiểm, cảm biến oxy (Quench), hệ thống xả Heli khẩn cấp"]
        ]
      }}
    ],
    nguon: "An toàn MRI theo chuẩn ACR — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-at-chong-chi-dinh",
    phanHe: "ct-mri", modality: "MRI", nhom: "An toàn MRI",
    ten: "An toàn MRI — chống chỉ định & sàng lọc cấy ghép",
    tuKhoa: ["chong chi dinh", "cay ghep", "pacemaker", "may tao nhip", "icd", "oc tai", "clip phinh mach", "di vat noi nhan", "mr conditional", "mr safe", "stent", "van tim", "sang loc"],
    thongSo: [
      { ten: "Nguyên tắc", giaTri: "Phân 3 mức: Chống chỉ định tuyệt đối · MR Conditional (cần điều kiện) · MR Safe" }
    ],
    noiDung: [
      { tieuDe: "Phân loại chống chỉ định & sàng lọc cấy ghép", bang: {
        cols: ["Phân loại", "Thiết bị / vật thể cấy ghép", "Hướng dẫn xử lý & điều kiện"],
        rows: [
          ["Chống chỉ định TUYỆT ĐỐI", "Máy tạo nhịp tim không tương thích MRI; máy khử rung ICD; ốc tai điện tử; clip phình ĐM sắt từ; dị vật kim loại nội nhãn; bơm truyền tĩnh mạch cấy ghép", "HOÀN TOÀN KHÔNG cho vào Zone IV. Nguy cơ: xoắn vặn rách mạch, hỏng/tái lập trình mạch điện tử, dịch chuyển dị vật nội nhãn gây đứt TK thị / mù"],
          ["Tương đối — MR Conditional", "Clip phình ĐM Titanium; stent, van tim nhân tạo (sau 6 tuần); khớp giả / nẹp đinh phi sắt từ; mảnh kim loại xa cơ quan quan trọng; máy tạo nhịp 'MR Conditional'", "BẮT BUỘC hồ sơ rõ: xác minh nhãn/model MR Conditional; chụp XQ/CT kiểm tra dị vật nhãn cầu trước; đánh giá lợi ích/rủi ro + đồng ý văn bản"],
          ["MR Safe (an toàn tuyệt đối)", "Cấy ghép phi kim loại hoàn toàn (nhựa, gốm, thủy tinh, Titanium phi sắt từ)", "Chụp MRI an toàn ở mọi cường độ từ trường, không cần điều kiện hạn chế"]
        ]
      }},
      { tieuDe: "Lưu ý", items: [
        "Dị vật kim loại nội nhãn: BẮT BUỘC chụp X-quang / CT kiểm tra trước khi đưa vào phòng máy.",
        "Thiết bị MR Conditional chỉ an toàn trong đúng điều kiện nhà sản xuất công bố (cường độ từ trường, giới hạn SAR, slew rate)."
      ]}
    ],
    nguon: "An toàn MRI theo chuẩn ACR — Khoa CĐHA BVHVGL"
  },
  {
    id: "mri-at-bong-nhiet",
    phanHe: "ct-mri", modality: "MRI", nhom: "An toàn MRI",
    ten: "An toàn MRI — bỏng nhiệt RF, đối tượng đặc biệt & sự cố khẩn cấp",
    tuKhoa: ["bong nhiet", "rf burn", "vong lap", "closed loop", "mang thai", "cho con bu", "gadolinium", "quench", "xa heli", "checklist", "call button", "mieng dan kim loai"],
    thongSo: [
      { ten: "Sự cố hay gặp nhất", giaTri: "Bỏng nhiệt RF — do dây nối/cơ thể tạo vòng kín (closed loop)" }
    ],
    noiDung: [
      { tieuDe: "Cảnh báo — bỏng nhiệt RF", items: [
        "Bỏng nhiệt là sự cố tổn thương phổ biến nhất trong phòng MRI.",
        "Nguyên nhân: dòng điện cảm ứng khi dây thiết bị (SpO2, ECG, cuộn thu) hoặc phần cơ thể bệnh nhân tạo thành VÒNG KÍN — năng lượng RF tập trung tại điểm tiếp xúc gây tăng nhiệt đột ngột."
      ]},
      { tieuDe: "Quy tắc phòng ngừa bỏng nhiệt (bắt buộc)", items: [
        "KHÔNG để dây cáp cuộn thu, SpO2, ECG tạo vòng lặp; giữ dây chạy thẳng dọc trục máy.",
        "Đệm cách ly ≥ 0.5–1.0 cm giữa dây dẫn & da, và giữa da bệnh nhân với thành trong lỗ máy (gantry).",
        "Chống tiếp xúc da–da: đệm xốp giữa 2 đùi, 2 gối, 2 cẳng tay; không để bệnh nhân chắp tay / khoanh chân.",
        "Tháo bỏ miếng dán thuốc có màng kim loại (Nicotine, Nitroglycerin) — có thể gây bỏng độ 3.",
        "Trao bóng bóp báo động (call button); dặn bệnh nhân bóp ngay khi nóng rát bất thường."
      ]},
      { tieuDe: "Đối tượng đặc biệt & sự cố khẩn cấp", bang: {
        cols: ["Đối tượng / tình huống", "Khuyến cáo (ACR)", "Xử lý lâm sàng"],
        rows: [
          ["BN mang thai", "An toàn ở bất kỳ giai đoạn thai kỳ nếu có chỉ định lâm sàng rõ", "Đánh giá lợi ích/rủi ro + đồng ý văn bản; HẠN CHẾ TỐI ĐA tiêm Gadolinium (qua nhau thai & nước ối)"],
          ["Nhân viên MR mang thai", "Được tiếp tục làm việc trong môi trường MRI", "Tuyệt đối KHÔNG ở trong Zone IV khi máy đang phát xung"],
          ["Phụ nữ cho con bú", "Gadolinium bài tiết lượng rất nhỏ vào sữa", "Vắt bỏ sữa, không cho trẻ bú trong 36–48 giờ sau tiêm thuốc"],
          ["Cấp cứu & Quench (xả Heli)", "Cấp cứu y khoa hoặc Quench (bay hơi Heli lỏng → mất từ trường)", "Đưa BN RA KHỎI Zone IV (về Zone II/III) trước khi hồi sức; Quench: bật quạt thông gió khẩn, di tản ngay (ngạt & tăng áp chặn cửa)"]
        ]
      }},
      { tieuDe: "Checklist an toàn 5 bước trước ca chụp", items: [
        "1. Hoàn thành phiếu sàng lọc kim loại & cấy ghép cho bệnh nhân và người nhà đi cùng.",
        "2. Thay trang phục chuyên dụng; tháo trang sức, đồng hồ, máy nhắn tin, miếng dán thuốc.",
        "3. Kiểm tra tai nghe / nút tai chống ồn; trao bóng bóp báo động khẩn cấp.",
        "4. Kiểm tra tư thế: đệm cách ly da–da (đùi, tay) & da–thành máy; xếp dây cáp chạy thẳng không vòng lặp.",
        "5. Xác nhận thiết bị theo dõi sinh hiệu (SpO2, ECG) đạt chuẩn MR Conditional trước khi phát xung."
      ]}
    ],
    nguon: "An toàn MRI theo chuẩn ACR — Khoa CĐHA BVHVGL"
  },

  /* ============================================================ */
  /* MRI — THÔNG SỐ MRI (bảng tổng hợp ngưỡng 1.5T Philips)                    */
  /* Nguồn: bang_thong_so_mri_15t_philips + Từ điển MRI (Thông số).           */
  /* ============================================================ */
  {
    id: "mri-thong-so-15t",
    phanHe: "ct-mri", modality: "MRI", nhom: "Thông số MRI",
    ten: "Thông số MRI 1.5T Philips (TR/TE/TI, hình thái & tối ưu hóa)",
    tuKhoa: ["thong so", "parameters", "tr", "te", "ti", "flip angle", "slice", "gap", "fov", "matrix", "nsa", "nex", "snr", "scan time", "trade-off", "toi uu", "sense", "clear", "1.5t philips"],
    thongSo: [
      { ten: "Trọng số tương phản", giaTri: "TR & TE quyết định trực tiếp T1W / T2W / PDW" },
      { ten: "TI (Inversion Time)", giaTri: "STIR ~150 ms (xóa mỡ) · FLAIR ~2000 ms (xóa CSF) ở 1.5T" },
      { ten: "Scan Time (2D)", giaTri: "TA = TR × Phase Matrix × NSA" },
      { ten: "Tăng tốc", giaTri: "SENSE / CLEAR hệ số 1.5–2.0" },
      { ten: "Máy", giaTri: "1.5T Philips (Achieva / Ingenia / Multiva)" }
    ],
    noiDung: [
      { tieuDe: "Ngưỡng pulse sequence cơ bản (TR / TE / TI / Flip Angle)", bang: {
        cols: ["Thông số", "Chuỗi xung", "Ngắn", "Trung bình", "Dài", "Ý nghĩa tương phản"],
        rows: [
          ["TR", "SE / FSE", "300–800 ms (thường 400–600)", "800–1500 ms", "> 2000 ms (FSE 3000–4000)", "TR ngắn → T1W; TR dài → triệt T1, mở T2W/PDW"],
          ["TR", "GRE / FFE", "< 50 ms", "50–100 ms", "> 100–200 ms", "TR siêu ngắn + góc lật nhỏ → 3D/Dynamic nhanh"],
          ["TE", "SE / FSE", "5–30 ms (thường 10–20)", "30–60 ms", "> 60–120 ms (thường 80–110)", "TE ngắn → T1W/PDW; TE dài → T2W (dịch/tổn thương sáng)"],
          ["TE", "GRE / FFE", "1–5 ms", "5–10 ms", "> 10–15 ms", "TE dài GRE nhạy T2*: tìm máu, vôi hóa"],
          ["TI", "Inversion Recovery", "100–175 ms (STIR ~150)", "300–1200 ms (MPRAGE)", "1700–2500 ms (FLAIR ~2000)", "TI ngắn (STIR) xóa mỡ; TI dài (FLAIR) xóa CSF"],
          ["Flip Angle (α)", "Mọi chuỗi xung", "10°–30° (nhỏ)", "30°–60°", "90° (SE) / 180° (đảo)", "α < 30° duy trì từ hóa dọc, cho TR siêu ngắn GRE/FFE"]
        ]
      }},
      { tieuDe: "Ngưỡng hình thái & thu nhận (Slice / Gap / FOV / Matrix / NSA)", bang: {
        cols: ["Thông số", "Nhỏ / mỏng", "Trung bình", "Lớn / dày", "Ảnh hưởng SNR · phân giải · thời gian"],
        rows: [
          ["Slice Thickness", "< 1 mm (3D) / 2–3 mm (2D mỏng)", "4–6 mm (tiêu chuẩn)", "8–10 mm (toàn cảnh)", "Dày → voxel lớn, SNR cao nhưng partial volume; mỏng → chi tiết cao, SNR giảm"],
          ["Gap / Dist Factor", "0% (3D / interleaved)", "10% (chuẩn)", "20–50% (diện rộng)", "Gap nhỏ tránh bỏ sót; 10% triệt crosstalk"],
          ["FOV", "< 18 cm", "18–30 cm", "> 30–45 cm", "Lớn → SNR cao, vùng rộng; nhỏ → phân giải cao (cổ tay, tuyến yên, hốc mắt)"],
          ["Matrix", "128×128 / 256×128 (thô)", "256×256 / 512×256 (chuẩn)", "512×512 (mịn)", "Mịn → phân giải cao nhưng SNR giảm, scan time tăng"],
          ["NSA / NEX", "1 (nhanh)", "2–3 (cân bằng)", "≥ 4 (SNR tối đa)", "SNR tăng theo √NSA, triệt cử động, nhưng thời gian gấp đôi"]
        ]
      }},
      { tieuDe: "Bảng cài đặt vận hành chuẩn 1.5T Philips", bang: {
        cols: ["Chuỗi xung (Philips)", "TR / TE / TI (ms)", "Flip · Slice · Gap · FOV · NSA", "Ứng dụng lâm sàng"],
        rows: [
          ["T1W TSE (2D)", "450–650 / 10–15 / –", "90° · 3.0–5.0mm · 10% · 180–240 · NSA 2", "Giải phẫu não, tủy xương, cột sống, cơ xương khớp"],
          ["T2W TSE (2D)", "3000–4000 / 80–110 / –", "90° · 3.0–5.0mm · 10% · 180–240 · NSA 2", "Bộc lộ tổn thương, DNT sáng, phù nề mô"],
          ["PDW TSE (2D)", "1500–2500 / 15–30 / –", "90° · 3.0mm · 10% · 150–180 · NSA 2", "Sụn chêm, sụn khớp gối/vai, dây chằng"],
          ["T2W FLAIR", "8000–9000 / 100–120 / 2000–2200", "90° · 4.0–5.0mm · 10% · 220–240 · NSA 2", "Xóa CSF, phát hiện tổn thương nhu mô não"],
          ["STIR (T2 Fat Sat)", "3500–4000 / 60–70 / 150–165", "90° · 3.0–4.0mm · 10% · 160–380 · NSA 2", "Xóa mỡ diện rộng, phù tủy xương & viêm nhiễm"],
          ["T2* mFFE (GRE)", "600–800 / 15–22 / –", "18°–25° · 3.0–4.0mm · 10% · 200–240 · NSA 2", "Nhạy từ: xuất huyết, vôi hóa, gai xương"],
          ["3D e-THRIVE (T1 FS)", "4.0–5.0 / 1.8–2.3 / –", "10°–12° · 1.5–2.0mm · 0% · 240–380 · NSA 1", "Động học gan, vú, chậu sau tiêm cản quang"],
          ["3D DRIVE / bTFE", "4.0–6.0 / 2.0–3.0 / –", "45°–60° · 0.6–1.0mm · 0% · 150–180 · NSA 2", "Dây TK sọ V/VII/VIII, cây đường mật"]
        ]
      }},
      { tieuDe: "Nguyên tắc đánh đổi & tối ưu hóa hình ảnh", items: [
        "Thời gian quét (2D): TA = TR × Phase Matrix × NSA.",
        "Tăng SNR (ảnh mịn, bớt hạt): tăng TR, giảm TE; tăng FOV hoặc slice; tăng NSA; giảm ma trận (dùng ma trận thô).",
        "Tăng độ phân giải không gian (thấy rõ chi tiết nhỏ): giảm FOV; giảm slice (cắt mỏng / 3D); tăng ma trận (512×512).",
        "Rút ngắn scan time (giảm cử động): giảm TR; giảm bước mã hóa pha; NSA = 1; dùng SENSE / CLEAR hệ số 1.5–2.0."
      ]}
    ],
    nguon: "Bảng tổng hợp thông số MRI 1.5T Philips — Khoa CĐHA BVHVGL"
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

];
