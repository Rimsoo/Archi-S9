const express = require('express')
const app = express()
app.use(express.json())

const aeroports = [
    {name : "CDG", ville : "Paris"},
    {name : "JFK", ville : "New York"},
    {name : "DTW", ville : "Detroit"}
]
const vols = [
    {depart : "JFK", arrivee : "CDG", prix : "1000", places : "1000"},
    {depart : "CDG", arrivee : "DTW", prix : "700", places : "700"},
    {depart : "DTW", arrivee : "JFK", prix : "300", places : "300"},
    {depart : "CDG", arrivee : "JFK", prix : "1000", places : "1000"},
    {depart : "DTW", arrivee : "CDG", prix : "700", places : "700"},
    {depart : "JFK", arrivee : "DTW", prix : "300", places : "300"},
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

app.get('/vols/:dep/:arr', (req,res) => {
    var results = vols.filter(v => v.depart === req.params.dep && v.arrivee === req.params.arr)
    vols.forEach(d => {
        if (d.depart === req.params.dep && d.arrivee !== req.params.arr) {
            vols.forEach(a => {
                if(a.arrivee === req.params.arr && a.depart === d.arrivee) {
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