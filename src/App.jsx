import { useState, useEffect, createContext, useContext } from "react";

const COLORS = {
  bg: "#0A0A0F", surface: "#12121A", surfaceHover: "#1A1A25",
  card: "#16161F", cardHover: "#1E1E2A", border: "#2A2A3A",
  borderLight: "#3A3A4D", accent: "#E8C872", accentDim: "rgba(232,200,114,0.12)",
  accentGlow: "rgba(232,200,114,0.25)", text: "#F0EDE6", textMuted: "#8A8A9A",
  textDim: "#5A5A6A", success: "#6BCB77", error: "#FF6B6B",
  purple: "#A78BFA", blue: "#60A5FA", pink: "#F472B6",
};

const LangCtx = createContext({ lang: "en", setLang: () => {}, dir: "ltr" });
const useLang = () => useContext(LangCtx);

const T = {
  brandEn: "Mahfil", brandAr: "محفل",
  tagline: { en: "Craft Unforgettable Moments", ar: "اصنع لحظات لا تُنسى" },
  heroTitle1: { en: "Your Event,", ar: "مناسبتك،" },
  heroTitle2: { en: "Perfected.", ar: "بإتقان." },
  heroDesc: { en: "Connect with premium providers and plan every detail — from concept to celebration.", ar: "تواصل مع أفضل مزودي الخدمات وخطّط لكل تفصيلة — من الفكرة إلى الاحتفال." },
  searchPlaceholder: { en: "Search venues, caterers, photographers...", ar: "ابحث عن قاعات، تموين، مصورين..." },
  explore: { en: "Explore", ar: "استكشف" },
  providers: { en: "Providers", ar: "مزودو الخدمات" },
  createEvent: { en: "Create Event", ar: "إنشاء مناسبة" },
  myEvents: { en: "My Events", ar: "مناسباتي" },
  dashboard: { en: "Dashboard", ar: "لوحة التحكم" },
  signIn: { en: "Sign In", ar: "تسجيل الدخول" },
  createAccount: { en: "Create Account", ar: "إنشاء حساب" },
  welcomeBack: { en: "Welcome Back", ar: "مرحباً بعودتك" },
  signInSubtitle: { en: "Sign in to your Mahfil account", ar: "سجّل دخولك إلى حساب محفل" },
  email: { en: "Email", ar: "البريد الإلكتروني" },
  password: { en: "Password", ar: "كلمة المرور" },
  forgotPassword: { en: "Forgot password?", ar: "نسيت كلمة المرور؟" },
  noAccount: { en: "Don't have an account?", ar: "ليس لديك حساب؟" },
  register: { en: "Register", ar: "سجّل الآن" },
  haveAccount: { en: "Already have an account?", ar: "لديك حساب بالفعل؟" },
  signInNow: { en: "Sign In", ar: "تسجيل الدخول" },
  joinAs: { en: "Join as", ar: "انضم كـ" },
  customer: { en: "Customer", ar: "عميل" },
  supplier: { en: "Supplier", ar: "مزود خدمة" },
  customerDesc: { en: "Plan & book your events", ar: "خطط واحجز مناسباتك" },
  supplierDesc: { en: "Offer your services", ar: "قدّم خدماتك" },
  fullName: { en: "Full Name", ar: "الاسم الكامل" },
  phone: { en: "Phone", ar: "رقم الهاتف" },
  city: { en: "City", ar: "المدينة" },
  businessName: { en: "Business Name", ar: "اسم الشركة" },
  serviceType: { en: "Service Type", ar: "نوع الخدمة" },
  selectCity: { en: "Select city", ar: "اختر المدينة" },
  selectService: { en: "Select service", ar: "اختر الخدمة" },
  signOut: { en: "Sign Out", ar: "تسجيل الخروج" },
  profile: { en: "Profile", ar: "الملف الشخصي" },
  settings: { en: "Settings", ar: "الإعدادات" },
  featuredProviders: { en: "Featured Providers", ar: "مزودو خدمات مميزون" },
  browseCategories: { en: "Browse Categories", ar: "تصفح الفئات" },
  howItWorks: { en: "How It Works", ar: "كيف يعمل" },
  browseAll: { en: "Browse All Providers", ar: "عرض جميع مزودي الخدمات" },
  requestQuote: { en: "Request Quote", ar: "طلب عرض سعر" },
  bookNow: { en: "Book Now", ar: "احجز الآن" },
  reviews: { en: "reviews", ar: "تقييم" },
  from: { en: "from", ar: "من" },
  perEvent: { en: "per event", ar: "لكل مناسبة" },
  eventType: { en: "Event Type", ar: "نوع المناسبة" },
  eventDate: { en: "Event Date", ar: "تاريخ المناسبة" },
  guestCount: { en: "Guest Count", ar: "عدد الضيوف" },
  budget: { en: "Budget (SAR)", ar: "الميزانية (ر.س)" },
  eventName: { en: "Event Name", ar: "اسم المناسبة" },
  next: { en: "Next →", ar: "التالي →" },
  back: { en: "← Back", ar: "→ رجوع" },
  createMyEvent: { en: "Create My Event", ar: "إنشاء مناسبتي" },
  myEventsTitle: { en: "My Events", ar: "مناسباتي" },
  createNew: { en: "+ Create New Event", ar: "+ إنشاء مناسبة جديدة" },
  inProgress: { en: "In Progress", ar: "قيد التنفيذ" },
  planning: { en: "Planning", ar: "قيد التخطيط" },
  draft: { en: "Draft", ar: "مسودة" },
  guests: { en: "guests", ar: "ضيف" },
  viewTimeline: { en: "View Timeline", ar: "عرض الجدول الزمني" },
  supplierDashboard: { en: "Supplier Dashboard", ar: "لوحة المزود" },
  totalBookings: { en: "Total Bookings", ar: "إجمالي الحجوزات" },
  pendingQuotes: { en: "Pending Quotes", ar: "عروض معلقة" },
  revenue: { en: "Revenue (SAR)", ar: "الإيرادات (ر.س)" },
  rating: { en: "Rating", ar: "التقييم" },
  recentInquiries: { en: "Recent Inquiries", ar: "الاستفسارات الأخيرة" },
  filterAll: { en: "All", ar: "الكل" },
  filterVenue: { en: "Venue", ar: "قاعات" },
  filterCatering: { en: "Catering", ar: "تموين" },
  filterPhoto: { en: "Photography", ar: "تصوير" },
  filterDecor: { en: "Decoration", ar: "ديكور" },
  filterEnt: { en: "Entertainment", ar: "ترفيه" },
};

