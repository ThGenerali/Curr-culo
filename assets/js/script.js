let dashboard = document.querySelector('.dashboard');
let toggle = document.querySelector('.toggle');
let conteudo = document.querySelector('.conteudo');
toggle.onclick = function() {
    dashboard.classList.toggle('active');
    conteudo.classList.toggle('active');
}