// Creating mains variables

const itemNumber = document.getElementById("cartIndex");
const preparing = document.getElementById("preparing");
var i = -1;

// getting all the infos we need about the post we made before 
var ResultId = localStorage.getItem("orderResult");
ResultId = JSON.parse(ResultId);
var OrderAll = localStorage.getItem("order");
OrderAll = JSON.parse(OrderAll);
var quantity = localStorage.getItem("quantity");
quantity = JSON.parse(quantity);

var nums = JSON.parse(localStorage.getItem("PricesAndNums"));

refreshNums();
// ===== creating the child ===== //
var recapMain = document.getElementById("recapMain");
var recapBlock = document.createElement("div");
var recapTiltle = document.createElement("h2");
var recapText = document.createElement("p");

var summaryTilte = document.createElement("h3");
var summaryId = document.createElement("p");
var summaryPrice = document.createElement("p");
var recapSummary = document.createElement("div");
var summaryDiv = document.createElement("div");
var recapSummaryUL = document.createElement("ul");
// ===== adding classes ===== //
recapBlock.classList.add("purchres_real_recap-block");
recapSummary.classList.add("purchres_real_recap-block_sum");
summaryDiv.classList.add("purchres_real_recap-block_sum-bot");
// ===== filling the content ===== //

// creating the ul list 
while (OrderAll.products[++i]) {
    const art = document.createElement("li");
    const t = OrderAll.products[i];
    fetch("http://localhost:3000/api/teddies/" + OrderAll.products[i]) //recall our API with the ID
        .then(async result_ => { //GET the stringify arr
            const response = await result_.json() //give a ame to that arr
            tabAll = response;
            art.textContent = tabAll.name.toUpperCase() + " x " + quantity[GetId(t)] + " = " + quantity[GetId(t)] * tabAll.price / 100 + ",00€";
        })
        .catch((error) => {
            console.log(error);
        })
    recapSummaryUL.appendChild(art);
}
recapTiltle.innerHTML = `Thank you <span>${OrderAll.contact.firstName}</span> for your order`
if (OrderAll.contact.address[0] >= '0' && OrderAll.contact.address[0] <= '9') {
    recapText.textContent = "It will be sent to : " + OrderAll.contact.address + " " + "(" + OrderAll.contact.city + ")";
} else {
    recapText.textContent = "It will be sent to : " + OrderAll.contact.address + " " + "(" + OrderAll.contact.city + ")";
}
summaryTilte.textContent = "Order overview : ";
summaryId.textContent = "Confirmation number : " + ResultId;
summaryPrice.textContent = "Final price : " + nums.TotalPrice + ",00 €"
console.log(nums)

if (OrderAll.products[1]) {
    preparing.textContent = "Your camera is on its way"
} else {
    preparing.textContent = "Your camera is on its way"
}


// ===== append child ===== //
recapMain.appendChild(recapTiltle);
recapMain.appendChild(recapBlock);
recapBlock.appendChild(recapText);
recapSummary.appendChild(summaryTilte)
recapSummary.appendChild(recapSummaryUL)
summaryDiv.appendChild(summaryId)
summaryDiv.appendChild(summaryPrice)
recapSummary.appendChild(summaryDiv)
recapBlock.appendChild(recapSummary);


// clearing the local storages
const but1 = document.getElementById("logoOrinoco").addEventListener("click", function () {
    eraseLocalStorage();
});
const but2 = document.getElementById("shoppingCart").addEventListener("click", function () {
    eraseLocalStorage();
});
const but3 = document.getElementById("backtoshop").addEventListener("click", function () {
    eraseLocalStorage();
});
