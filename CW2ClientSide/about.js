$(document).ready(function() {
    // FAQ Accordion functionality - Mixed approach
    const faqButtons = document.querySelectorAll(".faq-question");
    
    faqButtons.forEach((button) => {
        $(button).on("click", () => {
            const answerId = button.getAttribute("aria-controls");
            const answer = answerId
                ? document.getElementById(answerId)
                : button.nextElementSibling;
    
            if (!answer) return;
    
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            const icon = $(button).find(".faq-icon")[0];
    
            button.setAttribute("aria-expanded", String(!isExpanded));
    
            if (answer.hasAttribute("hidden")) {
                answer.hidden = isExpanded;
            } else {
                answer.style.display = isExpanded ? "none" : "block";
            }
    
            icon.textContent = isExpanded ? "+" : "−";
        });
    });
    
    // Scroll reveal functionality - Mostly vanilla
    const revealElements = document.querySelectorAll(".reveal");
    
    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.88;
    
        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
    
            if (elementTop < triggerBottom) {
                element.classList.add("visible");
            }
        });
    }
    
    $(window).on("scroll", revealOnScroll);
    $(window).on("load", revealOnScroll);
});