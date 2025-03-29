//MENU HAMBURGUER PARA A PAGINA
const menuToggle = document.getElementById('menuToggle');
const navbarLinks = document.querySelector('.navbar-links');
const navLinks = document.querySelectorAll('.navbar-links a');
const closeMenu = document.querySelector('.close-menu a'); //X que fecha

//Alternar menu, abrir e fechar
menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
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
    const totalEventos = document.querySelectorAll(".evento").length;

    indice += direcao;
    if (indice >= totalEventos) indice = 0;
    if (indice < 0) indice = totalEventos - 1;

    carrossel.style.transform = `translateX(-${indice * 100}%)`;
}

// Muda automaticamente a cada 5 segundos
setInterval(() => mudarSlide(1), 5000);
