class Game {
    constructor(){
        this.startScreen=document.getElementById('game-intro')
        this.gameScreen=document.getElementById('game-screen')
        this.gameEndScreen=document.getElementById('game-end')



        this.score = 0;
        this.scoreHTML = document.getElementById('score');
        this.lives = 3;
        this.livesHTML = document.getElementById('lives');
    }
    start() {
        // hiding startScreen and showing gameScreen
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
      }
}