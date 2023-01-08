import * as React from "react"
import Card from "@mui/joy/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import CardCover from "@mui/joy/CardCover"
export default function JoyCard(props) {
	const [game, setGame] = useState(null)

	useEffect(() => {
		setGame(props.game)
	}, [props.game])

	let url
	if (game) {
		url = "url(" + game.bigImage + ")"
	}
	const styles = {
		overlay: {
			position: "absolute",
			bottom: 0,
			color: "white",
		},
	}
	return (
		<>
			{game && (
				<Card sx={{ width: "100%", height: "65vh" }}>
					<CardCover>
						<img
							src={game.bigImage}
							srcSet=""
							loading="lazy"
							alt=""
							style={{ height: "100%", width: "100%" }}
						/>
					</CardCover>
					<CardCover
						sx={{
							background:
								"linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
						}}
					/>
					<div style={styles.overlay}>
						<CardContent sx={{}}>
							<Typography
								style={{ fontFamily: "Hanalei Fill" }}
								level="h2"
								fontSize="35px"
								textColor="#fff"
								mb={1}
							>
								{game.title}
							</Typography>
							<Typography textColor="neutral.300">{game.short_description}</Typography>
						</CardContent>
					</div>
				</Card>
			)}
		</>
	)
}
