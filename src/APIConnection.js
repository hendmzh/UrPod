
import axios from 'axios';
import cors from 'cors';


const url = 'https://experimental.willow.vectara.io'
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
    'customer-id': 1448396385,
    'x-api-key': 'zqt_VlTGYYnzy_Kq-Fb42ojC3tKr3isBcoMaQv4WKA',
    'Origin' : url,
    'Access-Control-Allow-Origin': '*',
  };

  
export function fetchDataCompletion() {

    const data = {
        "model": "text-davinci-003",
        "prompt": "Say this is a test",
        "max_tokens": 7,
        "temperature": 0
    };

axios.post(url+'/v1/completions', data, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });  

}
