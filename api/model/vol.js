export class Vol 
{
	code
	departure
	arrival
	base_price
	plane

	constructor( departure, arrival, base_price, plane, code = undefined)
	{
		this.code = code
		this.departure = departure
		this.arrival = arrival
		this.base_price = base_price
		this.plane = plane
	}
}