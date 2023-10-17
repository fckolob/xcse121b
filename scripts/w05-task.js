/* W05: Programming Tasks */

/* Declare and initialize global variables */

let templeList = [];
const templesElement = document.querySelector("#temples");
/* async displayTemples Function */
function  displayTemples(templeList) {
    
    templeList.forEach(temple => {
        const article = document.createElement("article");
        const templeNameH3 = document.createElement("h3");
        templeNameH3.innerHTML = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(templeNameH3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};



/* async getTemples Function using fetch()*/
async function getTemples () {
    
    const response = await fetch( "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
    
    
    
    

    
}
getTemples();






/* reset Function */
function reset(){
    templesElement.innerHTML = null;
    

}

/* sortBy Function */


function sortBy(temples){
   
    
    let filter = document.querySelector("#sortBy");
    let filterValue = filter.value;
   
    reset();
    switch(filterValue){
        case "utah":
            console.log(filterValue);
           const utahTemples = temples.filter (function(temples){
            return temples.location.includes("Utah")
           }) ;
           console.log(utahTemples);
           displayTemples(utahTemples);
           break
        case "notutah":
            console.log(filterValue);
            const notUtahTemples = temples.filter (function(temples){
                return (!temples.location.includes("Utah"))});
            displayTemples(notUtahTemples);
            break
        case "older":
            console.log(filterValue);
            const olderTemples = temples.filter(temple => Date.parse(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break
        case "all":
            console.log(filterValue);
            displayTemples(temples);
            break

}}





/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});