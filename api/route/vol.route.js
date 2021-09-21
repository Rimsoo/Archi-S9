import  express  from 'express'
import { VolController } from '../controller/vol.controller.js'

const VolRoute = express()

VolRoute.get('/getall', (req,res) => {
    const ctl = new VolController()
	const result = ctl.getAll()
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.status(200).json(result)
})

VolRoute.get('/:dep/:arr', (req,res) => {
    const dep = req.params.dep
    const arr = req.params.arr

    if (!dep || !arr) {
        res.status(403).send("Invalid Aeroports Names")
        return
    }
    
    const ctl = new VolController()
    const result = ctl.getDepArr(dep, arr)
    if (!result) {
        res.status(500).send("Internal Error")
        return
    }

    res.status(200).json(result)
})

export {VolRoute}