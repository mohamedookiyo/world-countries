import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchSingleCountry } from '../api/fetchCountries';
import useFetchCountries from '../hooks/useFetchCountries';
import CountryDetail from '../components/CountryDetail';
import Loader from '../components/Loader';
import Error from '../components/Error';

// Country component
const Country = () => {
	// Use custom hook
	const { countries } = useFetchCountries();

	// Use useState hook
	const [country, setCountry] = useState({});
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	// Get the userId param from the URL.
	let { countryName } = useParams();

	// Use useEffect hook
	useEffect(() => {
		fetchSingleCountry(countryName)
			.then((response) => {
				setCountry(response.data[0]);
				setLoading(false);
			})
			.catch((_error) => {
				setError(countryName);
				setLoading(false);
			});
	}, [countryName, error]);

	return (
		<section className='country container'>
			<Link to='/' className='country__back'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 448 512'
					className='country__arrow'
				>
					<path d='M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z'></path>
				</svg>
				<span className='country__text'>Back</span>
			</Link>
			{loading ? (
				<Loader />
			) : (
				<div className='country__detail'>
					{error ? (
						<Error errorMessage={error} />
					) : (
						<CountryDetail country={country} countries={countries} />
					)}
				</div>
			)}
		</section>
	);
};

export default Country;
