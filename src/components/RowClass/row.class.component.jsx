import "./row.class.style.css";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import StudentItemComponent from "../StudentItem/student.item.component";
import IconButton from "@mui/material/IconButton";
import PersonAddAlt1TwoToneIcon from "@mui/icons-material/PersonAddAlt1TwoTone";
import Tooltip from "@mui/material/Tooltip";
import UpdateClassModalComponent from "../UpdateModal/Class/update.class.modal";
import DeleteClassModalComponent from "../DeleteModal/Class/delete.class.modal";
import AddStudentsClassModal from "../AddStudentsToClassModal/add.students.class.modal";

function RowClassComponent({ classItem }) {
	const [openMore, setOpenMore] = useState(false);
	const [openUpdateClass, setOpenUpdateClass] = useState(false);
	const [openDeleteClass, setOpenDeleteClass] = useState(false);
	const [openAddStudentsClass, setOpenAddStudentsClass] = useState(false);

	return (
		<>
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
					<Tooltip title="View Students">
						<IconButton
							sx={{ color: "black !important" }}
							onClick={() => setOpenMore(!openMore)}
						>
							<VisibilityTwoToneIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Edit Class">
						<IconButton
							sx={{ color: "#817737 !important" }}
							onClick={() => setOpenUpdateClass(true)}
						>
							<EditTwoToneIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Delete Class">
						<IconButton
							sx={{ color: "#a60000 !important" }}
							onClick={() => setOpenDeleteClass(true)}
						>
							<DeleteForeverTwoToneIcon />
						</IconButton>
					</Tooltip>
				</div>
			</div>
			{openMore ? (
				<div
					className={`class-expanded-row ${
						classItem.students.length <= 1 ? "single-item" : ""
					}`}
				>
					<div className="add-button">
						<div className="add-student-button">
							<Tooltip title="Add student">
								<IconButton
									sx={{ color: "#367225 !important" }}
									onClick={() => setOpenAddStudentsClass(true)}
								>
									<PersonAddAlt1TwoToneIcon />
								</IconButton>
							</Tooltip>
						</div>
						<Typography
							variant="body1"
							component="div"
							onClick={() => setOpenAddStudentsClass(true)}
						>
							Add Student
						</Typography>
					</div>
					{classItem.students.length === 0 ? (
						<Typography variant="body1" align="center" component="div">
							No students found.
						</Typography>
					) : (
						classItem.students.map((student) => (
							<StudentItemComponent
								key={student.id}
								student={student}
								classId={classItem.id}
								type={"remove"}
							></StudentItemComponent>
						))
					)}
				</div>
			) : (
				<></>
			)}
			<UpdateClassModalComponent
				open={openUpdateClass}
				handleClose={() => setOpenUpdateClass(false)}
				classItem={classItem}
			></UpdateClassModalComponent>
			<DeleteClassModalComponent
				open={openDeleteClass}
				handleClose={() => setOpenDeleteClass(false)}
				classItem={classItem}
			></DeleteClassModalComponent>
			<AddStudentsClassModal
				open={openAddStudentsClass}
				handleClose={() => setOpenAddStudentsClass(false)}
				classItem={classItem}
			></AddStudentsClassModal>
		</>
	);
}

export default RowClassComponent;
