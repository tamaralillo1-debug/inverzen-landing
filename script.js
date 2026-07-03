const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const whatsappFloat = document.getElementById("whatsappFloat");
const siteFooter = document.getElementById("siteFooter");

if (menuToggle) {
  menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
}

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("open"));
});

const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = new FormData(leadForm);
    const subject = encodeURIComponent("Solicitud Diagnóstico Capital Ready");
    const body = encodeURIComponent(`Hola InverZen,

Quiero solicitar el Diagnóstico Capital Ready.

Nombre: ${form.get("name")}
Negocio: ${form.get("business")}
Correo: ${form.get("email")}
Principal problema: ${form.get("problem")}

Quedo atenta/o a los próximos pasos del piloto.`);

    window.location.href = `mailto:contacto@inverzen.cl?subject=${subject}&body=${body}`;
  });
}

if (whatsappFloat && siteFooter && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      whatsappFloat.classList.toggle("whatsapp-hidden", entry.isIntersecting);
    });
  }, { threshold: 0.15 });

  observer.observe(siteFooter);
}
