import { useState } from 'react';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Card from '../components/Card';
import Error from '../components/Error';
import Loader from '../components/Loader';

// Home component
const Home = () => {
	const [data, setData] = useState({});
	const [regionValue, setRegionValue] = useState('');

	// Destructure countries and loading from data
	const { countries, loading, error } = data;

	return (
		<>
			<section className="home container">
				<div className="home__filter">
					<Search setData={setData} region={regionValue} />
					<Filter setRegionValue={setRegionValue} />
				</div>

				{loading && <Loader />}

				<div className="grid grid__home">
					{error ? (
						<Error errorMessage={error} region={regionValue} />
					) : (
						countries &&
						countries.map((country) => (
							<Card key={country.numericCode} country={country} />
						))
					)}
				</div>
			</section>
		</>
	);
};

export default Home;
