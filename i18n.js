const translations = {
  // — Nav —
  nav_about:    { ru: 'О себе',    en: 'About',      vi: 'Giới thiệu' },
  nav_exp:      { ru: 'Опыт',      en: 'Experience',  vi: 'Kinh nghiệm' },
  nav_projects: { ru: 'Проекты',   en: 'Projects',    vi: 'Dự án' },
  nav_skills:   { ru: 'Навыки',    en: 'Skills',      vi: 'Kỹ năng' },

  // — Hero —
  hero_name:    { ru: 'Нгуен Куанг\nТуан', en: 'Nguyen Quang\nTuan', vi: 'Nguyễn Quang\nTuấn' },
  hero_role:    { ru: 'Full-Stack Engineer · 3+ года опыта', en: 'Full-Stack Engineer · 3+ years', vi: 'Full-Stack Engineer · 3+ năm' },
  hero_status:  { ru: 'Открыт к предложениям', en: 'Open to opportunities', vi: 'Sẵn sàng nhận việc' },
  hero_location: { ru: 'Санкт-Петербург, Россия', en: 'Saint Petersburg, Russia', vi: 'Saint Petersburg, Nga' },
  hero_cv:      { ru: 'Скачать резюме', en: 'Download CV', vi: 'Tải CV' },
  hero_stat1:   { ru: 'компании',  en: 'companies',   vi: 'công ty' },
  hero_stat2:   { ru: 'проектов',  en: 'projects',    vi: 'dự án' },
  hero_cta1:    { ru: 'Смотреть проекты', en: 'View Projects', vi: 'Xem dự án' },
  hero_cta2:    { ru: 'Связаться', en: 'Get in touch', vi: 'Liên hệ' },

  // — About —
  about_title:  { ru: 'О себе',   en: 'About Me',    vi: 'Về tôi' },
  about_p1: {
    ru: 'Full-stack разработчик из Вьетнама с двухлетним опытом работы. В настоящее время являюсь студентом первого курса магистратуры в Университете ИТМО по специальности "Информационная безопасность". Увлечен созданием интуитивных веб-приложений и постоянно стремлюсь расширять свои технические знания.',
    en: 'Full-stack developer from Vietnam with two years of experience. I am currently a first-year Master\'s student at ITMO University, majoring in Information Security. I am passionate about creating intuitive web applications and constantly strive to expand my technical knowledge.',
    vi: 'Lập trình viên Full-stack đến từ Việt Nam với hai năm kinh nghiệm. Hiện tại, tôi đang là sinh viên năm nhất hệ Thạc sĩ tại Đại học ITMO chuyên ngành An toàn thông tin. Tôi đam mê xây dựng các ứng dụng web trực quan và không ngừng nỗ lực mở rộng kiến thức kỹ thuật của mình.'
  },
  about_p2: {
    ru: 'В своей работе стараюсь достичь идеального баланса между производительностью, эстетикой и функциональностью. Обладаю хорошими навыками коммуникации и работы в команде, что помогает эффективно взаимодействовать с коллегами и достигать поставленных целей.',
    en: 'In my work, I strive to achieve the perfect balance between performance, aesthetics, and functionality. I have excellent communication and teamwork skills, which helps me effectively collaborate with colleagues and achieve our set goals.',
    vi: 'Trong công việc, tôi luôn cố gắng đạt được sự cân bằng hoàn hảo giữa hiệu suất, tính thẩm mỹ và chức năng. Tôi có kỹ năng giao tiếp và làm việc nhóm cực tốt, giúp tôi tương tác hiệu quả với đồng nghiệp và hoàn thành xuất sắc các mục tiêu đề ra.'
  },
  about_quote: {
    ru: '"Функция хорошего программного обеспечения — делать сложное простым." – Грейди Буч',
    en: '"The function of good software is to make the complex appear to be simple." – Grady Booch',
    vi: '"Chức năng của một phần mềm tốt là làm cho những điều phức tạp trở nên đơn giản." – Grady Booch'
  },
  about_edu:      { ru: 'Образование', en: 'Education',  vi: 'Học vấn' },
  about_uni:      { ru: 'Университет ИТМО', en: 'ITMO University', vi: 'Đại học ITMO' },
  about_master:   { ru: 'Магистратура', en: "Master's",   vi: 'Thạc sĩ' },
  about_bachelor: { ru: 'Бакалавриат', en: "Bachelor's",  vi: 'Cử nhân' },
  about_contacts: { ru: 'Контакты',    en: 'Contact',     vi: 'Liên hệ' },

  // — Experience —
  exp_title: { ru: 'Опыт работы', en: 'Work Experience', vi: 'Kinh nghiệm làm việc' },

  // Job 0: NAMIS
  job0_company: { ru: 'АНО «НАМИС»', en: 'ANO "NAMIS"', vi: 'ANO "NAMIS"' },
  job0_role:    { ru: 'Frontend Developer · Россия', en: 'Frontend Developer · Russia', vi: 'Frontend Developer · Nga' },
  job0_date:    { ru: '05/2025 — наст. время', en: '05/2025 — present', vi: '05/2025 — hiện tại' },
  job0_desc: {
    ru: 'Разработка и поддержка фронтенд-приложений для Национальной ассоциации масштабных инфраструктурных систем.',
    en: 'Development and maintenance of frontend applications for the National Association of Large-Scale Infrastructure Systems.',
    vi: 'Phát triển và bảo trì ứng dụng frontend cho Hiệp hội Hệ thống Hạ tầng Quy mô lớn Quốc gia.'
  },
  job0_duties: {
    ru: ['Разрабатываю внутренние веб-приложения для сотрудников (управление учетными записями, управление персоналом, учет звонков, документооборот и управление сертификатами и др.)', 'Разрабатываю новый функционал согласно требованиям', 'Участвую в проектировании технических и архитектурных решений', 'Занимаюсь рефакторингом и оптимизацией существующего кода', 'Провожу код-ревью младшим разработчикам'],
    en: ['Building internal web applications for employees (account management, HR management, call tracking, document workflow, certificate management, etc.)', 'Developing new features according to requirements', 'Participating in designing technical and architectural solutions', 'Refactoring and optimizing the existing codebase', 'Conducting code reviews for junior developers'],
    vi: ['Xây dựng ứng dụng web nội bộ cho nhân viên (quản lý tài khoản, quản lý nhân sự, quản lý cuộc gọi, luồng tài liệu, quản lý chứng chỉ, v.v.)', 'Phát triển tính năng mới theo yêu cầu', 'Tham gia thiết kế giải pháp kỹ thuật và kiến trúc', 'Refactoring và tối ưu hóa mã nguồn hiện có', 'Review code cho các nhà phát triển junior']
  },

  // Job 1: Enghance
  job1_role: {
    ru: 'Full-stack разработчик (удаленно) · Вьетнам',
    en: 'Full-stack Developer (remote) · Vietnam',
    vi: 'Full-stack Developer (remote) · Việt Nam'
  },
  job1_desc: {
    ru: 'EdTech-стартап, предлагающий курсы английского языка через платформы самообучения для вьетнамских студентов.',
    en: 'EdTech startup offering English language courses through self-learning platforms for Vietnamese students.',
    vi: 'Startup EdTech cung cấp khóa học tiếng Anh qua nền tảng tự học dành cho sinh viên Việt Nam.'
  },
  job1_duties: {
    ru: ['Разрабатывал и развертывал проект (фронтенд и бэкенд)', 'Использовал сервисы AWS (EC2, ECS, RDS, S3, SES, CloudFront)', 'Разрабатывал и внедрял CI/CD процессы', 'Внедрял систему публикации/подписки для межкомпонентного взаимодействия', 'Интегрировал механизм очередей задач для оптимизации приложения', 'Создавал лендинги на Webflow и внутренние инструменты с Retool', 'Проводил код-ревью и осуществлял техническое наставничество для команды'],
    en: ['Developed and deployed the project (frontend and backend)', 'Utilized AWS services (EC2, ECS, RDS, S3, SES, CloudFront)', 'Designed and implemented CI/CD processes', 'Implemented a pub/sub system for inter-component communication', 'Integrated a task queue mechanism for application optimization', 'Created landing pages on Webflow and internal tools with Retool', 'Conducted code reviews and provided technical mentoring for the team'],
    vi: ['Phát triển và triển khai dự án (frontend và backend)', 'Sử dụng các dịch vụ AWS (EC2, ECS, RDS, S3, SES, CloudFront)', 'Thiết kế và triển khai quy trình CI/CD', 'Triển khai hệ thống pub/sub cho giao tiếp giữa các thành phần', 'Tích hợp cơ chế hàng đợi tác vụ để tối ưu hóa ứng dụng', 'Tạo landing page trên Webflow và công cụ nội bộ với Retool', 'Thực hiện code review và hướng dẫn kỹ thuật cho team']
  },

  // Job 2: Viettel
  job2_role: {
    ru: 'Стажёр по облачным технологиям (Программа цифровых талантов Viettel) · Вьетнам',
    en: 'Cloud Intern (Viettel Digital Talent Program) · Vietnam',
    vi: 'Thực tập sinh Cloud (Chương trình Viettel Digital Talent) · Việt Nam'
  },
  job2_desc: {
    ru: 'Выбран из более чем 200 кандидатов для участия в программе цифровых талантов Viettel 2024, занял место в топ-10 в области облачных технологий.',
    en: 'Selected from over 200 candidates for the Viettel Digital Talent 2024 program, ranked in the top 10 in Cloud technologies.',
    vi: 'Được tuyển chọn từ hơn 200 ứng viên cho chương trình Viettel Digital Talent 2024, xếp hạng top 10 trong lĩnh vực Cloud.'
  },
  job2_duties: {
    ru: ['Исследовал и развернул среду разработки в облаке на Kubernetes (Eclipse Che, DevWorkspace Controller)', 'Изучал основные концепции DevSecOps, включая CI/CD, виртуализацию, контейнеризацию, мониторинг, логирование, тестирование и др.', 'Применял популярные инструменты DevOps: Docker, Kubernetes, IAC (Ansible, Vagrant, Helm), мониторинг (Grafana, Prometheus), логирование (Fluentd, Logstash, Elasticsearch, Kibana), CI/CD (GitLab CI/CD, Jenkins), GitOps (ArgoCD)'],
    en: ['Researched and deployed a cloud-based development environment on Kubernetes (Eclipse Che, DevWorkspace Controller)', 'Studied core DevSecOps concepts including CI/CD, virtualization, containerization, monitoring, logging, testing, etc.', 'Applied popular DevOps tools: Docker, Kubernetes, IaC (Ansible, Vagrant, Helm), monitoring (Grafana, Prometheus), logging (Fluentd, Logstash, Elasticsearch, Kibana), CI/CD (GitLab CI/CD, Jenkins), GitOps (ArgoCD)'],
    vi: ['Nghiên cứu và triển khai môi trường phát triển trên nền tảng đám mây Kubernetes (Eclipse Che, DevWorkspace Controller)', 'Nghiên cứu các khái niệm cốt lõi DevSecOps bao gồm CI/CD, ảo hóa, container hóa, giám sát, logging, testing, v.v.', 'Áp dụng các công cụ DevOps phổ biến: Docker, Kubernetes, IaC (Ansible, Vagrant, Helm), monitoring (Grafana, Prometheus), logging (Fluentd, Logstash, Elasticsearch, Kibana), CI/CD (GitLab CI/CD, Jenkins), GitOps (ArgoCD)']
  },
  job2_cert: { ru: 'Сертификат', en: 'Certificate', vi: 'Chứng chỉ' },

  // Job 3: Lectron
  job3_role: {
    ru: 'Стажёр по веб-разработке (удаленно) · Вьетнам',
    en: 'Web Development Intern (remote) · Vietnam',
    vi: 'Thực tập sinh Web Development (remote) · Việt Nam'
  },
  job3_desc: {
    ru: 'Стартап-проект, предлагающий защиту от DDoS-атак для игровых серверов и бэкенд-приложений, которому доверяют тысячи пользователей.',
    en: 'A startup project offering DDoS protection for gaming servers and backend applications, trusted by thousands of users.',
    vi: 'Dự án startup cung cấp dịch vụ chống DDoS cho máy chủ game và ứng dụng backend, được hàng nghìn người dùng tin tưởng.'
  },
  job3_duties: {
    ru: ['Разработал адаптивный и совместимый пользовательский интерфейс для различных устройств', 'Создал лендинг с использованием WordPress, интеграция плагинов для улучшения функциональности', 'Разработал несколько небольших функций для бэкенда и написание модульных тестов'],
    en: ['Developed a responsive and cross-compatible user interface for various devices', 'Built a landing page using WordPress with plugin integration for enhanced functionality', 'Developed several small backend features and wrote unit tests'],
    vi: ['Phát triển giao diện người dùng responsive và tương thích đa thiết bị', 'Xây dựng landing page bằng WordPress, tích hợp plugin để nâng cao chức năng', 'Phát triển một số tính năng nhỏ cho backend và viết unit test']
  },

  // — Projects —
  proj_title: { ru: 'Проекты', en: 'Projects', vi: 'Dự án' },
  proj_more:  { ru: 'Подробнее', en: 'Details', vi: 'Chi tiết' },

  oss_title: { ru: 'Open Source вклад', en: 'Open Source Contributions', vi: 'Đóng góp Open Source' },
  oss_intro: {
    ru: 'Являюсь участником <a href="https://github.com/codex-team" target="_blank" class="text-accent dark:text-accent-dark hover:underline font-medium">CodeX</a> — международной команды разработчиков, создающей open-source инструменты для веба (Editor.js, Hawk и др.). В роли Fullstack-разработчика участвую в разработке продуктов команды.',
    en: 'Member of <a href="https://github.com/codex-team" target="_blank" class="text-accent dark:text-accent-dark hover:underline font-medium">CodeX</a> — an international team of developers building open-source tools for the web (Editor.js, Hawk, etc.). Contributing as a Fullstack Developer on the team\'s products.',
    vi: 'Thành viên của <a href="https://github.com/codex-team" target="_blank" class="text-accent dark:text-accent-dark hover:underline font-medium">CodeX</a> — nhóm lập trình viên quốc tế xây dựng các công cụ open-source cho web (Editor.js, Hawk, v.v.). Đóng góp với vai trò Lập trình viên Fullstack trong các sản phẩm của nhóm.'
  },
  oss_hawk_desc: {
    ru: 'Мониторинг ошибок и исключений для веб-приложений. Вклад в разработку системы трекинга в команде CodeX.',
    en: 'Error and exception monitoring for web applications. Contributed to the tracking system as part of the CodeX team.',
    vi: 'Giám sát lỗi và ngoại lệ cho ứng dụng web. Đóng góp vào hệ thống tracking trong nhóm CodeX.'
  },
  oss_codexui_desc: {
    ru: 'Библиотека UI-компонентов от команды CodeX. Участие в разработке компонентов и системы дизайн-токенов.',
    en: 'UI component library by the CodeX team. Contributed to component development and the design token system.',
    vi: 'Thư viện UI component của nhóm CodeX. Đóng góp phát triển component và hệ thống design token.'
  },

  proj1_name: { ru: 'Система заказов по QR-коду', en: 'QR Code Ordering System', vi: 'Hệ thống đặt hàng QR Code' },
  proj1_desc: {
    ru: 'AI-платформа для ресторанов: заказ через QR, AI-ассистент (GPT + RAG), обработка заказов в реальном времени и панель управления.',
    en: 'AI-powered restaurant platform: QR ordering, GPT-based AI assistant with RAG, real-time order processing, and a full admin dashboard.',
    vi: 'Nền tảng nhà hàng AI: đặt hàng qua QR, trợ lý AI (GPT + RAG), xử lý đơn hàng realtime và bảng điều khiển quản trị toàn diện.'
  },
  proj2_name: { ru: 'Клон Shopee', en: 'Shopee Clone', vi: 'Clone Shopee' },
  proj2_desc: {
    ru: 'Полнофункциональная e-commerce платформа, обеспечивающая бесшовный опыт онлайн-покупок от поиска товаров до безопасного оформления заказа.',
    en: 'A full-featured e-commerce platform delivering a seamless shopping experience from browsing products to secure checkout.',
    vi: 'Sàn thương mại điện tử hoàn chỉnh mang lại trải nghiệm mua sắm xuyên suốt từ tìm kiếm sản phẩm, quản lý giỏ hàng đến thanh toán an toàn.'
  },
  proj3_name: { ru: 'Клон Twitter', en: 'Twitter Clone', vi: 'Clone Twitter' },
  proj3_desc: {
    ru: 'Масштабируемая социальная сеть для микроблогинга, созданная для быстрых взаимодействий, обмена мыслями и трансляции стримов.',
    en: 'A scalable microblogging network designed for real-time engagement, allowing users to share thoughts and stream live videos.',
    vi: 'Hệ thống mạng xã hội vi mô (microblogging) được thiết kế cho sự tương tác tức thì, chia sẻ cảm nghĩ và phát sóng video trực tiếp.'
  },
  proj4_desc: {
    ru: 'Облачная среда разработки корпоративного уровня, предоставляющая мгновенный доступ к настроенным рабочим пространствам прямо в браузере.',
    en: 'An enterprise-grade cloud development environment providing developers with instantly accessible, secure workspaces straight from the browser.',
    vi: 'Môi trường lập trình đám mây cấp doanh nghiệp, cung cấp các workspace được cấu hình sẵn, an toàn và truy cập ngay trên trình duyệt.'
  },
  proj5_desc: { 
    ru: 'Высокодоступная архитектура приложения, полностью автоматизированная: от непрерывного развертывания до мониторинга системы.', 
    en: 'A highly available web architecture completely automated from continuous deployment to robust system monitoring.', 
    vi: 'Kiến trúc ứng dụng web ba lớp với độ sẵn sàng cao, được tự động hóa từ quá trình triển khai liên tục đến giám sát hệ thống chuyên sâu.' 
  },
  proj6_desc: {
    ru: 'Современный лендинг, ориентированный на конверсию: впечатляющий дизайн, плавные анимации и полная адаптивность для вовлечения пользователей.',
    en: 'A sleek, conversion-focused landing page featuring a modern aesthetic, smooth animations, and a fully responsive design.',
    vi: 'Trang đích (landing page) hiện đại tập trung vào tỷ lệ chuyển đổi với giao diện cuốn hút, hiệu ứng tinh tế và tương thích mọi thiết bị.'
  },

  proj7_name: { ru: 'LearnHub', en: 'LearnHub', vi: 'LearnHub' },
  proj7_desc: {
    ru: 'Full-stack платформа онлайн-обучения: курсы с видео, статьями и квизами, оплата, AI-чатбот, Q&A, отзывы и панель аналитики.',
    en: 'Full-stack e-learning platform: courses with video, articles & quizzes, payments, AI chatbot, Q&A, reviews, and an analytics dashboard.',
    vi: 'Nền tảng e-learning full-stack: khóa học video/bài viết/quiz, thanh toán, chatbot AI, Q&A, đánh giá và bảng phân tích.'
  },

  proj8_name: { ru: 'Sticker Studio', en: 'Sticker Studio', vi: 'Sticker Studio' },
  proj8_desc: {
    ru: 'AI-студия для создания стикеров, GIF, фотополосок, коллажей и аватарок. Удаление фона, фильтры, текст/эмодзи-оверлеи и экспорт для мессенджеров.',
    en: 'AI-powered creative studio for stickers, GIFs, photo strips, collages, and avatars. Background removal, filters, text/emoji overlays, and messenger-ready export.',
    vi: 'Studio sáng tạo AI: sticker, GIF, ảnh strip, collage và avatar. Xóa nền, bộ lọc, chèn text/emoji và xuất cho các ứng dụng nhắn tin.'
  },

  proj9_name: { ru: 'Детекция ложных срабатываний SAST', en: 'SAST False Positive Detection', vi: 'Phát hiện False Positive SAST' },
  proj9_desc: {
    ru: 'Магистерская диссертация: использование LLM (GPT-5, Gemini 2.5, DeepSeek R1) для снижения ложных срабатываний в результатах статического анализа кода (OWASP Benchmark + OpenVuln).',
    en: 'Master thesis: leveraging LLMs (GPT-5, Gemini 2.5, DeepSeek R1) to reduce false positives from static analysis tools, evaluated on OWASP Benchmark and OpenVuln datasets.',
    vi: 'Luận văn thạc sĩ: sử dụng LLM (GPT-5, Gemini 2.5, DeepSeek R1) để giảm false positive từ công cụ phân tích tĩnh, đánh giá trên OWASP Benchmark và OpenVuln.'
  },

  // Modal details
  modal1_title: { ru: 'Система заказов по QR-коду', en: 'QR Code Ordering System', vi: 'Hệ thống đặt hàng QR Code' },
  modal1_desc: {
    ru: 'Full-stack AI-платформа для ресторанов: гости сканируют QR-код, общаются с AI-ассистентом, оформляют заказы и оплачивают — всё со смартфона.',
    en: 'A full-stack, AI-powered restaurant platform. Customers scan a QR code, chat with an AI assistant, place orders, and pay — all from their phone.',
    vi: 'Nền tảng nhà hàng full-stack tích hợp AI. Khách quét QR, trò chuyện với trợ lý AI, đặt món và thanh toán — tất cả từ điện thoại.'
  },
  modal1_items: {
    ru: ['AI-ассистент (GPT + DAG Executor) с рекомендациями и заказом через чат', 'RAG-поиск по меню через ChromaDB (vector embeddings)', 'Kanban-доска заказов в реальном времени (WebSockets + FCM)', 'RBAC: Owner, Manager, Staff; управление меню, столами, купонами и блогом', 'Мультиязычность (RU/EN/VI) и оплата через YooKassa'],
    en: ['AI assistant (GPT + DAG Executor) with recommendations & chat ordering', 'RAG-powered menu search via ChromaDB (vector embeddings)', 'Real-time Kanban order board (WebSockets + FCM push notifications)', 'RBAC: Owner, Manager, Staff; menu, table, coupon & blog management', 'Multi-language (RU/EN/VI) and YooKassa payment integration'],
    vi: ['Trợ lý AI (GPT + DAG Executor) với gợi ý và đặt hàng qua chat', 'Tìm kiếm menu RAG qua ChromaDB (vector embeddings)', 'Bảng Kanban đơn hàng realtime (WebSockets + FCM push notifications)', 'RBAC: Owner, Manager, Staff; quản lý menu, bàn, coupon & blog', 'Đa ngôn ngữ (RU/EN/VI) và tích hợp thanh toán YooKassa']
  },
  modal7_title: { ru: 'LearnHub', en: 'LearnHub', vi: 'LearnHub' },
  modal7_desc: {
    ru: 'Full-stack платформа онлайн-обучения, где преподаватели создают курсы с видеоуроками, статьями и автоматически проверяемыми квизами. Студенты могут покупать курсы, отслеживать прогресс, участвовать в Q&A-обсуждениях, оставлять отзывы и получать помощь от AI-чатбота. Включает панель администратора с аналитикой, уведомления в реальном времени, RBAC, систему купонов и интерактивный онбординг.',
    en: 'A full-stack online learning platform where instructors can create and manage courses with video lessons, rich-text articles, and auto-graded quizzes. Students can browse courses, make payments, track progress, participate in Q&A discussions, leave reviews, and get help from an AI chatbot assistant. Includes an admin dashboard with analytics, real-time notifications, role-based access control, coupon system, and an interactive guided tour for onboarding.',
    vi: 'Nền tảng học trực tuyến full-stack nơi giảng viên tạo khóa học với video, bài viết rich-text và quiz tự chấm điểm. Học viên duyệt khóa học, thanh toán, theo dõi tiến độ, tham gia Q&A, đánh giá và nhận hỗ trợ từ chatbot AI. Bao gồm bảng quản trị với phân tích, thông báo realtime, RBAC, hệ thống coupon và tour hướng dẫn tương tác.'
  },
  modal2_title: { ru: 'Клон Shopee', en: 'Shopee Clone', vi: 'Clone Shopee' },
  modal2_desc: {
    ru: 'E-commerce платформа с полнофункциональной системой управления.',
    en: 'Full-featured e-commerce platform with comprehensive management.',
    vi: 'Nền tảng thương mại điện tử đầy đủ tính năng.'
  },
  modal2_items: {
    ru: ['JWT-аутентификация с автообновлением токенов', 'Пагинация, фильтрация, поиск', 'Code splitting и оптимизация производительности', 'Тестирование с Vitest и Storybook'],
    en: ['JWT authentication with auto token refresh', 'Pagination, filtering, search', 'Code splitting and performance optimization', 'Testing with Vitest and Storybook'],
    vi: ['JWT authentication với auto refresh token', 'Phân trang, lọc, tìm kiếm', 'Code splitting và tối ưu hiệu năng', 'Testing với Vitest và Storybook']
  },
  modal3_title: { ru: 'Клон Twitter', en: 'Twitter Clone', vi: 'Clone Twitter' },
  modal3_desc: {
    ru: 'Бэкенд социальной платформы с медиа-контентом.',
    en: 'Social platform backend with rich media content support.',
    vi: 'Backend nền tảng mạng xã hội hỗ trợ nội dung đa phương tiện.'
  },
  modal3_items: {
    ru: ['JWT + OAuth2 (Google)', 'HLS-стриминг с FFmpeg', 'AWS S3/SES интеграция', 'CI/CD с GitHub Actions'],
    en: ['JWT + OAuth2 (Google)', 'HLS streaming with FFmpeg', 'AWS S3/SES integration', 'CI/CD with GitHub Actions'],
    vi: ['JWT + OAuth2 (Google)', 'HLS streaming với FFmpeg', 'Tích hợp AWS S3/SES', 'CI/CD với GitHub Actions']
  },

  // — Skills —
  skills_title: { ru: 'Навыки', en: 'Skills', vi: 'Kỹ năng' },
  skills_lang:  { ru: 'Языки',  en: 'Languages', vi: 'Ngôn ngữ' },

  // — Hobbies —
  hobby1: { ru: 'Фотография', en: 'Photography', vi: 'Nhiếp ảnh' },
  hobby2: { ru: 'Чтение',     en: 'Reading',     vi: 'Đọc sách' },
  hobby3: { ru: 'Туризм',     en: 'Travel',      vi: 'Du lịch' },
  hobby4: { ru: 'Музыка',     en: 'Music',       vi: 'Âm nhạc' },

  // — Footer —
  footer_title: { ru: 'Заинтересованы?', en: 'Interested?', vi: 'Bạn quan tâm?' },
  footer_desc: {
    ru: 'Я открыт для новых возможностей и буду рад обсудить ваш проект или вакансию.',
    en: "I'm open to new opportunities and would love to discuss your project or position.",
    vi: 'Tôi luôn sẵn sàng cho những cơ hội mới và rất vui được trao đổi về dự án hoặc vị trí của bạn.'
  },
  footer_copy: { ru: '© 2025 Нгуен Куанг Туан', en: '© 2025 Nguyen Quang Tuan', vi: '© 2025 Nguyễn Quang Tuấn' },
};

function i18nSetup() {
  return {
    lang: localStorage.getItem('lang') || 'ru',
    setLang(l) {
      this.lang = l;
      localStorage.setItem('lang', l);
      document.documentElement.lang = l;
    },
    t(key) {
      const entry = translations[key];
      if (!entry) return key;
      return entry[this.lang] || entry['ru'] || key;
    },
    tHtml(key) {
      return this.t(key);
    },
    tList(key) {
      const entry = translations[key];
      if (!entry) return [];
      return entry[this.lang] || entry['ru'] || [];
    },
    langLabel: { ru: 'RU', en: 'EN', vi: 'VI' },
    langFlags: { ru: '🇷🇺', en: '🇬🇧', vi: '🇻🇳' },
    get currentFlag() { return this.langFlags[this.lang]; },
    get heroNameLines() {
      const nameStr = this.t('hero_name');
      return nameStr.split('\n');
    }
  };
}
