/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(num1, num2){
    return num1+num2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    
    document.querySelector("#sum").value = add(addNumber1,addNumber2);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */



/*
function subtractNumbers(){
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = sub(subNumber1, subNumber2);

}
*/

document.querySelector("#subtractNumbers").addEventListener("click", function(){
    let subNumber1 = Number(document.querySelector("#subtract1").value);
    let subNumber2 = Number(document.querySelector("#subtract2").value);

    const subtract = function(subNumber1, subNumber2){
        return subNumber1 - subNumber2
    };

    document.querySelector("#difference").value = subtract(subNumber1, subNumber2);
});


/* Arrow Function - Multiply Numbers */

document.querySelector("#multiplyNumbers").addEventListener("click", () => {
    let product = 0
    product = () => Number(document.querySelector("#factor1").value) * Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = product();

})



/* Open Function Use - Divide Numbers */
function div(num1, num2){
    return num1/num2;
}

function divideNumbers(){
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    
    document.querySelector("#quotient").value = div(dividend,divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers);



/* Decision Structure */

const currentDate = new Date("September 28, 23 00:10:00")
const currentYear = currentDate.getFullYear();

document.querySelector("#year").value = currentYear;
/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let sourceArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").textContent = sourceArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = sourceArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = sourceArray.filter(number => number %2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = sourceArray.reduce((sum, current) => sum + current);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = sourceArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = (sourceArray.map(number => number * 2)).reduce((sum, current) => sum + current);