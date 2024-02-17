function redirectYes() {
    document.getElementById("successBox").style.display = "block";
    document.getElementById("errorBox").style.display = "none"; 


    startConfetti();

    setTimeout(function () {
        window.location.href = "principal.html";
    }, 3000);
    setTimeout(function () {
        document.getElementById("successBox").style.display = "none";
    }, 3000);
}

function showAlert() {
    document.getElementById("errorBox").style.display = "block";
    document.getElementById("successBox").style.display = "none";
    setTimeout(function () {
        document.getElementById("errorBox").style.display = "none";
    }, 3000);
}


function startConfetti() {
    var confettiSettings = {
        target: 'confetti-canvas',
        clock: 25
    };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    setTimeout(function () {
        confetti.clear();
    }, 5000); 
}