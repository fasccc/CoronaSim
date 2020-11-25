// does not work
// https://www.carlrippon.com/fetch-with-async-await-and-typescript/
/*
async function http(request) {
  const response = await fetch(request);
  const body = await response.json();
  return body;
}

// example consuming code
const data = async http(
  "https://jsonplaceholder.typicode.com/todos"
);
*/



// does not work as well -> forget it at the moment
// https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait

/*
const request = async () => {
  const response = await fetch("https://pomber.github.io/covid19/timeseries.json");
  console.log("response=",response);
    const json = await response.json();
    console.log(json);
}

const demo = async function(){
  const res = await request()
}

demo();

*/

/* the 2. solution above should work properly - (yet, it's sufficient to simply call request()).
 maybe you've been testing on node? if so, you must beforehand install node-fetch:
 npm i node-fetch --save
 & require it
*/
//const fetch = require("node-fetch");
const request = async () => {
    const response = await fetch("https://pomber.github.io/covid19/timeseries.json");
    const json = await response.json();
    console.log(json);
}

request();

/*
fetching: 
{ date: '2020-1-26', confirmed: 0, deaths: 0, recovered: 0 },
     { date: '2020-1-27', confirmed: 0, deaths: 0, recovered: 0 },
     { date: '2020-1-28', confirmed: 0, deaths: 0, recovered: 0 },
     { date: '2020-1-29', confirmed: 0, deaths: 0, recovered: 0 },
     { date: '2020-1-30', confirmed: 0, deaths: 0, recovered: 0 },
     ....

tested on node, firefox and chrome.

*/



