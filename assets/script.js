const page = document.body.getAttribute("data-page");
const navLinks = Array.from(document.querySelectorAll("[data-page-target]"));

const I18N = {
  tr: {
    common: {
      nav_home: "Anasayfa",
      nav_about: "Hakkimda",
      nav_portfolio: "Portfolyo",
      nav_contact: "Iletisim",
      resume_pdf: "Ozgecmis.pdf",
      lang_label: "Dil",
      theme_label: "Tema",
      theme_dark: "Koyu",
      theme_light: "Acik",
      footer_text: "Yasin Emre ERTÜRK. Engineering Portfolio.",
      status_invalid: "Lutfen tum zorunlu alanlari doldurun.",
      status_ok: "Mesaj alindi. En kisa surede donus yapacagim.",
      contact_name: "Isim",
      contact_email: "E-posta",
      contact_message: "Mesaj",
      contact_submit: "Mesaj Gonder",
      ph_name: "Adiniz",
      ph_email: "ornek@mail.com",
      ph_message: "Proje detaylarini, sure ve beklentileri yazabilirsiniz",
      direct_contact: "Dogrudan Iletisim",
      location_label: "Konum",
      send_message: "Mesaj Gonder",
    },
    home: {
      meta_title: "Yasin Emre ERTÜRK | Full-stack Developer (Ruby on Rails)",
      meta_description:
        "Yaklasik 4 yillik Full-stack deneyim, son 2 yili Ruby on Rails odakli. E-ticaret, yonetim paneli ve operasyonel urun gelistirme deneyimi.",
      meta_og_description:
        "Yaklasik 4 yillik full-stack deneyim, son 2 yili Ruby on Rails odakli urun gelistirme.",
      hero_status: "System Status: Available for Hire",
      hero_heading: "Engineering scalable solutions with Rails, architecture, and product reliability.",
      hero_role: "Full-stack Developer (Ruby on Rails) | Backend-first, product-oriented",
      hero_desc1:
        "Yaklasik 4 yildir Full-stack Developer olarak calisiyorum. Bu deneyimin son 2 yili Ruby on Rails odakli gecti; bu surecte e-ticaret platformlari, yonetim panelleri ve operasyonel is uygulamalarinda hem backend hem frontend gelistirmeler yaptim.",
      hero_desc2:
        "Rails tabanli urunlerde PostgreSQL, Redis/Sidekiq ve Docker ile performansli akislar kuruyor; entegrasyon, bugfix ve yenileme calismalarinda urun kalitesine odaklaniyorum.",
      cta_projects: "Projeleri Incele",
      cta_contact: "Iletisime Gec",
      info_location: "Konum: Ankara, Türkiye",
      info_role: "Rol: Full-stack Developer (Ruby on Rails)",
      info_focus: "Odak: Surdurulebilir ve okunabilir kod",
      tech_snapshot: "Teknik Ozet",
    },
    about: {
      meta_title: "About | Yasin Emre ERTÜRK",
      meta_description:
        "Yasin Emre ERTÜRK: Yaklasik 4 yil full-stack deneyim, son 2 yil Ruby on Rails odakli calisma, teknik stack ve deneyim zaman cizelgesi.",
      about_label: "About / Ozet",
      about_heading: "Full-stack Developer (Ruby on Rails)",
      about_p1:
        "Yaklasik 4 yildir Full-stack Developer olarak calisiyorum. Bu deneyimin son 2 yili Ruby on Rails odakli gecti; bu surecte e-ticaret platformlari, yonetim panelleri ve operasyonel is uygulamalarinda hem backend hem frontend gelistirmeler yaptim.",
      tech_stack: "Teknoloji Stacki",
      exp_log: "Deneyim Logu",
      resume_heading: "Ozgecmis",
      resume_desc: "Detayli proje ve rol kapsamlarini gormek icin guncel CV dosyasini indirebilirsin.",
      download_cv: "CV Indir",
    },
    portfolio: {
      meta_title: "Portfolio | Yasin Emre ERTÜRK",
      meta_description:
        "Project portfolio: AI Post Maker, E-Power E-commerce Platform (Dia A.S.), Shopping Mall Management System (SAR System).",
      portfolio_label: "Portfolio / Secili Projeler",
      portfolio_heading: "Secili Projeler",
      portfolio_desc:
        "Gercek urun teslim sureclerinden derlenmis proje ozetleri: kisisel proje ve sirket ekip projeleri.",
      p1_desc:
        "Full-stack kisisel proje: AI destekli sosyal medya metin/gorsel uretimi, async job akisleri ve sade Turbo/Hotwire UI.",
      p2_desc:
        "Takim projesi: Rails tabanli e-ticaret urununde backend/frontend ozellikleri, ayar sayfalari, navigation/search ve entegrasyon iyilestirmeleri.",
      p3_desc:
        "Takim projesi: kira takibi, gider/finans kayit modulleri; UI ekranlari ve backend davranis iyilestirmeleri.",
      private_project: "Sirkete ait ozel proje",
      github_repo: "GitHub Repo",
    },
    contact: {
      meta_title: "Contact | Yasin Emre ERTÜRK",
      meta_description:
        "Contact Yasin Emre ERTÜRK - Full-stack Developer (Ruby on Rails) for collaboration and project work.",
      contact_label: "Contact / Is Birligi",
      contact_heading: "Stabil ve olceklenebilir bir urun gelistirelim.",
      contact_desc:
        "Asagidaki form ile proje kapsamini paylasabilirsin. Muhendislik odakli iletilere hizli donus yapiyorum.",
      preferred_scope: "tercih_edilen_kapsam.json",
      scope_1: "Rails backend mimarisi ve API tasarimi",
      scope_2: "Urun ozelligi teslimi ve refactor",
      scope_3: "Performans iyilestirme ve sistem temizligi",
      scope_4: "React/JavaScript ile frontend entegrasyonu",
    },
  },
  en: {
    common: {
      nav_home: "Home",
      nav_about: "About",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
      resume_pdf: "Resume.pdf",
      lang_label: "Language",
      theme_label: "Theme",
      theme_dark: "Dark",
      theme_light: "Light",
      footer_text: "Yasin Emre ERTÜRK. Engineering Portfolio.",
      status_invalid: "Please fill in all required fields.",
      status_ok: "Message captured. I will get back to you shortly.",
      contact_name: "Name",
      contact_email: "Email",
      contact_message: "Message",
      contact_submit: "Submit Message",
      ph_name: "Your name",
      ph_email: "you@example.com",
      ph_message: "Project details, timeline, and requirements",
      direct_contact: "Direct Contact",
      location_label: "Location",
      send_message: "Send Message",
    },
    home: {
      meta_title: "Yasin Emre ERTÜRK | Full-stack Developer (Ruby on Rails)",
      meta_description:
        "Full-stack developer with around 4 years of experience, last 2 years focused on Ruby on Rails. E-commerce, admin panel, and operational product delivery.",
      meta_og_description:
        "Around 4 years of full-stack experience, with the last 2 years focused on Ruby on Rails.",
      hero_status: "System Status: Available for Hire",
      hero_heading: "Engineering scalable solutions with Rails, architecture, and product reliability.",
      hero_role: "Full-stack Developer (Ruby on Rails) | Backend-first, product-oriented",
      hero_desc1:
        "I have around 4 years of experience as a Full-stack Developer. The last 2 years have been focused on Ruby on Rails, where I worked on e-commerce platforms, admin panels, and operational web applications across backend and frontend.",
      hero_desc2:
        "I build reliable Rails flows with PostgreSQL, Redis/Sidekiq, and Docker, and I focus on integration updates, bug fixes, and sustainable product quality.",
      cta_projects: "View Projects",
      cta_contact: "Get in Touch",
      info_location: "Location: Ankara, Türkiye",
      info_role: "Role: Full-stack Developer (Ruby on Rails)",
      info_focus: "Focus: Maintainable and readable code",
      tech_snapshot: "Technical Snapshot",
    },
    about: {
      meta_title: "About | Yasin Emre ERTÜRK",
      meta_description:
        "Yasin Emre ERTÜRK: Around 4 years of full-stack experience, last 2 years focused on Ruby on Rails, technical stack and timeline.",
      about_label: "About / Summary",
      about_heading: "Full-stack Developer (Ruby on Rails)",
      about_p1:
        "I have around 4 years of experience as a Full-stack Developer. The last 2 years have been focused on Ruby on Rails, where I worked on e-commerce platforms, admin panels, and operational web applications across backend and frontend.",
      tech_stack: "Tech Stack",
      exp_log: "Experience Log",
      resume_heading: "Resume",
      resume_desc: "Download my current CV for detailed role scopes and project contributions.",
      download_cv: "Download CV",
    },
    portfolio: {
      meta_title: "Portfolio | Yasin Emre ERTÜRK",
      meta_description:
        "Project portfolio: AI Post Maker, E-Power E-commerce Platform (Dia A.S.), Shopping Mall Management System (SAR System).",
      portfolio_label: "Portfolio / Selected Work",
      portfolio_heading: "Selected Projects",
      portfolio_desc:
        "Project snapshots from real product workflows: personal build and company team projects.",
      p1_desc:
        "Full-stack personal project for AI-powered social media text/image generation with async jobs and clean Turbo/Hotwire flows.",
      p2_desc:
        "Team project: backend/frontend feature delivery in a Rails e-commerce product, including settings, navigation/search, and integration improvements.",
      p3_desc:
        "Team project: rental tracking, utility/financial modules, UI screens, and backend behavior improvements.",
      private_project: "Private company project",
      github_repo: "GitHub Repo",
    },
    contact: {
      meta_title: "Contact | Yasin Emre ERTÜRK",
      meta_description:
        "Contact Yasin Emre ERTÜRK - Full-stack Developer (Ruby on Rails) for collaboration and project work.",
      contact_label: "Contact / Collaboration",
      contact_heading: "Let us build something stable and scalable.",
      contact_desc:
        "Share your project scope through the form below. I respond quickly to engineering-focused opportunities.",
      preferred_scope: "preferred_scope.json",
      scope_1: "Rails backend architecture and API design",
      scope_2: "Product feature delivery and refactoring",
      scope_3: "Performance tuning and system cleanup",
      scope_4: "Frontend integration with React/JavaScript",
    },
  },
};

