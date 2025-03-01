window.onload=function(){
    const startButton=document.getElementById('start-button');
    const restartButton=document.getElementById('restart-button');
    let game;
    startButton.addEventListener('click', function (){
        startGame();
    
    });
    restartButton.addEventListener('click', function(){
        location.reload();

    });
    function startGame(){
        console.log("start game")
        game= new Game();
        game.start();

    }
    
    window.addEventListener('keydown', (elsevent)=>{
        const possibleKeys=['space', 'shiftkey'];
        if(possibleKeys.includes(elsevent.key)){
            elsevent.preventDefault();
            //now you have to add the shift thingy that makes him dodge by rotating the character
        }
    })
    
}


