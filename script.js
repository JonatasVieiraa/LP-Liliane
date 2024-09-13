var player;
var videoContainer = document.getElementById('videoContainer');
var playButton = document.getElementById('playButton');
var videoIframe = document.getElementById('videoIframe');

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoIframe', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    playButton.addEventListener('click', toggleVideo);
    videoContainer.addEventListener('click', toggleVideo);
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        shrinkVideo();
    }
}

function toggleVideo(event) {
    event.stopPropagation();
    if (videoContainer.classList.contains('expanded')) {
        shrinkVideo();
    } else {
        expandVideo();
    }
}

function expandVideo() {
    videoContainer.classList.add('expanded');
    playButton.style.display = 'none';
    player.playVideo();
}

function shrinkVideo() {
    videoContainer.classList.remove('expanded');
    playButton.style.display = 'block';
    player.stopVideo();
}

// Fechar o vídeo ao clicar fora dele
document.addEventListener('click', function (event) {
    if (videoContainer.classList.contains('expanded') && !videoContainer.contains(event.target)) {
        shrinkVideo();
    }
});

// Garantir que o script só seja executado após o carregamento do DOM
document.addEventListener('DOMContentLoaded', function () {
    // Caso o player ainda não esteja definido, tente inicializá-lo
    if (typeof player === 'undefined') {
        onYouTubeIframeAPIReady();
    }
});

