/* =========================================================
   BaharKaam — Clean App Interactions
   Replace full script.js with this file
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  const micButton = $("#micButton");
  const navMic = $(".nav-mic");
  const aiStatusTitle = $("#aiStatusTitle");
  const aiStatusText = $("#aiStatusText");

  const languageBtn = $("#languageBtn");
  const languagePanel = $("#languagePanel");

  const sosButton = $("#sosButton");
  const sosModal = $("#sosModal");
  const closeSosModal = $("#closeSosModal");

  const applyModal = $("#applyModal");
  const closeApplyModal = $("#closeApplyModal");
  const safetyChecklist = $("#safetyChecklist");
  const proceedApplyBtn = $("#proceedApplyBtn");

  const policyModal = $("#policyModal");
  const closePolicyModal = $("#closePolicyModal");
  const policyModalTitle = $("#policyModalTitle");
  const policyContent = $("#policyContent");

  const heroTitle = $("#aiHeroTitle");
  const heroSubtitle = $(".hero-subtitle");
  const brandSubtitle = $(".brand-text p");
  const coreTitle = $("#coreCardsTitle");
  const rolesTitle = $("#rolesTitle");

  /* ================= Toast ================= */

  function showToast(message) {
    let toast = $(".toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(window.__bkToastTimer);
    window.__bkToastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, 2200);
  }

  /* ================= Modal Helpers ================= */

  function openModal(modal) {
    if (!modal) return;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }

  function closeAllModals() {
    closeModal(sosModal);
    closeModal(applyModal);
    closeModal(policyModal);
  }

  [sosModal, applyModal, policyModal].forEach((modal) => {
    if (!modal) return;

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllModals();
  });

  /* ================= Language System ================= */

  const langData = {
    hinglish: {
      toast: "Hinglish selected",
      brandSubtitle: "Safe Foreign Jobs & Visa Guide",
      heroTitle: "Bolkar Poochein",
      heroSubtitle: "Job, visa, salary ya fraud ke baare mein apni bhasha mein poochein",
      aiTitle: "Sathi AI sun raha hai...",
      aiText: "Jab aap bolna shuru karenge, yahan jawaab dikhega",
      coreTitle: "Aapke Safe Kaam ke liye",
      rolesTitle: "Kaam ke Roles",
      cards: [
        ["Verified Jobs & Roadmap", "Source checked jobs, apply process aur documents"],
        ["Visa & Offer Letter Check", "Fake visa, offer letter aur agent fraud check"],
        ["Salary & Country Guide", "Salary reality, PCC, medical aur country roadmap"],
        ["Money & Family Safety", "Payment receipt, loan safety aur family verification"]
      ]
    },

    urdu: {
      toast: "Roman Urdu selected",
      brandSubtitle: "Safe Foreign Jobs aur Visa Guide",
      heroTitle: "Bol Kar Poochen",
      heroSubtitle: "Job, visa, salary ya fraud ke bare mein apni zaban mein poochain",
      aiTitle: "Sathi AI sun raha hai...",
      aiText: "Jab aap bolna shuru karenge, jawab yahan nazar aayega",
      coreTitle: "Aap ke safe kaam ke liye",
      rolesTitle: "Kaam ke roles",
      cards: [
        ["Verified Jobs & Roadmap", "Source checked jobs, apply process aur documents"],
        ["Visa & Offer Letter Check", "Fake visa, offer letter aur agent fraud check"],
        ["Salary & Country Guide", "Salary reality, medical, PCC aur country roadmap"],
        ["Money & Family Safety", "Payment receipt, loan safety aur family verification"]
      ]
    },

    bengali: {
      toast: "Bengali selected",
      brandSubtitle: "Safe Foreign Jobs & Visa Guide",
      heroTitle: "Bole Jiggesh Korun",
      heroSubtitle: "Job, visa, salary ba fraud niye nijer bhashay jiggesh korun",
      aiTitle: "Sathi AI shunchhe...",
      aiText: "Apni bola shuru korle ekhane answer dekhabe",
      coreTitle: "Apnar safe kajer jonno",
      rolesTitle: "Kajer Roles",
      cards: [
        ["Verified Jobs & Roadmap", "Source checked jobs, apply process ebong documents"],
        ["Visa & Offer Letter Check", "Fake visa, offer letter ebong agent fraud check"],
        ["Salary & Country Guide", "Salary reality, medical, PCC ebong country roadmap"],
        ["Money & Family Safety", "Payment receipt, loan safety ebong family verification"]
      ]
    },

    nepali: {
      toast: "Nepali selected",
      brandSubtitle: "Safe Foreign Jobs & Visa Guide",
      heroTitle: "Bolera Sodhnus",
      heroSubtitle: "Job, visa, salary wa fraud bare afnai bhashama sodhnus",
      aiTitle: "Sathi AI sundai cha...",
      aiText: "Tapai bolna suru garnu bhayo bhane yaha jawab dekhinecha",
      coreTitle: "Tapai ko safe kaam ko lagi",
      rolesTitle: "Kaam ko Roles",
      cards: [
        ["Verified Jobs & Roadmap", "Source checked jobs, apply process ra documents"],
        ["Visa & Offer Letter Check", "Fake visa, offer letter ra agent fraud check"],
        ["Salary & Country Guide", "Salary reality, medical, PCC ra country roadmap"],
        ["Money & Family Safety", "Payment receipt, loan safety ra family verification"]
      ]
    },

    english: {
      toast: "Simple English selected",
      brandSubtitle: "Safe Foreign Jobs & Visa Guide",
      heroTitle: "Ask by Voice",
      heroSubtitle: "Ask about jobs, visa, salary or fraud in simple language",
      aiTitle: "Sathi AI is listening...",
      aiText: "When you start speaking, your answer will appear here",
      coreTitle: "Tools for Safe Work Abroad",
      rolesTitle: "Job Roles",
      cards: [
        ["Verified Jobs & Roadmap", "Source checked jobs, apply process and documents"],
        ["Visa & Offer Letter Check", "Fake visa, offer letter and agent fraud check"],
        ["Salary & Country Guide", "Salary reality, medical, PCC and country roadmap"],
        ["Money & Family Safety", "Payment receipt, loan safety and family verification"]
      ]
    }
  };

  function applyLanguage(langKey) {
    const data = langData[langKey] || langData.hinglish;

    if (brandSubtitle) brandSubtitle.textContent = data.brandSubtitle;
    if (heroTitle) heroTitle.textContent = data.heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = data.heroSubtitle;
    if (aiStatusTitle) aiStatusTitle.textContent = data.aiTitle;
    if (aiStatusText) aiStatusText.textContent = data.aiText;
    if (coreTitle) coreTitle.textContent = data.coreTitle;
    if (rolesTitle) rolesTitle.textContent = data.rolesTitle;

    $$(".service-card").forEach((card, index) => {
      const title = card.querySelector("h3");
      const desc = card.querySelector("p");
      const cardData = data.cards[index];

      if (!cardData) return;
      if (title) title.textContent = cardData[0];
      if (desc) desc.textContent = cardData[1];
    });

    localStorage.setItem("baharkaam_lang", langKey);
    showToast(data.toast);
  }

  if (languageBtn && languagePanel) {
    languageBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      languagePanel.classList.toggle("hidden");
    });

    languagePanel.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const langKey = button.dataset.lang || "hinglish";
        languagePanel.classList.add("hidden");
        applyLanguage(langKey);
      });
    });

    document.addEventListener("click", (event) => {
      if (!languagePanel.contains(event.target) && event.target !== languageBtn) {
        languagePanel.classList.add("hidden");
      }
    });
  }

  const savedLang = localStorage.getItem("baharkaam_lang");
  if (savedLang && langData[savedLang]) {
    applyLanguage(savedLang);
  }

  /* ================= AI Mic Demo ================= */

  function startMicDemo() {
    if (!micButton || !aiStatusTitle || !aiStatusText) {
      showToast("Mic demo ready");
      return;
    }

    micButton.classList.add("listening");
    aiStatusTitle.textContent = "Listening...";
    aiStatusText.textContent = "Aap bol sakte hain — demo mode";

    showToast("Mic active — demo mode");

    clearTimeout(window.__bkMicTimer);
    window.__bkMicTimer = setTimeout(() => {
      micButton.classList.remove("listening");
      aiStatusTitle.textContent = "Roadmap ready";
      aiStatusText.textContent = "Dubai driver job, salary aur legal visa process yahan samajh sakte hain.";
      showToast("Demo answer ready");
    }, 1800);
  }

  if (micButton) micButton.addEventListener("click", startMicDemo);
  if (navMic) navMic.addEventListener("click", startMicDemo);

  /* ================= SOS ================= */

  if (sosButton) {
    sosButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      openModal(sosModal);
    });
  }

  if (closeSosModal) {
    closeSosModal.addEventListener("click", () => closeModal(sosModal));
  }

  $$(".emergency-list button").forEach((button) => {
    button.addEventListener("click", () => {
      const label = button.textContent.trim();
      showToast(`${label} — official helpline links next phase`);
    });
  });

  /* ================= Apply Checklist ================= */

  function resetApplyChecklist() {
    if (!safetyChecklist || !proceedApplyBtn) return;

    safetyChecklist.querySelectorAll('input[type="checkbox"]').forEach((box) => {
      box.checked = false;
    });

    proceedApplyBtn.disabled = true;
  }

  function updateProceedButton() {
    if (!safetyChecklist || !proceedApplyBtn) return;

    const boxes = Array.from(safetyChecklist.querySelectorAll('input[type="checkbox"]'));
    const allChecked = boxes.length > 0 && boxes.every((box) => box.checked);

    proceedApplyBtn.disabled = !allChecked;
  }

  if (closeApplyModal) {
    closeApplyModal.addEventListener("click", () => closeModal(applyModal));
  }

  if (safetyChecklist) {
    safetyChecklist.addEventListener("change", updateProceedButton);
  }

  if (proceedApplyBtn) {
    proceedApplyBtn.addEventListener("click", () => {
      showToast("Safety checklist complete");
      closeModal(applyModal);
    });
  }

  /* ================= Card Clicks ================= */

  function openInfoModal(title, body) {
    if (!policyModal || !policyModalTitle || !policyContent) {
      showToast(title);
      return;
    }

    policyModalTitle.textContent = title;
    policyContent.innerHTML = body;
    openModal(policyModal);
  }

  $$(".service-card").forEach((card, index) => {
    card.addEventListener("click", () => {
      if (index === 0) {
        resetApplyChecklist();
        openModal(applyModal);
        return;
      }

      if (index === 1) {
        openInfoModal(
          "Visa & Offer Letter Check",
          `
            <p><strong>Fake visa se bachne ke liye:</strong></p>
            <p>Visa type, company name, salary, contract aur recruiter licence ko official source se verify karein.</p>
            <p>Visit visa par job promise, advance payment aur passport bina receipt dena high risk hai.</p>
          `
        );
        return;
      }

      if (index === 2) {
        openInfoModal(
          "Salary & Country Guide",
          `
            <p><strong>Salary reality check:</strong></p>
            <p>Country, role, food, room, overtime, medical, PCC aur contract details ko compare karein.</p>
            <p>Sirf high salary dekh kar payment na karein. Written offer aur legal visa route zaroor check karein.</p>
          `
        );
        return;
      }

      if (index === 3) {
        openInfoModal(
          "Money & Family Safety",
          `
            <p><strong>Payment safety:</strong></p>
            <p>Agent ko cash dene se pehle receipt, licence, company proof aur family ko full details share karein.</p>
            <p>Loan lekar payment karne se pehle total cost aur refund policy clear karein.</p>
          `
        );
      }
    });
  });

  /* ================= Policy Links ================= */

  const policyData = {
    about: {
      title: "About BaharKaam",
      body: `
        <p>BaharKaam India, Pakistan, Bangladesh aur Nepal ke workers ke liye safety-first foreign jobs aur visa guide platform hai.</p>
        <p>Hum worker ko legal route, salary reality, documents, agent fraud aur emergency help simple language mein samjhate hain.</p>
      `
    },
    privacy: {
      title: "Privacy Policy",
      body: `
        <p>BaharKaam user privacy ka respect karta hai. Demo version mein sensitive personal data store nahi ho raha.</p>
        <p>Future version mein analytics, language preference aur safety reports ke liye data collect ho sakta hai.</p>
      `
    },
    terms: {
      title: "Terms & Conditions",
      body: `
        <p>Website par di gayi information guidance aur awareness ke liye hai.</p>
        <p>Final decision se pehle official government source, embassy, licensed recruiter ya verified employer se confirm karein.</p>
      `
    },
    disclaimer: {
      title: "Disclaimer",
      body: `
        <p><strong>BaharKaam visa agency ya recruiting agency nahi hai.</strong></p>
        <p>Hum 100% visa, guaranteed job, confirm placement ya pakka abroad bhejne ka claim nahi karte.</p>
      `
    },
    contact: {
      title: "Contact Us",
      body: `
        <p>Support ke liye email: <strong>support@baharkaam.com</strong></p>
        <p>Fake job, fake visa, salary fraud ya agent fraud report feature next phase mein add hoga.</p>
      `
    }
  };

  $$("[data-policy]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.policy;
      const data = policyData[key];

      if (!data) return;
      openInfoModal(data.title, data.body);
    });
  });

  if (closePolicyModal) {
    closePolicyModal.addEventListener("click", () => closeModal(policyModal));
  }

  /* ================= Bottom Nav ================= */

  const navItems = $$(".bottom-nav .nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      const label = item.querySelector("small")?.textContent?.trim();

      if (label === "Home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        showToast("Home");
        return;
      }

      if (label === "Jobs") {
        openInfoModal(
          "Verified Jobs",
          `
            <p><strong>Jobs screen next phase:</strong></p>
            <p>Yahan country-wise aur role-wise source checked jobs list hogi.</p>
            <p>Example: Dubai Driver, Saudi Helper, Qatar Cleaner, Romania Factory Worker.</p>
          `
        );
        return;
      }

      if (label === "Alerts") {
        openInfoModal(
          "Fraud Alerts",
          `
            <p><strong>Latest safety alerts:</strong></p>
            <p>Fake visa, fake offer letter, visit visa job trap, passport holding aur agent fraud warning yahan dikhegi.</p>
          `
        );
        return;
      }

      if (label === "Profile") {
        openInfoModal(
          "Worker Profile",
          `
            <p><strong>Profile screen next phase:</strong></p>
            <p>Worker role, country interest, documents checklist, saved jobs aur family share details yahan hongi.</p>
          `
        );
      }
    });
  });

  /* ================= Roles ================= */

  const viewAllBtn = $(".view-all-btn");

  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      openInfoModal(
        "All Job Roles",
        `
          <p>Driver, Helper, Welder, Cleaner, Security, Factory Worker, Electrician, Plumber, Hotel/Catering, Agriculture Worker, AC Technician.</p>
        `
      );
    });
  }
});
