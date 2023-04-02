import React from "react";
import "./Botao.css"

function BotaoInstituicao(props) {
  return (
    <button onClick={props.onClick} >
      Cadastrar Instituição
    </button>

  );
}

export default BotaoInstituicao;
