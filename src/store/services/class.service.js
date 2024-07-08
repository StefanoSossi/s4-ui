import axios from "axios";

const API_URL = `${process.env.S4_API}/api/Classes`;

const getClasses = async () => {
	try {
		const response = await axios.get(API_URL);
		return response.data;
	} catch (error) {
		throw error;
	}
};
const getClassById = async (classId) => {
	try {
		const response = await axios.get(`${API_URL}/${classId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const createClass = async (classItem) => {
	try {
		const response = await axios.post(API_URL, classItem);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const updateClass = async (classId, classItem) => {
	try {
		const response = await axios.put(`${API_URL}/${classId}`, classItem);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const deleteClass = async (classId) => {
	try {
		const response = await axios.delete(`${API_URL}/${classId}`);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const addClassToClass = async (classId, studentId) => {
	try {
		const response = await axios.post(
			`${API_URL}/${classId}/student/${studentId}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

const removeClassToClass = async (classId, studentId) => {
	try {
		const response = await axios.delete(
			`${API_URL}/${classId}/student/${studentId}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export default {
	getClasses,
	getClassById,
	createClass,
	updateClass,
	deleteClass,
	addClassToClass,
	removeClassToClass,
};
