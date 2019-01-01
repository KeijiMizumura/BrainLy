


var homepage = document.getElementById("home-page");

function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
    setVisible('.container', true);
    setVisible('#loader-div', false);
  });

// Onload function
window.onload = function(){
    clearFragment();
    onCreate();
    showQuestion();
}

function onCreate(){
    homepage.style.display = "block";
}

var fragments = document.getElementsByClassName('fragment');

function clearFragment(){
    for(var i = 0; i < fragments.length; i++){
        fragments[i].style.display = "none";
    }
}

function reloadGame(){
    location.reload();
}

// Start Game

var currentFragmentIndex = 0;

function nextFragment(){
    currentFragmentIndex++;
    if(currentFragmentIndex >= fragments.length){
        // NO MORE FRAGMENTS
        // TO AVOID ERRORS
    }
    else{
       fragments[currentFragmentIndex].style.display = "block";
        fragments[currentFragmentIndex - 1].style.display = "none"; 
    }
    
}

var questions = [
    "A monitor displays information...",
    "An SD card is an output device...",
    "A microphone is used an input device...",
    "A pen drive is a storage device...",
    "Microsoft office is a piece of software...",
    "A firewall is a type of hardware...",
    "The CPU is refereed as the stomach of the computer...",
    "A computer is a piece of hardware...",
    "A terabyte is equal to 1 million gigabytes...",
    "CD stands for collective disk...",
    "Bluetooth allows your device to connect with another device...",
    "A processor accepts your commands for the computer...",
    "Software that is free for trial is called shareware...",
    "A scanner is an output device...",
    "The quickest way to add, find the maximum and minimum is to highlight the row or column and press the auto sum button..."
];

var boolAnswers = [
    "True",
    "True",
    "True",
    "True",
    "True",
    "False",
    "False",
    "True",
    "False",
    "False",
    "True",
    "False",
    "True",
    "False",
    "False"
];


var questionContent = document.getElementById("question-content");
var questionTitle = document.getElementById("question-title");
var currentQuestion = 0;

var correctAnswers = 0;

function checkAns(ans){
    switch(ans){
        case "True":
            console.log("Tapped true");
            if(boolAnswers[currentQuestion] == "True"){
                correctAnswers++;
            }
            currentQuestion++;
        break;
        case "False":
            console.log("Tapped false");
            if(boolAnswers[currentQuestion] == "False"){
                correctAnswers++;
            }
            currentQuestion++;
        break;
        default:
        break;
    }
    if(currentQuestion > questions.length - 1){
        // do something after the true or false game
        nextFragment();
        var boolScore = document.getElementById("boolScore");
        var boolPerc = document.getElementById("bool-perc");
        boolScore.innerText = correctAnswers + "/" + questions.length;
        boolPerc.innerText = Math.round((correctAnswers/questions.length) * 100) + "%";
    }
    else{
       showQuestion(); 
    }
}

function showQuestion(){
    questionContent.innerHTML = questions[currentQuestion];
    questionTitle.innerHTML = "Question " + (currentQuestion + 1);
}

var images = [];
var imageAnswers = [
    "Hard Disk Drive",
    "Optical Disk Drive",
    "Coils",
    "Monitor",
    "Audio Card",
    "Lan Port",
    "Graphics Card",
    "Sata Wire",
    "Sata Power Connector",
    "24-pins ATX Power Connector",
    "4-pin Power Connector",
    "Fan",
    "System Unit",
    "PCI-e Slots",
    "Drive Bays",
    "CMOS Battery",
    "Processor",
    "Heatsink with fan",
    "Mother Board",
    "RAM",
    "Keyboard",
    "Mouse"
];

var imageLetters = [
    "b",
    "c",
    "a",
    "d",
    "d",
    "a",
    "c",
    "a",
    "b",
    "c",
    "a",
    "d",
    "d",
    "b",
    "a",
    "a",
    "b",
    "d",
    "d",
    "a",
    "b",
    "d"
];

for(var i = 0; i < 22; i++){
    images.push("image"+(i+1)+".jpg");
}

var identificationImage = document.getElementById("identification-image");
var currentImageIndex = 0; 

// Choices
var buttonA = document.getElementById("button-a");
var buttonB = document.getElementById("button-b");
var buttonC = document.getElementById("button-c");
var buttonD = document.getElementById("button-d");

var identificationScore = 0;

var identificationTitle = document.getElementById("identification-title");

