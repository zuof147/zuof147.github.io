// STEP 1: VARIABLES
const users = [{
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
const usersContainerElement = document.querySelector('#users')
const showWeaponWithAttackInYuanButtonElement = document.querySelector("button#map")
const showAttackMoreThan100ButtonElement = document.querySelector('button#filter')
const showUsersSortedByAttackAscendingButtonElement = document.querySelector('button#sort-ascending')
const showUsersSortedByAttackDescendingButtonElement = document.querySelector('button#sort-descending')

// STEP 3: FUNCTIONS
const createUserElement = (user) => {
    // Create Container Element
    const containerElement = document.createElement('div')
    containerElement.classList.add('user')
    // Create Name Element
    const nameElement = document.createElement('p')
    nameElement.innerHTML = 'Name: ' + user.name
    // Create Authenticated Element
    const descriptionElement = document.createElement('p')
    descriptionElement.innerHTML = 'Discription: ' + user.description
    // Create Credit Element
    const attackElement = document.createElement('p')
    attackElement.innerHTML = 'Attack:' + user.attack
    containerElement.appendChild(nameElement)
    containerElement.appendChild(descriptionElement)
    containerElement.appendChild(attackElement)
    return containerElement
}

const removeUsers = () => {
    usersContainerElement.innerHTML = ""
}

const addUsers = (users) => {
    users.forEach(user => {
        const userElement = createUserElement(user)
        usersContainerElement.appendChild(userElement)
    });
}

// STEP 4: APPLICATION
// MAP
const usersWithAttackInYuan = users.map((user) => {
    const userWithAttackInYuan = {
        name: user.name, 
        attack: user.attack, 
        description: user.description
    }
    const attackInYuan = userWithAttackInYuan.attack / 100 
    userWithAttackInYuan.attack = '¥' + attackInYuan
    return userWithAttackInYuan
})

// FILTER
const attackMoreThan100Users = users.filter((user) => {
    return user.attack >= 100
})

// SORT 
const usersSortedByAttackAscending = users.sort((userA, userB) => {
    if (userA.attack < userB.attack) {
        return -1;
      }
      if (userA.attack > userB.attack) {
        return 1;
      }
    
      // names must be equal
      return 0;
})


usersSortedByAttackDescending = usersSortedByAttackAscending.slice().reverse() 

// SET EVENT LISTENERS
showWeaponWithAttackInYuanButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersWithAttackInYuan)
})

showAttackMoreThan100ButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(attackMoreThan100Users)
})

showUsersSortedByAttackAscendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByAttackAscending)
})

showUsersSortedByAttackDescendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByAttackDescending)
})

// START APP
addUsers(users)