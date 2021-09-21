import {Vol} from '../model/vol.js'
import { AeroportController } from '../controller/aeroport.controller.js'
export class VolController
{
	static vols = [
		new Vol(1, 0, "1000", "1000"),
		new Vol(0, 2, "700", "700"),
		new Vol(2, 1, "300", "300"),
		new Vol(0, 1, "1000", "1000"),
		new Vol(2, 0, "700", "700"),
		new Vol(1, 2, "300", "300"),
	]

	getAll()
	{
		return VolController.vols
	}

	getVol(id)
	{
		return VolController.vols[id]
	}

	getIdDepArr(dep, arr)
	{
		const aeroports = AeroportController.aeroports
		const aeCtl = new AeroportController()
		var results = []
		results.push([VolController.vols.find(v => v.depart === dep && v.arrivee === arr)])

		VolController.vols.forEach(d => {
			if (d.depart === dep && d.arrivee !== arr) {
				VolController.vols.forEach(a => {
					if(a.arrivee === arr && a.depart === d.arrivee) {
						results.push([d, a])
					}
				})
			}
		})

		results.forEach(r => {
			r.forEach(b => {
				b.depart = aeCtl.getById(b.depart)
				b.arrivee = aeCtl.getById(b.arrivee)
			})
		})

		return results
	}

	getNameDepArr(dep, arr)
	{
		const aeroports = AeroportController.aeroports
		const aeCtl = new AeroportController()
		var results = []
		results.push([VolController.vols.find(v => aeroports[v.depart].name === dep && aeroports[v.arrivee].name === arr)])
		
		VolController.vols.forEach(d => {
			if (aeroports[d.depart].name === dep && aeroports[d.arrivee].name !== arr) {
				VolController.vols.forEach(a => {
					if(aeroports[a.arrivee].name === arr && a.depart === d.arrivee) {
						results.push([d, a])
					}
				})
			}
		})

		results.forEach(r => {
			r.forEach(b => {
				b.depart = aeCtl.getById(b.depart)
				b.arrivee = aeCtl.getById(b.arrivee)
			})
		})

		return results
	}
}