const t = (key, lang) => T[key]?.[lang] || T[key]?.en || key;

const categories = [
  { id: "wedding", label: { en: "Weddings", ar: "أعراس" }, icon: "💍", count: 248, gradient: "linear-gradient(135deg,#E8C872,#D4A843)" },
  { id: "corporate", label: { en: "Corporate", ar: "شركات" }, icon: "🏢", count: 186, gradient: "linear-gradient(135deg,#60A5FA,#3B82F6)" },
  { id: "birthday", label: { en: "Birthdays", ar: "أعياد ميلاد" }, icon: "🎂", count: 312, gradient: "linear-gradient(135deg,#F472B6,#EC4899)" },
  { id: "conference", label: { en: "Conferences", ar: "مؤتمرات" }, icon: "🎤", count: 94, gradient: "linear-gradient(135deg,#A78BFA,#8B5CF6)" },
  { id: "social", label: { en: "Social", ar: "اجتماعية" }, icon: "🥂", count: 167, gradient: "linear-gradient(135deg,#34D399,#10B981)" },
  { id: "exhibition", label: { en: "Exhibitions", ar: "معارض" }, icon: "🎨", count: 73, gradient: "linear-gradient(135deg,#FB923C,#F97316)" },
];

const providers = [
  { id: 1, name: { en: "Al Faisaliah Catering", ar: "تموين الفيصلية" }, type: { en: "Catering", ar: "تموين" }, rating: 4.9, reviews: 312, price: "$$$$", avatar: "🍽️", tags: [{ en: "Arabic", ar: "عربي" }, { en: "International", ar: "دولي" }, { en: "Premium", ar: "مميز" }], featured: true, location: { en: "Riyadh", ar: "الرياض" }, minPrice: 25000 },
  { id: 2, name: { en: "Blossom Décor Studio", ar: "استوديو بلوسوم للديكور" }, type: { en: "Decoration", ar: "ديكور" }, rating: 4.8, reviews: 187, price: "$$$", avatar: "🌸", tags: [{ en: "Floral", ar: "زهور" }, { en: "Modern", ar: "عصري" }, { en: "Luxury", ar: "فاخر" }], featured: true, location: { en: "Riyadh", ar: "الرياض" }, minPrice: 15000 },
  { id: 3, name: { en: "Lens & Light Photography", ar: "عدسة ونور للتصوير" }, type: { en: "Photography", ar: "تصوير" }, rating: 4.9, reviews: 256, price: "$$$", avatar: "📸", tags: [{ en: "Cinematic", ar: "سينمائي" }, { en: "Drone", ar: "درون" }, { en: "Studio", ar: "ستوديو" }], featured: false, location: { en: "Jeddah", ar: "جدة" }, minPrice: 12000 },
  { id: 4, name: { en: "Harmony Events Venue", ar: "قاعة هارموني للمناسبات" }, type: { en: "Venue", ar: "قاعة" }, rating: 4.7, reviews: 143, price: "$$$$", avatar: "🏛️", tags: [{ en: "Ballroom", ar: "قاعة كبرى" }, { en: "Garden", ar: "حديقة" }, { en: "500+ Guests", ar: "+500 ضيف" }], featured: true, location: { en: "Riyadh", ar: "الرياض" }, minPrice: 50000 },
  { id: 5, name: { en: "Beat Masters Entertainment", ar: "بيت ماسترز للترفيه" }, type: { en: "Entertainment", ar: "ترفيه" }, rating: 4.6, reviews: 98, price: "$$", avatar: "🎶", tags: [{ en: "DJ", ar: "دي جي" }, { en: "Band", ar: "فرقة" }, { en: "Live Music", ar: "موسيقى حية" }], featured: false, location: { en: "Dammam", ar: "الدمام" }, minPrice: 8000 },
  { id: 6, name: { en: "Platinum Tent & Events", ar: "بلاتينيوم للخيام والمناسبات" }, type: { en: "Venue", ar: "قاعة" }, rating: 4.8, reviews: 211, price: "$$$", avatar: "⛺", tags: [{ en: "Outdoor", ar: "خارجي" }, { en: "Traditional", ar: "تقليدي" }, { en: "Customizable", ar: "قابل للتخصيص" }], featured: false, location: { en: "Riyadh", ar: "الرياض" }, minPrice: 30000 },
];

const myEvents = [
  { id: 1, name: { en: "Annual Gala Dinner", ar: "حفل العشاء السنوي" }, date: "May 15, 2026", type: "corporate", status: { en: "In Progress", ar: "قيد التنفيذ" }, progress: 65, guests: 200, budget: "SAR 180,000" },
  { id: 2, name: { en: "Sarah's Wedding", ar: "حفل زفاف سارة" }, date: "Jun 28, 2026", type: "wedding", status: { en: "Planning", ar: "قيد التخطيط" }, progress: 30, guests: 350, budget: "SAR 450,000" },
  { id: 3, name: { en: "Tech Summit 2026", ar: "قمة التقنية ٢٠٢٦" }, date: "Sep 10, 2026", type: "conference", status: { en: "Draft", ar: "مسودة" }, progress: 10, guests: 500, budget: "SAR 280,000" },
];

const citiesList = [
  { en: "Riyadh", ar: "الرياض" }, { en: "Jeddah", ar: "جدة" }, { en: "Dammam", ar: "الدمام" },
  { en: "Mecca", ar: "مكة المكرمة" }, { en: "Medina", ar: "المدينة المنورة" },
  { en: "Khobar", ar: "الخبر" }, { en: "Tabuk", ar: "تبوك" }, { en: "Abha", ar: "أبها" },
];

const serviceTypes = [
  { en: "Catering", ar: "تموين" }, { en: "Decoration", ar: "ديكور" },
  { en: "Photography", ar: "تصوير" }, { en: "Venue", ar: "قاعات" },
  { en: "Entertainment", ar: "ترفيه" }, { en: "Coordination", ar: "تنسيق" },
];

// ─── Particles ───
function Particles() {
  const [particles] = useState(() =>
    Array.from({ length: 18 }, (_, i) => ({
      w: 2 + Math.random() * 3, h: 2 + Math.random() * 3,
      op: 0.06 + Math.random() * 0.1, left: Math.random() * 100,
      top: Math.random() * 100, dur: 8 + Math.random() * 12, delay: Math.random() * 5,
    }))
  );
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {particles.map((p, i) => (
        <div key={i} style={{
          position: "absolute", width: p.w, height: p.h, background: COLORS.accent,
          borderRadius: "50%", opacity: p.op, left: `${p.left}%`, top: `${p.top}%`,
          animation: `float ${p.dur}s ease-in-out infinite`, animationDelay: `${p.delay}s`,
        }} />
      ))}
    </div>
  );
}

