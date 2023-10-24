/* W05: Programming Tasks */

/* Declare and initialize global variables */

let productList = [];
const productsElement = document.querySelector("#productsX");
/* async displayTemples Function */
function  displayProducts(productList) {
    
    productList.forEach(product => {
        const article = document.createElement("article");
        const productNameH3 = document.createElement("h3");
        productNameH3.innerHTML = product.title;
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.description;
        article.appendChild(productNameH3);
        article.appendChild(img);
        productsElement.appendChild(article);
    });
};



/* async getTemples Function using fetch()*/
async function getProducts () {
    
    const response = await fetch( "https://dummyjson.com/products");
    productList = await response.json();
    displayProducts(productList);
    
    
    
    

    
}
getProducts();






/* reset Function */
function reset(){
    templesElement.innerHTML = null;
}
    