import {AeroportRoute} from "./aeroport.route.js"
import {BilletRoute} from "./billet.route.js"
import {PassagerRoute} from "./passager.route.js"
import {ReservationRoute} from "./reservation.route.js"
import {UserRoute} from "./user.route.js"
import {VolRoute} from "./vol.route.js"

export function buildRoute(app)
{
	app.use(AeroportRoute)
	app.use(BilletRoute)
	app.use(PassagerRoute)
	app.use(ReservationRoute)
	app.use(UserRoute)
	app.use(VolRoute)
}