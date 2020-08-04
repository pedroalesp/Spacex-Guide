const content = document.getElementById('content_container')

const cardGenerator_Rockets = (rockets_data) => {
    const card = document.createElement('div')
    //const subcard = document.createElement('div')
    const imageCard = document.createElement('div')

    card.innerHTML =
    `<p><strong>Name:</strong> ${rockets_data.name}</p>
    <p><strong>Cost per launch:</strong> ${rockets_data.cost}$</p>
    <p><strong>Success percent:</strong> ${rockets_data.success_pct}</p>
    <p><strong>Firts flight:</strong> ${rockets_data.first_flight}</p>
    <p><strong>Diameter:</strong> ${rockets_data.diameter} meters</p>
    <p><strong>Height:</strong> ${rockets_data.height} meters</p>
    <p><strong>Mass:</strong> ${rockets_data.mass} kg</p>
    <p><strong>Country:</strong> ${rockets_data.country}</p>
    <p><strong>Description:</strong> ${rockets_data.description}</p>`
     //subcard.innerHTML =
    imageCard.innerHTML =
    `<img src=${rockets_data.image}>`
    
    content.appendChild(card)
    //card.appendChild(subcard)
    card.appendChild(imageCard)
    card.classList.add('cards')
    card.classList.add('cards__dragons')
    imageCard.classList.add('cards__dragons--img')
    //subcard.classList.add('subcards')
}