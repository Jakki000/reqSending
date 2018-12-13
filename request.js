const fetch = require('node-fetch');

let url = 'http://localhost:3000/transactions/'

let postrequest = {
    rahanarvo: parseInt(process.argv[2]),
    SP_ID: parseInt(process.argv[3])
};
console.log(postrequest)

let omena = null;

function sendPostRequest() {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(postrequest),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(res => res.json())
        .then(response => console.log('Success: ', JSON.stringify(response)))
        .catch(err => console.log('Error', err));
    
}
//setInterval(sendPostRequest, 10000);

sendPostRequest();


/*process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
  });
*/
/*fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
*/
