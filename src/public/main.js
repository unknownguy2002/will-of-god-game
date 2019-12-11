let currentPlayer = 4
let scores = {
    "1": 0,
    "2": 0,
    "3": 0
}
let sounds = {
    "0": {
        "path": "/public/audio/themeFaded.mp3",
        "volume": 0.7,
        "running": false
    },
    "9": {
        "path": "/public/audio/intense.mp3",
        "volume": 0.6,
        "running": false
    },
    "8": {
        "path": "/public/audio/solve.mp3",
        "volume": 0.6,
        "running": false
    }
}

document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode).toString();
    console.log(typeof(charStr), charStr)
    if(charStr === "`"){
        document.getElementById("wheelText").innerHTML = ""
        toggleWheel()
    }
    if(charStr === "="){
        addToPlayer(50)
    }
    if(charStr === "-"){
        addToPlayer(-50)
    }
    if(charStr === "+"){
        addToPlayer(250)
    }
    if(charStr === "_"){
        addToPlayer(-250)
    }
    if(charStr === "1"){
        currentPlayer = 1
        changePlayer()
    }
    if(charStr === "2"){
        currentPlayer = 2
        changePlayer()
    }
    if(charStr === "3"){
        currentPlayer = 3
        changePlayer()
    }
    if(charStr === "4"){
        currentPlayer = 4
        changePlayer()
    }
    if(sounds[charStr]){
        console.log("Playing Sound")
        toggleSoundboard(charStr);
    }
    if(charStr === charStr.toUpperCase()){
        revealName(charStr);
        return;
    }
};

function toggleSoundboard(charStr){
    console.log("Playing:", charStr)
    if(sounds[charStr].running == false){
        let sound = new Audio(sounds[charStr].path)
        sound.play()
        if(sounds[charStr].volume){
            console.log(sound.volume)
            sound.volume = sounds[charStr].volume
        }
        sounds[charStr].running = true
        sounds[charStr].instance = sound
        return;
    }
    if(sounds[charStr].running == true){
        sounds[charStr].instance.pause()
        sounds[charStr].instance.currentTime = 0
        sounds[charStr].running = false
        return;
    }
}

function revealName(char){
    locs = charLoc[char.toLowerCase()]
    
    if(locs && locs.length > 0){
        let sound = new Audio("/public/audio/ding.mp3")
        sound.play()
    }
    for(i in locs){
        boxes[locs[i]].classList.remove("active")
        boxes[locs[i]].classList.add("wait")
        boxes[locs[i]].classList.remove("wait")
        boxes[locs[i]].classList.add("active")
        boxes[locs[i]].innerHTML = char.toUpperCase()
    }
}


let wheelState = false
function toggleWheel(){
    if(wheelState == false){
        console.log("Toggling wheel ON")
        document.getElementById("letterBoard").classList.add("hidden");
        document.getElementById("wheel").classList.remove("hidden");
        theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
        theWheel.draw();
        theWheel.startAnimation();
        wheelState = true;
    } else{
        console.log("Toggling wheel OFF")
        document.getElementById("letterBoard").classList.remove("hidden");
        document.getElementById("wheel").classList.add("hidden");
        theWheel.stopAnimation(false);
        wheelState = false;
    }
}

function addToPlayer(addition){
    if(currentPlayer == 4){
        return;
    } else {
        console.log("adding")
        scores[currentPlayer.toString()] = scores[currentPlayer.toString()] + addition;
        document.getElementById("P"+currentPlayer.toString()).innerHTML = "$" + (scores[currentPlayer.toString()]);
    }
}

function changePlayer(){
    document.getElementById("P1").classList.remove("playerSelected")
    document.getElementById("P2").classList.remove("playerSelected")
    document.getElementById("P3").classList.remove("playerSelected")
    if(currentPlayer == 4){
        return;
    }
    document.getElementById("P"+currentPlayer).classList.add("playerSelected")
}