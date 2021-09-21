import  express  from 'express'

const ReservationRoute = express()

ReservationRoute.get('/getall', (req,res) => {
    res.status(200).json(reservation)
})

ReservationRoute.get('/get/:id', (req,res) => {
    res.status(200).json(reservation[parseInt(req.params.id)])
})

ReservationRoute.post('/add', (req, res) => {
    reservation.push(req.body)
    res.status(200).json(reservation)
})

export {ReservationRoute}