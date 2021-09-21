import  express  from 'express'
const VolRoute = express()

VolRoute.get('/getall', (req,res) => {
    res.status(200).json(vols)
})

VolRoute.get('/id/:dep/:arr', (req,res) => {
    var results = vols.filter(v => v.depart === parseInt(req.params.dep) && v.arrivee === parseInt(req.params.arr))
    vols.forEach(d => {
        if (d.depart === parseInt(req.params.dep) && d.arrivee !== parseInt(req.params.arr)) {
            vols.forEach(a => {
                if(a.arrivee === parseInt(req.params.arr) && a.depart === d.arrivee) {
                    results.push([d, a])
                }
            })
        }
    })
    res.status(200).json(results)
})

VolRoute.get('/name/:dep/:arr', (req,res) => {
    var results = vols.filter(v => aeroports[v.depart].name === req.params.dep && aeroports[v.arrivee].name === req.params.arr)
    vols.forEach(d => {
        if (aeroports[d.depart].name === req.params.dep && aeroports[d.arrivee].name !== req.params.arr) {
            vols.forEach(a => {
                if(aeroports[a.arrivee].name === req.params.arr && a.depart === d.arrivee) {
                    results.push([d, a])
                }
            })
        }
    })
    res.status(200).json(results)
})

export {VolRoute}