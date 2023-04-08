import React from "react";
import ButtonSave from "../../components/ButtonSave";
import '../../screens/Telas.css'

export default class TelaCurso extends React.Component {

state = {
  nome: '',
  cargaHoraria: '',
  periodos: '',
  mensalidade:'',
  instituicaoID:''

}

saves = ()=> {
  console.log( this.state.nome);
  console.log(this.state.cargaHoraria);
  console.log(this.state.periodos);
  console.log(this.state.mensalidade);
}
  render(props){
  return (

    <div className='tela-curso'>
      <h2>{this.props.titulo}</h2>
      <hr />

      <span className="fechar-tela" onClick={this.props.onFechar}>X</span>
      <form>

      <div class="form-group">
  <label class="col-form-label mt-4" htmlFor="inputNome">Nome</label>
  <input type="text" class="form-control" placeholder="Digite o nome" id="inputNome"
  value={this.state.nome} onChange={(e)=> this.setState({nome: e.target.value})}/>
    </div>

    <div class="form-group">
  <label class="col-form-label mt-4" htmlFor="inputCargaHoraria">Carga Horária</label>
  <input type="number" class="form-control" placeholder="Digite uma carga horária" id="inputCargaHoraria"
  value={this.state.cargaHoraria} onChange={(e)=> this.setState({cargaHoraria: e.target.value})}/>
</div>

<div class="form-group">
  <label class="col-form-label mt-4" for="inputPeriodos">Periodos</label>
  <input type="number" class="form-control" placeholder="Digite a quantidade periodos" id="inputPeriodos"
  value={this.state.periodos} onChange={(e)=> this.setState({periodos: e.target.value})}/>
</div>

<div class="form-group">
  <label class="col-form-label mt-4" for="inputMensalidade">Mensalidade</label>
  <input type="number" class="form-control" placeholder="Digite uma mensalidade" id="inputMensalidade"
  value={this.state.mensalidade} onChange={(e)=> this.setState({mensalidade: e.target.value})}/>
</div>
<div class="form-group">
  <label class="col-form-label mt-4" for="inputInstituicaoId">Instituição ID</label>
  <input type="number" class="form-control" placeholder="Digite o Id da Instituição" id="inputInstituicaoId"
  value={this.state.instituicaoID} onChange={(e)=> this.setState({instituicaoID: e.target.value})}/>
</div>
       <ButtonSave showDatas={this.saves}/>
      </form>
    </div>
  );

}
}
