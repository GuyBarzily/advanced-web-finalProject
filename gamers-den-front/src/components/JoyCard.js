import * as React from "react"
import Card from "@mui/joy/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { useEffect, useState } from "react"
import CardCover from "@mui/joy/CardCover"
import Rating from "@mui/material/Rating"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import { Alert } from "@mui/material"

export default function JoyCard(props) {
	const [game, setGame] = useState(null)
	const [value, setValue] = useState(0)
	const [addAlert, setAddAlert] = useState(false)
	const [faildAlert, setFailedAlert] = useState(false)
	const [faildText, setFaildText] = useState("")

	const doesExists = () => {
		let ret = props.user.cart.some((element) => {
			return JSON.stringify(element) === JSON.stringify(game)
		})
		return ret
	}

	const handleAdd = () => {
		setAddAlert(true)
		setTimeout(() => {
			setAddAlert(false)
		}, 3000)
	}
	const handleFailed = () => {
		if (props.user) {
			setFaildText("Item Allredy in Cart")
		} else {
			setFaildText("Log In Required")
		}
		setFailedAlert(true)
		setTimeout(() => {
			setFailedAlert(false)
		}, 3000)
	}
	const handleShopCartAdd = () => {
		if (props.user) {
			if (!doesExists()) {
				props.handleAddToCart(game)
				handleAdd()
			} else {
				handleFailed()
			}
		} else {
			handleFailed()
		}
	}

	useEffect(() => {
		setGame(props.game)
		setValue(props.game.rating)
	}, [props.game, props.user])

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
								mb={1}
							>
								{game.title}
							</Typography>
							<AddShoppingCartIcon
								sx={{ cursor: "pointer" }}
								onClick={handleShopCartAdd}
							/>
							<Rating
								sx={{ paddingLeft: "1vw" }}
								name="simple-controlled"
								value={game.rating}
								readOnly
							/>
							<Typography>{game.short_description}</Typography>
						</CardContent>
						{addAlert && <Alert severity="success">Item Added To Cart</Alert>}
						{faildAlert && <Alert severity="error">{faildText}</Alert>}
					</div>
				</Card>
			)}
		</>
	)
}
