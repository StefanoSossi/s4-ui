import {
	getStudents,
	getStudentsSuccess,
	getStudentsError,
	getStudentsById,
	getStudentsByIdSuccess,
	getStudentsByIdError,
	createStudent,
	createStudentSuccess,
	createStudentError,
	updateStudent,
	updateStudentSuccess,
	updateStudentError,
	deleteStudent,
	deleteStudentSuccess,
	deleteStudentError,
	addClassToStudent,
	addClassToStudentSuccess,
	addClassToStudentError,
	removeClassToStudent,
	removeClassToStudentSuccess,
	removeClassToStudentError,
} from "../actions/student.action";
import StudentService from "../services/student.service";

export const fetchStudents = () => async (dispatch) => {
	dispatch(getStudents());
	try {
		const students = await StudentService.getStudents();
		dispatch(getStudentsSuccess(students));
	} catch (error) {
		dispatch(getStudentsError(error));
	}
};

export const fetchStudentById = (id) => async (dispatch) => {
	dispatch(getStudentsById(id));
	try {
		const student = await StudentService.getStudentById(id);
		dispatch(getStudentsByIdSuccess(student));
	} catch (error) {
		dispatch(getStudentsByIdError(error));
	}
};

export const createNewStudent = (student) => async (dispatch) => {
	dispatch(createStudent(student));
	try {
		const newStudent = await StudentService.createStudent(student);
		dispatch(createStudentSuccess(newStudent));
	} catch (error) {
		dispatch(createStudentError(error));
	}
};

export const updateExistingStudent = (student, id) => async (dispatch) => {
	dispatch(updateStudent(student, id));
	try {
		const updatedStudent = await StudentService.updateStudent(student, id);
		dispatch(updateStudentSuccess(updatedStudent));
	} catch (error) {
		dispatch(updateStudentError(error));
	}
};

export const deleteExistingStudent = (id) => async (dispatch) => {
	dispatch(deleteStudent(id));
	try {
		const deletedStudent = await StudentService.deleteStudent(id);
		dispatch(deleteStudentSuccess(deletedStudent));
	} catch (error) {
		dispatch(deleteStudentError(error));
	}
};

export const addClassToStudentThunk =
	(studentId, classId) => async (dispatch) => {
		dispatch(addClassToStudent(studentId, classId));
		try {
			const result = await StudentService.addClassToStudent(studentId, classId);
			dispatch(addClassToStudentSuccess(result));
		} catch (error) {
			dispatch(addClassToStudentError(error));
		}
	};

export const removeClassFromStudentThunk =
	(studentId, classId) => async (dispatch) => {
		dispatch(removeClassToStudent(studentId, classId));
		try {
			const result = await StudentService.removeClassFromStudent(
				studentId,
				classId
			);
			dispatch(removeClassToStudentSuccess(result));
		} catch (error) {
			dispatch(removeClassToStudentError(error));
		}
	};
