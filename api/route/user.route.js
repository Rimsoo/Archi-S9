import  express  from 'express'

const UserRoute = express()

UserRoute.get('/users', (req, res) =>
{
    res.status(200).json(users)
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