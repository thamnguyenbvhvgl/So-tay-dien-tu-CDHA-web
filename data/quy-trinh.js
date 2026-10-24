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
        "Bộc lộ gãy mỏm gai các đốt sống cổ dưới (gãy người xúc đất sét), gãy lún xẹp đốt sống và thoát vị nhân tủy đĩa đệm."
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
      { src: "images/xq/xq-cotsong-co-chech-phim.png", caption: "Phim đạt yêu cầu (trơn + chú thích)" }
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
      { src: "images/xq/xq-cotsong-nguc-thang-phim.png", caption: "Phim đạt yêu cầu (trơn + chú thích)" }
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
      { src: "images/xq/xq-cotsong-nguc-nghieng-phim.png", caption: "Phim đạt yêu cầu (trơn + chú thích)" }
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
      { src: "images/xq/xq-cotsong-tl-nghieng-phim.png", caption: "Phim đạt yêu cầu (trơn + chú thích)" }
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
      { src: "images/xq/xq-xuonguc-chech-phim.png", caption: "Phim đạt yêu cầu (trơn + chú thích)" }
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
      { src: "images/xq/xq-xuonguc-nghieng-phim.png", caption: "Phim đạt yêu cầu (trơn + chú thích)" }
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
    id: "xq-so-thang",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang sọ thẳng",
    tuKhoa: ["so thang", "towne", "ap axial", "chau dau", "lo cham", "moc giai phau so"],
    thongSo: [
      { ten: "Tư thế", giaTri: "Trước sau (Towne — AP chếch chân)" },
      { ten: "kV / mAs", giaTri: "92–94 kVp · 10–15 mAs" },
      { ten: "Khoảng cách bóng – phim", giaTri: "1 m" },
      { ten: "Lưới lọc", giaTri: "Có" }
    ],
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
      ]},
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
      { src: "images/xq/xq-so-moc1.png", caption: "Mốc giải phẫu — nhìn nghiêng" },
      { src: "images/xq/xq-so-moc2.png", caption: "Mốc giải phẫu — nhìn thẳng" },
      { src: "images/xq/xq-so-moc3.png", caption: "Đường định vị hộp sọ" },
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
    tuKhoa: ["ban tay", "hand pa", "xuong ban tay", "chi tren"],
    thongSo: [
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
      { src: "images/xq/xq-dui-truocsau-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-dui-truocsau-phim.jpg", caption: "Phim đạt yêu cầu (đầu trên)" },
      { src: "images/xq/xq-dui-truocsau-phim2.png", caption: "Phim đạt yêu cầu (đầu dưới)" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-dui-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang xương đùi nghiêng",
    tuKhoa: ["dui nghieng", "femur lateral"],
    thongSo: [
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
      { src: "images/xq/xq-dui-nghieng-ct.jpg", caption: "Chiều thế & hướng tia" },
      { src: "images/xq/xq-dui-nghieng-phim.jpg", caption: "Phim đạt yêu cầu (đầu trên)" },
      { src: "images/xq/xq-dui-nghieng-phim2.png", caption: "Phim đạt yêu cầu (đầu dưới)" }
    ],
    nguon: "Kỹ thuật X quang thông thường – Tập 1 (Bộ môn Kỹ thuật hình ảnh, Khoa ĐD–KTYH)"
  },

  {
    id: "xq-khungchau-truocsau",
    phanHe: "xquang", modality: "X-quang", nhom: "Chi dưới",
    ten: "Chụp X-quang khung chậu thẳng (trước sau)",
    tuKhoa: ["khung chau", "xuong chau", "pelvis ap", "chau"],
    thongSo: [
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

  {
    id: "xq-schuller",
    phanHe: "xquang", modality: "X-quang", nhom: "Sọ - Mặt",
    ten: "Chụp X-quang tai tư thế Schüller (xương chũm)",
    tuKhoa: ["schuller", "schüller", "xuong chum", "tai", "mastoid", "viem tai giua"],
    thongSo: [
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
    ten: "Chụp X-quang bụng không chuẩn bị tư thế trước sau, bệnh nhân đứng",
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
    id: "xq-o-bung-nghieng",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang ổ bụng không chuẩn bị (nghiêng)",
    tuKhoa: ["o bung nghieng","bung the nghieng","voi hoa o bung","khoi mo o bung"],
    thongSo: [
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
    ten: "Chụp X-quang bụng tư thế nằm nghiêng, tia ngang trước sau (decubitus)",
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

  /* ---- Kỹ thuật XQ bổ sung theo tài liệu lỗi (chờ duyệt thông số) ---- */


  {
    id: "xq-he-tiet-nieu",
    phanHe: "xquang", modality: "X-quang", nhom: "Lồng ngực - Bụng",
    ten: "Chụp X-quang bụng không chuẩn bị tư thế trước sau, bệnh nhân nằm ngửa (hệ tiết niệu – KUB)",
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
  {
    id: "ct-so-nao-khong-tiem",
    phanHe: "ct-mri",
    modality: "CT",
    nhom: "Sọ + mặt",
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
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
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
    id: "ct-mach-mau-nao",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
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
    id: "ct-ham-mat-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
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
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
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
    id: "ct-tai-xuong-da-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Sọ + mặt",
    ten: "Chụp CLVT tai – xương đá",
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
    id: "ct-long-nguc-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
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
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
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
    id: "ct-dm-chu-nguc",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
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
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
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
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
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
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT tầng trên ổ bụng – tiểu khung thường quy",
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
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
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
    id: "ct-he-tiet-nieu-thuong-quy",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
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
    id: "ct-gan-duong-mat",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT gan có tiêm thuốc (3 pha)",
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
    id: "ct-ruot-non-khong-ong",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT ruột có tiêm thuốc",
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
    id: "ct-khop-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp & chi",
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
    id: "ct-xuong-chi-khong-tiem",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp & chi",
    ten: "Chụp CLVT chi trên – chi dưới thường quy",
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
    id: "ct-dm-chu-chau",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
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
    id: "ct-chan-thuong-bung",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT chấn thương bụng có tiêm thuốc",
    tuKhoa: ["chan thuong bung", "trauma bung", "vo tang dac", "chay mau o bung"],
    thongSo: [
      { ten: "Thông số", giaTri: "Chờ Trưởng khoa duyệt" }
    ],
    noiDung: [
      { tieuDe: "Ghi chú", items: [ "Mục con của CLVT bụng – tiểu khung (có tiêm). Nội dung kỹ thuật sẽ bổ sung sau khi duyệt." ]}
    ],
    nguon: "QUY TRÌNH CLVT KHOA CDHA BVHVGL.docx"
  },

  {
    id: "ct-mach-chi-tren",
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp & chi",
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
    phanHe: "ct-mri", modality: "CT", nhom: "Cơ xương khớp & chi",
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
    ten: "Chụp CLVT tầm soát toàn thân có tiêm thuốc cản quang",
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
    ten: "Chụp CLVT toàn thân đa chấn thương (không tiêm thuốc)",
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
  {
    id: "ct-ref-ctpa",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
    ten: "Chụp CLVT động mạch phổi (CTPA)",
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

  /* ---- Sọ não - Thần kinh ---- */

  /* ---- Ổ bụng - Tiểu khung ---- */
  {
    id: "ct-ref-bung-3-pha",
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT tụy có tiêm thuốc",
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
    phanHe: "ct-mri", modality: "CT", nhom: "Bụng - chậu",
    ten: "Chụp CLVT hệ niệu (CTU)",
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

  /* ---- Lồng ngực ---- */
  {
    id: "ct-ref-ldct-phoi",
    phanHe: "ct-mri", modality: "CT", nhom: "Ngực",
    ten: "Chụp CLVT phổi liều thấp tầm soát (LDCT)",
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
    ten: "Chụp CLVT toàn thân có tiêm thuốc (đa chấn thương)",
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
