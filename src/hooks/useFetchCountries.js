import { useEffect, useReducer } from 'react';
import { countriesReducer } from '../reducers/countriesReducer';
import {
	fetchData,
	filterData,
	failureToFetchData,
} from '../actions/countryActions';
import { fetchAllCountries } from '../api/fetchCountries';

// useFetchCountries custom hook
export default function useFetchCountries(search, region) {
	// Initial state
	const intialState = {
		countries: [],
		loading: true,
		error: false,
	};

	// useReducer hook
	const [state, dispatch] = useReducer(countriesReducer, intialState);

	// Start the process to fetching data
	useEffect(() => {
		// Fetch data
		fetchAllCountries()
			.then((response) => {
				// Check if the search input field has a value or a region is selected
				if (search || region) {
					// Filtered countries variables
					let filtredCountries;

					// Region
					if (region) {
						// Filter countries by region
						filtredCountries = response.data.filter(
							(country) => country.region.toLowerCase() === region.toLowerCase()
						);
					}

					// Search
					if (search) {
						// Filter countries
						filtredCountries = response.data.filter((country) =>
							country.name.toLowerCase().startsWith(search.toLowerCase())
						);
					}

					if (search && region) {
						// Filter countries both by region and name
						filtredCountries = response.data.filter(
							(country) =>
								country.name.toLowerCase().startsWith(search.toLowerCase()) &&
								country.region.toLowerCase() === region.toLowerCase()
						);
					}

					// Check if filtredCountries length > 0
					if (filtredCountries.length) {
						// Dispatch filtered country/countries
						dispatch(filterData(filtredCountries));
					} else {
						dispatch(failureToFetchData(search));
					}
				} else {
					// Dispatch all countries
					dispatch(fetchData(response.data));
				}
			})
			.catch((error) => {
				dispatch(failureToFetchData(error));
			});
	}, [search, region]);

	return state;
}
