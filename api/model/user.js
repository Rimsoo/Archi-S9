export class User 
{
	id
	name
	email
	password

	constructor( name, email, password, id = undefined)
	{
		this.name = name
		this.email = email
		this.password = password
	}
}