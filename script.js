const divPizzas = document.querySelector('.div-pizzas')
const home = document.getElementById('home')
const promo = document.getElementById('promoções')
const pedirOnline = document.getElementById('pedir-online')
const sobreNos = document.getElementById('sobre-nós')


fetch('./static/home/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag

        })
home.addEventListener('click', () => {
    fetch('./static/home/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag
        })
})
promo.addEventListener('click', () => {
    fetch('./static/promocoes/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag
        })
})
pedirOnline.addEventListener('click', () => {
    fetch('./static/pedirOnline/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag
        })
})
sobreNos.addEventListener('click', () => {
    fetch('./static/sobrenos/index.html').then(resp => resp.text())
        .then(pag => {
            divPizzas.innerHTML = pag
        })
})

const toggleBtn = document.getElementById('toggle-button')
const nav = document.querySelector('nav')

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('aparecer')
})