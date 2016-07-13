var count = 0;
var byId = function(id) { return document.getElementById(id) };
function setBet(x,y) { bet = x; rgb = y; }

function evaluateBet() {
    if (count > 0) {
        setBet("Bet", "rgb(135, 195, 135)");
    } else if (count < 0) {
        setBet("Hold", "rgb(224, 93, 93)");
    } else {
        setBet("No guidance", "rgb(195, 194, 135)");
    }
    byId("decision").textContent = bet;
    byId("decision").style.backgroundColor = rgb;
    byId("currentCount").textContent = count;
}

function checkButton(id) { id === "plus" ? count += 1 : count -= 1; evaluateBet(); }
