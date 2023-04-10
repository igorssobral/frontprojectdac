import React from 'react';
import '../../screens/Telas.css'
import FormGroup from '../../components/FormGroup';
import axios from 'axios';

export default class TelaInstituicao extends React.Component {

  state = {
    nome: '',
    email: '',
    telefone: ''
  }

  saves = () => {
    axios.post('http://localhost:8080/instituicao',
    {
    nome: this.state.nome,
    email: this.state.email,
    telefone: this.state.telefone
  }
  ).then(response =>
    {
      console.log(response);
      alert('Instituição foi salva com Sucesso!')
    }

  ).catch( error =>
    {
    console.log(error.response);
}
  );

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

          <button className='save-instituicao'onClick={this.saves} >Salvar</button>
        </form>
      </div>
    );
  }
}
