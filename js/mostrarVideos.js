import { conectaApi } from "./conectaApi.js";

const itemListaVideos = document.querySelector('[data-lista]');

function criarCard(video) {
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
    const videos = await conectaApi.listarVideos();
    videos.forEach(video => {
        itemListaVideos.appendChild(criarCard(video));
    });
}

listarVideos();