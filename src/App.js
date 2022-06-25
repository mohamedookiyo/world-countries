import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './pages/Home';
import Country from './pages/Country';
import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<main>
				<Header />

				<Routes>
					<Route index element={<Home />} />
					<Route path='/country/:countryName' element={<Country />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
};

export default App;
