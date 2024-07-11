import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { environment } from "../../environments/environment";
import axios from "axios";
import { createSelector } from "reselect";
import { showSnackbar } from "./snackbar.slice";

const API_URL = `${environment.S4_API}/api/Classes`;
const initialState = {
	isLoading: true,
	classes: [],
	error: null,
};

export const getClasses = createAsyncThunk(
	"class/getClasses",
	async (_, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.get(API_URL);
			return response.data;
		} catch (error) {
			dispatch(showSnackbar({ message: error.message, severity: "error" }));
			return rejectWithValue(error.message);
		}
	}
);

export const getClassById = createAsyncThunk(
	"class/getClassById",
	async (classId, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.get(`${API_URL}/${classId}`);
			return response.data;
		} catch (error) {
			dispatch(showSnackbar({ message: error.message, severity: "error" }));
			return rejectWithValue(error.message);
		}
	}
);

export const createClass = createAsyncThunk(
	"class/createClass",
	async (classItem, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.post(API_URL, classItem);
			dispatch(showSnackbar({ message: "Class created", severity: "success" }));
			return response.data;
		} catch (error) {
			dispatch(showSnackbar({ message: error.message, severity: "error" }));
			return rejectWithValue(error.message);
		}
	}
);

export const updateClass = createAsyncThunk(
	"class/updateClass",
	async ({ classId, classItem }, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.put(`${API_URL}/${classId}`, classItem);
			dispatch(showSnackbar({ message: "Class updated", severity: "success" }));
			return response.data;
		} catch (error) {
			dispatch(showSnackbar({ message: error.message, severity: "error" }));
			return rejectWithValue(error.message);
		}
	}
);

export const deleteClass = createAsyncThunk(
	"class/deleteClass",
	async (classId, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.delete(`${API_URL}/${classId}`);
			dispatch(showSnackbar({ message: "Class deleted", severity: "success" }));
			return classId;
		} catch (error) {
			dispatch(showSnackbar({ message: error.message, severity: "error" }));
			return rejectWithValue(error.message);
		}
	}
);

export const addStudentToClass = createAsyncThunk(
	"class/addStudentToClass",
	async ({ classId, studentId }, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.post(
				`${API_URL}/${classId}/student/${studentId}`
			);
			dispatch(showSnackbar({ message: "Student added", severity: "success" }));
			return response.data;
		} catch (error) {
			dispatch(showSnackbar({ message: error.message, severity: "error" }));
			return rejectWithValue(error.message);
		}
	}
);

export const removeStudentOfClass = createAsyncThunk(
	"class/removeStudentOfClass",
	async ({ classId, studentId }, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.delete(
				`${API_URL}/${classId}/student/${studentId}`
			);
			dispatch(
				showSnackbar({ message: "Student  removed", severity: "success" })
			);
			return response.data;
		} catch (error) {
			dispatch(showSnackbar({ message: error.message, severity: "error" }));
			return rejectWithValue(error.message);
		}
	}
);

export const getStudentsOfClass = createAsyncThunk(
	"class/getStudentsOfClass",
	async (classId, { dispatch, rejectWithValue }) => {
		try {
			const response = await axios.get(`${API_URL}/${classId}/students`);
			return { students: response.data, classId: classId };
		} catch (error) {
			dispatch(showSnackbar({ message: error.message, severity: "error" }));
			return rejectWithValue(error.message);
		}
	}
);

const classSlice = createSlice({
	name: "classItem",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getClasses.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getClasses.fulfilled, (state, action) => {
				state.classes = action.payload.data;
				state.isLoading = false;
			})
			.addCase(getClasses.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getClassById.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getClassById.fulfilled, (state, action) => {
				state.classes = state.classes.map((classItem) =>
					classItem.id === action.payload.data.id
						? action.payload.data
						: classItem
				);
				state.isLoading = false;
			})
			.addCase(getClassById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(createClass.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(createClass.fulfilled, (state, action) => {
				state.classes = [...state.classes, action.payload.data];
				state.isLoading = false;
			})
			.addCase(createClass.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateClass.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(updateClass.fulfilled, (state, action) => {
				state.classes = state.classes.map((classItem) =>
					classItem.id === action.payload.data.id
						? action.payload.data
						: classItem
				);
				state.isLoading = false;
			})
			.addCase(updateClass.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(deleteClass.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteClass.fulfilled, (state, action) => {
				state.classes = state.classes.filter(
					(classItem) => classItem.id !== action.payload.data
				);
				state.isLoading = false;
			})
			.addCase(deleteClass.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(addStudentToClass.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addStudentToClass.fulfilled, (state, action) => {
				state.classes = state.classes.map((classItem) =>
					classItem.id === action.payload.data.id
						? action.payload.data
						: classItem
				);
				state.isLoading = false;
			})
			.addCase(addStudentToClass.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(removeStudentOfClass.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(removeStudentOfClass.fulfilled, (state, action) => {
				state.classes = state.classes.map((classItem) =>
					classItem.id === action.payload.data.id
						? action.payload.data
						: classItem
				);
				state.isLoading = false;
			})
			.addCase(removeStudentOfClass.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(getStudentsOfClass.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getStudentsOfClass.fulfilled, (state, action) => {
				var updatedClass = state.classes.find(
					(classItem) => classItem.id === action.payload.data.classId
				);
				var allClasses = state.classes.filter(
					(classItem) => classItem.id !== action.payload.data.classId
				);
				updatedClass.students = action.payload.data.students;
				state.classes = [...allClasses, updatedClass];
				state.isLoading = false;
			})
			.addCase(getStudentsOfClass.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addDefaultCase((state, action) => {});
	},
});

export const selectClassState = (state) => state.classItem;

export const selectClasses = createSelector(
	[selectClassState],
	(classState) => classState.classes
);

export const selectClassIsLoading = createSelector(
	[selectClassState],
	(classState) => classState.isLoading
);

export const selectClassError = createSelector(
	[selectClassState],
	(classState) => classState.error
);

export const selectClassById = createSelector(
	[selectClasses, (state, classId) => classId],
	(classes, classId) => classes.find((classItem) => classItem.id === classId)
);

export const selectClassesByStudentId = createSelector(
	[selectClasses, (state, studentId) => studentId],
	(classes, studentId) =>
		classes.filter((classItem) =>
			classItem.students?.some((student) => student.id === studentId)
		)
);
  
export default classSlice.reducer;
