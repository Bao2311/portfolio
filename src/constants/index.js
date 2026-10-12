export const myProjects = [
  {
    id: 1,
    title: "SpeakVN Journey",
    badge: "Capstone @ FPT Software · 01/2026 – 08/2026",
    description:
      "Nền tảng chữa ngọng và học tiếng Việt theo từng địa phương (Bắc - Trung - Nam) tích hợp AI đánh giá phát âm thông minh.",
    subDescription: [
      "Kiến trúc Backend Spring Boot: thiết kế & triển khai hơn 30+ RESTful API (Auth, User, Educator, Admin, Tournament, Leaderboard, AI Feedback, Real-time Chat).",
      "Thiết kế cơ sở dữ liệu PostgreSQL gồm 35+ bảng tối ưu hóa quan hệ và chỉ mục, quản lý schema migration bằng Liquibase.",
      "Bảo mật đa tầng với JWT & Spring Security RBAC đa vai trò (Admin / Educator / Learner), tích hợp Google OAuth2 SSO.",
      "Giao tiếp thời gian thực 2 chiều với WebSocket (STOMP) cho hệ thống phòng Chat và giải đấu phát âm (Tournament).",
      "Tích hợp Firebase Admin SDK, xuất báo cáo động Excel (Apache POI) & chứng nhận PDF (iTextPDF), đóng gói Docker container.",
    ],
    href: "https://github.com/Bao2311/SpeakVN",
    github: "https://github.com/Bao2311/SpeakVN",
    liveDemo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "Java 17",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "Spring Boot",
        path: "/assets/logos/springboot.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "React 18",
        path: "/assets/logos/react.svg",
      },
      {
        id: 5,
        name: "Docker",
        path: "/assets/logos/docker.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Cinema Ticket Booking System",
    badge: "Team Project · 01/2025 – 05/2025",
    description:
      "Hệ thống full-stack đặt vé xem phim trực tuyến thời gian thực với sơ đồ ghế tương tác, cổng thanh toán PayOS và mã QR check-in.",
    subDescription: [
      "Kiến trúc Backend ASP.NET Core (.NET 9) với 22 Controllers phân chia nghiệp vụ chặt chẽ theo Repository Pattern & Unit of Work.",
      "Quản lý vòng đời đặt vé xem phim: hiển thị suất chiếu, sơ đồ chọn ghế trực quan, thanh toán trực tuyến qua cổng PayOS (sandbox) với webhook phản hồi tức thì.",
      "Xác thực và phân quyền 3 vai trò (Admin, Staff, Customer) qua JWT Bearer token, mã hóa dữ liệu an toàn.",
      "Tích hợp Cloudinary lưu trữ poster/media, MailKit/SMTP tự động gửi vé điện tử kèm mã QR check-in qua email.",
      "Xây dựng Dashboard thống kê doanh thu đa chiều, tỉ lệ lấp đầy phòng chiếu bằng biểu đồ Chart.js trực quan.",
    ],
    href: "https://cinema-booking-project-nine.vercel.app/",
    github: "https://github.com/Bao2311/CINEMA-BOOKING-PROJECT",
    liveDemo: "https://cinema-booking-project-nine.vercel.app/",
    image: "/assets/projects/cinema-booking.png",
    tags: [
      {
        id: 1,
        name: "C#",
        path: "/assets/logos/csharp.svg",
      },
      {
        id: 2,
        name: "ASP.NET Core",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "EF Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "SQL Server",
        path: "/assets/logos/microsoftsqlserver.svg",
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/Bao2311",
    icon: "/assets/logos/github.svg",
  },
  {
    name: "Email",
    href: "mailto:lequocbaotxdh@gmail.com",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "LinkedIn",
    href: "https://github.com/Bao2311",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Fresher Full-stack Developer",
    job: "FPT Software",
    date: "01/2026 — 08/2026",
    contents: [
      "Phát triển backend cho SpeakVN - nền tảng học phát âm tiếng Việt theo vùng miền sử dụng Java 17 & Spring Boot.",
      "Thiết kế & triển khai hơn 30+ RESTful API endpoints, tối ưu truy vấn dữ liệu PostgreSQL 35+ bảng qua Spring Data JPA.",
      "Thiết lập cơ chế phân quyền bảo mật nhiều cấp bậc (Admin, Educator, Learner) sử dụng JWT & Spring Security.",
      "Tích hợp WebSocket (STOMP protocol) cho hệ thống chat real-time và phòng thi đấu phát âm trực tuyến.",
      "Kiểm thử API tự động với Swagger/OpenAPI, container hóa bằng Docker và phối hợp quy trình làm việc Agile/Scrum.",
    ],
  },
  {
    title: "Sinh viên Kỹ thuật Phần mềm",
    job: "FPT University (Hướng Kỹ sư cầu nối Hàn Quốc)",
    date: "2022 — 2026",
    contents: [
      "Nắm vững nền tảng khoa học máy tính: Cấu trúc dữ liệu & Thuật toán, Lập trình hướng đối tượng (OOP), Cơ sở dữ liệu quan hệ, Clean Code & Design Patterns (SOLID, Repository, Unit of Work).",
      "Xây dựng thành công các dự án full-stack thực chiến với Spring Boot, ASP.NET Core, React và PostgreSQL / SQL Server.",
      "Đạt chứng chỉ năng lực tiếng Hàn TOPIK 3 (05/2026).",
    ],
  },
];

export const reviews = [
  {
    name: "SpeakVN Team",
    username: "@fptsoftware",
    body: "Khả năng phát triển Backend Spring Boot rất vững vàng, hoàn thành hơn 30 API phức tạp đúng tiến độ và đảm bảo hiệu năng cao.",
    img: "https://robohash.org/speakvn",
  },
  {
    name: "Cinema Booking Project",
    username: "@cinemateam",
    body: "Kiến trúc ASP.NET Core phân tầng sạch sẽ, tích hợp cổng thanh toán PayOS và webhook mượt mà, hỗ trợ đồng đội rất nhiệt tình.",
    img: "https://robohash.org/cinema",
  },
  {
    name: "FPT University Mentor",
    username: "@fptuni",
    body: "Tư duy logic tốt, khả năng tự nghiên cứu và ứng dụng công nghệ hiện đại từ Java, .NET đến React rất nhanh và bài bản.",
    img: "https://robohash.org/mentor",
  },
];

export const mySkills = [
  {
    category: "Backend Development",
    items: [
      { name: "Java 17 / Spring Boot", level: "88%" },
      { name: "C# / ASP.NET Core (.NET 9)", level: "85%" },
      { name: "Entity Framework Core / JPA", level: "85%" },
      { name: "RESTful API & WebSocket (STOMP)", level: "90%" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React 18 / Vite", level: "82%" },
      { name: "TypeScript / JavaScript ES6+", level: "80%" },
      { name: "Tailwind CSS / Ant Design", level: "85%" },
      { name: "Framer Motion / Responsive UI", level: "80%" },
    ],
  },
  {
    category: "Database & DevOps",
    items: [
      { name: "PostgreSQL / SQL Server", level: "85%" },
      { name: "Liquibase / Database Migrations", level: "80%" },
      { name: "Docker & Containerization", level: "75%" },
      { name: "Git / GitHub / Postman / Swagger", level: "88%" },
    ],
  },
  {
    category: "Auth & Cloud Services",
    items: [
      { name: "JWT & Spring Security / RBAC", level: "85%" },
      { name: "PayOS Payment Gateway", level: "85%" },
      { name: "Firebase Admin SDK / Cloudinary", level: "80%" },
      { name: "Tiếng Hàn TOPIK 3 / English Tech", level: "TOPIK 3" },
    ],
  },
];
