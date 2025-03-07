window.onload=function(){
    const startButton=document.getElementById('start-button');
    const restartButton=document.getElementById('restart-button');
    const gameScreen=document.getElementById('game-screen')

    let game;
    let obsIterval;
    let obstacles = []
    startButton.addEventListener('click', function (){
        startGame();

        
    
    });
    restartButton.addEventListener('click', function(){
        location.reload();

    });
    function startGame(){
        console.log("start game")
        game= new Game();
        game.startGame();
        


    }
    
    window.addEventListener('keydown', (elsevent)=>{
        const possibleKeys=['space', 'shiftkey'];
        if(possibleKeys.includes(elsevent.key)){
            elsevent.preventDefault();
            //now you have to add the shift thingy that makes him dodge by rotating the character
        }
    })

    window.addEventListener("keydown", (event)=>{
       
        if(event.key === " "){
           
            event.preventDefault()
            game.player.jump()
        }
                })
    
}


