export class Reservation 
{
	code
	passager
	utilisateur
	payed_price
	billets

	constructor( passager, utilisateur, payed_price, billets, code = undefined) 
	{
		this.code = code
		this.passager = passager
		this.utilisateur = utilisateur
		this.payed_price = payed_price
		this.billets = billets
	}
}