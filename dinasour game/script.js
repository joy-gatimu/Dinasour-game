var character = document.getElementById("character");
var block = document.getElementById("block");

function jump() {
    if (!character.classList.contains("animate")) { // Corrected condition
        character.classList.add("animate");
    }

    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function() {
    var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (blockLeft < 40 && blockLeft > 20 && characterBottom === 0) { // Adjusted collision detection
        alert("You lose");
        clearInterval(checkDead); // Stop the game loop
    }
}, 10);
