import "./row.student.style.css";
import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { selectClassesByStudentId } from "../../store/slicers/class.slice";
import { getClasses } from "../../store/slicers/class.slice";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";

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

function RowStudentComponent({ student }) {
	const [openMenu, setOpenMenu] = useState(false);
	const dispatch = useDispatch();
	const classes = useSelector((state) =>
		selectClassesByStudentId(state, student.id)
	);

	useEffect(() => {
		dispatch(getClasses());
	}, [dispatch]);

	const studentAcronyms = (
		student.firstName.substring(0, 1) + student.lastName.substring(0, 1)
	).toUpperCase();
	const fullName = student.firstName + " " + student.lastName;
	const backgroundColor = getColorFromString(fullName);
	const fontColor = getFontColorFromString(fullName);

	return (
		<div className="student-row">
			<div className="avatar">
				<Avatar
					sx={{
						backgroundColor,
						color: fontColor,
						width: 45,
						height: 45,
					}}
				>
					{studentAcronyms}
				</Avatar>
			</div>
			<div className="name">
				<Typography variant="body1" component="div">
					{fullName}
				</Typography>
			</div>
			<div className="classes-number">
				<Typography variant="body1" component="div">
					{classes.length}
				</Typography>
			</div>
			<div className="actions">
				<VisibilityTwoToneIcon />
				<EditTwoToneIcon />
				<DeleteForeverTwoToneIcon />
			</div>
		</div>
	);
}

export default RowStudentComponent;
