const content = document.getElementById('content_container')

const cardGenerator = (capsule_data) => {
    const card = document.createElement('div')
    const subcard = document.createElement('div')

    card.innerHTML =
    `<p><strong>Capsule Serial:</strong> ${capsule_data.serial}</p>
     <p><strong>Capsule ID:</strong> ${capsule_data.id}</p>`

    subcard.innerHTML =
    `<p><strong>Capsule Status:</strong> ${capsule_data.status}</p>
    <p><strong>Launch:</strong> ${capsule_data.launch}</p>
    <p><strong>Details:</strong> ${capsule_data.details}</p>`

    content.appendChild(card)
    card.appendChild(subcard)
    card.classList.add('cards')
    subcard.classList.add('subcards')
    
    
    
    
}