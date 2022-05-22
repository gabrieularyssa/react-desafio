import React from "react";
import Card from "./Card";
import TituloTarefa from "./TituloTarefa";
function QuadroTarefas() {
    return (
        <>
            <p>Cadastrar Uma Tarefa</p>
            <div className="titulo">
                <TituloTarefa titulo="Fazer" />
                <TituloTarefa titulo="Fazendo" />
                <TituloTarefa titulo="Finalizado" />
            </div>
            <Card />
            
        </>
        
    )
}

export default QuadroTarefas