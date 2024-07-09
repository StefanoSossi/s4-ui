import "./App.css";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	useLocation,
	Navigate,
} from "react-router-dom";
import ClassesComponent from "./components/Classes/classes.component";
import StudentsComponent from "./components/Students/students.component";
import HeaderComponent from "./components/Header/header.component";

function samePageLinkNavigation(event) {
	if (
		event.defaultPrevented ||
		event.button !== 0 ||
		event.metaKey ||
		event.ctrlKey ||
		event.altKey ||
		event.shiftKey
	) {
		return false;
	}
	return true;
}

function LinkTab(props) {
	return <Tab component={Link} to={props.href} {...props} />;
}

function App() {
	const [value, setValue] = useState(0);
	const location = useLocation();
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearch = (query) => {
		setSearchQuery(query);
	};

	const handleChange = (event, newValue) => {
		if (
			event.type !== "click" ||
			(event.type === "click" && samePageLinkNavigation(event))
		) {
			setValue(newValue);
		}
	};

	return (
		<div className="App">
			<HeaderComponent onSearch={handleSearch}></HeaderComponent>
			<Box className="table-box">
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="S4"
					role="navigation"
				>
					<LinkTab
						label="Students"
						href="/students"
						selected={location.pathname === "/students"}
					/>
					<LinkTab
						label="Classes"
						href="/classes"
						selected={location.pathname === "/classes"}
					/>
				</Tabs>
			</Box>
			<Routes>
				<Route path="/" element={<Navigate to="/students" />} />
				<Route
					path="/students"
					element={<StudentsComponent searchQuery={searchQuery} />}
				/>
				<Route
					path="/classes"
					element={<ClassesComponent searchQuery={searchQuery} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
