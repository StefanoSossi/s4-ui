import logo from './logo.svg';
import './App.css';
import { getClasses } from "./store/slicers/class.slice";
import { getStudents } from "./store/slicers/student.slice";
import { useDispatch, useSelector } from "react-redux";
import {
	selectClasses,
	selectClassIsLoading,
} from "./store/slicers/class.slice";
import {
	selectStudents,
	selectStudentIsLoading,
} from "./store/slicers/student.slice";

function App() {
	const dispatch = useDispatch();
	const classes = useSelector(selectClasses);
	const classIsLoading = useSelector(selectClassIsLoading);
	const students = useSelector(selectStudents);
	const studentIsLoading = useSelector(selectStudentIsLoading);

	const handleGetClasses = () => {
		dispatch(getClasses());
		dispatch(getStudents());
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
				<button onClick={handleGetClasses} disabled={classIsLoading}>
					getClasses
				</button>
				{classIsLoading && <div>Loading...</div>}
			</header>
		</div>
	);
}

export default App;
