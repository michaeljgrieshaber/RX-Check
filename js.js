// alert("Do not rely on Check RX to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated.");
const URL = "https://api.fda.gov/drug/event.json?api_key=";
const API_Key = "IKBoKPvacjAy2yH0yYSHQUldCTmPaC1AMa6SPpgL";
// let userInput = "atorvastatin";
// let userInput = "sudafed";
// let userInput = "metformin";
let userInput = document.querySelector("#user-input");
console.log(userInput);

// let userInput = getUserInput();
const URLandKey = `https://api.fda.gov/drug/event.json?api_key=${API_Key}&search=`;//${userInput}`;




// function clearData() {
//   results.innerHTML === "";
//  }


const searchButton = document.querySelector("#search");
searchButton.addEventListener("click", searchRX);

async function searchRX() {
  try {
    let res = await axios.get(`${URLandKey}${userInput.value}`);
 

    // let results = document.getElementsByClassName(".result");
    // clearData();

    let brand = document.getElementById("name-brand-result");
    let textBrand = document.createTextNode(res.data.results[0].patient.drug[0].openfda.brand_name[0]);
    brand.appendChild(textBrand);

    let generic = document.getElementById("name-generic-result");
    let textGeneric = document.createTextNode(res.data.results[0].patient.drug[0].openfda.generic_name[0]);
    generic.appendChild(textGeneric);

    let indication = document.getElementById("usage-result");
    let textIndication = document.createTextNode(res.data.results[0].patient.drug[0].drugindication);
    indication.appendChild(textIndication);

    let reaction = document.getElementById("side-effects-result");
    let textReaction = document.createTextNode(res.data.results[0].patient.reaction[0].reactionmeddrapt);
    reaction.appendChild(textReaction);

    let date = document.getElementById("date-available-result");
    let textDate = document.createTextNode(res.data.results[0].transmissiondate);
    date.appendChild(textDate);

    let manufacturer = document.getElementById("manufacturer-result");
    let textManufacturer = document.createTextNode(res.data.results[0].patient.drug[0].openfda.manufacturer_name[0]);
    manufacturer.appendChild(textManufacturer);

  } catch (error) {
    console.log(error);
  }
}