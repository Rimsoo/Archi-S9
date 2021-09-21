import { Aeroport } from "../model/aeroport.js"

export class AeroportController
{
	static aeroports = [
		new Aeroport("CDG", "Paris"),
		new Aeroport("JFK", "New York"),
		new Aeroport("DTW", "Detroit")
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