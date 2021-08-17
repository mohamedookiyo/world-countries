import {
	FETCH_DATA,
	FILTER_DATA,
	FAILURE_TO_FETCH_DATA,
} from '../actions/countryActions';

// Countries reducer
export const countriesReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case FETCH_DATA:
			const { countries } = payload;
			return {
				...state,
				loading: false,
				error: false,
				countries: countries,
			};

		case FILTER_DATA:
			const { filtredCountries } = payload;

			return {
				...state,
				loading: false,
				error: false,
				countries: filtredCountries,
			};

		case FAILURE_TO_FETCH_DATA:
			const { error } = payload;
			return {
				...state,
				loading: false,
				error: error,
				countries: [],
			};

		default:
			return state;
	}
};
