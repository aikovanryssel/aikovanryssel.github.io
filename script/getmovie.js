const movie = [
	'tt0111161', //'The Shawshank Redemption'
	'tt0068646', //'The Godfather'
	'tt0071562', //'The Godfather: Part II'
	'tt0468569', //'The Dark Knight'
	'tt6450804', //Terminator: Dark Fate
	'tt0167260', //  'The Lord of the Rings: The Return of the King'
	'tt0110912', //'Pulp Fiction'
	'tt5153860', //'Female Fight Club'
	'tt0120737', // The Lord of the Rings: The Fellowship of the Ring
	'tt7286456', //'Joker'
	'tt1375666', //'Inception'
	'tt6316138', //'Ayla: The Daughter of War'
	'tt0816692', //'Interstellar'
	'tt0317248', //'Cidade de Deus'
	'tt0245429', //'Sen to Chihiro no kamikakushi'
	'tt4154796', //'Avengers: Endgame'
	'tt6751668', //'Gisaengchung'
	'tt4154756', // 'Avengers: Infinity War'
	'tt2582802', //Whiplash
	'tt1675434', // The Intouchables
	'tt0482571', // The Prestige
	'tt0407887', // The Departed
	'tt0253474', // The Pianist
	'tt0172495', // Gladiator
	'tt0120586', // American History X
	'tt0110357', // The Lion King
	'tt8291224', // Uri: The Surgical Strike
	'tt8267604', // Capharnaüm
	'tt8108198', // Andhadhun
	'tt5783380', // Kimi no na wa
	'tt5074352', // Dangal
	'tt4633694', // Spider-Man: Into the Spider-Verse
	'tt2380307', // Coco
	'tt1345836', // The Dark Knight Rises
	'tt1853728', // Django Unchained
	'tt1187043', // 3 Idiots
	'tt0910970', // WALL E
	'tt0405094', // The Lives of Others
	'tt0364569', // Oldeuboi
	'tt0209144', // Memento
	'tt0435761', // Toy Story 3
	'tt0361748', // Inglourious Basterds
	'tt0338013', // Eternal Sunshine of the Spotless Mind
	'tt1343092', // The Great Gatsby
	'tt5323662', // Koe no katachi
	'tt3170832', // Room
	'tt2283748', // OMG: Oh My God!
	'tt2096673', // Inside Out
	'tt1954470', // Gangs of Wasseypur
	'tt1639426', // Udaan
	'tt1291584', // Warrior
	'tt0993846', // The Wolf of Wall Street
	'tt0434409', // V for Vendetta
	'tt0405508', // Rang De Basanti
	'tt2085059', // Black
	'tt0372784', // Batman Begins
	'tt0347149', // Hauru no ugoku shiro
	'tt0268978', // A Beautiful Mind
	'tt1869345', // Contratiempo
	'tt3612616', // Mommy
	'tt3315342', // Logan
	'tt9646704', // Relatos salvajes
	'tt2024544', // 12 Years a Slave
	'tt1979320', // Rush
	'tt1895587', // Spotlight
	'tt1821480', // Kahaani
	'tt1392214', //Prisoners
	'tt1392190', // Mad Max: Fury Road
	'tt1280558', // A Wednesday
	'tt0241527', // Harry Potter and the Deathly Hallows: Part 2
	'tt1130884', // Shutter Island
	'tt0469494', // There Will Be Blood
	'tt0266543', // Finding Nemo
	'tt3783958', // La La Land
	'tt3659388', // The Martian
	'tt0076759', // Star Wars
	'tt2265171', // The Raid 2
	'tt2084970', // The Imitation Game
	'tt1979376', // Toy Story 4
	'tt1877832', // X-Men: Days of Future Past
	'tt1856101', // Blade Runner 2049
	'tt1663202', // The Revenant
	'tt1431045', // Deadpool
	'tt1327035', // Dev.D
	'tt1220719', // Yip Man
	'tt0947798', // Black Swan
	'tt0808417', // Persepolis
	'tt0450259', // Blood Diamond
	'tt0401792', // Sin City
	'tt0382932', // Ratatouille
	'tt0381061', // Casino Royale
	'tt0325980', // Pirates of the Caribbean: The Curse of the Black Pearl
	'tt0319061', // Big Fish
	'tt0276919', // Dogville
	'tt5104604', // Isle of Dogs
	'tt5013056', // Dunkirk
	'tt2872718', // Nightcrawler
	'tt1631867', // Edge of Tomorrow
	'tt1398426', // Straight Outta Compton
	'tt1136608', // District 9
	'tt1179056' // A Nightmare on Elm Street
];

