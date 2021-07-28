// Getting page ID //
const params = (new URL(document.location)).searchParams;
const id = params.get("id");

// Declaration of variables //
var i = -1;
const Allcolors = document.createElement("select");
const Allbubble = document.createElement("div");
const main = document.getElementById("product");
var tabAll;
const itemNumber = document.getElementById("cartIndex");

// Setting NUMS //
var nums = localStorage.getItem("PricesAndNums");
refreshNums();

// MAIN //
fetch("http://localhost:3000/api/cameras/" + id) //recall the API with ID
    .then(async result_ => { //GET the stringify arr
        const response = await result_.json() //give a name to the arr
        tabAll = response; // geting the api´s info inside our var

        while (++i < response.lenses.length) {
            const option = document.createElement("option"); // creating the select filled with every lens
            option.textContent = response.lenses[i];
            Allcolors.appendChild(option);
        }

        main.innerHTML =
        `<div class="tilte2">
                <h1> Discover ${tabAll.name}</h1>
            </div>
            <section class="bg-color-deg">
                <div class="overview">
                    <div class="overview_img">
                        <img src="${tabAll.imageUrl}" alt="Photo of ${tabAll.name}"></img>
                        <div class="overview_img-price">
                            <h2>${tabAll.price / 100},00 € </h2>
                        </div>
                    </div>
                    <div class="overview_infos">
                        <div class="overview_infos-name text-center">
                            <h2>${tabAll.name}</h2>
                        </div>
                        <div class="overview_infos-description">
                            <p> <b> Description : </b> ${tabAll.description}</p>
                        </div>
                        <div class="overview_infos-materiaux">
                            <h2>Materials</h2>
                            <ul>
                                <li>35mm lens</li>
                                <li>Autofocus optional</li>
                                <li>Adjustable strap and handle</li>
                                <li>Robust and light ALU case</li>
                            </ul>
                        </div>
                        <div class="overview_infos-allcolors">
                                    <div class="overview_infos-allcolors-colors">
                                    ${Allbubble.innerHTML}
                                    </div>
                                    <div class="overview_infos-allcolors-form">
                                        <form>
                                            <label for="colorForm">Choose a lens</label>
                                            <SELECT name="colorSelection" size="1" id="colorForm">
                                            ${Allcolors.innerHTML}
                                            </SELECT>
                                        </form>
                                    </div>
                                </div>
                        <div class="overview_infos-addcart">
                            <div id="addcart" class="overview_infos-addcart-button" onclick="addToBasket()">
                                <i class="fas fa-cart-plus"></i>
                                <p>Add to basket</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
    })
    .catch((error) => {
        console.error(error);
    });