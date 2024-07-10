import "./update.class.modal.style.css";
import { useDispatch } from "react-redux";

import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { updateClass } from "../../../store/slicers/class.slice";

function UpdateClassModalComponent({ open, handleClose, classItem }) {
	const dispatch = useDispatch();
	const [title, setTitle] = useState(classItem.title);
	const [titleError, setTitleError] = useState(false);
	const [code, setCode] = useState(classItem.code);
	const [codeError, setCodeError] = useState(false);
	const [description, setDescription] = useState(classItem.description);

	const handleUpdateClass = () => {
		if (!title) {
			setTitleError(true);
			return;
		}
		if (!code) {
			setCodeError(true);
			return;
		}

		dispatch(
			updateClass({
				classId: classItem.id,
				classItem: { code: code, title: title, description: description },
			})
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
			<Box className="modal-update-class">
				<Typography id="modal-title" variant="h6" component="h2">
					Update a Class
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
						onClick={handleUpdateClass}
						sx={{
							backgroundColor: "#367225 !important",
							color: "white !important",
							":hover": {
								backgroundColor: "#3672255c !important",
								color: "black !important",
							},
						}}
					>
						Update
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

export default UpdateClassModalComponent;
