import { Passager } from "../model/passager.js"

export class PassagerController
{
	static passagers = [
		new Passager("toto", "tata", 0),
		new Passager("test", "toast", 1),
		new Passager("Pass", "un", 2),
		new Passager("Poiass", "deux", 3),
	]
	
	getAll()
	{
		return PassagerController.passagers
	}

	getPassager(id)
	{
		return PassagerController.passagers.find(e => e.id === id)
	}

	addPassager(passager)
	{
        passager.id = PassagerController.passagers.length
		PassagerController.passagers.push(passager)
	}
}