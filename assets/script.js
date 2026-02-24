const page = document.body.getAttribute("data-page");
const navLinks = Array.from(document.querySelectorAll("[data-page-target]"));

const I18N = {
  tr: {
    common: {
      nav_home: "Anasayfa",
      nav_about: "Hakkımda",
      nav_portfolio: "Portfolyo",
      nav_contact: "İletişim",
      resume_pdf: "PDF Önizleme",
      download_cv: "CV İndir",
      lang_label: "Dil",
      theme_label: "Tema",
      theme_dark: "Koyu",
      theme_light: "Açık",
      footer_text: "Yasin Emre ERTÜRK. Mühendislik Portföyü.",
      status_invalid: "Lütfen tüm zorunlu alanları doldurun.",
      status_ok: "Mesaj alındı. En kısa sürede dönüş sağlanacaktır.",
      contact_name: "İsim",
      contact_email: "E-posta",
      contact_message: "Mesaj",
      contact_submit: "Mesaj Gönder",
      ph_name: "Adınız",
      ph_email: "ad.soyad@example.com",
      ph_message: "Proje detayları, süre ve beklentiler paylaşılabilir.",
      direct_contact: "Doğrudan İletişim",
      location_label: "Konum",
      send_message: "Mesaj Gönder",
    },
    home: {
      meta_title: "Yasin Emre ERTÜRK | Full-stack Geliştirici (Ruby on Rails)",
      meta_description:
        "Yaklaşık 4 yıllık full-stack deneyim kapsamında; son 2 yılda Ruby on Rails odağında e-ticaret, yönetim paneli ve operasyonel ürün geliştirme çalışmaları yürütülmüştür.",
      meta_og_description:
        "Yaklaşık 4 yıllık full-stack deneyim kapsamında; son 2 yılda Ruby on Rails odağında ürün geliştirme çalışmaları yürütülmüştür.",
      hero_status: "Sistem Durumu: Yeni fırsatlara açık",
      hero_heading: "Rails, mimari yaklaşım ve ürün güvenilirliği odağında ölçeklenebilir çözümler geliştirilmektedir.",
      hero_role: "Full-stack Geliştirici (Ruby on Rails) | Backend odaklı, ürün odaklı",
      hero_desc1:
        "Yaklaşık 4 yıldır full-stack geliştirme alanında çalışılmaktadır. Bu sürenin son 2 yılında Ruby on Rails odağında; e-ticaret platformları, yönetim panelleri ve operasyonel iş uygulamalarında backend ve frontend geliştirmeleri gerçekleştirilmiştir.",
      hero_desc2:
        "Rails tabanlı ürünlerde PostgreSQL, Redis/Sidekiq ve Docker kullanılarak yüksek performanslı akışlar kurulmakta; entegrasyon, hata giderme ve modernizasyon çalışmalarında ürün kalitesi gözetilmektedir.",
      cta_projects: "Projeleri İncele",
      cta_contact: "İletişime Geç",
      info_location: "Konum: Ankara, Türkiye",
      info_role: "Rol: Full-stack Geliştirici (Ruby on Rails)",
      info_focus: "Odak: Sürdürülebilir, okunabilir ve bakım kolaylığı yüksek kod",
      tech_snapshot: "Teknik Özet",
    },
    about: {
      meta_title: "Hakkımda | Yasin Emre ERTÜRK",
      meta_description:
        "Yasin Emre ERTÜRK: Yaklaşık 4 yıllık full-stack deneyim, son 2 yılda Ruby on Rails odağında yürütülen çalışmalar; teknoloji yığını ve deneyim zaman çizelgesi.",
      about_label: "Hakkımda / Genel Çerçeve",
      about_heading: "Full-stack Geliştirici (Ruby on Rails)",
      about_p1:
        "Yaklaşık 4 yıldır full-stack geliştirme alanında çalışılmaktadır. Bu sürenin son 2 yılında Ruby on Rails odağında; e-ticaret platformları, yönetim panelleri ve operasyonel iş uygulamalarında backend ve frontend geliştirmeleri gerçekleştirilmiştir.",
      tech_stack: "Teknoloji Yığını",
      exp_log: "Deneyim Geçmişi",
      about_exp_role_1: "Full-stack Yazılım Mühendisi",
      about_exp_period_1: "Nis 2023 - Şub 2025",
      about_exp_company_1: "Dia A.Ş., Tam zamanlı",
      about_exp_item_1_1: "E-Power e-ticaret platformu için özellik geliştirme ve bakım çalışmaları yürütülmüştür.",
      about_exp_item_1_2: "Yönetim panelindeki işlem hızını artırmak amacıyla ayar ve gezinme akışları iyileştirilmiştir.",
      about_exp_item_1_3: "Rails, Phlex, Bootstrap ve Turbo ile geliştirilen güncellemeler canlı ortama alınmıştır.",
      about_exp_item_1_4: "Entegrasyon kaynaklı sorunlar giderilerek sürüm kararlılığına katkı sağlanmıştır.",
      about_exp_role_2: "Yazılım Mühendisi",
      about_exp_period_2: "May 2022 - Tem 2022",
      about_exp_company_2: "Forestall Security, Tam zamanlı",
      about_exp_item_2_1: "Active Directory zafiyet tarama iş akışlarına katkı sağlanmıştır.",
      about_exp_item_2_2: "Neo4j sorgularında performans ve sonuç doğruluğu iyileştirilmiştir.",
      about_exp_item_2_3: "Raporlama arayüzü ve API özelliklerinin geliştirilmesine destek verilmiştir.",
      about_exp_role_3: "Yazılım Mühendisi",
      about_exp_period_3: "Eki 2021 - May 2022",
      about_exp_company_3: "SAR System, Tam zamanlı",
      about_exp_item_3_1: "Web tabanlı alışveriş merkezi yönetim sistemi üzerinde geliştirme çalışmaları yürütülmüştür.",
      about_exp_item_3_2: "Frontend ekranları geliştirilmiş, backend operasyon modüllerine destek verilmiştir.",
      about_exp_item_3_3: "İş açısından kritik özelliklerin bakım ve iyileştirme süreçlerinde aktif rol üstlenilmiştir.",
      resume_heading: "Özgeçmiş",
      resume_desc: "Detaylı proje ve rol kapsamlarının incelenmesi için güncel CV dosyası indirilebilir.",
    },
    portfolio: {
      meta_title: "Portfolyo | Yasin Emre ERTÜRK",
      meta_description:
        "Proje portföyü: AI Post Maker, E-Power E-commerce Platform (Dia A.S.) ve Shopping Mall Management System (SAR System) kapsamında yürütülen çalışmalar.",
      portfolio_label: "Portfolyo / Seçili Projeler",
      portfolio_heading: "Seçili Projeler",
      portfolio_desc:
        "Gerçek ürün geliştirme süreçlerinden derlenen proje özetlerine yer verilmiştir: kişisel proje ve ekip projeleri.",
      project_personal: "Kişisel full-stack proje",
      project_team: "Takım projesi",
      p1_item_1: "Yapay zekâ destekli sosyal medya metni ve görseli üreten Rails tabanlı bir web uygulaması geliştirilmiştir.",
      p1_item_2: "Asenkron görevler için görsel üretim araçları ve arka plan işleme süreçleri entegre edilmiştir.",
      p1_item_3: "Temel backend akışları tasarlanmış ve Turbo/Hotwire ile sade bir arayüzle bütünleştirilmiştir.",
      p1_item_4: "Bakım ve genişletilebilirliği kolaylaştıran temiz bir proje yapısı kurgulanmıştır.",
      p2_item_1: "Rails tabanlı e-ticaret platformunda backend ve frontend özellik geliştirme çalışmalarında görev alınmıştır.",
      p2_item_2: "Ayar sayfaları, gezinme yapısı ve arama odaklı erişim iyileştirilmiştir.",
      p2_item_3: "Entegrasyon güncellemeleri, hata düzeltmeleri ve günlük ürün iyileştirmelerine katkı sağlanmıştır.",
      p3_item_1: "Kira takibi, gider kalemleri ve finansal kayıt modüllerinin geliştirilmesine destek verilmiştir.",
      p3_item_2: "Arayüz ekranları geliştirilmiş ve backend tarafındaki davranış güncellemelerine katkı sağlanmıştır.",
      p3_item_3: "Mevcut özelliklerde görülen sorunların giderilmesi ve iyileştirme çalışmalarında aktif rol üstlenilmiştir.",
      tech_label: "Teknolojiler:",
      p1_desc:
        "Kişisel full-stack proje: AI destekli sosyal medya metni ve görsel üretimi, asenkron görev akışları ve sade Turbo/Hotwire arayüzü kurgulanmıştır.",
      p2_desc:
        "Takım projesi: Rails tabanlı e-ticaret ürününde backend/frontend özellik geliştirme, ayar sayfaları, gezinme/arama ve entegrasyon iyileştirmeleri gerçekleştirilmiştir.",
      p3_desc:
        "Takım projesi: kira takibi, gider ve finans kayıt modülleri; arayüz ekranları ve backend davranış iyileştirmeleri yürütülmüştür.",
      private_project: "Şirkete ait özel proje",
      github_repo: "GitHub Deposu",
    },
    contact: {
      meta_title: "İletişim | Yasin Emre ERTÜRK",
      meta_description:
        "Yasin Emre ERTÜRK ile iş birliği ve proje çalışmaları için iletişim kurulabilir.",
      contact_label: "İletişim / İş Birliği",
      contact_status: "Bağlantı Durumu: Çevrimiçi",
      contact_heading: "İletişim Protokolü Başlatılır",
      contact_desc:
        "Ruby on Rails odağında temiz, güvenilir ve ölçeklenebilir web uygulamaları geliştirilmektedir. Junior-mid seviye gelişim sürecinde, katkı sunulabilecek ve öğrenimin sürdürülebileceği ekiplerle çalışılması hedeflenmektedir. Sağlam backend mimarisi ve özenli geliştirme kültürünü önceliklendiren ekiplerle iletişim kurulmasından memnuniyet duyulacaktır.",
      contact_location_title: "Konum",
      contact_timezone_title: "Saat Dilimi",
      preferred_scope: "tercih_edilen_kapsam.json",
      scope_1: "Rails backend mimarisi ve API tasarımı",
      scope_2: "Ürün özelliği teslimi ve refaktör",
      scope_3: "Performans iyileştirme ve sistem temizliği",
      scope_4: "React/JavaScript ile frontend entegrasyonu",
    },
  },
  en: {
    common: {
      nav_home: "Home",
      nav_about: "About",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
      resume_pdf: "Preview PDF",
      download_cv: "Download CV",
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
      about_exp_role_1: "Full-stack Software Engineer",
      about_exp_period_1: "Apr 2023 - Feb 2025",
      about_exp_company_1: "Dia A.S., Full-time",
      about_exp_item_1_1: "Developed and maintained features for the E-Power e-commerce platform.",
      about_exp_item_1_2: "Improved settings and navigation flows for faster admin operations.",
      about_exp_item_1_3: "Built and shipped updates with Rails, Phlex, Bootstrap, and Turbo.",
      about_exp_item_1_4: "Fixed integration issues and supported release stability.",
      about_exp_role_2: "Software Engineer",
      about_exp_period_2: "May 2022 - Jul 2022",
      about_exp_company_2: "Forestall Security, Full-time",
      about_exp_item_2_1: "Contributed to Active Directory vulnerability scanning workflows.",
      about_exp_item_2_2: "Improved Neo4j query performance and result handling accuracy.",
      about_exp_item_2_3: "Supported reporting UI and API features.",
      about_exp_role_3: "Software Engineer",
      about_exp_period_3: "Oct 2021 - May 2022",
      about_exp_company_3: "SAR System, Full-time",
      about_exp_item_3_1: "Worked on a web-based shopping mall management system.",
      about_exp_item_3_2: "Built frontend pages and supported backend operations modules.",
      about_exp_item_3_3: "Maintained and improved business-critical features.",
      resume_heading: "Resume",
      resume_desc: "Download my current CV for detailed role scopes and project contributions.",
    },
    portfolio: {
      meta_title: "Portfolio | Yasin Emre ERTÜRK",
      meta_description:
        "Project portfolio: AI Post Maker, E-Power E-commerce Platform (Dia A.S.), Shopping Mall Management System (SAR System).",
      portfolio_label: "Portfolio / Selected Work",
      portfolio_heading: "Selected Projects",
      portfolio_desc:
        "Project snapshots from real product workflows: personal build and company team projects.",
      project_personal: "Full-stack personal project",
      project_team: "Team project",
      p1_item_1: "Built a Rails-based web app that generates AI-powered social media text and images.",
      p1_item_2: "Integrated image generation tools and background job processing for async tasks.",
      p1_item_3: "Designed core back-end flows and connected them to a simple, clear UI with Turbo/Hotwire.",
      p1_item_4: "Used clean project structure to keep features easy to maintain and extend.",
      p2_item_1: "Worked on both back-end and front-end features in a Ruby on Rails based e-commerce platform.",
      p2_item_2: "Built and improved settings pages, including navigation and search-based access.",
      p2_item_3: "Contributed to integration updates, bug fixes, and daily product improvements.",
      p3_item_1: "Helped develop modules for rental tracking, utility costs, and financial records.",
      p3_item_2: "Built UI screens and supported system behavior with back-end changes.",
      p3_item_3: "Took part in fixing issues and improving existing features.",
      tech_label: "Tech:",
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
      contact_status: "Connection Status: Online",
      contact_heading: "Initialize Protocol",
      contact_desc:
        "I am a Rails-focused developer who enjoys building clean, reliable, and scalable web applications. While growing between junior and mid-level, I am looking for teams where I can contribute, learn, and build meaningful products. If you value solid backend architecture and thoughtful development, I would be glad to connect.",
      contact_location_title: "Base of Operations",
      contact_timezone_title: "Current Timezone",
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
  const langLabel = currentLang === "tr" ? "Dili değiştir" : "Switch language";
  const themeLabel =
    currentLang === "tr"
      ? currentTheme === "dark"
        ? "Açık temaya geç"
        : "Koyu temaya geç"
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

