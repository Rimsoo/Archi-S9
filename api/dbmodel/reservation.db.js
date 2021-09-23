export class Reservation 
{
	code
	code_passager
	code_utilisateur
	payed_price

	constructor( code_passager, code_utilisateur, payed_price, code = undefined) 
	{
		this.code = code
		this.code_passager = code_passager
		this.code_utilisateur = code_utilisateur
		this.payed_price = payed_price
	}
}