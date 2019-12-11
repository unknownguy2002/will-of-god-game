let theWheel = new Winwheel({
    'outerRadius'     : 300,        // Set outer radius so wheel fits inside the background.
    'innerRadius'     : 75,         // Make wheel hollow so segments dont go all way to center.
    'textFontFamily'  : "Courier Impact",
    'textFontSize'    : 24,         // Set default font size for the segments.
    'textOrientation' : 'vertical', // Make text vertial so goes down from the outside of wheel.
    'textAlignment'   : 'outer',    // Align text to outside of wheel.
    'numSegments'     : 24,         // Specify number of segments.
    'segments'        :             // Define segments including colour and text.
    [                               // font size and text colour overridden on backrupt segments.
       {'fillStyle' : '#ee1c24', 'text' : '$300'},
       {'fillStyle' : '#3cb878', 'text' : '$450'},
       {'fillStyle' : '#f6989d', 'text' : '$600'},
       {'fillStyle' : '#00aef0', 'text' : '$750'},
       {'fillStyle' : '#f26522', 'text' : '$500'},
       {'fillStyle' : '#000000', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
       {'fillStyle' : '#e70697', 'text' : '$3000'},
       {'fillStyle' : '#fff200', 'text' : '$600'},
       {'fillStyle' : '#f6989d', 'text' : '$700'},
       {'fillStyle' : '#ee1c24', 'text' : '$350'},
       {'fillStyle' : '#3cb878', 'text' : '$500'},
       {'fillStyle' : '#f26522', 'text' : '$800'},
       {'fillStyle' : '#a186be', 'text' : '$300'},
       {'fillStyle' : '#fff200', 'text' : '$400'},
       {'fillStyle' : '#00aef0', 'text' : '$650'},
       {'fillStyle' : '#ee1c24', 'text' : '$1000'},
       {'fillStyle' : '#f6989d', 'text' : '$500'},
       {'fillStyle' : '#f26522', 'text' : '$400'},
       {'fillStyle' : '#3cb878', 'text' : '$900'},
       {'fillStyle' : '#000000', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
       {'fillStyle' : '#a186be', 'text' : '$600'},
       {'fillStyle' : '#fff200', 'text' : '$700'},
       {'fillStyle' : '#00aef0', 'text' : '$800'},
       {'fillStyle' : '#ffffff', 'text' : 'LOSE A TURN', 'textFontSize' : 16}
    ],
    'animation' :           // Specify the animation to use.
    {
        'type'     : 'spinToStop',
        'duration' : 5,
        'spins'    : 5,
        'easing'       : 'Power4.easeOut',
        'stopAngle'    : null,
        'direction'    : 'clockwise',
        'repeat'       : 0,
        'yoyo'         : false,
        'callbackFinished' : alertPrize,  // Function to call whent the spinning has stopped.
        'callbackSound'    : playSound,   // Called when the tick sound is to be played.
    },
    'pins' :                // Turn pins on.
    {
        'number'     : 24,
        'fillStyle'  : 'silver',
        'outerRadius': 4,
    }
});

let audio = new Audio('http://dougtesting.net//elements/sound/tick.mp3');
 
// This function is called when the sound is to be played.
function playSound()
{
    // Stop and rewind the sound if it already happens to be playing.
    audio.pause();
    audio.currentTime = 0;

    // Play the sound.
    audio.play();
}

// Called when the animation has finished.
function alertPrize(indicatedSegment)
{   
    document.getElementById("wheelText").innerHTML = indicatedSegment.text;
    console.log(indicatedSegment.text)
    // Display different message if win/lose/backrupt.
    if (indicatedSegment.text == 'LOSE A TURN') {
        new Audio("/public/audio/bankrupt.mp3").play()
    } else if (indicatedSegment.text == 'BANKRUPT') {
        new Audio("/public/audio/bankrupt.mp3").play()
    } else {

    }
}
