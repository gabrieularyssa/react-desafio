import React from "react";

function Inputs (props){
    return (
        <input type={`${props.tipo}`} className={`${props.classe}`} value={`${props.valor}`}/> 
    )
}

export default Inputs

