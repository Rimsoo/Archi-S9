import {
    Aeroport,
    Billet,
    Passager,
    Reservation,
    User,
    Vol,
} from "./model/index.js"

import express from 'express';

const app = express()
app.use(express.json())

const aeroports = [
    new Aeroport("CDG", "Paris"),
    new Aeroport("JFK", "New York"),
    new Aeroport("DTW", "Detroit")
]
const vols = [
    new Vol(1, 0, "1000", "1000"),
    new Vol(0, 2, "700", "700"),
    new Vol(2, 1, "300", "300"),
    new Vol(0, 1, "1000", "1000"),
    new Vol(2, 0, "700", "700"),
    new Vol(1, 2, "300", "300"),
]
const reservation = [
    new Reservation(0, 0),
    new Reservation(1, 0),
    new Reservation(2, 0),
    new Reservation(3, 1),
]
const billets = [
    new Billet(0, "10-10-2019", 1,0),
    new Billet(1, "10-10-2019", 2, 0),
    new Billet(0, "10-10-2019", 1, 1),
    new Billet(1, "10-10-2019", 2, 1),
    new Billet(0, "10-10-2019", 1, 2),
    new Billet(1, "10-10-2019", 2, 2),
    new Billet(3, "11-10-2019", 1, 3),
]
const passagers = [
    new Passager("toto", "tata"),
    new Passager("test", "toast"),
    new Passager("Pass", "un"),
    new Passager("Poiass", "deux"),
]
const users = [
    new User("pouet", "oiuet@pouet.com", "********"),
    new User("patate", "patate@pouet.com", "********")
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
    res.status(200).json(reservation)
})

app.get('/voyage/:id', (req,res) => {
    res.status(200).json(reservation[parseInt(req.params.id)])
})

app.post('/voyage', (req, res) => {
    reservation.push(req.body)
    res.status(200).json(reservation)
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