var inputName = document.getElementById("inputName");
var inputLastName = document.getElementById("inputLastName");
var inputAge = document.getElementById("inputAge");
var inputBalance = document.getElementById("inputBalance");
var output = document.getElementById("res");

var listOfPersons = [];

function addPerson() {
    if (
        inputName.value.trim() === "" ||
        inputLastName.value.trim() === "" ||
        inputAge.value.trim() === "" ||
        inputBalance.value.trim() === ""
    ) {
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

    listOfPersons.forEach(function(person, index){
        output.innerHTML += `
            <tr>
                <td>${person.name}</td>
                <td>${person.lastName}</td>
                <td>${person.age}</td>
                <td>${person.balance}</td>
                <td>
                    <button class="delete-btn" onclick="deletePerson(${index}, this)">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deletePerson(index, btn) {
    if (confirm("Rostdan ham o‘chirmoqchimisiz?")) {
        var row = btn.parentElement.parentElement;
        row.classList.add("fade-out");
        setTimeout(() => {
            listOfPersons.splice(index, 1);
            renderTable();
        }, 400);
    }
}

function randomSort() {
    for (let i = listOfPersons.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [listOfPersons[i], listOfPersons[j]] = [listOfPersons[j], listOfPersons[i]];
    }
    renderTable();
}

function sortTable(key, event) {

    var headers = document.querySelectorAll("th");
    headers.forEach(th => th.classList.remove("active"));

    event.target.classList.add("active");

    if(key === "age" || key === "balance") {
        listOfPersons.sort((a,b) => a[key] - b[key]);
    } else {
        listOfPersons.sort((a,b) => a[key].localeCompare(b[key]));
    }

    renderTable();
}