export class Billet 
{
	id
	vol
	date
	classe

	constructor( vol, date, classe, id = undefined)
	{
		this.id = id
		this.vol = vol
		this.date = date
		this.classe = classe
	}
}