function Badge({ children, color = COLORS.accent }) {
  return (
    <span style={{
      display: "inline-block", padding: "3px 9px", borderRadius: 20,
      fontSize: 11, fontWeight: 600, letterSpacing: "0.4px",
      background: `${color}18`, color, border: `1px solid ${color}30`,
    }}>{children}</span>
  );
}

function Stars({ rating }) {
  return (
    <span style={{ color: COLORS.accent, fontSize: 12, letterSpacing: 1 }}>
      {"★".repeat(Math.floor(rating))}
      <span style={{ color: COLORS.textDim, marginLeft: 5, fontSize: 11 }}>{rating}</span>
    </span>
  );
}

function ProgressRing({ progress, size = 52 }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={COLORS.border} strokeWidth={4} />
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={COLORS.accent}
        strokeWidth={4} strokeDasharray={circ} strokeDashoffset={circ * (1 - progress / 100)}
        strokeLinecap="round" style={{ transition: "stroke-dashoffset 1s ease" }} />
      <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central"
        fill={COLORS.text} fontSize={11} fontWeight={700}
        style={{ transform: "rotate(90deg)", transformOrigin: "center" }}>{progress}%</text>
    </svg>
  );
}

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button onClick={() => setLang(lang === "en" ? "ar" : "en")} style={{
      padding: "6px 13px", borderRadius: 10, cursor: "pointer",
      border: `1px solid ${COLORS.border}`, background: COLORS.surface,
      color: COLORS.accent, fontSize: 12, fontWeight: 700,
      fontFamily: lang === "en" ? "'Noto Kufi Arabic','DM Sans',sans-serif" : "'DM Sans',sans-serif",
      transition: "all 0.2s", display: "flex", alignItems: "center", gap: 5,
    }}>
      <span>🌐</span> {lang === "en" ? "العربية" : "English"}
    </button>
  );
}

