import  express  from 'express'
import { PlaneController } from '../controller/plane.controller.js'
const PlaneRoute = express()

PlaneRoute.get(['/getall', '/'], (req,res) => {
	const ctl = new PlaneController()
	const result = ctl.getAll()
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.status(200).json(result)
})

PlaneRoute.get('/get/:name', (req,res) => {
    const name = req.params.name
    if (!name) {
        res.status(403).send("Invalid Name")
        return
    }

    const ctl = new PlaneController()
    const ae = ctl.getByName(name)
    if (!ae) {
        res.status(404).send("Plane Not Found")
        return
    }

    res.status(200).json(ae)
})

export {PlaneRoute}