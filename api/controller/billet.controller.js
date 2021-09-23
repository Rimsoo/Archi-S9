import { Billet } from "../model/billet.js";

export class BilletController 
{
	static billets = [
		new Billet(0, "10-10-2019", 1),
		new Billet(1, "10-10-2019", 2),
		new Billet(0, "10-10-2019", 1),
		new Billet(1, "10-10-2019", 2),
		new Billet(0, "10-10-2019", 1),
		new Billet(1, "10-10-2019", 2),
		new Billet(3, "11-10-2019", 1),
	]

	getAll()
	{
		return BilletController.billets
	}
	
	getBillet(id)
	{
		return BilletController.billets[id]
	}

	addBillet(billet)
	{
		BilletController.billets.push(billet)
	}
}