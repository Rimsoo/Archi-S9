export class Billet 
{
	id
	id_vol
	date
	classe

	constructor( id_vol, date, classe, id = undefined)
	{
		this.id = id
		this.id_vol = id_vol
		this.date = date
		this.classe = classe
	}
}