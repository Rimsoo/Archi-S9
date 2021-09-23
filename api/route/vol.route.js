import  express  from 'express'
import request from 'request'
import { VolController } from '../controller/vol.controller.js'

const VolRoute = express()

VolRoute.get(['/getall', '/'], (req,res) => {
    const ctl = new VolController()
	const result = ctl.getAll()

    request('https://api-6yfe7nq4sq-uc.a.run.app/flights', { json: true }, (err, res, body) => {
        if (err) { return console.log(err) }
        res.body.forEach(f => {
            result.push(f)
        });
    }); 

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