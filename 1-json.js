const fs = require('fs');
// const product = {
//     title:'product title',
//     description:'product description',
//     type:'product type'
// }
// //convert java script object to json string
// const productString = JSON.stringify(product);
// console.log(productString);
// //writing json date in file systems
// fs.writeFileSync('1-json.json',productString);

// //convert json string to javascript object
// const productData = JSON.parse(productString);
// console.log(productData.title);


//read data from file

// const productBuffer = fs.readFileSync('1-json.json');
// console.log(productBuffer);
// console.log(productBuffer.toString());
// const dataJson = productBuffer.toString();
// const data = JSON.parse(dataJson);
// console.log(data.title);


//Read json data

const datafromFile = fs.readFileSync('1-json.json');
console.log(datafromFile);
const dataJsonString = datafromFile.toString();
console.log(dataJsonString);
const dataJsonObject = JSON.parse(dataJsonString);
console.log(dataJsonObject.title);
dataJsonObject.name='update name';

const dataUpdateTitel = JSON.stringify(dataJsonObject);
console.log(dataUpdateTitel);

fs.writeFileSync('1-json.json',dataUpdateTitel);
