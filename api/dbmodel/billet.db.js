export class Billet 
{
	code
	code_vol
	date
	classe
	code_reservation

	constructor( code_vol, date, classe, code_reservation, code = undefined)
	{
		this.code = code
		this.code_vol = code_vol
		this.date = date
		this.classe = classe
		this.code_reservation = code_reservation
	}
}