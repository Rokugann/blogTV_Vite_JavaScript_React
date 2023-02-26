import { useState } from "react"
import { render } from "react-dom"

export function MonCherchateur(props) 
{
    const HandleChange = (e) => 
    {
       props.setTitle(e.target.value)
    }
    
    return(
        <input type="text" value={props.title} onChange={HandleChange}/>

    )
}