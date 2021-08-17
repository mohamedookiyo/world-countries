import notFoundImage from '../images/not-found.svg';

// Error component
const Error = ({ errorMessage, region }) => {
	return (
		<div className="error">
			<p className="error__message">
				{region ? (
					<>
						Your search - <strong>{errorMessage}</strong> - did not match any
						country in <strong>{region}</strong> region.
					</>
				) : (
					<>
						Your search - <strong>{errorMessage}</strong> - did not match any
						country.
					</>
				)}
			</p>
			<img
				className="error__image"
				src={notFoundImage}
				alt="Not found illustration."
			/>
		</div>
	);
};

export default Error;
