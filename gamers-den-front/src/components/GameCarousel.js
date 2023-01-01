import React, { useEffect, useState } from "react"
import Carousel from "better-react-carousel"
import Box from "@mui/joy/Box"
import Card from "@mui/joy/Card"
import CardCover from "@mui/joy/CardCover"
import JoyCard from "./JoyCard"
import { getCarouselGames } from "../axios"

const GameCarousel = () => {
	const [games, setGames] = useState([])

	const getAll = async () => {
		const games = await getCarouselGames()
		setGames(games)
	}

	useEffect(() => {
		getAll()
	}, [])

	return (
		<div style={{ width: "40vw", borderRadius: "20px" }}>
			<Carousel cols={1} rows={1} gap={1} loop>
				{games.map((game, index) => {
					return (
						<Carousel.Item key={index}>
							<JoyCard key={index} game={game}></JoyCard>
						</Carousel.Item>
					)
				})}
			</Carousel>
		</div>
	)
}

export default GameCarousel
