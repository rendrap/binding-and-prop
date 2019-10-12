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

    // Discard pile
    // Rules
    this.el.appendChild(this.info_div);
    this.el.appendCHild(this.deck_div);



  }

  window.Game = Game;
})(window);