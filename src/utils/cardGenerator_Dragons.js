const content = document.getElementById('content_container')

const cardGenerator_Dragons = (dragons_data) => {
    const card = document.createElement('div')
    //const subcard = document.createElement('div')
    const imageCard = document.createElement('div')

    card.innerHTML =
    `<p><strong>Name:</strong> ${dragons_data.name}</p>
     <p><strong>Type:</strong> ${dragons_data.type}</p>
     <p><strong>Years on orbit:</strong> ${dragons_data.years_on_orbit}</p>
     <p><strong>Crew capacity:</strong> ${dragons_data.capacity}</p>
     <p><strong>Diameter:</strong> ${dragons_data.diameter} meters</p>
     <p><strong>Height:</strong> ${dragons_data.height} meters</p>
     <p><strong>Launch payload mass:</strong> ${dragons_data.launch_payload_mass} kg</p>
     <p><strong>Return payload mass:</strong> ${dragons_data.return_payload_mass} kg</p>
     <p><strong>Thrusters fuel:</strong> ${dragons_data.thrusters_fuel_1} and ${dragons_data.thrusters_fuel_2}</p>
     <p><strong>Description:</strong> ${dragons_data.description}</p>`
     //subcard.innerHTML =
    imageCard.innerHTML =
    `<img src=${dragons_data.image}>`
    
    content.appendChild(card)
    //card.appendChild(subcard)
    card.appendChild(imageCard)
    card.classList.add('cards')
    card.classList.add('cards__dragons')
    imageCard.classList.add('cards__dragons--img')
    //subcard.classList.add('subcards')

}