// Description:

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

function defineSuit(card) {
  if (card[card.length - 1] == "♣") {
    return "clubs";
  } else if (card[card.length - 1] == "♦") {
    return "diamonds";
  } else if (card[card.length - 1] == "♥") {
    return "hearts";
  } else return "spades";
}
