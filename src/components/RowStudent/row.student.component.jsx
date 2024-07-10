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
import ClassItemComponent from "../ClassItem/class.item.component";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import UpdateStudentModalComponent from "../UpdateModal/Student/update.student.modal";

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
	const [openMore, setOpenMore] = useState(false);
	const dispatch = useDispatch();
	const [openUpdateStudent, setOpenUpdateStudent] = useState(false);

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
		<>
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
					<Tooltip title="View Classes">
						<IconButton
							sx={{ color: "black !important" }}
							onClick={() => setOpenMore(!openMore)}
						>
							<VisibilityTwoToneIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Edit Student">
						<IconButton
							sx={{ color: "#817737 !important" }}
							onClick={() => setOpenUpdateStudent(true)}
						>
							<EditTwoToneIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Delete Student">
						<IconButton sx={{ color: "#a60000 !important" }}>
							<DeleteForeverTwoToneIcon />
						</IconButton>
					</Tooltip>
				</div>
			</div>
			{openMore ? (
				<div className="student-expanded-row">
					{classes.map((classItem) => (
						<ClassItemComponent
							key={classItem.id}
							classItem={classItem}
							studentId={student.id}
						></ClassItemComponent>
					))}
				</div>
			) : (
				<></>
			)}

			<UpdateStudentModalComponent
				open={openUpdateStudent}
				handleClose={() => setOpenUpdateStudent(false)}
				student={student}
				backgroundColor={backgroundColor}
				fontColor={fontColor}
				studentAcronyms={studentAcronyms}
			></UpdateStudentModalComponent>
		</>
	);
}

export default RowStudentComponent;
