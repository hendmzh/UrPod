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

  
export async function fetchDataCompletion(strnew, typeS, lang) {

  var resule ="2";

  
  if(typeS == "story")
  {
    var cont ='';
    if(lang == 0){
      cont = "Your are a podcast creator hosting a daily kids story podcast. Generate a full story transcript about "+ strnew + " for childern ";
    }
    else{
      cont = "  اكتب محتوى لبودكات عن قصص للأطفال تحتوي علي" +" " + strnew + " ";
    }
    const data = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
          {
              "role": "user",
              "content": cont
            // "content" : "  اكتب محتوى لبودكات عن" +" " + strnew + " "
          }
      ]
  });


 await axios.post(url+'/v1/chat/completions', data, { headers })
  .then(response => {
    var podcast_content = (JSON.parse(JSON.stringify(response.data))['choices'][0]['message']['content'])
    console.log(podcast_content);
    resule = podcast_content;
  })
  .catch(error => {
    console.log(error);
  });  
  }
  else{
    var cont ='';
    if(lang == 0){
      cont = "Your are a podcast creator hosting a daily news podcast program. Generate a full transcript about the latest news about"+ strnew + " in details with stories for UrPod podcast hostname Adam ";
    }
    else{
      cont = "  اكتب محتوى لبودكات عن" +" " + strnew + " ";
    }
    const data = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
          {
              "role": "user",
              "content": cont
            
          }
      ]
  });


 await axios.post(url+'/v1/chat/completions', data, { headers })
  .then(response => {
    var podcast_content = (JSON.parse(JSON.stringify(response.data))['choices'][0]['message']['content'])
    console.log(podcast_content);
    resule = podcast_content;
  })
  .catch(error => {
    console.log(error);
  }); 
  }
  return resule;
}


export async function fetchNewsCompletion(local, categories, lang) {
  const arabic = ["رياضة","سياسية","طقس","اقتصاد","أحدث الأخبار"];
  const english = ["Sports","Politics","Weather","Economy","Breaking News"];

  var content_string = ""
  if(lang == 0){

  content_string = "Your are a podcast creator hosting a daily news podcast program. Generate a full transcript for today\'s "
  content_string  = content_string + (local? "Saudi Arabian": "global");
  content_string  = content_string + " news. Include only the news for the following categories: ";
  for(var i= 0; i< categories.length; i++ ){

    if (i == categories.length-1)
        content_string = content_string + english[categories[i]]+ ". "
    else 
        content_string = content_string + english[categories[i]]+ ", "

  }
  content_string = content_string+ "end your podcast with the sentence this podcast was generated by your pod dot AI"


  }else{
    content_string = " اكتب محتوى لبرنامج إذاعية  ";
    content_string  = content_string +( local? "المملكة العربية السعودية": "عالمية");
    content_string = content_string + " عن الاخبار بالفئات التالية   ";

    for(var i= 0; i< categories.length; i++ ){

    
      if (i == categories.length-1)
      content_string = content_string + arabic[categories[i]]+ ". "
  else 
      content_string = content_string + arabic[categories[i]]+ ", "
  
    }

    content_string = content_string+ "ابدأ بجملة أهلا بكم و انتهي بجملة هذا الحلقة تم اعدادة باستخدام يوربود"
  }
  

  console.log(content_string);

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
