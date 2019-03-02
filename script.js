/**
 * Created by USER on 02.03.2019.
 */
const formContainer = document.getElementById('formContainer');
const container = document.getElementById('container');

const inputElem1 = document.createElement('input');
inputElem1.className = 'input__row';
inputElem1.idName = 'input_form';
inputElem1.setAttribute('value', 5);
formContainer.appendChild(inputElem1);

const inputElem2 = document.createElement('input');
inputElem2.className = 'input__column';
inputElem2.setAttribute('value', 4);
formContainer.appendChild(inputElem2);

const resultButton = document.createElement('button');
resultButton.className = 'result__button';
resultButton.setAttribute('type', 'submit');
resultButton.setAttribute('onclick', 'getValue()');
resultButton.innerHTML = 'Create table';
formContainer.appendChild(resultButton);

const x = document.getElementsByTagName('input')[0].value;
console.log(x);

const y = document.getElementsByTagName('input')[1].value;
console.log(y);

/*function getValue(){
 var text = document.getElementById("input_form").value;
 alert(text);
 }*/
//container.insertBefore(inputElem, container.firstChild);
//container.appendChild(inputElem);
//inputElem.appendChild(inputElem, inputElem);
//inputElem.innerHTML = 'Новый элемент';
//inputElem.innerHTML = 'Новый элемент списка';

function createTable(x,y) {
    const row = x;
    const column = y;

    const tableContainer = document.createElement('table');
    const tableBody = document.createElement('tbody');

    const rowElem = [];
    const columnElem = [];

    for ( let i = row; i > 0; i-- ){
        rowElem[i] = document.createElement('tr');
        rowElem[i].className = 'row';


        for ( let j = column; j > 0; j-- ){
            columnElem[j] = document.createElement('td');
            columnElem[j].className = `${i}\.${j}`;
            rowElem[i].appendChild(columnElem[j]);
        }

        tableBody.appendChild(rowElem[i]);

    }
    tableContainer.appendChild(tableBody);
    container.appendChild(tableContainer);
}

createTable(x,y);