// ─── AUTH SCREENS ───
function AuthScreen({ onLogin }) {
  const { lang } = useLang();
  const [mode, setMode] = useState("login"); // login | choose | register-user | register-supplier
  const [form, setForm] = useState({});
  const f = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: 10,
    background: COLORS.surface, border: `1px solid ${COLORS.border}`,
    color: COLORS.text, fontSize: 14, outline: "none",
    fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
    textAlign: lang === "ar" ? "right" : "left",
  };

  const btnPrimary = {
    width: "100%", padding: "13px", borderRadius: 12, border: "none",
    background: `linear-gradient(135deg, ${COLORS.accent}, #D4A843)`,
    color: "#0A0A0F", fontWeight: 700, fontSize: 15, cursor: "pointer",
    fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
  };

  const Card = ({ children }) => (
    <div style={{
      background: COLORS.card, border: `1px solid ${COLORS.border}`,
      borderRadius: 20, padding: "36px 32px", width: "100%", maxWidth: 420,
      backdropFilter: "blur(20px)", position: "relative", zIndex: 2,
    }}>{children}</div>
  );

  const Logo = () => (
    <div style={{ textAlign: "center", marginBottom: 28 }}>
      <div style={{
        width: 56, height: 56, borderRadius: 16, margin: "0 auto 12px",
        background: `linear-gradient(135deg, ${COLORS.accentDim}, ${COLORS.accentGlow})`,
        border: `2px solid ${COLORS.accent}40`, display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 26, fontFamily: "'Noto Kufi Arabic',sans-serif", color: COLORS.accent,
      }}>م</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 22, color: COLORS.accent, fontWeight: 600 }}>Mahfil</span>
        <span style={{ color: COLORS.textDim }}>·</span>
        <span style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 20, color: COLORS.accent }}>محفل</span>
      </div>
    </div>
  );

  if (mode === "login") return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, position: "relative" }}>
      <Particles />
      <div style={{ position: "absolute", top: 20, right: lang === "ar" ? "auto" : 20, left: lang === "ar" ? 20 : "auto", zIndex: 10 }}><LangToggle /></div>
      <Card>
        <Logo />
        <h2 style={{ textAlign: "center", fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 600, marginBottom: 6 }}>{t("welcomeBack", lang)}</h2>
        <p style={{ textAlign: "center", color: COLORS.textMuted, fontSize: 13, marginBottom: 24, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{t("signInSubtitle", lang)}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <input style={inputStyle} placeholder={t("email", lang)} type="email" onChange={e => f("email", e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"} />
          <input style={inputStyle} placeholder={t("password", lang)} type="password" onChange={e => f("pass", e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"} />
          <div style={{ textAlign: lang === "ar" ? "left" : "right" }}>
            <span style={{ color: COLORS.accent, fontSize: 12, cursor: "pointer" }}>{t("forgotPassword", lang)}</span>
          </div>
          <button style={btnPrimary} onClick={() => onLogin({ name: form.email?.split("@")[0] || "User", role: "user", email: form.email })}>{t("signIn", lang)}</button>
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: COLORS.textMuted, marginTop: 20, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>
          {t("noAccount", lang)}{" "}
          <span style={{ color: COLORS.accent, cursor: "pointer", fontWeight: 600 }} onClick={() => setMode("choose")}>{t("register", lang)}</span>
        </p>
      </Card>
    </div>
  );

  if (mode === "choose") return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, position: "relative" }}>
      <Particles />
      <div style={{ position: "absolute", top: 20, right: lang === "ar" ? "auto" : 20, left: lang === "ar" ? 20 : "auto", zIndex: 10 }}><LangToggle /></div>
      <Card>
        <Logo />
        <h2 style={{ textAlign: "center", fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 24, fontWeight: 600, marginBottom: 24 }}>{t("joinAs", lang)}</h2>
        <div style={{ display: "flex", gap: 14, marginBottom: 20 }}>
          {[
            { key: "user", icon: "🎉", label: t("customer", lang), desc: t("customerDesc", lang), next: "register-user" },
            { key: "supplier", icon: "🏢", label: t("supplier", lang), desc: t("supplierDesc", lang), next: "register-supplier" },
          ].map(item => (
            <div key={item.key} onClick={() => setMode(item.next)} style={{
              flex: 1, padding: "20px 14px", borderRadius: 14, border: `1px solid ${COLORS.border}`,
              background: COLORS.surface, cursor: "pointer", textAlign: "center",
              transition: "all 0.2s", fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = COLORS.accent; e.currentTarget.style.background = COLORS.accentDim; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.background = COLORS.surface; }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontWeight: 600, color: COLORS.text, marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: COLORS.textMuted, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>
          {t("haveAccount", lang)}{" "}
          <span style={{ color: COLORS.accent, cursor: "pointer" }} onClick={() => setMode("login")}>{t("signInNow", lang)}</span>
        </p>
      </Card>
    </div>
  );

  if (mode === "register-user") return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, position: "relative" }}>
      <Particles />
      <div style={{ position: "absolute", top: 20, right: lang === "ar" ? "auto" : 20, left: lang === "ar" ? 20 : "auto", zIndex: 10 }}><LangToggle /></div>
      <Card>
        <Logo />
        <h2 style={{ textAlign: "center", fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 600, marginBottom: 20 }}>{t("createAccount", lang)}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { key: "name", label: t("fullName", lang), type: "text" },
            { key: "email", label: t("email", lang), type: "email" },
            { key: "phone", label: t("phone", lang), type: "tel" },
            { key: "password", label: t("password", lang), type: "password" },
          ].map(field => (
            <input key={field.key} style={inputStyle} placeholder={field.label} type={field.type}
              onChange={e => f(field.key, e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"} />
          ))}
          <select style={{ ...inputStyle }} onChange={e => f("city", e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"}>
            <option value="">{t("selectCity", lang)}</option>
            {citiesList.map(c => <option key={c.en} value={c.en}>{c[lang]}</option>)}
          </select>
          <button style={btnPrimary} onClick={() => onLogin({ name: form.name || "User", role: "user", email: form.email })}>
            {t("createAccount", lang)}
          </button>
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: COLORS.textMuted, marginTop: 16, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>
          <span style={{ color: COLORS.accent, cursor: "pointer" }} onClick={() => setMode("login")}>{t("signInNow", lang)}</span>
        </p>
      </Card>
    </div>
  );

  if (mode === "register-supplier") return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, position: "relative" }}>
      <Particles />
      <div style={{ position: "absolute", top: 20, right: lang === "ar" ? "auto" : 20, left: lang === "ar" ? 20 : "auto", zIndex: 10 }}><LangToggle /></div>
      <Card>
        <Logo />
        <h2 style={{ textAlign: "center", fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 22, fontWeight: 600, marginBottom: 20 }}>
          {t("supplier", lang)} — {t("createAccount", lang)}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { key: "name", label: t("fullName", lang), type: "text" },
            { key: "business", label: t("businessName", lang), type: "text" },
            { key: "email", label: t("email", lang), type: "email" },
            { key: "phone", label: t("phone", lang), type: "tel" },
            { key: "password", label: t("password", lang), type: "password" },
          ].map(field => (
            <input key={field.key} style={inputStyle} placeholder={field.label} type={field.type}
              onChange={e => f(field.key, e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"} />
          ))}
          <select style={{ ...inputStyle }} onChange={e => f("city", e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"}>
            <option value="">{t("selectCity", lang)}</option>
            {citiesList.map(c => <option key={c.en} value={c.en}>{c[lang]}</option>)}
          </select>
          <select style={{ ...inputStyle }} onChange={e => f("service", e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"}>
            <option value="">{t("selectService", lang)}</option>
            {serviceTypes.map(s => <option key={s.en} value={s.en}>{s[lang]}</option>)}
          </select>
          <button style={btnPrimary} onClick={() => onLogin({ name: form.business || form.name || "Supplier", role: "supplier", email: form.email })}>
            {t("createAccount", lang)}
          </button>
        </div>
      </Card>
    </div>
  );
}

// ─── HOME PAGE ───
function HomePage({ setPage, setSelectedProvider }) {
  const { lang } = useLang();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = providers.filter(p =>
    p.name[lang].toLowerCase().includes(search.toLowerCase()) ||
    p.type[lang].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <div style={{ textAlign: "center", padding: "80px 20px 60px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", padding: "6px 16px", borderRadius: 20,
          background: COLORS.accentDim, border: `1px solid ${COLORS.accent}30`,
          color: COLORS.accent, fontSize: 12, fontWeight: 600, letterSpacing: 1,
          marginBottom: 20, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
        }}>
          ✦ {t("tagline", lang)} ✦
        </div>
        <h1 style={{
          fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif",
          fontSize: "clamp(42px, 7vw, 72px)", lineHeight: 1.15, marginBottom: 20,
          background: `linear-gradient(135deg, ${COLORS.text} 40%, ${COLORS.accent})`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>
          {t("heroTitle1", lang)}<br />{t("heroTitle2", lang)}
        </h1>
        <p style={{
          color: COLORS.textMuted, fontSize: 17, lineHeight: 1.7, marginBottom: 36,
          fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
        }}>{t("heroDesc", lang)}</p>
        <div style={{ position: "relative", maxWidth: 560, margin: "0 auto" }}>
          <span style={{ position: "absolute", left: lang === "ar" ? "auto" : 16, right: lang === "ar" ? 16 : "auto", top: "50%", transform: "translateY(-50%)", fontSize: 18, pointerEvents: "none" }}>🔍</span>
          <input
            style={{
              width: "100%", padding: "16px 20px", paddingLeft: lang === "ar" ? 20 : 48, paddingRight: lang === "ar" ? 48 : 20,
              borderRadius: 14, background: COLORS.card, border: `1px solid ${COLORS.border}`,
              color: COLORS.text, fontSize: 14, outline: "none",
              fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
              textAlign: lang === "ar" ? "right" : "left",
            }}
            placeholder={t("searchPlaceholder", lang)}
            value={search} onChange={e => setSearch(e.target.value)}
            dir={lang === "ar" ? "rtl" : "ltr"}
          />
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: "0 20px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{
          fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif",
          fontSize: 28, marginBottom: 24, textAlign: lang === "ar" ? "right" : "left",
        }}>{t("browseCategories", lang)}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 14 }}>
          {categories.map(cat => (
            <div key={cat.id} onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)} style={{
              padding: "20px 16px", borderRadius: 16, cursor: "pointer", textAlign: "center",
              background: activeCategory === cat.id ? COLORS.accentDim : COLORS.card,
              border: `1px solid ${activeCategory === cat.id ? COLORS.accent : COLORS.border}`,
              transition: "all 0.2s",
            }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>{cat.icon}</div>
              <div style={{
                fontWeight: 600, fontSize: 13, color: COLORS.text, marginBottom: 4,
                fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
              }}>{cat.label[lang]}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted }}>{cat.count}+</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Providers */}
      <div style={{ padding: "0 20px 60px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
          <h2 style={{ fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 28 }}>
            {t("featuredProviders", lang)}
          </h2>
          <button onClick={() => setPage("providers")} style={{
            padding: "8px 16px", borderRadius: 10, background: COLORS.accentDim,
            border: `1px solid ${COLORS.accent}40`, color: COLORS.accent, fontSize: 13,
            cursor: "pointer", fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
          }}>{t("browseAll", lang)}</button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
          {(search ? filtered : providers.filter(p => p.featured)).map(p => (
            <ProviderCard key={p.id} provider={p} onSelect={() => { setSelectedProvider(p); setPage("provider-detail"); }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProviderCard({ provider: p, onSelect }) {
  const { lang } = useLang();
  return (
    <div onClick={onSelect} style={{
      background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 18,
      padding: 20, cursor: "pointer", transition: "all 0.2s",
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = `${COLORS.accent}60`; e.currentTarget.style.background = COLORS.cardHover; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = COLORS.border; e.currentTarget.style.background = COLORS.card; }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 14, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
        <div style={{
          width: 52, height: 52, borderRadius: 14, background: COLORS.accentDim,
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0,
        }}>{p.avatar}</div>
        <div style={{ flex: 1, textAlign: lang === "ar" ? "right" : "left" }}>
          <div style={{ fontWeight: 600, marginBottom: 2, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{p.name[lang]}</div>
          <div style={{ color: COLORS.textMuted, fontSize: 12, marginBottom: 6, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{p.type[lang]} · 📍 {p.location[lang]}</div>
          <Stars rating={p.rating} />
          <span style={{ color: COLORS.textMuted, fontSize: 11, marginLeft: lang === "ar" ? 0 : 6, marginRight: lang === "ar" ? 6 : 0 }}>({p.reviews})</span>
        </div>
        <div style={{ textAlign: lang === "ar" ? "left" : "right" }}>
          <div style={{ color: COLORS.accent, fontWeight: 700, fontSize: 14 }}>{p.price}</div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14, justifyContent: lang === "ar" ? "flex-end" : "flex-start" }}>
        {p.tags.map((tag, i) => <Badge key={i}>{tag[lang]}</Badge>)}
      </div>
    </div>
  );
}

// ─── PROVIDERS PAGE ───
function ProvidersPage({ setPage, setSelectedProvider }) {
  const { lang } = useLang();
  const [filter, setFilter] = useState("all");
  const filters = [
    { key: "all", label: t("filterAll", lang) }, { key: "Venue", label: t("filterVenue", lang) },
    { key: "Catering", label: t("filterCatering", lang) }, { key: "Photography", label: t("filterPhoto", lang) },
    { key: "Decoration", label: t("filterDecor", lang) }, { key: "Entertainment", label: t("filterEnt", lang) },
  ];
  const filtered = filter === "all" ? providers : providers.filter(p => p.type.en === filter);

  return (
    <div style={{ paddingTop: 80, padding: "100px 20px 60px", maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{
        fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif",
        fontSize: 38, marginBottom: 8, textAlign: lang === "ar" ? "right" : "left",
      }}>{t("providers", lang)}</h1>
      <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap", justifyContent: lang === "ar" ? "flex-end" : "flex-start" }}>
        {filters.map(f => (
          <button key={f.key} onClick={() => setFilter(f.key)} style={{
            padding: "8px 16px", borderRadius: 10, cursor: "pointer", fontSize: 13, fontWeight: 600,
            background: filter === f.key ? COLORS.accent : COLORS.card,
            color: filter === f.key ? "#0A0A0F" : COLORS.textMuted,
            border: `1px solid ${filter === f.key ? COLORS.accent : COLORS.border}`,
            fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
          }}>{f.label}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
        {filtered.map(p => (
          <ProviderCard key={p.id} provider={p} onSelect={() => { setSelectedProvider(p); setPage("provider-detail"); }} />
        ))}
      </div>
    </div>
  );
}

// ─── PROVIDER DETAIL ───
function ProviderDetailPage({ provider: p, setPage }) {
  const { lang } = useLang();
  const [tab, setTab] = useState("about");
  if (!p) return null;
  const tabs = ["about", "pricing", "reviews"];

  return (
    <div style={{ paddingTop: 80, maxWidth: 900, margin: "0 auto", padding: "100px 20px 60px" }}>
      <button onClick={() => setPage("providers")} style={{
        background: "none", border: "none", color: COLORS.accent, cursor: "pointer",
        fontSize: 14, marginBottom: 24, display: "flex", alignItems: "center", gap: 6,
        fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
        flexDirection: lang === "ar" ? "row-reverse" : "row",
      }}>
        {lang === "ar" ? "→" : "←"} {t("providers", lang)}
      </button>

      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 20, padding: 28, marginBottom: 20 }}>
        <div style={{ display: "flex", gap: 20, alignItems: "center", flexDirection: lang === "ar" ? "row-reverse" : "row", marginBottom: 20 }}>
          <div style={{ width: 72, height: 72, borderRadius: 18, background: COLORS.accentDim, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 34 }}>{p.avatar}</div>
          <div style={{ flex: 1, textAlign: lang === "ar" ? "right" : "left" }}>
            <h1 style={{ fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 28, marginBottom: 4 }}>{p.name[lang]}</h1>
            <div style={{ color: COLORS.textMuted, fontSize: 13, marginBottom: 8, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{p.type[lang]} · 📍 {p.location[lang]}</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: lang === "ar" ? "flex-end" : "flex-start" }}>
              {p.tags.map((tag, i) => <Badge key={i}>{tag[lang]}</Badge>)}
            </div>
          </div>
          <div style={{ textAlign: lang === "ar" ? "left" : "right" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.accent }}>
              {lang === "ar" ? `ر.س ${(p.minPrice || 10000).toLocaleString()}` : `SAR ${(p.minPrice || 10000).toLocaleString()}`}
            </div>
            <div style={{ color: COLORS.textMuted, fontSize: 11, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{t("from", lang)} / {t("perEvent", lang)}</div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 20 }}>
          {[
            { label: t("rating", lang), value: `${p.rating} ★` },
            { label: t("reviews", lang), value: p.reviews },
            { label: t("city", lang), value: p.location[lang] },
          ].map(stat => (
            <div key={stat.label} style={{ background: COLORS.surface, borderRadius: 12, padding: 14, textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 700, color: COLORS.accent }}>{stat.value}</div>
              <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 2, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 10, justifyContent: lang === "ar" ? "flex-end" : "flex-start" }}>
          <button style={{
            padding: "12px 24px", borderRadius: 12, border: "none",
            background: `linear-gradient(135deg, ${COLORS.accent}, #D4A843)`,
            color: "#0A0A0F", fontWeight: 700, fontSize: 14, cursor: "pointer",
            fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
          }}>{t("requestQuote", lang)}</button>
          <button style={{
            padding: "12px 24px", borderRadius: 12, border: `1px solid ${COLORS.accent}`,
            background: "transparent", color: COLORS.accent, fontWeight: 600, fontSize: 14, cursor: "pointer",
            fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
          }}>{t("bookNow", lang)}</button>
        </div>
      </div>

      <div style={{ display: "flex", gap: 4, marginBottom: 20, background: COLORS.surface, padding: 4, borderRadius: 12, width: "fit-content", flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
        {tabs.map(tb => (
          <button key={tb} onClick={() => setTab(tb)} style={{
            padding: "8px 18px", borderRadius: 10, cursor: "pointer", fontSize: 13,
            background: tab === tb ? COLORS.accent : "transparent",
            color: tab === tb ? "#0A0A0F" : COLORS.textMuted,
            border: "none", fontWeight: tab === tb ? 700 : 400, transition: "all 0.2s",
            fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
            textTransform: "capitalize",
          }}>{tb}</button>
        ))}
      </div>

      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 24 }}>
        {tab === "about" && (
          <p style={{ color: COLORS.textMuted, lineHeight: 1.8, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif", textAlign: lang === "ar" ? "right" : "left" }}>
            {lang === "ar"
              ? `${p.name.ar} هو مزود خدمة مميز متخصص في ${p.type.ar} للمناسبات والفعاليات في ${p.location.ar}. نقدم خدمات عالية الجودة مع خبرة تتجاوز 10 سنوات في المجال، ونحرص على تقديم تجربة لا تُنسى لكل عميل.`
              : `${p.name.en} is a premium ${p.type.en.toLowerCase()} provider serving events across ${p.location.en}. With over 10 years of experience, we deliver exceptional quality and memorable experiences for every occasion. Our team of professionals ensures seamless execution from planning to delivery.`}
          </p>
        )}
        {tab === "pricing" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { name: lang === "ar" ? "الباقة الأساسية" : "Basic Package", price: p.minPrice || 10000, features: lang === "ar" ? ["خدمة أساسية", "حتى 100 ضيف", "دعم فني"] : ["Core service", "Up to 100 guests", "Tech support"] },
              { name: lang === "ar" ? "الباقة المميزة" : "Premium Package", price: (p.minPrice || 10000) * 2, features: lang === "ar" ? ["خدمة شاملة", "حتى 300 ضيف", "تنسيق كامل", "دعم 24/7"] : ["Full service", "Up to 300 guests", "Full coordination", "24/7 support"] },
            ].map((pkg, i) => (
              <div key={i} style={{
                padding: 20, borderRadius: 14, border: `1px solid ${i === 1 ? COLORS.accent : COLORS.border}`,
                background: i === 1 ? COLORS.accentDim : COLORS.surface,
                textAlign: lang === "ar" ? "right" : "left",
              }}>
                <div style={{ fontWeight: 700, marginBottom: 8, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{pkg.name}</div>
                <div style={{ color: COLORS.accent, fontWeight: 700, fontSize: 20, marginBottom: 12 }}>
                  {lang === "ar" ? `ر.س ${pkg.price.toLocaleString()}` : `SAR ${pkg.price.toLocaleString()}`}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {pkg.features.map((f, j) => (
                    <div key={j} style={{ color: COLORS.textMuted, fontSize: 13, display: "flex", alignItems: "center", gap: 6, flexDirection: lang === "ar" ? "row-reverse" : "row", fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>
                      <span style={{ color: COLORS.success }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === "reviews" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { name: lang === "ar" ? "محمد الأحمد" : "Mohammed Al-Ahmad", rating: 5, text: lang === "ar" ? "خدمة ممتازة، تجاوزت توقعاتي بكل المقاييس" : "Exceptional service, exceeded all expectations." },
              { name: lang === "ar" ? "سارة العلي" : "Sarah Al-Ali", rating: 5, text: lang === "ar" ? "فريق محترف جداً وتنفيذ مثالي" : "Very professional team and flawless execution." },
              { name: lang === "ar" ? "فهد الخالد" : "Fahad Al-Khalid", rating: 4, text: lang === "ar" ? "جودة عالية وأسعار معقولة" : "High quality and reasonable prices." },
            ].map((rev, i) => (
              <div key={i} style={{ padding: 16, borderRadius: 12, background: COLORS.surface, textAlign: lang === "ar" ? "right" : "left" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: lang === "ar" ? "row-reverse" : "row", marginBottom: 8 }}>
                  <span style={{ fontWeight: 600, fontSize: 13, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{rev.name}</span>
                  <Stars rating={rev.rating} />
                </div>
                <p style={{ color: COLORS.textMuted, fontSize: 13, lineHeight: 1.6, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{rev.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── CREATE EVENT ───
function CreateEventPage({ setPage }) {
  const { lang } = useLang();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ type: "", date: "", guests: "", budget: "", name: "" });
  const f = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const inputStyle = {
    width: "100%", padding: "12px 14px", borderRadius: 10, background: COLORS.surface,
    border: `1px solid ${COLORS.border}`, color: COLORS.text, fontSize: 14, outline: "none",
    fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
    textAlign: lang === "ar" ? "right" : "left",
  };

  const eventTypes = [
    { id: "wedding", icon: "💍", label: { en: "Wedding", ar: "زفاف" } },
    { id: "corporate", icon: "🏢", label: { en: "Corporate", ar: "شركة" } },
    { id: "birthday", icon: "🎂", label: { en: "Birthday", ar: "عيد ميلاد" } },
    { id: "conference", icon: "🎤", label: { en: "Conference", ar: "مؤتمر" } },
    { id: "social", icon: "🥂", label: { en: "Social", ar: "اجتماعي" } },
    { id: "exhibition", icon: "🎨", label: { en: "Exhibition", ar: "معرض" } },
  ];

  return (
    <div style={{ paddingTop: 80, maxWidth: 640, margin: "0 auto", padding: "100px 20px 60px" }}>
      <h1 style={{
        fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif",
        fontSize: 34, marginBottom: 8, textAlign: lang === "ar" ? "right" : "left",
      }}>{t("createEvent", lang)}</h1>

      {/* Step indicator */}
      <div style={{ display: "flex", gap: 8, marginBottom: 32, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
        {[1, 2, 3].map(s => (
          <div key={s} style={{ flex: 1, height: 4, borderRadius: 4, background: s <= step ? COLORS.accent : COLORS.border, transition: "background 0.3s" }} />
        ))}
      </div>

      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 20, padding: 28 }}>
        {step === 1 && (
          <>
            <h2 style={{ marginBottom: 20, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 22, textAlign: lang === "ar" ? "right" : "left" }}>{t("eventType", lang)}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {eventTypes.map(et => (
                <div key={et.id} onClick={() => f("type", et.id)} style={{
                  padding: "16px 10px", borderRadius: 12, cursor: "pointer", textAlign: "center",
                  border: `1px solid ${form.type === et.id ? COLORS.accent : COLORS.border}`,
                  background: form.type === et.id ? COLORS.accentDim : COLORS.surface, transition: "all 0.2s",
                }}>
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{et.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{et.label[lang]}</div>
                </div>
              ))}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h2 style={{ marginBottom: 20, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 22, textAlign: lang === "ar" ? "right" : "left" }}>{t("eventName", lang)}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input style={inputStyle} placeholder={t("eventName", lang)} value={form.name} onChange={e => f("name", e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"} />
              <input style={inputStyle} type="date" value={form.date} onChange={e => f("date", e.target.value)} />
              <input style={inputStyle} placeholder={t("guestCount", lang)} type="number" value={form.guests} onChange={e => f("guests", e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"} />
              <input style={inputStyle} placeholder={t("budget", lang)} type="number" value={form.budget} onChange={e => f("budget", e.target.value)} dir={lang === "ar" ? "rtl" : "ltr"} />
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <h2 style={{ marginBottom: 20, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 22, textAlign: lang === "ar" ? "right" : "left" }}>Summary</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {Object.entries(form).filter(([_, v]) => v).map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: `1px solid ${COLORS.border}`, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
                  <span style={{ color: COLORS.textMuted, fontSize: 13, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif", textTransform: "capitalize" }}>{k}</span>
                  <span style={{ fontWeight: 600, fontSize: 13 }}>{v}</span>
                </div>
              ))}
            </div>
          </>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
          {step > 1 && (
            <button onClick={() => setStep(s => s - 1)} style={{
              padding: "11px 22px", borderRadius: 10, background: COLORS.surface,
              border: `1px solid ${COLORS.border}`, color: COLORS.text, cursor: "pointer", fontSize: 14,
              fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
            }}>{t("back", lang)}</button>
          )}
          <button onClick={() => { if (step < 3) setStep(s => s + 1); else setPage("my-events"); }} style={{
            padding: "11px 22px", borderRadius: 10, border: "none",
            background: `linear-gradient(135deg, ${COLORS.accent}, #D4A843)`,
            color: "#0A0A0F", fontWeight: 700, fontSize: 14, cursor: "pointer", marginLeft: "auto",
            fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
          }}>
            {step < 3 ? t("next", lang) : t("createMyEvent", lang)}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MY EVENTS ───
function MyEventsPage({ setPage }) {
  const { lang } = useLang();
  return (
    <div style={{ paddingTop: 80, maxWidth: 1000, margin: "0 auto", padding: "100px 20px 60px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
        <h1 style={{ fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 34 }}>{t("myEventsTitle", lang)}</h1>
        <button onClick={() => setPage("create")} style={{
          padding: "10px 18px", borderRadius: 12, border: "none",
          background: `linear-gradient(135deg, ${COLORS.accent}, #D4A843)`,
          color: "#0A0A0F", fontWeight: 700, fontSize: 13, cursor: "pointer",
          fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif",
        }}>{t("createNew", lang)}</button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {myEvents.map(ev => (
          <div key={ev.id} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 18, padding: 22, display: "flex", alignItems: "center", gap: 18, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
            <ProgressRing progress={ev.progress} />
            <div style={{ flex: 1, textAlign: lang === "ar" ? "right" : "left" }}>
              <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 4, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{ev.name[lang]}</div>
              <div style={{ color: COLORS.textMuted, fontSize: 12, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>
                📅 {ev.date} · 👥 {ev.guests} {t("guests", lang)} · 💰 {ev.budget}
              </div>
            </div>
            <Badge color={ev.progress > 50 ? COLORS.success : COLORS.accent}>{ev.status[lang]}</Badge>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SUPPLIER DASHBOARD ───
function SupplierDashboard({ user }) {
  const { lang } = useLang();
  const stats = [
    { label: t("totalBookings", lang), value: "47", icon: "📋" },
    { label: t("pendingQuotes", lang), value: "12", icon: "⏳" },
    { label: t("revenue", lang), value: "284,500", icon: "💰" },
    { label: t("rating", lang), value: "4.9 ★", icon: "⭐" },
  ];
  const inquiries = [
    { name: lang === "ar" ? "محمد السالم" : "Mohammed Al-Salem", event: lang === "ar" ? "حفل زفاف" : "Wedding", date: "May 20, 2026", budget: "SAR 35,000", status: lang === "ar" ? "جديد" : "New" },
    { name: lang === "ar" ? "فريق شركة الأفق" : "Al-Ufuq Corp Team", event: lang === "ar" ? "حفل شركة" : "Corporate Gala", date: "Jun 5, 2026", budget: "SAR 60,000", status: lang === "ar" ? "قيد المراجعة" : "Reviewing" },
    { name: lang === "ar" ? "عائلة العنزي" : "Al-Anazi Family", event: lang === "ar" ? "عيد ميلاد" : "Birthday Party", date: "Apr 28, 2026", budget: "SAR 18,000", status: lang === "ar" ? "مقبول" : "Accepted" },
  ];

  return (
    <div style={{ paddingTop: 80, maxWidth: 1100, margin: "0 auto", padding: "100px 20px 60px" }}>
      <h1 style={{ fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 34, marginBottom: 8, textAlign: lang === "ar" ? "right" : "left" }}>{t("supplierDashboard", lang)}</h1>
      <p style={{ color: COLORS.textMuted, marginBottom: 32, textAlign: lang === "ar" ? "right" : "left", fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{lang === "ar" ? `مرحباً، ${user?.name || "المورد"}` : `Welcome back, ${user?.name || "Supplier"}`}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 32 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 16, padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: COLORS.accent, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 12, color: COLORS.textMuted, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{s.label}</div>
          </div>
        ))}
      </div>
      <h2 style={{ fontFamily: lang === "ar" ? "'Noto Kufi Arabic',serif" : "'Cormorant Garamond',serif", fontSize: 24, marginBottom: 16, textAlign: lang === "ar" ? "right" : "left" }}>{t("recentInquiries", lang)}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {inquiries.map((inq, i) => (
          <div key={i} style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, borderRadius: 14, padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, flexDirection: lang === "ar" ? "row-reverse" : "row" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: COLORS.accentDim, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>👤</div>
            <div style={{ flex: 1, textAlign: lang === "ar" ? "right" : "left" }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 2, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{inq.name}</div>
              <div style={{ color: COLORS.textMuted, fontSize: 12, fontFamily: lang === "ar" ? "'Noto Kufi Arabic',sans-serif" : "'DM Sans',sans-serif" }}>{inq.event} · {inq.date}</div>
            </div>
            <div style={{ textAlign: lang === "ar" ? "left" : "right" }}>
              <div style={{ fontWeight: 700, color: COLORS.accent, fontSize: 13, marginBottom: 4 }}>{inq.budget}</div>
              <Badge color={inq.status === "New" || inq.status === "جديد" ? COLORS.blue : inq.status === "Accepted" || inq.status === "مقبول" ? COLORS.success : COLORS.accent}>{inq.status}</Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── MAIN APP ───
export default function App() {
  const [lang, setLang] = useState("en");
  const dir = lang === "ar" ? "rtl" : "ltr";
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogin = (u) => setUser(u);
  const handleLogout = () => { setUser(null); setPage("home"); };

  const fontFamily = lang === "ar" ? "'Noto Kufi Arabic','DM Sans',sans-serif" : "'DM Sans',sans-serif";

  const navItems = user ? [
    { id: "home", icon: "✦", label: t("explore", lang) },
    { id: "providers", icon: "🏢", label: t("providers", lang) },
    { id: "create", icon: "＋", label: t("createEvent", lang) },
    { id: "my-events", icon: "📋", label: t("myEvents", lang) },
    ...(user.role === "supplier" ? [{ id: "supplier-dashboard", icon: "📊", label: t("dashboard", lang) }] : []),
  ] : [];

  return (
    <LangCtx.Provider value={{ lang, setLang, dir }}>
      <div style={{ minHeight: "100vh", background: COLORS.bg, color: COLORS.text, fontFamily, direction: dir }}>
        <style>{`
          @keyframes float { 0%,100%{transform:translateY(0) rotate(0deg);} 33%{transform:translateY(-20px) rotate(120deg);} 66%{transform:translateY(10px) rotate(240deg);} }
          * { transition: background-color 0.2s, border-color 0.2s; }
          input::placeholder { color: #5A5A6A; }
          select option { background: #12121A; }
        `}</style>
        <Particles />

        {!user ? (
          <AuthScreen onLogin={handleLogin} />
        ) : (
          <>
            <nav style={{
              position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
              background: `${COLORS.bg}ee`, backdropFilter: "blur(20px)",
              borderBottom: `1px solid ${COLORS.border}`,
              padding: "0 24px", height: 64,
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexDirection: dir === "rtl" ? "row-reverse" : "row",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }} onClick={() => setPage("home")}>
                <div style={{
                  width: 34, height: 34, borderRadius: 10, background: COLORS.accentDim,
                  border: `1px solid ${COLORS.accent}40`, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, fontFamily: "'Noto Kufi Arabic',sans-serif", color: COLORS.accent,
                }}>م</div>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 18, color: COLORS.accent, fontWeight: 600 }}>Mahfil</span>
                <span style={{ color: COLORS.textDim, fontSize: 12 }}>·</span>
                <span style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 16, color: COLORS.accent }}>محفل</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 2, flexDirection: dir === "rtl" ? "row-reverse" : "row" }}>
                {navItems.map(item => (
                  <button key={item.id} onClick={() => setPage(item.id)} style={{
                    padding: "7px 14px", borderRadius: 10, background: page === item.id ? COLORS.accentDim : "transparent",
                    border: "none", color: page === item.id ? COLORS.accent : COLORS.textMuted,
                    fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily,
                    display: "flex", alignItems: "center", gap: 5, transition: "all 0.2s",
                  }}>
                    <span style={{ fontSize: 13 }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 10, flexDirection: dir === "rtl" ? "row-reverse" : "row" }}>
                <LangToggle />
                <div style={{ position: "relative" }}>
                  <div onClick={() => setShowProfile(p => !p)} style={{
                    width: 36, height: 36, borderRadius: 10, background: COLORS.accentDim,
                    border: `1px solid ${COLORS.accent}40`, display: "flex", alignItems: "center",
                    justifyContent: "center", cursor: "pointer", fontSize: 15,
                  }}>👤</div>
                  {showProfile && (
                    <div style={{
                      position: "absolute", top: 44, right: dir === "rtl" ? "auto" : 0, left: dir === "rtl" ? 0 : "auto",
                      background: COLORS.card, border: `1px solid ${COLORS.border}`,
                      borderRadius: 14, padding: 8, minWidth: 180, zIndex: 200, boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                    }}>
                      <div style={{ padding: "10px 14px", borderBottom: `1px solid ${COLORS.border}`, marginBottom: 4 }}>
                        <div style={{ fontWeight: 600, fontSize: 13 }}>{user.name}</div>
                        <div style={{ color: COLORS.textMuted, fontSize: 11 }}>{user.email || "—"}</div>
                      </div>
                      {[t("profile", lang), t("settings", lang)].map(item => (
                        <div key={item} style={{
                          padding: "9px 14px", borderRadius: 8, cursor: "pointer", fontSize: 13, color: COLORS.textMuted, fontFamily,
                        }}
                          onMouseEnter={e => e.currentTarget.style.background = COLORS.surfaceHover}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                          {item}
                        </div>
                      ))}
                      <div style={{ borderTop: `1px solid ${COLORS.border}`, marginTop: 4, paddingTop: 4 }}>
                        <div onClick={handleLogout} style={{
                          padding: "9px 14px", borderRadius: 8, cursor: "pointer", fontSize: 13, color: COLORS.error, fontFamily,
                        }}
                          onMouseEnter={e => e.currentTarget.style.background = `${COLORS.error}10`}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                          🚪 {t("signOut", lang)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </nav>

            {showProfile && <div onClick={() => setShowProfile(false)} style={{ position: "fixed", inset: 0, zIndex: 99 }} />}

            <div style={{ position: "relative", zIndex: 1 }}>
              {page === "home" && <HomePage setPage={setPage} setSelectedProvider={setSelectedProvider} />}
              {page === "providers" && <ProvidersPage setPage={setPage} setSelectedProvider={setSelectedProvider} />}
              {page === "provider-detail" && <ProviderDetailPage provider={selectedProvider} setPage={setPage} />}
              {page === "create" && <CreateEventPage setPage={setPage} />}
              {page === "my-events" && <MyEventsPage setPage={setPage} />}
              {page === "supplier-dashboard" && <SupplierDashboard user={user} />}
            </div>
          </>
        )}
      </div>
    </LangCtx.Provider>
  );
}
