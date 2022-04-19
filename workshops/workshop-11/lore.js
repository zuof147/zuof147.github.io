// STEP 1: VARIABLES
const weapons =
[{
    name: "Ruins Greatsword", 
    description: "Originally rubble from a ruin which fell from the sky, this surviving fragment was honed into a weapon.",
    attack: 124
},
{
    name: "Eclipse Shotel", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 77, 
},
{
    name: "Grafted Blade Greatsword", 
    description: "Storied sword and treasure of Castle Sol that depicts an eclipsed sun drained of color.",
    attack: 157, 
},]

// STEP 2: DOM REFERENCES
const weaponsContainerElement = document.querySelector('#weapons')
const showWeaponsSortedByAttackAscendingButtonElement = document.querySelector('button#sort-ascending')
const showWeaponsSortedByAttackDescendingButtonElement = document.querySelector('button#sort-descending')

// STEP 3: FUNCTIONS
const createWeaponElement = (weapon) => {
    // Create Container Element
    const containerElement = document.createElement('div')
    containerElement.classList.add('weapon')
    // Create Attack Value Element
    const attackElement = document.createElement('p')
    creditElement.innerHTML = 'Attack:' + weapon.attack
    containerElement.appendChild(attackElement)
    return containerElement
}

const removeWeapons = () => {
    weaponsContainerElement.innerHTML = ""
}

const addWeapons = (weapons) => {
    weapons.forEach(weapon => {
        const weaponElement = createUserElement(weapon)
        weaponsContainerElement.appendChild(weaponElement)
    });
}

// STEP 4: APPLICATION
// SORT 
const weaponsSortedByAttackAscending = weapons.sort((weaponA, weaponB) => {
    if (weaponA.attack < weaponB.attack) {
        return -1;
      }
      if (weaponA.attack > weaponB. attack) {
        return 1;
      }
    
      // Attack must be equal
      return 0;
})

const copyOfWeaponsSortedByAttackAscending = weaponsSortedByAttackAscending.slice()
const weaponsSortedByAttackDescending = copyOfWeaponsSortedByAttackAscending.reverse()

// SET EVENT LISTENERS
showWeaponsSortedByAttackAscendingButtonElement.addEventListener('click', () => {
    removeWeapons()
    addWeapons(weaponsSortedByAttackAscending)
})

showWeaponsSortedByAttackDescendingButtonElement.addEventListener('click', () => {
    removeWeapons()
    addWeapons(weaponsSortedByAttackDescending)
})

// START APP
addWeapons(weapons)