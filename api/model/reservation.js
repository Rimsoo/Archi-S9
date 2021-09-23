export class Reservation 
{
	id
	passager
	utilisateur
	payed_price
	billets

	constructor( passager, utilisateur, payed_price, billets, id = undefined) 
	{
		this.id = id
		this.passager = passager
		this.utilisateur = utilisateur
		this.payed_price = payed_price
		this.billets = billets
	}
}