import React, { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Cpu,
  Code,
  Database,
  Cloud,
  MapPin,
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Award,
  Briefcase,
  GraduationCap,
  Zap,
  ExternalLink,
  Server,
  Moon,
  Sun,
} from "lucide-react";

// ------------------------------
// PERSONAL INFO
// ------------------------------
const personalInfo = {
  name: "Mingyu Shen",
  role: "Math & CS Student | AI & Backend Developer",
  email: "mingyu@bu.edu",
  phone: "857-498-0409",
  linkedin: "www.linkedin.com/in/mingyu-shen/",
  github: "https://github.com/milkfish033",
  location: "Boston, MA",
};

// ------------------------------
// SKILLS
// ------------------------------
const skills = [
  {
    category: "Languages",
    items: ["Python (Main)", "Java", "C", "Go", "SQL", "JavaScript", "HTML/CSS"],
  },
  {
    category: "AI & LLM",
    items: ["PyTorch", "YOLOv8", "BERT", "DeepSeek", "GPT", "RAG Framework", "TensorRT"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, S3, RDS)", "Docker", "Flask", "MongoDB", "MySQL"],
  },
  {
    category: "Concepts",
    items: ["Applied Math", "Probability Theory", "Algorithm Design", "Machine Learning"],
  },
];

// ------------------------------
// TIMELINE DATA (EN & ZH)
// ------------------------------
const timelineDataEn = [
  {
    id: 1,
    type: "education",
    title: "Boston University",
    role: "Bachelor of Math & Computer Science",
    date: "Sep 2022 – May 2026 (Expected)",
    location: "Boston, MA",
    desc: [
      "Concentrated in Applied Mathematics, Probability Theory, Algorithm Design, and Machine Learning, with a strong foundation across theoretical and systems-focused CS courses. Consistently ranked within the top academic tier of the program.",
      "Achieved a cumulative GPA of 3.58/4.00 and earned the Dean’s List multiple times (top 10%). Complemented coursework with hands-on research, algorithm design projects, and large-scale engineering work.",
      "Actively engaged in academic research, hackathons, and AI/ML projects, building a strong bridge between mathematical theory and practical engineering. Developed long-term project experience across backend systems, AI applications, and data-driven research.",
    ],
    icon: GraduationCap,
    color: "text-cyan-400",
  },
  {
    id: 2,
    type: "internship",
    title: "YikData",
    role: "AI Research Intern",
    date: "May 2025 - Sep 2025",
    location: "Nanjing, China",
    desc: [
      "Collaborated with a 3-member team to build an AI interview system that generates written tests directly from resumes and adjusts difficulty in real time. Optimized concurrency and caching, reducing generation time from 25 minutes to 2 minutes and serving 10,000+ users.",
      "Enhanced the question-bank algorithm with 50,000+ difficulty-ranked samples (manual + rules-based). Fine-tuned Qwen-Plus using LoRA + SFT in LLaMA Factory, improving accuracy by 38% and reducing garbled-text rate to 2% via prompt optimization and secondary model screening.",
      "Led a 3-person team to develop a middle-school English oral-evaluation platform using iFlytek’s speech-scoring model. Built a scoring-criteria knowledge base injected via RAG to provide personalized feedback across 8,000+ test takers.",
    ],
    icon: Briefcase,
    color: "text-purple-400",
  },

  {
    id: 3,
    type: "internship",
    title: "UniDT",
    role: "AI Engineering Intern",
    date: "May 2024 - Sep 2024",
    location: "Shanghai, China",
    desc: [
      "Built Python-based enterprise AI applications using large language models for NLP tasks such as natural language to SQL conversion. Integrated a custom RAG framework with enterprise knowledge to improve model accuracy by 64%.",
      "Developed robust RESTful APIs with Flask to unify frontend–backend interaction, standardizing I/O and enabling reliable JSON-based responses. Implemented concurrent request handling and error protection for stable production use.",
      "Managed SQL databases with DBeaver and automated daily report generation through Python scripts deployed on Dockerized company servers. Tracked platform activity and visualized daily usage trends for internal monitoring.",
    ],
    icon: Briefcase,
    color: "text-purple-400",
  },

  {
    id: 4,
    type: "Hackathon",
    title: "HackHarvard",
    role: "AI Model Trainer",
    date: "11 - 13 Oct, 2024",
    location: "Harvard University",
    desc: [
      "Led a four-person team to architect the full project pipeline and assign tasks. Designed a patient emergency-behavior detection system tailored for hospital settings, receiving strong recognition from healthcare stakeholders.",
      "Collected, cleaned, and labeled over 3,000 images. Trained a YOLOv8 model capable of identifying emergency events such as falls and asthma attacks, achieving 96% detection accuracy.",
      "Designed backend architecture and built an emergency notification module. Implemented SMTP-based email alerts to automatically notify families when abnormal events were detected.",
    ],
    icon: Award,
    color: "text-pink-400",
  },

  {
    id: 5,
    type: "project",
    title: "Travel App Development Project",
    role: "Independent Developer",
    date: "Jul 2024 – Aug 2024",
    location: "Remote",
    desc: [
      "Collaborated with a 6-member team to design and launch a scalable cross-platform travel application projected to support 50,000+ monthly active users. Implemented core features such as user accounts, route planning, and saved itineraries.",
      "Deployed backend services and static content on AWS EC2 and S3, and managed relational databases using RDS to ensure high availability, load balancing, and automated scaling.",
      "Improved RESTful API performance by 30% through asynchronous processing and caching. Integrated CloudWatch for real-time performance monitoring and log analytics.",
    ],
    icon: Award,
    color: "text-yellow-400",
  },

  {
    id: 6,
    type: "research",
    title: "Data Tracking & Web Content Collection",
    role: "Research Assistant",
    date: "Oct 2024 – Dec 2024",
    location: "Boston University",
    desc: [
      "Developed Python scripts using requests and BeautifulSoup to automate scraping from The New York Times and other major media outlets. Extracted headlines, summaries, timestamps, and metadata to support research on higher-education coverage.",
      "Built a cross-platform trending-topics tracking system monitoring Google, Yahoo, TikTok, and four additional platforms daily. Cleaned and categorized raw data in Excel, generating over 120 datasets and collecting more than 25,000 entries.",
      "Used MySQL and MongoDB to manage structured and unstructured data, designing schemas, handling incremental updates, and supporting multi-dimensional queries for research efficiency.",
    ],
    icon: Database,
    color: "text-green-400",
  },

  {
    id: 7,
    type: "project",
    title: "PyAlgoLab Algorithm Learning Library",
    role: "Independent Developer",
    date: "Dec 2024 – Present",
    location: "Remote",
    desc: [
      "Independently designed and built PyAlgoLab, an educational algorithm experimentation platform covering sorting, searching, graph algorithms, dynamic programming, and more. The project focuses on clarity, usability, and instructional value.",
      "Implemented 50+ algorithms and data structures using modular Python design, including visualizations and performance analysis tools to support learning and experimentation.",
      "Wrote comprehensive unit tests, documentation, and code examples to ensure maintainability and reusability. Helped learners quickly understand algorithm logic and execution flow.",
    ],
    icon: Code,
    color: "text-blue-400",
  },
];

