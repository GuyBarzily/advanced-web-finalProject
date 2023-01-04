import React from "react"
import AddGame from "../components/AddGame.js"
import EditUser from "../components/EditUser.js"
import DeleteGame from "../components/DeleteGame.js"

function Admin(props) {
	return (
		<>
			<EditUser></EditUser>
			<AddGame></AddGame>
			<DeleteGame></DeleteGame>
		</>
	)
}

export default Admin
