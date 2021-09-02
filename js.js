// alert("Do not rely on Check RX to make decisions regarding medical care. While we make every effort to ensure that data is accurate, you should assume all results are unvalidated.");
const URL = "https://api.fda.gov/drug/event.json?api_key=";
const API_Key = "IKBoKPvacjAy2yH0yYSHQUldCTmPaC1AMa6SPpgL";
let userInput = document.querySelector("#user-input");
// console.log(userInput);
const URLandKey = `https://api.fda.gov/drug/event.json?api_key=${API_Key}&search=`;//${userInput}`;



let brand = document.getElementById("name-brand-result");
let indication = document.getElementById("usage-result");
let generic = document.getElementById("name-generic-result");
let reaction = document.getElementById("side-effects-result");
let date = document.getElementById("date-available-result");
let manufacturer = document.getElementById("manufacturer-result");


function clearData() {
  brand.innerHTML = "";
  generic.innerHTML = "";
  indication.innerHTML = "";
  reaction.innerHTML = "";
  date.innerHTML = "";
  manufacturer.innerHTML = "";

 }

const searchButton = document.querySelector("#search");
searchButton.addEventListener("click", searchRX);

async function searchRX() {
  try {
    let res = await axios.get(`${URLandKey}${userInput.value}`);
 
    clearData();

    let textBrand = document.createTextNode(res.data.results[0].patient.drug[0].openfda.brand_name[0] ? res.data.results[0].patient.drug[0].openfda.brand_name[0] : "no data" );
    brand.appendChild(textBrand);

    let textGeneric = document.createTextNode(res.data.results[0].patient.drug[0].openfda.generic_name[0] ? res.data.results[0].patient.drug[0].openfda.generic_name[0] : "no data" );
    generic.appendChild(textGeneric);

    let textIndication = document.createTextNode(res.data.results[0].patient.drug[0].drugindication ? res.data.results[0].patient.drug[0].drugindication : "no data" );
    indication.appendChild(textIndication);

    let textReaction = document.createTextNode(res.data.results[0].patient.reaction[0].reactionmeddrapt ? res.data.results[0].patient.reaction[0].reactionmeddrapt : "no data" );
    reaction.appendChild(textReaction);

    let textDate = document.createTextNode(res.data.results[0].transmissiondate ? res.data.results[0].transmissiondate : "no data" );
    date.appendChild(textDate);

    let textManufacturer = document.createTextNode(res.data.results[0].patient.drug[0].openfda.manufacturer_name[0] ? res.data.results[0].patient.drug[0].openfda.manufacturer_name[0] : "no data" );
    manufacturer.appendChild(textManufacturer);

  } catch (error) {
    console.log(error);
  }
}