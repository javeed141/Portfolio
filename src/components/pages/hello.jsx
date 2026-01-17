import React, { useEffect, useState } from 'react'

const Hello = () => {
    const [seconds,setSeconds]=useState(0)
    useEffect(()=>{
        const id=setInterval(()=>{
            setSeconds(prev => prev+1);
        },1000);

            return ()=>{
                clearInterval(id);
            }
    },[]);

  return (
    <div>{seconds}</div>
  )
}

export default Hello
