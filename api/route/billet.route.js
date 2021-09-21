import  express  from 'express'
import { BilletController } from '../controller/billet.controller.js'
import { Billet } from '../model/billet.js'

const BilletRoute = express()

BilletRoute.get('/getall', (req,res) => {
	const ctl = new BilletController()
	const result = ctl.getAll()
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.status(200).json(result)
})

BilletRoute.get('/get/reservation/:reservation_id', (req,res) => {
	const id_reservation = req.params.reservation_id
	if (id_reservation === undefined) {
		res.status(403).send("Undefined Reservation Id")
		return
	}

	const ctl = new BilletController()
	const result = ctl.getBilletForReservation(id_reservation)
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.status(200).json(result)
})

BilletRoute.post('/add', (req, res) => {
	const id_vol = req.body.id_vol
    const date = req.body.date
    const classe = req.body.classe
	const id_reservation = req.body.id_reservation
	
    if (id_vol === undefined || !date || !classe || id_reservation === undefined) {
        res.status(403).send("Invalid Billet Informations")
        return
    }

    const ctl = new BilletController()
    const billet = new Billet(id_vol, date, classe, id_reservation)
    ctl.addBillet(billet)

    res.status(200).json(ctl.getAll())
})

BilletRoute.post('/addall', (req, res) => {
	const billets = req.body
    const ctl = new BilletController()
	
	billets.forEach(b => {
		const id_vol = b.id_vol
		const date = b.date
		const classe = b.classe
		const id_reservation = b.id_reservation
		
		if (id_vol === undefined || !date || !classe || id_reservation === undefined) {
			res.status(403).send("Invalid Billets Informations")
			return
		}
	
		const billet = new Billet(id_vol, date, classe, id_reservation)
		ctl.addBillet(billet)
	});

    res.status(200).json(ctl.getAll())
})

export {BilletRoute}
