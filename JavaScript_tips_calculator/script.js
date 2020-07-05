/* 
Write a JavaScript tips calculator.
You have two field where you can enter

-#- a bill amount - in to the first,
-#- tips amount in percent - into the second.
Calculate and show the tips below those two fields.
1. After you press button "Calculate".
2. More complex option: calculate tips with no "Calculate" button, just after you change value in any of the fields.

*/

function tipCalculator() {
    let tipAmount = document.getElementById('tipAmount').value;
    let billAmount = document.getElementById('billAmount').value;
    
    document.getElementById('res').innerHTML = tipAmount * billAmount / 100;
         
    }
   

    

