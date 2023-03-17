
import axios from 'axios';


const url = 'https://experimental.willow.vectara.io'
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'customer-id': 1448396385,
  'x-api-key': 'zqt_VlTGYYnzy_Kq-Fb42ojC3tKr3isBcoMaQv4WKA'
  };

  
export function fetchDataCompletion(strnew) {

    const data = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
          {
              "role": "user",
             // "content": "create a podcast script about "+ strnew + "without music"
             "content" : "  اكتب محتوى لبودكات عن" +" " + strnew + " "
          }
      ]
  });

axios.post(url+'/v1/chat/completions', data, { headers })
  .then(response => {
    var podcast_content = (JSON.parse(JSON.stringify(response.data))['choices'][0]['message']['content'])
    console.log(podcast_content);
  })
  .catch(error => {
    console.log(error);
  });  

}
