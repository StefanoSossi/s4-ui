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
import IconButton from "@mui/material/IconButton";
import PersonAddAlt1TwoToneIcon from "@mui/icons-material/PersonAddAlt1TwoTone";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CreateStudentModalComponent from "./components/CreateModal/Student/create.student.modal";
import CreateClassModalComponent from "./components/CreateModal/Class/create.class.modal";

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

const tabStyles = {
	"& .MuiTabs-indicator": {
		backgroundColor: "black !important",
	},
	"& .MuiTab-root": {
		color: "#39423e !important",
	},
	"& .Mui-selected": {
		color: "black !important",
	},
};

function App() {
	const [value, setValue] = useState(0);
	const location = useLocation();
	const [searchQuery, setSearchQuery] = useState("");
	const [openStudent, setOpenStudent] = useState(false);
	const [openClass, setOpenClass] = useState(false);

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
					sx={tabStyles}
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
				<div className="add-new-button">
					{location.pathname === "/students" ? (
						<>
							<div
								className="add-new-item-button"
								onClick={() => setOpenStudent(true)}
							>
								<Tooltip title="Add student">
									<IconButton sx={{ color: "#367225 !important" }}>
										<PersonAddAlt1TwoToneIcon />
									</IconButton>
								</Tooltip>
							</div>
							<Typography
								variant="body1"
								component="div"
								onClick={() => setOpenStudent(true)}
							>
								Add Student
							</Typography>
							<CreateStudentModalComponent
								open={openStudent}
								handleClose={() => setOpenStudent(false)}
							></CreateStudentModalComponent>
						</>
					) : (
						<>
							<div
								className="add-new-item-button"
								onClick={() => setOpenClass(true)}
							>
								<Tooltip title="Add Class">
									<IconButton sx={{ color: "#367225 !important" }}>
										<AddCircleOutlineIcon />
									</IconButton>
								</Tooltip>
							</div>
							<Typography
								variant="body1"
								component="div"
								onClick={() => setOpenClass(true)}
							>
								Add Class
							</Typography>
							<CreateClassModalComponent
								open={openClass}
								handleClose={() => setOpenClass(false)}
							></CreateClassModalComponent>
						</>
					)}
				</div>
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
