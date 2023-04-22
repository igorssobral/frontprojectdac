import { withRouter } from "react-router-dom"
import FormGroup from "../../components/FormGroup";
import React from "react";

import Card from '../../components/Card';

import { showSuccessMessage, showErrorMessage } from '../../components/Toastr';

import { AuthContext  } from '../../main/SessionProvider';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  login = () => {
        this.context.login(
              this.state.username,
              this.state.password
        ).then(user =>  
          {
            if(user){
              localStorage.setItem('logedUser', JSON.stringify(user.data));
              showSuccessMessage(`Bem vindo, ${user.name}`);
              window.open('/viewUsers');
            }else{
              showErrorMessage('Login inválido!');
            }
          }
        ).catch( error => 
          {
            showErrorMessage('Erro processando autenticação: ', error);
          }
        );
  }

  createUser = () => {
    window.open('/cadastroUser', '_self');
  }

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-6' style={this.styles.colMd6} >
            <div className='bs-docs-section'>
              <Card title='Login'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='bs-component'>
                      <fieldset>
                        <FormGroup label='Usuário: *' htmlFor='inputUsername'>
                          <input type='text' className='form-control' id='inputUsername' 
                            area-aria-describedby='emailHelp' placeholder='Digite o usuário'
                            value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} />
                        </FormGroup>
                        <FormGroup label='Senha: *' htmlFor='inputPassword'>
                          <input type='password' className='form-control' id='inputPassword' 
                            placeholder='Digite a Senha'
                            value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} />
                        </FormGroup>
                        <button className='btn btn-success' onClick={this.login}>Entrar</button>
                        <button className='btn btn-danger' onClick={this.createUser}>Cadastrar</button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  styles = {
    colMd6 : {
      position: 'relative',
      left: '300px'
    }
  };

}

Login.contextType = AuthContext;
export default withRouter (Login);