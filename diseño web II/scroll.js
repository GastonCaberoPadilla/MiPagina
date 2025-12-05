// Seleccionamos elementos
const menuBtn = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

// Si existen (seguridad)
if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });
}
