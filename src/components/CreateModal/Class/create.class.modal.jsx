import "./create.class.modal.style.css";
import { useDispatch } from "react-redux";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { createClass } from "../../../store/slicers/class.slice";
import { showSnackbar } from "../../../store/slicers/snackbar.slice";

function CreateClassModalComponent({ open, handleClose }) {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [code, setCode] = useState("");
	const [codeError, setCodeError] = useState(false);
	const [description, setDescription] = useState("");

	const handleAddClass = () => {
		if (!code) {
			setCodeError(true);
			dispatch(showSnackbar({ message: "Invalid Code", severity: "warning" }));
			return;
		}
		if (!title) {
			setTitleError(true);
			dispatch(showSnackbar({ message: "Invalid Title", severity: "warning" }));
			return;
		}

		dispatch(
			createClass({ code: code, title: title, description: description })
		);
		handleClose();
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
		if (event.target.value) {
			setTitleError(false);
		} else {
			setTitleError(true);
		}
	};

	const handleCodeChange = (event) => {
		setCode(event.target.value);
		if (event.target.value) {
			setCodeError(false);
		} else {
			setCodeError(true);
		}
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<Box className="modal-create-class">
				<Typography id="modal-title" variant="h6" component="h2">
					Add New Class
				</Typography>
				<TextField
					className="input-field"
					required
					id="code-required"
					label="Code"
					value={code}
					onChange={handleCodeChange}
					error={codeError}
					helperText={codeError ? "Code is required" : ""}
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
					required
					id="title-required"
					label="Title"
					value={title}
					onChange={handleTitleChange}
					error={titleError}
					helperText={titleError ? "Title is required" : ""}
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
					id="description"
					label="Description"
					value={description}
					error={titleError}
					onChange={(event) => setDescription(event.target.value)}
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
						onClick={handleAddClass}
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
						Cancel
					</Button>
				</div>
			</Box>
		</Modal>
	);
}

export default CreateClassModalComponent;
