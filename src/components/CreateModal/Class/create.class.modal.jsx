import "./create.class.modal.style.css";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";

function CreateStudentModalComponent({ open, handleClose }) {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
		></Modal>
	);
}

export default CreateStudentModalComponent;
