import Header from "./Header.js"
import Home from "./Home.js"
import Movies from "./Movies.js"
import Shows from "./Shows.js"
import Details from "./Details.js"
import Footer from "./Footer.js"
import Login from "./Login.js"
import Register from "./Register.js"
import { setCookie } from "./Header.js"

document.querySelector("header").innerHTML = Header();
document.querySelector("footer").innerHTML = Footer();
document.querySelector(".navbar-burger").addEventListener("click", () => document.querySelector("header").classList.toggle("is-active"));

function renderPage() {
    var ret;
    switch (window.location.hash) {
        case "#/":
        case "":
            ret = Home();
            break;
        case "#/movies":
            ret = Movies();
            break;
        case "#/shows":
            ret = Shows();
            break;
        case "#/details":
            ret = Details();
            break;
        case "#/login":
            ret = Login();
            break;
        case "#/register":
            ret = Register();
            break;
        default:
            ret = "<h1 class='not-found-page'> Not Found Page!<h1/>";
    }
    if (window.location.hash !== "#/login" && window.location.hash !== "#/register") {
        document.querySelector("body").classList.remove("is-loggedOut");
        document.querySelector("header").innerHTML = Header();
    } else {
        document.querySelector("header").innerHTML = null;
        document.querySelector("footer").innerHTML = null;
        document.querySelector("body").classList.add("is-loggedOut");
    }
    document.querySelector("#root").innerHTML = ret;
    return ret;
}
window.onhashchange = renderPage;
renderPage();

document.querySelector("#login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const loginObj = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
    }
    if (loginObj) {
        fetch('https://netflux-api.barmej.com/api/users/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `email=${loginObj.email}&password=${loginObj.password}`
        }).then(res => res.json())
            .then(response => {
                setCookie('access_token', response.token, 14);
                document.location.hash = "#/";
            })
    }

})