// Existing code...
console.log("Welcome to my portfolio!");
const counterBaseUrl = "https://api.countapi.xyz";

function updateCodeVaultCounter() {
    fetch(`${counterBaseUrl}/get/a-a-rons-devspace.netlify.app/codevault`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("codevault-count").innerText = data.value;
        })
        .catch(err => console.error("Counter GET failed:", err));
}

function incrementCodeVaultCounter() {
    fetch(`${counterBaseUrl}/hit/a-a-rons-devspace.netlify.app/codevault`)
        .then(res => res.json())
        .then(data => {
            document.getElementById("codevault-count").innerText = data.value;
        })
        .catch(err => console.error("Counter HIT failed:", err));
}

updateCodeVaultCounter();


// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Fade in sections
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ------------------
// Back to Top Button
// ------------------
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Matrix background effect
const canvas = document.getElementById('matrixCanvas');  // Get the canvas from HTML
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

const phrase = "AARONSDEVSPACE"; // Your special phrase
let phraseColumn = Math.floor(Math.random() * columns); // Pick random column to show phrase

function draw() {
    ctx.fillStyle = 'rgba(18, 18, 18, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#0F0'; // Matrix green
    ctx.font = fontSize + 'px monospace';

    const letters = "AARONSDEVSPACE"; // Only use letters from phrase

    for (let i = 0; i < drops.length; i++) {
        let text;

        if (i === phraseColumn) {
            const phraseIndex = (drops[i] - 1) % phrase.length;
            text = phrase[phraseIndex];
        } else {
            text = letters[Math.floor(Math.random() * letters.length)];
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly or if drop is too long
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Update phrase column randomly every 10 seconds
setInterval(() => {
    phraseColumn = Math.floor(Math.random() * columns);
}, 10000);

setInterval(draw, 33); // Draw the effect every 33ms


