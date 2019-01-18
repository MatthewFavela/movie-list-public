

    window.onload = ()=>{

        const movieTitle = document.querySelector("#title");
        const yearReleased = document.querySelector("#released");
        const genre = document.querySelector("#genre");
        const form = document.querySelector("#form");
        const submitButton = document.getElementById('submit-button')
        console.log(form)
        
        
        
        
        // const data = {
            //         movie_title: 'hasdlasld',
            //         movie_genre:' genre.va',
            //         movie_year_released: 44
            //     }
            
            submitButton.addEventListener("click", function(){
                event.preventDefault();
                const data = {
                    movie_title: movieTitle.value,
                    movie_genre: genre.value,
                    movie_year_released: Number(yearReleased.value)
                }
                console.log('movieTitle.value', movieTitle.value);
                console.log('genre.value', genre.value);
                console.log('yearReleased.value', Number(yearReleased.value));
                axios.post(`https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/postMovie`, data)
                .then(function (response) {
                
                    window.location.href = '/index.html'
                })
                .catch(function (err) {
                    console.log('Errors = None // ', err);
                })
            })
            
        }