import "./classes.style.css";
import { getClasses } from "../../store/slicers/class.slice";
import { useDispatch, useSelector } from "react-redux";
import {
	selectClasses,
	selectClassIsLoading,
} from "../../store/slicers/class.slice";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import RowClassComponent from "../RowClass/row.class.component";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CreateClassModalComponent from "../CreateModal/Class/create.class.modal";

function ClassesComponent({ searchQuery }) {
	const dispatch = useDispatch();
	const classes = useSelector(selectClasses);
	const classIsLoading = useSelector(selectClassIsLoading);
	const [filteredClasses, setFilteredClasses] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		dispatch(getClasses());
	}, [dispatch]);

	useEffect(() => {
		setFilteredClasses(
			!classIsLoading
				? classes.filter(
						(classItem) =>
							classItem.title
								.toLowerCase()
								.includes(searchQuery.toLowerCase()) ||
							classItem.code.toLowerCase().includes(searchQuery.toLowerCase())
				  )
				: classes
		);
	}, [classes, searchQuery]);

	return (
		<div className="classes">
			<div className="class-header">
				<div className="class-code">
					<Typography variant="body1" component="div">
						Code
					</Typography>
				</div>
				<div className="class-title">
					<Typography variant="body1" component="div">
						Title
					</Typography>
				</div>
				<div className="class-description">
					<Typography variant="body1" component="div">
						Description
					</Typography>
				</div>
				<div className="class-students-number">
					<Typography variant="body1" component="div">
						Students
					</Typography>
				</div>
				<div className="class-actions">
					<Typography variant="body1" component="div">
						Actions
					</Typography>
				</div>
			</div>
			{classIsLoading ? (
				<p>Loading classes...</p>
			) : (
				<>
					{filteredClasses.length === 0 ? (
						<Typography variant="body1" align="center" component="div">
							No classes found.
						</Typography>
					) : (
						filteredClasses.map((classItem) => (
							<RowClassComponent
								key={classItem.id}
								classItem={classItem}
							></RowClassComponent>
						))
					)}
				</>
			)}
			<Tooltip title="Add new Class">
				<Fab
					sx={{ color: "#367225 !important" }}
					aria-label="add class"
					className="add-button-new-class"
					onClick={() => setOpen(true)}
				>
					<AddCircleOutlineIcon />
				</Fab>
			</Tooltip>
			<CreateClassModalComponent
				open={open}
				handleClose={() => setOpen(false)}
			></CreateClassModalComponent>
		</div>
	);
}

export default ClassesComponent;
