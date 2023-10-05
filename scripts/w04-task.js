/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Fernando Caballero", photo: "images/Fernando_Caballero.jpg", favoriteFoods: [
        "Chocolate", "Pasta", "Pizza", "Hot dogs"
    ], hobbies: [
        "Play the guitar",
        "Read",
        "Watch movies"
    ], placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: "Mendoza, Argentina",
    lenght: "2 years",
      
});
myProfile.placesLived.push({
    place: "Piriapolis, Uruguay",
    lenght: "32 years",
      
});



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
const photo = document.getElementById("photo")
photo.setAttribute("src", `${myProfile.photo}`);
photo.setAttribute("alt", `${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food =>{
   let li =  document.createElement("li");
   li.textContent = food;
   document.querySelector("#favorite-foods").appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobbie =>{
    let lix =  document.createElement("li");
    lix.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(lix);
 })

/* Places Lived DataList */

myProfile.placesLived.forEach(placex =>{
    let dt =  document.createElement("dt");
    dt.textContent = placex.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd =  document.createElement("dd");
    dd.textContent = placex.lenght;
    document.querySelector("#places-lived").appendChild(dd);


 })
