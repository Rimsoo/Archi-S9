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

VolRoute.get('/id/:dep/:arr', (req,res) => {
    const dep = parseInt(req.params.dep)
    const arr = parseInt(req.params.arr)

    if (dep === undefined || arr === undefined) {
        res.status(403).send("Invalid Aeroports Names")
        return
    }
    
    const ctl = new VolController()
    const result = ctl.getIdDepArr(dep, arr)
    if (!result) {
        res.status(500).send("Internal Error")
        return
    }

    res.status(200).json(result)
})

VolRoute.get('/name/:dep/:arr', (req,res) => {
    const dep = req.params.dep
    const arr = req.params.arr

    if (!dep || !arr) {
        res.status(403).send("Invalid Aeroports Names")
        return
    }
    
    const ctl = new VolController()
    const result = ctl.getNameDepArr(dep, arr)
    if (!result) {
        res.status(500).send("Internal Error")
        return
    }

    res.status(200).json(result)
})

export {VolRoute}