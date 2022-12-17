import { useRef, useState } from 'react';
import './App.css';




const jsx = <h1>This is first jsx file </h1>
function App() {
  // const [counter, setCounter] = useState(0);
  const counterRef = useRef(300)
 
  // function incrementCount()
  //   {
  //     setCounter((count) => count + 1)
  //   }
  // function decrementCount()
  //   {
  //     setCounter((count) => count - 1)
  //   }
  
  
  
  // user ref function
  
  function incrementCountRef()
    {
      // canot rerender the state
      counterRef.current = counterRef.current + 1
      console.log("Counter value :"  ,counterRef);
    }
    function decrementCountRef()
    {
      counterRef.current = counterRef.current - 1
      console.log("Counter value :"  ,counterRef);
    }
  console.log("Counter value :"  ,counterRef);

  return (
    <div className='App'>
      {/* <input type="text"  input={input} onChange={}   /> */}
      <button onClick={incrementCountRef}>INcremenet</button>
      {/* <p>{counter}</p> */}
      <p>{counterRef.current}</p>
      <button onClick={decrementCountRef} >Decrment</button>
      <br />



    </div>
  );



  
}

export default App;
