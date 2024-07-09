import "./row.class.style.css";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";

function RowClassComponent({ classItem }) {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className="class-row">
			<div className="class-code">
				<Typography variant="body1" component="div">
					{classItem.code}
				</Typography>
			</div>
			<div className="class-title">
				<Typography variant="body1" component="div">
					{classItem.title}
				</Typography>
			</div>
			<div className="class-description">
				<Typography variant="body1" component="div">
					{classItem.description}
				</Typography>
			</div>
			<div className="class-students-number">
				<Typography variant="body1" component="div">
					{classItem.students.length}
				</Typography>
			</div>
			<div className="class-actions">
				<VisibilityTwoToneIcon />
				<EditTwoToneIcon />
				<DeleteForeverTwoToneIcon />
			</div>
		</div>
	);
}

export default RowClassComponent;
