import {Reservation} from '../model/reservation.js'
import { BilletController } from './billet.controller.js';

export class ReservationController 
{
	static reservation = [
		new Reservation(0, 0),
		new Reservation(1, 0),
		new Reservation(2, 0),
		new Reservation(3, 1),
	]

	getAll()
	{
		return ReservationController.reservation;
	}

	getReservation(id)
	{
		return ReservationController.reservation[id]
	}

	getUserReservation(id_user)
	{
		const res = ReservationController.reservation.filter(r => r.id_utilisateur === id_user)
		res.forEach(r =>{
			r.billets = BilletController.billets.filter(b => b.id_reservation === ReservationController.reservation.indexOf(r))
		})
		
		return res;
	}

	addReservation(reservation)
	{
		ReservationController.push(reservation)
	}
}