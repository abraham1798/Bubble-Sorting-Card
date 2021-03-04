let btn = document.querySelector('#btnSend');
var cuantity = document.querySelector('#cuantity');
let buttonsDiv = document.querySelector('.buttons');
let list = [];

// Nuestra primera funcion lo que hace es obtener el valor de cuantity y crea la cantidad de 
// cartas con respecto a ese valor

btn.addEventListener('click', () => {
    let cards = cuantity.value;
    let container = document.querySelector('.cards');

    for (let i = 0; i < cards; i++) {
        let symbol = getSymbol(getRandom(4));
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

        let parent = document.createElement('div');
        parent.style.backgroundColor = 'white';
        parent.style.color = 'black';
        parent.style.width = '7%';
        parent.style.height = '7%';
        parent.classList.add('card');
        parent.style.margin = '0 5px 5px 5px';

        let top = document.createElement('div');
        top.innerHTML = symbol;
        top.classList.add('top');


        let middle = document.createElement('div');
        middle.innerHTML = numbers[getRandom(10)];
        middle.classList.add('body');

        let bottom = document.createElement('div');
        bottom.innerHTML = symbol;
        bottom.classList.add('bottom');

        if (symbol === '\u2660' || symbol === '\u2663') {
            top.style.color = 'black';
            bottom.style.color = 'black';
        }

        parent.appendChild(top);
        parent.appendChild(middle);
        parent.appendChild(bottom);
        container.appendChild(parent);

        list.push(parent);
    }

    let bubble = document.createElement('button');
    bubble.classList.add('bubbleBtn');
    bubble.setAttribute('type', 'button');
    bubble.innerHTML = 'Sort with bubble method';
    let selection = document.createElement('button');
    selection.classList.add('selectionBtn');
    selection.innerHTML = 'Sort with selection method';
    selection.setAttribute('type', 'button');
    buttonsDiv.appendChild(bubble);
    buttonsDiv.appendChild(selection);

    bubble.addEventListener('click', sorting);
    selection.addEventListener('click', selectionSort);
});

function getRandom(max) {
    return Math.floor(Math.random() * (max - 1) + 1);
}
function getSymbol(option) {
    switch (option) {
        case 1:
            let spades = '\u2660';
            return spades;
            break;
        case 2:
            let trebols = '\u2663';
            return trebols;
            break;
        case 3:
            let hearts = '\u2665';
            return hearts;
            break;

        default:
            hearts = '\u2665';
            return hearts;
            break;
    }
}


const sorting = () => {
    alert('WHEN YOU PRESS THE BUBBLE BUTTON, THE CARDS ARE GOING TO SORT FROM MIN TO MAX');
    let wall = list.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
        let i = 0;
        let j = i + 1
        while (i < wall) {
            //compare the adjacent positions, if the right one is bigger, we have to swap
            if (Number(list[i].childNodes[1].innerHTML) > Number(list[j].childNodes[1].innerHTML)) {
                console.log(typeof(list[i].childNodes[1].innerHTML));
                let aux = list[i];
                list[i] = list[j];
                list[j] = aux;
            }
            i++;
            j++;
        }
        wall--; //decrease the wall for optimization
    }
    let sortedDiv = document.querySelector('.sortedCards');
    showCards(list, sortedDiv); //we call our function and send our sorted array and where we gonna place it 
}



const selectionSort = ()=>{
    alert('WHEN YOU PRESS THE SORT BUTTON, THE CARDS ARE GOING TO SORT FROM MAX TO MIN');
    let min = 0;
    while (min < list.length-1){
        for(let i = min+1; i < list.length; i++) {
          if (Number(list[min].childNodes[1].innerHTML) < Number(list[i].childNodes[1].innerHTML)) {
            let aux = Number(list[min].childNodes[1].innerHTML);
            list[min].childNodes[1].innerHTML = Number(list[i].childNodes[1].innerHTML);
            list[i].childNodes[1].innerHTML = Number(aux);
          }
        }
        min++;
    }
    let selectionSorted = document.querySelector('.selectionSort');
    showCards(list, selectionSorted); //we call our function and send our sorted array and where we gonna place it 
}

const showCards = (list, div)=>{
    for(let i = 0; i<list.length;i++){
        let symbol = list[i].childNodes[0].innerHTML;
        let numbers = list[i].childNodes[1].innerHTML; //14

        let parent = document.createElement('div');
        parent.style.backgroundColor = 'white';
        parent.style.color = 'black';
        parent.style.width = '7%';
        parent.style.height = '7%';
        parent.classList.add('card');
        parent.style.margin = '0 5px 5px 5px';

        let top = document.createElement('div');
        top.innerHTML = symbol;
        top.classList.add('top');

        let middle = document.createElement('div');
        middle.innerHTML = numbers;
        middle.classList.add('body');

        let bottom = document.createElement('div');
        bottom.innerHTML = symbol;
        bottom.classList.add('bottom');

        if (symbol === '\u2660' || symbol === '\u2663') {
            top.style.color = 'black';
            bottom.style.color = 'black';
        }

        parent.appendChild(top);
        parent.appendChild(middle);
        parent.appendChild(bottom);
        div.appendChild(parent);
    }
}