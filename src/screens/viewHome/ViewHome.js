import React from 'react';
import BotaoInstituicao from '../../components/BotaoInstituicao';
import BotaoCurso from '../../components/BotaoCurso';
import TelaInstituicao from '../createInstituicao/TelaInstituicao';
import TelaCurso from '../createCurso/TelaCurso';
import Card from '../../components/AppCont';
import { withRouter } from 'react-router-dom';

class ViewHome extends React.Component {

  state = {
    stateScreenInstituicao: false,
    stateScreenCurso: false

  }

  handleClick = () => {
    this.setState(state => {
      return { stateScreenInstituicao: !state.stateScreenInstituicao }
    });
  }
  handleClose = () => {
    this.setState(state => {
      return { stateScreenInstituicao: !state.stateScreenInstituicao }
    });
  }
  handleClickCurso = () => {
    this.setState(state => {
      return { stateScreenCurso: !state.stateScreenCurso }
    });
  }
  handleCloseCurso = () => {
    this.setState(state => {
      return { stateScreenCurso: !state.stateScreenCurso }
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <Card />
          <h1 id="title" >Gerenciamento Institucional</h1>
          <span id='title-create'>Cadastrar</span>


          <BotaoInstituicao onClick={this.handleClick} value="Instituição" />
          <BotaoCurso onClick={this.handleClickCurso} value="Curso" />

          {this.state.stateScreenInstituicao &&

            <div className="fundo-tela">
              <TelaInstituicao titulo="Instituição" onFechar={this.handleClose} />
            </div>

          }

          {this.state.stateScreenCurso &&

            <div className="fundo-tela">

              <TelaCurso titulo="Curso" onFechar={this.handleCloseCurso} />
            </div>


          }


        </header>

      </div>


    );
  }
}


export default withRouter(ViewHome);


