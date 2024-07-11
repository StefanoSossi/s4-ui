import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import {
	hideSnackbar,
	selectSnackbarState,
} from "../../store/slicers/snackbar.slice";

const SnackbarComponent = () => {
	const dispatch = useDispatch();
	const { open, message, severity } = useSelector(selectSnackbarState);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		dispatch(hideSnackbar());
	};

	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default SnackbarComponent;
