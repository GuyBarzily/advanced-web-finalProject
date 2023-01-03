import React from "react"
import Iframe from "react-iframe"
import Box from "@mui/material/Box"
import GameCarousel from "./GameCarousel"
import { useEffect } from "react"

function MainGameComp(props) {
	useEffect(() => {
	}, [])

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
			<GameCarousel></GameCarousel>
		</Box>
	)
}

export default MainGameComp
