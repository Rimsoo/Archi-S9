export class Vol 
{
	id
	depart
	arrivee
	prix
	place

	constructor( depart, arrivee, prix, place, id = undefined)
	{
		this.id = id
		this.depart = depart
		this.arrivee = arrivee
		this.prix = prix
		this.place = place
	}
}