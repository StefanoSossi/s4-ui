import {
	GET_CLASSES,
	GET_CLASSES_SUCCESS,
	GET_CLASSES_ERROR,
	GET_CLASS_BY_ID,
	GET_CLASS_BY_ID_SUCCESS,
	GET_CLASS_BY_ID_ERROR,
	CREATE_CLASS,
	CREATE_CLASS_SUCCESS,
	CREATE_CLASS_ERROR,
	UPDATE_CLASS,
	UPDATE_CLASS_SUCCESS,
	UPDATE_CLASS_ERROR,
	DELETE_CLASS,
	DELETE_CLASS_SUCCESS,
	DELETE_CLASS_ERROR,
	ADD_STUDENT_TO_CLASS,
	ADD_STUDENT_TO_CLASS_SUCCESS,
	ADD_STUDENT_TO_CLASS_ERROR,
	REMOVE_STUDENT_OF_CLASS,
	REMOVE_STUDENT_OF_CLASS_SUCCESS,
	REMOVE_STUDENT_OF_CLASS_ERROR,
} from "../actions/class.action";

const initialState = {
	isLoading: false,
	classes: [],
	error: null,
};

const classReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CLASSES:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case GET_CLASSES_SUCCESS:
			return {
				...state,
				isLoading: false,
				classes: action.payload,
			};
		case GET_CLASSES_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case GET_CLASS_BY_ID:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case GET_CLASS_BY_ID_SUCCESS:
			return {
				...state,
				isLoading: false,
				classes: state.classes.map((classItem) =>
					classItem.id === action.payload.id ? action.payload : classItem
				),
			};
		case GET_CLASS_BY_ID_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case CREATE_CLASS:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case CREATE_CLASS_SUCCESS:
			return {
				...state,
				isLoading: false,
				classes: [...state.classes, action.payload],
			};
		case CREATE_CLASS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case UPDATE_CLASS:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case UPDATE_CLASS_SUCCESS:
			return {
				...state,
				isLoading: false,
				classes: state.classes.map((classItem) =>
					classItem.id === action.payload.id ? action.payload : classItem
				),
			};
		case UPDATE_CLASS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case DELETE_CLASS:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case DELETE_CLASS_SUCCESS:
			return {
				...state,
				isLoading: false,
				classes: state.classes.filter(
					(classItem) => classItem.id !== action.payload.id
				),
			};
		case DELETE_CLASS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case ADD_STUDENT_TO_CLASS:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case ADD_STUDENT_TO_CLASS_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case ADD_STUDENT_TO_CLASS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case REMOVE_STUDENT_OF_CLASS:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case REMOVE_STUDENT_OF_CLASS_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case REMOVE_STUDENT_OF_CLASS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default classReducer;
