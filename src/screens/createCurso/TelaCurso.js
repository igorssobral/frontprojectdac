import React from "react";
import '../../screens/Telas.css'
import FormGroup from "../../components/FormGroup";
import CursoApiService from "../../services/CursoApiService";
import { showSuccessMessage } from '../../components/Toastr';

export default class TelaCurso extends React.Component {

  state = {
    nome: '',
    cargaHoraria: '',
    periodos: '',
    mensalidade: '',
    instituicaoId: ''

  }
  constructor(){
    super();
    this.service = new CursoApiService();
}

  saves = () => {
    this.service.create(
    {
      nome: this.state.nome,
      cargaHoraria: this.state.cargaHoraria,
      periodos: this.state.periodos,
      mensalidade: this.state.mensalidade,
      instituicaoId: this.state.instituicaoId
  
    }
  ).then(response =>
    {
      
      showSuccessMessage("Curso foi salvo com sucesso!");
    }

  ).catch( error =>
    {
    console.log(error.response);
}
  );

}
  render(props) {
    return (

      <div className='tela-curso'>
        <h2>{this.props.titulo}</h2>
        <hr />

        <span className="fechar-tela" onClick={this.props.onFechar}>X</span>
        <form>

          <FormGroup label="Nome" htmlFor="inputNome">

            <input type="text" className="form-control" placeholder="Digite o nome" id="inputNome"
              value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
          </FormGroup>

          <FormGroup label="Carga Horária" htmlFor="inputCargaHoraria">

            <input type="number" className="form-control" placeholder="Digite uma carga horária" id="inputCargaHoraria"
              value={this.state.cargaHoraria} onChange={(e) => this.setState({ cargaHoraria: e.target.value })} />
          </FormGroup>

          <FormGroup label="Periodos" for="inputPeriodos">

            <input type="number" className="form-control" placeholder="Digite a quantidade periodos" id="inputPeriodos"
              value={this.state.periodos} onChange={(e) => this.setState({ periodos: e.target.value })} />
          </FormGroup>

          <FormGroup label="Mensalidade" for="inputMensalidade">

            <input type="number" className="form-control" placeholder="Digite uma mensalidade" id="inputMensalidade"
              value={this.state.mensalidade} onChange={(e) => this.setState({ mensalidade: e.target.value })} />
          </FormGroup>
          <FormGroup label="Instituição ID" for="inputInstituicaoId">

            <input type="number" className="form-control" placeholder="Digite o Id da Instituição" id="inputInstituicaoId"
              value={this.state.instituicaoId} onChange={(e) => this.setState({ instituicaoId: e.target.value })} />
          </FormGroup>
          <button className="save-curso" onClick={this.saves}>Salvar</button>
        </form>
      </div>
    );

  }
}
