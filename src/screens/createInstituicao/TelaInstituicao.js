import React from 'react';
import '../../screens/Telas.css'
import ButtonSave from '../../components/ButtonSave';

export default class TelaInstituicao extends React.Component {

  state ={
    nome: '',
    email: '',
    telefone: ''
  }

  saves = () =>{
    console.log(this.state.nome)
    console.log(this.state.email)
    console.log(this.state.telefone)
  }

render(props){
  return (

    <div className='tela'>
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
  <label class="col-form-label mt-4" htmlFor="inputEmail">Email</label>
  <input type="email" class="form-control" placeholder="Digite um email" id="inputEmail"
  value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})}/>
    </div>
    <div class="form-group">
  <label class="col-form-label mt-4" htmlFor="inputTelefone">Telefone</label>
  <input type="tel" class="form-control" placeholder="Digite um telefone" id="inputTelefone"
  value={this.state.telefone} onChange={(e)=> this.setState({telefone: e.target.value})}/>
    </div>
        
        <ButtonSave showDatas={this.saves}/>
      </form>
    </div>
  );
}
}
