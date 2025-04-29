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
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const phrase = 'A A Rons Devspace';
const phraseLetters = phrase.split('');
const fontSize = 18;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

// One special column to show full phrase vertically
let phraseColumn = Math.floor(Math.random() * columns);
let phraseStart = Math.floor(Math.random() * 20); // Starting offset for effect

function drawMatrix() {
    ctx.fillStyle = 'rgba(18, 18, 18, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#76c7c0';
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < columns; i++) {
        let x = i * fontSize;
        let y = drops[i] * fontSize;

        if (i === phraseColumn) {
            // Full phrase down the column
            const charIndex = drops[i] - phraseStart;
            if (charIndex >= 0 && charIndex < phraseLetters.length) {
                ctx.fillText(phraseLetters[charIndex], x, y);
            }
        } else {
            // Draw random character from phrase pool
            const char = phraseLetters[Math.floor(Math.random() * phraseLetters.length)];
            ctx.fillText(char, x, y);
        }

        // Reset when off screen
        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;

            // Random chance to change phrase column
            if (Math.random() > 0.95) {
                phraseColumn = Math.floor(Math.random() * columns);
                phraseStart = Math.floor(Math.random() * 20);
            }
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = Array(columns).fill(1);
});




