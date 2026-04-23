// ===========================
// HEFA AI Agent — Frontend Logic
// ===========================

// IMPORTANT: Replace this with your live Modal endpoint URL
// const API_URL = "http://127.0.0.1:8000/api/v1/query";
const API_URL = "https://munahl5923--hefa-ai-agent-fastapi-app.modal.run/api/v1/query";

const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// ===========================
// Valid Clinics (for drawer)
// ===========================
const VALID_CLINICS = [
    "AHMADU BELLO UNIVERSITY ANNEX COMPREHENSIVE HEALTH CENTRE - F",
    "ANCHA MAKARANTA PRIMARY HEALTH CENTRE - F",
    "ANCHAU PRIMARY HEALTH CLINIC - F",
    "ANGUWAR HALADU PRIAMRY HEALTH CENTRE - F",
    "ANGUWAR JABA FAMILY HEALTH UNIT - F",
    "BAKIN KOGI PRIMARY HEALTH CENTRE (KAURU) - F",
    "BARDE PRIMARY HEALTH CENTRE - F",
    "BISHINI HEALTH CLINIC - F",
    "CHC SAMINAKA - F",
    "DAMARI PRIMARY HEALTH CENTRE - F",
    "DANGASHI PRIMARY HEALTH CENTRE - F",
    "DOGON DAWA PRIAMRY HEALTH CLINIC - F",
    "DOKA PRIMARY HEALTH CENTRE - F",
    "DOKAN KARJI HEALTH CLINIC - F",
    "DUTSEN ABBA HEALTH CLINIC - F",
    "F KAMANTAN PRIAMRY HEALTH CENTRE - F",
    "FADA DAJI HEALTH CLINIC - F",
    "FHU ZANGO ROAD - F",
    "GALADIMAWA PRIMARY HEALTH CENTRE - F",
    "GARU PRIMARY HEALTH CENTRE - F",
    "GWADA HEALTH CLINIC - F",
    "GWARAJI PRIMARY HEALTH CENTRE - F",
    "H/C ABADAWA - F",
    "H/C BUDA - F",
    "H/C DANJINJIRI - F",
    "H/C IRI GARI - F",
    "H/C KAMFANIN DOKA - F",
    "H/C KINKIBA - F",
    "H/C KUKUM GIDA - F",
    "HC KAMFANIN MAUDE - F",
    "HEALTH CLINIC AGUNU DUTSE - F",
    "IDDAH PRIMARY HEALTH CENTRE - F",
    "JAJI COMPREHENSIVE HEALTH CENTRE - F",
    "KAFANCHAN FAMILY HEALTH UNIT - F",
    "KAGOMA PRIMARY HEALTH CENTRE - F",
    "KAKAGI PRIMARY HEALTH CENTRE - F",
    "KAKURI HAUSA MATERNAL AND CHILD HEALTH CLINIC - F",
    "KARGI PRIMARY HEALTH CARE - F",
    "KAURAN WALI MODEL PRIMARY HEALTH CENTRE - F",
    "KD BIRNIN GWARI MATERNAL AND CHILD HEALTH CLINIC",
    "KD BURUKU PRIMARY HEALTH CENTRE",
    "KD KUBAU ROAD HEALTH CLINIC",
    "KD KURIGA PRIMARY HEALTH CENTRE",
    "KD MANDO PRIMARY HEALTH CENTRE",
    "KD SOBA PRIMARY HEALTH CENTRE",
    "KENYI HEALTH CLINIC - F",
    "KIDANDAN PRIMARY HEALTH CENTRE - F",
    "KINKINAU HEALTH CLINIC - F",
    "KONO PRIMARY HEALTH CENTRE - F",
    "KUBACHA HEALTH CENTRE - F",
    "KURMIN GWARI HEALTH CLINIC - F",
    "KURMIN MAZUGA HEALTH CLINIC - F",
    "KUTEMESHI PRIMARY HEALTH CENTRE - F",
    "KUYELLO PRIMARY HEALTH CLINIC - F",
    "KWASARE HEALTH CENTRE - F",
    "LANGA HEALTH CLINIC - F",
    "M.P.H0. S/DADI - F",
    "MARABAN AGBAN PRIMARY HEALTH CENTRE - F",
    "MARO HEALTH CLINIC - F",
    "MPHC KIDUGU - F",
    "P H C IKARA - F",
    "P H C PALA - F",
    "P H C SAYA SAYA - F",
    "P H C UNGUWAN RIMI - F",
    "PAKI PRIMARY HEALTH CENTRE - F",
    "PAMBEGUA HEALTH CENTRE - F",
    "PHC ANKUNG A - F",
    "PHC BITARO - F",
    "PHC DANDAURA - F",
    "PHC FOGYEI - F",
    "PHC GORA BAFAI - F",
    "PHC JAMA\u2019A - F",
    "PHC KAURU - F",
    "PHC KUYA - F",
    "PHC NOK - F",
    "PHC NUMBU - F",
    "PHC SAB-ZURO - F",
    "PHC SAMBAN GIDA - F",
    "PHC U/FARI - F",
    "PHC MANCHOCK - F",
    "PHC AKOTI - F",
    "PHC AMAR KONTOGORA - F",
    "PHC ANGWA NUNGU - F",
    "PHC ANKUWA - F",
    "PHC ASSO - F",
    "PHC ATUKU - F",
    "PHC AUCHAN - F",
    "PHC AWAI - F",
    "PHC AWON - F",
    "PHC BABBANDODO ZARIA - F",
    "PHC BADARAWA - F",
    "PHC BASAWA - F",
    "PHC BONDONG - F",
    "PHC CHIKUN - F",
    "PHC CLINIC JOS ROAD - F",
    "PHC DADDU - F",
    "PHC DAMAKASUWA - F",
    "PHC DAMAU - F",
    "PHC DAMBO - F",
    "PHC DAN ALHAJI - F",
    "PHC DANDAMISA - F",
    "PHC DANGUZURI - F",
    "PHC DANMAHAWAYI - F",
    "PHC DANWATA - F",
    "PHC DOGON KURMI - F",
    "PHC DOKA - F",
    "PHC DUTSEN WAI - F",
    "PHC FADAN ATTAKAR - F",
    "PHC FADAN NINZO - F",
    "PHC FAI - F",
    "PHC FARMAN - F",
    "PHC GADAR GAYAN",
    "PHC GANGARA - F",
    "PHC GARU - F",
    "PHC GAZARA - F",
    "PHC GIDAN TAGWAI - F",
    "PHC GIDAN WAYA - F",
    "PHC GIMI GARI - F",
    "PHC GIWA - F",
    "PHC GODO GODO - F",
    "PHC GUBUCHI - F",
    "PHC GWAGWADA - F",
    "PHC GWANKI - F",
    "PHC GYALLESU - F",
    "PHC HAJ ASMAU AHMED MAKARFI - F",
    "PHC HANWA - F",
    "PHC HASKIYA - F",
    "PHC HAYIN BANKI - F",
    "PHC HAYIN DOGO - F",
    "PHC HUNKUYI - F",
    "PHC IBURU - F",
    "PHC IGABI - F",
    "PHC IYAL MEMORIAL - F",
    "PHC JAGINDI GARI - F",
    "PHC JERE - F",
    "PHC JUNCTION ROAD - F",
    "PHC KABALA - F",
    "PHC KABALA WEST - F",
    "PHC KACHIA - F",
    "PHC KAFANCHAN B",
    "PHC KAGADAMA - F",
    "PHC KAGARKO - F",
    "PHC KAGORO ROAD - F",
    "PHC KAJURU - F",
    "PHC KAKAU - F",
    "PHC KAKIDARE - F",
    "PHC KAMARU - F",
    "PHC KAMURU - F",
    "PHC KARREH - F",
    "PHC KARSHI - F",
    "PHC KASUWAN MAGANI - F",
    "PHC KASUWAN MATA - F",
    "PHC KATARI - F",
    "PHC KAURA - F",
    "PHC KAYA - F",
    "PHC KUBAU - F",
    "PHC KUDAN - F",
    "PHC KUJAMA TUDUN WADA - F",
    "PHC KUKUI - F",
    "PHC KURMIN JIBRIN - F",
    "PHC KURMIN KOGI - F",
    "PHC KURMIN MASARA - F",
    "PHC KURMIN MUSA - F",
    "PHC KWANAN FARAKWAI - F",
    "PHC KWASALLO - F",
    "PHC KWASSAM - F",
    "PHC KWATA - F",
    "PHC KWOI - F",
    "PHC LAZURU - F",
    "PHC LERE - F",
    "PHC LIKORO - F",
    "PHC MABUSHI - F",
    "PHC MADAKIYA - F",
    "PHC MAGAMIYA - F",
    "PHC MAH - F",
    "PHC MAIGIZO - F",
    "PHC MAKERA I - F",
    "PHC MALIKANCI - F",
    "PHC MALLAGUM 11 - F",
    "PHC MARABAN JOS - F",
    "PHC MARABAN KAJURU",
    "PHC MARABAN RIDO - F",
    "PHC MAYIR - F",
    "PHC MUCHIA - F",
    "PHC NARAYI (BAYAN DUTSE) - F",
    "PHC NASSARAWAN DOYA - F",
    "PHC PANHAUYA - F",
    "PHC RAFIN GUZA - F",
    "PHC RAHAMA - F",
    "PHC RANDAGI - F",
    "PHC RIMIN DOKO - F",
    "PHC SABAN SARKI - F",
    "PHC SABON BIRNI - F",
    "PHC SABON GARI - F",
    "PHC SABON GARIN CHORI - F",
    "PHC SABON TASHA - F",
    "PHC SAMARU - F",
    "PHC SAULAWA - F",
    "PHC TABA - F",
    "PHC TACHIRA - F",
    "PHC TAKAU - F",
    "PHC TASHAN KADE",
    "PHC TELEVISION GARAGE - F",
    "PHC TSAUNI - F",
    "PHC TUDUN WADA - F",
    "PHC TUKUR TUKAR - F",
    "PHC TURAWA - F",
    "PHC U/BAWA - F",
    "PHC U/DOSA - F",
    "PHC U/FATIKA - F",
    "PHC U/RIMI - F",
    "PHC UNGUWAN ALKALI - F",
    "PHC UNGUWAN HAYATU - F",
    "PHC UNGUWAN ROMI - F",
    "PHC UNGUWAN SANUSI - F",
    "PHC UNGUWAN SHANU - F",
    "PHC UNGUWAN. DANKALI - F",
    "PHC WAMBAI - F",
    "PHC WASA - F",
    "PHC WAZATA - F",
    "PHC WUCICIRI - F",
    "PHC YAKASAI - F",
    "PHC YAKAWADA - F",
    "PHC ZABI - F",
    "PHC ZAKARI ISA MAMORIAL HOSPITAL - F",
    "PHC ZANGON URBAN - F",
    "PHC ZONKWA - F",
    "PRIMARY HEALTH CARE NASARAWA - F",
    "PRIMARY HEALTH CARE ABORO - F",
    "PRIMARY HEALTH CARE BADIKKO, KADUNA.",
    "PRIMARY HEALTH CARE GWANTU - F",
    "PRIMARY HEALTH CARE MAI BURJI",
    "PRIMARY HEALTH CARE MAYERE - F",
    "PRIMARY HEALTH CARE TUDUN NUPAWA",
    "PRIMARY HEALTH CARE UNGWAN SARKI - F",
    "PRIMARY HEALTH CENTRE GAMAGIRA - F",
    "PRIMARY HEALTH CENTRE KAYARDA - F",
    "PRIMARY HEALTH CENTRE RICHIFA - F",
    "PRIMARY HEALTH CENTRE SHIKA - F",
    "PRIMARY HEALTH CLINIC KALLAH - F",
    "PRIMARY HEALTH CLINIC MAKARFI - F",
    "RAHAMA PRIMARY HEALTH CENTRE - F",
    "RAMIN KURA MODEL PRIMARY HEALTH CENTRE - F",
    "RIGACHIKUN PRIMARY HEALTH CENTRE - F",
    "RIGASA (MIYATTI ALLAH) PRIMARY HEALTH CENTRE - F",
    "RIMAU HEALTH CLINIC - F",
    "SAULAWA PRIMARY HEALTH CENTRE - F",
    "TABANNI PRIMARY HEALTH CENTRE - F",
    "TANTATU HEALTH CLINIC - F",
    "TURAKI BUGA MEMORIAL HOSP KAGORO - F",
    "ZANGO AYA (NHIS) PRIMARY HEALTH CENTRE - F",
    "ZUNTU MODEL PRIMARY HEALTH CENTRE - F",
];