// const filldata=data=>{
//     console.log("test")
//     console.log(data);
// };

// const init=()=>{
//     handleData(`http://www.omdbapi.com/?s=cars&apikey=b69563b7`,filldata);
//     //handleData(``,filldata)
// }
let rdm, domNameMovie;
let SERVER_ENDPOINT = `http://www.omdbapi.com/?s=cars&apikey=b69563b7`;
let movieNameHTML = '',
	moviePosterHTML = '',
	movieRatingHTML = '',
	movieGenreHTML = '',
	movieLanguageHTML = '',
	movieSummaryHTML = '',
	movieActorsHTML = '';

const randomNumber = function(max = 100) {
	rdm = parseInt(Math.random() * max);
	console.log(rdm);
	return rdm;
};
const fetchData = () => {
	SERVER_ENDPOINT = `https://www.omdbapi.com/?i=${
		movie[randomNumber()]
	}&type=movie&apikey=b69563b7`;
	// Add a few headers - UITZONDERING
	let customHeaders = new Headers();
	customHeaders.append('Accept', 'application/json');

	return fetch(SERVER_ENDPOINT, { headers: customHeaders })
		.then(r => r.json())
		.then(data => data);
};
const getAPOCoolestWay = async function() {
	const data = await fetchData(SERVER_ENDPOINT);
	console.log(data);
	showRandomMovie(data);
};

const showRandomMovie = data => {
	//poster
	console.log(data.Poster);
	//moviePosterHTML=`<img class="js-posterMovie" src="${data.Search[0].Poster}" alt="${data.Search[0].Title}">`;
	domPosterMovie.setAttribute('src', data.Poster);
	domPosterMovie.innerHTML = moviePosterHTML;

	movieName(data);
	movieRating(data);
	movieLanguage(data);
	movieGenre(data);
	moreActors(data);
	movieSummary(data);

};
const movieSummary = data => {
	//summary
	movieSummaryHTML = `<p class="js-summaryMovie  c-lead c-lead--md">
    ${data.Plot}	</p>`;
	domSummaryMovie.innerHTML = movieSummaryHTML;
};
const movieLanguage = data => {
	//language
	movieLanguageHTML = `<p class="js-langMovie c-lead c-lead--md"> 
    ${data.Language}</p>`;
	domLanguageMovie.innerHTML = movieLanguageHTML;
};
const movieGenre = data => {
	//genre
	movieGenreHTML = `<p class="js-genreMovie c-lead c-lead--md">
	${data.Genre}	</p>`;
	domGenreMovie.innerHTML = movieGenreHTML;
};
const movieRating = data => {
	//rating
	movieRatingHTML = `<p class="js-ratingMovie c-lead c-lead--md">
	${data.imdbRating}	</p>`;
	domRatingMovie.innerHTML = movieRatingHTML;
};
const movieName = data => {
	//naam
	movieNameHTML = `<h1 class="js-nameMovie">
	${data.Title} </h1>`;
	domNameMovie.innerHTML = movieNameHTML;
};
const moreActors = data => {
	//Actors
	movieActorsHTML = ` <p class="js-actorsMovie c-lead c-lead--md">
    ${data.Actors}</p>`;
	domActorsMovie.innerHTML = movieActorsHTML;
};

window.addEventListener("load", function () {
    const loader = document.querySelector(".js-loader");
    loader.className += " hidden"; // class "loader hidden"
});

document.addEventListener('DOMContentLoaded', function() {
	console.info('DOM is ready to roll.. 👌');
	domNameMovie = document.querySelector('.js-nameMovie');
	domPosterMovie = document.querySelector('.js-posterMovie');
	domActorsMovie = document.querySelector('.js-actorsMovie');
	domRatingMovie = document.querySelector('.js-ratingMovie');
	domLanguageMovie = document.querySelector('.js-langMovie');
	domGenreMovie = document.querySelector('.js-genreMovie');
	domSummaryMovie = document.querySelector('.js-summaryMovie');


	//#1 event listner GamepadButton
	//#2 on click show loader hide content
	getAPOCoolestWay();
});
