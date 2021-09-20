export class Reservation 
{
	id_passager;
	id_utilisateur;

	constructor(id_passager, id_utilisateur) {
		this.id_passager = id_passager;
		this.id_utilisateur = id_utilisateur;
	}
}