const timelineDataZh = [
  {
    id: 1,
    type: "education",
    title: "波士顿大学",
    role: "数学与计算机科学 本科",
    date: "2022 年 9 月 - 2026 年 5 月（预计）",
    location: "美国 · 波士顿",
    desc: [
      "主修应用数学、概率论、算法设计与机器学习，并连续三年入选学院优异榜（前 10%）。课程覆盖深度学习、数据库系统、算法优化等核心方向。",
      "累计 GPA 3.58/4，参与多项科研与工程项目，积累了扎实的理论基础与实践经验。",
      "持续参与课程助教、技术社团与项目团队合作，在学术与工程实践中保持长期产出。",
    ],
    icon: GraduationCap,
    color: "text-cyan-400",
  },

  {
    id: 2,
    type: "internship",
    title: "宜开数据分析",
    role: "AI 算法实习生",
    date: "2025 年 6 月 - 2025 年 9 月",
    location: "中国 · 南京",
    desc: [
      "与 3 人算法团队共同开发 AI 面试系统，实现从简历自动生成笔试题卷，并实时动态调整题目难度。通过并发处理与缓存优化，将生成时间从 25 分钟缩短到 2 分钟，累计服务超过 1 万名用户。",
      "构建 5 万+ 难度分级样本（人工标注 + 规则清洗），并在 LLaMA Factory 框架下对 Qwen-Plus 进行 LoRA + SFT 微调。模型整体准确率提高 38%，并通过 Prompt 优化与二次模型筛查，将报告乱码率降低至 2%。",
      "负责中学生英语口语评测系统开发，带领 3 人团队完成语音识别与评分逻辑搭建。基于科大讯飞口语模型构建评分体系，通过 RAG 注入知识库，为 8,000+ 考生生成个性化反馈。",
    ],
    icon: Briefcase,
    color: "text-purple-400",
  },

  {
    id: 3,
    type: "internship",
    title: "华院计算 UniDT",
    role: "AI 算法实习生",
    date: "2024 年 5 月 - 2024 年 8 月",
    location: "中国 · 上海",
    desc: [
      "使用 Python 结合大模型（如豆包）开发企业级 AI 应用，完成自然语言到 SQL 的转换等核心 NLP 任务。通过引入 RAG 与企业知识库完成定制化微调，使整体 SQL 生成准确率提升 64%。",
      "基于 Flask 搭建统一的 RESTful API，将前端调用规范化为统一输入输出格式，并实现稳定的 JSON 返回结构。支持高并发调用与异常处理，构建可靠的前后端闭环流程。",
      "使用 SQL 与 DBeaver 管理公司数据库，并编写 Python 脚本完成自动化日报生成。通过 Docker 将服务部署至公司服务器，实现平台日活监控与数据可视化。",
    ],
    icon: Briefcase,
    color: "text-purple-400",
  },

  {
    id: 4,
    type: "Hackathon",
    title: "HackHarvard 竞赛",
    role: "AI 模型训练负责人",
    date: "2024 年 10 月 11–13 日",
    location: "美国 · 哈佛大学",
    desc: [
      "担任组长带领 4 人团队规划项目架构与任务分工，围绕医院场景设计病人异常行为检测系统。项目现场获得医疗行业投资人高度认可。",
      "负责数据清洗与标注，整理 3000+ 样本并完成目标帧提取，使用 YOLOv8 训练摔倒、哮喘等紧急行为检测模型，最终模型精度达到 96%。",
      "设计整体后端架构与调试流程，并构建告警推送系统。通过 SMTP 协议实现自动邮件通知，确保紧急事件可实时反馈至家属。",
    ],
    icon: Award,
    color: "text-pink-400",
  },

  {
    id: 5,
    type: "research",
    title: "数据追踪与内容抓取项目",
    role: "实验研究助手",
    date: "2024 年 10 月 - 2024 年 12 月",
    location: "美国 · 波士顿大学",
    desc: [
      "撰写 Python 脚本（基于 requests 与 BeautifulSoup）自动抓取《纽约时报》等媒体内容，采集标题、摘要、来源与发布时间等 关键字段，为研究提供高质量数据。",
      "构建跨平台热搜趋势追踪系统，每日监测 Google、Yahoo、抖音等七大平台。使用 Excel 进行初步清洗与分类，累计生成 120+ 数据表，采集数据超过 25,000 条。",
      "利用 MySQL 与 MongoDB 统一管理结构化与非结构化数据，实现数据入库、Schema 设计、增量更新与多维查询，大幅提升研究数据的可访问性与检索效率。",
    ],
    icon: Database,
    color: "text-green-400",
  },

  {
    id: 6,
    type: "project",
    title: "旅行软件应用开发项目",
    role: "后端与云服务开发",
    date: "2025 年 3 月 - 2025 年 6 月",
    location: "远程",
    desc: [
      "与 6 名开发者协作设计并上线跨平台旅行应用，整体架构具备强扩展性，预计可支持超过 50,000 月活用户。项目涵盖用户登录、路线推荐与收藏等核心功能。",
      "基于 AWS EC2 与 S3 部署后端服务与静态资源，使用 RDS 管理关系型数据库，实现高可用、自动扩缩容与数据备份策略。",
      "通过异步处理、缓存机制与 CloudWatch 监控，将 RESTful API 响应速度提升约 30%，并显著降低了系统延迟与资源开销。",
    ],
    icon: Code,
    color: "text-yellow-400",
  },

  {
    id: 7,
    type: "project",
    title: "PyAlgoLab 算法实验库",
    role: "独立开发者",
    date: "2024 年 12 月 - 至今",
    location: "远程",
    desc: [
      "独立设计并开发 PyAlgoLab, 一个面向学习者的算法学习与实验平台，覆盖排序、搜索、图论、动态规划等多个模块。平台注重可读性、易用性与教学效果。",
      "采用 Python 模块化设计，完成 50+ 经典算法与数据结构的封装、可视化与性能分析，为初学者和研究者提供便捷的实验环境。",
      "编写完善的单元测试、文档注释与使用示例，确保代码的复用性与可维护性，帮助用户快速理解算法原理与实现流程。",
    ],
    icon: Code,
    color: "text-blue-400",
  },
];

