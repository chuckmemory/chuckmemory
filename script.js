// Função para alternar o menu responsivo com efeito de esmaecimento
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const menuIcon = document.querySelector('.menu-icon');
    navMenu.classList.toggle('open');  // Adiciona ou remove a classe 'open' que controla o fade-in
    menuIcon.classList.toggle('active');
}

// Função para aplicar o efeito de fade-in nas imagens ao carregar
function applyFadeInEffect() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element) => {
        element.classList.add('visible');
    });
}

// Adiciona o efeito de fade-in após o carregamento da página
window.onload = function() {
    applyFadeInEffect();
}

// Fechar o menu ao clicar em qualquer link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        if (navMenu.classList.contains('open')) {
            navMenu.classList.remove('open');
        }
    });
});


// Função para aplicar o efeito de fade-in na seção de fotos ao clicar no link "Fotos"
document.querySelector('.nav-link[href="#photos"]').addEventListener('click', function(e) {
    e.preventDefault();  // Previne o comportamento padrão do link
    
    const photoSection = document.querySelector('#photos');
    
    // Desloca a página até a seção de fotos
    photoSection.scrollIntoView({ behavior: 'smooth' });
    
    // Aplica o efeito de fade-in à seção de fotos
    setTimeout(() => {
        photoSection.classList.add('fade-in');
    }, 200);  // O atraso dá tempo para o scroll suave ocorrer antes do fade-in
});

// Função para verificar quando a seção de fotos entra na área visível
function applyFadeInOnScroll() {
    const photoSection = document.querySelector('#photos');
    const rect = photoSection.getBoundingClientRect();

    // Se a parte superior da seção de fotos estiver dentro da área visível da página
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        photoSection.classList.add('fade-in');
    }
}

// começa o modal ao clicar em fotos
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('photoModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');

// Abre a imagem no modal ao clicar
images.forEach((img, index) => {
    img.addEventListener('click', function() {
        openModal(index);
    });
});

function openModal(index) {
    modal.style.display = "block";
    showImage(index);
}

function showImage(index) {
    currentIndex = index;
    modalImg.src = images[index].src;
    captionText.innerHTML = images[index].alt;

    // Verifica se há mais fotos para a esquerda ou direita
    document.querySelector('.prev').classList.toggle('hidden', index === 0);
    document.querySelector('.next').classList.toggle('hidden', index === images.length - 1);
}

// Fecha o modal
document.querySelector('.close').onclick = function() {
    modal.style.display = "none";
}

// Função para navegar pelas imagens
function changeImage(direction) {
    let newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < images.length) {
        showImage(newIndex);
    }
}

// Adiciona o listener para verificar o scroll
window.addEventListener('scroll', applyFadeInOnScroll);

// Executa uma verificação inicial para ver se a seção já está visível ao carregar a página
applyFadeInOnScroll();


// Função para aplicar o efeito de fade-in na seção sobre ao clicar no link "Sobre"
document.querySelector('.nav-link[href="#about"]').addEventListener('click', function(e) {
    e.preventDefault();  // Previne o comportamento padrão do link
    
    const aboutSection = document.querySelector('#about');
    
    // Desloca a página até a seção sobre
    aboutSection.scrollIntoView({ behavior: 'smooth' });
    
    // Aplica o efeito de fade-in à seção sobre
    setTimeout(() => {
        aboutSection.classList.add('fade-in');
    }, 200);  // O atraso dá tempo para o scroll suave ocorrer antes do fade-in
});

// Função para verificar quando uma seção entra na área visível
function applyFadeInOnScroll() {
    const photoSection = document.querySelector('#photos');
    const aboutSection = document.querySelector('#about');

    // Verifica se a seção de fotos está visível
    const rectPhoto = photoSection.getBoundingClientRect();
    if (rectPhoto.top < window.innerHeight && rectPhoto.bottom >= 0) {
        photoSection.classList.add('fade-in');
    }

    // Verifica se a seção sobre está visível
    const rectAbout = aboutSection.getBoundingClientRect();
    if (rectAbout.top < window.innerHeight && rectAbout.bottom >= 0) {
        aboutSection.classList.add('fade-in');
    }
}

// Adiciona o listener para verificar o scroll
window.addEventListener('scroll', applyFadeInOnScroll);

// Executa uma verificação inicial para ver se as seções já estão visíveis ao carregar a página
applyFadeInOnScroll();
