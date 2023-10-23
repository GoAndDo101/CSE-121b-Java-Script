const url = "https://www.dnd5eapi.co/api/classes"
let results = null
async function getDnd(url){
    const response = await fetch(url);

    if (response.ok){
        const data = await response.json();
    }
}

getDnd(url);

let charClass = "";
let ul = document.querySelector("#Questions")

let mightMag = document.createElement("li")
mightMag.innerHTML += `<p>Might? Magic? Or a little bit of both?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="isIntelligent">Magiv</option>
                        <option value="fightOrFlight">Might</option>
                        <option value="isLegVibes">A Bit of Both</option>
                      </select>`
                    
const isIntelligent = document.createElement("li")
isIntelligent.innerHTML = `<p>Is your character highly intelligent?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="useMachines">Yes!</option>
                        <option value="likeNature">No!</option>
                      </select>`

const useMachines = document.createElement("li")
useMachines.innerHTML = `<p>Does your character use machinery?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="wizard">No!</option>
                        <option value="artificer">Yes!</option>
                      </select>`

const likeNature = document.createElement("li")
likeNature.innerHTML = `<p>Does your character love nature?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="druid">Yes!</option>
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
                        <option value="cleric">Faithful</option>
                        <option value="warlock">Cultish</option>
                      </select>`

const isMusician = document.createElement("li")
isMusician.innerHTML = `<p>Is your character a musician?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="bard">Yes</option>
                        <option value="sorceror">No</option>
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
                        <option value="rogue">Sneaky</option>
                        <option value="ranger">Ranged</option>
                      </select>`
                      
const versaOrHeavy = document.createElement("li")
versaOrHeavy.innerHTML = `<p>Versatile or heavy hitting?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="fighter">Versatile</option>
                        <option value="relOrAngry">Heavy Hitting</option>
                      </select>`

const isLegVibes = document.createElement("li")
isLegVibes.innerHTML = `<p>Is your character a hunter?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="ranger">Yes</option>
                        <option value="mightyFaithOrNim">No</option>
                      </select>`

const mightyFaithOrNimFaith = document.createElement("li")
mightyFaithOrNimFaith.innerHTML = `<p>Is your character mighty and heavy or nimble and fierce?</p>
                      <select>
                        <option value="" disabled selected>Choose an Option</option>
                        <option value="paladin">Mighty and Faithful</option>
                        <option value="monk">Nimble and Fierce</option>
                      </select>`
                      
const relOrAngry = document.createElement("li")
relOrAngry.innerHTML = `<p>Is your power from a god or your anger?</p>
                      <select>
                        <option value="paladin">God</option>
                        <option value="barbarian">Anger</option>
                        <option value="fighter">None</option>
                      </select>`


const newLi = document.createElememt("li")
newLi.innerHTML = `<p>balls</p>`
ul.appendChild(newLi);