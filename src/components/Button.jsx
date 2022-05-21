import React from "react";

function Button(props){

return (
    <button className={`${props.classe}`} onClick={`${props.funcao}`}>{props.innerText}</button>
)

}

export default Button