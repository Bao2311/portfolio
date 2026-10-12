export const myProjects = [
  {
    id: 1,
    title: "SpeakVN Journey",
    badge: "Capstone Project @ FPT Software · 01/2026 – 08/2026",
    role: "Full-stack Developer (Backend & AI Integration Lead)",
    description:
      "Nền tảng EdTech chuyên biệt chẩn đoán và chữa ngọng 6 cặp âm tiếng Việt dễ mắc lỗi nhất theo 3 phương ngữ (Bắc - Trung - Nam). Tích hợp AI Pipeline 3 tầng: ASR Whisper nhận diện giọng nói, LLM Llama 3.3 70B (Groq) chẩn đoán lỗi ngữ âm và phản hồi chuyên sâu, kết hợp FPT.AI Voice v5 đồng bộ mô phỏng khẩu hình 2.5D/3D Viseme thời gian thực.",
    metrics: [
      { label: "AI Pipeline 3 Tầng", value: "Whisper + Llama 3.3", hint: "Groq 70B & FPT.AI" },
      { label: "RESTful Endpoints", value: "30+ APIs", hint: "CRUD, Auth & Tournament" },
      { label: "Database PostgreSQL", value: "35+ Tables", hint: "Liquibase Migrations" },
      { label: "Deploy Production", value: "Live Online", hint: "Vercel · Render · Neon" },
    ],
    highlights: [
      "AI Pipeline 3 tầng chuyên sâu: Tầng 1 thu âm & chuẩn hóa audio 16kHz đưa qua ASR Whisper nhận diện văn bản (rawText); Tầng 2 dùng LLM Llama 3.3 70B Versatile (Groq API, fallback Llama 3.1 8B) đối chiếu ngữ âm theo 6 bộ tag lỗi phương ngữ (N/L, D/GI/R, TR/CH, S/X, V/D, Hỏi/Ngã), chấm điểm accuracy (0-100) và xuất feedback vị trí đặt lưỡi/khẩu hình chi tiết; Tầng 3 dùng FPT.AI Voice v5 (3 giọng chuẩn vùng miền) kèm cache in-memory và fallback Web Speech API, đồng bộ animation khẩu hình 2.5D/3D Viseme.",
      "Kiến trúc Backend Spring Boot 3 theo Clean Architecture: thiết kế & triển khai hơn 30+ RESTful API endpoints phân tầng chặt chẽ (Controller - Service - Repository - DTO), tích hợp Swagger/OpenAPI documentation chi tiết.",
      "Cơ sở dữ liệu quan hệ PostgreSQL 35+ bảng: thiết kế chuẩn hóa, tối ưu hóa Indexing nâng cao hiệu năng truy vấn; quản lý schema migration tự động và kiểm soát phiên bản qua Liquibase.",
      "Bảo mật đa tầng với Spring Security & JWT kép (Access & Refresh tokens), phân quyền RBAC 3 vai trò (Admin / Educator / Learner), tích hợp Google OAuth2 SSO an toàn.",
      "Giao tiếp thời gian thực 2 chiều với WebSocket (STOMP protocol) phục vụ hệ thống Chat đa phòng và Đấu trường đối kháng phát âm trực tuyến (Tournament) không độ trễ.",
      "Môi trường triển khai Production: Frontend triển khai trên Vercel, Backend container hóa Docker chạy trên Render Cloud, Database trên Neon Serverless PostgreSQL (AWS Singapore), media lưu trữ qua Cloudinary & Firebase Storage.",
    ],
    subDescription: [
      "Kiến trúc Backend Spring Boot 3 theo Clean Architecture: thiết kế & triển khai 30+ RESTful APIs (Auth, User, Educator, Admin, Tournament, Leaderboard, AI Feedback, Real-time Chat).",
      "Tích hợp AI Pipeline 3 tầng: ASR Whisper nhận diện giọng nói, LLM Llama 3.3 70B Versatile (Groq API) chẩn đoán lỗi ngữ âm 6 cặp âm phương ngữ, FPT.AI Voice v5 & Web Speech API đồng bộ khẩu hình 2.5D/3D Viseme.",
      "Thiết kế cơ sở dữ liệu PostgreSQL gồm 35+ bảng tối ưu hóa quan hệ và chỉ mục, quản lý schema migration tự động bằng Liquibase.",
      "Bảo mật đa tầng với Spring Security, JWT kép, RBAC 3 vai trò (Admin / Educator / Learner) và Google OAuth2 SSO.",
      "Giao tiếp thời gian thực 2 chiều với WebSocket (STOMP) cho Chat phòng và Giải đấu phát âm trực tuyến (Tournament).",
      "Hạ tầng Production hoàn chỉnh: Frontend trên Vercel, Backend Docker trên Render, Database trên Neon Serverless PostgreSQL.",
    ],
    href: "https://speak-vn.vercel.app/",
    github: "https://github.com/Bao2311/SpeakVN",
    liveDemo: "https://speak-vn.vercel.app/",
    image: "/assets/projects/speakvn-showcase.png",
    tags: [
      {
        id: 1,
        name: "Java 17",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "Spring Boot 3",
        path: "/assets/logos/springboot.svg",
      },
      {
        id: 3,
        name: "PostgreSQL (Neon)",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "AI (Whisper · Llama 3.3)",
        path: "",
      },
      {
        id: 5,
        name: "React 19 / Vite",
        path: "/assets/logos/react.svg",
      },
      {
        id: 6,
        name: "Docker · Render",
        path: "/assets/logos/docker.svg",
      },
      {
        id: 7,
        name: "WebSocket STOMP",
        path: "",
      },
    ],
  },
  {
    id: 2,
    title: "Cinema Ticket Booking System",
    badge: "Mock Project @ FPT Software · 01/2025 – 05/2025",
    role: "Full-stack Developer (ASP.NET Core & React)",
    description:
      "Hệ thống full-stack thương mại điện tử đặt vé xem phim trực tuyến thời gian thực với sơ đồ chọn ghế trực quan, cổng thanh toán PayOS xử lý giao dịch tự động qua Webhook và xuất vé điện tử mã QR check-in qua email.",
    metrics: [
      { label: "Backend API", value: "22 Controllers", hint: "Repository & Unit of Work" },
      { label: "Cổng Thanh Toán", value: "PayOS Webhook", hint: "Giao dịch bảo mật tức thì" },
      { label: "Vé Điện Tử", value: "QR Check-in", hint: "MailKit/SMTP tự động gửi" },
      { label: "Deploy Production", value: "Live Online", hint: "Vercel · Render · Neon" },
    ],
    highlights: [
      "Kiến trúc Backend ASP.NET Core (.NET 9) với 22 Controllers phân tách nghiệp vụ chặt chẽ theo Repository Pattern & Unit of Work, giảm tối đa phụ thuộc và bảo trì dễ dàng.",
      "Xử lý vòng đời đặt vé xem phim hoàn chỉnh: sơ đồ ghế phòng chiếu tương tác trực quan, cơ chế khóa giữ ghế tạm thời chống xung đột đặt trùng ghế (race condition), tính toán hóa đơn linh hoạt.",
      "Tích hợp cổng thanh toán trực tuyến PayOS qua Webhook server-to-server xử lý trạng thái giao dịch tự động tức thì, bảo mật dữ liệu giao dịch tuyệt đối.",
      "Tự động hóa vé điện tử: MailKit/SMTP tự động sinh mã QR check-in bảo mật một lần và gửi thông tin vé điện tử chi tiết trực tiếp đến hộp thư khách hàng.",
      "Dashboard quản trị Admin đa chiều: tích hợp Cloudinary lưu trữ poster/media tốc độ cao, biểu đồ phân tích doanh thu và tỉ lệ lấp đầy phòng chiếu bằng Chart.js.",
      "Môi trường triển khai Production: Frontend triển khai trên Vercel, Backend Docker Web API chạy trên Render, Database trên Neon PostgreSQL / SQL Server.",
    ],
    subDescription: [
      "Kiến trúc Backend ASP.NET Core (.NET 9) với 22 Controllers phân chia nghiệp vụ chặt chẽ theo Repository Pattern & Unit of Work.",
      "Quản lý vòng đời đặt vé xem phim: hiển thị suất chiếu, sơ đồ chọn ghế trực quan, thanh toán trực tuyến qua cổng PayOS với webhook phản hồi tức thì.",
      "Xác thực và phân quyền 3 vai trò (Admin, Staff, Customer) qua JWT Bearer token, mã hóa dữ liệu an toàn.",
      "Tích hợp Cloudinary lưu trữ poster/media, MailKit/SMTP tự động gửi vé điện tử kèm mã QR check-in qua email.",
      "Xây dựng Dashboard thống kê doanh thu đa chiều, tỉ lệ lấp đầy phòng chiếu bằng biểu đồ Chart.js trực quan.",
      "Deploy hoàn chỉnh lên môi trường Production: Vercel (Frontend), Render (Backend API), Neon Serverless PostgreSQL (Database).",
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
        name: "ASP.NET Core (.NET 9)",
        path: "/assets/logos/dotnetcore.svg",
      },
      {
        id: 3,
        name: "EF Core",
        path: "/assets/logos/efcore.png",
      },
      {
        id: 4,
        name: "PostgreSQL (Neon) / SQL Server",
        path: "/assets/logos/microsoftsqlserver.svg",
      },
      {
        id: 5,
        name: "PayOS Gateway",
        path: "",
      },
      {
        id: 6,
        name: "TailwindCSS · React",
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

export const awards = [
  {
    id: 1,
    title: "Học Bổng 30% Học Phí Toàn Khóa Đại Học FPT",
    issuer: "FPT University",
    date: "2022 — 2026",
    description: "Học bổng tài năng 30% học phí toàn khóa học chuyên ngành Kỹ thuật Phần mềm (Chương trình đào tạo Kỹ sư Cầu nối Hàn Quốc) dành cho sinh viên có thành tích đầu vào và học tập xuất sắc.",
    badge: "Học bổng 30% Toàn Khóa",
    icon: "🎓",
  },
  {
    id: 2,
    title: "Học Bổng Kỹ Sư Cầu Nối Hàn Quốc (8.000.000 VNĐ)",
    issuer: "FPT Software (FPT Software Academy)",
    date: "2024 — 2025",
    description: "Đạt học bổng xuất sắc trị giá 8 triệu đồng trong chương trình đào tạo Kỹ sư cầu nối Hàn Quốc (BrSE Korea Talent Program) do FPT Software tuyển chọn và tài trợ.",
    badge: "Học bổng 8.000.000 VNĐ",
    icon: "🏆",
  },
];

export const experiences = [
  {
    title: "Fresher Full-stack Developer",
    job: "FPT Software",
    date: "01/2026 — 08/2026",
    contents: [
      "Phát triển backend cho SpeakVN - Nền tảng chẩn đoán và chữa ngọng 6 cặp âm tiếng Việt phương ngữ tích hợp AI sử dụng Java 17 & Spring Boot 3 theo Clean Architecture.",
      "Tích hợp AI Pipeline 3 tầng: ASR Whisper nhận diện âm thanh, LLM Llama 3.3 70B (Groq) chẩn đoán lỗi ngữ âm và phản hồi khẩu hình chi tiết, FPT.AI Voice v5 đồng bộ mô phỏng 2.5D/3D Viseme.",
      "Thiết kế & triển khai hơn 30+ RESTful API endpoints, tối ưu truy vấn dữ liệu PostgreSQL 35+ bảng qua Spring Data JPA và Liquibase schema migrations.",
      "Thiết lập cơ chế phân quyền bảo mật nhiều cấp bậc (Admin, Educator, Learner) sử dụng JWT kép & Spring Security, Google OAuth2 SSO.",
      "Tích hợp WebSocket (STOMP protocol) cho hệ thống chat real-time và đấu trường thi đấu phát âm trực tuyến (Tournament).",
      "Container hóa bằng Docker, triển khai production lên Cloud Render, Vercel và Neon Serverless PostgreSQL.",
    ],
  },
  {
    title: "Sinh viên Kỹ thuật Phần mềm (Đại học FPT)",
    job: "FPT University (Hướng Kỹ sư Cầu nối Hàn Quốc)",
    date: "2022 — 2026",
    contents: [
      "🏆 Đạt Học bổng 30% học phí toàn khóa học tại Đại học FPT chuyên ngành Kỹ thuật Phần mềm.",
      "🎖️ Đạt Học bổng 8.000.000 VNĐ trong chương trình đào tạo Kỹ sư Cầu nối Hàn Quốc (BrSE) do FPT Software tài trợ.",
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
