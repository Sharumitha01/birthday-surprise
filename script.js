
const aiText = document.getElementById("ai-text");
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.getElementById("progressBar");
const percentage = document.getElementById("percentage");
const startBtn = document.getElementById("startBtn");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const backgroundMusic = document.getElementById("backgroundMusic");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// =========================
// PAGE 1: AI TYPING
// =========================

async function write(text) {
    const p = document.createElement("p");
    aiText.appendChild(p);

    const terminal = document.querySelector("#page1 .terminal");

    for (let i = 0; i < text.length; i++) {
        p.textContent += text.charAt(i);
        terminal.scrollTop = terminal.scrollHeight;
        await sleep(35);
    }

    terminal.scrollTo({
        top: terminal.scrollHeight,
        behavior: "smooth"
    });
}

// =========================
// LOADING PROGRESS
// =========================

async function loadingSequence() {
    progressContainer.style.display = "block";
    percentage.style.display = "block";

    const stages = [
        { percent: 10, message: "😊 Collecting Your Best Smiles..." },
        { percent: 22, message: "📸 Recovering Beautiful Memories..." },
        { percent: 38, message: "💙 Finding Precious Moments..." },
        { percent: 54, message: "🎁 Wrapping Every Memory With Love..." },
        { percent: 70, message: "✨ Building A Special Birthday Experience..." },
        { percent: 86, message: "❤️ Adding One Final Surprise..." },
        { percent: 100, message: "✔ Birthday Protocol Ready" }
    ];

    for (const stage of stages) {
        await write(stage.message);

        while (parseInt(progressBar.style.width || "0") < stage.percent) {
            let current = parseInt(progressBar.style.width || "0");
            current++;

            progressBar.style.width = current + "%";
            percentage.innerHTML = current + "%";

            await sleep(30);
        }

        await sleep(700);
    }
}

// =========================
// CALENDAR SCAN
// =========================

async function calendarScan() {
    await write("");
    await write("Scanning Calendar...");
    await sleep(700);

    const months = [
        "January ✓",
        "February ✓",
        "March ✓",
        "April ✓",
        "May ✓",
        "June ✓",
        "July ✓",
        "August ✓",
        "September ✓",
        "October ✓",
        "November ✓"
    ];

    for (const month of months) {
        await write(month);
        await sleep(250);
    }

    await sleep(600);

    await write("");
    await write("⚠ MATCH FOUND");
    await sleep(1000);

    await write("📅 29 November");
    await sleep(700);

    await write("Status : Birthday Confirmed ❤️");
    await sleep(800);

    await write("");
    await write("Reason For Activation");
    await sleep(600);

    await write("Today isn't just another day.");
    await sleep(700);

    await write("Someone who deserves to smile");
    await sleep(700);

    await write("is celebrating today.");
    await sleep(1000);

    await write("");
    await write("Generating Final Message...");
    await sleep(700);

    await write("Encrypting Memories...");
    await sleep(700);

    await write("Preparing Surprise...");
    await sleep(700);

    await write("Mission Complete ✓");
    await sleep(1000);

    startBtn.style.display = "inline-block";

    setTimeout(() => {
        startBtn.classList.add("show-button");

        startBtn.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }, 300);
}

// =========================
// START WEBSITE
// =========================

async function boot() {
    await write("⚠ Secure Connection Established...");
    await sleep(700);

    await write("Authenticating User...");
    await sleep(700);

    await write("Access Granted ✓");
    await sleep(700);

    await write("Initializing Birthday Protocol...");
    await sleep(700);

    await write("Connecting To Memory Archive...");
    await sleep(700);

    await write("Loading Emotional Database...");
    await sleep(700);

    await write("Searching Through 365 Days...");
    await sleep(700);

    await write("Checking Every Special Moment...");
    await sleep(700);

    await write("Preparing Something Meant Only For You...");
    await sleep(700);

    await write("Please Wait...");
    await sleep(1000);

    await loadingSequence();
    await calendarScan();
}

window.onload = boot;

