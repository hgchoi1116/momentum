const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input"); // # for id
const greeting = document.querySelector("#greeting");

//constants
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME)
    const username = loginInput.value;
    localStorage.setItem("USERNAME_KEY", username);
    paintGreetings(username);
}

const date= new Date();
function paintGreetings(username) {
    let timeOfGreeting;
    if (((date.getHours()) > 5) &&(date.getHours()) < 12)
    {
        timeOfGreeting = 'Good morning';
    }
    else if (((date.getHours()) >= 12) && ((date.getHours()) < 18))
    {
        timeOfGreeting = 'Good afternoon';
    }
    else{
        timeOfGreeting = 'Good evening';
    }
    greeting.innerText = `${timeOfGreeting}, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}