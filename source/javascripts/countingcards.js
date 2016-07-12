var count = 0;

function betOrHold () {
  if (count > 0) {
    document.getElementById('decision').textContent= "Bet";
    document.getElementById('decision').style.backgroundColor = "rgb(135, 195, 135)";
  } else if (count < 0) {
    document.getElementById('decision').textContent= "Hold";
    document.getElementById('decision').style.backgroundColor = "rgb(224, 93, 93)";
  } else {
    document.getElementById('decision').textContent= "No guidance";
    document.getElementById('decision').style.backgroundColor = "rgb(195, 194, 135)";
  }
}

function posButton() {
  count++;
  document.getElementById('currentCount').textContent= count;
  betOrHold();
}

function negButton() {
  count--;
  document.getElementById('currentCount').textContent= count;
  betOrHold();
}
