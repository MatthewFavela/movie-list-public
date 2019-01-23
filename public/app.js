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
                        <button class="edit-button">Edit Movie</button>
                        <button class="delete-button">Delete</button>
                    </div>
                `
            })
            .join(' ');
    })
    .then(function (response) {
        const deleteButton = document.getElementsByClassName("delete-button"); 
        const editButton = document.getElementsByClassName("edit-button");
         function deleteFunction(response){
            console.log("CLICKED")
            console.log('ID', this.id );
            let deleteID = parseInt(this.id) + 1;
            const url = `https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/deleteMovie/id/`;
            console.log(deleteID);
            let datastuff = {data:{id:deleteID}};
            
            axios.delete(`https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/deleteMovie/`, {params:{id:deleteID}})
            .then(function(response) {
                console.log(url, {params:{id:deleteID}} );
            })
            .catch(function (err) {
                console.log('Errors = None // ', err);
            })

        };
        function editFunction(response){
            console.log('CLICKED');
            console.log('ID', parseInt(this.id)); 

            let editID = parseInt(this.id);
            

            axios.put(`https://0i6v8ygy8b.execute-api.us-west-2.amazonaws.com/dev/updateMovie/`, {data:{id:editID}})
            .then(function(response) {
                resultDiv.innerHTML = '';
                resultDiv.innerHTML = response.data.map(function (val) {
                    return `
                    <form action="" id="form">
                    <input type="text" name="" placeholder="Movie Title" id="title">
                    <input type="text" name="" placeholder="Year Released" id="released">
                    <input type="text" name="" placeholder="Genre" id="genre">
                    <button type='submit' id = "submit-button" class='submit-post-button'>
                        
                      </button>
                </form>
                    `
                })
            })
            .catch(function (err) {
                console.log('Errors = None // ', err);
            })
        };

        for (let i = 0; i < deleteButton.length; i++) {
            deleteButton[i].id = i;
            deleteButton[i].addEventListener('click', deleteFunction); 
        }
        for (let i = 0; i < editButton.length; i++) {
                editButton[i].id = i;
                editButton[i].addEventListener('click', editFunction); 
                }
    })
    .catch(function (err) {
        console.log('Errors = None // ', err);
    })