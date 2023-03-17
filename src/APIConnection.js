
import axios from 'axios';

const url = 'https://experimental.willow.vectara.io'
const headers = {
    'User-Agent' : 'PostmanRuntime/7.31.1',
    'Content-Type': 'application/json',
    'customer-id': 1448396385,
    'x-api-key': 'zqt_VlTGYYnzy_Kq-Fb42ojC3tKr3isBcoMaQv4WKA',
    'proxy': 'http://localhost:3000/'
  };

  
export function fetchData() {

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
