import React from "react"
import AddGame from "../components/AddGame.js"
import EditUser from "../components/EditUser.js"


function Admin(props) {
	return (
		<>
			<EditUser></EditUser>
			<AddGame></AddGame>
		</>
		
	)
}

export default Admin
