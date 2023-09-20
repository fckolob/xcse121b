/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Fernando Caballero ";
let currentYear = "2023";
let profilePicture = "images/Fernando_Caballero.jpg";



/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src",`${profilePicture}`);
imageElement.setAttribute("alt", `Profile picture of ${fullName}.`);



/* Step 5 - Array */
const favFoods = new Array ("Pasta", "Chocolate", "Icecream", "Barbecue");
const favfood = "Cookies";
favFoods.push(favfood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;
console.log(favFoods)




