import { conectaApi } from "./conectaApi.js";

const formInput = document.querySelector('[data-formulario]');

formInput.addEventListener('submit', evento => criarVideo(evento));

async function criarVideo(evento) {
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const imagem = document.querySelector('[data-imagem]').value;

    const descricao = Math.floor(Math.random() * 50 + 1).toString();
    
    try {
        await conectaApi.criarVideo(titulo, descricao, url, imagem);
        window.location.href = '../pages/envio-concluido.html';
    } catch (error) {
        alert(error.message);
    }
}

