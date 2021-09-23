export class Billet 
{
	code
	vol
	date
	classe

	constructor( vol, date, classe, code = undefined)
	{
		this.code = code
		this.vol = vol
		this.date = date
		this.classe = classe
	}
}