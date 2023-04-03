import React from "react";
import './Telas.css'

function TelaCurso(props) {
  return (

    <div className='tela-curso'>
      <h2>{props.titulo}</h2>
      <hr />

      <span className="fechar-tela" onClick={props.onFechar}>X</span>
      <form>
        <label>
          Nome
          <input type="text" name="nome" maxLength={40} placeholder='Nome do curso' />
        </label>
        <label>
          Carga Horária
          <input type="number" name="cargahoraria" min = {1} max={15000} placeholder='Digite a Carga horária' />
        </label>
        <label>
          Períodos
          <input type='number' name="periodos" min = {1} max={15} placeholder='Quantidade de periodos' />
        </label>
        <label>
          Mensalidade
          <input type='number' name="mensalidade"  min = {1} max={20000}  placeholder='Quantidade de periodos' />
        </label>
        <label>
          InstituicaoID
          <input type='number' name="instituicaoID" min = {1}  placeholder='ID da insituicao que pertence' />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );

}

export default TelaCurso;