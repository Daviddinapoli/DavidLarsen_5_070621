// CREATINGS mains VARIABLE //
const main = document.getElementById("recapAll");
const price = document.getElementById("allcost");
const itemNumber = document.getElementById("cartIndex");
var empty = document.getElementById("emptyBasket");
var impatient = document.getElementById("impatient");
var i = -1;
var index;
var antiRepeat = [
    0,
    0,
    0,
    0,
    0
];
// ============ //

var quantity = localStorage.getItem("quantity");
quantity = JSON.parse(quantity);


//  REFRESHING THE nums'S VALUE//
var nums = localStorage.getItem("PricesAndNums");
refreshNumsAndPrice();
// =========================== // 

// OPENING AND GETTING READY TO SHOW THE BASKET // 

var storage = localStorage.getItem("TabAllInfos");
if (!storage) {
    empty.textContent = "Your cart is empty, fill it up!";
}
storage = JSON.parse(storage);

// Adjusting the text with the cameras number
if (storage.products[1]) {
    impatient.textContent = "Your camera is waiting for you!";
}
else {
    impatient.textContent = "Your camera is waiting for you";
}
if (!storage.products[0]) {
    empty.textContent = "Your cart is empty, fill it up!";
    impatient.textContent = "";
} else {
    main.textContent = "";
    while (++i != storage.products.length) {
        index = antiRep(storage.products[i]._id); // BLOCKING THE REPETITION OF ARTICLES // 
        console.log(storage.products[i])
        if (storage.products[i]) {
            main.innerHTML +=
                `<div class="recapitulatif_all_each" id="recap${storage.products[i].index}">
                        <div class="recapitulatif_all_each-image">
                            <img src="${storage.products[i].imageUrl}" alt="photo de ${storage.products[i].name}"></img>
                        </div>
                        <div class="recapitulatif_all_each-infos">
                            <div class="recapitulatif_all_each-infos-left">
                                <h3>${storage.products[i].name}</h3>
                                <p>${storage.products[i].description}</p>
                                <div class="recapitulatif_all_each-infos-left-tab">
                                    <div class="recapitulatif_all_each-infos-left-tab-minus">
                                        <p onclick="modifyValueMinus()"  data-id='${storage.products[i]._id}'  id="minu${storage.products[i].index}">-</p>
                                    </div>
                                    <div class="recapitulatif_all_each-infos-left-tab-select">
                                        <p id="numberOf${storage.products[i].index}"></p>
                                    </div>
                                    <div class="recapitulatif_all_each-infos-left-tab-plus">
                                        <p id="plus${storage.products[i].index}" data-id='${storage.products[i]._id}' onclick="modifyValuePlus()">+</p>
                                    </div>
                                </div>
                            </div>
                            <div class="recapitulatif_all_each-infos-right">
                                <div class="recapitulatif_all_each-infos-right-cross" id="crossDiv">
                                    <i class="far fa-trash-alt" id="cross${storage.products[i].index}"  data-id='${storage.products[i]._id}'  onclick="deletingElement()"></i>
                            </div>
                            <div class="recapitulatif_all_each-infos-right-price">
                                    <p>${storage.products[i].price},00 €</p>
                                </div>
                            </div>
                        </div>
                </div>`
            
                checkQuantity(storage.products[i].index);
        }
              
     }
}