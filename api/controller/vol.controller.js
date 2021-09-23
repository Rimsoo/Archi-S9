import {Vol} from '../model/vol.js'
import { AeroportController } from '../controller/aeroport.controller.js'
import { PlaneController } from './plane.controller.js'
export class VolController
{
	static vols = [
		new Vol("JFK", "CDG", "1000", PlaneController.planes[0], 0),
		new Vol("CDG", "DTW", "700", PlaneController.planes[1], 1),
		new Vol("DTW", "JFK", "300", PlaneController.planes[2], 2),
		new Vol("CDG", "JFK", "1000", PlaneController.planes[0], 3),
		new Vol("DTW", "CDG", "700", PlaneController.planes[1], 4),
		new Vol("JFK", "DTW", "300", PlaneController.planes[2], 5),
	]

	getAll()
	{
		return VolController.vols
	}

	getVol(code)
	{
		return VolController.vols.find(e => e.code === code)
	}

	getDepArr(dep, arr)
	{
		const aeroports = AeroportController.aeroports
		const aeCtl = new AeroportController()
		var results = []
		results.push([VolController.vols.find(v => 
			v.departure === dep && v.arrival === arr)])
		
		VolController.vols.forEach(d => {
			if (d.departure === dep && d.arrival !== arr) {
				VolController.vols.forEach(a => {
					if(a.arrival === arr && a.departure === d.arrival) {
						results.push([d, a])
					}
				})
			}
		})

		return results
	}
}