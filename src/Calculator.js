import Buttons from './Buttons'
import {useState} from 'react';
let Calculator= ()=>{
    
    let [calVal,setCalval]=useState("");
    const buttonClick =(buttonText)=>{
      if(buttonText=== 'C')
        {
          setCalval("");

        }else if(buttonText === '=')
          {
            const result=eval(calVal);
            setCalval(result);

          }
          else if(buttonText === 'Back')
            {
              calVal=calVal.toString().slice(0,-1);
              setCalval(calVal);

            }else{
            const newDisplayVal=calVal+buttonText;
            setCalval(newDisplayVal);
            
          }
    };
    return(
       <div className="w-[40%] shadow-xl">
         <h1 className='text-center text-3xl my-2 text-blue-950'>Calculator</h1>
         <input placeholder="Enter Numbers...." className='border-2 border-solid-red-200 w-[90%] text-center ml-4 p-3 my-2' value={calVal} readOnly/>
         <Buttons buttonClick={buttonClick}></Buttons>
         
       </div>
    );
}
export default Calculator;