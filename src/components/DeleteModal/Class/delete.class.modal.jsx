import "./delete.class.modal.style.css";
import { useDispatch } from "react-redux";

import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { deleteClass } from "../../../store/slicers/class.slice";

function DeleteClassModalComponent({ open, handleClose, classItem }) {
	const dispatch = useDispatch();

	const handleDeleteClass = () => {
		dispatch(deleteClass(classItem.id));
		handleClose();
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		>
			<Box className="modal-delete-classItem">
				<Typography id="modal-title" variant="h6" component="h2">
					Delete a Class
				</Typography>
				<Typography variant="subtitle2" component="h2">
					You are deleting :
				</Typography>
				<Typography id="modal-title" variant="h6" component="h2">
					{classItem.title} - {classItem.code}
				</Typography>
				<Typography id="modal-question" variant="subtitle2" component="h2">
					Are you sure to proceed?
				</Typography>
				<div className="buttons-actions">
					<Button
						className="button-add"
						size="medium"
						variant="contained"
						onClick={handleDeleteClass}
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
						Cancel
					</Button>
				</div>
			</Box>
		</Modal>
	);
}

export default DeleteClassModalComponent;
