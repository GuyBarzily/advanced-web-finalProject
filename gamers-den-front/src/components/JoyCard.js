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

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "flex-end",
				flexDirection: "column",
				borderRadius: "5px",
			}}
		>
			<Box
				sx={{
					width: "50vw",
					height: "50vh",
					backgroundImage: "url(https://www.freetogame.com/g/516/thumbnail.jpg)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "contain",
				}}
			></Box>
			<Box sx={{ backgroundColor: "white", width: "50vw" }}>
				<h1>Hello world</h1>
			</Box>
		</Box>
	)
}
