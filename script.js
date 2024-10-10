// Função para abrir e fechar o menu em dispositivos móveis
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('open');
}

// Função para aplicar o efeito fade-in nas imagens ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    const elementsToShow = document.querySelectorAll('.fade-in');
    
    // Adiciona a classe 'visible' a todos os elementos com a classe 'fade-in' quando a página é carregada
    elementsToShow.forEach(function(element) {
        element.classList.add('visible');
    });
});
