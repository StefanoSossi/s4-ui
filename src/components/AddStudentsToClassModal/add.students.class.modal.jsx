import "./add.students.class.style.css";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../store/slicers/student.slice";
import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import {
	selectStudents,
	selectStudentIsLoading,
} from "../../store/slicers/student.slice";
import StudentItemComponent from "../StudentItem/student.item.component";
function AddStudentsClassModal({ open, handleClose, classItem }) {
	const dispatch = useDispatch();
	const [searchInput, setSearchInput] = useState("");
	const students = useSelector(selectStudents);
	const studentIsLoading = useSelector(selectStudentIsLoading);
	const [filteredStudents, setFilteredStudents] = useState([]);

	useEffect(() => {
		dispatch(getStudents());
	}, [dispatch]);
	useEffect(() => {
		if (!studentIsLoading) {
			setFilteredStudents(
				students.filter(
					(student) =>
						!classItem.students.some((s) => s.id === student.id) &&
						(student.firstName + " " + student.lastName)
							.toLowerCase()
							.includes(searchInput.toLowerCase())
				)
			);
		}
	}, [students, searchInput, classItem, studentIsLoading]);

	const handleSaveClass = () => {
		handleClose();
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<Box className="modal-add-students-classItem">
				<Typography id="modal-title" variant="h6" component="h2">
					Add Students to a Class
				</Typography>
				<Typography id="modal-title" variant="h6" component="h2">
					{classItem.title}
				</Typography>
				<div className="search-student-component">
					<div className="search-student-wrapper">
						<SearchIcon />
					</div>
					<InputBase
						className="search-student-input"
						placeholder="Type a Student name"
						inputProps={{ "aria-label": "search" }}
						value={searchInput}
						onChange={(event) => setSearchInput(event.target.value)}
					/>
				</div>
				<div
					className={`students-grid ${
						filteredStudents.length <= 1 ? "single-item" : ""
					}`}
				>
					{filteredStudents.length === 0 ? (
						<Typography variant="body1" align="center" component="div">
							No students found.
						</Typography>
					) : (
						filteredStudents.map((student) => (
							<StudentItemComponent
								key={student.id}
								student={student}
								classId={classItem.id}
								type={"add"}
							></StudentItemComponent>
						))
					)}
				</div>
				<div className="buttons-actions">
					<Button
						className="button-add"
						size="medium"
						variant="contained"
						onClick={handleSaveClass}
						sx={{
							backgroundColor: "#367225 !important",
							color: "white !important",
							":hover": {
								backgroundColor: "#3672255c !important",
								color: "black !important",
							},
						}}
					>
						Save
					</Button>
					<Button
						className="button-close"
						size="medium"
						variant="outlined"
						onClick={handleClose}
						sx={{
							":hover": {
								backgroundColor: "#a600005c !important",
							},
						}}
					>
						Cancel
					</Button>
				</div>
			</Box>
		</Modal>
	);
}

export default AddStudentsClassModal;