const LANG_STORAGE_KEY = "site_lang";
const THEME_STORAGE_KEY = "site_theme";
let currentLang = "tr";
let currentTheme = "dark";

const getText = (lang, pageName, key) => {
  if (I18N[lang] && I18N[lang][pageName] && I18N[lang][pageName][key]) {
    return I18N[lang][pageName][key];
  }
  if (I18N[lang] && I18N[lang].common && I18N[lang].common[key]) {
    return I18N[lang].common[key];
  }
  return null;
};

const applyI18n = (lang) => {
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = getText(lang, page, key);
    if (text) el.textContent = text;
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const key = el.getAttribute("data-i18n-content");
    const text = getText(lang, page, key);
    if (text) el.setAttribute("content", text);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const text = getText(lang, page, key);
    if (text) el.setAttribute("placeholder", text);
  });

  const titleKey = document.body.getAttribute("data-i18n-title");
  if (titleKey) {
    const title = getText(lang, page, titleKey);
    if (title) document.title = title;
  }
};

const syncControlState = () => {
  const langLabel = currentLang === "tr" ? "Dili degistir" : "Switch language";
  const themeLabel =
    currentLang === "tr"
      ? currentTheme === "dark"
        ? "Acik temaya gec"
        : "Koyu temaya gec"
      : currentTheme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme";

  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.setAttribute("aria-label", langLabel);
    btn.setAttribute("title", langLabel);
  });

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.setAttribute("aria-label", themeLabel);
    btn.setAttribute("title", themeLabel);
  });

  document.querySelectorAll("[data-lang-current]").forEach((badge) => {
    badge.textContent = currentLang.toUpperCase();
  });
};

