console.log('JS OK')

// Recupero gli elementi necessari dal DOM 
const userChoice = document.getElementById('difficult')
const playButton = document.querySelector('button')
const cellContainer = document.getElementById('gameElement')


// Variabile che crea una casella con la classe cell 
const cell = (a) => {
    const cell = document.createElement('div')
    cellContainer.appendChild(cell)
    cell.classList.add('cell')
    cell.classList.add(a)
    // TODO Remove 
    // cell.append('asd')
    return cell
} 


playButton.addEventListener('click', function(){
    // Al click pulisco il DOM (nel caso volessi rifare un'altra partita)
    cellContainer.innerHTML = ``
    
    // Recupero il valore della difficoltà di gioco 
    const difficult = userChoice.value ;

    let cells = 0;
    if (difficult === "hard") cells = 100;
    if (difficult === "medium") cells = 81;
    if (difficult === "easy") cells = 49;
    // Creo il ciclo for che mi crea le caselle nel DOM 
    for (let i = 0; i < cells; i++){
        cell(difficult);
    }

})

