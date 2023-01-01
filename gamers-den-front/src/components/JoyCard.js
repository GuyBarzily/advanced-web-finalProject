import * as React from "react"
import Box from "@mui/joy/Box"
import Card from "@mui/joy/Card"
import CardCover from "@mui/joy/CardCover"
import CardContent from "@mui/joy/CardContent"
import Typography from "@mui/joy/Typography"
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
			component="ul"
			sx={{
				display: "flex",
				gap: 2,
				flexWrap: "wrap",
				p: 0,
				m: 0,
			}}
		>
			<Card
				component="li"
				sx={{
					objectFit: "cover",
					width: "25vw",
					minHeight: "50vh",
					minWidth: "15vw",
					flexGrow: 1,
				}}
			>
				<CardCover>
					{game && (
						<img
							src={game.thumbnail}
							//src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
							//srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
							loading="lazy"
							alt=""
						/>
					)}
				</CardCover>
				<CardContent>
					<Card
						component="li"
						sx={{
							minHeight: "15vh",
							minWidth: "5vw",
							flexGrow: 1,
							maxWidth: "15vw",
							maxHeight: "15vh",
						}}
					>
						<CardCover
							sx={{
								backgroundImage: `linear-gradient(to right, rgba(53, 43, 48, 0.8), rgba(18, 5, 12, 0.8))`,
							}}
						></CardCover>
						<CardContent>
							{game && (
								<Typography textColor={"white"}>
									{game.title}
									<br></br>
									<button>BUY NOW</button>
								</Typography>
							)}
						</CardContent>
					</Card>
					{game && (
						<Typography
							sx={{
								display: "flex",
								flexWrap: "wrap",
								minHeight: "280px",
								width: 320,
								paddingTop: "150px",
							}}
							level="h6"
							fontWeight="lg"
							textColor="white"
							mt={{ xs: 12, sm: 18 }}
						></Typography>
					)}
				</CardContent>
			</Card>
			<Card
				component="li"
				sx={{ minHeight: "50vh", minWidth: "15vw", flexGrow: 1 }}
			>
				<CardCover>
					<video
						autoPlay
						loop
						muted
						poster="https://assets.codepen.io/6093409/river.jpg"
					>
						<source
							src="https://assets.codepen.io/6093409/river.mp4"
							type="video/mp4"
						/>
					</video>
				</CardCover>
				<CardContent>
					<Typography
						level="h6"
						fontWeight="lg"
						textColor="#fff"
						mt={{ xs: 12, sm: 18 }}
					></Typography>
				</CardContent>
			</Card>
		</Box>
	)
}
