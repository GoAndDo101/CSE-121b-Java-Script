/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Owen Chamberlain"
const currentYear = 2023;
const profilePicture = "images/my-pfp.jpeg";


/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);


/* Step 5 - Array */

const myFoods = ["Pancakes", "Cinnamon Rolls", "Steaks", "French Toast"]
foodElement.textContent = myFoods; 

const favFood = "HotDogs"
myFoods.push(favFood);
foodElement.innerHTML += `<br>${myFoods}`;

myFoods.shift();
foodElement.innerHTML += `<br>${myFoods}`;

myFoods.pop();
foodElement.innerHTML += `<br>${myFoods}`;