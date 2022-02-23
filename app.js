//Variabili
const options = document.getElementById('options');
const play = document.getElementById('play');
const game = document.getElementById('game');

//Usare una funzione che genera la griglia in base all'opzione
const start = () =>{
    //Nominare la casella
    let square;
    //Nominare la colonna
    let column;

    //Generare le tre casistiche
    switch (options.value){
        case 'easy':
            //Dichiarare numero celle
            square = 100;
            //Dichiarare numero colonne
            column = 10;
            break;
        
        case 'normal':
            //Dichiarare numero celle
            square = 81;
            //Dichiarare numero colonne
            column = 9;
            break;
        case 'crazy':
            //Dichiarare numero celle
            square = 49;
            //Dichiarare numero colonne
            column = 7;
            break;
        default:
            square = 100;
            column = 10;
    }

    //Nominare le bombe
    //let= bombs;
    
    bombs = bombGenerator(16, 1, square)

    //Resettare la pagina alla fine dello swicth
    game.innerHTML = '';

    function cellCallback(){
        const element = this;
        if (isBomb(this.innerHTML,bombs)){
            element.classList.add('bombBox');
        } else{
            element.classList.add('clickedBox');
        }

        element.removeEventListener('click', cellCallback);
    }

    function isBomb(num, bombs){


        if(bombs.includes(parseInt(num))){
            return true;
        } else{
            return false;
        }
    }

    //Creare il ciclo che genera i numeri e le caselle
    for(let i = 0; i < square; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `calc(100% / ${column})`;
        box.append(i + 1);
        box.addEventListener('click', cellCallback);
        game.append(box);
    }
}

//Assegnare l'evento al button
play.addEventListener('click',start);


function bombGenerator(nBombs, min, max){
    const bombs = [];
    do{
        const num = getRandomIntInclusive(min,max);

        if(bombs.includes(num) === false){
            bombs.push(num);

        }

    } while (bombs.length < nBombs)

        console.log(bombs)
    return bombs;
}
 
//Formula numero random
function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) +min);
}