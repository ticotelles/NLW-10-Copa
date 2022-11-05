function createGame(player1, hour, player2){
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
        </li>
    `
}

let delay = -0.3;
function createCard(date,day,games){
    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}">
        <h2>${date} <span>${day}</span></h2>
            <ul>
               
            ${games}
               
            </ul>
    </div>
    
    `
}

document.querySelector('#cards').innerHTML = 

   createCard('24/11', 'quinta', createGame('brazil', '16:00', 'cameroon')
   + createGame('hungary', '16:00', 'argentina')
   + createGame('colombia', '16:00', 'japan'))

   +

   createCard('28/11', 'segunda', createGame('brazil', '13:00', 'argentina')
    + createGame('brazil', '13:00', 'argentina')
    + createGame('hungary', '16:00', 'argentina'))

    +

   createCard('02/12','sexta', createGame('brazil', '16:00', 'hungary')
   + createGame('hungary', '16:00', 'argentina')
   + createGame('colombia', '16:00', 'japan'))
   