// ------------------------------
// SMALL COMPONENTS
// ------------------------------
const CarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
  </svg>
);

const SkillBadge = ({ skill }) => (
  <span className="px-3 py-1 text-sm font-mono text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-md hover:border-cyan-400 hover:bg-cyan-100 transition-all cursor-default dark:text-cyan-300 dark:bg-cyan-950/30 dark:border-cyan-900 dark:hover:border-cyan-500 dark:hover:bg-cyan-900/50">
    {skill}
  </span>
);

const Card = ({ item, isVisible, align, theme }) => {
  const Icon = item.icon;
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full md:w-[45%] mb-16 transition-all duration-1000 transform
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      ${align === "left" ? "md:mr-auto" : "md:ml-auto"}`}
    >
      {/* Connector Line */}
      <div
        className={`hidden md:block absolute top-6 h-[2px] w-[10%]
        ${align === "left" ? "-right-[10%]" : "-left-[10%]"}
        ${isDark ? "bg-cyan-500/50" : "bg-cyan-400/60"}`}
      />

      {/* Card */}
      <div
        className={`p-6 rounded-xl shadow-2xl backdrop-blur-sm border transition-colors group
        ${isDark ? "bg-slate-900/90 border-slate-700 hover:border-cyan-500/50" : "bg-white border-slate-200 hover:border-cyan-400/60"}`}
      >
        <div className={`flex items-center gap-3 mb-2}`}>
          <div
            className={`p-2 rounded-lg
            ${isDark ? "bg-slate-800" : "bg-slate-100"} ${item.color}`}
          >
            <Icon size={20} />
          </div>
          <h3
            className={`text-xl font-bold transition-colors
            ${isDark ? "text-slate-100 group-hover:text-cyan-400" : "text-slate-900 group-hover:text-cyan-600"}`}
          >
            {item.title}
          </h3>
        </div>

        <div
          className={`flex flex-col gap-1 mb-3 text-sm
            ${isDark ? "text-slate-400" : "text-slate-600"}`}
        >
          <span className={isDark ? "font-semibold text-slate-300" : "font-semibold text-slate-800"}>
            {item.role}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {item.location} • {item.date}
          </span>
        </div>

        {/* Description – now properly aligned */}
        <div className="flex justify-start">
          <div
            className={`leading-relaxed text-sm ${
              isDark ? "text-slate-400" : "text-slate-700"
            }`}
          >
            {Array.isArray(item.desc) ? (
              <ul
                className={`list-disc space-y-2 ${
                  align === "left" ? "md:pr-6" : "md:pl-6"
                }`}
              >
                {item.desc.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            ) : (
              <p>{item.desc}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ------------------------------
// TIMELINE SECTION
// ------------------------------
const CareerMap = ({ lang, theme }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const data = lang === "zh" ? timelineDataZh : timelineDataEn;
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      let progress = (windowHeight / 2 - elementTop) / elementHeight;
      progress = Math.max(0, Math.min(1, progress));

      setScrollProgress(progress);

      const threshold = 1 / data.length;
      const newVisible = data.map((_, index) => progress > index * threshold);
      setVisibleItems(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data.length]);

  return (
    <div ref={containerRef} className="relative py-20 min-h-[200vh] overflow-hidden">
      <h2
        className={`text-3xl md:text-4xl font-bold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400`}
      >
        <span className={`border-b-4 border-cyan-500 pb-2`}>
          {lang === "zh" ? "教育与实习轨迹" : "Career Trajectory"}
        </span>
      </h2>

      {/* Vertical Road */}
      <div
        className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-1 transform md:-translate-x-1/2 ${
          isDark ? "bg-slate-800" : "bg-slate-200"
        }`}
      >
        {/* Road Dashes */}
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "linear-gradient(to bottom, #cbd5e1 50%, transparent 50%)",
            backgroundSize: "2px 40px",
            opacity: isDark ? 0.3 : 0.7,
          }}
        />

        {/* Road Progress Fill */}
        <div
          className="absolute top-0 left-0 w-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all duration-75 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Car */}
      <div
        className="absolute left-4 md:left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
        style={{ top: `${Math.max(5, scrollProgress * 95)}%` }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-50 animate-pulse" />
          <div
            className={`p-2 rounded-full border-2 shadow-[0_0_20px_rgba(6,182,212,0.6)] relative z-10 ${
              isDark ? "bg-slate-950 border-cyan-400" : "bg-white border-cyan-500"
            }`}
          >
            <CarIcon className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </div>

      {/* Timeline Cards */}
      <div className="container mx-auto px-4 md:px-0 relative z-10">
        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex w-full mb-32 last:mb-0 md:pl-12 pl-12 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <Card
              item={item}
              isVisible={visibleItems[index]}
              align={index % 2 === 0 ? "left" : "right"}
              theme={theme}
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-4 md:left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10">
        <div className="w-4 h-4 bg-purple-500 rounded-full animate-ping" />
      </div>
    </div>
  );
};

