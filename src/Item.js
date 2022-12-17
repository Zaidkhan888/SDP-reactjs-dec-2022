import React , {memo, useEffect} from "react"

// import React from 'react'

function ItemsName(props) {
    const {data} = props
    useEffect(()=>{
        console.log(`Items at index ${data.index}`);
    })
  return (
    <h4>{data.text}</h4>
  )
}

export default memo(ItemsName)