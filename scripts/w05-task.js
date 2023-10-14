/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];
let joe = "";
/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach((temple) => {
        article = document.createElement("article")
        h3 = document.createElement("h3")
        h3.innerText = temple.templeName;

        img = document.createElement("img")
        img.src = temple.imageUrl
        img.alt = temple.location
        article.appendChild(h3)
        article.appendChild(img)
        templesElement.appendChild(article)
    });
}


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    if (response.ok){
        templeList = await response.json();
        console.log(templeList);
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* sortBy Function */

const sortBy = function(temples){
    reset();
    let element = document.querySelector("#sortBy")
    const filter = element.value; 
    let filteredTemples = []
    switch(filter){
        case "notutah":
            temples.forEach((temple) => {
                if (!(temple.location.includes("Utah"))){
                    filteredTemples.push(temple);
                }
            })
            displayTemples(filteredTemples)
            break;

        case "utah":
            temples.forEach((temple) => {
                if (temple.location.includes("Utah")){
                    filteredTemples.push(temple);
                }
            })
            displayTemples(filteredTemples)
            break;

        case "older":
            temples.forEach((temple) => {
                let date = new Date(1950, 0, 1)
                let tempDate = new Date(temple.dedicated)
                if (tempDate < date){
                    filteredTemples.push(temple);
                }
            })
            displayTemples(filteredTemples)
            break;

        case "all":
            displayTemples(temples)
            break;
    }

    console.log(filteredTemples);
}

document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templeList)
});

/* Event Listener */


getTemples();