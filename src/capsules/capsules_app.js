//const fetchData = require('../utils/fetchData')
const API = 'https://api.spacexdata.com/v3/capsules/'
const text1 = document.getElementById('text1')

class Capsules {
    constructor () {
        this.getData(API)
        this.totalCapsules = []
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
            let capsule = {serial, id, status, launch, details}
            this.totalCapsules.push(capsule)
        }
           this.builtCard(this.totalCapsules)
    }

    builtCard(capsules_atribute) {
        for (let i = 0; i < this.totalCapsules.length; i++) {
            //console.log(this.totalCapsules[i])//reemplazar console.log por creador de carta
            this.cardGenerator(this.totalCapsules[i].serial)
            this.cardGenerator(this.totalCapsules[i].id)
            this.cardGenerator(this.totalCapsules[i].status)
            this.cardGenerator(this.totalCapsules[i].launch)
            this.cardGenerator(this.totalCapsules[i].details)
            //debugger
            }
        }
    

    cardGenerator (capsules_atribute) {
        debugger
        text1.innerHTML = capsules_atribute.toString
    }

}

let getAllCapsules = new Capsules()