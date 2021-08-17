import axios from 'axios';

// Axious instance with baseUrl
const api = axios.create({
	baseURL: 'https://restcountries.eu/rest/v2/',
});

// Fecth all countries
export const fetchAllCountries = async () => {
	const countries = await api.get('all');

	return countries;
};

// Fecth single job
export const fetchSingleCountry = async (countryName) => {
	const country = await api.get(`name/${countryName}?fullText=true`);

	return country;
};
