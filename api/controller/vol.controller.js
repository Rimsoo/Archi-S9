import {Vol} from '../model/vol.js'
import request from 'request'
import axios from 'axios'
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

	async getAllExt()
	{
		let result = await axios.get('https://api-6yfe7nq4sq-uc.a.run.app/flights')
		return result.data
	}

	getVol(code)
	{
		return VolController.vols.find(e => e.code === code)
	}

	async getDepArr(dep, arr)
	{
		var vols = VolController.vols
		const ext = await this.getAllExt()
		ext.forEach(r => vols.push(r))
		
		var results = []
		results.push([vols.find(v => 
			v.departure === dep && v.arrival === arr)])
		
		vols.forEach(d => {
			if (d.departure === dep && d.arrival !== arr) {
				vols.forEach(a => {
					if(a.arrival === arr && a.departure === d.arrival) {
						results.push([d, a])
					}
				})
			}
		})

		return results
	}
}