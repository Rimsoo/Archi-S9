import { Billet } from '../model/billet.js';
import {Reservation} from '../model/reservation.js'
import { BilletController } from './billet.controller.js';
import { UserController } from './user.controller.js';
import { PassagerController } from './passager.controller.js';

export class ReservationController 
{
	static reservation = [
		new Reservation(PassagerController.passagers[0], UserController.users[0], 1000, [BilletController.billets[0], BilletController.billets[1]]),
		new Reservation(PassagerController.passagers[1], UserController.users[0], 700, [BilletController.billets[2], BilletController.billets[3]]),
		new Reservation(PassagerController.passagers[2], UserController.users[0], 700, [BilletController.billets[4], BilletController.billets[5]]),
		new Reservation(PassagerController.passagers[3], UserController.users[1], 300, [BilletController.billets[6]]),
	]

	getAll()
	{
		return ReservationController.reservation;
	}

	getReservation(id)
	{
		return ReservationController.reservation[id]
	}

	getUserReservation(user_name)
	{
		const res = ReservationController.reservation.filter(r => r.utilisateur.name === user_name)		
		return res;
	}

	addReservation(reservation)
	{
		ReservationController.reservation.push(reservation)
	}
}