import React from "react";
import { withRouter } from "react-router-dom";

import FormGroup from "../../components/FormGroup";

import { showSuccessMessage, showErrorMessage } from '../../components/Toastr';
import Card from "../../components/Card";
import UserApiService from "../../services/UserApiService";


class ScreenCreateUser extends React.Component{




constructor(){
    super();
    this.service = new UserApiService();
}



    state = {
        name : '',
        email: '',
        username: '',
        password: '',
        passwordRepeat : ''
    }
    
    create = () => {
        const errors = this.validate();
    
        if(errors.length > 0){
            errors.forEach( (message ) => {
                showErrorMessage(message);
            } );
            return false;
        }
    
        this.service.create( 
            {
                name: this.state.name,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password
            }
        ).then( message => 
            {
                showSuccessMessage(message.data);
                window.open("/login", '_self').setTimeout(1500);
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
    }
    
    cancel = () => {
        window.open('/','_self');
    }
    
    validate = () => {
        const errors = [];
    
        if(!this.state.name){
            errors.push('Campo Nome é obrigatório!');
        }
    
        if(!this.state.email){
            errors.push('Campo Email é obrigatório!');
        }else if(!this.state.email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            errors.push('Informe um email válido!');
        }
    
        if(!this.state.username){
            errors.push('Campo Usuario é obrigatório!');
        }
    
        if(!this.state.password){
            errors.push('Campo Senha é obrigatório!');
        }else if(this.state.password !== this.state.passwordRepeat){
            errors.push('As senhas não batem!');
        }
    
        return errors;
    }

    render(){
        return (
            <div className='container'>
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Nome: *" htmlFor="inputname">
                                    <input type="text" 
                                        id="inputname" 
                                        className="form-control"
                                        name="name"
                                        onChange={e => this.setState({name: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input type="email" 
                                        id="inputEmail"
                                        className="form-control"
                                        name="email"
                                        onChange={e => this.setState({email: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Usuario: *" htmlFor="inputUsername">
                                    <input type="text" 
                                        id="inputUsername"
                                        className="form-control"
                                        name="username"
                                        onChange={e => this.setState({username: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Senha: *" htmlFor="inputpassword">
                                    <input type="password" 
                                        id="inputpassword"
                                        className="form-control"
                                        name="password"
                                        onChange={e => this.setState({password: e.target.value})} />
                                </FormGroup>
                                <FormGroup label="Repita a Senha: *" htmlFor="inpuPasswordRepeat">
                                    <input type="password" 
                                        id="inpuPasswordRepeat"
                                        className="form-control"
                                        name="password"
                                        onChange={e => this.setState({passwordRepeat: e.target.value})} />
                                </FormGroup>
                                <button onClick={this.create} type="button" className="btn btn-success">
                                    <i className="pi pi-save"></i> Salvar
                                </button>
                                <button onClick={this.cancel} type="button" className="btn btn-danger">
                                    <i className="pi pi-times"></i> Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        )
    }
}

export default withRouter(ScreenCreateUser);

    //         <div className='tela'>
    //     <h2>{this.props.titulo}</h2>
    //     <hr />
    //     <span className="fechar-tela" onClick={this.props.onFechar}>X</span>
    //     <form>
    //       <FormGroup label="Nome" htmlFor="inputNome">

    //         <input type="text" class="form-control" placeholder="Digite o nome" id="inputNome"
    //           value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
    //       </FormGroup>
    //       <FormGroup label="Email" htmlFor="inputEmail">

    //         <input type="email" class="form-control" placeholder="Digite um email" id="inputEmail"
    //           value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
    //       </FormGroup>
    //       <FormGroup label="Senha" htmlFor="inputSenha">

    //         <input type="text" class="form-control" placeholder="Informe uma senha" id="inputSenha"
    //           value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} />
    //       </FormGroup>

    //       <button className='save-instituicao'onClick={this.saves} >Salvar</button>
    //     </form>
    //   </div>
   

