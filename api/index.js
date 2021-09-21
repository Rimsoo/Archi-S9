import { buildRoute } from "./route/index.js"
import express from 'express'
import cors from 'cors'


const app = express()
app.use(express.json())

const allowedOrigins = ['http://localhost:4200']

const options = {
  origin: allowedOrigins
}
app.use(cors(options))


buildRoute(app)

app.listen(3000, () => {
	console.log("Serveur à l'écoute 3000")
})
