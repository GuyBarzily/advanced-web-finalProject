import React, { useEffect, useState } from "react"
import Carousel from "better-react-carousel"

//import { Box } from '@mui/material';
//import {Card} from "@mui/material"
import Box from "@mui/joy/Box"
import Card from "@mui/joy/Card"
import CardCover from "@mui/joy/CardCover"
import JoyCard from "./JoyCard"

const GameCarousel = (props) => {
	const [games, setGames] = useState([])

	useEffect(() => {
		setGames(props.games)
	}, [props.games])

	const items = [
		{
			id: 508,
			title: "Enlisted",
			thumbnail: "https://www.freetogame.com/g/508/thumbnail.jpg",
			short_description:
				"Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ",
			game_url: "https://www.freetogame.com/open/enlisted",
			genre: "Shooter",
			platform: "PC (Windows)",
			publisher: "Gaijin Entertainment",
			developer: "Darkflow Software",
			release_date: "2021-04-08",
			freetogame_profile_url: "https://www.freetogame.com/enlisted",
		},
		{
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
		},
	]

	return (
		<div style={{ maxWidth: "45vw" }}>
			<Carousel cols={1} rows={1} gap={1} loop>
				<Carousel.Item>
					<JoyCard></JoyCard>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default GameCarousel
