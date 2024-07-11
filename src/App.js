import logo from './logo.svg';
import './App.css';
import { getClasses } from "./store/slicers/class.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectClasses, selectIsLoading } from "./store/slicers/class.slice";

function App() {
	const dispatch = useDispatch();
	const classes = useSelector(selectClasses);
	const isLoading = useSelector(selectIsLoading);

	const handleGetClasses = () => {
		dispatch(getClasses());
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button onClick={handleGetClasses} disabled={isLoading}>
					getClasses
				</button>
				{isLoading && <div>Loading...</div>}
			</header>
		</div>
	);
}

export default App;