// ===========================
// Drawer Logic
// ===========================

function populateDrawer(clinics) {
    const list = document.getElementById("drawer-list");
    const countEl = document.getElementById("drawer-count");
    list.innerHTML = "";
    countEl.textContent = `${clinics.length} facilities found`;

    clinics.forEach((name, i) => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="clinic-index">${i + 1}.</span>${escapeHtml(name)}`;
        list.appendChild(li);
    });
}

function toggleDrawer() {
    const drawer = document.getElementById("clinic-drawer");
    const overlay = document.getElementById("drawer-overlay");
    const isOpen = drawer.classList.contains("open");

    if (isOpen) {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
    } else {
        drawer.classList.add("open");
        overlay.classList.add("open");
        // Reset search and populate
        document.getElementById("clinic-search").value = "";
        populateDrawer(VALID_CLINICS);
    }
}

function filterClinics() {
    const query = document.getElementById("clinic-search").value.toLowerCase().trim();
    if (!query) {
        populateDrawer(VALID_CLINICS);
        return;
    }
    const filtered = VALID_CLINICS.filter(name => name.toLowerCase().includes(query));
    populateDrawer(filtered);
}

// Close drawer on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const drawer = document.getElementById("clinic-drawer");
        if (drawer.classList.contains("open")) {
            toggleDrawer();
        }
    }
});

// ===========================
// Chat Logic
// ===========================

// Send on Enter key
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

async function sendMessage() {
    const question = userInput.value.trim();
    if (!question) return;

    userInput.value = "";
    sendBtn.disabled = true;

    appendMessage("user", question);

    const loadingId = showLoading();

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ question: question }),
        });

        removeLoading(loadingId);

        if (response.ok) {
            const data = await response.json();
            const explanation = data.explanation || "No response generated.";
            const sql = data.generated_sql || "";
            const rawData = data.raw_data || [];

            appendAssistantMessage(explanation, sql, rawData);
        } else {
            const errorText = await response.text();
            appendError(`Backend Error (${response.status}): ${errorText}`);
        }
    } catch (err) {
        removeLoading(loadingId);
        appendError("Network Error: Unable to connect to the backend API. Make sure the server is running.");
    }

    sendBtn.disabled = false;
    userInput.focus();
}

function appendMessage(role, text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${role}-message`;

    if (role === "user") {
        // User avatar: gradient circle with initials
        const avatar = document.createElement("div");
        avatar.className = "message-avatar";
        avatar.textContent = "You";
        msgDiv.appendChild(avatar);
    } else {
        // AI avatar: natview logo image
        const avatar = document.createElement("img");
        avatar.className = "message-avatar-img";
        avatar.src = "assets/natview_logo.jpg";
        avatar.alt = "AI";
        msgDiv.appendChild(avatar);
    }

    const content = document.createElement("div");
    content.className = "message-content";
    content.innerHTML = `<p>${escapeHtml(text)}</p>`;

    msgDiv.appendChild(content);
    chatContainer.appendChild(msgDiv);
    scrollToBottom();
}

function appendAssistantMessage(explanation, sql, rawData) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "message assistant-message";

    const avatar = document.createElement("img");
    avatar.className = "message-avatar-img";
    avatar.src = "assets/natview_logo.jpg";
    avatar.alt = "AI";

    const content = document.createElement("div");
    content.className = "message-content";

    content.innerHTML = `<p>${formatText(explanation)}</p>`;

    if (sql && sql !== "-- Blocked gracefully by Core Router") {
        const toggleId = "tech-" + Date.now();

        const toggle = document.createElement("button");
        toggle.className = "technicals-toggle";
        toggle.innerHTML = "&#9662; Show Technicals";
        toggle.onclick = () => {
            const techDiv = document.getElementById(toggleId);
            techDiv.classList.toggle("open");
            toggle.innerHTML = techDiv.classList.contains("open")
                ? "&#9652; Hide Technicals"
                : "&#9662; Show Technicals";
        };

        const techDiv = document.createElement("div");
        techDiv.id = toggleId;
        techDiv.className = "technicals-content";
        techDiv.innerHTML = `
            <div class="technicals-label">Generated SQL</div>
            <pre>${escapeHtml(sql)}</pre>
            <div class="technicals-label" style="margin-top:10px">Rows Returned: ${rawData.length}</div>
        `;

        content.appendChild(toggle);
        content.appendChild(techDiv);
    }

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(content);
    chatContainer.appendChild(msgDiv);
    scrollToBottom();
}

function appendError(text) {
    const msgDiv = document.createElement("div");
    msgDiv.className = "message assistant-message";

    const avatar = document.createElement("img");
    avatar.className = "message-avatar-img";
    avatar.src = "assets/natview_logo.jpg";
    avatar.alt = "AI";

    const content = document.createElement("div");
    content.className = "message-content error-content";
    content.innerHTML = `<p>${escapeHtml(text)}</p>`;

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(content);
    chatContainer.appendChild(msgDiv);
    scrollToBottom();
}

function showLoading() {
    const id = "loading-" + Date.now();
    const msgDiv = document.createElement("div");
    msgDiv.className = "message assistant-message";
    msgDiv.id = id;

    msgDiv.innerHTML = `
        <img src="assets/natview_logo.jpg" alt="AI" class="message-avatar-img">
        <div class="message-content">
            <div class="loading-dots">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;

    chatContainer.appendChild(msgDiv);
    scrollToBottom();
    return id;
}

function removeLoading(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
}

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

function formatText(text) {
    let formatted = escapeHtml(text);
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    formatted = formatted.replace(/\n/g, "<br>");
    return formatted;
}
