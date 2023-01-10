import React from "react"
import Box from "@mui/material/Box"
import GameCarousel from "./GameCarousel"
import { useEffect } from "react"

function MainGameComp(props) {
	useEffect(() => {}, [])

	return (
		<Box
			sx={{
				marginTop: "5vh",
				alignContent: "center",
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<GameCarousel
				setUser={props.setUser}
				user={props.user}
				handleAddToCart={props.handleAddToCart}
			></GameCarousel>
		</Box>
	)
}

export default MainGameComp
