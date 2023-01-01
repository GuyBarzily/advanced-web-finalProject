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
		console.log(props.game)
	}, [props.game])

	const h1Style = {
		color: "yellow",
		padding: "5px",
	}
	let url
	if (game) {
		url = "url(" + game.thumbnail + ")"
	}
	return (
		<>
			{game && (
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
						<h2 style={h1Style}>{game.title}</h2>
						<h4 style={h1Style}>{game.short_description}</h4>
					</Box>
				</Box>
			)}
		</>
	)
}
