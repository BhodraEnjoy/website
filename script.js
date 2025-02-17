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
document.addEventListener("DOMContentLoaded", function () {
    const interestItems = document.querySelectorAll(".interest-item");

    interestItems.forEach(item => {
        // Hover effect to highlight the item
        item.addEventListener("mouseenter", () => {
            item.style.transform = "translateY(-5px)";
            item.style.boxShadow = "4px 4px 15px rgba(0, 0, 255, 0.2)";
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "translateY(0)";
            item.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.1)";
        });

        // Click effect to change background color briefly
        item.addEventListener("click", () => {
            item.style.backgroundColor = "#007bff";
            item.style.color = "#fff";

            setTimeout(() => {
                item.style.backgroundColor = "#fff";
                item.style.color = "#333";
            }, 300); // Reset after 300ms
        });
    });
});
