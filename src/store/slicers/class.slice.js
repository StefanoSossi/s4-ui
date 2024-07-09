import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { environment } from "../../environments/environment";
import axios from "axios";

const API_URL = `${environment.S4_API}/api/Classes`;
const initialState = {
	isLoading: true,
	classes: [],
	error: null,
};

export const getClasses = createAsyncThunk("class/getClasses", async () => {
	try {
		const response = await axios.get(API_URL);
		console.log("classes ", response.data);
		return response.data;
	} catch (error) {
		throw error;
	}
});

export const getClassById = createAsyncThunk(
	"class/getClassById",
	async (classId) => {
		try {
			const response = await axios.get(`${API_URL}/${classId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const createClass = createAsyncThunk(
	"class/createClass",
	async (classItem) => {
		try {
			const response = await axios.post(API_URL, classItem);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const updateClass = createAsyncThunk(
	"class/updateClass",
	async ({ classId, classItem }) => {
		try {
			const response = await axios.put(`${API_URL}/${classId}`, classItem);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const deleteClass = createAsyncThunk(
	"class/deleteClass",
	async (classId) => {
		try {
			const response = await axios.delete(`${API_URL}/${classId}`);
			return classId;
		} catch (error) {
			throw error;
		}
	}
);

export const addStudentToClass = createAsyncThunk(
	"class/addStudentToClass",
	async ({ classId, studentId }) => {
		try {
			const response = await axios.post(
				`${API_URL}/${classId}/student/${studentId}`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const removeStudentOfClass = createAsyncThunk(
	"class/removeStudentOfClass",
	async ({ classId, studentId }) => {
		try {
			const response = await axios.delete(
				`${API_URL}/${classId}/student/${studentId}`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const getStudentsOfClass = createAsyncThunk(
	"class/getStudentsOfClass",
	async (classId) => {
		try {
			const response = await axios.get(`${API_URL}/${classId}/students`);
			return { students: response.data, classId: classId };
		} catch (error) {
			throw error;
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
				console.log("action", action.payload.data);
				state.classes = action.payload.data;
				state.isLoading = false;
			})
			.addCase(getClasses.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.data;
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
				state.error = action.payload.data;
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
				state.error = action.payload.data;
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
				state.error = action.payload.data;
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
				state.error = action.payload.data;
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
				state.error = action.payload.data;
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
				state.error = action.payload.data;
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
				state.error = action.payload.data;
			})
			.addDefaultCase((state, action) => {});
	},
});

export const selectClassState = (state) => state.classItem;

export const selectClasses = (state) => selectClassState(state).classes;

export const selectClassIsLoading = (state) =>
	selectClassState(state).isLoading;

export const selectClassError = (state) => selectClassState(state).error;

export const selectClassById = (state, classId) =>
	selectClasses(state).find((classItem) => classItem.id === classId);

export default classSlice.reducer;
