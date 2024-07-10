import "./delete.student.modal.style.css";
import { useDispatch } from "react-redux";

import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { deleteStudent } from "../../../store/slicers/student.slice";
import Avatar from "@mui/material/Avatar";

function DeleteStudentModalComponent({
	open,
	handleClose,
	student,
	backgroundColor,
	fontColor,
	studentAcronyms,
}) {
	const dispatch = useDispatch();

	const handleDeleteStudent = () => {
		dispatch(deleteStudent(student.id));
		handleClose();
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<Box className="modal-delete-student">
				<Typography id="modal-title" variant="h6" component="h2">
					Delete a Student
				</Typography>
				<Avatar
					sx={{
						backgroundColor,
						color: fontColor,
						width: 45,
						height: 45,
						alignSelf: "center",
					}}
				>
					{studentAcronyms}
				</Avatar>
				<Typography variant="subtitle2" component="h2">
					You are deleting :
				</Typography>
				<Typography id="modal-title" variant="h6" component="h2">
					{student.firstName}.
				</Typography>
				<Typography id="modal-question" variant="subtitle2" component="h2">
					Are you sure to proceed?
				</Typography>
				<div className="buttons-actions">
					<Button
						className="button-add"
						size="medium"
						variant="contained"
						onClick={handleDeleteStudent}
						sx={{
							backgroundColor: "#367225 !important",
							color: "white !important",
							":hover": {
								backgroundColor: "#3672255c !important",
								color: "black !important",
							},
						}}
					>
						Delete
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
						Close
					</Button>
				</div>
			</Box>
		</Modal>
	);
}

export default DeleteStudentModalComponent;
