$(function() {
  
  var game = new Game
  
  var options_view = new OptionsView({model: game})
  
  var characters_view = new CharactersView({model: game})
  
  var word_view = new WordView({model: game})
  
})