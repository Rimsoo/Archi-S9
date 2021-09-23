import { Aeroport } from "../model/aeroport.js"

export class AeroportController
{
	static aeroports = [
		new Aeroport("CDG", "Paris", 0),
		new Aeroport("JFK", "New York", 1),
		new Aeroport("DTW", "Detroit", 2)
	]

	getAll()
	{
		return AeroportController.aeroports
	}

	getByName(name)
	{
		return AeroportController.aeroports.find(a => a.name === name)
	}
}