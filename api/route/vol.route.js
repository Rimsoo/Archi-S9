import  express  from 'express'
import { VolController } from '../controller/vol.controller.js'

const VolRoute = express()

VolRoute.get(['/getall', '/', '/getall/:date', '/:date'], async (req,res) => {
    const date = req.params.date
    const ctl = new VolController()
	var result = ctl.getAll()
    const ext = await ctl.getAllExt(date)
    ext.forEach(r => result.push(r));
    
    if (!result) {
		res.status(500).send("Internal Error")
        return
	}
	res.send(result)
})

VolRoute.get(['/:dep/:arr', '/:dep/:arr/:date'], async (req,res) => {
    const dep = req.params.dep
    const arr = req.params.arr
    const date = req.params.date

    if (!dep || !arr) {
        res.status(403).send("Invalid Aeroports Names")
        return
    }
    
    const ctl = new VolController()
    const result = await ctl.getDepArr(dep, arr, date)
    if (!result) {
        res.status(500).send("Internal Error")
        return
    }

    res.status(200).json(result)
})

export {VolRoute}