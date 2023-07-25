function updateDateTime() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    var formattedDate = date.toLocaleDateString('en-US', options);
    document.getElementById('date-time').textContent = formattedDate;
}
setInterval(updateDateTime, 1000); // Update every second

var spinsLeft = 50;
var score = 0;

function spin() {
    if (spinsLeft > 0) {
        var emojiBoxes = document.getElementsByClassName("emoji-box");
        var emojis = ["💩", "💫", "🌟", "🛸", "👾"];
        for (var i = 0; i < emojiBoxes.length; i++) {
            var randomIndex = Math.floor(Math.random() * emojis.length);
            var emoji = emojis[randomIndex];
            emojiBoxes[i].textContent = emoji;
            if (i === 0) {
                score += getValue(emoji);
            }
        }
        spinsLeft--;
        document.getElementById("spin-ticker").textContent = "Spins left: " + spinsLeft;
        document.getElementById("score").textContent = "Score: " + score;
    }
}

function getValue(emoji) {
    switch (emoji) {
        case "💩":
            return -500;
        case "💫":
            return 20;
        case "🌟":
            return 30;
        case "🛸":
            return 100;
        case "👾":
            return 500;
        default:
            return 0;
    }
}

function takeScreenshot() {
    html2canvas(document.body).then(function(canvas) {
        var link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'screenshot.png';
        link.click();
    });
}

document.querySelector('.spin-button').addEventListener('click', spin);
document.querySelector('.screenshot-button').addEventListener('click', takeScreenshot);
