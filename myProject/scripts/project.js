
/* Declare and initialize global variables */
let productList = [];
let cart = [];
const productsElement = document.querySelector("#productsX");
let trackName = 0;
let nameProduct = "";
let productCatalog = [];




function  displayProducts(productListX) {
    
    productListX.forEach(product => {
        
        trackName += 1;
        let article = document.createElement("article");
        article.id = `article${trackName}`;
        const productNameH3 = document.createElement("h3");
        productNameH3.id = `product${trackName}`;
        const productPriceH3 = document.createElement("h3");
        let button = document.createElement("button");
        button.className = "buy";
        button.id = `${trackName}`;
        button.textContent = "Buy";
        function addToCart(){
    
            window.alert("Added to cart");
            console.log("Added to the cart");
            cart.push(catalogObject);
            console.log(cart);
            
        };
        
        button.addEventListener("click", addToCart);
        
        let catalogObject = product.title;
        
        productCatalog.push(catalogObject);

        productNameH3.innerHTML = product.title;
        productPriceH3.innerHTML = `$${product.price}`;
        
        
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.description;
        
        article.appendChild(productNameH3);
        article.appendChild(productPriceH3);
        article.appendChild(img);
        article.appendChild(button);
        article.id = `article${trackName}`;
        productsElement.appendChild(article);
        
    });
};




async function getProducts () {
    
    const response = await fetch( "https://fakestoreapi.com/products");
    productList = await response.json();
    
    
    
    
    displayProducts(productList);
    

    
};
getProducts();

function showCart()
{
    reset();
    cart.forEach(element => {
        
    
    const elementsToShow = productList.filter (function(productList){
        return productList.title.includes(element)});
        
    displayProducts(elementsToShow);
});

}
function clearCart(){
    reset();
    cart = [];
    
}











/* reset Function */
function reset(){
    productsElement.innerHTML = null;
}

function sortProductsBy(products){
   
    
    let filter = document.querySelector("#sortProductsBy");
    let filterValue = filter.value;
   
    reset();
    switch(filterValue){
        case "Electronics":
            console.log(filterValue);
           const electronics = products.filter (function(products){
            return products.category.includes("electronics")
           }) ;
           console.log(electronics);
           displayProducts(electronics);
           break
        case "Men`s clothing":
            console.log(filterValue);
            const menClothing = products.filter (function(products){
                return products.category.includes("men's clothing")});
            displayProducts(menClothing);
            break
        case "Jewelery":
            console.log(filterValue);
            const jewelery = products.filter (function(products){
                return products.category.includes("jewelery")
            });
            displayProducts(jewelery);
            break
        case "all":
            console.log(filterValue);
            displayProducts(productList);
            break

}}
document.querySelector("#sortProductsBy").addEventListener("change", () => {sortProductsBy(productList)});
document.querySelector("#showCart").addEventListener("click", showCart);
document.querySelector("#clearCart").addEventListener("click", clearCart);
    