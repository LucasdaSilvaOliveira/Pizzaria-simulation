const divPizzas = document.querySelector('.div-pizzas')
const home = document.getElementById('home')
const promo = document.getElementById('promoções')
const pedirOnline = document.getElementById('pedir-online')
const sobreNos = document.getElementById('sobre-nós')


fetch('./docs/home/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag

        })
home.addEventListener('click', () => {
    fetch('./docs/home/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag
        })
})
promo.addEventListener('click', () => {
    fetch('./docs/promocoes/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag
        })
})
pedirOnline.addEventListener('click', () => {
    fetch('./docs/pedirOnline/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag
        })
})
sobreNos.addEventListener('click', () => {
    fetch('./docs/sobrenos/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag
        })
})

const toggleBtn = document.getElementById('toggle-button')
const nav = document.querySelector('nav')

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('aparecer')
})