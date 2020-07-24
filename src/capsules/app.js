const fetchData = require('../utils/fetchData')
const API = 'https://api.spacexdata.com/v3/capsules/'

const getCapsule = async (api) => {
    try {
        const data = await fetchData(api)
        //const serial = await fetchData(`${API}${data[0].capsule_serial}`)
        console.log(`Capsule serial: ${data[0].capsule_serial}`)
        console.log(`Capsule ID: ${data[0].capsule_id}`)
        console.log(`Status: ${data[0].status}`)
        console.log(`Launch: ${data[0].original_launch}`)
        console.log(`Type: ${data[0].type}`)
        console.log(`Details: ${data[0].details}`)
    } catch (error) {
        console.error(error)
    }
}

getCapsule(API)