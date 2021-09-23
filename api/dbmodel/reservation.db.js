export class Reservation 
{
	id
	id_passager
	id_utilisateur
	payed_price

	constructor( id_passager, id_utilisateur, payed_price, id = undefined) 
	{
		this.id = id
		this.id_passager = id_passager
		this.id_utilisateur = id_utilisateur
		this.payed_price = payed_price
	}
}