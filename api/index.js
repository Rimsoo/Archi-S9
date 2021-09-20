import { buildRoute } from "./route/index.js"
import express from 'express'

const app = express()
app.use(express.json())

buildRoute(app)

app.listen(3000, () => {
	console.log("Serveur à l'écoute 3000")
})
