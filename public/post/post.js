window.onload = function(){
    const movieTitle = document.querySelector("#title");
    const yearReleased = document.querySelector("#released");
    const genre = document.querySelector("#genre");
    const form = document.querySelector("#form");


    form.addEventListener("submit", function(){
        event.preventDefault();
        localStorage.setItem("title", movieTitle.value);
        localStorage.setItem("released", yearReleased.value);
        localStorage.setItem("genre", genre.value);
        console.log(localStorage);
    });
}