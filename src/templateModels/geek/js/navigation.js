const Home = document.getElementById('home')
Home.addEventListener('click', function goHOme(event) {
    window.location.href = "../html/home.html"
})

const Hall = document.getElementById('hall')
Hall.addEventListener('click', function goHall(event) {
    window.location.href = "../html/comic.html"
})

const Sonora = document.getElementById('sonora')
Sonora.addEventListener('click', function goSonora(event) {
    window.location.href = "../html/sonora.html"
})

const Multiverso = document.getElementById('multiverso')
Multiverso.addEventListener('click', function goMutiverso(event) {
    window.location.href = "../html/Multiverso.html"
})


const AgenteIA = document.getElementById('Ia');
const ModalIA = document.getElementById('modal-ia');
const BtnNaoIA = document.getElementById('btn-nao-ia');
const BtnSimIA = document.getElementById('btn-sim-ia');

if (AgenteIA && ModalIA) {
    AgenteIA.addEventListener('click', function (event) {
        ModalIA.style.display = 'flex';
    });
}

if (BtnNaoIA && ModalIA) {
    BtnNaoIA.addEventListener('click', function (event) {
        ModalIA.style.display = 'none';
    });
}

if (BtnSimIA) {
    BtnSimIA.addEventListener('click', function (event) {
        alert("IA Ativada! Iniciando protocolos de romance nerd...");
        ModalIA.style.display = 'none';
    });
}


const TrocarSite = document.getElementById('trocar')
TrocarSite.addEventListener('click', function goTrocar(event) {
    window.location.href = "../../../template.html"
})

const VoltarCapa = document.querySelector('.btn-voltarCapa')
VoltarCapa.addEventListener('click', function voltarCapa(event) {
    window.location.href = "../html/capa.html"
})

const Proximapg = document.querySelector('.btn-avancar')
Proximapg.addEventListener('click', function avancar(event) {
    window.location.href = "../html/home.html"
})