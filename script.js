 const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll(".page-section");

links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = link.getAttribute("data-section");

    sections.forEach(section => {
      section.classList.remove("visible");
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("visible");
    }
  });
});
