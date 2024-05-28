let countriesData = await (await fetch('./assets/data.json')).json();

setCountriesClicksListeners();

function setCountriesClicksListeners() {
  let countries = Array.from(document.getElementsByTagName('path'));
  countries.forEach(country => country.onclick = () => onCountryClick(country.getAttribute('name')));
}

function onCountryClick(countryName) {
  openModal(countryName);
}
function openModal(countryName) {
  let modal = document.getElementsByClassName('modal')[0];
  let isModal = false;
  let overlay = document.getElementsByClassName('overlay')[0];
  let body = document.getElementsByTagName('body')[0];


  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.left = window.scrollX.toString() + 'px';
  overlay.style.top = window.scrollY.toString() + 'px';
  modal.style.left = window.scrollX.toString() + 'px';
  modal.style.top = window.scrollY.toString() + 'px';
  body.style.overflow = 'hidden';

  modal.onclick = () => isModal = true;
  overlay.onclick = () => {
    if(!isModal) {
      body.style.overflow = 'auto';
      overlay.style.display = 'none';
    }
    isModal = false;
  };
  fillModal(countryName);
}
function fillModal(countryName) {
  let country = countriesData.find(country => country.name === countryName);
  let header = document.getElementsByClassName('header')[0];
  let description = document.getElementsByClassName('description')[0];
  let wikiLink = document.getElementById('wiki-link');

  header.innerText = countryName;
  if (country?.description) description.innerText = country.description;
  wikiLink.href = 'https://en.wikipedia.org/wiki/' + countryName;
}
