import {User} from '../model/user.js'

export class UserController
{
	static users = [
		new User("pouet", "oiuet@pouet.com", "********"),
		new User("patate", "patate@pouet.com", "********")
	]

	getAll()
	{
		return UserController.users;
	}

	getUser(id)
	{
		return UserController.users[id]
	}

	addUser(user)
	{
		UserController.users.push(user)
	}
}