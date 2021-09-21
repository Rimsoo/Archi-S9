import  express  from 'express'
import { ReservationController } from '../controller/reservation.controller.js'
import { Reservation } from '../model/reservation.js'

const ReservationRoute = express()

ReservationRoute.get('/getall', (req,res) => {
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

ReservationRoute.get('/user/:id/', (req, res) =>
{
    const id_user = parseInt(req.params.id)
    if (id_user === undefined) {
        res.status(403).send("Invalid User Id")
        return
    }

    const ctl = new ReservationController()
    const results = ctl.getUserReservation(id_user)
    if (!results) {
        res.status(404).send("No Reservation Found")
        return
    }
    res.status(200).json(results)
})

ReservationRoute.post('/add', (req, res) => {
    const id_passager = req.body.id_passager
    const id_utilisateur = req.body.id_utilisateur
	
    if (id_utilisateur === undefined || id_passager === undefined) {
        res.status(403).send("Invalid Reservation Informations")
        return
    }

    const ctl = new ReservationController()
    const reservation = new Reservation(id_passager, id_utilisateur)
    ctl.addReservation(reservation)

    res.status(200).json(ctl.getAll())
})

export {ReservationRoute}