class Obstacle {
    constructor(gameScreen, top, left) {
      this.gameScreen = gameScreen;
      this.element = document.createElement("div")
      this.top = top
      this.left = left

      this.image = "./images/diddyoil.png"

      this.element.style.width = "35px"
      this.element.style.height = "52px"
      this.element.style.position = "absolute"
      this.element.style.top = this.top + "px"
      this.element.style.left = this.left + "px"
      this.element.style.backgroundImage = `url(${this.image})`
      this.element.style.backgroundPosition = "center"
      this.element.style.backgroundSize = "cover"

      this.gameScreen.appendChild(this.element)
    }
  
    spawnOilBottle() {
      const oilBottle = document.createElement('div');
      oilBottle.classList.add('oil-bottle');
      oilBottle.style.left = '100%';  // Initial position off the screen
      oilBottle.style.top = `${Math.floor(Math.random() * (this.maxRandomY - this.minRandomY)) + this.minRandomY}px`;
      this.gameScreen.appendChild(oilBottle);
    }
  
    spawnPairedOilBottles() {
      this.spawnOilBottle();
      this.spawnOilBottle();
    }
  
    move() {
        console.log("I'm moving");
        this.left -= 6;  // Initial speed
        this.element.style.left = this.left + "px";
      
        // Schedule a speed change after 10 seconds
        setTimeout(() => {
            
          ;  // New speed after 10 seconds
        }, 10000);  // 10000 milliseconds (10 seconds)
      }
  }

  //