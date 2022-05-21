import React from "react";
import Inputs from "./Inputs";
import Opc from "./Opc";
import Button from "./Button";

function Cadastro(){
    return (
        <>
            <p>Cadastrar Uma Tarefa</p>
            <div className="inputs">
                <Inputs tipo="text" classe="tarefa" tarefa="Tarefa"/>
                <Inputs tipo="date" classe="data" funcao="inserirTarefa" />
                <Opc /> 
            </div>
            <div className="button">
                <Button classe="inserir" innerText="Inserir Tarefa"/>
            </div>
        </>
        
    )
}

export default Cadastro