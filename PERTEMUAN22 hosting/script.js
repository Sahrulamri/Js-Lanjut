$('.search-button').on('click', function () {
    $.ajax ({
        url : 'http://www.omdbapi.com/?apikey=5dcd7a99&s=' + $('.input-keyword').val(),
        success : result => {
            const movies = result.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showMovieDetail(m);
            })
            $('.movie-container').html(cards);
            
            $('.modal-detail-button').on('click', function() {
                $.ajax ({
                    url : 'http://www.omdbapi.com/?apikey=5dcd7a99&i=' + $(this).data('imdbid'),
                    success : result => {
                        const movieDetails = detailMovie(result);
                    $('.modal-body').html(movieDetails);
                    },
                    error : (eror) => {
                        console.log(eror.responseText);
                    }
                })
            })
            $('.input-keyword').val('');
        },
        error : (eror) => {
            console.log(eror.responseText);
        }
    })
})

$('.input-keyword').on('keyup', function (e) {
    if (e.keyCode === 13) {
        $.ajax ({
            url : 'http://www.omdbapi.com/?apikey=5dcd7a99&s=' + $('.input-keyword').val(),
            success : result => {
                const movies = result.Search;
                let cards = '';
                movies.forEach(m => {
                    cards += showMovieDetail(m);
                })
                $('.movie-container').html(cards);
                
                $('.modal-detail-button').on('click', function() {
                    $.ajax ({
                        url : 'http://www.omdbapi.com/?apikey=5dcd7a99&i=' + $(this).data('imdbid'),
                        success : result => {
                            const movieDetails = detailMovie(result);
                        $('.modal-body').html(movieDetails);
                        },
                        error : (eror) => {
                            console.log(eror.responseText);
                        }
                    })
                })
                $('.input-keyword').val('');
            },
            error : (eror) => {
                console.log(eror.responseText);
            }
        })
    }

})



function showMovieDetail(m) {
    return `<div class="col-md-4 my-5">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted"><strong>Years :</strong>${m.Year}</h6>
                    <a href="#" class="btn btn-primary modal-detail-button"  data-bs-toggle="modal" data-bs-target="#movieDetailModals" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`
}


function detailMovie (result) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${result.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4> ${result.Title} (${result.Year})</h4></li>
                            <li class="list-group-item"><strong>Genre :</strong>${result.Genre}</li>
                            <li class="list-group-item"><strong>Actors :</strong> ${result.Actors} </li>
                            <li class="list-group-item"><strong>Director :</strong> ${result.Director}</li>
                            <li class="list-group-item"><strong>Writer :</strong> ${result.Writer}</li>
                            <li class="list-group-item"><strong>Duration :</strong> ${result.Runtime}</li>
                            <li class="list-group-item"><strong>Langguages :</strong> ${result.Language}</li>
                            <li class="list-group-item"><strong>Countries :</strong> ${result.Country}</li>
                            <li class="list-group-item"><strong>Plot :</strong> <br> ${result.Plot}</li>
                            </ul>
                    </div>
                </div>
            </div>`
}


























