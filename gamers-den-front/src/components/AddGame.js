import React, { useState } from "react"
import { Box, Button, TextField, Alert } from "@mui/material"
import Select from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import { addGame } from "../axios.js"

function AddGame() {
	const [id, setId] = useState("")
	const [title, setTitle] = useState("")
	const [thumbnail, setThumbnail] = useState("")
	const [shortDescription, setShortDescription] = useState("")
	const [genre, setGenre] = useState("")
	const [platform, setPlatform] = useState("")
	const [publisher, setPublisher] = useState("")
	const [developer, setDeveloper] = useState("")
	const [releaseDate, setReleaseDate] = useState("")
	const [rating, setRating] = useState("")
	const [price, setPrice] = useState("")
	const [addAlert, setAddAlert] = useState(false)

	const handleAdd = () => {
		setAddAlert(true)
		setTimeout(() => {
			setAddAlert(false)
		}, 3000)
	}

	function handleSubmit(event) {
		event.preventDefault()
		// Add the game to the backend here
		const data = {
			id: id,
			title: title,
			thumbnail: thumbnail,
			short_description: shortDescription,
			genre: genre,
			platform: platform,
			publisher: publisher,
			developer: developer,
			release_date: releaseDate,
			rating: rating,
			price: price,
			video: "",
		}
		const update = async (data) => {
			const game = await addGame(data)
			if (game !== null) {
				handleAdd()
			}
			return game
		}
		update(data)
	}

	const handleGenreChange = (event) => {
		setGenre(event.target.value)
	}
	const handlePlatformChange = (event) => {
		setPlatform(event.target.value)
	}
	const handlePublisherChange = (event) => {
		setPublisher(event.target.value)
	}
	const handleDeveloperChange = (event) => {
		setDeveloper(event.target.value)
	}
	const handleReleaseDateChange = (event) => {
		setReleaseDate(event.target.value)
	}
	const handleRatingChange = (event) => {
		setRating(event.target.value)
	}
	const handlePriceChange = (event) => {
		setPrice(event.target.value)
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
			onSubmit={handleSubmit}
		>
			<h1>Add Game:</h1>
			<Box
				component="form"
				sx={{
					width: "50vw",
					"& .MuiTextField-root": { m: 1, width: "25ch" },
				}}
				noValidate
				autoComplete="off"
			>
				<TextField
					label="ID"
					name="id"
					value={id}
					onChange={(event) => setId(event.target.value)}
				/>
				<TextField
					label="Title"
					name="title"
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<TextField
					label="Thumbnail"
					name="thumbnail"
					value={thumbnail}
					onChange={(event) => setThumbnail(event.target.value)}
				/>
				<TextField
					label="Short description"
					name="shortDescription"
					value={shortDescription}
					onChange={(event) => setShortDescription(event.target.value)}
				/>
				<FormControl sx={{ width: "15vw" }}>
					<InputLabel id="demo-simple-select-label">Genre</InputLabel>
					<Select value={genre} onChange={handleGenreChange}>
						<MenuItem value="shooter">Shooter</MenuItem>
						<MenuItem value="strategy">Strategy</MenuItem>
						<MenuItem value="action RPG">Action RPG</MenuItem>
						<MenuItem value="battle royale">Battle Royale</MenuItem>
						<MenuItem value="MMOARPG">MMOARPG</MenuItem>
					</Select>
				</FormControl>
				<FormControl sx={{ width: "15vw" }}>
					<InputLabel id="demo-simple-select-label">Platform</InputLabel>
					<Select value={platform} onChange={handlePlatformChange}>
						<MenuItem value="PC (windows)">PC (Windows)</MenuItem>
						<MenuItem value="web browser">Web Browser</MenuItem>
					</Select>
				</FormControl>

				<TextField
					label="Publisher"
					value={publisher}
					onChange={handlePublisherChange}
				/>
				<TextField
					label="Developer"
					value={developer}
					onChange={handleDeveloperChange}
				/>
				<TextField
					label="Release date"
					name="releaseDate"
					value={releaseDate}
					onChange={handleReleaseDateChange}
				/>
				<TextField
					label="Rating"
					name="rating"
					value={rating}
					onChange={handleRatingChange}
				/>
				<TextField
					label="Price"
					name="price"
					value={price}
					onChange={handlePriceChange}
				/>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Button
						type="submit"
						onClick={handleSubmit}
						size="large"
						variant="contained"
					>
						submit
					</Button>
				</Box>
			</Box>
			{addAlert && <Alert severity="success">The Game has been added</Alert>}
		</Box>
	)
}

export default AddGame
