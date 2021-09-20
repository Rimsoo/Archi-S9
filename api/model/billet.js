export class Billet 
{
	id_vol;
	date;
	classe;
	id_reservation;

	constructor (id_vol, date, classe, id_reservation)
	{
		this.id_vol = id_vol;
		this.date = date;
		this.classe = classe;
		this.id_reservation = id_reservation;
	}
}