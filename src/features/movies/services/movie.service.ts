import axios from 'axios';
import { MovieDocument, Movie } from '../models/Movie';

const BACKEND_API = process.env.REACT_APP_BASE_API;

const getMovies = async () => {
	const response = await axios.get<MovieDocument[]>(
		`${BACKEND_API}/movie`
	);

	return response;
};

const addMovie = async (data: Movie) => {
	const response = await axios.post<MovieDocument>(
		`${BACKEND_API}/movie`,
		data
	);

	return response;
};
const updateMovie = async (id: string, data: Movie) => {
	const response = await axios.patch<MovieDocument>(
		`${BACKEND_API}/movie/${id}`,
		data
	);

	return response;
};
const deleteMovie = async (id: string) => {
	const response = await axios.delete<MovieDocument>(
		`${BACKEND_API}/movie/${id}`,
		{}
	);

	return response;
};

const movieService = {
	getMovies,
	addMovie,
	updateMovie,
	deleteMovie,
};

export default movieService;
