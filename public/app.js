const resultDiv = document.querySelector('#resultDiv');

axios.get(`https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/getMovie`)
    .then(function (response) {
        console.log('Last Page = Activated // ', response);
        resultDiv.innerHTML = response.data.map(function (val) {
                return `
                    <div class="info-container">
                        <p id="movieName">movieName: ${val.movie_title}</p>
                        <p id="yearReleased">yearReleased: ${val.movie_year_released}</p>
                        <p id="genre">genre: ${val.movie_genre}</p>
                        <button class="edit-button"><a href="./edit/edit.html" class="edit-href">Edit Movie</a></button>
                        <button class="delete-button">Delete</button>
                    </div>
                `
            })
            .join(' ');
    })
    .then(function (response) {
        const deleteButton = document.getElementsByClassName("delete-button"); 
         function deleteFunction(response){
            console.log("CLICKED")
            console.log('ID', this.id);
            axios.delete(`https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/deleteMovie/id:`, this.id + 1)
            .then(function(response) {
                console.log("******", deleteButton);
            })
            .catch(function (err) {
                console.log('Errors = None // ', err);
            })

        };

        for (let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].id = i;
            deleteButton[i].addEventListener('click', deleteFunction);     
            }
    })
    .catch(function (err) {
        console.log('Errors = None // ', err);
    })