// =========================
// PAGE 1 → PAGE 2
// START MUSIC ON FIRST CLICK
// =========================

// PAGE 1 → PAGE 2

startBtn.addEventListener("click", async function () {

    // Start music without blocking the page transition
    if (backgroundMusic) {
        backgroundMusic.volume = 0.5;

        backgroundMusic.play().catch(error => {
            console.log("Music could not play:", error);
        });
    }

    // Move to Page 2
    page1.style.opacity = "0";

    await sleep(1200);

    page1.style.display = "none";
    page2.style.display = "block";
    page2.style.opacity = "1";

    await sleep(500);

    startPage2();
});

// =========================
// PAGE 2: IDENTITY REVEAL
// =========================

const identityText = document.getElementById("identity-text");
const continueBtn = document.getElementById("continueBtn");

async function typeIdentity(text) {
    const p = document.createElement("p");
    identityText.appendChild(p);

    const terminal = document.querySelector("#page2 .terminal");

    for (let i = 0; i < text.length; i++) {
        p.textContent += text.charAt(i);
        terminal.scrollTop = terminal.scrollHeight;
        await sleep(35);
    }

    terminal.scrollTo({
        top: terminal.scrollHeight,
        behavior: "smooth"
    });
}

async function startPage2() {
    await typeIdentity("Secure Memory Access Requested...");
    await sleep(700);

    await typeIdentity("Verifying Sender...");
    await sleep(700);

    await typeIdentity("Decrypting Identity...");
    await sleep(1000);

    await typeIdentity("████████████████ 100%");
    await sleep(800);

    await typeIdentity("Identity Successfully Verified.");
    await sleep(1000);

    await typeIdentity("");
    await typeIdentity("Hello...");
    await sleep(800);

    await typeIdentity("You probably thought");
    await typeIdentity("this website was created by an AI.");
    await sleep(1000);

    await typeIdentity("");
    await typeIdentity("But the truth is...");
    await sleep(700);

    await typeIdentity("The AI was only protecting this message.");
    await sleep(1200);

    await typeIdentity("");
    await typeIdentity("Loading Sender...");
    await sleep(1000);

    await revealName();
}

