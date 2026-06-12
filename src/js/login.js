const formLogin = document.querySelector('form');
const inputEmail = document.querySelector('input[name="email"]');
const inputSenha = document.querySelector('input[name="senha"]');

formLogin.addEventListener('submit', function Enter(event) {
    event.preventDefault();

    if (
        inputEmail.value.trim() === "" || inputSenha.value.trim() === ""
    ) {
        alert('Por favor, preencha todos os campos para entrar');

        if (inputEmail.value.trim() === "") {
            inputEmail.focus();
        } else {
            inputSenha.focus();
        }
        return;
    }

    window.location.href = "template.html"
})