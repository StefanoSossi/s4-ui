import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	open: false,
	message: "",
	severity: "error",
};

const snackbarSlice = createSlice({
	name: "snackbar",
	initialState,
	reducers: {
		showSnackbar: (state, action) => {
			state.open = true;
			state.message = action.payload.message;
			state.severity = action.payload.severity || "error";
		},
		hideSnackbar: (state) => {
			state.open = false;
			state.message = "";
			state.severity = "error";
		},
	},
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export const selectSnackbarState = (state) => state.snackbar;

export default snackbarSlice.reducer;
