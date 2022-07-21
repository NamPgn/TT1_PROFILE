const data_job = [
    {
        id: 1,
        icon: "fa-solid fa-anchor-circle-xmark",
        name: "Front-end Development",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
    },
    {
        id: 2,
        icon: "fa-brands fa-autoprefixer",
        name: "Graphic Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
    },
    {
        id: 3,
        icon: "fa-solid fa-bahai",
        name: "learn about",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
    },
    {
        id: 4,
        icon: "fa-solid fa-baseball-bat-ball",
        name: "Play game",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condi."
    },
]
const data_timeline = [
    {
        id: 1,
        title: "Thử thách 1",
        name: "Thử thách 1: Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam",
        time: "3 Ngày (24 giờ)",
        detail_tt: "https://replit.com/join/afnsfrzczk-pham-giang-namg",
        yc_cb: "1.Cách sử dụng FTP  (sử dụng công cụ filezilla) để quản lý code   trên server. </br> 2. Cách sử dụng Javascript để tạo timeline. </br> 3. Tư duy tổng quan vấn đề khi tổng hợp lại thông tin. </br> 4. Tư duy sáng tạo và khả năng thẩm mỹ khi thiết kế",
        teamplate: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam",
        reponse: "- Web </br>- Màn hình </br>- Thuyết trình </br>- 10p",
        yc_bb: "<b>Yêu cầu bắt buộc:</b> </br> 1. Nội dung website phải có đầy đủ các mục: </br> 1.1. Giới thiệu thông tin bản thân; </br> 1.2. Các kỹ năng mong muốn đạt được sau khi thực tập; </br> 1.3. Thông tin các thử thách đã thực hiện ở I&E được thể hiện ở dạng timeline bằng Javascript: Gồm đầy đủ các nội dung: </br>- Thử thách số; </br> - Tên thử thách; </br> - Đường link giao diện của thử thách (Nếu 1 thử thách có nhiều link thì cần dẫn link đầy đủ. Link các thử thách sau sẽ được cập nhật khi bắt đầu thực hiện).</br> - Các nội dung bổ sung khác tùy chọn. </br> 2.File indexphải được up lên folder ngoài cùng của FTP mà không tạo thư mục con. Link website của thử thách 2 có dạng: [tênTTS].thuctap.inevn.com </br> (VD: nguyendinhhuy.thuctap.inevn.com). Các thử thách khác sẽ được up vào các thư mục riêng có dạng </br> [tênTTS].thuctap.inevn.com/[tênThư Mục]/index.html </br> Yêu cầu bổ sung: </br> 1. Giao diện website thể hiện được sự sáng tạo của bản thân.</br> 2. Responsive tốt trên tất cả các trình duyệt và thiết bị. </br> 3. Cập nhật tất cả thử thách và bổ sung thường xuyên trong quá trình thực tập. </br> 4. Nộp bài qua FTP hằng ngày.",
        detail_time: "09/03",
        tt: "Thuyết trình"
    },
    {
        id: 2,
        title: "Thử thách 2",
        name: "Thử thách 2: Sử dụng HTML, CSS, Javascript viết  minigame theo chủ đề game bốc thăm",
        time: "5 Ngày (35 giờ)",
        detail_tt: "./detail.html",
        yc_cb: "1. Rèn luyện tư duy logic. </br> 2. Bổ sung kiến thức Javascript",
        teamplate: "Sử dụng HTML, CSS, Javascript viết  minigame theo chủ đề game bốc thăm",
        reponse: "- Web </br>- Màn hình </br>- Thuyết trình </br>- 15p",
        yc_bb: "<b>Yêu cầu bắt buộc:</b> </br> 1.  Giao diện có thể tham khảo các game gốc đã có hoặc sáng tạo thêm.: </br> 2. Yêu cầu tính năng: theo các tính năng đã có của game gốc. </br> 3. Game hoạt động đúng về logic. </br> 4.  Game có thể thao tác trên trình duyệt web máy tính và giao diện điện thoại. </br> 5. Nộp bài qua FTP hàng ngày. </br> 6. Cập nhật link trên Web Thử thách 1.",
        detail_time: "09/03",
        tt: "Thuyết trình"
    },
    {
        id: 3,
        title: "Thử thách 3",
        name: "Thử thách 3: Được cung cấp và đào tạo quy chuẩn code, thư viện CSS của Công ty. Sử dụng quy chuẩn code được đào tạo để thiết kế 02 giao diện theo mẫu thiết kế được cung cấp.",
        time: "5 Ngày (35 giờ)",
        detail_tt: "./detail.html",
        yc_cb: "1.Biết cách sử dụng thư viện CSS của Công ty trong thực hiện thử thách. </br> 2. Biết và ứng dụng được các quy chuẩn code của Công ty (quy chuẩn đặt biến,…)",
        teamplate: "Được cung cấp và đào tạo quy chuẩn code, thư viện CSS của Công ty. Sử dụng   quy chuẩn code được đào tạo để thiết kế 02 giao diện theo mẫu thiết kế được   cung cấp. ",
        reponse: "- Web </br>- Màn hình </br>- Thuyết trình </br>- 15p",
        yc_bb: "<b>Yêu cầu bắt buộc:</b> </br> 1.. Sử dụng quy chuẩn và thư viện CSS của Công ty. </br> 2. Nội dung và hình ảnh phù hợp, có tính responsive và khả thi. </br> 3. Các website hoàn thiện ở mức độ cơ bản trở lên về giao diện. </br> 4. Nộp bài qua FTP hàng ngày. </br> 5. Cập nhật link trên Web Thử thách 2. </br> 6.  Tham gia review code định kỳ.",
        detail_time: "09/03",
        tt: "Thuyết trình"
    },
    {
        id: 4,
        title: "Thử thách 4",
        name: "Thử thách 4: Sử dụng INEVO để thiết kế 01 website động lấy dữ liệu thực tế từ hệ thống nội bộ ra website, theo bản thiết kế đã được cung cấp",
        time: "35 Ngày (35 giờ)",
        detail_tt: "./detail.html",
        yc_cb: "1.Cách sử dụng FTP  (sử dụng công cụ filezilla) để quản lý code   trên server. </br> 2. Cách sử dụng Javascript để tạo timeline. </br> 3. Tư duy tổng quan vấn đề khi tổng hợp lại thông tin. </br> 4. Tư duy sáng tạo và khả năng thẩm mỹ khi thiết kế",
        teamplate: "Lập 01 website giới thiệu về bản thân (portfolio) và thông tin quá trình thực tập tại I&E Vietnam",
        reponse: "- Web </br>- Màn hình </br>- Thuyết trình </br>- 10p",
        yc_bb: "<b>Yêu cầu bắt buộc:</b> </br> 1. Nội dung website phải có đầy đủ các mục: </br> 1.1. Giới thiệu thông tin bản thân; </br> 1.2. Các kỹ năng mong muốn đạt được sau khi thực tập; </br> 1.3. Thông tin các thử thách đã thực hiện ở I&E được thể hiện ở dạng timeline bằng Javascript: Gồm đầy đủ các nội dung: </br>- Thử thách số; </br> - Tên thử thách; </br> - Đường link giao diện của thử thách (Nếu 1 thử thách có nhiều link thì cần dẫn link đầy đủ. Link các thử thách sau sẽ được cập nhật khi bắt đầu thực hiện).</br> - Các nội dung bổ sung khác tùy chọn. </br> 2.File indexphải được up lên folder ngoài cùng của FTP mà không tạo thư mục con. Link website của thử thách 2 có dạng: [tênTTS].thuctap.inevn.com </br> (VD: nguyendinhhuy.thuctap.inevn.com). Các thử thách khác sẽ được up vào các thư mục riêng có dạng </br> [tênTTS].thuctap.inevn.com/[tênThư Mục]/index.html </br> Yêu cầu bổ sung: </br> 1. Giao diện website thể hiện được sự sáng tạo của bản thân.</br> 2. Responsive tốt trên tất cả các trình duyệt và thiết bị. </br> 3. Cập nhật tất cả thử thách và bổ sung thường xuyên trong quá trình thực tập. </br> 4. Nộp bài qua FTP hằng ngày."
    }
]
const data_timeline_2 = [
    {
        id: 5,
        title: "Thử thách 5",
        name: "Thử thách 5: Website thiết kế đúng với bản thiết kế đã được cung cấp, banner hiển thị ở dạng slides. Sử dụng thư viện CSS và quy tắc chuẩn code của công ty,..",
        time: "9 Ngày (63 giờ)",
        detail_tt: "./detail.html",
        yc_cb: "1. Hiểu được cách thức để triển khai một website hoàn chỉnh với đầy đủ tính năng. </br> 2. Được cung cấp các khái niệm và cách triển khai caches, sitemap. </br> 3. Sử dụng được bảng quản trị để quản lý banner, đối tác. </br> 4. Củng cố các kiến thức INEVO, Javascript và CSS.",
        teamplate: "Sử dụng các kiến thức đã được đào tạo, bổ sung đầy đủ các trang con và   tính năng nâng cao cho website đã thực hiện tại TT4; Triển khai tạo một   website mới với đầy đủ tính năng hoàn chỉnh theo mẫu giao diện được cung cấp",
        reponse: "- Web </br>- Màn hình </br>- Thuyết trình </br>- 15p",
        yc_bb: "<b>Yêu cầu bắt buộc:</b> </br> 1. Website thiết kế đúng với bản thiết kế đã được cung cấp, banner hiển thị ở dạng slides. </br> 2. Sử dụng thư viện CSS và các quy chuẩn code của Công ty. </br> 3. Yêu cầu tính năng: Dữ liệu được lấy tự động từ chuyên mục đã được phân   quyền trên INEVO để hiển thị ra website. </br> 4. Yêu cầu nâng cao: Website thực hiện được tất cả các tính năng hiển thị trên giao diện (VD Tìm kiếm, Xem thêm, Xem bài viết, Phóng to ảnh,…).</br> 5. Website có chế độ caches. </br> 6.  Website có thiết kế Sitemap. </br> 7. Nộp bài qua FTP hằng ngày. </br> 8. Cập nhật link trên Web Thử thách 1. </br> 9. Tham gia review code định kỳ.",
        detail_time: "26/04",
        tt: "Thuyết trình"
    },
    {
        id: 6,
        title: "Thử thách 6",
        name: "Thử thách 6: Thiết kế giao diện phần mềm trên hệ thống nội bộ INEVO theo bản thiết kế được cung cấp",
        time: "11 Ngày (79 giờ)",
        detail_tt: "./detail.html",
        yc_cb: "1.  Biết sử dụng “Bảng quản trị” trên hệ thống INEVO để triển khai và tùy biến một giao diện phần mềm (frontend). </br> 2. Hiểu được các khái niệm về định   nghĩa, thuộc tính, quan hệ,… trong hệ thống INEVO. </br> 3. Củng cố các kiến thức INEVO, JS.",
        teamplate: "Thiết kế giao diện phần mềm trên hệ thống nội bộ INEVO theo bản thiết kế   được cung cấp",
        reponse: "- Web </br>- Màn hình </br>- Thuyết trình </br>- 15p",
        yc_bb: "<b>Yêu cầu bắt buộc:</b> </br> 1. Giao diện được thiết kế dựa theo hệ thống bảng quản trị trên hệ thống INEVO. </br> 2. Giao diện hiển thị đúng theo thiết kế. </br> 3. Game hoạt động đúng về logic. </br> 4. Yêu cầu tính năng: Chưa cần sử dụng được các tính năng. </br> 5. Nộp bài qua FTP hằng ngày.</br> 6. Cập nhật link trên Web Thử thách 1. </br> 7. Tham gia review code định kỳ.",
        detail_time: "09/03",
        tt: "Thuyết trình"
    },
    {
        id: 7,
        title: "Thử thách 7",
        name: "Thử thách 7: Sử dụng Bảng quản trị trên hệ thống mạng nội bộ INEVO để thực hiện phần mềm quản lý bài viết của bản thân trên hệ thống INEVO",
        time: "11 Ngày (83 giờ)",
        detail_tt: "./detail.html",
        yc_cb: "1. Biết sử dụng “Bảng quản trị” trên hệ thống INEVO trong thiết kế phần mềm. </br> 2. Biết cách cấu hình các cột   (thuộc tính) trong bảng quản trị. </br> 3. Củng cố các kiến thức INEVO, JS.",
        teamplate: "Sử dụng Bảng quản trị trên hệ thống mạng nội bộ INEVO để thực hiện phần mềm quản lý bài viết của bản thân trên hệ thống INEVO ",
        reponse: "- Web </br>- Màn hình </br>- Thuyết trình </br>- 15p",
        yc_bb: "<b>Yêu cầu bắt buộc:</b> </br> 1.  Giao diện phần mềm đúng theo bản thiết kế được cung cấp. </br> 2. Tên phần mềm được đặt theo quy tắc: <b>Quản lý bài viết – [Tên TTS] (VD:Quản lý bài viết – Nguyễn Đình Huy)</b> </br> 3. Dữ liệu thật/cập nhật tự động. </br> 4. Quản lý đầy đủ các thông tin được yêu cầu: Tiêu đề, người đăng, thời gian đăng, chuyên mục… (chi tiết theo giao diện thiết kế). <.br> 5.Có đầy đủ bộ lọc tìm kiếm theo: Tên bài viết, chuyên mục, thời gian   đăng,… (chi tiết theo giao diện thiết kế). </br> 6. Nộp bài qua FTP hằng ngày. </br> 7. Cập nhật link trên Web Thử thách 2 </br> 8. Tham gia review code định kỳ.",
        detail_time: "09/03",
        tt: "Thuyết trình"
    },
]


const img_data=[
    {
        id:1,
        img:"./src/img/all/img-1.jpg",
        value:10,
        data_img:"img/all/img-1.jpg",
        concess:"Design"
    },
    {
        id:2,
        img:"./src/img/all/img-2.jpg",
        value:20,
        data_img:"img/all/img-2.jpg",
        concess:"Development"
    },
    {
        id:3,
        img:"./src/img/all/img-3.jpg",
        value:30,
        data_img:"img/all/img-3.jpg",
        concess:"Print"
        
    },
    {
        id:4,
        img:"./src/img/all/img-4.jpg",
        value:10,
        data_img:"img/all/img-4.jpg",
        concess:"Design"
    },
    {
        id:5,
        img:"./src/img/all/img-5.jpg",
        value:10,
        data_img:"img/all/img-5.jpg",
        concess:"Design"
    },
    {
        id:6,
        img:"./src/img/all/img-6.jpg",
        value:20,
        data_img:"img/all/img-6.jpg",
        concess:"Print"
    },
]
export {
    data_job, data_timeline, data_timeline_2,img_data
}
