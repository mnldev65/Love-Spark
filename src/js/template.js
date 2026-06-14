const BotaoDark = document.getElementById('btn-dark');
const BotaoAesthetic = document.getElementById('btn-aesthetic');
const BotaoGeek = document.getElementById('btn-geek');
const BotaoClassica = document.getElementById('btn-classica');

BotaoDark.addEventListener('click', function apetarBtnDark(event) {
    window.location.href = "./templateModels/dark_romance/html/home.html";
})


BotaoAesthetic.addEventListener('click', function apetarBtnAesthetic(event) {
    window.location.href = "./templateModels/aesthetic/html/homeAesthetic.html";
})


BotaoGeek.addEventListener('click', function apetarBtnGeek(event) {
    window.location.href = "./templateModels/geek/html/home.html";
})


BotaoClassica.addEventListener('click', function apetarBtnClassica(event) {
    window.location.href = "./templateModels/classica/html/home.html";
})