var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl');

ctrl.onclick = function () {

    // Update the Button
    var pause = ctrl.innerHTML === 'PAUSE';
    ctrl.innerHTML = pause ? 'CLICK TO PLAY' : 'PAUSE';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    // Prevent Default Action
    return false;
};
