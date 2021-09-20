import  express  from 'express'

const BilletRoute = express()

BilletRoute.get('/billets', (req,res) => {
	res.status(200).json(billets)
})

BilletRoute.post('/billet', (req, res) => {
	billets.push(req.body)
	res.status(200).json(billets)
})

export {BilletRoute}
