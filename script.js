var inputLastName = document.getElementById("inputLastName");
var inputAge = document.getElementById("inputAge");
var inputBalance = document.getElementById("inputBalance");
var output = document.getElementById("res");

var listOfPersons = [];

function addPerson() {
    if(inputName.value.trim() === "" , inputLastName.value.trim() === "" , 
       inputAge.value.trim() === "" || inputBalance.value.trim() === "") {
        alert("Iltimos, barcha maydonlarni to‘ldiring!");
        return;
    }

    listOfPersons.push({
        name: inputName.value,
        lastName: inputLastName.value,
        age: parseInt(inputAge.value),
        balance: parseFloat(inputBalance.value)
    });

    renderTable();
    inputName.value = "";
    inputLastName.value = "";
    inputAge.value = "";
    inputBalance.value = "";
}

function renderTable() {
    output.innerHTML = "";
    listOfPersons.forEach(function(person){
        output.innerHTML += "<tr><td>" + person.name + "</td><td>" + person.lastName + "</td><td>" + person.age + "</td><td>" + person.balance + "</td></tr>";
    });
}

// Tasodifiy tartiblash
function randomSort() {
    for (let i = listOfPersons.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [listOfPersons[i], listOfPersons[j]] = [listOfPersons[j], listOfPersons[i]];
    }
    renderTable();
}

// Saralash
function sortTable(key) {
    if(key === "age" || key === "balance") {
        listOfPersons.sort((a,b) => a[key] - b[key]); // kichikdan kattaga
    } else {
        listOfPersons.sort((a,b) => a[key].localeCompare(b[key])); // alfabet
    }
    renderTable();
}