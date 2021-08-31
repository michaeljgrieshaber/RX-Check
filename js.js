//
const URL = "https://api.fda.gov/drug/event.json?api_key=";
const API_Key = "IKBoKPvacjAy2yH0yYSHQUldCTmPaC1AMa6SPpgL";
const URLandKey = `https://api.fda.gov/drug/event.json?api_key=${API_Key}}&search=`;

console.log(URLandKey + "gabapentin");

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

function searchRX{

};