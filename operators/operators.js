// operators.js
//isDestroyed
//isHit
//reloadShip


let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

function fireShip() {
  if (shipCanFire()) {
    shipAmmo--;
    if (isHit()) {
      targetHealth--;
      console.log("hit - targetHealth:", targetHealth);
    } else {
      console.log("miss");
    }
  } else {
    reloadShip();
    console.log("reloading, shipHealth:", shipHealth);
  }
}

function isHit(){
    let hit = false;
    let shipAC = 0.5;
    let toHit = Math.random();
    if (shipAC >= toHit){
        hit = true;
    } else{
        hit = false;
    }
    return hit;
}

function shipCanFire(){
    let able = false
    if (shipHealth > 0 && shipAmmo > 0){
        able = true;
    } else {
        able = false;
    }
    return able;
}

function isDestroyed(health){
    destroyed = false;
    if (health <= 0){
        destroyed = true;
    }
    return destroyed;

}

function reloadShip(){
    shipHealth--;
    shipAmmo++;

}

function encounter() {
  console.log("You see a target");
  if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
    fireShip();
    if (isDestroyed(targetHealth)) {
      console.log("Target eliminated");
    }
    if (isDestroyed(shipHealth)) {
      console.log("ship destroyed");
    }
  }
}