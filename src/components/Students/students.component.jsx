import { getStudents } from "../../store/slicers/student.slice";
import { useDispatch, useSelector } from "react-redux";
import {
	selectStudents,
	selectStudentIsLoading,
} from "../../store/slicers/student.slice";
import React, { useEffect, useState } from "react";

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
		<div className="Students">
			{studentIsLoading ? (
				<p>Loading students...</p>
			) : (
				<ul>
					{filteredStudents.map((student) => (
						<li key={student.id}>
							{student.firstName} {student.lastName}{" "}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default StudentsComponent;
