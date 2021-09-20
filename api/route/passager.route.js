import  express  from 'express'

const PassagerRoute = express()

PassagerRoute.get('/passagers', (req, res) =>
{
    res.status(200).json(passagers)
})

PassagerRoute.get('/passager/:id', (req, res) =>
{
    res.status(200).json(passagers[parseInt(req.params.id)])
})

PassagerRoute.get('/passagers/vols/:id/:date', (req, res) =>
{
    const result = billets.filter(b => b.id_vol === parseInt(req.params.id) && b.date === req.params.date)
    res.status(200).json(result)
})

PassagerRoute.post('/passager', (req, res) =>
{
    passagers.push(req.body)
    res.status(200).json(passagers)
})

export {PassagerRoute}