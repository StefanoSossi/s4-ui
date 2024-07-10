import "./create.student.modal.style.css";
import { useDispatch } from "react-redux";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createStudent } from "../../../store/slicers/student.slice";

function CreateStudentModalComponent({ open, handleClose }) {
	const dispatch = useDispatch();
	const [firstname, setFirstname] = useState("");
	const [firstnameError, setFirstnameError] = useState(false);
	const [lastname, setLastname] = useState("");

	const handleAddStudent = () => {
		if (!firstname) {
			setFirstnameError(true);
			return;
		}
		dispatch(createStudent({ firstName: firstname, lastName: lastname }));
		handleClose();
	};

	const handleFirstnameChange = (event) => {
		setFirstname(event.target.value);
		if (event.target.value) {
			setFirstnameError(false);
		} else {
			setFirstnameError(true);
		}
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<Box className="modal-create-student">
				<Typography id="modal-title" variant="h6" component="h2">
					Add New Student
				</Typography>
				<TextField
					className="input-field"
					required
					id="firstname-required"
					label="Fisrtname"
					value={firstname}
					onChange={handleFirstnameChange}
					error={firstnameError}
					helperText={firstnameError ? "Firstname is required" : ""}
					InputLabelProps={{
						style: { color: "black" },
					}}
					sx={{
						"& .MuiInputLabel-root": {
							color: "black",
						},
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "gray",
							},
							"&.Mui-focused fieldset": {
								borderColor: "black",
								border: "1px solid",
							},
						},
					}}
				/>
				<TextField
					className="input-field"
					id="lastname"
					label="Lastname"
					value={lastname}
					error={firstnameError}
					onChange={(event) => setLastname(event.target.value)}
					InputLabelProps={{
						style: { color: "black" },
					}}
					sx={{
						"& .MuiInputLabel-root": {
							color: "black",
						},
						"& .MuiOutlinedInput-root": {
							"& fieldset": {
								borderColor: "gray",
							},
							"&.Mui-focused fieldset": {
								borderColor: "black",
								border: "1px solid",
							},
						},
					}}
				/>
				<div className="buttons-actions">
					<Button
						className="button-add"
						size="medium"
						variant="contained"
						onClick={handleAddStudent}
						sx={{
							backgroundColor: "#367225 !important",
							color: "white !important",
							":hover": {
								backgroundColor: "#3672255c !important",
								color: "black !important",
							},
						}}
					>
						Add
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

export default CreateStudentModalComponent;
