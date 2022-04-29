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
const showUsersWithCreditInDollarsButtonElement = document.querySelector("button#map")
const showAuthenticatedUsersButtonElement = document.querySelector('button#authenticated')
const showUsersSortedByNameAscendingButtonElement = document.querySelector('button#sort-ascending')
const showUsersSortedByNameDescendingButtonElement = document.querySelector('button#sort-descending')

// STEP 3: FUNCTIONS
const createUserElement = (user) => {
    // Create Container Element
    const containerElement = document.createElement('div')
    containerElement.classList.add('user')
    // Create Name Element
    const nameElement = document.createElement('p')
    nameElement.innerHTML = 'Name: ' + user.name
    // Create Authenticated Element
    const authenticatedElement = document.createElement('p')
    authenticatedElement.innerHTML = 'Discription: ' + user.authenticated
    // Create Credit Element
    const creditElement = document.createElement('p')
    creditElement.innerHTML = 'Attack:' + user.attack
    containerElement.appendChild(nameElement)
    containerElement.appendChild(authenticatedElement)
    containerElement.appendChild(creditElement)
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
const usersWithCreditInDollars = users.map((user) => {
    const userWithCreditInDollars = {
        name: user.name, 
        credit: user.credit, 
        authenticated: user.authenticated
    }
    const creditInDollars = userWithCreditInDollars.credit / 100 
    userWithCreditInDollars.credit = '$' + creditInDollars
    return userWithCreditInDollars
})

// FILTER
const authenticatedUsers = users.filter((user) => {
    return user.authenticated
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


usersSortedByNameDescending = usersSortedByAttackAscending.slice().reverse() 

// SET EVENT LISTENERS
showUsersWithCreditInDollarsButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersWithCreditInDollars)
})

showAuthenticatedUsersButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(authenticatedUsers)
})

showUsersSortedByNameAscendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByAttackAscending)
})

showUsersSortedByNameDescendingButtonElement.addEventListener('click', () => {
    removeUsers()
    addUsers(usersSortedByNameDescending)
})

// START APP
addUsers(users)