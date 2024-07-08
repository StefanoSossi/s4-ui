import axios from "axios";

const API_URL = `${process.env.S4_API}/api/Students`;

const getStudents = async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		throw error;
	}
};
const getStudentById = async (studentId) => {
	try {
		const response = await axios.get(`${API_URL}/${studentId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const createStudent = async (student) => {
	try {
		const response = await axios.post(API_URL, student);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const updateStudent = async (studentId, student) => {
	try {
		const response = await axios.put(`${API_URL}/${studentId}`, student);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const deleteStudent = async (studentId) => {
	try {
		const response = await axios.delete(`${API_URL}/${studentId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const addClassToStudent = async (studentId, classId) => {
	try {
		const response = await axios.post(
			`${API_URL}/${studentId}/class/${classId}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const removeClassToStudent = async (studentId, classId) => {
	try {
		const response = await axios.delete(
			`${API_URL}/${studentId}/class/${classId}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export default {
	getStudents,
	getStudentById,
	createStudent,
	updateStudent,
	deleteStudent,
	addClassToStudent,
	removeClassToStudent,
};
