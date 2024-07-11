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

function StudentsComponent({ searchQuery }) {
	const dispatch = useDispatch();
	const students = useSelector(selectStudents);
	const studentIsLoading = useSelector(selectStudentIsLoading);
	const [filteredStudents, setFilteredStudents] = useState([]);

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
					{filteredStudents.map((student) => (
						<RowStudentComponent
							student={student}
							key={student.id}
						></RowStudentComponent>
					))}
				</>
			)}
		</div>
	);
}

export default StudentsComponent;
