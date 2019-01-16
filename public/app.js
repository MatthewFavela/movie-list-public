const resultDiv = document.querySelector('#resultDiv');

axios.get(`https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/getMovie`)
                .then(function (response) {
                    console.log('Last Page = Activated // ', response);
                    console.log(localStorage);
                    resultDiv.innerHTML = response.data.map(function (val) {
                        return `
                    <div class="info-container">
                        <p id="movieName">movieName: ${val.movie_title}</p>
                        <p id="yearReleased">yearReleased: ${val.movie_year_released}</p>
                        <p id="genre">genre: ${val.movie_genre}</p>
                        <a href="./edit/edit.html">Edit Movie</a>
                    </div>
                `
                    }).join(' ');

                })
                .catch(function (err) {
                    console.log('Errors = None // ', err);
                })