import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Home from './pages/Home';
import Country from './pages/Country';
import './App.scss';

const App = () => {
	return (
		<Router>
			<main>
				<Header />

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/country/:countryName" component={Country} />
				</Switch>
			</main>
		</Router>
	);
};

export default App;
