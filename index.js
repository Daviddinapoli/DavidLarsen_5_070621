// Variables //
const itemNumber = document.getElementById("cartIndex");
const main = document.getElementById("Allcards");
var index = -1;

// Refresh the price //
var nums = localStorage.getItem("PricesAndNums");
refreshNums();

// fetching //
fetch("http://localhost:3000/api/cameras")
  .then(async result_ => { //Get the stringify arr
    const response = await result_.json() //give a name to that arr
    tabAll = response; // getting the api´s information inside my own variable 
  
    // creating the price´s array
    const allAPI = localStorage.getItem("tabAllPrice");
    if (!allAPI) {
      var tab = [];
      while (response[++index]) {
        tab.push(tabAll[index].price / 100)
      }
      localStorage.setItem("TabAllPrice", JSON.stringify(tab))
    }
    index = -1;
    while (response[++index]) {
      main.innerHTML +=
        `<div class="col-lg-4 col-sm-12">
          <div class="productCard" id="productCard${index}">
            <a href="products.html?id=${tabAll[index]._id}">
              <div class="productCard_img">
                <img src="${tabAll[index].imageUrl}" alt="photo de ${tabAll[index].name}"></img>
              </div>
              <div class="productCard_caption">
                <div class="productCard_caption-upper">
                  <div class="productCard_caption-upper-name">
                    <h2>${tabAll[index].name}</h2>
                  </div>
                  <div class="productCard_caption-upper-name">
                  <p>${tabAll[index].price / 100},00 €</p>
                  </div>
                  <div class="productCard_caption-lower">
                    <p class="productCard_caption-lower-description">${tabAll[index].description}</p>
                  </div>
                  <div class="productCard_caption-lower-addtocart">
                    <p id="camera${index}">Know more</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>`
    }
  })
  .catch((error) => {
    console.error(error);

  });