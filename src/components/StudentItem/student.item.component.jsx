import "./student.item.style.css";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeStudentOfClass } from "../../store/slicers/class.slice";

const SATURATION = 65;
const getColorFromString = (string = "") => {
	const lightness = 70;
	const hue = _getHueFromString(string);
	return `hsl(${hue},${SATURATION}%,${lightness}%)`;
};
const getFontColorFromString = (string = "") => {
	const lightness = 32;
	const hue = _getHueFromString(string);
	return `hsl(${hue},${SATURATION}%,${lightness}%)`;
};

const _getHueFromString = (string = "") => {
	let hash = 0;
	for (let i = 0; i < string.length; i++) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}
	return Math.abs(hash % 360);
};

function StudentItemComponent({ student, classId }) {
	const dispatch = useDispatch();

	const studentAcronyms = (
		student.firstName.substring(0, 1) + student.lastName.substring(0, 1)
	).toUpperCase();
	const fullName = student.firstName + " " + student.lastName;
	const backgroundColor = getColorFromString(fullName);
	const fontColor = getFontColorFromString(fullName);

	const handleRemoveStudent = () => {
		dispatch(removeStudentOfClass({ classId, studentId: student.id }));
	};

	return (
		<>
			<div className="student-item">
				<IconButton
					className="remove-student-button"
					onClick={handleRemoveStudent}
				>
					<CloseIcon />
				</IconButton>
				<Avatar
					sx={{
						backgroundColor,
						color: fontColor,
						width: 45,
						height: 45,
						marginRight: 1,
					}}
				>
					{studentAcronyms}
				</Avatar>
				<div className="student-name">
					<Typography variant="body1" component="div">
						{fullName}
					</Typography>
				</div>
			</div>
		</>
	);
}

export default StudentItemComponent;
