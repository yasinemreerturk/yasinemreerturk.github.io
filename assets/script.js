const page = document.body.getAttribute("data-page");
const navLinks = Array.from(document.querySelectorAll("[data-page-target]"));

const I18N = {
  tr: {
    common: {
      nav_home: "Anasayfa",
      nav_about: "Hakkımda",
      nav_portfolio: "Portfolyo",
      nav_contact: "İletişim",
      download_cv_en: "Download CV (EN)",
      download_cv_tr: "CV İndir (TR)",
      lang_label: "Dil",
      theme_label: "Tema",
      theme_dark: "Koyu",
      theme_light: "Açık",
      footer_text: "Yasin Emre ERTÜRK. Yazılım Geliştirici Portföyü.",
      status_invalid: "Lütfen tüm zorunlu alanları doldurun.",
      status_ok: "Mesajınız alındı. En kısa sürede dönüş yapacağım.",
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
      aria_primary_nav: "Ana gezinme",
      aria_mobile_nav: "Mobil gezinme",
      aria_site_controls: "Site kontrolleri",
      menu_toggle: "Menüyü aç veya kapat",
    },
    home: {
      meta_title: "Yasin Emre ERTÜRK | Full-Stack Geliştirici (Ruby on Rails)",
      meta_description:
        "Yaklaşık 4 yıllık full-stack deneyime sahibim. Son 2 yılda Ruby on Rails odağında e-ticaret, yönetim panelleri ve operasyonel web ürünleri geliştirdim.",
      meta_og_description:
        "Yaklaşık 4 yıllık full-stack deneyim, son 2 yılda Ruby on Rails odağında ürün geliştirme.",
      hero_status: "Durum: Yeni fırsatlara açık",
      hero_heading: "Rails, sağlam mimari ve ürün güvenilirliği odağında ölçeklenebilir web uygulamaları geliştiriyorum.",
      hero_role: "Full-Stack Geliştirici (Ruby on Rails) | Backend ağırlıklı, ürün odaklı",
      hero_desc1:
        "Yaklaşık 4 yıldır full-stack geliştirme yapıyorum. Son 2 yılda Ruby on Rails odağında; e-ticaret platformları, yönetim panelleri ve operasyonel web uygulamalarında backend ve frontend geliştirdim.",
      hero_desc2:
        "Rails tabanlı ürünlerde PostgreSQL, Redis/Sidekiq ve Docker ile güvenilir akışlar kuruyor; entegrasyon, hata giderme ve modernizasyon çalışmalarında ürün kalitesine odaklanıyorum.",
      cta_projects: "Projeleri Gör",
      cta_contact: "İletişime Geç",
      info_location: "Konum: Ankara, Türkiye",
      info_role: "Rol: Full-Stack Geliştirici (Ruby on Rails)",
      info_focus: "Odak: Okunabilir, sürdürülebilir ve bakımı kolay kod",
      tech_snapshot: "Teknik Özet",
    },
    about: {
      meta_title: "Hakkımda | Yasin Emre ERTÜRK",
      meta_description:
        "Yaklaşık 4 yıllık full-stack deneyim, son 2 yılda Ruby on Rails odağında ürün geliştirme; teknoloji yığını ve deneyim özeti.",
      about_label: "Hakkımda / Özet",
      about_heading: "Full-Stack Geliştirici (Ruby on Rails)",
      about_p1:
        "Yaklaşık 4 yıllık full-stack deneyime sahibim. Son 2 yılda Ruby on Rails odağında e-ticaret, yönetim panelleri ve operasyonel web uygulamaları geliştirdim. Backend ağırlıklı çalışıyor; sürdürülebilir mimari, entegrasyonlar ve ürün kalitesine odaklanıyorum.",
      tech_stack: "Teknoloji Yığını",
      exp_log: "Deneyim",
      about_exp_role_1: "Full-Stack Yazılım Mühendisi",
      about_exp_period_1: "Nis 2023 - Şub 2025",
      about_exp_company_1: "Dia A.Ş., tam zamanlı",
      about_exp_item_1_1: "E-Power e-ticaret platformunda yeni özellikler geliştirdim ve mevcut akışların bakımını üstlendim.",
      about_exp_item_1_2: "Yönetim panelindeki ayar ve gezinme akışlarını iyileştirerek operasyonel hızı artırdım.",
      about_exp_item_1_3: "Rails, Phlex, Bootstrap ve Turbo ile geliştirilen güncellemeleri üretime aldım.",
      about_exp_item_1_4: "Entegrasyon sorunlarını gidererek sürüm kararlılığına katkı sağladım.",
      about_exp_role_2: "Yazılım Mühendisi",
      about_exp_period_2: "May 2022 - Tem 2022",
      about_exp_company_2: "Forestall Security, tam zamanlı",
      about_exp_item_2_1: "Active Directory zafiyet tarama akışlarına katkı sağladım.",
      about_exp_item_2_2: "Neo4j sorgularında performans ve sonuç doğruluğunu iyileştirdim.",
      about_exp_item_2_3: "Raporlama arayüzü ve API geliştirmelerine destek verdim.",
      about_exp_role_3: "Yazılım Mühendisi",
      about_exp_period_3: "Eki 2021 - May 2022",
      about_exp_company_3: "SAR System, tam zamanlı",
      about_exp_item_3_1: "Web tabanlı AVM yönetim sisteminin geliştirilmesine katkı sağladım.",
      about_exp_item_3_2: "Frontend ekranları geliştirdim ve backend operasyon modüllerini destekledim.",
      about_exp_item_3_3: "Kritik iş özelliklerinin bakım ve iyileştirme süreçlerinde aktif rol aldım.",
      resume_heading: "CV",
      resume_desc: "Deneyim ve proje kapsamı detayları için güncel CV dosyalarını indirebilirsiniz.",
    },
    portfolio: {
      meta_title: "Portfolyo | Yasin Emre ERTÜRK",
      meta_description:
        "Portföy: AI Post Maker, E-Power e-ticaret platformu ve AVM yönetim sistemi projelerindeki çalışmalar.",
      portfolio_label: "Portfolyo",
      portfolio_heading: "Projeler",
      portfolio_desc:
        "Gerçek ürün geliştirme süreçlerinden seçilen kısa proje özetleri.",
      project_personal: "Kişisel proje",
      project_team: "Ekip projesi",
      project_title_2: "E-Power E-Ticaret Platformu (Dia A.Ş.)",
      project_title_3: "AVM Yönetim Sistemi (SAR System)",
      p1_item_1: "Yapay zekâ destekli sosyal medya metni ve görseli üreten Rails tabanlı bir web uygulaması geliştirdim.",
      p1_item_2: "Görsel üretimi ve arka plan işleme için asenkron görev akışları kurdum.",
      p1_item_3: "Temel backend akışlarını tasarlayıp Turbo/Hotwire ile sade bir arayüzle birleştirdim.",
      p1_item_4: "Bakımı ve genişletmeyi kolaylaştıran temiz bir proje yapısı kurdum.",
      p2_item_1: "Rails tabanlı e-ticaret platformunda backend ve frontend özellik geliştirmelerinde görev aldım.",
      p2_item_2: "Ayar sayfaları, gezinme yapısı ve arama akışlarını iyileştirdim.",
      p2_item_3: "Entegrasyon güncellemeleri, hata düzeltmeleri ve günlük ürün iyileştirmelerine katkı sağladım.",
      p3_item_1: "Kira takibi, gider ve finans kayıt modüllerinin geliştirilmesine katkı sağladım.",
      p3_item_2: "Arayüz ekranları geliştirdim ve backend davranış güncellemelerini destekledim.",
      p3_item_3: "Mevcut sorunların giderilmesi ve özellik iyileştirmelerinde aktif rol aldım.",
      tech_label: "Teknoloji yığını:",
      p1_desc:
        "Kişisel proje: yapay zekâ destekli sosyal medya metni ve görsel üretimi için geliştirilen Rails uygulaması.",
      p2_desc:
        "Ekip projesi: Rails tabanlı e-ticaret ürününde özellik geliştirme, ayar akışları ve entegrasyon iyileştirmeleri.",
      p3_desc:
        "Ekip projesi: AVM yönetim ürününde kira, gider ve finans modülleri ile arayüz geliştirmeleri.",
      private_project: "Gizli şirket projesi",
      github_repo: "GitHub'da Gör",
    },
    contact: {
      meta_title: "İletişim | Yasin Emre ERTÜRK",
      meta_description:
        "İş birliği, rol fırsatları ve proje çalışmaları için iletişime geçebilirsiniz.",
      contact_label: "İletişim / İş Birliği",
      contact_status: "Durum: Görüşmeye açık",
      contact_heading: "İletişime geçin",
      contact_desc:
        "Ruby on Rails odaklı, temiz ve güvenilir web uygulamaları geliştiriyorum. Backend ağırlıklı full-stack rolde; ürün geliştirme, entegrasyon iyileştirmeleri ve sürdürülebilir kod kalitesi üzerine çalışıyorum. Uygun bir rol, proje ya da iş birliği için e-posta veya LinkedIn üzerinden ulaşabilirsiniz.",
      contact_location_title: "Konum",
      contact_timezone_title: "Saat dilimi",
      preferred_scope: "tercih_edilen_kapsam.json",
      contact_terminal_header: "yasin@workspace: ~/iletisim",
      contact_email_path: "-> ~/iletisim/e-posta",
      contact_github_path: "-> ~/iletisim/github",
      contact_linkedin_path: "-> ~/iletisim/linkedin",
      contact_x_path: "-> ~/iletisim/x",
      contact_terminal_footer: "yasin@workspace: ~/iletisim $ _",
      contact_location_value: "Ankara, Türkiye",
      scope_1: "Rails backend mimarisi ve API tasarımı",
      scope_2: "Ürün geliştirme ve refaktör",
      scope_3: "Performans iyileştirme ve sistem temizliği",
      scope_4: "React veya JavaScript ile frontend entegrasyonu",
    },
  },
  en: {
    common: {
      nav_home: "Home",
      nav_about: "About",
      nav_portfolio: "Portfolio",
      nav_contact: "Contact",
      download_cv_en: "Download CV (EN)",
      download_cv_tr: "Download CV (TR)",
      lang_label: "Language",
      theme_label: "Theme",
      theme_dark: "Dark",
      theme_light: "Light",
      footer_text: "Yasin Emre ERTÜRK. Software Developer Portfolio.",
      status_invalid: "Please fill in all required fields.",
      status_ok: "Message received. I will get back to you shortly.",
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
      aria_primary_nav: "Primary navigation",
      aria_mobile_nav: "Mobile navigation",
      aria_site_controls: "Site controls",
      menu_toggle: "Open or close menu",
    },
    home: {
      meta_title: "Yasin Emre ERTÜRK | Full-Stack Developer (Ruby on Rails)",
      meta_description:
        "Full-stack developer with around 4 years of experience, including the last 2 years focused on Ruby on Rails across e-commerce, admin panels, and operational web products.",
      meta_og_description:
        "Around 4 years of full-stack experience, with the last 2 years focused on Ruby on Rails.",
      hero_status: "Status: Open to new opportunities",
      hero_heading: "I develop scalable web applications with a focus on Rails, sound architecture, and product reliability.",
      hero_role: "Full-Stack Developer (Ruby on Rails) | Backend-leaning, product-focused",
      hero_desc1:
        "I have around 4 years of full-stack development experience. Over the last 2 years, I have focused on Ruby on Rails across e-commerce platforms, admin panels, and operational web applications.",
      hero_desc2:
        "I develop reliable Rails workflows with PostgreSQL, Redis/Sidekiq, and Docker, and I focus on integrations, bug fixes, and long-term product quality.",
      cta_projects: "View Projects",
      cta_contact: "Contact Me",
      info_location: "Location: Ankara, Turkey",
      info_role: "Role: Full-Stack Developer (Ruby on Rails)",
      info_focus: "Focus: readable, maintainable code",
      tech_snapshot: "Technical Snapshot",
    },
    about: {
      meta_title: "About | Yasin Emre ERTÜRK",
      meta_description:
        "Around 4 years of full-stack experience, with the last 2 years focused on Ruby on Rails, plus a summary of my stack and experience.",
      about_label: "About / Summary",
      about_heading: "Full-Stack Developer (Ruby on Rails)",
      about_p1:
        "I have around 4 years of full-stack development experience. Over the last 2 years, I have focused on Ruby on Rails across e-commerce, admin panels, and operational web applications. I work in a backend-leaning full-stack role with an emphasis on sustainable architecture, integrations, and product quality.",
      tech_stack: "Tech Stack",
      exp_log: "Experience",
      about_exp_role_1: "Full-Stack Software Engineer",
      about_exp_period_1: "Apr 2023 - Feb 2025",
      about_exp_company_1: "Dia A.Ş., Full-time",
      about_exp_item_1_1: "Developed new features and maintained existing flows for the E-Power e-commerce platform.",
      about_exp_item_1_2: "Improved settings and navigation flows in the admin panel to speed up daily operations.",
      about_exp_item_1_3: "Shipped production updates with Rails, Phlex, Bootstrap, and Turbo.",
      about_exp_item_1_4: "Resolved integration issues and improved release stability.",
      about_exp_role_2: "Software Engineer",
      about_exp_period_2: "May 2022 - Jul 2022",
      about_exp_company_2: "Forestall Security, Full-time",
      about_exp_item_2_1: "Contributed to Active Directory vulnerability scanning workflows.",
      about_exp_item_2_2: "Improved Neo4j query performance and result accuracy.",
      about_exp_item_2_3: "Supported reporting UI and API development.",
      about_exp_role_3: "Software Engineer",
      about_exp_period_3: "Oct 2021 - May 2022",
      about_exp_company_3: "SAR System, Full-time",
      about_exp_item_3_1: "Contributed to the development of a web-based shopping mall management system.",
      about_exp_item_3_2: "Developed frontend pages and supported backend operations modules.",
      about_exp_item_3_3: "Maintained and improved business-critical features.",
      resume_heading: "CV",
      resume_desc: "Download the latest CV files for detailed experience and project scope.",
    },
    portfolio: {
      meta_title: "Portfolio | Yasin Emre ERTÜRK",
      meta_description:
        "Portfolio projects spanning AI Post Maker, an e-commerce platform, and a shopping mall management system.",
      portfolio_label: "Portfolio",
      portfolio_heading: "Projects",
      portfolio_desc:
        "Selected project snapshots from real product development work.",
      project_personal: "Personal project",
      project_team: "Team project",
      project_title_2: "E-Power E-commerce Platform (Dia A.Ş.)",
      project_title_3: "Shopping Mall Management System (SAR System)",
      p1_item_1: "Developed a Rails-based web application that generates AI-powered social media copy and visuals.",
      p1_item_2: "Set up asynchronous job flows for image generation and background processing.",
      p1_item_3: "Designed the core backend workflows and connected them to a clean Turbo/Hotwire interface.",
      p1_item_4: "Used a clean project structure to keep the codebase easy to maintain and extend.",
      p2_item_1: "Worked on backend and frontend feature delivery in a Rails-based e-commerce platform.",
      p2_item_2: "Improved settings pages, navigation structure, and search flows.",
      p2_item_3: "Contributed to integration updates, bug fixes, and ongoing product improvements.",
      p3_item_1: "Contributed to modules for rent tracking, expense management, and financial records.",
      p3_item_2: "Developed UI screens and supported backend behavior updates.",
      p3_item_3: "Helped resolve issues and improve existing features.",
      tech_label: "Stack:",
      p1_desc:
        "Personal project: a Rails application for AI-powered social media copy and visual generation.",
      p2_desc:
        "Team project: feature delivery, settings flows, and integration improvements in a Rails-based e-commerce product.",
      p3_desc:
        "Team project: rent, expense, and finance modules with UI and backend improvements in a mall management product.",
      private_project: "Confidential company project",
      github_repo: "View on GitHub",
    },
    contact: {
      meta_title: "Contact | Yasin Emre ERTÜRK",
      meta_description:
        "Get in touch for roles, freelance work, or product collaboration.",
      contact_label: "Contact / Collaboration",
      contact_status: "Status: Open to opportunities",
      contact_heading: "Contact Me",
      contact_desc:
        "I develop clean, reliable web applications with a focus on Ruby on Rails. In a backend-leaning full-stack role, I work on product delivery, integration improvements, and maintainable code quality. Feel free to reach out by email or LinkedIn for relevant roles, projects, or collaboration.",
      contact_location_title: "Location",
      contact_timezone_title: "Time Zone",
      preferred_scope: "preferred_scope.json",
      contact_terminal_header: "yasin@workspace: ~/contact",
      contact_email_path: "-> ~/contact/email",
      contact_github_path: "-> ~/contact/github",
      contact_linkedin_path: "-> ~/contact/linkedin",
      contact_x_path: "-> ~/contact/x",
      contact_terminal_footer: "yasin@workspace: ~/contact $ _",
      contact_location_value: "Ankara, Turkey",
      scope_1: "Rails backend architecture and API design",
      scope_2: "Product development and refactoring",
      scope_3: "Performance tuning and system cleanup",
      scope_4: "Frontend integration with React or JavaScript",
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

  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria-label");
    const text = getText(lang, page, key);
    if (text) el.setAttribute("aria-label", text);
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

