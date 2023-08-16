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

    if (videos.length == 0) {
        itemListaVideos.innerHTML = `
        <h2 class="mensagem__titulo" style="margin: 0 auto;">
            Não foram encontrados vídeos com o termo '${termoPesquisa}'
        </h2>`;
    }
}