const applyTheme = (theme) => {
  const resolved = theme === "light" ? "light" : "dark";
  currentTheme = resolved;
  document.body.setAttribute("data-theme", resolved);
  document.body.classList.toggle("theme-light", resolved === "light");
};

const setLanguage = (lang, persist = true) => {
  const resolved = lang === "en" ? "en" : "tr";
  currentLang = resolved;
  if (persist) localStorage.setItem(LANG_STORAGE_KEY, resolved);
  applyI18n(resolved);
  syncControlState();
};

const setTheme = (theme, persist = true) => {
  const resolved = theme === "light" ? "light" : "dark";
  if (persist) localStorage.setItem(THEME_STORAGE_KEY, resolved);
  applyTheme(resolved);
  syncControlState();
};

const initLanguage = () => {
  const toggles = Array.from(document.querySelectorAll("[data-lang-toggle]"));
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  const initial = saved === "en" ? "en" : "tr";

  setLanguage(initial, false);

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const next = currentLang === "tr" ? "en" : "tr";
      setLanguage(next, true);
    });
  });
};

const initTheme = () => {
  const toggles = Array.from(document.querySelectorAll("[data-theme-toggle]"));

  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  const initial = saved === "light" ? "light" : "dark";

  setTheme(initial, false);

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const next = currentTheme === "dark" ? "light" : "dark";
      setTheme(next, true);
    });
  });
};

navLinks.forEach((link) => {
  if (link.getAttribute("data-page-target") === page) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
  } else {
    link.removeAttribute("aria-current");
  }
});

const toggleButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

const closeMenu = () => {
  if (!toggleButton || !mobileMenu) return;
  toggleButton.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
};

if (toggleButton && mobileMenu) {
  toggleButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

document.querySelectorAll(".js-year").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

initLanguage();
initTheme();

const form = document.querySelector("[data-contact-form]");
if (form) {
  const status = document.querySelector("[data-form-status]");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const lang = localStorage.getItem(LANG_STORAGE_KEY) === "en" ? "en" : "tr";

    if (!name || !email || !message) {
      if (status) status.textContent = I18N[lang].common.status_invalid;
      return;
    }

    if (status) status.textContent = I18N[lang].common.status_ok;
    form.reset();
  });
}

