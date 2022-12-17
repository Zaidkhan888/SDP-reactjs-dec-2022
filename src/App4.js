import React, { useState } from 'react'
import Item from "./Item"

const initializedItems = Array(10).fill().map((x, i) => ({
    index: `${i}` ,
    text: `array at this index is ${i}`
}))
const paginatedItems = Array(10).fill().map((x, i) => ({
    index: `1${i}` ,
    text: `array at this index is 1${i}`
}))
console.log(initializedItems)


function App4() {
    const[ items, setItems] = useState(initializedItems);
    function addItems() {
        // console.log("hello")
        setItems((prevItems)=>
          [  ...prevItems , ...paginatedItems]
        )

    }

  





return (
    <div>
        <button onClick={addItems}>Append new Items</button>
        <div>
                { items.map((item , index)=>
                    <Item data={item} key={index} />
                )}
        </div>



    </div>




)
            
}

export default App4;
