/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
 async function  displayTemples(templeList) {
    
    for (let i = 0; i < templeList.lenght; i++)
        {
        let article = document.createElement("<article>");
        
        let h3 = document.createElement("h3");
        h3.setAttribute("templeName", "createElement");
        let h3Text = document.createTextNode(`${templeList[i].templeName}`)

        h3.appendChild(h3Text);
        let img = document.createElement("img");
        
        img.setAttribute("src", "createElement");
        img.setAttribute("alt", "createElement");
        img.src = templeList[i].imageUrl;
        img.alt = templeList[i].location;
        
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
        
        
        };
};



/* async getTemples Function using fetch()*/
async function getTemples () {
    displayTemples(templeList);
    const requestUrl = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const temples = await response.json();
    
    templeList.push(temples);
    displayTemples(templeList);
    
    
    

    
}
getTemples();
console.log(templeList);





/* reset Function */


/* sortBy Function */








/* Event Listener */
