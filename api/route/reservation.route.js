import  express  from 'express'
import { ReservationController } from '../controller/reservation.controller.js'
import { Reservation } from '../model/reservation.js'

const ReservationRoute = express()

ReservationRoute.get(['/getall', '/'], (req,res) => {
    const ctl = new ReservationController()
	const result = ctl.getAll()
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.status(200).json(result)
})

ReservationRoute.get('/get/:id', (req,res) => {
    const id = parseInt(req.params.id)
    if (id === undefined) {
        res.status(403).send("Invalid Id")
        return
    }

    const ctl = new ReservationController()
    const result = ctl.getReservation(id)
    if (!result) {
        res.status(404).send("Reservation Not Found")
        return
    }

    res.status(200).json(result)
})

ReservationRoute.get('/user/:name/', (req, res) =>
{
    const user_name = req.params.name
    if (!user_name) {
        res.status(403).send("Invalid User Id")
        return
    }

    const ctl = new ReservationController()
    const results = ctl.getUserReservation(user_name)
    if (!results) {
        res.status(404).send("No Reservation Found")
        return
    }
    res.status(200).json(results)
})

ReservationRoute.post('/add', (req, res) => {
    const passager = req.body.passager
    const utilisateur = req.body.utilisateur
    const payed_price = parseInt(req.body.payed_price)
    const billets = req.body.billets
	
    if (utilisateur === undefined || passager === undefined || !payed_price || !billets) {
        res.status(403).send("Invalid Reservation Informations")
        return
    }

    const ctl = new ReservationController()
    const reservation = new Reservation(passager, utilisateur, payed_price, billets)
    ctl.addReservation(reservation)

    res.status(200).json(ctl.getAll())
})

export {ReservationRoute}