import {User} from '../model/user.js'

export class UserController
{
	users = [
		new User("pouet", "oiuet@pouet.com", "********"),
		new User("patate", "patate@pouet.com", "********")
	]

	getAll()
	{
		return this.users;
	}
}