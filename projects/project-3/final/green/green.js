//step 1: variables

const airtableApiKey = "keyyxePBzfNtzN44z";

const airtableDatabaseUrl = "https://api.airtable.com/v0/appvzUAXVWzceqSLn/green";

const authenticatedUrl = airtableDatabaseUrl + "?api_key=" + airtableApiKey;

//step 2: get references to DOM
const illustrationContainerElement = document.querySelector('#images')


//step 3: application
const fetchPromise = fetch(authenticatedUrl)
const jsonPromise = fetchPromise.then((response) => {
    //what to do with the data returned
    return response.json()
})
jsonPromise.then((data) => {
    console.log(data)
    const records = data.records
    for (let index = 0; index < records.length; index++) {
        const title = records[index].fields.Title
        const imageUrl = records[index].fields.Image[0].url
        //create container element
        const containerElement= document.createElement('div')
        containerElement.classList.add('container')
        //create image element
        const imageElement = document.createElement('img')
        imageElement.classList.add('image')
        imageElement.setAttribute('src',imageUrl)
        //create title element
        const titleElement = document.createElement('p')
        
        //add container element to DOM
        illustrationContainerElement.appendChild(containerElement)

        // background-image mouseover
        console.log('testing')
        imageElement.addEventListener('mouseover', (event) => {
            console.log(event.target)
            const source = event.target.src
            console.log(source)
            const bodyElement = document.querySelector('body')
            bodyElement.style.backgroundImage = "url(" + source + ")"
        })

        //add image element in containers
        containerElement.appendChild(imageElement)
        
    }
    //const recordsElement = document.createElement('div')
    //recordsElement.innerHTML = data.records[0].id
   // illustrationContainerElement.appendChild(recordsElement)
})