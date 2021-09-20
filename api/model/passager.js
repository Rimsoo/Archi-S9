export class Passager 
{
	id
	nom
	prenom
	
	constructor( nom, prenom, id = undefined)
	{
		this.id = id
		this.nom = nom
		this.prenom = prenom
	}
}