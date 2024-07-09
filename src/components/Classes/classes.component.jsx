import { getClasses } from "../../store/slicers/class.slice";
import { useDispatch, useSelector } from "react-redux";
import {
	selectClasses,
	selectClassIsLoading,
} from "../../store/slicers/class.slice";
import React, { useEffect, useState } from "react";

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
		<div className="Students">
			{classIsLoading ? (
				<p>Loading classes...</p>
			) : (
				<ul>
					{filteredClasses.map((classItem) => (
						<li key={classItem.id}>{classItem.title}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default ClassesComponent;
