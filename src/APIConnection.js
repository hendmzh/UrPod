import React, { Component } from "react";
import ReactDOM from "react-dom";

import axios from 'axios';


const url = 'https://experimental.willow.vectara.io'
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'customer-id': 1448396385,
  'x-api-key': 'zqt_VlTGYYnzy_Kq-Fb42ojC3tKr3isBcoMaQv4WKA'
  };

  
export async function fetchDataCompletion(strnew) {

    const data = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
          {
              "role": "user",
              "content": "Your are a podcast creator hosting a daily news podcast program. Generate a full transcript about the latest news about"+ strnew + " in details with stories for UrPod podcast hostname Adam "
            // "content" : "  اكتب محتوى لبودكات عن" +" " + strnew + " "
          }
      ]
  });


  var resule ="2";
 await axios.post(url+'/v1/chat/completions', data, { headers })
  .then(response => {
    var podcast_content = (JSON.parse(JSON.stringify(response.data))['choices'][0]['message']['content'])
    console.log(podcast_content);
    resule = podcast_content;
  })
  .catch(error => {
    console.log(error);
  });  

  return resule;
}


export async function fetchNewsCompletion(local, categories, lang) {

  var content_string = ""

  if(lang == 0){
  content_string = "Your are a podcast creator hosting a daily news podcast program. Generate a full transcript for today\'s"
  content_string  = content_string + (local? "Saudi Arabian": "global")
  content_string  = content_string + " news. Include only the news for the following categories: Sports, Politics, and Tech."
  }else{
    content_string = "اكتب محتوى لبرنامج إذاعي عن الاخبار الرياضية"
  }
  



  const data = JSON.stringify({
    "model": "gpt-3.5-turbo",
    "messages": [
        {
            "role": "user",
            "content": content_string
          // "content" : "  اكتب محتوى لبودكات عن" +" " + strnew + " "
        }
    ]
});

var result = " ";
await axios.post(url+'/v1/chat/completions', data, { headers })
.then(response => {
  var podcast_content = (JSON.parse(JSON.stringify(response.data))['choices'][0]['message']['content'])
  console.log(podcast_content);
  result =  podcast_content;
})
.catch(error => {
  console.log(error);
});  

return result;

}
