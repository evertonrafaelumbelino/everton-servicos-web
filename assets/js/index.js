let imgMenu = document.getElementById('imgMenu');
let menu = document.getElementById('menu');
let inputNome = document.getElementById('nome');
let inputEmail = document.getElementById('email');
let textAreaMensagem = document.getElementById('mensagem');
let inputEnviar = document.getElementById('inputEnviar');
let textoFormResultado = document.getElementById('textoFormResultado');
let divLinkTopo = document.getElementById('divLinkTopo');
let imgLinkTopo = document.getElementById('imgLinkTopo');

imgMenu.addEventListener('click', () => {
    if (imgMenu.className === 'close') {
        menu.style.position = 'absolute';
        menu.style.display = 'flex';
        menu.style.flexFlow = 'column nowrap';
        menu.style.justifyContent = 'center';
        menu.style.alignItems = 'center';
        menu.style.top = '13%';
        menu.style.left = '47vw';
        menu.style.backgroundColor = '#12ff46';
        menu.style.padding = '10px';
        menu.style.width = '50%';
        imgMenu.className = 'open';
    } else {
        menu.style.display = 'none';
        imgMenu.className = 'close';
    }
});

inputEnviar.addEventListener('click', () => {
    if (inputNome.value.length === 0 | inputEmail.value.length === 0 | textAreaMensagem.value.length === 0) {
        textoFormResultado.innerHTML = 'Preencha todos os campos!';
        textoFormResultado.style.color = '#7b1313';
        textoFormResultado.style.fontWeight = 'bold';
        textoFormResultado.style.textAlign = 'center';
    } else {
        textoFormResultado.innerHTML = 'Mensagem enviada com sucesso!';
        textoFormResultado.style.color = '#12ff46';
        textoFormResultado.style.fontWeight = 'bold';
        textoFormResultado.style.textAlign = 'center';
    }
});

divLinkTopo.addEventListener('mouseenter', () => {
    divLinkTopo.style.backgroundColor = '#12ff46';
    divLinkTopo.style.border = '1px solid #071b11';
    imgLinkTopo.src = 'assets/imgs/seta-cima-black.png';
});

divLinkTopo.addEventListener('mouseleave', () => {
    divLinkTopo.style.backgroundColor = '#071b11';
    divLinkTopo.style.border = '1px solid white';
    imgLinkTopo.src = 'assets/imgs/seta-cima-white.png';
});