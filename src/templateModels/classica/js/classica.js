const botaoConfiguracao = document.getElementById('openSettings');
const menuLateral = document.querySelector('.sidebar-config');

alert('Use o agente de IA para poder personalizar o site, ele se localiza na configurações')

botaoConfiguracao.addEventListener('click', function apertarBotao(event) {
    menuLateral.classList.toggle('menu-aberto');

    botaoConfiguracao.style.transform = menuLateral.classList.contains('menu-aberto') 
        ? 'rotate(90deg)' 
        : 'rotate(0deg)';
})

