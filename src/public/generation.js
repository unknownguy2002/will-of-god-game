let boxes = {}
let pressFunc = {}
let charLocKeys = {
    "a": [],
    "b": [],
    "c": [],
    "d": [],
    "e": [],
    "f": [],
    "g": [],
    "h": [],
    "i": [],
    "j": [],
    "k": [],
    "l": [],
    "m": [],
    "n": [],
    "o": [],
    "p": [],
    "q": [],
    "r": [],
    "s": [],
    "t": [],
    "u": [],
    "v": [],
    "w": [],
    "x": [],
    "y": [],
    "z": []
}
let charLoc = {}
charLoc = charLocKeys 


for(rowNo=2;rowNo<14;rowNo++){
    boxes["1-"+rowNo] = document.getElementById("box-1-"+rowNo);
}

for(rowNo=1;rowNo<15;rowNo++){
    boxes["2-"+rowNo] = document.getElementById("box-2-"+rowNo);
}

for(rowNo=1;rowNo<15;rowNo++){
    boxes["3-"+rowNo] = document.getElementById("box-3-"+rowNo);
}

for(rowNo=2;rowNo<14;rowNo++){
    boxes["4-"+rowNo] = document.getElementById("box-4-"+rowNo);
}

function getQuestion(){
    let rand = gameConfig.data[Math.floor(Math.random() * gameConfig.data.length)];
    return rand
}

function resetBoard(){
    keyArray = Object.keys(boxes);
    for(i=0;i<keyArray.length;i++){
        boxes[keyArray[i]].classList.remove("active");
        boxes[keyArray[i]].classList.remove("wait");
        boxes[keyArray[i]].innerHTML = "";
    }
}

function setActive(text){
    let sound = new Audio("/public/audio/reveal.mp3")
    sound.play()
    console.log(text)
    let words = text.split(" ");
    let previous = ""
    let lineArray = []
    for(i in words){
        if((previous.length + words[i].length) <= 12){
            previous = previous + words[i] + " "
        } else{
            previous = previous.slice(0, -1)
            lineArray.push(previous)
            previous = ""
            previous = previous+words[i] + " "
        }
    }
    previous = previous.slice(0, -1)
    lineArray.push(previous)

    if(lineArray.length == 1){
        setR1(lineArray[0])
    }
    if(lineArray.length == 2){
        line = lineArray[0]
        setR1(lineArray[0])
        setR2(lineArray[1])
    }
    if(lineArray.length == 3){
        line = lineArray[0]
        setR1(lineArray[0])
        setR2(lineArray[1])
        setR3(lineArray[2])
    }
    if(lineArray.length == 4){
        line = lineArray[0]
        setR1(lineArray[0])
        setR2(lineArray[1])
        setR3(lineArray[2])
        setR4(lineArray[3])
    }
}

function setR1(text){
    if(text.length%2 === 0){
        let spacing = (12 - text.length)/2
        for(rowNo=spacing+2;rowNo<(14-spacing);rowNo++){
            if(text[rowNo-(spacing+2)] !== " "){
                boxes["1-"+rowNo].classList.add("active")
                setChar(text[rowNo-(spacing+2)], "1-"+rowNo)
            }
        }
    } else {
        for(rowNo=2;rowNo<13;rowNo++){
            if(text[rowNo-2]){
                if(text[rowNo-2] !== " "){
                    boxes["1-"+rowNo].classList.add("active")
                    setChar(text[rowNo-2], "1-"+rowNo)
                }
            }
        }
    }
}

function setR2(text){
    if(text.length%2 === 0){
        let spacing = (12 - text.length)/2
        for(rowNo=spacing+2;rowNo<(14-spacing);rowNo++){
            if(text[rowNo-(spacing+2)] !== " "){
                boxes["2-"+rowNo].classList.add("active")
                setChar(text[rowNo-(spacing+2)], "2-"+rowNo)
            }
        }
    } else {
        for(rowNo=2;rowNo<13;rowNo++){
            if(text[rowNo-2]){
                if(text[rowNo-2] !== " "){
                    boxes["2-"+rowNo].classList.add("active")
                    setChar(text[rowNo-2], "2-"+rowNo)
                }
            }
        }
    }
}  

function setR3(text){
    if(text.length%2 === 0){
        let spacing = (12 - text.length)/2
        for(rowNo=spacing+2;rowNo<(14-spacing);rowNo++){
            if(text[rowNo-(spacing+2)] !== " "){
                boxes["3-"+rowNo].classList.add("active")
                setChar(text[rowNo-(spacing+2)], "3-"+rowNo)
            }
        }
    } else {
        for(rowNo=2;rowNo<13;rowNo++){
            if(text[rowNo-2]){
                if(text[rowNo-2] !== " "){
                    boxes["3-"+rowNo].classList.add("active")
                    setChar(text[rowNo-2], "3-"+rowNo)
                }
            }
        }
    }
}

function setR4(text){
    if(text.length%2 === 0){
        let spacing = (12 - text.length)/2
        for(rowNo=spacing+2;rowNo<(14-spacing);rowNo++){
            if(text[rowNo-(spacing+2)] !== " "){
                boxes["4-"+rowNo].classList.add("active")
                setChar(text[rowNo-(spacing+2)], "4-"+rowNo)
            }
        }
    } else {
        for(rowNo=2;rowNo<13;rowNo++){
            if(text[rowNo-2]){
                if(text[rowNo-2] !== " "){
                    boxes["4-"+rowNo].classList.add("active")
                    setChar(text[rowNo-2], "4-"+rowNo)
                }
            }
        }
    }
}  

function setChar(char, loc){
    char = char.toLowerCase()
    charLoc[char].push(loc)
}

let qn = getQuestion();
setActive(qn.ans);
document.getElementById("catText").innerHTML = qn.clue;