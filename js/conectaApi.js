const acessoAPI = 'http://localhost:3000/videos';

async function listarVideos() {
    const response = await fetch(acessoAPI);
    const responseJson = await response.json();
    
    return responseJson;
}

export const conectaApi = {
    listarVideos
}

