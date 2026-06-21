/* =========================================================
   BaharKaam Frontend Interactions
   File: script.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const micButton = document.getElementById("micButton");
  const aiStatusTitle = document.getElementById("aiStatusTitle");
  const aiStatusText = document.getElementById("aiStatusText");

  const languageBtn = document.getElementById("languageBtn");
  const languagePanel = document.getElementById("languagePanel");

  const sosButton = document.getElementById("sosButton");
  const sosModal = document.getElementById("sosModal");
  const closeSosModal = document.getElementById("closeSosModal");

  const jobsCardBtn = document.getElementById("jobsCardBtn");
  const applyModal = document.getElementById("applyModal");
  const closeApplyModal = document.getElementById("closeApplyModal");
  const safetyChecklist = document.getElementById("safetyChecklist");
  const proceedApplyBtn = document.getElementById("proceedApplyBtn");

  const policyModal = document.getElementById("policyModal");
  const closePolicyModal = document.getElementById("closePolicyModal");
  const policyModalTitle = document.getElementById("policyModalTitle");
  const policyContent = document.getElementById("policyContent");

  const policyButtons = document.querySelectorAll("[data-policy]");
  const allCardArrows = document.querySelectorAll(".card-arrow");
  const navMic = document.querySelector(".nav-mic");

  /* =========================================================
     Toast
     ========================================================= */

  function showToast(message) {
    let toast = document.querySelector(".toast");

    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast";
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add("show");

    window.clearTimeout(window.__baharKaamToastTimer);
    window.__baharKaamToastTimer = window.setTimeout(() => {
      toast.classList.remove("show");
    }, 2400);
  }

  /* =========================================================
     Modal helpers
     ========================================================= */

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

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllModals();
    }
  });

  [sosModal, applyModal, policyModal].forEach((modal) => {
    if (!modal) return;

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  /* =========================================================
     Language panel
     ========================================================= */

  if (languageBtn && languagePanel) {
    languageBtn.addEventListener("click", () => {
      languagePanel.classList.toggle("hidden");
    });

    languagePanel.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        const selected = button.textContent.trim();
        languagePanel.classList.add("hidden");

        showToast(`Language selected: ${selected}`);
      });
    });
  }

  /* =========================================================
     AI Mic simulation
     ========================================================= */

  function startMicDemo() {
    if (!micButton || !aiStatusTitle || !aiStatusText) return;

    micButton.classList.add("listening");
    aiStatusTitle.textContent = "Listening... aap bol sakte hain";
    aiStatusText.textContent = "Sathi AI aapki baat samajh raha hai";

    showToast("Mic active — demo mode");

    window.clearTimeout(window.__baharKaamMicTimer);

    window.__baharKaamMicTimer = window.setTimeout(() => {
      micButton.classList.remove("listening");

      aiStatusTitle.textContent = "Roadmap ready";
      aiStatusText.textContent =
        "Aap Dubai driver job, salary aur legal visa process yahan samajh sakte hain.";

      showToast("Demo answer ready");
    }, 2200);
  }

  if (micButton) {
    micButton.addEventListener("click", startMicDemo);
  }

  if (navMic) {
    navMic.addEventListener("click", startMicDemo);
  }

  /* =========================================================
     SOS Emergency Modal
     ========================================================= */

  if (sosButton) {
    sosButton.addEventListener("click", () => {
      openModal(sosModal);
    });
  }

  if (closeSosModal) {
    closeSosModal.addEventListener("click", () => {
      closeModal(sosModal);
    });
  }

  const emergencyButtons = document.querySelectorAll(".emergency-list button");

  emergencyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const label = button.textContent.trim();

      showToast(`${label} guide demo — official links later add honge`);
    });
  });

  /* =========================================================
     Apply Safety Checklist
     ========================================================= */

  function resetApplyChecklist() {
    if (!safetyChecklist || !proceedApplyBtn) return;

    safetyChecklist.querySelectorAll('input[type="checkbox"]').forEach((box) => {
      box.checked = false;
    });

    proceedApplyBtn.disabled = true;
  }

  function updateProceedButton() {
    if (!safetyChecklist || !proceedApplyBtn) return;

    const boxes = Array.from(
      safetyChecklist.querySelectorAll('input[type="checkbox"]')
    );

    const allChecked = boxes.length > 0 && boxes.every((box) => box.checked);
    proceedApplyBtn.disabled = !allChecked;
  }

  if (jobsCardBtn) {
    jobsCardBtn.addEventListener("click", () => {
      resetApplyChecklist();
      openModal(applyModal);
    });
  }

  if (closeApplyModal) {
    closeApplyModal.addEventListener("click", () => {
      closeModal(applyModal);
    });
  }

  if (safetyChecklist) {
    safetyChecklist.addEventListener("change", updateProceedButton);
  }

  if (proceedApplyBtn) {
    proceedApplyBtn.addEventListener("click", () => {
      showToast("Safe checklist complete — apply flow demo");
      closeModal(applyModal);
    });
  }

  /* =========================================================
     Other card demo actions
     ========================================================= */

  allCardArrows.forEach((button) => {
    if (button.id === "jobsCardBtn") return;

    button.addEventListener("click", () => {
      const card = button.closest(".service-card");
      const title = card?.querySelector("h3")?.textContent?.trim();

      if (!title) {
        showToast("Feature demo");
        return;
      }

      showToast(`${title} — demo screen coming next`);
    });
  });

  /* =========================================================
     Policy / Trust Pages Modal
     ========================================================= */

  const policyData = {
    about: {
      title: "About BaharKaam",
      body: `
        <p>
          BaharKaam India, Pakistan, Bangladesh aur Nepal ke workers ke liye
          ek safety-first foreign jobs aur visa guide platform hai.
        </p>
        <p>
          Humara goal hai worker ko simple bhasha mein legal route, salary reality,
          documents, agent fraud aur emergency help ke baare mein samjhana.
        </p>
      `,
    },

    privacy: {
      title: "Privacy Policy",
      body: `
        <p>
          BaharKaam user ki privacy ka respect karta hai. Demo version mein hum
          koi sensitive personal data store nahi kar rahe.
        </p>
        <p>
          Future version mein contact form, analytics, cookies, language preference
          aur safety reports ke liye data collect ho sakta hai. User data ko misuse
          nahi kiya jayega.
        </p>
      `,
    },

    terms: {
      title: "Terms & Conditions",
      body: `
        <p>
          BaharKaam ka use karte waqt user agree karta hai ki website par di gayi
          information guidance aur awareness ke liye hai.
        </p>
        <p>
          Kisi bhi job, visa, payment, passport submission ya contract decision se
          pehle official government source, embassy, licensed recruiter ya verified
          employer se confirm karein.
        </p>
      `,
    },

    disclaimer: {
      title: "Disclaimer",
      body: `
        <p>
          <strong>BaharKaam visa agency ya recruiting agency nahi hai.</strong>
        </p>
        <p>
          Hum sirf information, safety checklist, verified source guidance aur
          fraud awareness provide karte hain.
        </p>
        <p>
          Hum 100% visa, guaranteed job, confirm placement ya pakka abroad bhejne
          ka claim nahi karte.
        </p>
      `,
    },

    contact: {
      title: "Contact Us",
      body: `
        <p>
          Support ke liye email:
          <strong>support@baharkaam.com</strong>
        </p>
        <p>
          Fake job, fake visa, passport holding, salary fraud ya agent fraud report
          karne ke liye future version mein report form add hoga.
        </p>
      `,
    },
  };

  policyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.policy;
      const data = policyData[key];

      if (!data || !policyModalTitle || !policyContent) return;

      policyModalTitle.textContent = data.title;
      policyContent.innerHTML = data.body;

      openModal(policyModal);
    });
  });

  if (closePolicyModal) {
    closePolicyModal.addEventListener("click", () => {
      closeModal(policyModal);
    });
  }

  /* =========================================================
     Bottom nav demo
     ========================================================= */

  const navItems = document.querySelectorAll(".bottom-nav .nav-item");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      item.classList.add("active");

      const label = item.querySelector("small")?.textContent?.trim();
      if (label && label !== "Home") {
        showToast(`${label} screen demo — next phase mein banega`);
      }
    });
  });

  /* =========================================================
     View All roles demo
     ========================================================= */

  const viewAllBtn = document.querySelector(".view-all-btn");

  if (viewAllBtn) {
    viewAllBtn.addEventListener("click", () => {
      showToast(
        "All roles: Driver, Helper, Welder, Cleaner, Security, Factory, Electrician, Hotel, Agriculture, AC Tech"
      );
    });
  }
});