// ------------------------------
// NAVIGATION BAR
// ------------------------------
const Navbar = ({ theme, setTheme, lang, setLang }) => {
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const setLanguage = (l) => {
    setLang(l);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b
      ${isDark ? "bg-slate-950/80 border-slate-800" : "bg-white/80 border-slate-200"}`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div
          className={`font-mono text-xl font-bold tracking-tighter ${
            isDark ? "text-cyan-400" : "text-cyan-700"
          }`}
        >
          &lt;MS /&gt;
        </div>

        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-9 h-9 rounded-full border text-xs transition-colors
            ${isDark ? "border-slate-700 bg-slate-900 text-slate-200 hover:border-cyan-500" : "border-slate-200 bg-white text-slate-800 hover:border-cyan-500"}`}
            title="Toggle light / dark"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Language toggle */}
          <div
            className={`flex text-xs rounded-full overflow-hidden border
            ${isDark ? "border-slate-700 bg-slate-900" : "border-slate-200 bg-slate-50"}`}
          >
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 font-mono transition-colors ${
                lang === "en"
                  ? isDark
                    ? "bg-cyan-600 text-white"
                    : "bg-cyan-500 text-white"
                  : isDark
                  ? "text-slate-300"
                  : "text-slate-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("zh")}
              className={`px-3 py-1 font-mono transition-colors ${
                lang === "zh"
                  ? isDark
                    ? "bg-cyan-600 text-white"
                    : "bg-cyan-500 text-white"
                  : isDark
                  ? "text-slate-300"
                  : "text-slate-700"
              }`}
            >
              中
            </button>
          </div>

          {/* Social links */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"}
          >
            <Github size={20} />
          </a>
          <a
            href={`https://${personalInfo.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"}
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className={isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"}
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

// ------------------------------
// MAIN PAGE
// ------------------------------
export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("en");

  // load prefs
  useEffect(() => {
    const savedTheme = localStorage.getItem("ms-theme");
    const savedLang = localStorage.getItem("ms-lang");
    if (savedTheme === "light" || savedTheme === "dark") setTheme(savedTheme);
    if (savedLang === "en" || savedLang === "zh") setLang(savedLang);
  }, []);

  // persist prefs
  useEffect(() => {
    localStorage.setItem("ms-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("ms-lang", lang);
  }, [lang]);

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen font-sans selection:bg-cyan-500/30 ${
        isDark ? "bg-slate-950 text-slate-200" : "bg-slate-50 text-slate-900"
      }`}
    >
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />

      {/* HERO */}
      <header className="relative pt-32 pb-20 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
          <div
            className={`absolute top-10 left-10 w-64 h-64 rounded-full blur-[100px] ${
              isDark ? "bg-cyan-600" : "bg-cyan-300"
            }`}
          />
          <div
            className={`absolute bottom-10 right-10 w-64 h-64 rounded-full blur-[100px] ${
              isDark ? "bg-purple-600" : "bg-purple-300"
            }`}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
              backgroundSize: "40px 40px",
              opacity: isDark ? 0.1 : 0.3,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border text-xs font-mono uppercase tracking-widest ${
                isDark ? "bg-slate-900 border-slate-700 text-cyan-400" : "bg-white border-slate-200 text-cyan-700"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              System Online
            </div>

            <h1
              className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                {personalInfo.name}
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl mb-8 font-light ${
                isDark ? "text-slate-400" : "text-slate-700"
              }`}
            >
              {personalInfo.role}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="#contact"
                className={`px-8 py-3 rounded-lg font-semibold transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)] ${
                  isDark ? "bg-cyan-600 hover:bg-cyan-500 text-white" : "bg-cyan-500 hover:bg-cyan-400 text-white"
                }`}
              >
                {lang === "zh" ? "联系我" : "Contact Me"}
              </a>

              <button
                className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 border ${
                  isDark
                    ? "bg-slate-800 border-slate-700 hover:border-slate-500 text-white"
                    : "bg-white border-slate-200 hover:border-slate-400 text-slate-800"
                }`}
              >
                <ExternalLink size={18} /> {lang === "zh" ? "查看简历" : "View Resume"}
              </button>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-12 border-t ${
                isDark ? "border-slate-800" : "border-slate-200"
              }`}
            >
              <div className="text-center">
                <div className="text-2xl font-bold">{3.58}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  {lang === "zh" ? "项目" : "Projects"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">3</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  {lang === "zh" ? "实习" : "Internships"}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">AWS</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">
                  {lang === "zh" ? "云从业者认证" : "Certified"}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-600">
          <ChevronDown size={24} />
        </div>
      </header>

      {/* SKILLS */}
      <section
        className={`py-20 border-y ${
          isDark ? "bg-slate-900/50 border-slate-800" : "bg-white border-slate-200"
        }`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <Terminal className="text-cyan-500" />
            {lang === "zh" ? "技术栈" : "Technical Arsenal"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border transition-colors ${
                  isDark
                    ? "bg-slate-950 border-slate-800 hover:border-cyan-900/50"
                    : "bg-white border-slate-200 hover:border-cyan-200"
                }`}
              >
                <h3
                  className={`text-lg font-semibold mb-4 border-b pb-2 ${
                    isDark ? "text-purple-300 border-slate-800" : "text-purple-700 border-slate-200"
                  }`}
                >
                  {category.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <SkillBadge key={i} skill={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE MAP (Education + Experience bilingual) */}
      <CareerMap lang={lang} theme={theme} />

      {/* FOOTER */}
      <footer
        id="contact"
        className={`pt-20 pb-10 border-t ${isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"}`}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            {lang === "zh" ? "一起聊聊项目或机会？" : "Ready to Collaborate?"}
          </h2>

          <p
            className={`max-w-2xl mx-auto mb-12 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {lang === "zh"
              ? "我目前正在寻找 AI 算法与后端开发相关的实习 / 项目机会。如果你有合适的方向，欢迎随时联系我，一起聊聊技术与想法。"
              : "I'm currently looking for new opportunities in AI Engineering and Backend Development. Feel free to reach out if you'd like to discuss technology or potential projects."}
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <a
              href={`mailto:${personalInfo.email}`}
              className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl border transition-all group ${
                isDark
                  ? "bg-slate-900 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800"
                  : "bg-white border-slate-200 hover:border-cyan-400/60 hover:bg-cyan-50"
              }`}
            >
              <Mail className="text-cyan-500 group-hover:scale-110 transition-transform" />
              <span className="text-lg">{personalInfo.email}</span>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl border transition-all group ${
                isDark
                  ? "bg-slate-900 border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800"
                  : "bg-white border-slate-200 hover:border-cyan-400/60 hover:bg-cyan-50"
              }`}
            >
              <Zap className="text-yellow-500 group-hover:scale-110 transition-transform" />
              <span className="text-lg">{personalInfo.phone}</span>
            </a>
          </div>

          <div className="text-slate-600 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. 
          </div>
        </div>
      </footer>
    </div>
  );
}
