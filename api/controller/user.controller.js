import {User} from '../model/user.js'

export class UserController
{
	static users = [
		new User("pouet", "oiuet@pouet.com", "********", 0),
		new User("patate", "patate@pouet.com", "********", 1)
	]

	getAll()
	{
		return UserController.users;
	}

	getUser(id)
	{
		return UserController.users.find(e => e.id === id)
	}

	addUser(user)
	{
        user.id = UserController.users.length
		UserController.users.push(user)
	}
}