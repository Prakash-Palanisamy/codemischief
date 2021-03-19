import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [result, setResult] =useState([]);
   
    const handleIncrement = () => {
       // console.log(count % 3);
       setCount(count => count + 1);
       
        if(count !== 0 && count % 3 === 0 && count % 5 === 0)
        {
            result.push(count+" is multiple of 3 and 5");
        }
        else if(count !== 0 &&count % 3 === 0)
        {
            result.push(count+" is multiple of 3");
        }
        else if(count !== 0 &&count % 5 === 0)
        {
            result.push(count+" is multiple of 5");
        }
       
      };

     // console.log(result);

      const handleReset = () => {
        setCount(0);
        setResult([]);
      };
    
    return (
        <div>

                <h1>Counter Numbers</h1>
                <div className='result'>
                      <h3>{count}</h3>
                      {result.map((r) => <li>{r}</li>)}
                </div>
            
             <button className='btn' onClick={handleIncrement}>Counter</button>
             <button className='btn' onClick={handleReset}>Reset</button>
            
        </div>
    )
}

export default Counter
