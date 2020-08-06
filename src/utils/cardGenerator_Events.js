const content = document.getElementById('content_container')

const cardGenerator_Events = (events_data) => {
    const card = document.createElement('div')
    //const subcard = document.createElement('div')
    //const imageCard = document.createElement('div')

    card.innerHTML =
    `<p><strong>Event title:</strong> ${events_data.title}</p>
    <p><strong>Event date:</strong> ${events_data.date}</p>
    <p><strong>Flight number:</strong> ${events_data.flight_number}</p>
    <p><strong>Details:</strong> ${events_data.details}</p>`
     //subcard.innerHTML =
    //imageCard.innerHTML =
    //`<img src=${events_data.image}>`
    
    content.appendChild(card)
    //card.appendChild(subcard)
    //card.appendChild(imageCard)
    card.classList.add('cards')
    //card.classList.add('cards__launches')
    //imageCard.classList.add('cards__dragons--img')
    //subcard.classList.add('subcards')
}