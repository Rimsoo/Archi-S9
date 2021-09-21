import  express  from 'express'
import {PassagerController} from '../controller/passager.controller.js'

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

PassagerRoute.get('/reservation/:id/:date', (req, res) =>
{
    const result = billets.filter(b => b.id_vol === parseInt(req.params.id) && b.date === req.params.date)
    res.status(200).json(result)
})

PassagerRoute.post('/add', (req, res) =>
{
    passagers.push(req.body)
    res.status(200).json(passagers)
})

export {PassagerRoute}