// Filter component
const Filter = ({ setRegionValue }) => {
	// Handle set region
	const handleSetRegion = (e) => {
		// Else set region filter to clicked option and
		// Pass the region value to search component via home component
		setRegionValue(e.target.innerText || '');

		// Add active class to clicked li and remove the class from other li's
		let filters = document.querySelectorAll('ul li');
		filters.forEach((li) => li.classList.remove('active'));
		e.target.classList.add('active');

		// Set region filter to default
		if (e.target.innerText === 'All') return setRegionValue('');
	};

	// Add active class when user clicks dropdown
	const handleDropDown = () => {
		const dropDownIcon = document.querySelector('.filter__dropdown svg');
		dropDownIcon.classList.toggle('active');

		const dropDownOptions = document.querySelector('.filter__options');
		dropDownOptions.classList.toggle('active');
	};

	return (
		<div className="filter">
			<div className="filter__dropdown" onClick={handleDropDown}>
				Filter by Region
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
				</svg>
			</div>
			<ul className="filter__options">
				<li onClick={handleSetRegion}>All</li>
				<li onClick={handleSetRegion}>Africa</li>
				<li onClick={handleSetRegion}>Americas</li>
				<li onClick={handleSetRegion}>Asia</li>
				<li onClick={handleSetRegion}>Europe</li>
				<li onClick={handleSetRegion}>Oceania</li>
			</ul>
		</div>
	);
};

export default Filter;
