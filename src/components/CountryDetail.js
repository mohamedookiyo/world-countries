import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// CountryDetail component
const CountryDetail = ({ country, countries }) => {
	// Use useState
	const [bordersByFullName, setBordersByFullName] = useState([]);

	// Get border countries by full name
	useEffect(() => {
		let borders = [];

		country.borders?.map((border) => {
			return countries.map((country) => {
				return border === country.alpha3Code && borders.push(country.name);
			});
		});

		setBordersByFullName(borders);
	}, [countries, country.borders]);

	// Currencies and languages
	let currencies = country.currencies.map((currency) => currency.name);
	let languages = country.languages.map((language) => language.name);

	return (
		<>
			<div className='country__flag'>
				<img src={country.flag} alt={`The flag of ${country.name}`} />
			</div>

			<div className='country__info'>
				<h2>{country.name}</h2>
				<div className='country__details'>
					<div>
						{' '}
						<p>
							Native name: <span>{country.nativeName}</span>
						</p>
						<p>
							Population:{' '}
							<span>
								{new Intl.NumberFormat('en-US').format(country.population)}
							</span>
						</p>
						<p>
							Region: <span>{country.region}</span>
						</p>
						<p>
							Sub Region: <span>{country.subregion}</span>
						</p>
						<p>
							Capital: <span>{country.capital}</span>
						</p>
					</div>

					<div className='country__right'>
						<p>
							Top Level Domain: <span>{country.topLevelDomain}</span>
						</p>
						<p>
							Currencies: <span>{currencies.join(', ')}</span>
						</p>
						<p>
							Languages: <span>{languages.join(', ')}</span>
						</p>
					</div>
				</div>

				<div className='country__border'>
					<p>Border Countries:</p>
					<div className='country__borders'>
						{bordersByFullName.length ? (
							bordersByFullName.map((border) => (
								<Link
									to={`/country/${border}`}
									key={border}
									className='country__link'
								>
									<span>{border}</span>
								</Link>
							))
						) : (
							<span>No border countries.</span>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CountryDetail;
