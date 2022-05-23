import React from "react";

function Opc(){
    return(
    <select className="opc">
        <option value="status">Status da Tarefa</option>
        <option value="fazer">A Fazer</option>
        <option value="fazendo">Fazendo</option>
        <option value="finalizado">Finalizado</option>
    </select>
    )
}

export default Opc