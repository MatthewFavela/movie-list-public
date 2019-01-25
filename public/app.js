window.onload = function () {
    const resultDiv = document.querySelector('#resultDiv');

    axios.get(`https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/getMovie`)
        .then(function (response) {
            console.log('Last Page = Activated // ', response);
            resultDiv.innerHTML = response.data.map(function (val) {
                    return `
                        <div class="info-container" id=${val.movie_id}>
                            <p id="p-movieName">movieName: ${val.movie_title}</p>
                            <p id="p-yearReleased">yearReleased: ${val.movie_year_released}</p>
                            <p id="p-genre">genre: ${val.movie_genre}</p>
                            <button class="edit-button" id=${val.movie_id}>Edit Movie</button>
                            <button class="delete-button" id=${val.movie_id}>Delete</button>
                        </div>
                    `
                })
                .join(' ');
        })
        .then(function (response) {
            const deleteButton = document.getElementsByClassName("delete-button");
            const editButton = document.getElementsByClassName("edit-button");

            const res = response;

            function deleteFunction(response) {
                console.log("CLICKED")
                console.log('ID', this.id);
                let deleteID = this.id;



                console.log(deleteID);

                axios.delete(`https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/deleteMovie/`, {
                        data: {
                            movie_id: deleteID
                        }
                    })
                    .then(function (response) {
                        console.log('Working!', response)
                        location.reload();
                    })
                    .catch(function (err) {
                        console.log('Errors = None // ', err);
                    })

            };





            function editFunction(response) {
                event.preventDefault();
                console.log('CLICKED');
                console.log('ID', parseInt(this.id));

                let editID = parseInt(this.id);
                console.log("EDIT ID", editID)
                document.getElementById(editID).innerHTML = '';
                document.getElementById(editID).innerHTML = `
                        <form action="" id="form">
                        <input type="text" name="" placeholder="Movie Title" id="title">
                        <input type="text" name="" placeholder="Year Released" id="released">
                        <input type="text" name="" placeholder="Genre" id="genre">
                        <button type='submit' id="1${editID}" class="edit-done">Done!</button>
                    </form>
                    `;
                submitButton = document.getElementById(`1${editID}`);
                let putData = {};

                submitButton.addEventListener("click", function () {
                    event.preventDefault();
                    console.log("YEET")
                    console.log('class', document.getElementsByClassName("edit-done"))
                    console.log(this)
                    let data = {};
                    if (this.class === 'edit-done' && this.id === 1, editID) {
                        console.log("MEGA YEET")
                        const movieTitle = document.querySelector("#title");
                        const yearReleased = document.querySelector("#released");
                        const genre = document.querySelector("#genre");

                        putData = {
                            movie_id: editID,
                            movie_title: movieTitle.value,
                            movie_year_released: Number(yearReleased.value),
                            movie_genre: genre.value
                        }

                        console.log('if statementwork');

                    }
                    
                    axios.put(`https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/updateMovie`, putData)
                        .then(function (response) {
                            location.reload();
                            console.log(putData);
                        })
                        .catch(function (err) {
                            console.log('Errors = None // ', err);
                        });
                })
            }

            for (let i = 0; i < deleteButton.length; i++) {
                deleteButton[i].addEventListener('click', deleteFunction);
            }
            for (let i = 0; i < editButton.length; i++) {
                editButton[i].addEventListener('click', editFunction);
            }
        })
        .catch(function (err) {
            console.log('Errors = None // ', err);
        })
}