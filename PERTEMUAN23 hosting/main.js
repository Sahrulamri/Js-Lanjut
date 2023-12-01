const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
    const inputKeyword = document.querySelector('.input-keyword');
    fetch('http://www.omdbapi.com/?apikey=5dcd7a99&s=' + inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            const movie = response.Search;
            let cards = '';
            movie.forEach(m => {
                cards += `<div class="col-md-4 my-5">
                                <div class="card">
                                    <img src="${m.Poster}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${m.Title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted"><strong>Years :</strong>${m.Year}</h6>
                                    <a href="#" class="btn btn-primary modal-detail-button"  data-bs-toggle="modal" data-bs-target="#movieDetailModals" data-imdbid="${m.imdbID}">Show Details</a>
                                    </div>
                                </div>
                            </div>`
                        })
            const movieContainer = document.querySelector('.movie-container');
            movieContainer.innerHTML = cards;
            // Ketika tombol button di klik
            
        })
})