var cardCount = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      cardCount += 1;
      break;
    case 7:
    case 8:
    case 9:
      cardCount += 0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      cardCount -= 1;
  }
  return cardCount + (cardCount > 0 ? " Bet" : " Hold");
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
