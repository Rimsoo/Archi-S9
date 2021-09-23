import {Vol} from '../model/vol.js'
import { AeroportController } from '../controller/aeroport.controller.js'
export class VolController
{
	static vols = [
		new Vol("JFK", "CDG", "1000", "1000", 0),
		new Vol("CDG", "DTW", "700", "700", 1),
		new Vol("DTW", "JFK", "300", "300", 2),
		new Vol("CDG", "JFK", "1000", "1000", 3),
		new Vol("DTW", "CDG", "700", "700", 4),
		new Vol("JFK", "DTW", "300", "300", 5),
	]

	getAll()
	{
		return VolController.vols
	}

	getVol(id)
	{
		return VolController.vols.find(e => e.id === id)
	}

	getDepArr(dep, arr)
	{
		const aeroports = AeroportController.aeroports
		const aeCtl = new AeroportController()
		var results = []
		results.push([VolController.vols.find(v => 
			v.depart === dep && v.arrivee === arr)])
		
		VolController.vols.forEach(d => {
			if (d.depart === dep && d.arrivee !== arr) {
				VolController.vols.forEach(a => {
					if(a.arrivee === arr && a.depart === d.arrivee) {
						results.push([d, a])
					}
				})
			}
		})

		return results
	}
}