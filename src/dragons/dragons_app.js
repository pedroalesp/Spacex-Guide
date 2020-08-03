//const fetchData = require('../utils/fetchData')
const API = 'https://api.spacexdata.com/v3/dragons/'

class Capsules {
    constructor () {
        this.getData(API)
        this.totalDragons = []
    }

    getData = async (api) => {
        try {
            const data = await fetchData(api)
            this.getContent(data)
        } catch (error) {
            console.error(error)
        }
    }

    getContent (api_data) {

        for (let i = 0; i < api_data.length; i++) {

            const name = api_data[i].name
            const type = api_data[i].type
            const capacity = api_data[i].crew_capacity
            const years_on_orbit = api_data[i].orbit_duration_yr
            const thrusters_fuel_1 = api_data[i].thrusters[0].fuel_1
            const thrusters_fuel_2 = api_data[i].thrusters[0].fuel_2
            const launch_payload_mass = api_data[i].launch_payload_mass.kg
            const return_payload_mass = api_data[i].return_payload_mass.kg
            const height = api_data[i].height_w_trunk.meters
            const diameter = api_data[i].diameter.meters
            const description = api_data[i].description
            const image = api_data[i].flickr_images[2]
            let dragons = {name, type, capacity, years_on_orbit, thrusters_fuel_1, thrusters_fuel_2,
                launch_payload_mass, return_payload_mass, height, diameter, description, image}
            this.totalDragons.push(dragons)
        }
        this.builtCard(this.totalDragons)
    }

    builtCard(dragons) {
        for (let i = 0; i < this.totalDragons.length; i++) {
            const cardContent = cardGenerator_Dragons(this.totalDragons[i])
            }
    }
}

let getAllCapsules = new Capsules()