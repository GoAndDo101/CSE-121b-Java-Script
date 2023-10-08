/* LESSON 3 - Programming Tasks */

/* Profile Object  */

const myProfile = {
    name: "Owen Chamberlain",
    photo: "images/my-pfp.jpeg",
    favoriteFoods: ["French Toast", "Pancakes", "Waffles"],
    hobbies: ["Music", "Video Games", "Light Design", "Coding", "Board Games!"],
    placesLived: []

};


/* Populate Profile Object with placesLived objects */

class Place {
    constructor(place, length) {
        this.place = place;
        this.length = length;
    }
};

const place1 = new Place("Burbank, California", "12 years");
const place2 = new Place("Rexburg, Idaho", "1 year");
const place3 = new Place("Eugene, Oregon", "2 years");
myProfile.placesLived.push(place1);
myProfile.placesLived.push(place2);
myProfile.placesLived.push(place3);

/* DOM Manipulation - Output */


/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);

})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);

})

