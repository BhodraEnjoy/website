// Skill Bar Animation
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll('.bar');
    
    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.setProperty('--percent', percent);
    });
});
