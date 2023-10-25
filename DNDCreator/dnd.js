const url = "https://www.dnd5eapi.co/api/classes"
const baseUrl = "https://www.dnd5eapi.co/"
let results = null


async function getDnd(url){
    const response = await fetch(url);
    const featureResponse = await fetch(`${url}/levels/1/features`);

    if (response.ok){
        if (featureResponse.ok){
          const yourChar = await response.json();
          const yourCharFeat = await featureResponse.json();

          createClass(yourChar, yourCharFeat)
        }
        
    }
}

import{createClass} from "./createClass.js"

let mightMag = document.createElement("li")
mightMag.innerHTML += `<p>Might? Magic? Or a little bit of both?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="isIntelligent">Magic</option>
                        <option value="fightOrFlight">Might</option>
                        <option value="isLegVibes">A Bit of Both</option>
                      </select>`                   
                    
const isIntelligent = document.createElement("li")
isIntelligent.innerHTML = `<p>Is your character highly intelligent?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="userClass_wizard">Yes!</option>
                        <option value="likeNature">No!</option>
                      </select>`


const likeNature = document.createElement("li")
likeNature.innerHTML = `<p>Does your character love nature?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="userClass_druid">Yes!</option>
                        <option value="isReligious">No!</option>
                      </select>`

const isReligious = document.createElement("li")
isReligious.innerHTML = `<p>Is your character religious?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="cultOrFaith">Yes!</option>
                        <option value="isMusician">No!</option>
                      </select>`

const cultOrFaith = document.createElement("li")
cultOrFaith.innerHTML = `<p>Religious in a cultish kinda way? Or in a faithful kinda way?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="userClass_paladin">Faithful</option>
                        <option value="userClass_warlock">Cultish</option>
                      </select>`

const isMusician = document.createElement("li")
isMusician.innerHTML = `<p>Is your character a musician?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="userClass_bard">Yes</option>
                        <option value="userClass_sorcerer">No</option>
                      </select>`

const fightOrFlight = document.createElement("li")
fightOrFlight.innerHTML = `<p>Does your character fight in the front lines or are they more sleek and sly?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="sneakyOrRange">Sleek and Sly</option>
                        <option value="versaOrHeavy">Fight Up Front</option>
                      </select>`

const sneakyOrRange = document.createElement("li")
sneakyOrRange.innerHTML = `<p>Is your character Sneaky or ranged?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="userClass_rogue">Sneaky</option>
                        <option value="userClass_ranger">Ranged</option>
                      </select>`

const versaOrHeavy = document.createElement("li")
versaOrHeavy.innerHTML = `<p>Versatile or heavy hitting?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="userClass_fighter">Versatile</option>
                        <option value="relOrAngry">Heavy Hitting</option>
                      </select>`

const isLegVibes = document.createElement("li")
isLegVibes.innerHTML = `<p>Is your character a hunter?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="userClass_ranger">Yes</option>
                        <option value="mightyFaithOrNimFaith">No</option>
                      </select>`

const mightyFaithOrNimFaith = document.createElement("li")
mightyFaithOrNimFaith.innerHTML = `<p>Is your character mighty and heavy or nimble and fierce?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="userClass_paladin">Mighty and Faithful</option>
                        <option value="userClass_monk">Nimble and Fierce</option>
                      </select>`

const relOrAngry = document.createElement("li")
relOrAngry.innerHTML = `<p>Is your power from a god or your anger?</p>
                      <select>
                        <option  value="userClass_paladin">God</option>
                        <option  value="userClass_barbarian">Anger</option>
                        <option  value="userClass_fighter">Neither</option>
                      </select>`


const ul = document.getElementById("Questions");
ul.appendChild(mightMag);

const select = mightMag.querySelector("select");

function addSelectEventListener(element){
  element.addEventListener("change", function(event){
    //get the value of whatever list item has this event
    let value = event.target.value;

    //get rid of the current list item
    let currentLi = event.target.parentNode;
    currentLi.parentNode.removeChild(currentLi);
  
    //create a new list item based off of what is selected
    let newLi = whichLi(value);
    if(newLi){
      ul.appendChild(newLi);
  
      //based off of the new list items selection create a select
      let nextSelect = newLi.querySelector("select");
  
      //add this function to that select.
      addSelectEventListener(nextSelect);
    } else{
      let classString = value.replace("userClass_","")
      let classURL = `${baseUrl}api/classes/${classString}`
      getDnd(classURL)
    }

  })
}


function whichLi(value){
  let nextLi;
  switch(value){
    case "cultOrFaith":
      nextLi = cultOrFaith;
      break;
    case "isIntelligent":
      nextLi = isIntelligent;
      break;
    case "fightOrFlight":
      nextLi = fightOrFlight;
      break;
    case "isLegVibes":
      nextLi = isLegVibes;
      break;
    case "likeNature":
      nextLi = likeNature;
      break;
    case "isReligious":
      nextLi = isReligious;
      break;
    case "isMusician":
      nextLi = isMusician;
      break;
    case "sneakyOrRange":
      nextLi = sneakyOrRange;
      break;
    case "versaOrHeavy":
      nextLi = versaOrHeavy;
      break;
    case "mightyFaithOrNimFaith":
      nextLi = mightyFaithOrNimFaith
      break;
    case "relOrAngry":
      nextLi = relOrAngry
      break;
    case value.includes(`userClass_`):
      nextLi = null
  }
  return nextLi;
}



addSelectEventListener(select)


/* 
function createClass(classObject, classFeatures){
  //initialize my paragraphs for the class display
  let classH3 = document.createElement("h3")
  let classParaProf = document.createElement("p")
  let classParaProfOpt = document.createElement("p")
  let classParaEquip = document.createElement("p")
  let classListEquip = document.createElement("ul")
  let classParaFeatures = document.createElement("p")
  
  let body = document.querySelector("body")

  //Give my new class object a name
  classH3.textContent = classObject.name
  body.appendChild(classH3)

  //display proficiencies
  let prof = classObject.proficiencies
  let profList = [];
  prof.forEach((proficiency) => {
    profList.push(proficiency.name)
    classParaProf.textContent += `${proficiency.name}, `
  })
  classParaProfOpt.textContent = `+ ${classObject.proficiency_choices[0].desc}` 
  body.appendChild(classParaProf)
  body.appendChild(classParaProfOpt)


  
  let features = classFeatures.results;
  let featureList = []
  classParaFeatures.textContent = `Features: `
  features.forEach((feature) => {
    classParaFeatures.textContent += `${feature.name}, `
  })
  body.appendChild(classParaFeatures)


  //handle starting equipment
  let equip = classObject.starting_equipment
  console.log(classObject.starting_equipment)

  classParaEquip.textContent = "Equipment: "
  equip.forEach((equipment) => {
    classParaEquip.textContent += `${equipment.equipment.name}, `
  })
  body.appendChild(classParaEquip)

  //handle equipment options
  let equipOptions = classObject.starting_equipment_options
  equipOptions.forEach((option)=>{
    let descLi = document.createElement("li")
    descLi.textContent = option.desc
    classListEquip.appendChild(descLi)
  })
  body.appendChild(classListEquip)

} */