async function revealName() {
    const letters = [
        "S",
        "Sh",
        "Shar",
        "Sharu",
        "Sharum",
        "Sharumi",
        "Sharumit",
        "Sharumitha ❤️"
    ];

    for (const name of letters) {
        await typeIdentity(name);
        await sleep(350);
    }

    await sleep(800);

    await typeIdentity("");
    await typeIdentity("Not an AI.");
    await sleep(700);

    await typeIdentity("Not a Robot.");
    await sleep(700);

    await typeIdentity("I'm your sister. ❤️");
    await sleep(1000);

    await typeIdentity("");
    await typeIdentity("Today...");
    await typeIdentity("I wanted to create");
    await typeIdentity("something you could remember");
    await typeIdentity("long after your birthday is over.");

    await sleep(1000);

    continueBtn.style.display = "inline-block";
    continueBtn.classList.add("show-button");

    continueBtn.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// =========================
// PAGE 2 → PAGE 3
// =========================

continueBtn.addEventListener("click", async function () {
    const page3 = document.getElementById("page3");

    page2.style.opacity = "0";
    await sleep(1200);

    page2.style.display = "none";
    page3.style.display = "block";
    page3.style.opacity = "0";

    await sleep(100);
    page3.style.opacity = "1";

    await sleep(1200);

    startPage3();
});

// =========================
// SHARED TYPING FUNCTION
// WORKS FOR PAGES 3, 5, 6, 7
// =========================

async function writeStory(element, text) {
    const terminal = element.closest(".terminal");

    for (let i = 0; i < text.length; i++) {
        element.textContent += text.charAt(i);
        terminal.scrollTop = terminal.scrollHeight;
        await sleep(35);
    }

    terminal.scrollTop = terminal.scrollHeight;
}

// =========================
// PAGE 3: WHY THIS JOURNEY EXISTS
// =========================

async function startPage3() {
    const story = document.getElementById("story-text");
    const terminal = document.querySelector("#page3 .terminal");
    const archiveBtn = document.getElementById("archiveBtn");

    story.innerHTML = "";

    const lines = [
        "🔐 Opening protected memories...",
        "✅ Access granted.",
        "",
        "One question remains...",
        "Why was this journey created?",
        "",
        "Every year, millions of birthday wishes are sent.",
        "Some are forgotten within minutes.",
        "Some disappear inside old chats.",
        "Some become just another notification.",
        "",
        "But someone wanted to do something different.",
        "Not just another birthday wish.",
        "Not just another message.",
        "Something meaningful.",
        "Something you could come back to...",
        "tomorrow, next year, or even years from now.",
        "",
        "Because some people are more than just people in our lives.",
        "They become family — not by blood, but by heart. ❤️",
        "",
        "And this little journey?",
        "It was created to keep those feelings alive.",
        "",
        "💙 Memory Archive is ready."
    ];

    for (const line of lines) {
        const p = document.createElement("p");
        p.style.margin = "12px 0";
        story.appendChild(p);

        await writeStory(p, line);
        terminal.scrollTop = terminal.scrollHeight;

        await sleep(350);
    }

    archiveBtn.style.display = "inline-block";
    archiveBtn.classList.add("show-button");

    terminal.scrollTo({
        top: terminal.scrollHeight,
        behavior: "smooth"
    });
}

// =========================
// PAGE 3 → PAGE 4
// =========================

document.getElementById("archiveBtn").addEventListener("click", async function () {
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");

    page3.style.opacity = "0";
    await sleep(1200);

    page3.style.display = "none";
    page4.style.display = "block";

    await sleep(100);
    page4.style.opacity = "1";
});

// =========================
// PAGE 4 → PAGE 5
// =========================

document.getElementById("specialBtn").addEventListener("click", async function () {
    const page4 = document.getElementById("page4");
    const page5 = document.getElementById("page5");

    page4.style.opacity = "0";
    await sleep(1200);

    page4.style.display = "none";
    page5.style.display = "block";
    page5.style.opacity = "0";

    await sleep(100);
    page5.style.opacity = "1";

    await sleep(1200);

    startPage5();
});

// =========================
// PAGE 5: WHAT MAKES YOU SPECIAL
// =========================

async function startPage5() {
    const story = document.getElementById("special-text");
    const terminal = document.querySelector("#page5 .terminal");
    const letterBtn = document.getElementById("letterBtn");

    story.innerHTML = "";

    const lines = [
        "🔐 Opening personal file...",
        "Identity confirmed. ❤️",
        "",
        "What makes you so special?",
        "",
        "It's not just the memories we share.",
        "It's the little things.",
        "",
        "😂 The laughter that makes ordinary days special.",
        "💙 The comfort of knowing you're there.",
        "🤝 The trust that makes our bond stronger.",
        "",
        "You're not my brother by blood...",
        "but you're my brother by heart.",
        "",
        "If I could give you one thing...",
        "it would be the ability to see yourself",
        "through my eyes, just for a moment.",
        "",
        "Then you'd understand how much you mean to me.",
        "",
        "💙 Personal file complete."
    ];

    for (const line of lines) {
        const p = document.createElement("p");
        p.style.margin = "12px 0";
        story.appendChild(p);

        await writeStory(p, line);
        terminal.scrollTop = terminal.scrollHeight;

        await sleep(350);
    }

    letterBtn.style.display = "inline-block";
    letterBtn.classList.add("show-button");

    terminal.scrollTop = terminal.scrollHeight;
}

// =========================
// PAGE 5 → PAGE 6
// =========================

document.getElementById("letterBtn").addEventListener("click", async function () {
    const page5 = document.getElementById("page5");
    const page6 = document.getElementById("page6");

    page5.style.opacity = "0";
    await sleep(1200);

    page5.style.display = "none";
    page6.style.display = "block";
    page6.style.opacity = "0";

    await sleep(100);
    page6.style.opacity = "1";

    await sleep(1200);

    startPage6();
});

// =========================
// PAGE 6: LETTER FROM MY HEART
// =========================

async function startPage6() {
    const story = document.getElementById("letter-text");
    const terminal = document.querySelector("#page6 .terminal");
    const finalBtn = document.getElementById("finalBtn");

    story.innerHTML = "";

    const lines = [
        "🔓 Opening a message from the heart...",
        "",
        "Dear my brother, ❤️",
        "",
        "Sometimes, I wonder how someone who isn't",
        "connected to me by blood could become",
        "such an important part of my life.",
        "",
        "You're someone I carry in my heart.",
        "Your happiness matters to me,",
        "and I want to see you achieve beautiful things.",
        "",
        "On your birthday, I wish you happiness",
        "that stays, dreams that come true,",
        "and countless reasons to smile.",
        "",
        "Whatever life brings your way,",
        "I hope you never forget this:",
        "",
        "You have a sister by heart",
        "who is always cheering for you. 💙",
        "",
        "Thank you for being YOU.",
        "",
        "With all my love,",
        "SharumithaVijayakumar ❤️",
        "",
        "💌 Message delivered."
    ];

    for (const line of lines) {
        const p = document.createElement("p");
        p.style.margin = "12px 0";
        story.appendChild(p);

        await writeStory(p, line);
        terminal.scrollTop = terminal.scrollHeight;

        await sleep(400);
    }

    finalBtn.style.display = "inline-block";
    finalBtn.classList.add("show-button");

    terminal.scrollTop = terminal.scrollHeight;
}

// =========================
// PAGE 6 → PAGE 7
// =========================

document.getElementById("finalBtn").addEventListener("click", async function () {
    const page6 = document.getElementById("page6");
    const page7 = document.getElementById("page7");

    page6.style.opacity = "0";
    await sleep(1200);

    page6.style.display = "none";
    page7.style.display = "block";
    page7.style.opacity = "0";

    await sleep(100);
    page7.style.opacity = "1";

    await sleep(1200);

    startPage7();
});

// =========================
// PAGE 7: FINAL SURPRISE
// =========================

async function startPage7() {
    const story = document.getElementById("final-text");
    const terminal = document.querySelector("#page7 .terminal");
    const finalPhoto = document.getElementById("finalPhoto");
    const signature = document.getElementById("signature");

    story.innerHTML = "";
    finalPhoto.style.display = "none";
    signature.style.display = "none";

    const lines = [
        "🔓 Final message unlocked...",
        "",
        "🎂 Happy Birthday, my brother!",
        "",
        "Today is all about YOU.",
        "Your smile, your happiness, your dreams.",
        "",
        "I hope life gives you countless reasons to smile.",
        "I hope your dreams take you places you've imagined.",
        "And I hope you always know how special you are.",
        "",
        "You're not my brother by blood...",
        "but you're my brother by heart. ❤️",
        "",
        "I'm grateful that our paths crossed.",
        "I'm grateful for the memories we've made.",
        "And I'm grateful to have you in my life.",
        "",
        "No matter where life takes us,",
        "you'll always have a special place in my heart.",
        "",
        "This little website is coming to an end...",
        "but our memories don't end here.",
        "",
        "One last thing, before you go..."
    ];

    for (const line of lines) {
        const p = document.createElement("p");
        p.style.margin = "12px 0";
        story.appendChild(p);

        await writeStory(p, line);
        terminal.scrollTop = terminal.scrollHeight;

        await sleep(450);
    }

    await sleep(1000);

    const finalLine = document.createElement("p");
    finalLine.style.margin = "16px 0";
    story.appendChild(finalLine);

    await writeStory(
        finalLine,
        "🎁 Here's one more memory to keep forever..."
    );

    terminal.scrollTop = terminal.scrollHeight;

    await sleep(1000);

    finalPhoto.style.display = "flex";
    signature.style.display = "block";

    terminal.scrollTo({
        top: terminal.scrollHeight,
        behavior: "smooth"
    });
}
