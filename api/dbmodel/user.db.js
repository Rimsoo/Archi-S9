export class User 
{
	id
	pseudo
	email
	password

	constructor( pseudo, email, password, id = undefined)
	{
		this.id = id
		this.pseudo = pseudo
		this.email = email
		this.password = password
	}
}