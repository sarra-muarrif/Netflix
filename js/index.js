import Header from "./Header.js"
import Home from "./Home.js"
import Movies from "./Movies.js"
import Shows from "./Shows.js"
import Details from "./Details.js"
import Footer from "./Footer.js"

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
        default:
            ret = "<h1 class='not-found-page'> Not Found Page!<h1/>";
    }
    document.querySelector("#root").innerHTML = ret;
    return ret;
}
window.onhashchange = renderPage;
renderPage();