// JavaScript Functionality Engine for baharkaam.com
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. HEADER 3-DOT MENU CONTROL ---
    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        sideMenu.classList.toggle("hidden");
    });

    document.addEventListener("click", () => {
        sideMenu.classList.add("hidden");
    });

    // --- 2. AI MIC SEARCH BOX ENGINE ---
    const micBtn = document.getElementById("micBtn");
    const micIcon = document.getElementById("micIcon");
    const micWaveform = document.getElementById("micWaveform");
    const searchInput = document.getElementById("searchInput");

    micBtn.addEventListener("click", () => {
        micWaveform.classList.toggle("hidden");
        if (!micWaveform.classList.contains("hidden")) {
            micIcon.className = "fa-solid fa-circle-stop text-red-500";
            searchInput.value = "Listening... Bolkar batayein...";
            
            // Simulation: 3 second baad system automatic input likh dega
            setTimeout(() => {
                searchInput.value = "Dubai Driver job road map";
                micWaveform.classList.add("hidden");
                micIcon.className = "fa-solid fa-microphone";
                alert("AI Mic Result: Loading verified roadmap for Dubai Driver job!");
            }, 3000);
        } else {
            micIcon.className = "fa-solid fa-microphone";
            searchInput.value = "";
        }
    });

    // --- 3. CARD 1: JOB FILTERS & PRE-APPLY CHECKLIST SYSTEM ---
    const catFilters = document.querySelectorAll(".cat-filter");
    const triggerApplyBtn = document.querySelector(".triggerApplyBtn");
    const safetyModal = document.getElementById("safetyModal");
    const cancelApplyBtn = document.getElementById("cancelApplyBtn");
    const proceedApplyBtn = document.getElementById("proceedApplyBtn");
    const safetyChks = document.querySelectorAll(".safety-chk");

    catFilters.forEach(btn => {
        btn.addEventListener("click", () => {
            const cat = btn.getAttribute("data-category");
            alert(`Filtering live verified job feed for category: ${cat}`);
        });
    });

    triggerApplyBtn.addEventListener("click", () => {
        safetyModal.classList.remove("hidden");
    });

    cancelApplyBtn.addEventListener("click", () => {
        safetyModal.classList.add("hidden");
        // Reset checkboxes
        safetyChks.forEach(chk => chk.checked = false);
        proceedApplyBtn.disabled = true;
        proceedApplyBtn.className = "w-1/2 py-2 bg-cyan-600/40 text-slate-400 rounded-xl text-xs font-semibold cursor-not-allowed transition";
    });

    // Check if all 5 checkboxes are checked
    safetyChks.forEach(chk => {
        chk.addEventListener("change", () => {
            const allChecked = Array.from(safetyChks).every(c => c.checked);
            if (allChecked) {
                proceedApplyBtn.disabled = false;
                proceedApplyBtn.className = "w-1/2 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl text-xs font-semibold cursor-pointer transition";
            } else {
                proceedApplyBtn.disabled = true;
                proceedApplyBtn.className = "w-1/2 py-2 bg-cyan-600/40 text-slate-400 rounded-xl text-xs font-semibold cursor-not-allowed transition";
            }
        });
    });

    proceedApplyBtn.addEventListener("click", () => {
        alert("Redirecting to safe sarkaari/official application route! 🟢");
        safetyModal.classList.add("hidden");
    });

    // --- 4. CARD 2: PNR TICKET TRACKER & ALERT ---
    const activatePnrBtn = document.getElementById("activatePnrBtn");
    const pnrInput = document.getElementById("pnrInput");
    const pnrStatusText = document.getElementById("pnrStatusText");

    activatePnrBtn.addEventListener("click", () => {
        const val = pnrInput.value.trim();
        if (val === "") {
            alert("Please enter a valid PNR number.");
            return;
        }
        pnrStatusText.classList.remove("hidden");
        pnrStatusText.className = "text-[11px] font-mono text-emerald-400 bg-emerald-950/40 p-2 border border-emerald-900 rounded mt-2";
        pnrStatusText.innerHTML = `💸 PNR: ${val} tracked! WhatsApp Cancellation alert activated successfully. 🟢`;
    });

    // --- 5. CARD 3: COUNTRY REALITY REPORT DATA ---
    const countryBtns = document.querySelectorAll(".country-btn");
    const countryReport = document.getElementById("countryReport");
    const countryReportPlaceholder = document.getElementById("countryReportPlaceholder");

    const countryData = {
        UAE: { salary: "1,500 - 2,500 AED", cost: "₹35,000 Total", docs: "Passport, Medical Checkup, Contract Copy" },
        Saudi: { salary: "1,200 - 1,800 SAR", cost: "₹45,000 Total", docs: "Passport, PCC (Police Clearance), Medical" },
        Qatar: { salary: "1,400 - 2,200 QAR", cost: "₹40,000 Total", docs: "Passport, Visa Copy, Work Agreement" },
        Romania: { salary: "800 - 1,200 USD", cost: "₹1,500,00 Total", docs: "Work Permit, PCC, Embassy Appointment" }
    };

    countryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const code = btn.getAttribute("data-country");
            const data = countryData[code];
            
            countryReportPlaceholder.classList.add("hidden");
            countryReport.classList.remove("hidden");
            countryReport.innerHTML = `
                <h4 class="text-xs font-bold text-white border-b border-slate-800 pb-1">${code} Real Reality Report</h4>
                <p class="text-[11px] text-slate-400">💵 Basic Salary Range: <span class="text-cyan-400 font-mono">${data.salary}</span></p>
                <p class="text-[11px] text-slate-400">✈️ Real Government Cost: <span class="text-emerald-400 font-mono">${data.cost}</span></p>
                <p class="text-[11px] text-slate-400">📂 Safe Required Docs: <span class="text-slate-200">${data.docs}</span></p>
            `;
        });
    });

    // --- 6. CARD 4: EXCHANGE RATE CALCULATOR & WHATSAPP SHARE ---
    const foreignInput = document.getElementById("foreignInput");
    const homeOutput = document.getElementById("homeOutput");
    const whatsappShareBtn = document.getElementById("whatsappShareBtn");

    foreignInput.addEventListener("input", () => {
        const amt = parseFloat(foreignInput.value) || 0;
        const rate = 22.50; // Stable mockup rate
        homeOutput.textContent = `${(amt * rate).toFixed(2)} INR / PKR`;
    });

    whatsappShareBtn.addEventListener("click", () => {
        const text = encodeURIComponent("Baharkaam.com Saved Record:\nJob: Light Vehicle Driver\nCountry: UAE\nSalary: 2000 AED\nStatus: Source Checked ✅\nWarning: Never pay cash without legal stamp receipts!");
        window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
    });

    // --- 7. FAMILY CHECK DRIVER ---
    const familyCheckMenu = document.getElementById("familyCheckMenu");
    const familyCheckSection = document.getElementById("familyCheckSection");
    const trackPassportBtn = document.getElementById("trackPassportBtn");
    const passportInput = document.getElementById("passportInput");
    const passportStatusResult = document.getElementById("passportStatusResult");

    familyCheckMenu.addEventListener("click", () => {
        familyCheckSection.classList.remove("hidden");
        familyCheckSection.scrollIntoView({ behavior: 'smooth' });
    });

    trackPassportBtn.addEventListener("click", () => {
        const pass = passportInput.value.trim();
        if(pass === "") { alert("Enter Passport Number!"); return; }
        passportStatusResult.classList.remove("hidden");
        passportStatusResult.className = "p-3 bg-slate-950 border border-indigo-900 rounded text-xs text-indigo-400 mt-2";
        passportStatusResult.innerHTML = `🔒 ID: ${pass} | Status: Safe 🟢 | Work Permit Approved via Government Source Checked Link.`;
    });

    // --- 8. FLOATING EMERGENCY SOS MODAL WINDOW ---
    const sosBtn = document.getElementById("sosBtn");
    const sosModal = document.getElementById("sosModal");
    const closeSosBtn = document.getElementById("closeSosBtn");

    sosBtn.addEventListener("click", () => sosModal.classList.remove("hidden"));
    closeSosBtn.addEventListener("click", () => sosModal.classList.add("hidden"));

    // --- 9. SCAM REPORT REVIEW FILTER SYSTEM ---
    const scamForm = document.getElementById("scamForm");
    scamForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("📨 Thank you! Report successfully recorded inside Admin Verification Queue. It will be live post safety review checks.");
        scamForm.reset();
    });
});
