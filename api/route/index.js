import {AeroportRoute} from "./aeroport.route.js"
import {BilletRoute} from "./billet.route.js"
import {PassagerRoute} from "./passager.route.js"
import {ReservationRoute} from "./reservation.route.js"
import {UserRoute} from "./user.route.js"
import {VolRoute} from "./vol.route.js"
import {PlaneRoute} from "./plane.route.js"

export function buildRoute(app)
{
	app.use('/aeroports', AeroportRoute)
	app.use('/billets', BilletRoute)
	app.use('/passagers', PassagerRoute)
	app.use('/reservations', ReservationRoute)
	app.use('/users', UserRoute)
	app.use('/vols', VolRoute)
	app.use('/planes', PlaneRoute)
}