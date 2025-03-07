class Player {
  constructor(gameScreen, left, top) {
    this.gameScreen = gameScreen;
    this.top = top;
    this.left = left;
    this.directionY = 0;
    this.element = document.createElement('img');
    this.gravity = 0.5
    this.velocity = 0
     
    // Set the image source and position
    this.element.src = './images/jason.png';
    this.element.style.position = 'absolute';
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    // Set the width and height of the player element
    this.element.style.width = '70px'; // Adjust width as needed
    this.element.style.height = '70px'; // Adjust height as needed

    this.gameScreen.appendChild(this.element);
  }

  jump() {
    /* if (this.element.classList != "jump") {
      this.element.classList.add("jump");
      setTimeout(() => {
        this.element.classList.remove("jump");
      }, 400);
    } */
   if(!this.isJumping){
    this.velocity = -10;
    this.isJumping = true;
   }
  
  }
  didCollide(obstacle) {
    //Checks if any part of the player Rectangle is contained inside the obstacle rectangle
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return;
    }
  }

  move(){
    this.velocity += this.gravity
    this.top += this.velocity

    if(this.top >= 150) {
      this.top = 150
      this.velocity = 0
      this.isJumping = false
    }

    this.element.style.top = `${this.top}px`
  }
}
  

//const gameScreen = document.getElementById('game-screen');
/* const player = new Player(gameScreen, 0, 150);

document.addEventListener("keydown", event => {
  if (event.code === "Space") {
    player.jump();
  }
}); */