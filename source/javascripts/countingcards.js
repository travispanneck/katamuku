var count = 0;

function betOrHold () {
  if (count > 0) {
    document.getElementById('decision').textContent= "Bet";
  } else if (count < 0) {
    document.getElementById('decision').textContent= "Hold";
  } else {
    document.getElementById('decision').textContent= "No guidance";
  }
}


function posButton() {
  count++;
  document.getElementById('currentCount').textContent= count;
  return function () {
    betOrHold();
  }
}

function negButton() {
  count--;
  document.getElementById('currentCount').textContent= count;
  return function () {
    betOrHold();
  }
}
