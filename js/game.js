class Game {
    constructor(){
        this.startScreen=document.getElementById('game-intro')
        this.gameScreen=document.getElementById('game-screen')
        this.gameEndScreen=document.getElementById('game-end')
        this.gameLossScreen=document.getElementById('loss')
        this.obstacles = [];
        
        this.height=400;
        this.width=600;
        // this.player= new Player(this.gameScreen,/*dont forget to add  the dodge */);


        this.score = 0;
        this.scoreHTML = document.getElementById('score');
        this.lives = 3;
        this.livesHTML = document.getElementById('lives');
        this.player=new Player(this.gameScreen, 0, 150);
        this.music = new Audio();
        this.music.src='audio/music.mp3'
        this.music.volume=0.4;
    
        this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = 1000 / 60;
    }
    startGame() {
        // hiding startScreen and showing gameScreen
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = 'none';
        this.music.play();
      
        this.gameScreen.style.display='block'
        const containerElement=document.getElementById('game-container');
        if (containerElement) {
          containerElement.style.display = 'block';
      
        // Select the elements by their IDs
/*const gameElement = document.getElementById('game-intro');
const instructionsElement = document.getElementById('instructions');
const containerElement=document.getElementById('game-container');
// Set the display style to "none" for each element
if (gameElement) {
  gameElement.style.display = 'none';
}

if (instructionsElement) {
  instructionsElement.style.display = 'none';
}
if (containerElement) {
  containerElement.style.display = 'none';
}*/ console.log(this.player);
    this.gameIntervalId=setInterval(()=>{
      this.gameLoop();

    },this.gameLoopFrequency)
      }
      }
      gameLoop(){
        this.update();
        if(this.gameIsOver){
          clearInterval(this.gameIntervalId)
        }
      }
      update(){
        this.player.move()
        const random =Math.random()
        if(random > 0.70 && this.obstacles.length <1){

            this.obstacles.push(new Obstacle(this.gameScreen, 160, 570))
        }

        for(let i=0; i<this.obstacles.length;i++){
          const obstacle=this.obstacles[i];
          
          obstacle.move();
          if(this.player.didCollide(obstacle)){
            obstacle.element.remove();
            this.lives--;
            this.livesHTML.innerText=this.lives;
            this.obstacles.splice(i,1)
            i--;


          }else if(obstacle.left<0){
            obstacle.element.remove();
            this.score++;
            this.scoreHTML.innerText=this.score;
            this.obstacles.splice(i,1)
            i--;

          }
        }
        if(this.lives===0){
          this.endGame();
        }
      }

      
    
  
    endGame() {
      //remove player and obstacle elements from DOM
      this.player.element.remove();
      this.obstacles.forEach((obs) => obs.element.remove());
      //set flag to true, so the loop stops
      this.gameIsOver = true;
      // Hide game screen
      this.gameScreen.style.display = 'none';
      this.music.pause();
    this.music.currentTime = 0;
      // Show end game screen
      this.gameEndScreen.style.display = 'block';
      this.gameLossScreen.style.display='block';

    }
      

}

