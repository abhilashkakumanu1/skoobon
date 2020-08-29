const loginForm = document.querySelector(".login-form")
const userNameElement = document.querySelector("#user-name")
const passwordElement = document.querySelector("#password")

const url = `https://api.airtable.com/v0/appcJCnPywJw3X3DQ/central-db?api_key=keyRbbzTThMiRJJO6&fields%5B%5D=userId&fields%5B%5D=password`

let centraldb;
fetching()
    .then(res => {
        centraldb = res
    })


/*------ Functions ------*/

async function fetching(){
    let response = await fetch(url);
    let data = await response.json();
    let fields = data.records.map(record => record.fields)
    return fields
}

function validateLogin(userId, password){
    let credentials = centraldb.filter(center => center.userId === userId && center.password === password)
    return credentials.length!==0
}

/*------ Event Listeners ------*/

loginForm.addEventListener("submit", event=>{
    event.preventDefault();
    let userId = userNameElement.value.trim()
    let password = passwordElement.value.trim()
    if(validateLogin(userId, password)){
        window.location.href="./authentication.html"
    } 
})