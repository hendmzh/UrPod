import React , { useCallback } from 'react';
import { SayButton } from 'react-say';


// import {Talk} from './say-react';

// to use {Talk("أهلا بكم في حلقة اليوم","ar-SA")}
// to use {Talk("Hi Hend,"en-US")}


export function Talk(data, langyage){


  return  <SayButton
    onClick={ event => console.log(event) }
    speak={data}
    pitch={ 1.1 }
    rate={ 1.5 }
    volume={ .8 }
    voice={ useCallback(voices => [...voices].find(v => v.lang === langyage), []) }
  >
    Tell me a story
  </SayButton>



}
