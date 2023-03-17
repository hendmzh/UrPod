
import axios from 'axios';


const url = 'https://experimental.willow.vectara.io'
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'customer-id': 1448396385,
  'x-api-key': 'zqt_VlTGYYnzy_Kq-Fb42ojC3tKr3isBcoMaQv4WKA'
  };

  
export function fetchDataCompletion() {

    const data = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
          {
              "role": "user",
              "content": "what are the latest newa about saudi arabia"
          }
      ]
  });

axios.post(url+'/v1/chat/completions', data, { headers })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });  

}
