// Skill Bar Animation
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll('.bar');
    
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.setProperty('--percent', percent);
    });
});
// Toggle Mobile Menu
document.querySelector(".menu-toggle").addEventListener("click", function () {
    document.querySelector(".navbar ul").classList.toggle("active");
});
// Show buttons when scrolling
window.onscroll = function () {
    let upBtn = document.querySelector(".up-btn");
    let downBtn = document.querySelector(".down-btn");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        upBtn.style.display = "block";
    } else {
        upBtn.style.display = "none";
    }

    if (window.innerHeight + window.scrollY < document.body.scrollHeight - 100) {
        downBtn.style.display = "block";
    } else {
        downBtn.style.display = "none";
    }
};

// Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Scroll to Bottom
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
