import React from "react"
import Iframe from "react-iframe"
import Box from "@mui/material/Box"
import GameCarousel from "./GameCarousel"

function MainGameComp() {
	const games = [
		{
			id: 1,
			title: "Super Mario Bros.",
			imageUrl: "https://www.freetogame.com/g/516/thumbnail.jpg",
		},
		{
			id: 2,
			title: "The Legend of Zelda",
			imageUrl: "https://www.freetogame.com/g/516/thumbnail.jpg",
		},
		{
			id: 3,
			title: "Donkey Kong",
			imageUrl: "https://www.freetogame.com/g/516/thumbnail.jpg",
		},
		{
			id: 4,
			title: "Pac-Man",
			imageUrl: "https://www.freetogame.com/g/516/thumbnail.jpg",
		},
		{
			id: 5,
			title: "Tetris",
			imageUrl: "https://www.freetogame.com/g/516/thumbnail.jpg",
		},
	]

	return (
		<Box
			sx={{
				flexDirection: "row",
				display: "flex",
				p: 1,
				m: 1,
				borderRadius: 1,
				flexWrap: "wrap",
				justifyContent: "center",
			}}
		>
			<GameCarousel games={games}></GameCarousel>
		</Box>
	)
}

export default MainGameComp
