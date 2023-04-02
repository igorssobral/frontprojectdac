import React from 'react';
import './Telas.css'

function TelaInstituicao(props) {
  return (

    <div className='tela'>
      <h2>{props.titulo}</h2>
      <hr />
      <span className="fechar-tela" onClick={props.onFechar}>X</span>
      <form>
        <label>
          Nome
          <input type="text" name="nome" placeholder='Nome da instituição' />
        </label>

        <label>
          E-mail
          <input type="email" name="email" placeholder='Digite o email' />
        </label>

        <label>
          Telefone
          <input type='tel' name="telefone" placeholder='Digite o telefone' />
        </label>
        <br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default TelaInstituicao;