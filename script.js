const menuIcon = document.getElementById('menu');
const menuModal = document.getElementById('menu-modal');

menuIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o clique se propague para o documento
    menuModal.classList.toggle('active');
});

// Fecha o modal ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!menuModal.contains(event.target) && !menuIcon.contains(event.target)) {
        menuModal.classList.remove('active');
    }
});

const modalLinks = document.querySelectorAll('.modal-content a');

modalLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuModal.classList.remove('active');
    });
});