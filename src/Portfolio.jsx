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
    date: "Exp. May 2026",
    location: "Boston, MA",
    desc: "Concentrations in Applied Math, Probability, Algorithm Design, and Machine Learning. Dean's List (top 10%). GPA: 3.58/4.00.",
    icon: GraduationCap,
    color: "text-cyan-400",
  },
  {
    id: 2,
    type: "experience",
    title: "UniDT",
    role: "AI Engineering Intern",
    date: "May 2024 - Sep 2024",
    location: "Shanghai, China",
    desc: "Developed NLP2SQL apps with 64% higher accuracy using RAG. Built Flask RESTful APIs & managed AWS/Docker deployments.",
    icon: Briefcase,
    color: "text-purple-400",
  },
  {
    id: 3,
    type: "project",
    title: "Travel App Development",
    role: "Independent Developer",
    date: "Mar 2025 - Jun 2025",
    location: "Remote",
    desc: "Designed scalable cross-platform travel app targeting 50k+ MAU. Deployed on AWS (EC2, S3, RDS) and optimized APIs to reduce page load times by ~30%.",
    icon: Code,
    color: "text-pink-400",
  },
  {
    id: 4,
    type: "experience",
    title: "YikData",
    role: "AI Research Intern",
    date: "Jun 2025 - Sep 2025",
    location: "Nanjing, China",
    desc: "Co-built an AI interview system serving 10k+ users. Fine-tuned Qwen-Plus with LoRA+SFT, improving accuracy and cutting test-paper generation time from 25 min to 2 min.",
    icon: Briefcase,
    color: "text-green-400",
  },
  {
    id: 5,
    type: "project",
    title: "HackHarvard",
    role: "Team Lead & AI Model Trainer",
    date: "Oct 2024",
    location: "Cambridge, MA",
    desc: "Led a 4-person team to build an emergency patient behavior detection system. Trained YOLOv8 on 3000+ labeled images to detect falls/asthma events with 96% accuracy.",
    icon: Award,
    color: "text-yellow-400",
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
    desc: "主修应用数学、概率论、算法设计和机器学习，GPA 3.58/4。2022–2025 连续入选学院优异榜（前 10%）。",
    icon: GraduationCap,
    color: "text-cyan-400",
  },
  {
    id: 2,
    type: "experience",
    title: "华院计算 UniDT",
    role: "AI 算法实习生",
    date: "2024 年 5 月 - 2024 年 8 月",
    location: "中国 · 上海",
    desc: "使用 Python 与大模型完成 NLP→SQL 等任务；在 RAG 框架下对企业知识进行定制与精调，使自然语言到 SQL 转化准确率提升约 64%。搭建 Flask RESTful API，将前端请求统一转发至模型服务并返回 JSON 结果；配合 Docker 部署到公司服务器，实现服务稳定运行与自动日报生成。",
    icon: Briefcase,
    color: "text-purple-400",
  },
  {
    id: 3,
    type: "project",
    title: "旅行软件应用开发项目",
    role: "后端与云服务开发",
    date: "2025 年 3 月 - 2025 年 6 月",
    location: "远程",
    desc: "与 6 人团队协作，设计并上线可扩展的跨平台旅行应用，预计支持 50,000+ 月活用户。基于 AWS EC2 / S3 / RDS 部署后台与静态资源，引入缓存与异步处理，将页面加载时间缩短约 30%。",
    icon: Code,
    color: "text-pink-400",
  },
  {
    id: 4,
    type: "experience",
    title: "宜开数据分析",
    role: "AI 算法实习生",
    date: "2025 年 6 月 - 2025 年 9 月",
    location: "中国 · 南京",
    desc: "与 3 人算法团队共同开发 AI 面试系统，支持从简历自动生成笔试题卷并实时调整难度，将题卷生成时间从 25 分钟缩短至 2 分钟，累计服务 1 万+ 用户。基于 LLaMA Factory 对 Qwen-Plus 进行 LoRA + SFT 微调，配合 prompt 优化和二次模型筛查，将整体准确率提升 38%，报告乱码率降至约 2%。",
    icon: Briefcase,
    color: "text-green-400",
  },
  {
    id: 5,
    type: "project",
    title: "HackHarvard 竞赛",
    role: "AI 模型训练负责人",
    date: "2024 年 10 月 11–13 日",
    location: "美国 · 哈佛大学",
    desc: "作为组长带领 4 人团队，围绕医院场景设计病人异常行为检测系统。负责数据清洗与目标标注，基于 3000+ 图片样本使用 YOLOv8 训练摔倒、哮喘等紧急行为检测模型，精度约 96%；搭建告警推送后端，通过邮件方式向家属发送异常告警信息。",
    icon: Award,
    color: "text-yellow-400",
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
      ${align === "left" ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}
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
        <div className={`flex items-center gap-3 mb-2 ${align === "left" ? "md:flex-row-reverse" : ""}`}>
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
          className={`flex flex-col gap-1 mb-3 text-sm ${
            align === "left" ? "md:items-end" : "md:items-start"
          } ${isDark ? "text-slate-400" : "text-slate-600"}`}
        >
          <span className={isDark ? "font-semibold text-slate-300" : "font-semibold text-slate-800"}>
            {item.role}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {item.location} • {item.date}
          </span>
        </div>

        <p className={isDark ? "text-slate-400 leading-relaxed text-sm" : "text-slate-700 leading-relaxed text-sm"}>
          {item.desc}
        </p>
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
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind.
          </div>
        </div>
      </footer>
    </div>
  );
}
