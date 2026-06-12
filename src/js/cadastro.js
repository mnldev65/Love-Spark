const form = document.querySelector('.form-cadastro')

const inputNome = document.getElementById('nomeUser');
const inputSobrenome = document.getElementById('sobrenomeUser'); 
const inputEmail  = document.getElementById('emailUser');
const inputTelefone = document.getElementById('telefoneUser');
const inputSenha  = document.getElementById('senhaUser');
const inputConfirmar = document.getElementById('confirmarUser'); 

form.addEventListener('submit', function validarCadastro(event) {
    event.preventDefault();

    if (
        inputNome.value.trim() === "" ||
        inputSobrenome.value.trim() === "" ||
        inputEmail.value.trim() === "" ||
        inputTelefone.value.trim() === "" ||
        inputSenha.value.trim() === "" ||
        inputConfirmar.value.trim() === ""
    ) {
        alert("Por favor, preencha todos os campos do formulário.");
        return;
    }

    if (inputSenha.value !== inputConfirmar.value) {
        alert("As senhas não coincidem. Verifique e tente novamente.");
        inputConfirmar.focus();
        return;
    }

    alert("Conta criada com sucesso! Redirecionando para o login...");
    window.location.href = "index.html";
})
