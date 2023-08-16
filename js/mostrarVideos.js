import { conectaApi } from "./conectaApi.js";

const itemListaVideos = document.querySelector('[data-lista]');

export default function criarCard(video) {
    const itemVideo = document.createElement('li');
    itemVideo.className = 'videos__item';
    itemVideo.innerHTML = `
        <iframe width="100%" height="72%" src="${video.url}"
            title="${video.titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${video.imagem}" alt="logo canal alura">
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
        </div>
    `;
    return itemVideo;
}

async function listarVideos() { 
    try {
        const videos = await conectaApi.listarVideos();
        videos.forEach(video => {
            itemListaVideos.appendChild(criarCard(video));
        });
    } catch {
        itemListaVideos.innerHTML = `
        <h2 class="mensagem__titulo" style="margin: 0 auto;">
            Não foi possível carregar a lista de vídeos
        </h2>`;
    }
}

listarVideos();