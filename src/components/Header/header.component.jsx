import "./header.style.css";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

function HeaderComponent({ onSearch }) {
	const [searchInput, setSearchInput] = useState("");

	const handleSearchChange = (event) => {
		const value = event.target.value;
		setSearchInput(value);
		if (onSearch) {
			onSearch(value);
		}
	};
	return (
		<div className="header">
			<Typography variant="h6" className="title" component="div">
				S4 Challange - Stefano Sossi
			</Typography>
			<div className="search-component">
				<div className="search-wrapper">
					<SearchIcon />
				</div>
				<InputBase
					className="search-input"
					placeholder="Type a Class or Student..."
					inputProps={{ "aria-label": "search" }}
					value={searchInput}
					onChange={handleSearchChange}
				/>
			</div>
		</div>
	);
}

export default HeaderComponent;
