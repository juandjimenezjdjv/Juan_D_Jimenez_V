function toggleMenu() {
  const nav = document.getElementById('menu');
  nav.classList.toggle('show');
}

document.addEventListener("DOMContentLoaded", () => {
  const projects   = document.querySelectorAll(".portfolio-container .project");
  const btnMore    = document.getElementById("loadMore");
  const btnLess    = document.getElementById("loadLess");
  const perPage    = 3;
  let   shownCount = 0;

  // Oculta todos al inicio
  projects.forEach(p => p.style.display = "none");

  function updateButtons() {
    btnLess.style.display = shownCount > perPage ? "inline-block" : "none";
    btnMore.style.display = shownCount < projects.length ? "inline-block" : "none";
  }

  // Muestra el siguiente bloque de proyectos
  function showNext() {
    const end = Math.min(shownCount + perPage, projects.length);
    for (let i = shownCount; i < end; i++) {
      projects[i].style.display = "block";
    }
    shownCount = end;
    updateButtons();
  }

  // Oculta el último bloque de proyectos
  function showPrev() {
    const start = Math.max(shownCount - perPage, 0);
    for (let i = start; i < shownCount; i++) {
      projects[i].style.display = "none";
    }
    shownCount = start;
    updateButtons();
  }

  // Inicialización
  showNext();                  // muestra los primeros 3
  btnMore.addEventListener("click", showNext);
  btnLess.addEventListener("click", showPrev);
});