import React from "react";
import Inputs from "./Inputs";
import Opc from "./Opc";
//import Button from "./Button";



function Cadastro(){

    function cadastrarTarefa(){
        //escrever aqui a função do botao parar inserir a tarefa dentro dos cards
    }


    return (
        <>
            <p>Cadastrar Uma Tarefa</p>
            <div className="inputs">
                <Inputs tipo="text" classe="tarefa" valor="Inserir Tarefa"/>
                <Inputs tipo="date" classe="data" valor="expiracao"/>
                <Opc /> 
            </div>
            <div className="button">
                <form onSubmit={cadastrarTarefa}>
                    <Inputs tipo="submit" classe="inserir" valor="Cadastrar Tarefa"/>
                </form>
            </div>
        </>


        
    )
}

export default Cadastro