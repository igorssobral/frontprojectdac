import React from "react";
import "./BotaoSelectInstituicaoAndCurso.css"

function BotaoInstituicao(props) {
  return (
    <button className="btn-ins" onClick={props.onClick} >
      {props.value}
    </button>

  );
}

export default BotaoInstituicao;
