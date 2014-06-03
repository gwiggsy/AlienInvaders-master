var music = new Audio('media/invaders.wav')
var death = new Audio('media/ko.wav')

  var levelData = { 
     1:  [[0,0,0,2,2,2,2,2,0,0,0],
          [0,0,0,1,1,1,1,1,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
      2: [[0,0,2,2,2,2,2,2,2,0,0],
          [0,0,2,2,1,1,1,2,2,0,0],
          [0,0,0,1,2,1,2,1,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,2,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
     3:  [[2,2,2,2,2,2,2,2,2,2,2],
          [0,1,1,2,1,1,1,2,1,1,0],
          [0,0,2,1,2,1,2,1,1,0,0],
          [0,0,0,2,2,1,2,1,0,0,0],
          [0,0,0,0,1,1,1,0,0,0,0],
          [0,0,0,0,0,1,0,0,0,0,0],
          [0,0,0,0,0,2,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0,0,0,0,0]],
       };

  var spriteData = {
    'alien1': { sx: 0,  sy: 90,  w: 43, h: 41, cls: Alien },
    'alien2': { sx: 0,  sy: 134, w: 43, h: 41, cls: Alien },
    'player': { sx: 0,  sy: 0, w: 38, h: 43, cls: Player },
    'missile': { sx: 0,  sy: 77, w: 5,  h: 5, cls: Missile }
  }

  function startGame() {
    var screen = new GameScreen("Alien   Invaders","press   spacebar   to   start",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                     music.play();
                                 });
    Game.loadBoard(screen);
    Game.loop();
    

    
  }

  function endGame() {
    var screen = new GameScreen("Game Over","(press   spacebar   to   restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                     
                                    music.play();
 

                                 });

    Game.loadBoard(screen);
    death.play();
     music.pause();
                                     music.currentTime = 0;
  }


  function winGame() {
    var screen = new GameScreen("You Win!","(press   spacebar   to   restart)",
                                 function() {
                                     Game.loadBoard(new GameBoard(1));
                                 });
    Game.loadBoard(screen);
  }

  $(function() {
    GameAudio.load({ 'fire' : 'media/laser2.wav', 'die' : 'media/explosion.wav' }, 
                   function() { 
                       Game.initialize("#gameboard", levelData, spriteData,
                                      { "start": startGame,
                                        "die"  : endGame,
                                        "win"  : winGame });
                   });
   });




