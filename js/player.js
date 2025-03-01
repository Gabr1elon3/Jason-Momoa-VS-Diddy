class Player{
    constructor(gameScreen, jump, dodge){
        this.gameScreen=gameScreen;
        this.jump=jump;
        this.dodge=dodge;
        this.directionX=0;
        this.directionY=0;
        this.element=document.createElement('img')
        const Jason = this.element.src = './images/jason.jpg';
        this.element.style.jump= `${this.jump}px`
        this.element.style.dodge=`${this.dodge}px`
        this.gameScreen.appendChild(this.element);
    }
    
}
function boeing() {
    if(dino.classList !="boeing"){
        Jason.classList.add("boeing");

        setTimeout(function() {
            Jason.classList.remove("boeing");
          }, 300);

    }
  }
  document.addEventListener("space", function(event){
    boeing();
  })