function choose(letter){

    if(imageLetters[currentImageIndex] == letter){
        identificationScore++;
        console.log("Correct!");
    }
    // Increment the current Image index
    currentImageIndex++;
    if(currentImageIndex >= images.length){
        // Out of images
        nextFragment();
        var idenScore = document.getElementById("idenScore");
        var idenPerc = document.getElementById("iden-perc");
        idenScore.innerText = identificationScore + "/" + images.length;
        idenPerc.innerText = Math.round((identificationScore/images.length) * 100) + "%";
    }
    else{
        identificationImage.setAttribute("src", images[currentImageIndex]);
        identificationTitle.innerText = "Question #" + (currentImageIndex + 1);
        switch(currentImageIndex){
            case 1:
                buttonA.innerText = "Sata Power Connector";
                buttonB.innerText = "System Unit";
                buttonC.innerText = "Optical Disk Drive";
                buttonD.innerText = "Mouse";
            break;
            case 2:
                buttonA.innerText = "Coils";
                buttonB.innerText = "CMOS Battery";
                buttonC.innerText = "Fan";
                buttonD.innerText = "Hard Disk Drive";
            break;
            case 3:
                buttonA.innerText = "Heatsink with fan";
                buttonB.innerText = "24-pins ATX Power Connector";
                buttonC.innerText = "PCI-e Slots";
                buttonD.innerText = "Monitor";
            break;
            case 4:
                buttonA.innerText = "Optical Disk Drive";
                buttonB.innerText = "Graphics Card";
                buttonC.innerText = "CMOS Battery";
                buttonD.innerText = "Audio Card";
            break;
            case 5:
                buttonA.innerText = "Lan Port";
                buttonB.innerText = "Audio Card";
                buttonC.innerText = "Drive Bays";
                buttonD.innerText = "Hard Disk Drive";
            break;
            case 6:
                buttonA.innerText = "Audio Card";
                buttonB.innerText = "Monitor";
                buttonC.innerText = "Graphics Card";
                buttonD.innerText = "24-pins ATX Power Connector";
            break;
            case 7:
                buttonA.innerText = "Sata Wire";
                buttonB.innerText = "Sata Power Connector";
                buttonC.innerText = "Coils";
                buttonD.innerText = "CMOS Battery";
            break;
            case 8:
                buttonA.innerText = "Sata Wire";
                buttonB.innerText = "Sata Power Connector";
                buttonC.innerText = "Audio Card";
                buttonD.innerText = "Graphics Card";
            break;
            case 9:
                buttonA.innerText = "Lan Port";
                buttonB.innerText = "Graphics Card";
                buttonC.innerText = "24-pins ATX Power Connector";
                buttonD.innerText = "Coils";
            break;
            case 10:
                buttonA.innerText = "4-pin Power Connector";
                buttonB.innerText = "24-pins ATX Power Connector";
                buttonC.innerText = "PCI-e Slots";
                buttonD.innerText = "Keyboard";
            break;
            case 11:
                buttonA.innerText = "Coils";
                buttonB.innerText = "Mouse";
                buttonC.innerText = "Motherboard";
                buttonD.innerText = "Fan";
            break;
            case 12:
                buttonA.innerText = "Motherboard";
                buttonB.innerText = "Processor";
                buttonC.innerText = "RAM";
                buttonD.innerText = "System Unit";
            break;
            case 13:
                buttonA.innerText = "24-pins ATX Power Connector";
                buttonB.innerText = "PCI-e Slots";
                buttonC.innerText = "Audio Card";
                buttonD.innerText = "CMOS Battery";
            break;
            case 14:
                buttonA.innerText = "Drive Bays";
                buttonB.innerText = "Hard Disk Drive";
                buttonC.innerText = "Fan";
                buttonD.innerText = "System Unit";
            break;
            case 15:
                buttonA.innerText = "CMOS Battery";
                buttonB.innerText = "System Unit";
                buttonC.innerText = "Coils";
                buttonD.innerText = "Fan";
            break;
            case 16:
                buttonA.innerText = "Motherboard";
                buttonB.innerText = "Processor";
                buttonC.innerText = "Hard Disk Drive";
                buttonD.innerText = "PCI-e Slots";
            break;
            case 17:
                buttonA.innerText = "Coils";
                buttonB.innerText = "Processor";
                buttonC.innerText = "Monitor";
                buttonD.innerText = "Heatsink with fan";
            break;
            case 18:
                buttonA.innerText = "Processor";
                buttonB.innerText = "Audio Card";
                buttonC.innerText = "Graphics Card";
                buttonD.innerText = "Motherboard";
            break;
            case 19:
                buttonA.innerText = "RAM";
                buttonB.innerText = "Fan";
                buttonC.innerText = "PCI-e Slots";
                buttonD.innerText = "24-pins ATX Power Connector";
            break;
            case 20:
                buttonA.innerText = "Mouse";
                buttonB.innerText = "Keyboard";
                buttonC.innerText = "Graphics Card";
                buttonD.innerText = "Motherboard";
            break;
            case 21:
                buttonA.innerText = "Audio Card";
                buttonB.innerText = "Coils";
                buttonC.innerText = "Keyboard";
                buttonD.innerText = "Mouse";
            break;
        }
        
    }
    
}
