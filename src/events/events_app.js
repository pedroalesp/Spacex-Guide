const API = 'https://api.spacexdata.com/v3/history'

class Events {
    constructor () {
        this.getData(API)
        this.totalEvents = []
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

            const title = api_data[i].title
            const date = api_data[i].event_date_utc
            const flight_number = api_data[i].flight_number
            const details = api_data[i].details
            let events = {title, date, flight_number, details}
            this.totalEvents.push(events)
        }
        this.builtCard(this.totalEvents)
    }

    builtCard(events) {
        for (let i = 0; i < this.totalEvents.length; i++) {
            const cardContent = cardGenerator_Events(this.totalEvents[i])
            }
    }
}

let getAllLaunches = new Events()