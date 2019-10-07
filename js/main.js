let addButton = document.querySelector(".add");
let removeButton = document.querySelector(".remove");
let numOfItems = document.querySelector(".numOfItems");
let addToCartButtons = document.querySelectorAll(".add-to-cart");


// Functions

function addItem(){
    let counter = Number(numOfItems.innerText);
    counter ++;
    numOfItems.innerText = counter;
}
function removeItem() {
    let counter = Number(numOfItems.innerText);
    if(counter >=1){
        counter--;
    }
    numOfItems.innerText = counter;
}
// Event Listeners
addButton.addEventListener('click', addItem);
removeButton.addEventListener('click', removeItem);
// Add to Cart
addToCartButtons.forEach((button) => {
        button.addEventListener('click' , function () {
            swal("Item Added", "You can view your item in cart, Continue shopping!!", "success");
        })
    }
);