window.onload = function(){
    const movieTitle = document.querySelector("#title");
    const yearReleased = document.querySelector("#released");
    const genre = document.querySelector("#genre");
    const form = document.querySelector("#form");


    form.addEventListener("submit", function(){
        event.preventDefault();
        console.log(localStorage.setItem("title", movieTitle.value));
        console.log(localStorage.setItem("released", yearReleased.value));
        console.log(localStorage.setItem("genre", genre.value));
    });
}