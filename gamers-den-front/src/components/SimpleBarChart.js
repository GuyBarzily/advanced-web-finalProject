import React, { useState, useEffect } from "react"
import { Box } from "@mui/material"
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts"
import { getPurchaseStats } from "../axios.js"

function SimpleBarChart() {
	const [data, setData] = useState([])

	// const getPurchases = async () => {
	// 	const purchases = await getPurchaseStats()
	// 	console.log(purchases)
	// 	setData(purchases)
	// }

	useEffect(() => {
		//getPurchases()
		const ws = new WebSocket("ws://localhost:8081")
		ws.onopen = () => {
			console.log("Websocket connection opened")
			// send a message through the WebSocket connection
			ws.send("Hello from the front-end!")
		}
		ws.onmessage = (event) => {
			// parse the received data
			const dataAmounts = JSON.parse(event.data)
			setData(dataAmounts)
		}
	}, [])

	return (
		<Box
			sx={{
				justifyContent: "center",
				alignItems: "center",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<BarChart
				width={1000}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="month" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="total" fill="#8884d8" />
			</BarChart>
		</Box>
	)
}
export default SimpleBarChart
