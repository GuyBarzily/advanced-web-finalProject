import React, { useEffect, useState } from "react"
import { Box, Button, TextField, Alert } from "@mui/material"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import { getAllUsers } from "../axios.js"
import { updateUser } from "../axios.js"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

function EditUser() {
	
	const [selectUserMail, setSelectUserMail] = useState("")
	const [newFirstName, setNewFirstName] = useState("")
	const [newLastName, setNewLastName] = useState("")
	const [isAdmin, setIsAdmin] = useState(false)
	const [addAlert, setAddAlert] = useState(false)

	const [data, setData] = useState([])
	const getUsers = async () => {
		const users = await getAllUsers()
		setData(users)
	}
	useEffect(() => {
		getUsers()
	}, [])

	const handleAdd = () => {
		setAddAlert(true)
		setTimeout(() => {
			setAddAlert(false)
		}, 3000)
	}

	const handleUserSubmit = (event) => {
		event.preventDefault()
		const data = {
			user: {
				email: selectUserMail,
			},
			update: {
				firstName: newFirstName,
				lastName: newLastName,
				isAdmin: isAdmin,
			},
		}
		const update = async (data) => {
			const user = await updateUser(data)
			if (user !== null) {
				handleAdd()
			}
			return user
		}
		update(data)
	}

	const handleChangeEmail = (event) => {
		setSelectUserMail(event.target.value)
	}

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
				<FormControl sx={{ width: "50vw" }}>
					<InputLabel id="demo-simple-select-label">choose user by mail</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectUserMail}
						label="by mail"
						onChange={handleChangeEmail}
						MenuProps={MenuProps}
					>
						{data.map((user, index) => {
							return (
								<MenuItem value={user.email} key={index}>
									{user.email}{" "}
								</MenuItem>
							)
						})}
					</Select>
				</FormControl>
				<TextField
					required
					id="outlined-required"
					label="First Name"
					placeholder="First Name"
					onChange={(e) => {
						setNewFirstName(e.target.value)
					}}
				/>
				<TextField
					required
					id="outlined-required"
					placeholder="Last Name"
					onChange={(e) => {
						setNewLastName(e.target.value)
					}}
				/>

				<FormControlLabel
					control={
						<Checkbox
							onClick={(e) => {
								setIsAdmin(e.target.checked)
							}}
						/>
					}
					label="Admin"
				/>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						type="submit"
						onClick={handleUserSubmit}
						size="large"
						variant="contained"
					>
						submit
					</Button>
				</Box>
			</Box>
			{addAlert && <Alert severity="success">The user has been updated</Alert>}
		</Box>
	)
}

export default EditUser
