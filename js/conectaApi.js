const acessoAPI = 'http://localhost:3000/videos';

async function listarVideos() {
    const conexao = await fetch(acessoAPI);
    const conexaoJsonResponse = await conexao.json();
    
    return conexaoJsonResponse;
}

async function criarVideo(titulo, descricao, url, imagem) {
    const conexao = await fetch(acessoAPI, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error('Error: não foi possível criar o vídeo');
    }

    const conexaoJsonResponse = await conexao.json();
    return conexaoJsonResponse;
}

async function buscarVideos(termoDeBusca) {
    const conexao = await fetch(acessoAPI.concat(`?q=${termoDeBusca}`));
    const conexaoJsonResponse = await conexao.json();

    return conexaoJsonResponse;
}

export const conectaApi = {
    listarVideos,
    criarVideo,
    buscarVideos
}

