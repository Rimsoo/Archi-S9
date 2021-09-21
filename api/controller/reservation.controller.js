import {Reservation} from '../model/reservation.js'

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

	addReservation(reservation)
	{
		ReservationController.push(reservation)
	}
}