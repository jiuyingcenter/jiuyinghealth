/* ==========================================================================
   lang/vi.js — Tiếng Việt (Vietnamese)
   ========================================================================== */
(function () {
  'use strict';
  var JY = window.JY;

  JY.i18n.register('vi', {
    tag: 'vi', dir: 'ltr', region: 'sea', native: 'Tiếng Việt', english: 'Vietnamese'
  }, {

  meta: {
    title: 'Nền tảng giới thiệu y tế quốc tế Jiuying — Khám chữa bệnh tại các bệnh viện hạng A quốc gia Trung Quốc',
    description: 'Jiuying kết nối bệnh nhân quốc tế với các bệnh viện tuyến trung ương hạng A của Trung Quốc: xem trước hồ sơ bệnh án miễn phí, tư vấn video với bác sĩ điều trị, thư mời visa y tế, đón sân bay, phiên dịch tại viện và theo dõi sau khi về nước.',
    ogDescription: 'Cầu nối đáng tin cậy tới các bệnh viện hạng A quốc gia của Trung Quốc.'
  },

  brand: { name: 'Nền tảng giới thiệu y tế quốc tế Jiuying', short: 'Jiuying Health', sub: 'JIUYING GLOBAL HEALTH' },

  topbar: {
    promo: 'Xem trước hồ sơ bệnh án miễn phí — nghe ý kiến chuyên gia trước khi bay',
    hours: 'Phản hồi trong 4 giờ · 7 ngày/tuần'
  },

  nav: {
    help: 'Chúng tôi giúp gì', hospitals: 'Mạng lưới bệnh viện', specialties: 'Chuyên khoa',
    process: 'Quy trình', cost: 'Chi phí', faq: 'Câu hỏi', partners: 'Hợp tác',
    contact: 'Liên hệ', cta: 'Xem hồ sơ miễn phí'
  },

  hero: {
    badgeTag: 'Từ năm 2026',
    badgeText: 'Dịch vụ giới thiệu bệnh nhân quốc tế · Đặt tại Quảng Châu, Trung Quốc',
    titleBefore: 'Chữa bệnh tại Trung Quốc',
    titleEm: 'không hề phức tạp.',
    sub: 'Gửi hồ sơ bệnh án cho chúng tôi. Chúng tôi sẽ ghép bạn với một bệnh viện hạng A quốc gia tại Trung Quốc, sắp xếp tư vấn video với bác sĩ điều trị, và đồng hành cùng bạn từ visa y tế, đón sân bay, phiên dịch tại viện đến tái khám sau khi về nước.',
    ctaPrimary: 'Bắt đầu xem hồ sơ miễn phí',
    ctaSecondary: 'Xem cách hoạt động',
    proof: ['Xem hồ sơ không mất phí', 'Viện phí trả trực tiếp cho bệnh viện', 'Điều phối viên nói tiếng của bạn', 'Báo giá bằng văn bản trước khi bay'],
    plan: {
      tag: 'Hồ sơ #JY-2609',
      title: 'Kế hoạch điều trị của bạn',
      s1t: 'Đã nhận và dịch hồ sơ bệnh án', s1d: 'Hình ảnh, giải phẫu bệnh, xét nghiệm đã được tổng hợp',
      s2t: 'Bệnh viện đã xem xét trước', s2d: 'Đội ngũ chuyên khoa ung bướu đã có ý kiến sơ bộ',
      s3t: 'Đã lên lịch tư vấn video', s3d: 'Gặp mặt trực tiếp bác sĩ điều trị của bạn',
      s4t: 'Đã cấp thư mời y tế', s4d: 'Do bệnh viện phát hành, sẵn sàng cho hồ sơ visa',
      k1v: '2–4 tuần', k1l: 'Thời gian lưu trú dự kiến',
      k2v: 'Bằng văn bản', k2l: 'Dự toán chi phí'
    },
    chipA: 'Giấy phép bệnh viện kiểm tra được tại Ủy ban Y tế Quốc gia',
    chipB: '9 ngôn ngữ, điều phối 24/7'
  },

  trust: {
    hospitals: 'Bệnh viện hạng A trong mạng lưới',
    cities: 'Trung tâm y tế lớn được phủ sóng',
    countries: 'Quốc gia và vùng lãnh thổ đã phục vụ',
    response: 'Thời gian phản hồi đầu tiên'
  },

  help: {
    eyebrow: 'Bệnh nhân thường gặp trở ngại gì',
    title: 'Vấn đề bạn đang mắc kẹt — và cách chúng tôi xử lý',
    sub: 'Hầu như mọi bệnh nhân quốc tế liên hệ với chúng tôi đều bị chặn lại bởi một trong sáu điều dưới đây. Đây là cách từng việc được giải quyết.',
    items: [
      { t: 'Bạn được nói là "không còn cách nào nữa"', d: 'Khối u bị đánh giá là không thể mổ, hoặc bác sĩ nói không còn phương án nào khác.', s: 'Chúng tôi sắp xếp hội chẩn đa chuyên khoa (MDT) và ý kiến thứ hai chính thức tại bệnh viện hạng A quốc gia — một nhóm chuyên gia kỳ cựu cùng đọc lại chính bộ phim của bạn, thường mở ra những lựa chọn mà bạn đã được nói là "đã đóng".' },
      { t: 'Chi phí trong nước vượt quá khả năng', d: 'Cùng một phác đồ có thể đắt gấp ba đến năm lần tại cơ sở tư nhân ở nhà, và bảo hiểm không chi trả.', s: 'Trang thiết bị và chuyên gia tương đương, thường chỉ bằng một phần ba đến một nửa giá tư nhân tại Mỹ hoặc Tây Âu — và bạn nhận được khoảng chi phí bằng văn bản trước khi cam kết bất cứ điều gì.' },
      { t: 'Phải chờ đợi hàng tháng trời', d: 'Hàng đợi tại hệ thống công kéo dài lịch mổ hoặc xạ trị thêm nhiều tháng, trong khi bệnh tiếp tục tiến triển.', s: 'Sau khi phác đồ được chốt, hầu hết bệnh nhân bắt đầu điều trị trong vòng 1–2 tuần kể từ khi đến nơi, với ngày nhập viện được xác nhận trước khi bạn đặt vé máy bay.' },
      { t: 'Không biết bệnh viện nào ở Trung Quốc thực sự top đầu', d: 'Kết quả tìm kiếm toàn quảng cáo, và bạn không có cách nào kiểm tra hạng thật của một bệnh viện.', s: 'Chúng tôi chỉ làm việc với các bệnh viện hạng A quốc gia (三甲) và các trung tâm chuyên khoa quốc gia. Mọi giấy phép đều kiểm chứng công khai, và chúng tôi cho bạn biết tên bệnh viện cùng tên bác sĩ điều trị bằng văn bản trước khi bạn đi.' },
      { t: 'Không ai nói ngôn ngữ của bạn', d: 'Mẫu đơn, buổi trực phòng, giấy đồng ý, tóm tắt xuất viện — tất cả đều bằng tiếng Trung.', s: 'Một điều phối viên nói tiếng mẹ đẻ của bạn phụ trách hồ sơ từ đầu đến cuối, và có phiên dịch y tế tại bệnh viện trong các buổi khám, nhập viện và xuất viện.' },
      { t: 'Visa, tiền bạc và chăm sóc sau về nước đều là hộp đen', d: 'Bạn từng nghe chuyện môi giới nhận tiền rồi biến mất, và lo lắng về việc sẽ ra sao khi về nhà.', s: 'Bệnh viện cấp thư mời y tế; viện phí do chính bạn trả trực tiếp cho bệnh viện theo hóa đơn chính thức, không bao giờ qua chúng tôi; và chúng tôi tiếp tục hỗ trợ tái khám từ xa sau khi bạn về nước.' }
    ],
    bandTitle: 'Chưa chắc Trung Quốc có phù hợp với bệnh của bạn?',
    bandText: 'Gửi hồ sơ để được xem trước miễn phí. Nếu chúng tôi thực sự không giúp được, chúng tôi sẽ nói thẳng — không tính phí, không ép buộc.',
    bandBtn: 'Gửi hồ sơ của tôi'
  },

  why: {
    eyebrow: 'Vì sao là Trung Quốc',
    title: 'Vì sao ngày càng nhiều bệnh nhân quốc tế bay sang Trung Quốc',
    sub: 'Các bệnh viện top đầu Trung Quốc kết hợp mật độ trang thiết bị, số lượng ca bệnh và tốc độ tiếp nhận theo cách mà rất ít hệ thống y tế nào làm được.',
    items: [
      { t: 'Thiết bị hàng đầu thế giới, và thực sự có lịch trống', d: 'CyberKnife, TOMO, Ethos, PET-MR và robot phẫu thuật da Vinci được lắp đặt với số lượng lớn tại các bệnh viện đầu ngành — vì vậy lịch điều trị tính bằng ngày, không phải bằng tháng.' },
      { t: 'Chuyên gia có số lượng ca rất lớn', d: 'Một bác sĩ phẫu thuật hoặc xạ trị kỳ cựu tại trung tâm quốc gia có thể xử lý số ca mỗi năm gấp nhiều lần đồng nghiệp ở nơi khác. Sự lặp lại tạo nên phán đoán lâm sàng.' },
      { t: 'Cận lâm sàng tính bằng ngày', d: 'MRI, PET-CT, giải phẫu bệnh và xét nghiệm gen thường có kết quả trong vài ngày, nên quyết định điều trị không bị kẹt lại ở hàng đợi xét nghiệm.' },
      { t: 'Chi phí có thể lên kế hoạch trước', d: 'Hóa đơn chính thức có bảng kê chi tiết do chính bệnh viện phát hành. Phác đồ tương đương thường có giá bằng một phần ba đến một nửa so với cơ sở tư nhân ở Mỹ hoặc Tây Âu.' },
      { t: 'Đông – Tây y kết hợp, ngay trong cùng một bệnh viện', d: 'Phục hồi chức năng ung bướu bằng y học cổ truyền, châm cứu và vật lý trị liệu nằm trong quy trình chăm sóc chính thống tại đây — rất hữu ích cho ăn uống, giấc ngủ, kiểm soát đau và phục hồi thể lực trong thời gian điều trị.' },
      { t: 'Dịch vụ bệnh nhân quốc tế đã rất chuyên nghiệp', d: 'Các bệnh viện hạng A lớn đều có khoa y tế quốc tế riêng, nhân viên nói tiếng Anh, quy trình thanh toán quốc tế tiêu chuẩn và kinh nghiệm xử lý visa y tế đã thành thục.' }
    ]
  },

  hospitals: {
    eyebrow: 'Mạng lưới bệnh viện',
    title: 'Mạng lưới bệnh viện hạng A quốc gia trên toàn Trung Quốc',
    sub: 'Chúng tôi điều phối tại các trung tâm y tế trọng điểm của Trung Quốc. Bạn được ghép với bệnh viện nào phụ thuộc vào tình trạng bệnh — chứ không phụ thuộc vào ai trả hoa hồng cao hơn.',
    tabAll: 'Tất cả thành phố',
    more: 'Xem thêm bệnh viện',
    less: 'Thu gọn',
    perCount: 'bệnh viện',
    level: 'Hạng A tuyến trung ương (三甲)',
    firstTag: 'Đối tác đầu tiên',
    note: 'Danh sách dưới đây là mạng lưới bệnh viện mà nền tảng phối hợp. Việc bệnh viện nào có thể tiếp nhận hồ sơ của bạn phụ thuộc vào chẩn đoán và danh sách hợp tác hiện hành — điều phối viên sẽ xác nhận bằng văn bản bệnh viện và bác sĩ điều trị cụ thể trước khi bạn đi. Mạng lưới vẫn đang không ngừng mở rộng.',
    empty: 'Hiện không có bệnh viện nào tại thành phố này phù hợp với bộ lọc.'
  },

  tag: {
    onc: 'Ung bướu', radio: 'Xạ trị chính xác', cardio: 'Tim mạch', neuro: 'Ngoại thần kinh',
    ortho: 'Cơ xương khớp', gi: 'Tiêu hóa & ít xâm lấn', tcm: 'Phục hồi Đông y',
    transplant: 'Ghép tạng', fertility: 'Hỗ trợ sinh sản', checkup: 'Khám sức khỏe',
    complex: 'Bệnh hiểm nghèo & hiếm', endo: 'Nội tiết'
  },

  city: {
    guangzhou: 'Quảng Châu', shenzhen: 'Thâm Quyến', foshan: 'Phật Sơn',
    dongguan: 'Đông Hoản', zhuhai: 'Châu Hải', shantou: 'Sán Đầu'
  },

  spec: {
    eyebrow: 'Chuyên khoa trọng điểm',
    title: 'Những gì chúng tôi có thể sắp xếp cho bạn',
    sub: 'Đây là những lĩnh vực chúng tôi tiếp nhận nhiều bệnh nhân quốc tế nhất. Nếu tình trạng của bạn không có trong danh sách, cứ gửi cho chúng tôi — chúng tôi sẽ nói thật là có giúp được hay không.',
    badge1: '3–5 lần', badge2: 'Báo cáo trong 48 giờ', badge3: 'Can thiệp', badge4: 'Mạch máu não',
    badge5: 'Thay khớp', badge6: 'Nội soi', badge7: 'Kết hợp Đông – Tây y', badge8: 'Có kết quả trong tuần',
    radio: { t: 'Xạ trị chính xác cho ung thư', d: 'Các hệ thống CyberKnife, TOMO và Ethos với độ chính xác dưới milimet. Một số phác đồ hoàn thành trong 3–5 lần, nên thời gian lưu trú 2–4 tuần thường là đủ.', l1: 'CyberKnife · TOMO · Ethos', l2: 'Phác đồ ngắn ngày', l3: 'Chủ yếu ngoại trú' },
    mdt: { t: 'Hội chẩn đa chuyên khoa ung bướu', d: 'Bác sĩ ngoại khoa, ung bướu nội khoa, xạ trị, chẩn đoán hình ảnh và giải phẫu bệnh cùng xem hồ sơ của bạn và đưa ra ý kiến thứ hai bằng văn bản.', l1: 'Ý kiến thứ hai bằng văn bản', l2: '5–8 chuyên gia mỗi ca', l3: 'Báo cáo trong 48 giờ' },
    cardio: { t: 'Tim mạch & phẫu thuật tim', d: 'Can thiệp mạch vành, sửa và thay van tim, đốt rung nhĩ và phẫu thuật bắc cầu tại các trung tâm tim mạch quốc gia.', l1: 'PCI · TAVR · đốt RF', l2: 'Trung tâm tim mạch quốc gia', l3: 'Chăm sóc hồi sức sau mổ' },
    neuro: { t: 'Ngoại thần kinh & bệnh mạch máu não', d: 'U não và u tủy sống, can thiệp phình mạch, kích thích não sâu (DBS) và phục hồi thần kinh do các ê-kíp ngoại thần kinh kỳ cựu thực hiện.', l1: 'U · phình mạch · DBS', l2: 'Theo dõi thần kinh trong mổ', l3: 'Lộ trình phục hồi chức năng' },
    ortho: { t: 'Cơ xương khớp, cột sống & thay khớp', d: 'Thay khớp háng và khớp gối, giải ép cột sống, tái tạo chấn thương phức tạp, kèm phục hồi chức năng có cấu trúc ngay trong viện.', l1: 'Háng · gối · cột sống', l2: 'Quy trình hồi phục nhanh', l3: 'Bao gồm tập phục hồi' },
    gi: { t: 'Bệnh tiêu hóa & phẫu thuật ít xâm lấn', d: 'Cắt hớt qua nội soi, phẫu thuật gan mật tụy, quản lý bệnh viêm ruột tại các trung tâm có sản lượng phẫu thuật lớn.', l1: 'Nội soi · phẫu thuật gan mật tụy', l2: 'Đường mổ nội soi ổ bụng', l3: 'Thời gian nằm viện ngắn' },
    tcm: { t: 'Phục hồi ung bướu bằng y học cổ truyền', d: 'Châm cứu, thuốc đông dược và vật lý trị liệu phối hợp cùng điều trị quy ước để cải thiện đau, ăn uống, mệt mỏi và giấc ngủ.', l1: 'Ung bướu kết hợp', l2: 'Châm cứu · đông dược', l3: 'Hỗ trợ giai đoạn hồi phục' },
    checkup: { t: 'Khám sức khỏe cao cấp & tầm soát sớm', d: 'Gói kiểm tra toàn diện với PET-MR, phân tích nguy cơ gen và bác sĩ đọc kết quả — có kết quả và buổi tư vấn trong cùng một tuần.', l1: 'PET-MR · gen', l2: 'Tư vấn trực tiếp với bác sĩ', l3: 'Báo cáo tiếng Anh' }
  },

  process: {
    eyebrow: 'Lộ trình',
    title: 'Sáu bước, từ tin nhắn đầu tiên đến tái khám tại nhà',
    sub: 'Không có bước nào diễn ra nếu chưa được bạn xác nhận. Bạn duyệt bệnh viện, bác sĩ, phác đồ và dự toán chi phí trước khi đặt vé máy bay.',
    steps: [
      { t: 'Tư vấn miễn phí & lập hồ sơ', dur: 'Trong ngày', who: 'Điều phối viên của bạn', d: 'Cho chúng tôi biết chẩn đoán và gửi những hồ sơ bạn đang có. Một điều phối viên nói tiếng của bạn sẽ phản hồi trong 4 giờ và mở hồ sơ riêng cho bạn.' },
      { t: 'Thu thập hồ sơ & bệnh viện xem trước', dur: '2–3 ngày', who: 'Nền tảng + bệnh viện', d: 'Chúng tôi sắp xếp, dịch và cấu trúc hóa hình ảnh, giải phẫu bệnh và xét nghiệm máu, sau đó chuyên gia của bệnh viện xem xét và đưa ra ý kiến sơ bộ.' },
      { t: 'Tư vấn video với bác sĩ', dur: 'Lên lịch trong 3–5 ngày', who: 'Chuyên gia bệnh viện', d: 'Tư vấn video trực tiếp với bác sĩ sẽ điều trị cho bạn. Bạn nhận được phác đồ, khoảng chi phí và thời gian lưu trú dự kiến bằng văn bản.' },
      { t: 'Visa y tế & di chuyển', dur: '1–2 tuần', who: 'Nền tảng', d: 'Bệnh viện cấp thư mời y tế. Chúng tôi chuẩn bị hồ sơ visa, đặt vé máy bay và đặt chỗ ở gần bệnh viện.' },
      { t: 'Điều trị tại Trung Quốc', dur: '2–6 tuần', who: 'Bệnh viện + nền tảng', d: 'Đón sân bay, làm thủ tục nhập viện, phiên dịch y tế tại viện, điều phối hằng ngày và hỗ trợ sinh hoạt cho bạn cùng người đi cùng.' },
      { t: 'Xuất viện & tái khám tại nhà', dur: 'Dài hạn', who: 'Nền tảng', d: 'Bản tóm tắt xuất viện đã dịch, hướng dẫn dùng thuốc, lịch tái khám từ xa và giới thiệu phục hồi chức năng — mối quan hệ không kết thúc ở sân bay.' }
    ],
    note: 'Thời gian trung bình từ tin nhắn đầu tiên đến khi đặt chân đến Trung Quốc: 2–4 tuần, tùy thuộc vào độ đầy đủ của hồ sơ và thời gian xử lý visa.'
  },

  care: {
    eyebrow: 'Ai làm việc gì',
    title: 'Chúng tôi là cầu nối, không phải bệnh viện — và điều đó được ghi rõ bằng văn bản',
    sub: 'Ranh giới rõ ràng sẽ bảo vệ bạn. Dưới đây là chính xác những gì chúng tôi phụ trách, và những gì chỉ bệnh viện mới được làm.',
    usT: 'Jiuying phụ trách',
    us: ['Tư vấn đầu tiên và đánh giá tình trạng miễn phí', 'Thu thập, dịch và cấu trúc hóa hồ sơ bệnh án của bạn', 'Ghép bạn với bệnh viện và chuyên gia phù hợp', 'Lên lịch và phiên dịch buổi tư vấn video', 'Hỗ trợ thư mời y tế và hồ sơ visa', 'Vé máy bay, đón sân bay, chỗ ở và đi lại tại địa phương', 'Phiên dịch y tế tại viện và điều phối hằng ngày', 'Hỗ trợ sinh hoạt cho người nhà đi cùng', 'Dịch tóm tắt xuất viện và điều phối tái khám từ xa'],
    hospT: 'Bệnh viện phụ trách',
    hosp: ['Xem xét hồ sơ và đưa ra ý kiến y khoa', 'Chẩn đoán và lập phác đồ điều trị', 'Nhập viện, phẫu thuật, xạ trị và dùng thuốc', 'Chăm sóc điều dưỡng và quản lý nội trú', 'Hóa đơn chính thức và hồ sơ y khoa', 'Tóm tắt xuất viện và theo dõi lâm sàng', 'Toàn bộ trách nhiệm y tế đối với mọi quyết định lâm sàng'],
    note: 'Mọi quyết định và trách nhiệm y tế thuộc về bệnh viện tiếp nhận. Jiuying không hành nghề y, không đưa ra phán đoán y khoa, không cam kết kết quả điều trị, và không bao giờ thu hay giữ viện phí của bạn.'
  },

  cost: {
    eyebrow: 'Chi phí & thanh toán',
    title: 'Bạn thấy con số trước khi lên máy bay',
    sub: 'Không đặt cọc, không cam kết mù quáng. Dự toán được đưa ra sau khi chuyên gia đã thực sự xem hồ sơ của bạn.',
    items: [
      { t: 'Viện phí trả thẳng cho bệnh viện', d: 'Bạn thanh toán trực tiếp cho bệnh viện theo hóa đơn chính thức có bảng kê chi tiết. Jiuying không bao giờ thu, giữ hay chuyển viện phí của bạn — đó là nguyên tắc cứng, không phải sở thích.' },
      { t: 'Dự toán bằng văn bản trước khi bay', d: 'Sau buổi tư vấn video, bạn nhận được khoảng chi phí bằng văn bản gồm điều trị, nằm viện và thuốc dự kiến. Bạn quyết định với đầy đủ thông tin.' },
      { t: 'Phí điều phối được chốt từ trước', d: 'Phí điều phối của chúng tôi được báo và xác nhận bằng văn bản trước khi bạn đi. Không có khoản phí ẩn, không có khoản cộng thêm nào được nghĩ ra sau khi bạn hạ cánh.' },
      { t: 'Hồ sơ sẵn sàng cho bảo hiểm', d: 'Chúng tôi cung cấp hóa đơn chi tiết, giấy chứng nhận chẩn đoán và hồ sơ bệnh án bằng tiếng Anh để bạn xin bồi hoàn; một số hãng bảo hiểm quốc tế có thể thanh toán trực tiếp.' }
    ],
    noteTitle: 'Những điều chúng tôi sẽ không bao giờ làm',
    noteText: 'Chúng tôi không hứa kết quả, không dùng ảnh trước/sau làm bằng chứng hiệu quả, và không nhận tiền mặt hay chuyển khoản ngoài sổ sách. Mọi thứ đều đi qua kênh chính thức, có hóa đơn.',
    flowTitle: 'Dòng tiền đi như thế nào',
    flow: ['Tư vấn video và đưa ra dự toán bằng văn bản', 'Bạn xác nhận phác đồ và dự toán bằng văn bản', 'Chỉ đặt cọc cho vé máy bay và chỗ ở', 'Khi nhập viện bạn trả trực tiếp cho bệnh viện theo hóa đơn chính thức', 'Mọi hạng mục điều trị phát sinh đều được báo giá và duyệt trước khi thực hiện']
  },

  stories: {
    eyebrow: 'Trải nghiệm bệnh nhân',
    title: 'Với người khác, hành trình này diễn ra như thế nào',
    sub: 'Được đăng với sự đồng ý của bệnh nhân và đã ẩn danh hoàn toàn. Chỉ là trải nghiệm cá nhân — không phải cam kết về bất kỳ kết quả nào.',
    items: [
      { text: 'Tôi được nói khối u không thể mổ và nên về nhà sống cho thoải mái. Jiuying gửi phim của tôi tới một bệnh viện ở Quảng Châu, và ba ngày sau tôi đã gọi video với một bác sĩ ngoại khoa, người giải thích một phương án xạ trị mà chưa ai từng nhắc đến. Năm lần điều trị, ba tuần ở Trung Quốc, và tôi về nhà với một kế hoạch tái khám.', name: 'Ông L., 58 tuổi', meta: 'Ung thư gan · Đông Nam Á' },
      { text: 'Điều tôi lo nhất thực ra là ngôn ngữ. Nhưng điều phối viên của tôi nói tiếng của tôi ngay từ tin nhắn đầu tiên, và có phiên dịch trong phòng ở mọi buổi khám. Tôi chưa bao giờ phải đoán xem bác sĩ vừa nói gì.', name: 'Bà N., 41 tuổi', meta: 'Ung thư vú · Việt Nam' },
      { text: 'Điều thuyết phục tôi là tiền. Tôi được báo một con số bằng văn bản trước khi mua vé, tự trả viện phí cho bệnh viện và nhận hóa đơn chính thức, và số tiền cuối cùng vẫn nằm trong khoảng họ đã đưa. Không có khoản mục nào mọc ra sau đó.', name: 'Ông R., 63 tuổi', meta: 'Phẫu thuật tim · Trung Đông' }
    ]
  },

  faq: {
    eyebrow: 'Câu hỏi thường gặp',
    title: 'Những câu bệnh nhân hỏi trước khi quyết định',
    sub: 'Nếu vẫn còn điều gì chưa rõ, hãy nhắn cho chúng tôi — người thật trả lời, không phải chatbot.',
    items: [
      { q: 'Bệnh viện Trung Quốc có thực sự sánh được với bệnh viện top ở nước tôi không?', a: 'Những bệnh viện chúng tôi phối hợp là bệnh viện hạng A tuyến trung ương (三甲) và các trung tâm chuyên khoa quốc gia — cấp cao nhất trong hệ thống phân hạng của Trung Quốc. Hạng của họ là thông tin công khai, bạn có thể kiểm tra qua Ủy ban Y tế Quốc gia. Một số bệnh viện trong số đó thực hiện số ca xạ trị và phẫu thuật mỗi năm cao hơn đa số bệnh viện lớn ở nơi khác. Chúng tôi nêu tên bệnh viện và bác sĩ trước khi bạn đi để bạn tự kiểm chứng.' },
      { q: 'Ai sẽ thực sự điều trị cho tôi? Tôi có biết trước được không?', a: 'Có. Trước khi bạn cam kết điều gì, bạn sẽ nhận được tên bệnh viện, khoa, cùng tên và chức danh của bác sĩ điều trị, và một buổi tư vấn video với chính bác sĩ đó. Chúng tôi không đưa bệnh nhân tới bệnh viện rồi để họ đến nơi mới biết ai điều trị.' },
      { q: 'Tôi không biết tiếng Trung. Giao tiếp sẽ thế nào?', a: 'Hai lớp. Điều phối viên của bạn nói ngôn ngữ của bạn và lo mọi việc bên ngoài bệnh viện. Bên trong bệnh viện có phiên dịch y tế tham gia các buổi khám, lúc nhập viện và xuất viện. Các tài liệu bằng văn bản — phác đồ, dự toán chi phí, tóm tắt xuất viện — đều được cung cấp bằng ngôn ngữ của bạn.' },
      { q: 'Tôi cần gửi những hồ sơ y tế nào?', a: 'Lý tưởng nhất: hình ảnh (CT/MRI/PET, tốt nhất có file DICOM gốc), kết quả giải phẫu bệnh, xét nghiệm máu gần nhất, tóm tắt các đợt điều trị trước và danh sách thuốc đang dùng. Nếu bạn chỉ có một bản tóm tắt xuất viện, cứ gửi bản đó — chúng tôi sẽ nói bạn cần bổ sung gì.' },
      { q: 'Bao lâu thì bắt đầu điều trị được?', a: 'Xem trước hồ sơ mất 2–3 ngày, tư vấn video thường được lên lịch trong 3–5 ngày, visa cộng di chuyển mất 1–2 tuần. Hầu hết bệnh nhân bắt đầu điều trị trong vòng 1–2 tuần sau khi đến Trung Quốc. Từ tin nhắn đầu tiên đến khi đến nơi thường là 2–4 tuần.' },
      { q: 'Chi phí khoảng bao nhiêu, và tôi thanh toán thế nào?', a: 'Bạn nhận được khoảng chi phí bằng văn bản sau buổi tư vấn video, trước khi quyết định. Viện phí do bạn trả trực tiếp cho bệnh viện theo hóa đơn chính thức. Phí điều phối của chúng tôi được chốt bằng văn bản từ trước. Chúng tôi không giữ viện phí và không nhận tiền mặt.' },
      { q: 'Người nhà có thể đi cùng tôi không?', a: 'Có, và với các đợt điều trị lớn chúng tôi còn khuyến khích. Chúng tôi hỗ trợ hồ sơ thư mời visa cho người nhà, sắp xếp chỗ ở cho cả hai, và bố trí giường người nhà trong phòng nếu bệnh viện cho phép.' },
      { q: 'Visa y tế làm như thế nào?', a: 'Bệnh viện cấp một thư mời y tế chính thức ghi đích danh bạn. Chúng tôi chuẩn bị bộ hồ sơ hỗ trợ và dẫn bạn từng bước nộp đơn. Hầu hết bệnh nhân được duyệt mà không cần phỏng vấn; thời gian tùy thuộc vào quốc gia của bạn, thường là 1–2 tuần.' },
      { q: 'Sau khi về nước thì sao?', a: 'Bạn ra về với bản tóm tắt xuất viện đã dịch và lịch dùng thuốc. Chúng tôi điều phối các buổi tái khám từ xa với ê-kíp điều trị, chuyển tiếp kết quả giải phẫu bệnh và hình ảnh, và sắp xếp giới thiệu phục hồi chức năng hoặc thuốc khi cần.' },
      { q: 'Các bạn là bệnh viện à? Nếu có sự cố thì ai chịu trách nhiệm?', a: 'Không — và đó chính là điểm mấu chốt. Jiuying là dịch vụ giới thiệu và điều phối. Mọi chẩn đoán, điều trị và quyết định lâm sàng do bệnh viện thực hiện, và toàn bộ trách nhiệm y tế thuộc về bệnh viện theo pháp luật Trung Quốc. Chúng tôi không hành nghề y và không đưa ra phán đoán y khoa. Ranh giới này được ghi rõ trong hợp đồng dịch vụ của bạn.' },
      { q: 'Dữ liệu y tế của tôi có an toàn không?', a: 'Hồ sơ của bạn chỉ được chia sẻ với các chuyên gia của bệnh viện đang xem xét ca của bạn, và chỉ khi có sự cho phép rõ ràng của bạn. Việc xử lý tuân thủ Luật Bảo vệ Thông tin Cá nhân của Trung Quốc và các quy định về dữ liệu xuyên biên giới. Bạn có thể yêu cầu chúng tôi xóa hồ sơ bất cứ lúc nào.' }
    ],
    moreTitle: 'Vẫn còn câu hỏi?',
    moreText: 'Gửi cho chúng tôi và một điều phối viên sẽ trả lời trong vòng 4 giờ trong giờ làm việc (9:00–21:00 GMT+8, bảy ngày mỗi tuần).',
    moreBtn: 'Hỏi trực tiếp'
  },

  partners: {
    eyebrow: 'Hợp tác kênh',
    title: 'Dành cho các tổ chức, phòng khám và cộng đồng ở nước ngoài',
    sub: 'Nếu bạn đã tiếp cận được những bệnh nhân cần điều trị mà tại chỗ không đáp ứng được, bạn có thể kết nối vào một mạng lưới bệnh viện đang mở rộng thay vì bị buộc vào một bệnh viện duy nhất.',
    whoT: 'Chúng tôi hợp tác với ai',
    who: ['Công ty giới thiệu và du lịch y tế', 'Công ty du lịch và bộ phận du lịch y tế', 'Trung tâm khám sức khỏe và phòng khám tư', 'Môi giới bảo hiểm và tư vấn phúc lợi nhân viên', 'Hội đoàn cộng đồng người Hoa ở nước ngoài', 'Nhà sáng tạo nội dung bản địa trong lĩnh vực sức khỏe'],
    doT: 'Đối tác làm gì',
    dos: ['Tiếp cận bệnh nhân tại địa phương cần chữa bệnh mà ở nhà không làm được', 'Tư vấn bước đầu và đánh giá nhu cầu', 'Hỗ trợ thu thập và sắp xếp hồ sơ bệnh án', 'Kết nối với nền tảng, sắp xếp tư vấn video với bác sĩ', 'Hỗ trợ bệnh nhân sắp xếp hành trình sang Trung Quốc'],
    earnT: 'Đối tác nhận lợi ích gì',
    earn: ['Hoa hồng được chi trả sau khi bệnh nhân được giới thiệu hoàn tất điều trị', 'Không phí cố định, không phí nhượng quyền — chúng tôi không chuyển chi phí vận hành sang đối tác', 'Tỷ lệ cụ thể thỏa thuận theo từng trường hợp trong hợp đồng riêng', 'Khi mạng lưới bệnh viện mở rộng, đối tác có thể tham gia nhiều chuyên khoa và nhiều bệnh viện hơn'],
    boundT: 'Ranh giới rõ ràng',
    bound: ['Đối tác không được ký kết, hứa hẹn hay thu tiền nhân danh bệnh viện', 'Không quảng cáo sai sự thật, không hứa kết quả điều trị', 'Không được thu viện phí của bệnh nhân', 'Trao đổi y khoa do bệnh viện đảm nhiệm; đối tác chỉ điều phối tại địa phương'],
    cta: 'Trao đổi hợp tác'
  },

  contact: {
    eyebrow: 'Liên hệ',
    title: 'Cho chúng tôi biết tình trạng của bạn. Chúng tôi trả lời trong 4 giờ.',
    sub: 'Gửi hồ sơ bệnh án, hoặc chỉ cần mô tả tình huống bằng ngôn ngữ của bạn. Xem trước lần đầu không tính phí và không có nghĩa vụ gì sau đó.',
    wayEmail: 'Email (ưu tiên khi gửi hồ sơ bệnh án)',
    wayHours: 'Giờ làm việc',
    wayHoursV: '9:00 – 21:00 GMT+8, bảy ngày mỗi tuần',
    waySpeed: 'Phản hồi đầu tiên',
    waySpeedV: 'Trong vòng 4 giờ',
    wayBase: 'Đặt tại',
    wayBaseV: 'Quảng Châu, Trung Quốc',
    formTitle: 'Gửi yêu cầu tư vấn',
    fName: 'Họ và tên', fNamePh: 'Ví dụ: Nguyễn Văn A',
    fCountry: 'Quốc gia / vùng lãnh thổ', fCountryPh: 'Ví dụ: Việt Nam',
    fContact: 'Email hoặc WhatsApp',
    fType: 'Bạn cần hỗ trợ gì?',
    fTypeOpts: ['Điều trị ung thư', 'Ý kiến thứ hai / hội chẩn đa chuyên khoa', 'Tim mạch', 'Ngoại thần kinh', 'Cơ xương khớp', 'Khám sức khỏe cao cấp', 'Phục hồi Đông y', 'Hợp tác kênh', 'Khác'],
    fMessage: 'Mô tả ngắn tình trạng của bạn',
    fMessagePh: 'Chẩn đoán, bác sĩ ở nhà nói gì, bạn đã thử những gì, và bạn hy vọng đi vào khi nào…',
    fSubmit: 'Tạo email tư vấn của tôi',
    fNote: 'Biểu mẫu này không có máy chủ phía sau — khi nhấn nút, trình email của chính bạn sẽ mở ra với nội dung đã điền sẵn, nên hồ sơ của bạn không bao giờ nằm trên máy chủ bên thứ ba. Nếu bạn có file hình ảnh hoặc giải phẫu bệnh, hãy đính kèm vào email đó (DICOM, PDF hoặc ảnh chụp đều được).',
    fOkTitle: 'Bản nháp email tư vấn đã sẵn sàng',
    fOkText: 'Trình email của bạn sẽ mở ra với nội dung đã điền. Nếu không có gì xảy ra, vui lòng cho phép cửa sổ bật lên, hoặc gửi email trực tiếp cho chúng tôi.',
    stepsTitle: 'Sau khi gửi sẽ có chuyện gì',
    steps: ['Một điều phối viên nói tiếng của bạn phản hồi trong 4 giờ', 'Bạn gửi những hồ sơ bệnh án hiện có', 'Bệnh viện xem trước và đưa ra ý kiến', 'Bạn gặp bác sĩ qua video — rồi bạn quyết định']
  },

  footer: {
    about: 'Nền tảng giới thiệu y tế quốc tế Jiuying kết nối bệnh nhân quốc tế với các bệnh viện hạng A tuyến trung ương của Trung Quốc. Chúng tôi phụ trách lộ trình — hồ sơ, ghép bệnh viện, tư vấn video, visa, đón tiếp và theo dõi; còn y khoa thì do bệnh viện đảm nhiệm.',
    exploreT: 'Khám phá', servicesT: 'Những gì chúng tôi sắp xếp', contactT: 'Liên hệ',
    services: ['Xạ trị chính xác', 'Ý kiến thứ hai đa chuyên khoa', 'Tim mạch', 'Ngoại thần kinh', 'Cơ xương khớp', 'Khám sức khỏe cao cấp', 'Phục hồi Đông y', 'Hợp tác kênh'],
    legal: 'Tuyên bố miễn trừ: trang web này là dịch vụ thông tin và điều phối giới thiệu, không cấu thành tư vấn y khoa, chẩn đoán, khuyến nghị phác đồ điều trị hay cam kết bất kỳ kết quả lâm sàng nào. Chỉ định, phác đồ và rủi ro điều trị do bệnh viện tiếp nhận giải thích cho bệnh nhân theo pháp luật. Các trường hợp được đăng đã qua ủy quyền của bệnh nhân và đã ẩn danh. Khách hàng từ khu vực Đài Loan của Trung Quốc được phục vụ theo các điều khoản như mọi khu vực khác.',
    rights: 'Bảo lưu mọi quyền.',
    regions: 'Phục vụ bệnh nhân tại Đông Nam Á, Đông Á, châu Âu, châu Mỹ, Trung Đông, Nam Á, châu Phi và châu Đại Dương.'
  },

  common: {
    skip: 'Chuyển tới nội dung chính', close: 'Đóng', menu: 'Menu',
    langLabel: 'Ngôn ngữ', langHint: 'Chọn ngôn ngữ của bạn',
    top: 'Về đầu trang', required: 'Bắt buộc',
    switchText: 'Xem trang này bằng {lang}'
  },

  toast: {
    title: 'Chúng tôi đã chọn ngôn ngữ và giao diện phù hợp với khu vực của bạn',
    body: 'Dựa trên vị trí kết nối, trang đã được chuyển sang {lang}. Bạn có thể đổi bất cứ lúc nào từ menu ở góc trên bên phải.',
    keep: 'Giữ nguyên', change: 'Thay đổi'
  }

  });
})();
