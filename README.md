# MovieDatabase

This repo contains html, css, and JavaScript files. The webpage display movie's posters, title, and overview. The users can search a movie in TMDB API. If the search returns without any results, the user will be notified of the fact. 

The data is from The Movie Database API that can be found using this link: https://www.themoviedb.org/documentation/api

1. `index.html` most important feature is the search bar and the tags used to display movie information such as images and titles.

2. `TMDB_Logo.svg` contains the TMDB logo and was included by their request for using their API.

3. `js` folder contains a single JavaScript. This JavaScript is call `main.js` and uses an API key to access TMDB API within JSON. The JavaScript allows the webpage to search, display movie info, and will notify users if their search comes up empty.

4. `css` folder contains two CSS file. One from bootstrap and the other is `style.css` that enhance the `index.html` functionality by allowing scrolling within the displays and background coloring.
