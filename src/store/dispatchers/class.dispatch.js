import {
	getClasses,
	getClassesSuccess,
	getClassesError,
	getClassesById,
	getClassesByIdSuccess,
	getClassesByIdError,
	createClass,
	createClassSuccess,
	createClassError,
	updateClass,
	updateClassSuccess,
	updateClassError,
	deleteClass,
	deleteClassSuccess,
	deleteClassError,
	addStudentToClass,
	addStudentToClassSuccess,
	addStudentToClassError,
	removeStudentOfClass,
	removeStudentOfClassSuccess,
	removeStudentOfClassError,
	getAllStudentsOfClass,
	getAllStudentsOfClassSuccess,
	getAllStudentsOfClassError,
} from "../actions/class.action";
import ClassService from "../services/class.service";

export const fetchClasses = () => async (dispatch) => {
	dispatch(getClasses());
	try {
		const classes = await ClassService.getClasses();
		dispatch(getClassesSuccess(classes));
	} catch (error) {
		dispatch(getClassesError(error));
	}
};

export const fetchClassById = (id) => async (dispatch) => {
	dispatch(getClassesById(id));
	try {
		const classItem = await ClassService.getClassById(id);
		dispatch(getClassesByIdSuccess(classItem));
	} catch (error) {
		dispatch(getClassesByIdError(error));
	}
};

export const createNewClass = (classItem) => async (dispatch) => {
	dispatch(createClass(classItem));
	try {
		const newClass = await ClassService.createClass(classItem);
		dispatch(createClassSuccess(newClass));
	} catch (error) {
		dispatch(createClassError(error));
	}
};

export const updateExistingClass = (classItem, id) => async (dispatch) => {
	dispatch(updateClass(classItem, id));
	try {
		const updatedClass = await ClassService.updateClass(classItem, id);
		dispatch(updateClassSuccess(updatedClass));
	} catch (error) {
		dispatch(updateClassError(error));
	}
};

export const deleteExistingClass = (id) => async (dispatch) => {
	dispatch(deleteClass(id));
	try {
		const deletedClass = await ClassService.deleteClass(id);
		dispatch(deleteClassSuccess(deletedClass));
	} catch (error) {
		dispatch(deleteClassError(error));
	}
};

export const addStudentToClassThunk =
	(classId, studentId) => async (dispatch) => {
		dispatch(addStudentToClass(classId, studentId));
		try {
			const result = await ClassService.addStudentToClass(classId, studentId);
			dispatch(addStudentToClassSuccess(result));
		} catch (error) {
			dispatch(addStudentToClassError(error));
		}
	};

export const removeClassFromClassThunk =
	(classId, studentId) => async (dispatch) => {
		dispatch(removeStudentOfClass(classId, studentId));
		try {
			const result = await ClassService.removeClassFromClass(
				studentId,
				classId
			);
			dispatch(removeStudentOfClassSuccess(result));
		} catch (error) {
			dispatch(removeStudentOfClassError(error));
		}
	};

export const fetchStudentsOfClasses = (classId) => async (dispatch) => {
	dispatch(getAllStudentsOfClass(classId));
	try {
		const students = await ClassService.getAllStudentsOfClass();
		dispatch(getAllStudentsOfClassSuccess(classId, students));
	} catch (error) {
		dispatch(getAllStudentsOfClassError(error));
	}
};
