import React from "react";
import "./BotaoSelectInstituicaoAndCurso.css"

function BotaoCurso(props) {
    return (
      <button  className="btn-curso"  onClick={props.onClick} >
       {props.value}
      </button>
      
    );
  }
  
  export default BotaoCurso;