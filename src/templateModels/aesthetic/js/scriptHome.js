const botaoConfiguracao = document.getElementById('openSettings');
const menuLateral = document.querySelector('.sidebar-config');
const mudarSite = document.querySelector('.trocarModelo');

setTimeout(function () {
    alert('Use o agente de IA para poder personalizar o site, ele é o icon do ovni, basta clicar nele');
}, 3000);

botaoConfiguracao.addEventListener('click', function apertarBotao(event) {
    menuLateral.classList.toggle('menu-aberto');

    botaoConfiguracao.style.transform = menuLateral.classList.contains('menu-aberto') 
        ? 'rotate(90deg)' 
        : 'rotate(0deg)';
})

mudarSite.addEventListener('click', function trocar(event) {
    window.location.href = "../../../template.html";
});

const agenteIA = document.getElementById('aiWidget');

agenteIA.addEventListener('click', function falaIA(event) {
    alert('oi')
})

const Tracks = document.getElementById('tracks');

Tracks.addEventListener('click', function aperteiTracks(event) {
    window.location.href = "../html/tracks.html";
})

const Episodes = document.getElementById('episodes');

Episodes.addEventListener('click', function aperteiEpisodes(event) {
    window.location.href = "../html/episodes.html";
})

const Feed = document.getElementById('feed');

Feed.addEventListener('click', function aperteiFeed (event) {
    window.location.href = "../html/homeAesthetic.html";
});