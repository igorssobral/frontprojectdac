import React from "react";
import "./Botao.css"

function BotaoCurso(props) {
    return (
      <button className="button-curso"  onClick={props.onClick} >
        Cadastrar Curso
      </button>
      
    );
  }
  
  export default BotaoCurso;