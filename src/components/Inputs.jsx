import React from "react";

function Inputs (props){
    return (
        <input type={`${props.tipo}`} className={`${props.classe}`} placeholder={`${props.tarefa}`} /> 
    )
}

export default Inputs

