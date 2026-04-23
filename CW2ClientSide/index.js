const sections = document.querySelectorAll(".section");

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

$('a[href^="#"]').on("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();

            $("html, body").animate({
                scrollTop: $(this.hash).offset().top
            }, 600);
        }
    });
