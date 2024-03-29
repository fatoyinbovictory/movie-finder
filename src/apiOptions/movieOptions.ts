import AUTH from "../../variables";

const auth = AUTH;

const movieLink =
	"https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

const movieOptions: Object = {
	action: {
		method: "GET",
		url: `${movieLink}&with_genres=28`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	adventure: {
		method: "GET",
		url: `${movieLink}&with_genres=12`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	animation: {
		method: "GET",
		url: `${movieLink}&with_genres=16`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	comedy: {
		method: "GET",
		url: `${movieLink}&with_genres=35`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	drama: {
		method: "GET",
		url: `${movieLink}&with_genres=18`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	fantasy: {
		method: "GET",
		url: `${movieLink}&with_genres=14`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	romance: {
		method: "GET",
		url: `${movieLink}&with_genres=10749`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},

	scienceFiction: {
		method: "GET",
		url: `${movieLink}&with_genres=878`,
		headers: {
			accept: "application/json",
			Authorization: auth,
		},
	},
};

export default movieOptions;
