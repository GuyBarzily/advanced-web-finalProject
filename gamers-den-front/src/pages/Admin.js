import React, { useEffect } from "react"
import { Box, Button, TextField } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"

const label = { inputProps: { "aria-label": "Checkbox demo" } }

function Admin(props) {
	useEffect(() => {}, [])
	return (
		<Box
			sx={{
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<h1>Hello admin</h1>
			<h2>Add new game:</h2>
			<Box
				component="form"
				sx={{
					width: "50vw",
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<div>
					<TextField
						required
						id="outlined-required"
						label="Game Name"
						placeholder="Game Name"
					/>
					<TextField
						required
						id="outlined-required"
						placeholder="Game Name"
						type="date"
					/>
					<TextField
						required
						id="outlined-required"
						label="Game Name"
						placeholder="Game Name"
					/>

					<Box sx={{ display: "flex", justifyContent: "center" }}>
						<Button size="large" variant="contained">
							Send
						</Button>
					</Box>
					<Box>
						<h1>Edit user</h1>
						<TextField
							required
							id="outlined-required"
							label="new mail"
							placeholder="new mail"
						/>
						<TextField
							required
							id="outlined-required"
							label="new first name"
							placeholder="new first name"
						/>
						<TextField
							required
							id="outlined-required"
							label="new last name"
							placeholder="new last name"
						/>
						<FormControlLabel control={<Checkbox />} label="Admin" />
					</Box>
				</div>
			</Box>
		</Box>
	)
}

export default Admin
