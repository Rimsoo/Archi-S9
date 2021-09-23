import  express  from 'express'
import { BilletController } from '../controller/billet.controller.js'
import { Billet } from '../model/billet.js'

const BilletRoute = express()

BilletRoute.get(['/getall', '/'], (req,res) => {
	const ctl = new BilletController()
	const result = ctl.getAll()
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.status(200).json(result)
})

BilletRoute.get('/get/:id', (req,res) => {
	const id = parseInt(req.params.id)
	if (id === undefined) {
		res.status(403).send("Undefined Reservation Id")
		return
	}

	const ctl = new BilletController()
	const result = ctl.getBillet(id)
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.status(200).json(result)
})

BilletRoute.post('/add', (req, res) => {
	const vol = req.body.id_vol
    const date = req.body.date
    const classe = req.body.classe
	const reservation = req.body.reservation
	
    if (!vol || !date || !classe || !reservation) {
        res.status(403).send("Invalid Billet Informations")
        return
    }

    const ctl = new BilletController()
    const billet = new Billet(vol, date, classe, reservation)
    ctl.addBillet(billet)

    res.status(200).json(ctl.getAll())
})

BilletRoute.post('/addall', (req, res) => {
	const billets = req.body
    const ctl = new BilletController()
	
	billets.forEach(b => {
		const vol = req.body.id_vol
		const date = req.body.date
		const classe = req.body.classe
		const reservation = req.body.reservation
		
		if (!vol || !date || !classe || !reservation) {
			res.status(403).send("Invalid Billet Informations")
			return
		}

		const ctl = new BilletController()
		const billet = new Billet(vol, date, classe, reservation)
		ctl.addBillet(billet)
	});

    res.status(200).json(ctl.getAll())
})

export {BilletRoute}
