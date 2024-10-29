function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const error = document.getElementById('error');

    // Clear previous error messages
    error.textContent = '';

    // Basic validation
    if (name === '' || email === '') {
        error.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Simple email validation (not comprehensive)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        error.textContent = 'Por favor, insira um e-mail válido.';
        return;
    }

    // If validation passes
    alert('Formulário enviado com sucesso!');
    // Here you could also handle form submission to a server
    document.getElementById('contactForm').reset(); // Reset the form
});