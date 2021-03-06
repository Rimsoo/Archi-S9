import  express  from 'express'
import { UserController } from '../controller/user.controller.js'
import { User } from '../model/user.js'

const UserRoute = express()

UserRoute.get(['/getall', '/'], (req, res) =>
{
    const ctl = new UserController()
    const result = ctl.getAll()
    
    if(!result)
    {
        res.status(500).send("Internal Error")
        return
    }

    res.status(200).json(result)
})

UserRoute.get('/get/:id', (req, res) =>
{
    const id = parseInt(req.params.id)
    if (id === undefined) {
        res.status(403).send("Invalid User Id")
        return
    }
    
    const ctl = new UserController()
    const result = ctl.getUser(id)
    if (!result) {
        res.status(404).send("User Not FOund")
        return
    }

    res.status(200).json(result)
})

UserRoute.post('/add', (req, res) =>
{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
    if (!name || !email || !password) {
        res.status(403).send("Invalid User Informations")
        return
    }

    const ctl = new UserController()
    const user = new User(name, email, password)
    ctl.addUser(user)

    res.status(200).json(ctl.getAll())
})

export {UserRoute}