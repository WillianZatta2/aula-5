// document.addEventListener('deviceready', onLoad, false);

// async function fazerSolicitacao(idPost) {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + idPost);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Houve um problema com a solicitação:', error);
//     }
// }

// function gerarNumeroAleatorio() {
//     return Math.floor(Math.random() * 50) + 1;
// }

// async function BuscaPostInicial() {
//     for (let index = 0; index < 3; index++) {
//         const id = gerarNumeroAleatorio();
//         const post = await fazerSolicitacao(id);
//         if (post) {
//             adicionarItem(post.title, post.thumbnailUrl);
//         }
//     }
// }

// function onLoad() {
//     BuscaPostInicial();
// }

// function adicionarItem(title, url) {
//     const lista = document.getElementById('app');

//     const novoItem = document.createElement('li');
//     novoItem.classList.add('card');

//     const novoTitulo = document.createElement('p');
//     novoTitulo.classList.add('title');
//     novoTitulo.textContent = title;

//     const novaImagem = document.createElement('img');
//     novaImagem.classList.add('img');
//     novaImagem.src = url;
//     novaImagem.alt = 'Imagem de Exemplo';

//     novoItem.appendChild(novoTitulo);
//     novoItem.appendChild(novaImagem);

//     lista.appendChild(novoItem);
// }


// function verificarScrollFim() {
//     const appDiv = document.getElementById('app');
//     const scrollTop = appDiv.scrollTop;
//     const scrollHeight = appDiv.scrollHeight;
//     const clientHeight = appDiv.clientHeight;

//     if (scrollTop + clientHeight >= scrollHeight) {
//         console.log('Você chegou ao fim da div!');
//     }
// }


document.addEventListener('deviceready', onLoad, false);

async function fazerSolicitacao(idPost) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos/' + idPost);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Houve um problema com a solicitação:', error);
    }
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 50) + 1;
}

async function buscaPost() {
    const id = gerarNumeroAleatorio();
    const post = await fazerSolicitacao(id);
    if (post) {
        adicionarItem( 
            post.id +" | "+ post.title,
            post.thumbnailUrl
        );
    }
}

function buscaPostInicial() {
    for (let index = 0; index < 3; index++) {
        buscaPost()
    }
}

function onLoad() {
    buscaPostInicial();

    const appDiv = document.getElementById('app');
    if (appDiv) {
        appDiv.addEventListener('scroll', verificarScrollFim);
    }
}

function adicionarItem(title, url) {
    const lista = document.getElementById('app');

    const novoItem = document.createElement('li');
    novoItem.classList.add('card');

    const novoTitulo = document.createElement('p');
    novoTitulo.classList.add('title');
    novoTitulo.textContent = title;

    const novaImagem = document.createElement('img');
    novaImagem.classList.add('img');
    novaImagem.src = url;
    novaImagem.alt = 'Imagem de Exemplo';

    novoItem.appendChild(novoTitulo);
    novoItem.appendChild(novaImagem);

    lista.appendChild(novoItem);
}

function verificarScrollFim() {
    const appDiv = document.getElementById('app');
    if (appDiv) {
        const scrollTop = appDiv.scrollTop;
        const scrollHeight = appDiv.scrollHeight;
        const clientHeight = appDiv.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            buscaPost();
        }
    }
}

