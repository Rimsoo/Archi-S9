import { Billet } from "../model/billet.js";

export class BilletController 
{
	static billets = [
		new Billet(0, "10-10-2019", 1, 0),
		new Billet(1, "10-10-2019", 2, 0),
		new Billet(0, "10-10-2019", 1, 1),
		new Billet(1, "10-10-2019", 2, 1),
		new Billet(0, "10-10-2019", 1, 2),
		new Billet(1, "10-10-2019", 2, 2),
		new Billet(3, "11-10-2019", 1, 3),
	]

	getAll()
	{
		return BilletController.billets
	}
	
	getBillet(id)
	{
		return BilletController.billets[id]
	}

	getBilletForReservation(id_reservation)
	{
		return BilletController.billets.filter(b => b.id_reservation === id_reservation)
	}

	addBillet(billet)
	{
		BilletController.billets.push(billet)
	}
}