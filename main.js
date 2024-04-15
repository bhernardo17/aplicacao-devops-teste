// Função para animar a rolagem suave
function scrollToSection(element) {
    // vai achar o elemento de destino com base no atributo href do link
    const target = document.querySelector(element.getAttribute('href'));

    // Calcula a posição do elemento de destino
    const offsetTop = target.offsetTop;

    // Anima a rolagem suave
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Adiciona o evento de clique aos links do header
const headerLinks = document.querySelectorAll('.nav_item');
headerLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        scrollToSection(link); // Chama a função de rolagem suave
    });
});


