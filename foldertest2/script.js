let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];

console.log("Shopping list:", shoppingList);
console.log(shoppingList[0]);
console.log(shoppingList[shoppingList.length - 1]);
shoppingList.push("Cooking Oil");

shoppingList.shift();
let index = shoppingList.indexOf("Sugar");
if (index !== -1) {
    shoppingList[index] = "Tea Leaves";
}

console.log(shoppingList.length);
