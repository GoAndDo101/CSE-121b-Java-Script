export function createClass(classObject, classFeatures){
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
  
  }