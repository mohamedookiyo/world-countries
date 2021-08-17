// Country actions
export const FETCH_DATA = 'FETCH_DATA';
export const fetchData = (countries) => ({
	type: FETCH_DATA,
	payload: { countries },
});

export const FILTER_DATA = 'FILTER_DATA';
export const filterData = (filtredCountries) => ({
	type: FILTER_DATA,
	payload: { filtredCountries },
});

export const FAILURE_TO_FETCH_DATA = 'FAILURE_TO_FETCH_DATA ';
export const failureToFetchData = (error) => ({
	type: FAILURE_TO_FETCH_DATA,
	payload: { error },
});
