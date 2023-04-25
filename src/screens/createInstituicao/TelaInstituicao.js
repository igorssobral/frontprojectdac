import React from 'react';
import '../../screens/Telas.css'
import FormGroup from '../../components/FormGroup';
import InstituicaoApiService from '../../services/InstituicaoApiService';
import { showSuccessMessage, showErrorMessage } from '../../components/Toastr';

export default class TelaInstituicao extends React.Component {

  state = {
    nome: '',
    email: '',
    telefone: ''
  }


  constructor(){
    super();
    this.service = new InstituicaoApiService();
  }
  saves = () => {

    const errors = this.validate();
    
    if(errors.length > 0){
        errors.forEach( (message ) => {
          showErrorMessage(message);
        } );
        return false;
    }

    this.service.create(
    {
    nome: this.state.nome,
    email: this.state.email,
    telefone: this.state.telefone
    

  }
  ).then( message => 
    {
        showSuccessMessage(`Instituição ${this.state.nome} criada com sucesso!`);
        
    }
).catch( error => 
    {
        console.log(error.response);
    }
);

}

validate = () => {
  const errors = [];

  if(!this.state.nome){
      errors.push('Campo Nome é obrigatório!');
  }

  if(!this.state.email){
    errors.push('Campo Email é obrigatório!');
}else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
    errors.push('Informe um email válido!');
}

  if(!this.state.telefone){
      errors.push('Campo Telefone é obrigatório!');
  }

  return errors;
}

  render(props) {
    return (

      <div className='tela'>
        <h2>{this.props.titulo}</h2>
        <hr />
        <span className="fechar-tela" onClick={this.props.onFechar}>X</span>
        <form>
          <FormGroup label="Nome" htmlFor="inputNome">

            <input type="text" class="form-control" placeholder="Digite o nome" id="inputNome"
              value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
          </FormGroup>
          <FormGroup label="Email" htmlFor="inputEmail">

            <input type="email" class="form-control" placeholder="Digite um email" id="inputEmail"
              value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </FormGroup>
          <FormGroup label="Telefone" htmlFor="inputTelefone">

            <input type="tel" class="form-control" placeholder="Digite um telefone" id="inputTelefone"
              value={this.state.telefone} onChange={(e) => this.setState({ telefone: e.target.value })} />
          </FormGroup>

          <button type='button' className='save-instituicao'onClick={this.saves} >Salvar</button>
        </form>
      </div>
    );
  }
}
