const API = 'https://api.spacexdata.com/v3/rockets/'

class Rockets {
    constructor () {
        this.getData(API)
        this.totalRockets = []
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

            const name = api_data[i].rocket_name
            const cost = api_data[i].cost_per_launch
            const success_pct = api_data[i].success_rate_pct
            const first_flight = api_data[i].first_flight
            const country = api_data[i].country
            const height = api_data[i].height.meters
            const diameter = api_data[i].diameter.meters
            const mass = api_data[i].mass.kg
            const description = api_data[i].description
            const image = api_data[i].flickr_images[1]
            let rockets = {name, cost, success_pct, first_flight, country, height, diameter, mass, description, image}
            this.totalRockets.push(rockets)
        }
        this.builtCard(this.totalRockets)
    }

    builtCard(rockets) {
        for (let i = 0; i < this.totalRockets.length; i++) {
            const cardContent = cardGenerator_Rockets(this.totalRockets[i])
            }
    }
}

let getAllRockets = new Rockets()