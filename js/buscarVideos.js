import { conectaApi } from "./conectaApi.js";
import criarCard from "./mostrarVideos.js";

const elemBotaoPesquisa = document.querySelector('[data-botao-pesquisa]');

elemBotaoPesquisa.addEventListener('click', evento => buscarVideos(evento));

async function buscarVideos(evento) {
    evento.preventDefault();

    const termoPesquisa = document.querySelector('[data-pesquisa]').value;
    const videos = await conectaApi.buscarVideos(termoPesquisa);

    const itemListaVideos = document.querySelector('[data-lista]');
    itemListaVideos.innerHTML = '';

    videos.forEach(video => {
        itemListaVideos.appendChild(criarCard(video))
    });
}