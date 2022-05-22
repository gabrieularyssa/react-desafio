import React from "react";

function TituloTarefa(props){
    return (
        <>
            <div className={`${props.titulo}`}>
               {`${props.titulo}`}   
            </div>
        </>
    )
}

export default TituloTarefa
