const url = `https://api.airtable.com/v0/appcJCnPywJw3X3DQ/user-db`

let userObject;

function toggleFunction(){
    signupToggleElement.classList.toggle("active")
    loginToggleElement.classList.toggle("active")
    loginFormElement.classList.toggle("invisible")
    signupFormElement.classList.toggle("invisible")
}

/*---------------------------- login ------------------------------*/

const loginToggleElement = document.querySelector(".login-toggle")
const loginFormElement = document.querySelector(".login-form")
const loginNameElement = document.getElementById("login-name")

let users;
fetchingUserData()
    .then(res=>{
        console.log(res);
        users = res;
    })

/*------ Functions ------*/
async function fetchingUserData(){
    let response = await fetch(url, {
        headers: {
            "Authorization": "Bearer keyRbbzTThMiRJJO6"
        }
    })
    let data = await response.json()
    return data.records
}

function loginHandler(userId){
    let credentials = users.filter(user => user.id === userId)

    if(credentials.length!==0){
        
        userObject = credentials[0]

        let id = userObject.id
        let level = userObject.fields.level
        let a = userObject.fields.attempts
        let w = userObject.fields.wrong
        window.location.href=`./activity.html?id=${id}&l=${level}&a=${a}&w=${w}`
    }
}

/*------ Event Listeners ------*/
loginToggleElement.addEventListener("click", ()=>{
    toggleFunction()
})

loginFormElement.addEventListener("submit", event=>{
    event.preventDefault()
    loginHandler(loginNameElement.value)
})



/*---------------------------- Signup ------------------------------*/

const signupToggleElement = document.querySelector(".signup-toggle")
const signupFormElement = document.querySelector(".signup-form")
const signupNameElement = document.getElementById("signup-name")
const signupAgeElement = document.getElementById("age")
const signupGenderElement = document.getElementById("gender")


/*------ Functions ------*/
async function signupHandler(name, age){
    const data = {
        "records":[
            {
                "fields":{
                    "student-name": name,
                    "age": parseInt(age)
                }
            }
        ]
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer keyRbbzTThMiRJJO6"
        },
        body: JSON.stringify(data)
      });
    let res = await response.json() 
    
    userObject =  res.records[0];
    
    window.location.href=`./activity.html?id=${userObject.id}&l=0&a=0&w=0`
}

/*------ Event Listeners ------*/
signupToggleElement.addEventListener("click", ()=>{
    toggleFunction()
})

signupFormElement.addEventListener("submit", event=>{
    event.preventDefault()
    signupHandler(signupNameElement.value, signupAgeElement)
})

