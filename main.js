;(function(window) {
  // Game
  var Game = function(el, option) {
    this.el = document.getElementById(el);
    this.option = option;

    // Info section
    this.info_div = document.createElement('div');
    this.info_div.id = "info_div";

    // Deck
    this.deck_div = document.createElement('div');
    this.deck_div.id = "deck_div";
    this.gameDeck = new Deck(this.deck_div, option);

    // Discard pile
    // Rules
    this.el.appendChild(this.info_div);
    this.el.appendCHild(this.deck_div);

  }

  // Deck
  var Deck = function(deck_div, option){
    this.deckData = option.data;
    this.buildDeck = function(){
      var parentFrag = document.createDocumentFragment();
      deck_div.innerHTML = "";
      for (var i = this.deckData.length -1; i>0; i--){
        var card = new Card();
        card.id = "card-" + i;
        card.data = this.deckData[i];
      }
    }

  }

  // Card
  var Card = function() {

  }


  window.Game = Game;
})(window);