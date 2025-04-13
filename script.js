//MENU HAMBURGUER PARA A PAGINA
const menuToggle = document.getElementById("menuToggle");
const navbarLinks = document.querySelector(".navbar-links");
const navLinks = document.querySelectorAll(".navbar-links a");
const closeMenu = document.querySelector(".close-menu a"); //X que fecha

//Alternar menu, abrir e fechar
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener('click', () =>{
        navbarLinks.classList.remove('active');
    });
});
//FINALIZADO HAMBURGUER MOBILE

//EVENTOS
let indice = 0;

function mudarSlide(direcao) {
    const carrossel = document.querySelector(".carrossel");
    const eventos = document.querySelectorAll(".evento");

    indice += direcao;

    if (indice >= eventos.length) indice = 0;
    if (indice < 0) indice = eventos.length - 1;

    const eventoLargura = eventos[0].offsetWidth + 20; // 20 = margem lateral
    carrossel.style.transform = `translateX(-${indice * eventoLargura}px)`;
}


// Muda automaticamente a cada 50 segundos
setInterval(() => mudarSlide(1), 50000);

