import React, { useState, useEffect } from "react"
import { Box, Button, Alert } from "@mui/material"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import { getGames } from "../axios.js"
import { deleteGame } from "../axios.js"

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

function DeleteGame() {
	const [selectGameTitle, setSelectGameTitle] = useState("")
	const [addAlert, setAddAlert] = useState(false)
	const [data, setData] = useState([])

	const getAllGames = async () => {
		const games = await getGames("All", "All")
		setData(games)
	}
	useEffect(() => {
		getAllGames()
	}, [])

	const handleAdd = () => {
		setAddAlert(true)
		setTimeout(() => {
			setAddAlert(false)
		}, 3000)
	}

	const handleChangeGame = (event) => {
		setSelectGameTitle(event.target.value)
	}

	const handleSubmit = (event) => {
		setSelectGameTitle(event.target.value)
		const data = {
			title: selectGameTitle,
		}
		const update = async (data) => {
			const game = await deleteGame(data)
			if (game !== null) {
				handleAdd()
			}
			return game
		}
		update(data)
	}

	return (
		<Box
			sx={{
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
				paddingBottom: "5vh",
			}}
		>
			<h1>Delete game:</h1>
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
					<InputLabel id="demo-simple-select-label">choose game by title</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={selectGameTitle}
						label="by mail"
						onChange={handleChangeGame}
						MenuProps={MenuProps}
					>
						{data.map((game, index) => {
							return (
								<MenuItem value={game.title} key={index}>
									{game.title}{" "}
								</MenuItem>
							)
						})}
					</Select>
				</FormControl>
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center", paddingTop: "1vh" }}>
				<Button
					type="submit"
					onClick={handleSubmit}
					size="large"
					variant="contained"
				>
					submit
				</Button>
			</Box>
			{addAlert && <Alert severity="success">The Game has been deleted</Alert>}
		</Box>
	)
}

export default DeleteGame
