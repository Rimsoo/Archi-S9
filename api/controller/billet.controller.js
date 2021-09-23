import { Billet } from "../model/billet.js";
import { VolController } from "./vol.controller.js";

export class BilletController 
{
	static billets = [
		new Billet(VolController.vols[0], "10-10-2019", 1, 0),
		new Billet(VolController.vols[1], "10-10-2019", 2, 1),
		new Billet(VolController.vols[0], "10-10-2019", 1, 2),
		new Billet(VolController.vols[1], "10-10-2019", 2, 3),
		new Billet(VolController.vols[0], "10-10-2019", 1, 4),
		new Billet(VolController.vols[1], "10-10-2019", 2, 5),
		new Billet(VolController.vols[3], "11-10-2019", 1, 6),
	]

	getAll()
	{
		return BilletController.billets
	}
	
	getBillet(id)
	{
		return BilletController.billets.find(e => e.id === id)
	}

	addBillet(billet)
	{
        billet.id = BilletController.billets.length
		BilletController.billets.push(billet)
	}
}