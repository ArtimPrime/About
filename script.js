window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
      const pos = sec.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
        sec.querySelectorAll(".skill").forEach(skill => {
          const level = skill.getAttribute("data-level");
          skill.querySelector("::after"); // псевдоэлемент не доступен напрямую
          skill.style.setProperty("--fill", level + "%");
          skill.style.background = `linear-gradient(to right, #4caf50 ${level}%, #ddd ${level}%)`;
        });
      }
    });
  });
  