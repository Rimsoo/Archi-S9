import  express  from 'express'
import { AeroportController } from '../controller/aeroport.controller.js'
const AeroportRoute = express()

AeroportRoute.get('/getAll', (req,res) => {
	const ctl = new AeroportController()
	const result = ctl.getAll()
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.status(200).json(result)
})

AeroportRoute.get('/getbyname/:name', (req,res) => {
    const name = req.params.name
    if (!name) {
        res.status(403).send("Invalid Name")
        return
    }

    const ctl = new AeroportController()
    const ae = ctl.getByName(name)
    if (!ae) {
        res.status(404).send("Aeroport Not Found")
        return
    }

    res.status(200).json(ae)
})

AeroportRoute.get('/getbyid/:id', (req,res) => {
    const id = parseInt(req.params.id)
    if (id === undefined) {
        res.status(403).send("Invalid Id")
        return
    }

    const ctl = new AeroportController()
    const ae = ctl.getById(id)
    if (!ae) {
        res.status(404).send("Aeroport Not Found")
        return
    }

    res.status(200).json(ae)
})

export {AeroportRoute}