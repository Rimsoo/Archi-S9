const express = require('express')
const app = express()
app.use(express.json())

const aeroports = [
    {name : "CDG", ville : "Paris"},
    {name : "JFK", ville : "New York"},
    {name : "DTW", ville : "Detroit"}
]
const vols = [
    {depart : 1, arrivee : 0, prix : "1000", places : "1000"},
    {depart : 0, arrivee : 2, prix : "700", places : "700"},
    {depart : 2, arrivee : 1, prix : "300", places : "300"},
    {depart : 0, arrivee : 1, prix : "1000", places : "1000"},
    {depart : 2, arrivee : 0, prix : "700", places : "700"},
    {depart : 1, arrivee : 2, prix : "300", places : "300"},
]
const voyages = [
    { id_passager: 0, id_utilisateur : 0, id_billet: [0,1] },
    { id_passager: 1, id_utilisateur : 0, id_billet: [2,3] },
    { id_passager: 2, id_utilisateur : 0, id_billet: [4,5] },
    { id_passager: 3, id_utilisateur : 1, id_billet: [6] },
]
const billets = [
    {id_vol: 0, date : "10-10-2019", class : 1},
    {id_vol: 1, date : "10-10-2019", class : 2},
    {id_vol: 0, date : "10-10-2019", class : 1},
    {id_vol: 1, date : "10-10-2019", class : 2},
    {id_vol: 0, date : "10-10-2019", class : 1},
    {id_vol: 1, date : "10-10-2019", class : 2},
    {id_vol: 3, date : "11-10-2019", class : 1},
]
const passagers = [
    {nom : "toto", prenom : "tata"},
    {nom : "test", prenom : "toast"},
    {nom : "Pass", prenom : "un"},
    {nom : "Poiass", prenom : "deux"},
]
const users = [
    {pseudo: "pouet", email :"oiuet@pouet.com", passwod : "********"},
    {pseudo: "patate", email :"patate@pouet.com", passwod : "********"}
]

app.get('/aeroports', (req,res) => {
    res.status(200).json(aeroports)
})

app.get('/aeroport/:id', (req,res) => {
    const ae = aeroports.find(a => a.name === req.params.id)
    res.status(200).json(ae)
})

app.get('/billets', (req,res) => {
    res.status(200).json(billets)
})

app.post('/billet', (req, res) => {
    billets.push(req.body)
    res.status(200).json(billets)
})

app.get('/voyages', (req,res) => {
    res.status(200).json(voyages)
})

app.get('/voyage/:id', (req,res) => {
    res.status(200).json(voyages[parseInt(req.params.id)])
})

app.post('/voyage', (req, res) => {
    voyages.push(req.body)
    res.status(200).json(voyages)
})

app.get('/vols', (req,res) => {
    res.status(200).json(vols)
})

app.get('/vols/id/:dep/:arr', (req,res) => {
    var results = vols.filter(v => v.depart === parseInt(req.params.dep) && v.arrivee === parseInt(req.params.arr))
    vols.forEach(d => {
        if (d.depart === parseInt(req.params.dep) && d.arrivee !== parseInt(req.params.arr)) {
            vols.forEach(a => {
                if(a.arrivee === parseInt(req.params.arr) && a.depart === d.arrivee) {
                    results.push([d, a]);
                }
            });
        }
    });
    res.status(200).json(results)
})

app.get('/vols/name/:dep/:arr', (req,res) => {
    var results = vols.filter(v => aeroports[v.depart].name === req.params.dep && aeroports[v.arrivee].name === req.params.arr)
    vols.forEach(d => {
        if (aeroports[d.depart].name === req.params.dep && aeroports[d.arrivee].name !== req.params.arr) {
            vols.forEach(a => {
                if(aeroports[a.arrivee].name === req.params.arr && a.depart === d.arrivee) {
                    results.push([d, a]);
                }
            });
        }
    });
    res.status(200).json(results)
})

app.get('/passagers', (req, res) =>
{
    res.status(200).json(passagers)
})

app.get('/passager/:id', (req, res) =>
{
    res.status(200).json(passagers[parseInt(req.params.id)])
})

app.get('/passagers/vols/:id/:date', (req, res) =>
{
    const result = billets.filter(b => b.id_vol === parseInt(req.params.id) && b.date === req.params.date)
    res.status(200).json(result)
})

app.post('/passager', (req, res) =>
{
    passagers.push(req.body)
    res.status(200).json(passagers)
})

app.get('/users', (req, res) =>
{
    res.status(200).json(users)
})

app.get('/user/:id', (req, res) =>
{
    res.status(200).json(users[parseInt(req.params.id)])
})

app.post('/user', (req, res) =>
{
    passagers.push(req.body)
    res.status(200).json(passagers)
})

app.listen(3000, () => {
	console.log("Serveur à l'écoute 3000")
})