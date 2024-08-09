/*This part of the code is for the toggle button to function*/

const btn = document.getElementById('menu-btn'); 
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex') 
    nav.classList.toggle('hidden')
})

