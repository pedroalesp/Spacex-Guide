const fetchData = require('../utils/fetchData')
const API = 'https://api.spacexdata.com/v3/capsules/'
const text0 = document.getElementById("text0")


class Capsules {
    constructor () {
        this.getData(API)
    }

    getData = async (api) => {
        try {
            const data = await fetchData(api)
            this.getCapsules(data)
        } catch (error) {
            console.error(error)
        }
    }

    getCapsules (api_data) {

        for (let i = 0; i < api_data.length; i++) {

            const serial = api_data[i].capsule_serial
            const id = api_data[i].capsule_id
            const status = api_data[i].status
            const launch = api_data[i].original_launch
            const details = api_data[i].details
            let capsules = {serial, id, status, launch, details}
            text0.innerHTML = "holaa"
        }

    }
}

let getAllCapsules = new Capsules()