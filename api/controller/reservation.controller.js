import axios from 'axios'
import {Reservation} from '../model/reservation.js'
import { BilletController } from './billet.controller.js';
import { UserController } from './user.controller.js';
import { PassagerController } from './passager.controller.js';

export class ReservationController 
{
	static reservations = [
		new Reservation(PassagerController.passagers[0], UserController.users[0], 1000, [BilletController.billets[0], BilletController.billets[1]], 0),
		new Reservation(PassagerController.passagers[1], UserController.users[0], 700, [BilletController.billets[2], BilletController.billets[3]], 1),
		new Reservation(PassagerController.passagers[2], UserController.users[0], 700, [BilletController.billets[4], BilletController.billets[5]], 2),
		new Reservation(PassagerController.passagers[3], UserController.users[1], 300, [BilletController.billets[6]], 3),
	]

	getAll()
	{
		return ReservationController.reservations;
	}

	getReservation(code)
	{
		return ReservationController.reservations.find(e => e.code === code)
	}

	async getAllExt()
	{
		let result = await axios.get('https://api-6yfe7nq4sq-uc.a.run.app/tickets')
		let other = await axios.get('http://api.tcousin.com/api/v1/ticket/')

		return result.data
	}

	getUserReservation(user_name)
	{
		const res = ReservationController.reservations.filter(r => r.utilisateur.name === user_name)		
		return res;
	}

	addReservation(reservation)
	{
		const ctl = new BilletController()
        reservation.code = ReservationController.reservations.length
		reservation.billets.forEach(r => {
			ctl.addBillet(r)
		}); 
		ReservationController.reservations.push(reservation)
	}
}