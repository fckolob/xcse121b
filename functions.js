let firstName = 'Antonia';
let lastName = 'Francesca';
function fullName(first, last){
    return `${first} ${last}`;
}
//const fullName = function(first, last){return `${first} ${last}`};

//const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(fullName (firstName, lastName))
//const box = document.getElementById("fullName");
//const text = document.createTextNode(`${fullName(firstName, lastName)}`);
//box.appendChild(text);
//document.querySelector("#fullName").innerHTML = fullName(firstName, lastName)
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);