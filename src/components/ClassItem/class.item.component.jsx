import "./class.item.style.css";
import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { removeClassToStudent } from "../../store/slicers/student.slice";

function ClassItemComponent({ classItem, studentId }) {
	const dispatch = useDispatch();

	const handleRemoveStudent = () => {
		dispatch(removeClassToStudent({ studentId, classId: classItem.id }));
	};

	return (
		<>
			<div className="class-item">
				<IconButton
					className="remove-class-button"
					onClick={handleRemoveStudent}
				>
					<CloseIcon />
				</IconButton>
				<div className="class-item-title">
					<Typography variant="body1" component="div">
						{classItem.title}
					</Typography>
				</div>
			</div>
		</>
	);
}

export default ClassItemComponent;
