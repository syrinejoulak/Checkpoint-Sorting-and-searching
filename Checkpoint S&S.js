function rearrange(cards) {
return cards.sort(function(a, b){return a-b});
}

function rearrange(cards) {
for (var i = 1; i < cards.length; i++)
    for (var j = 0; j < i; j++)
        if (cards[i] < cards[j]) {
          var x = cards[i];
          cards[i] = cards[j];
          cards[j] = x;
        }
  return cards
}
