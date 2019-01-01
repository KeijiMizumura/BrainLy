


var homepage = document.getElementById("home-page");

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
    "Memory Card",
    "Keyboard",
    "Mouse"
];

for(var i = 0; i < 22; i++){
    images.push("image"+(i+1)+".jpg");
}

