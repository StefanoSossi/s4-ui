import "./students.style.css";
import { getStudents } from "../../store/slicers/student.slice";
import { useDispatch, useSelector } from "react-redux";
import {
	selectStudents,
	selectStudentIsLoading,
} from "../../store/slicers/student.slice";
import React, { useEffect, useState } from "react";
import RowStudentComponent from "../RowStudent/row.student.component";
import Typography from "@mui/material/Typography";
import PersonAddAlt1TwoToneIcon from "@mui/icons-material/PersonAddAlt1TwoTone";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import CreateStudentModalComponent from "../CreateModal/Student/create.student.modal";

function StudentsComponent({ searchQuery }) {
	const dispatch = useDispatch();
	const students = useSelector(selectStudents);
	const studentIsLoading = useSelector(selectStudentIsLoading);
	const [filteredStudents, setFilteredStudents] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		dispatch(getStudents());
	}, [dispatch]);
	useEffect(() => {
		setFilteredStudents(
			!studentIsLoading
				? students.filter((student) =>
						(student.firstName + " " + student.lastName)
							.toLowerCase()
							.includes(searchQuery.toLowerCase())
				  )
				: students
		);
	}, [students, searchQuery]);

	return (
		<div className="students">
			<div className="student-header">
				<div className="avatar"></div>
				<div className="name">
					<Typography variant="body1" component="div">
						Full Name
					</Typography>
				</div>
				<div className="classes-number">
					<Typography variant="body1" component="div">
						Classes
					</Typography>
				</div>
				<div className="actions">
					<Typography variant="body1" component="div">
						Actions
					</Typography>
				</div>
			</div>
			{studentIsLoading ? (
				<p>Loading students...</p>
			) : (
				<>
					{filteredStudents.length === 0 ? (
						<Typography variant="body1" align="center" component="div">
							No students found.
						</Typography>
					) : (
						filteredStudents.map((student) => (
							<RowStudentComponent
								student={student}
								key={student.id}
							></RowStudentComponent>
						))
					)}
				</>
			)}
			<Tooltip title="Add new Student">
				<Fab
					sx={{ color: "#367225 !important" }}
					aria-label="add student"
					className="add-button-new-student"
					onClick={() => setOpen(true)}
				>
					<PersonAddAlt1TwoToneIcon />
				</Fab>
			</Tooltip>
			<CreateStudentModalComponent
				open={open}
				handleClose={() => setOpen(false)}
			></CreateStudentModalComponent>
		</div>
	);
}

export default StudentsComponent;
