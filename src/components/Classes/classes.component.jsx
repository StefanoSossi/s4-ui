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

function ClassesComponent({ searchQuery }) {
	const dispatch = useDispatch();
	const classes = useSelector(selectClasses);
	const classIsLoading = useSelector(selectClassIsLoading);
	const [filteredClasses, setFilteredClasses] = useState([]);

	useEffect(() => {
		dispatch(getClasses());
	}, [dispatch]);

	useEffect(() => {
		setFilteredClasses(
			!classIsLoading
				? classes.filter((classItem) =>
						classItem.title.toLowerCase().includes(searchQuery.toLowerCase())
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
					{filteredClasses.map((classItem) => (
						<RowClassComponent
							key={classItem.id}
							classItem={classItem}
						></RowClassComponent>
					))}
				</>
			)}
		</div>
	);
}

export default ClassesComponent;
