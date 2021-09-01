//
const URL = "https://api.fda.gov/drug/event.json?api_key=";
const API_Key = "IKBoKPvacjAy2yH0yYSHQUldCTmPaC1AMa6SPpgL";
const URLandKey = `https://api.fda.gov/drug/event.json?api_key=${API_Key}}&search=`;

// brand name
// =patient.drug.openfda.brand_name:""

// generic name
// =patient.drug.openfda.generic_name:""

// usage
// drugindication

// side effects
//  =patient.drug.openfda.generic_name:""+AND+patient.reaction.reactionmeddrapt:""

// date
// transmissiondate

// manufacturer
// =patient.drug.openfda.generic_name:""+AND+patient.drug.openfda.manufacturer_name:""



const searchButton = document.querySelector("#search");

searchButton.addEventListener("click", searchRX);

async function searchRX() {
  try {
    let res = await axios.get(URLandKey);
    console.log(res.data);
    let NameBrand = res.data.message;
    // removeOldContent();
    // appendImg(imgUrl);
  } catch (error) {
    console.log(error);
  }
}

function searchRX(){

};


// select button
// attach event listener
// send axios get request to URL
// append data to the page
// 