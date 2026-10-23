(function () {
  "use strict";

  var I18N = {
    en: {
      nav_home: "Home", nav_who: "Who we are", nav_what: "What we do", nav_contact: "Contact us", nav_team: "Our team",
      hero_eyebrow: "Interior Design", hero_sub: "Intelligent Design", hero_name: "Antonios Paraschidis",
      hero_cta: "Start your project",
      who_eyebrow: "Who we are",
      who_p1: "Antonios Paraschidis was born in the city of Drama, Greece, son of Symeon and Vasiliki. He was educated at the Economic Lyceum and the Boys' Lyceum of Drama, schools closely tied to the history of education in the city.",
      who_p2: "The Boys' Lyceum (today the 1st General Lyceum of Drama) is one of the most historic and imposing school buildings in Greece. It stands on Katakouzinou 12 at the north-western edge of the city; construction began in 1927–1928, under the government of Eleftherios Venizelos, in a neo-Byzantine style designed by G. Pantzaris. It is known for its vast, lush, dreamlike courtyard and its characteristic E-shaped plan.",
      who_p3: "He later relocated to Thessaloniki, where he began and expanded his knowledge of furniture design, balcony and stair design, the architecture of rooms and the architecture of lighting. He travelled to Italy, where he studied emblematic buildings and gardens, and collaborated with professionals from Germany. He has managed construction and design projects in almost every city in Greece.",
      who_p4: "He has designed solutions for private condominiums in Santorini and for businesses of every kind: from aesthetic hair salons to multi-level constructions and professional dining atmospheres for some of the most exquisite stores.",
      who_quote: "We provide high-level professional proposals, able to handle Interior Architecture and Design with an inventive and critical spirit — balancing Science and Art, and the practical side of Design. Our understanding of design and its practical applications, combined with decades of experience, lets us guarantee results that have impressed, and will impress you too.",
      what_eyebrow: "What we do", what_title: "Design that works as well as it looks",
      s1_t: "Interior Architecture", s1_p: "Complete planning of rooms and spaces: layout, flow, materials, colour and atmosphere.",
      s2_t: "Furniture Design", s2_p: "Bespoke furniture conceived for your space and the way you actually use it.",
      s3_t: "Balconies & Stairs", s3_p: "Balcony and staircase design that joins structure, safety and character.",
      s4_t: "Lighting Architecture", s4_p: "Lighting schemes that shape mood, highlight detail and save energy.",
      s5_t: "Commercial Spaces", s5_p: "Hair and beauty salons, multi-level stores and professional dining environments.",
      s6_t: "Residences & Condos", s6_p: "Private homes and condominiums, including island projects such as Santorini.",
      s7_t: "Project Management", s7_p: "From first sketch to final handover: coordination of design and construction anywhere in Greece.",
      contact_eyebrow: "Contact us", contact_title: "Tell us about your space",
      contact_p: "Send us a few details and, if you have them, plans or documents (PDF, Word, PowerPoint, AutoCAD). We will reply by email.",
      f_name: "Name", f_surname: "Surname", f_email: "Email", f_phone: "Phone",
      f_about: "What is your message about?", f_about_ph: "e.g. Apartment renovation, shop design…",
      f_message: "Message",
      f_file: "Attachments (PDF, Word, PowerPoint, AutoCAD .dwg/.dxf)",
      f_file_note: "Maximum total size 5 MB.",
      f_send: "Send message",
      err_required: "Please fill in all required fields (*).",
      err_type: "This file type is not accepted: ",
      err_size: "The attachments are larger than 5 MB in total.",
      footer_tag: "Interior Design · Intelligent Design",
      theme_label: "Background shade", theme_1: "Darkest", theme_2: "Dark", theme_3: "Light", theme_4: "Lightest",
      team_eyebrow: "Our team", team_title: "The people behind the design",
      m_email: "Email", m_phone: "Phone", m_linkedin: "LinkedIn", m_website: "Website",
      m_cv: "Curriculum Vitae", m_cv_dl: "Download CV", m_contact: "Contact us", m_enquiry: "Enquiry for "
    },
    el: {
      nav_home: "Αρχική", nav_who: "Ποιοι είμαστε", nav_what: "Τι κάνουμε", nav_contact: "Επικοινωνία", nav_team: "Η ομάδα μας",
      hero_eyebrow: "Εσωτερική Αρχιτεκτονική", hero_sub: "Intelligent Design", hero_name: "Αντώνιος Παρασχίδης",
      hero_cta: "Ξεκινήστε το project σας",
      who_eyebrow: "Ποιοι είμαστε",
      who_p1: "Ο Αντώνιος Παρασχίδης γεννήθηκε στη Δράμα, γιος του Συμεών και της Βασιλικής. Φοίτησε στο Οικονομικό Λύκειο και στο Αρρένων Λύκειο Δράμας, σχολεία στενά συνδεδεμένα με την ιστορία της εκπαίδευσης στην πόλη.",
      who_p2: "Το Αρρένων Λύκειο (σημερινό 1ο Γενικό Λύκειο Δράμας) είναι ένα από τα πιο ιστορικά και επιβλητικά σχολικά κτίρια της Ελλάδας. Βρίσκεται στο βορειοδυτικό άκρο της πόλης, επί της οδού Κατακουζηνού 12· η κατασκευή του ξεκίνησε το 1927–1928, επί κυβέρνησης Ελευθερίου Βενιζέλου, σε νεοβυζαντινό ρυθμό (σχέδια Γ. Παντζάρη). Φημίζεται για την τεράστια, καταπράσινη, «ονειρική» αυλή του και τη χαρακτηριστική αρχιτεκτονική του σε σχήμα «Ε».",
      who_p3: "Στη συνέχεια εγκαταστάθηκε στη Θεσσαλονίκη, όπου ξεκίνησε και εμβάθυνε τη γνώση του στον σχεδιασμό επίπλου, μπαλκονιών και σκαλών, στην αρχιτεκτονική των χώρων και στην αρχιτεκτονική του φωτισμού. Ταξίδεψε στην Ιταλία, όπου μελέτησε εμβληματικά κτίρια και κήπους, και συνεργάστηκε με επαγγελματίες από τη Γερμανία. Έχει διαχειριστεί έργα κατασκευής και σχεδιασμού σχεδόν σε κάθε πόλη της Ελλάδας.",
      who_p4: "Έχει σχεδιάσει λύσεις για ιδιωτικά διαμερίσματα στη Σαντορίνη και για επιχειρήσεις κάθε είδους: από κομμωτήρια και κέντρα αισθητικής έως πολυώροφες κατασκευές και επαγγελματικές ατμόσφαιρες εστίασης για μερικά από τα πιο εκλεκτά καταστήματα.",
      who_quote: "Παρέχουμε επαγγελματικές προτάσεις υψηλού επιπέδου, ικανές να διαχειριστούν την Εσωτερική Αρχιτεκτονική και το Design με ένα ευρηματικό και κριτικό πνεύμα. Ισορροπώντας μεταξύ Επιστήμης και Τέχνης, και την πρακτική πλευρά του Design, η κατανόηση του Design και των χρηστικών εφαρμογών μας σε συνδυασμό με την εμπειρία δεκαετιών εγγυάται αποτελέσματα που εντυπωσίασαν και θα εντυπωσιάσουν και εσάς.",
      what_eyebrow: "Τι κάνουμε", what_title: "Design που λειτουργεί όσο καλά φαίνεται",
      s1_t: "Εσωτερική Αρχιτεκτονική", s1_p: "Ολοκληρωμένος σχεδιασμός χώρων: διάταξη, ροή, υλικά, χρώμα και ατμόσφαιρα.",
      s2_t: "Σχεδιασμός Επίπλων", s2_p: "Έπιπλα φτιαγμένα στα μέτρα του χώρου σας και του τρόπου που τον χρησιμοποιείτε.",
      s3_t: "Μπαλκόνια & Σκάλες", s3_p: "Σχεδιασμός μπαλκονιών και κλιμάκων που ενώνει στατικότητα, ασφάλεια και χαρακτήρα.",
      s4_t: "Αρχιτεκτονική Φωτισμού", s4_p: "Φωτισμός που διαμορφώνει την ατμόσφαιρα, αναδεικνύει τις λεπτομέρειες και εξοικονομεί ενέργεια.",
      s5_t: "Επαγγελματικοί Χώροι", s5_p: "Κομμωτήρια, κέντρα αισθητικής, πολυώροφα καταστήματα και χώροι εστίασης.",
      s6_t: "Κατοικίες & Διαμερίσματα", s6_p: "Ιδιωτικές κατοικίες και διαμερίσματα, μεταξύ άλλων έργα σε νησιά όπως η Σαντορίνη.",
      s7_t: "Διαχείριση Έργου", s7_p: "Από το πρώτο σκίτσο έως την τελική παράδοση: συντονισμός μελέτης και κατασκευής οπουδήποτε στην Ελλάδα.",
      contact_eyebrow: "Επικοινωνία", contact_title: "Πείτε μας για τον χώρο σας",
      contact_p: "Στείλτε μας λίγα στοιχεία και, αν τα έχετε, σχέδια ή έγγραφα (PDF, Word, PowerPoint, AutoCAD). Θα απαντήσουμε με email.",
      f_name: "Όνομα", f_surname: "Επώνυμο", f_email: "Email", f_phone: "Τηλέφωνο",
      f_about: "Θέμα του μηνύματός σας", f_about_ph: "π.χ. Ανακαίνιση διαμερίσματος, σχεδιασμός καταστήματος…",
      f_message: "Μήνυμα",
      f_file: "Συνημμένα (PDF, Word, PowerPoint, AutoCAD .dwg/.dxf)",
      f_file_note: "Μέγιστο συνολικό μέγεθος 5 MB.",
      f_send: "Αποστολή μηνύματος",
      err_required: "Συμπληρώστε όλα τα υποχρεωτικά πεδία (*).",
      err_type: "Μη αποδεκτός τύπος αρχείου: ",
      err_size: "Τα συνημμένα ξεπερνούν συνολικά τα 5 MB.",
      footer_tag: "Εσωτερική Αρχιτεκτονική · Intelligent Design",
      theme_label: "Απόχρωση φόντου", theme_1: "Πολύ σκούρο", theme_2: "Σκούρο", theme_3: "Ανοιχτό", theme_4: "Πολύ ανοιχτό",
      team_eyebrow: "Η ομάδα μας", team_title: "Οι άνθρωποι πίσω από το design",
      m_email: "Email", m_phone: "Τηλέφωνο", m_linkedin: "LinkedIn", m_website: "Ιστότοπος",
      m_cv: "Βιογραφικό", m_cv_dl: "Λήψη βιογραφικού", m_contact: "Επικοινωνία", m_enquiry: "Ερώτημα για "
    }
  };

  var current = "en";

  /* ---- Team cards (data lives in js/team.js) ---- */
  var openMembers = {};

  function safeUrl(u) { return /^https?:\/\//i.test(u || "") ? u : ""; }
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function row(label, value, href, external) {
    var r = el("div", "m-row");
    r.appendChild(el("span", "m-label", label));
    var v;
    if (href) {
      v = el("a", "m-value", value);
      v.href = href;
      if (external) { v.target = "_blank"; v.rel = "noopener noreferrer"; }
    } else { v = el("span", "m-value", value); }
    r.appendChild(v);
    return r;
  }

  function renderTeam() {
    var grid = document.getElementById("teamGrid");
    if (!grid || !window.TEAM) return;
    var d = I18N[current];
    grid.textContent = "";
    window.TEAM.forEach(function (m, i) {
      var first = (current === "el" && m.nameEl) || m.name || "";
      var last = (current === "el" && m.surnameEl) || m.surname || "";
      var full = (first + " " + last).trim();
      var role = m.role ? (m.role[current] || m.role.en || "") : "";
      var id = "member-" + i;

      var card = el("article", "member" + (openMembers[id] ? " open" : ""));
      var box = el("div", "member-box");

      var head = el("button", "member-head");
      head.type = "button";
      head.setAttribute("aria-expanded", openMembers[id] ? "true" : "false");
      head.setAttribute("aria-controls", id);

      var av = el("span", "avatar");
      var initials = ((first[0] || "") + (last[0] || "")).toUpperCase();
      av.appendChild(el("span", "avatar-initials", initials));
      if (m.photo) {
        var img = document.createElement("img");
        img.src = m.photo; img.alt = full;
        img.onerror = function () { img.remove(); };
        av.appendChild(img);
      }
      head.appendChild(av);
      var txt = el("span", "m-text");
      txt.appendChild(el("span", "m-name", full));
      if (role) txt.appendChild(el("span", "m-role", role));
      head.appendChild(txt);
      head.appendChild(el("span", "chev"));
      box.appendChild(head);

      var body = el("div", "member-body");
      body.id = id;
      if (!openMembers[id]) body.setAttribute("inert", "");
      var inner = el("div", "member-inner");
      if (m.email) inner.appendChild(row(d.m_email, m.email, "mailto:" + m.email));
      if (m.phone) inner.appendChild(row(d.m_phone, m.phone, "tel:" + m.phone.replace(/[^+\d]/g, "")));
      if (safeUrl(m.linkedin)) inner.appendChild(row(d.m_linkedin, "linkedin", m.linkedin, true));
      if (safeUrl(m.website)) inner.appendChild(row(d.m_website, m.website.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, ""), m.website, true));
      if (m.cv) {
        var cv = row(d.m_cv, d.m_cv_dl, m.cv, true);
        cv.lastChild.setAttribute("download", "");
        inner.appendChild(cv);
      }
      body.appendChild(inner);
      box.appendChild(body);
      card.appendChild(box);

      var btn = el("a", "cta member-cta", d.m_contact);
      btn.href = "#contact";
      btn.addEventListener("click", function () {
        var s = document.querySelector('input[name="Subject of message"]');
        if (s && !s.value) s.value = d.m_enquiry + full;
      });
      card.appendChild(btn);

      head.addEventListener("click", function () {
        var open = !card.classList.contains("open");
        card.classList.toggle("open", open);
        openMembers[id] = open;
        head.setAttribute("aria-expanded", open ? "true" : "false");
        if (open) body.removeAttribute("inert"); else body.setAttribute("inert", "");
      });
      grid.appendChild(card);
    });
  }

  function apply(lang) {
    var d = I18N[lang];
    if (!d) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (d[k] !== undefined) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-ph");
      if (d[k] !== undefined) el.setAttribute("placeholder", d[k]);
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    renderTeam();
    var tg = document.querySelector(".theme");
    if (tg) {
      tg.setAttribute("aria-label", d.theme_label);
      tg.querySelectorAll("button").forEach(function (b) {
        var t = d["theme_" + b.getAttribute("data-theme")];
        b.title = t; b.setAttribute("aria-label", t);
      });
    }
    document.title = lang === "el"
      ? "IntelDesign — Εσωτερική Αρχιτεκτονική · Αντώνιος Παρασχίδης"
      : "IntelDesign — Interior Design · Intelligent Design";
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (!saved) saved = (navigator.language || "").toLowerCase().indexOf("el") === 0 ? "el" : "en";
  apply(saved);

  /* ---- Background shade (4 levels, 1 = darkest = default) ---- */
  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    document.querySelectorAll(".theme button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-theme") === t);
    });
    try { localStorage.setItem("theme", t); } catch (e) {}
  }
  document.querySelectorAll(".theme button").forEach(function (b) {
    b.addEventListener("click", function () { setTheme(b.getAttribute("data-theme")); });
  });
  var savedTheme = "1";
  try { savedTheme = localStorage.getItem("theme") || "1"; } catch (e) {}
  setTheme(/^[1-4]$/.test(savedTheme) ? savedTheme : "1");

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---- Contact form validation (file type + size) ---- */
  var form = document.getElementById("contactForm");
  var errBox = document.getElementById("formError");
  var ALLOWED = ["pdf", "doc", "docx", "ppt", "pptx", "dwg", "dxf", "dwt"];
  var MAX = 5 * 1024 * 1024;

  function showError(msg) {
    errBox.textContent = msg;
    errBox.hidden = false;
  }

  form.addEventListener("submit", function (e) {
    errBox.hidden = true;
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      showError(I18N[current].err_required);
      return;
    }
    var files = document.getElementById("fileInput").files;
    var total = 0;
    for (var i = 0; i < files.length; i++) {
      var ext = files[i].name.split(".").pop().toLowerCase();
      if (ALLOWED.indexOf(ext) === -1) {
        e.preventDefault();
        showError(I18N[current].err_type + files[i].name);
        return;
      }
      total += files[i].size;
    }
    if (total > MAX) {
      e.preventDefault();
      showError(I18N[current].err_size);
    }
  });
})();
