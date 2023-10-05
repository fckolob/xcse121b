/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
};

function addNumbers(){
    let addNumber1 = document.querySelector("#add1").value;
    let addNumber2 = document.querySelector("#add2");
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
};
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */
const substract = function (numbersub1, numbersub2){
    return numbersub1 - numbersub2;
};
const subtractNumbers = function(){
    let substractNumber1 = document.querySelector("#subtract1").value;
    let subtractNumber2 = document.querySelector("#subtract2").value;
    document.querySelector("#difference").value = substract(substractNumber1, subtractNumber2);

};
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
