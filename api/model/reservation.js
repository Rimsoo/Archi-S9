export class Reservation 
{
	id
	id_passager
	id_utilisateur

	constructor( id_passager, id_utilisateur, id = undefined) 
	{
		this.id = id
		this.id_passager = id_passager
		this.id_utilisateur = id_utilisateur
	}
}