function register() {
    window.location = "register.html";
}

function returnLogin() {
    window.location = "login.html";
}

function logout() {
    window.location = "login.html";
}

function inGame(){
    window.location = "Boom.html"
}

function lobby(){
    window.location = "Lobby.html"
}
function audioSrc(src) {
    var audio = new Audio(src)
    audio.play()
}
function playAudio(){
    alert("dsad")
    audioSrc('../Audio/backgroundMusic.mp3')
}

