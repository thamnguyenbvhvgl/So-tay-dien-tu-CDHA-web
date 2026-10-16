/* ============================================================================
   DỮ LIỆU 3 CÔNG CỤ KHẨN CẤP  —  SỔ TAY ĐIỆN TỬ CĐHA
   ----------------------------------------------------------------------------
   ⚠️ CẢNH BÁO AN TOÀN NGƯỜI BỆNH
   Các con số y khoa (liều thuốc, ml/kg, ngưỡng eGFR, liều adrenalin...) BẮT
   BUỘC lấy từ nguồn chính thức của khoa và được Trưởng khoa duyệt trước khi
   dùng trên người bệnh. Phần nào còn là SỐ MẪU đều được đánh dấu "chuaDuyet".
   Việc điền số thật nằm ở GIAI ĐOẠN D của kế hoạch.
   ============================================================================ */

window.SOTAY_CONGCU = {

  /* -------------------------------------------------- 1) LIỀU CẢN QUANG --- */
  /* Liều ml/kg lấy từ QUY TRÌNH CLVT của khoa (thường 1,5–2 ml/kg; một số 1–1,5;
     gan 3 pha 2 ml/kg ~120 ml; tốc độ 3–5 ml/s). Ngưỡng eGFR là tham chiếu CHUNG.
     Nội dung đã được Trưởng khoa & KTV trưởng duyệt (16/10/2026). */
  lieuCanQuang: {
    chuaDuyet: false,                // liều ml/kg theo tài liệu khoa; eGFR là tham chiếu chung
    // Danh sách loại khảo sát → liều ml/kg (nguồn QUY TRÌNH CLVT khoa)
    loaiKhaoSat: [
      { ten: "Thường quy (đa số vùng)", mlKgMin: 1.5, mlKgMax: 2.0, tocDo: "3–5 ml/s" },
      { ten: "Liều thấp hơn (một số protocol)", mlKgMin: 1.0, mlKgMax: 1.5, tocDo: "2–3 ml/s" },
      { ten: "Gan 3 pha", mlKgMin: 2.0, mlKgMax: 2.0, tocDo: "4 ml/s (≈120 ml)" }
    ],
    congThucMacDinh: 1.5,            // ml/kg mặc định khi chưa chọn loại
    nongDo: [300, 320, 350, 370],    // mgI/ml — theo chai thuốc
    nongDoMacDinh: 350,
    nguongEGFR: {                    // THAM CHIẾU CHUNG (chưa phải số của khoa)
      canTrong: 45,                  // < mức này: cân nhắc / hội chẩn
      chongChiDinh: 30               // < mức này: thận trọng cao / theo quy trình khoa
    },
    luuY: [
      "Liều ml/kg theo QUY TRÌNH CLVT của khoa; ngưỡng eGFR là tham chiếu chung. Đã được Trưởng khoa duyệt (16/10/2026).",
      "Luôn xả nước muối sinh lý sau thuốc; đối chiếu tiền sử dị ứng & chức năng thận trước tiêm.",
      "Kết quả chỉ tham khảo — quyết định cuối theo bác sĩ."
    ]
  },

  /* ----------------------------- 1b) MÁY TÍNH LIỀU CCTA (ĐM VÀNH) -------- */
  /* Công thức WB-IDR theo "Từ điển CT – CT Coronary Smart Protocol v3.2"
     của khoa (doc.ktv3mien.com/ccta). Tính TỐC ĐỘ TIÊM và TỔNG THỂ TÍCH
     dựa trên cân nặng, hệ số thuốc (IDR), nồng độ i-ốt và thời gian tiêm. */
  lieuCCTA: {
    chuaDuyet: false,                  // công thức lấy từ tài liệu tham khảo của khoa
    nguon: "Từ điển CT – CT Coronary Smart Protocol v3.2 (khoa CĐHA, doc.ktv3mien.com/ccta).",
    canNang:   { min: 20,  max: 150, macDinh: 70 },   // kg
    idr:       { min: 0.010, max: 0.030, macDinh: 0.021 }, // gI/kg/s (WB-IDR)
    nongDo:    [300, 320, 350, 370],   // mgI/ml — chọn theo chai thuốc
    nongDoMacDinh: 350,
    thoiGian:  { min: 10, max: 15, macDinh: 13 },      // giây — thời gian tiêm
    // Bảng tham khảo kVp & IDR theo cân nặng / BMI (trang 3 tài liệu)
    bangThamChieu: [
      { can: "< 60 kg",   bmi: "< 22,5",   kvp: "70 – 80 kVp",  idr: "0,014 – 0,018" },
      { can: "60 – 75 kg", bmi: "22,5 – 25", kvp: "100 kVp",      idr: "0,022 – 0,025" },
      { can: "76 – 90 kg", bmi: "25 – 30",   kvp: "100 – 120 kVp", idr: "0,025 – 0,028" },
      { can: "> 90 kg",   bmi: "> 30",     kvp: "120 kVp",      idr: "0,028 – 0,030" }
    ],
    luuY: [
      "Công thức: Tốc độ tiêm (ml/s) = (Cân nặng × IDR) ÷ (Nồng độ ÷ 1000).",
      "Tổng thể tích (ml) = Tốc độ tiêm × Thời gian tiêm.",
      "Luôn xả nước muối sinh lý (saline chaser) sau thuốc theo protocol máy.",
      "Đối chiếu tiền sử dị ứng và chức năng thận (eGFR) trước tiêm; kết quả chỉ mang tính tham khảo, quyết định cuối theo bác sĩ."
    ]
  },

  /* ------------------------------------------------ 2) PHÁC ĐỒ PHẢN VỆ --- */
  /* Bản đồ quy trình theo Sơ đồ chẩn đoán & xử trí phản vệ — Thông tư
     51/2017/TT-BYT (29/12/2017, Bộ Y tế). Mỗi khối là một bước; "row" là
     nhánh phân độ. loai: buoc | nhan (nhấn mạnh) | row (nhánh) | dich (mục tiêu). */
  phanVe: {
    chuaDuyet: false,
    nguon: "Sơ đồ chẩn đoán & xử trí phản vệ — Thông tư 51/2017/TT-BYT, Bộ Y tế.",
    luuYDau: "Khi cấp cứu thực tế: gọi hỗ trợ ngay và làm theo chỉ đạo của bác sĩ. Đã được Trưởng khoa duyệt (16/10/2026).",
    flow: [
      { loai: "buoc", mau: "brand", tieuDe: "① CHẨN ĐOÁN — Xác định tình trạng phản vệ", items: [
        "Xuất hiện nhanh (vài giây – vài giờ) sau tiếp xúc dị nguyên (thuốc đối quang, thuốc…).",
        "Nghĩ đến phản vệ khi có ≥ 2 cơ quan tổn thương (da, hô hấp, tiêu hóa, tuần hoàn) hoặc tụt huyết áp đột ngột."
      ]},
      { loai: "nhan", mau: "danger", tieuDe: "② NGỪNG NGAY tiếp xúc thuốc / dị nguyên + GỌI HỖ TRỢ", items: [
        "Đặt người bệnh nằm, đầu thấp, chân cao; thở oxy."
      ]},
      { loai: "row", tieuDe: "PHÂN ĐỘ (Phụ lục II)", cot: [
        { muc: "Nhẹ — Độ I", mau: "nhe", items: [
          "Chỉ triệu chứng da: mày đay, ngứa, phù mạch."
        ]},
        { muc: "Nặng — Độ II", mau: "nang", items: [
          "Mày đay / phù mạch xuất hiện nhanh.",
          "Khó thở, tức ngực, thở rít.",
          "Đau bụng quặn, nôn.",
          "HA chưa tụt hoặc tăng; chưa rối loạn ý thức."
        ]},
        { muc: "Nguy kịch — Độ III", mau: "nguykich", items: [
          "Đường thở: khàn tiếng, tiếng rít thanh quản.",
          "Thở nhanh, khò khè, tím tái, rối loạn nhịp thở.",
          "Tuần hoàn: da nhợt, lạnh ẩm, tụt HA.",
          "Rối loạn ý thức, hôn mê, rối loạn cơ tròn."
        ]}
      ]},
      { loai: "nhan", mau: "danger", tieuDe: "③ ADRENALIN (ống 1 mg/1 ml) — thuốc DUY NHẤT cứu sống", items: [
        "Dùng NGAY cho độ II và III. Không trì hoãn chờ đường truyền."
      ]},
      { loai: "row", tieuDe: "XỬ TRÍ CẤP CỨU (Phụ lục III)", cot: [
        { muc: "Độ I — kháng histamin & corticoid", mau: "nhe", items: [
          "Diphenhydramin uống hoặc tiêm 1 mg/kg.",
          "Methylprednisolon uống hoặc tiêm 1–2 mg/kg (hoặc thuốc tương tự).",
          "Tiếp tục theo dõi mạch, HA, nhịp thở."
        ]},
        { muc: "Độ II–III — ADRENALIN TIÊM BẮP", mau: "nang", items: [
          "Người lớn: 1/2 ống. Trẻ em: 1/5 – 1/3 ống.",
          "Nhắc lại mỗi 3–5 phút đến khi hết dấu hiệu hô hấp/tiêu hóa & huyết động ổn định.",
          "Thiết lập sẵn đường truyền tĩnh mạch NaCl 0,9%."
        ]},
        { muc: "Độ III — ĐƯỜNG TĨNH MẠCH", mau: "nguykich", items: [
          "Khi tiêm bắp > 2 lần mà HA không lên, dấu hiệu hô hấp/tiêu hóa nặng lên:",
          "Chưa có đường truyền: adrenalin pha loãng 1/10 (0,1 mg = 1 ml) tiêm TM chậm, nhắc lại khi cần — Người lớn 0,5–1 ml (50–100 µg); Trẻ em KHÔNG áp dụng TM chậm.",
          "Đã có đường truyền: truyền TM liên tục bắt đầu 0,1 µg/kg/phút, chỉnh liều theo HA."
        ]}
      ]},
      { loai: "dich", tieuDe: "MỤC TIÊU — duy trì HA tâm thu", items: [
        "Người lớn ≥ 90 mmHg.",
        "Trẻ em ≥ 70 mmHg."
      ]},
      { loai: "buoc", mau: "danger", tieuDe: "④ Biện pháp khác (KHÔNG thay thế adrenalin)", items: [
        "Khai thông đường thở, bảo đảm hô hấp: thở oxy, thông khí.",
        "Truyền NaCl 0,9%: Người lớn 1–2 lít nhanh (nhắc lại nếu cần); Trẻ em 10–20 ml/kg trong 10–20 phút đầu.",
        "Diphenhydramin 10–50 mg; Methylprednisolon 1–2 mg/kg; Salbutamol xịt.",
        "Chuyển đơn vị hồi sức nếu huyết động / hô hấp không ổn định."
      ]},
      { loai: "buoc", mau: "", tieuDe: "⑤ THEO DÕI", items: [
        "Mạch, HA, SpO2 mỗi 5–10 phút khi chưa ổn.",
        "Khi ổn định: theo dõi 1–2 giờ/lần trong ít nhất 24 giờ (phòng phản vệ 2 pha)."
      ]},
      { loai: "buoc", mau: "", tieuDe: "KHUYẾN CÁO", items: [
        "NVYT được phép tiêm bắp adrenalin theo phác đồ khi xảy ra phản vệ.",
        "Phát thẻ theo dõi dị ứng thuốc; khám lại chuyên khoa dị ứng sau 4–6 tuần.",
        "Gọi là tụt HA khi tâm thu < 90 mmHg hoặc tụt > 30% so với HA nền của người bệnh."
      ]}
    ]
  },

  /* ----------------------------- 2b) CẤP CỨU NGỪNG TUẦN HOÀN (CPR) -------- */
  /* Bản đồ quy trình BLS/ACLS theo Hướng dẫn AHA 2020 (CPR & ECC). */
  ngungTuanHoan: {
    chuaDuyet: false,
    nguon: "Hướng dẫn hồi sinh tim phổi (CPR) & chăm sóc tim mạch khẩn cấp (ECC) — AHA 2020.",
    luuYDau: "Khi cấp cứu thực tế: gọi hỗ trợ/đội cấp cứu ngay và theo chỉ đạo của bác sĩ. Đã được Trưởng khoa duyệt (16/10/2026).",
    flow: [
      { loai: "buoc", mau: "brand", tieuDe: "① ĐÁNH GIÁ & GỌI HỖ TRỢ", items: [
        "Bất tỉnh, không thở hoặc chỉ thở ngáp → nghĩ ngừng tuần hoàn.",
        "Gọi hỗ trợ + lấy máy khử rung (AED / máy sốc) và xe cấp cứu.",
        "Kiểm tra mạch cảnh ≤ 10 giây; không chắc có mạch → coi như ngừng tim."
      ]},
      { loai: "nhan", mau: "danger", tieuDe: "② ÉP TIM NGAY (C-A-B) — chất lượng cao", items: [
        "Tần số 100–120 lần/phút; độ sâu 5–6 cm (người lớn).",
        "Để ngực nảy lên hoàn toàn sau mỗi lần ép; hạn chế gián đoạn < 10 giây.",
        "Tỷ lệ ép : thổi 30 : 2 (khi chưa đặt nội khí quản)."
      ]},
      { loai: "buoc", mau: "", tieuDe: "③ Thông khí", items: [
        "Chưa đặt NKQ: 30 ép : 2 thổi, mỗi nhịp thổi ~1 giây đủ nâng ngực.",
        "Đã đặt NKQ: ép tim liên tục + thông khí 1 nhịp mỗi 6 giây (10 lần/phút)."
      ]},
      { loai: "row", tieuDe: "④ GẮN MÁY — PHÂN TÍCH NHỊP", cot: [
        { muc: "Nhịp SỐC được (VF / VT vô mạch)", mau: "nguykich", items: [
          "Sốc điện NGAY: máy 2 pha ~120–200 J (theo khuyến cáo máy); máy 1 pha 360 J.",
          "Sau sốc: ÉP TIM NGAY 2 phút rồi phân tích lại.",
          "Không đáp ứng: Amiodarone 300 mg TM (nhắc 150 mg) hoặc Lidocain."
        ]},
        { muc: "Nhịp KHÔNG sốc (PEA / vô tâm thu)", mau: "nang", items: [
          "KHÔNG sốc; ép tim 2 phút rồi phân tích lại.",
          "Dùng Adrenalin càng sớm càng tốt."
        ]}
      ]},
      { loai: "nhan", mau: "danger", tieuDe: "⑤ ADRENALIN 1 mg TM / tủy xương", items: [
        "Nhắc lại mỗi 3–5 phút trong suốt quá trình hồi sinh."
      ]},
      { loai: "buoc", mau: "", tieuDe: "⑥ Nâng cao", items: [
        "Đặt đường thở nâng cao (NKQ / mask thanh quản); theo dõi EtCO2 (capnography) đánh giá chất lượng ép & ROSC.",
        "Lập đường truyền tĩnh mạch hoặc tủy xương.",
        "Đổi người ép mỗi 2 phút (tránh mệt); kiểm tra mạch/nhịp mỗi 2 phút lúc đổi người."
      ]},
      { loai: "buoc", mau: "danger", tieuDe: "⑦ Tìm & xử trí nguyên nhân hồi phục (5H – 5T)", items: [
        "5H: Hypoxia (thiếu oxy), Hypovolemia (giảm thể tích), H+ (toan máu), Hypo/Hyperkalemia (rối loạn kali), Hypothermia (hạ thân nhiệt).",
        "5T: Tràn khí màng phổi áp lực, chèn ép tim (tamponade), ngộ độc (toxins), thuyên tắc phổi, huyết khối mạch vành."
      ]},
      { loai: "dich", tieuDe: "⑧ KHI CÓ TUẦN HOÀN TRỞ LẠI (ROSC)", items: [
        "Duy trì SpO2 94–99%, theo dõi EtCO2 và huyết áp.",
        "Ghi ĐTĐ 12 chuyển đạo; chăm sóc sau ngừng tim, kiểm soát thân nhiệt.",
        "Chuyển đơn vị hồi sức tích cực."
      ]}
    ]
  },

  /* --------------------------- 2c) THOÁT MẠCH THUỐC CẢN QUANG (extrav.) --- */
  /* KHUNG theo tài liệu chuẩn chung (ACR Manual on Contrast Media; quy trình
     xử trí thoát mạch thuốc cản quang). CHỜ TRƯỞNG KHOA DUYỆT trước khi dùng. */
  thoatMach: {
    chuaDuyet: true,
    nguon: "Khung tham khảo theo tài liệu chuẩn (ACR Manual on Contrast Media). Chờ Trưởng khoa duyệt.",
    luuYDau: "Khung tham khảo — CHƯA được duyệt. Khi xảy ra thoát mạch thực tế: báo bác sĩ ngay và theo quy trình của khoa.",
    flow: [
      { loai: "buoc", mau: "brand", tieuDe: "① NHẬN BIẾT sớm", items: [
        "Trong/ngay sau khi tiêm: người bệnh đau, rát, căng tức, sưng tại vị trí tiêm.",
        "Máy bơm báo áp lực cao, dòng thuốc chậm/ngừng; mất 'cảm giác' tĩnh mạch.",
        "Da vùng tiêm căng bóng, lạnh, đổi màu."
      ]},
      { loai: "nhan", mau: "danger", tieuDe: "② NGỪNG TIÊM NGAY + báo bác sĩ", items: [
        "Dừng bơm tiêm lập tức; chưa rút kim vội — thử hút ngược lượng thuốc còn lại qua kim nếu được, rồi rút kim.",
        "Không ép/xoa mạnh vùng thoát mạch."
      ]},
      { loai: "buoc", mau: "", tieuDe: "③ Xử trí ban đầu", items: [
        "Nâng cao chi tổn thương trên mức tim để giảm phù.",
        "Chườm theo quy trình khoa (thường chườm ấm hỗ trợ hấp thu; một số nơi chườm lạnh giảm đau) — 15–60 phút, nhắc lại.",
        "Đánh dấu ranh giới vùng sưng, theo dõi tiến triển."
      ]},
      { loai: "row", tieuDe: "④ ĐÁNH GIÁ MỨC ĐỘ", cot: [
        { muc: "Nhẹ (đa số)", mau: "nhe", items: [
          "Thể tích nhỏ, phù khu trú, không rối loạn tưới máu.",
          "Theo dõi, trấn an; hướng dẫn dấu hiệu nặng; đa số tự hồi phục."
        ]},
        { muc: "Nặng / biến chứng", mau: "nguykich", items: [
          "Thể tích lớn; phồng rộp, loét da; đau tăng nhanh.",
          "Giảm/mất mạch, dị cảm, tê, giảm vận động → nguy cơ hội chứng chèn ép khoang.",
          "→ HỘI CHẨN NGOẠI / PHẪU THUẬT TẠO HÌNH NGAY."
        ]}
      ]},
      { loai: "buoc", mau: "", tieuDe: "⑤ THEO DÕI & DẶN DÒ", items: [
        "Theo dõi tại chỗ 2–4 giờ; kiểm tra lại mạch, cảm giác, vận động, màu da.",
        "Dặn người bệnh quay lại ngay nếu: đau tăng, tê bì, mất cảm giác, da đổi màu/phồng rộp.",
        "Ghi hồ sơ: loại & thể tích thuốc ước tính thoát mạch, vị trí, xử trí, tình trạng khi ra về."
      ]}
    ]
  },

  /* ------------------------------------------- 3) BẢNG KIỂM AN TOÀN MRI --- */
  /* Nội dung lấy từ chống chỉ định trong quy trình MRI của khoa (dữ liệu thật). */
  bangKiemMRI: {
    chuaDuyet: false,
    tuyetDoi: [
      "Máy tạo nhịp tim (pacemaker) — CHỐNG CHỈ ĐỊNH TUYỆT ĐỐI."
    ],
    tuongDoi: [
      "Có kim loại từ tính trong người (mảnh đạn, clip phẫu thuật, vật liệu kết hợp xương…).",
      "Người bệnh không có khả năng nằm yên.",
      "Sợ ánh sáng, sợ nằm một mình (hội chứng sợ không gian kín)."
    ],
    chuanBi: [
      "Thay quần áo của phòng chụp CHT.",
      "Tháo bỏ toàn bộ vật dụng kim loại: khuyên tai, vòng cổ, cặp tóc, đồng hồ, điện thoại, thẻ từ…",
      "Kiểm tra lại các chống chỉ định trước khi đưa người bệnh vào khoang máy.",
      "Có giấy yêu cầu chụp của bác sĩ lâm sàng với chẩn đoán rõ ràng."
    ],
    nguon: "QUY TRÌNH MRI KHOA CDHA BVHVGL.docx"
  }

};
