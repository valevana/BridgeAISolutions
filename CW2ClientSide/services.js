const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const detailsId = button.getAttribute("aria-controls");
    const extraContent = detailsId
      ? document.getElementById(detailsId)
      : button.nextElementSibling;

    if (!extraContent) return;

    const isExpanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isExpanded));
    button.textContent = isExpanded ? "Learn More" : "Show Less";

    if (extraContent.hasAttribute("hidden")) {
      extraContent.hidden = isExpanded;
    } else {
      extraContent.style.display = isExpanded ? "none" : "block";
    }
  });
});

$(document).ready(function () {
  $(".service-card").hover(
    function () {
      $(this).stop(true, true).animate({ opacity: 0.8 }, 150);
    },
    function () {
      $(this).stop(true, true).animate({ opacity: 1 }, 150);
    }
  );
});

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

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);