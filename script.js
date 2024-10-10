// Função para alternar o menu responsivo
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
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
