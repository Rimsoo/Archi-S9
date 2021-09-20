import  express  from 'express'
import { UserController } from '../controller/user.controller.js'

const UserRoute = express()

UserRoute.get('/users', (req, res) =>
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

UserRoute.get('/user/:id', (req, res) =>
{
    res.status(200).json(users[parseInt(req.params.id)])
})

UserRoute.post('/user', (req, res) =>
{
    passagers.push(req.body)
    res.status(200).json(passagers)
})

export {UserRoute}