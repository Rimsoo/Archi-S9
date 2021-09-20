import { Aeroport } from "../model/aeroport.js"

export class AeroportController
{
	aeroports = [
		new Aeroport("CDG", "Paris"),
		new Aeroport("JFK", "New York"),
		new Aeroport("DTW", "Detroit")
	]

	getAll()
	{
		return this.aeroports
	}

	getById(id)
	{
		return this.aeroports[id]
	}

	getByName(name)
	{
		return this.aeroports.find(a => a.name === name)
	}
}