import { Plane } from "../model/plane.js"

export class PlaneController
{
	static planes = [
		new Plane("AIRBUS350", 1000),
		new Plane("AIRBUS750", 700),
		new Plane("AIRBUS950", 300)
	]

	getAll()
	{
		return PlaneController.planes
	}

	getPlane(name)
	{
		return PlaneController.planes.find(a => a.name === name)
	}
}