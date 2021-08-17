import { Link } from 'react-router-dom';

// Card component
const Card = ({ country }) => {
	return (
		<Link to={`/country/${country.name}`} className="card">
			<div className="card__image">
				<img src={country.flag} alt={`The flag of ${country.name}`} />
			</div>

			<div className="card__text">
				<h2 className="card__title">{country.name}</h2>
				<div className="card__data">
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
						Capital: <span>{country.capital}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
