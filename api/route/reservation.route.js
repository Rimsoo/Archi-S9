import  express  from 'express'

const ReservationRoute = express()

ReservationRoute.get('/reservations', (req,res) => {
    res.status(200).json(reservation)
})

ReservationRoute.get('/reservation/:id', (req,res) => {
    res.status(200).json(reservation[parseInt(req.params.id)])
})

ReservationRoute.post('/reservation', (req, res) => {
    reservation.push(req.body)
    res.status(200).json(reservation)
})

export {ReservationRoute}