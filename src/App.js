
import './App.css';
import React, { useState } from 'react';
import BotaoInstituicao from './BotaoInstituicao';
import TelaInstituicao from './TelaInstituicao'
import TelaCurso from './TelaCurso';
import BotaoCurso from './BotaoCurso';

function App() {
  const [exibirTela, setExibirTela] = useState(false);
  const [exibirTelaCurso, setExibirTelaCurso] = useState(false);

  const handleClick = () => {
    setExibirTela(true);
  }
  const handleClose = () => {
    setExibirTela(false);
  }
  const handleClickCurso = () => {
    setExibirTelaCurso(true);
  }
  const handleCloseCurso = () => {
    setExibirTelaCurso(false);
  }
  return (
    <div className="App">
      <header class="App-header">
        <div class="App-cont">
          <h1 id="title" >Gerenciamento Institucional</h1>

          <BotaoInstituicao onClick={handleClick} />
          <BotaoCurso onClick={handleClickCurso} />

          {exibirTela &&
            <div>
              <div className="fundo-tela"></div>
              <TelaInstituicao titulo="Instituição" onFechar={handleClose} />
            </div>
          }
          {exibirTelaCurso &&
            <div>
              <div className="fundo-tela"></div>
              <TelaCurso titulo="Curso" onFechar={handleCloseCurso} />
            </div>
          }
        </div>

      </header>
    </div>
  );
}

export default App;


