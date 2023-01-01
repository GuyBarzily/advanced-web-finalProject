import * as React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
import { useEffect, useState } from "react"
import { maxWidth } from "@mui/system"

export default function JoyCard(props) {
	const [game, setGame] = useState(null)

	useEffect(() => {
		setGame(props.game)
		console.log(game)
	}, [props.game])

	const h1Style = {
		color: "yellow",
		padding: "5px",
	}
	const g = {
		id: 516,
		title: "PUBG: BATTLEGROUNDS",
		thumbnail: "https://www.freetogame.com/g/516/thumbnail.jpg",
		short_description:
			"Get into the action in one of the longest running battle royale games PUBG Battlegrounds.",
		game_url: "https://www.freetogame.com/open/pubg",
		genre: "Shooter",
		platform: "PC (Windows)",
		publisher: "KRAFTON, Inc.",
		developer: "KRAFTON, Inc.",
		release_date: "2022-01-12",
		freetogame_profile_url: "https://www.freetogame.com/pubg",
	}
	const url = "url(" + g.thumbnail + ")"
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "flex-end",
				flexDirection: "column",
				width: "50vw",
				position: "block",
			}}
		>
			<Box
				sx={{
					width: "inherit",
					height: "50vh",
					backgroundImage: url,
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}
			></Box>
			<Box
				sx={{
					width: "inherit",
					background:
						"linear-gradient(90deg, rgba(32,32,32,1) 0%, rgba(40,40,59,1) 61%, rgba(32,32,32,1) 100%);",
					display: "flex",
					wrap: "flex-wrap",
					flexDirection: "column",
				}}
			>
				<h2 style={h1Style}>{g.title}</h2>
				<h4 style={h1Style}>{g.short_description}</h4>
			</Box>
		</Box>
	)
}
