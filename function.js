et $buttons = document.querySelectorAll("button");
let ui = document.querySelector(".userEntry");
let finalCalc = document.querySelector(".finalCalc");
let opPressed = false;

var operator = [];

[...$buttons].map(x => {
    x.addEventListener("click", function (e) {

        switch (this.innerHTML) {
case "=":
                makeCalculation();
                break;    
		}
	}
}
function makeCalculation() {

    if (valTwo.length > 0 && operator.length!==0) {
        //finalAnswer = valTwo.concat(operator, valOne).join("");
        finalAnswer = eval(valTwo + operator + valOne.join(""));
        finalCalc.textContent = "";
        finalCalc.textContent = eval(finalAnswer).toFixed(2);
        ui.textContent = "";
        valTwo = eval(finalAnswer);
        valOne = [];
        //operator = [];

    } else if (operator.length == 0) {

        alert("invalid calculation there is no operator");
        
    }

    else {
        //finalAnswer = valTwo.concat(operator, valOne).join
        finalAnswer = finalAnswer = eval(valTwo + operator + valOne.join(""));

        console.log("final answer");
        console.log(finalAnswer);
        finalCalc.textContent = "";
        ui.textContent = "";
        finalCalc.textContent = eval(finalAnswer).toFixed(2);
        //operator = [];
        valTwo = eval(finalAnswer);
        valOne = [];



    }


 

    
}

function storeValue() {




        if (valOne.length == 0 && valTwo.length==0) {
            return false;
        } else if (valTwo.length > 0) {
            finalCalc.textContent = valTwo + " " + operator;
          

            
        }else if(valTwo.length==0) {
            valTwo.push(valOne.join(""));
            valOne = [];
            ui.textContent = "";
            finalCalc.textContent = "";
            finalCalc.textContent = valTwo + " " + operator

            
    }
        finalCalc.textContent = valTwo + " " + operator;

       
        
}