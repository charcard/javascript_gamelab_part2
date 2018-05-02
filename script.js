"use strict";
{ 
    function startGame() {
        const userAnswer = prompt("Would you like to play the game?");
        if (userAnswer === "yes") {
            let userName = prompt ("What's your name?");
            startCombat(userName);
            }else if (userAnswer === "no") {
                console.log ("Bummer. Maybe next time!"); 
            }
        }
    
    function startCombat(name) {
        
        let userHealth = 40;
        let grantHealth = 10;
        let wins = 0; 

        while(grantHealth > 0) {
            let gamePlay = prompt("Do you want to attack or quit?");
            if (gamePlay === "attack") {
                console.log (`${name}'s Health: ${userHealth -= getDamage()}`); //+1 is the starting point and *2 is the stopping point
                console.log (`Grant's Health: ${grantHealth -= getDamage()}`);
                }if (wins >= 3) {
                console.log (`Congrats ${name}!`);
                break;
                }else if (grantHealth <= 0) {
                wins++;
                console.log (`${name} wins: ${wins}`);
                grantHealth = 10;
            
                }else if (userHealth <= 0) {
                    console.log ("Game Over!");
                    break;
            
                }else if (gamePlay === "quit") {
                    console.log ("Bye.");
                break; 
            }
        
        }
        function getDamage () {
            return Math.floor(Math.random() *5+1);
    
        }
    }
    startGame();
}