import  express  from 'express'
import {PassagerController} from '../controller/passager.controller.js'
import { Passager } from '../model/passager.js'

const PassagerRoute = express()

PassagerRoute.get('/getall', (req, res) =>
{
    const ctl = new PassagerController()
	const result = ctl.getAll()
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.status(200).json(result)
})

PassagerRoute.get('/get/:id', (req, res) =>
{
    const id = parseInt(req.params.id)
    if (id === undefined) {
        res.status(403).send("Invalid Id")
        return
    }

    const ctl = new PassagerController()
    const result = ctl.getPassager(id)
    if (!result) {
        res.status(404).send("Reservation Not Found")
        return
    }

    res.status(200).json(result)
})

PassagerRoute.post('/add', (req, res) =>
{
    const nom = req.body.nom
    const prenom = req.body.prenom
	
    if (!nom || !prenom ) {
        res.status(403).send("Invalid Passager Informations")
        return
    }

    const ctl = new PassagerController()
    const billet = new Passager(nom, prenom)
    ctl.addPassager(billet)

    res.status(200).json(ctl.getAll())
})

export {PassagerRoute}