import { Passager } from "../model/passager.js"

export class PassagerController
{
	static passagers = [
		new Passager("toto", "tata"),
		new Passager("test", "toast"),
		new Passager("Pass", "un"),
		new Passager("Poiass", "deux"),
	]
	
	getAll()
	{
		return PassagerController.passagers
	}

	getPassager(id)
	{
		return PassagerController.passagers[id]
	}

	getReservation()
}