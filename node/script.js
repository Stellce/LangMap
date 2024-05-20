const fs = require('node:fs');

// fs.readFile('./assets/europe.svg', 'utf8', (err, data) => {
//     if(err) return console.log(err);
//     let breakpoint = '<path';
//     data = data.split(breakpoint).map(el => {
//
//         return el;
//     }).join(breakpoint);
//     console.log(data.length)
// })

let countriesNames = [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Belgium",
    "Bulgaria",
    "Bosnia and Herzegovina",
    "Belarus",
    "Switzerland",
    "Czech Republic",
    "Germany",
    "Denmark",
    "Estonia",
    "Finland",
    "United Kingdom",
    "Georgia",
    "Greece",
    "Croatia",
    "Hungary",
    "Ireland",
    "Iceland",
    "Italy",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Latvia",
    "Moldova",
    "Macedonia",
    "Montenegro",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Sweden",
    "Turkey",
    "Ukraine",
    "Kosovo",
    "Netherlands",
    "Spain",
    "France",
    "Portugal",
    "Cyprus"
];
let countries = [];

async function load() {
    for (const name of countriesNames) {
        const res = await fetch('https://en.wikipedia.org/wiki/' + name)
        const html = await res.text();
        console.log(html)
    }
}
load();