/**
 * The following JavaScript below is based from this source:
 * https://www.youtube.com/watch?v=9Bvt6BFf6_U
 * 
 * TMDB API Template Reference:
 * https://api.themoviedb.org/3/search/movie?api_key=<api_key>&query=<query>
 * https://api.themoviedb.org/3/movie/popular?api_key=<api_key>
 * 
 */


const api_key = '0816131913d9d6e087afb9dc6986377e';
const base_url = 'https://api.themoviedb.org/3/movie/popular?api_key=';
const api_url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + api_key;
const image_url = 'https://image.tmdb.org/t/p/w500';
const search_base_url = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_key;
const search_url = search_base_url + '&query=';

// Grabs the tags from index.html
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(api_url);

function getMovies(url) {

    // Fetch TMDB API in JSON using the url and pass the results section of the data
    fetch(url).then(res => res.json()).then(data => {
        showMovies(data.results);
    })
}

// Pass the data into the function showMovies to display movie info
function showMovies(data){
    main.innerHTML = '';

    // If there is no results from the search, let the user know
    if (data == 0) {
        //alert('Sorry! We could not find anything! Please try again.');
        main.appendChild(document.createTextNode('Sorry! We could not find anything! Please try again.'));
    } 
    
    else {
        data.forEach(movie => {
            // Store the title, poster_path, and overview from the API
            const {title, poster_path, overview} = movie;
        
            // Create a div tag and add a movie class into div
            // Then add tags & content into the HTML and concat the data we need such as the title
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
        
            movieElement.innerHTML = `
                <img src="${image_url + poster_path}" alt="${title}">
        
                        <div class="title">
                            <h2>${title}</h2>
                        </div>
        
                        <div class="overview">
                            ${overview}
                        </div>
                        `
            // Append to make the changes
            main.appendChild(movieElement);
            })
    }
}


// In form, obtain the value in the search bar and pass it into getMovies
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const search_term = search.value;

    // If there's no search term, revert to default appearance
    if(search_term) {
        getMovies(search_url + search_term);
    }
    else {
        getMovies(api_url);
    }
})