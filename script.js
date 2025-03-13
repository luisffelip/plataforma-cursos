// Seleciona o ícone do menu e o // Seleciona o ícone do menu e o modal
const menuIcon = document.getElementById('menu-icon');
const menuModal = document.getElementById('menu-modal');

// Adiciona um evento de clique ao ícone do menu
menuIcon.addEventListener('click', () => {
    // Alterna a classe .active no modal
    menuModal.classList.toggle('active');
});

// Seleciona todos os links dentro do modal
const modalLinks = document.querySelectorAll('.modal-content a');

// Adiciona um evento de clique a cada link do modal
modalLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Fecha o modal ao clicar em um link
        menuModal.classList.remove('active');
    });
});