import  express  from 'express'

const BilletRoute = express()

BilletRoute.get('/getall', (req,res) => {
	res.status(200).json(billets)
})

BilletRoute.post('/add', (req, res) => {
	billets.push(req.body)
	res.status(200).json(billets)
})

export {BilletRoute}
