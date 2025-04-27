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
    fetch(`${counterBaseUrl}/hit/aaronhastings.com/codevault`)
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
