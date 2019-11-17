/**
 * @desc two variables playerhand and dealar hand saves info
 * @param playerHand - player draws a card 
 * @param dealarHand - dealar draws a card 
 */

var playerHand = 0;
var dealarHand = 0;

/**
 * @desc - a function random nummber generator between 1-11 
 * @returns random number 
 */
function getRandomNumber (){
    return Math.floor(Math.random() * 11) + 1;
}

    /**
     * @desc - this is my start page when you start my app
     * @desc - playerhand gets a randonummber from my getRandomNummber function
     * @desc - dealarHand gets 2 random nummber if dealar and playerhand have same value
     * winner function i called or if dealar gets black jack 
     */
        playerHand = getRandomNumber();
        console.log('Player have ' + playerHand);
        dealarHand = getRandomNumber() + getRandomNumber();
        console.log('Dealar have ' + dealarHand );
        console.log('Press D to draw a new card or S to stop')
        winner();
    
   
    
    /**
     * @desc - function drawing a extra card if player wants that
     */
function playerDraw(){
    playerHand =  playerHand + getRandomNumber();
    console.log('Player have  '   +   playerHand + '  Dealar have ' + dealarHand)
}

/**
 * @desc - function - a fucntion how is checking if delar and player is a winner 
 * calculationing my values.
 */
function winner(){
    if(playerHand > 21){
        alert('You lose ' + playerHand + ' Dealar have ' + dealarHand )
    }else if ( playerHand === 21){
        alert('You win!  You have ' + playerHand + ' Dealar have ' + dealarHand)

    }else if(dealarHand > 21){
        alert('You win!' + playerHand + ' Dealar have ' + dealarHand)
    }else if (dealarHand === 21){
        alert('Dealar wins! You have' + playerHand + ' Dealar have' + dealarHand)
    }else if (dealarHand === playerHand){
        alert('TIDE both have same! You have ' + playerHand + ' Dealar have' + dealarHand)
    }
    
}
/**
 * @desc - KeyS is a function who checking who is winner or loser 
 * @param function 
 */
function keyS(){
    if(dealarHand > 21 && playerHand < 22){
        alert('You win!! You have ' + playerHand + ' Dealar have ' + dealarHand)
    }
    else if(playerHand < dealarHand){
        alert('dealar wins! ' + dealarHand + '  you have  ' + playerHand )
    }else if (playerHand > dealarHand){
        alert('You win!! You have ' + playerHand + ' dealar have ' + dealarHand)
    }
}

/**
 * @desc - when pressing S if dealarhand is < 17 dealar draws 1 extra card 
 * @param function 
 */
function stop(){
    console.log('You pressed S stop you have: ' + playerHand + ' Dealar have ' + dealarHand);
    
    if(dealarHand < 17){
        dealarHand = dealarHand + getRandomNumber();
    }
} 

/**
 * @desc - if d key is pressed player gets 1 more card and if player press S the game stops
 * and winner , keyS functions check who is winner 
 */
window.addEventListener("keydown", function(event){

   if(event.code === 'KeyD'){
    playerDraw();
    winner();
   }else if (event.code === 'KeyS'){
    stop();
    keyS();
    winner();
   }
    
  
  });
  
  