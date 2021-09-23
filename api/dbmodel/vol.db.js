export class Vol 
{
	code
	departure
	arrival
	base_price
	place

	constructor( departure, arrival, base_price, place, code = undefined)
	{
		this.code = code
		this.departure = departure
		this.arrival = arrival
		this.base_price = base_price
		this.place = place
	}
}