import React from "react";

import { withRouter } from 'react-router-dom';

import axios from 'axios';

import InstituicaoTables from "../../components/InstituicaoTables";

import './ViewInstituicoes.css'

 class ViewInstituicao extends React.Component {


    state = {
        name: 'igor',
        email: 'igor@gmail.com',
        telefone: '8888',
        id: '1',
        instituicoes: [{
            name: 'igor',
        email: 'igor@gmail.com',
        telefone: '8888',
        id: '1'
        }]
    }

    find = () => {
        var params = '?';

        if (this.state.id != '') {
            if (params != '?') {
                params = `${params}$`;
            }

            params = `${params}name=${this.state.id}`
        }
        if (this.state.nome != '') {
            if (params != '?') {
                params = `${params}$`;
            }

            params = `${params}name=${this.state.nome}`
        }
        if (this.state.email != '') {
            if (params != '?') {
                params = `${params}$`;
            }

            params = `${params}name=${this.state.email}`
        }
        if (this.state.telefone != '') {
            if (params != '?') {
                params = `${params}$`;
            }

            params = `${params}name=${this.state.telefone}`
        }
        axios.get(`http://localhost:8080/Instituicao${params}`)
            .then(response => {
                const instituicoes = response.data;
                this.setState({ instituicoes });
                console.log(instituicoes)
            }
            ).catch(error => {
                console.log(error.response);
            }
            );
    }
    delete = (instituicaoId) => {
        axios.delete(`/Instituicao/${instituicaoId}`
        ).then( response => 
            {
               
                this.find();
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
    }

    edit = (instituicaoId) => {
        this.props.history.push(`/updateInstituicao/${instituicaoId}`);
    }


    render() {
        return (
            <div>
                <h2>Consultar</h2>
                <hr />
                <form>
                    <div class="form-group">
                        <label class="col-form-label mt-4" 
                        htmlFor="inputNome">Nome</label>
                        <input type="text" class="form-control" 
                        placeholder="Digite o nome" id="inputNome"
                        value={this.state.nome} 
                        onChange={(e) => this.setState({ nome: e.target.value })} />
                    </div>
                    <div class="form-group">
                        <label class="col-form-label mt-4" htmlFor="inputEmail">Email</label>
                        <input type="email" class="form-control" placeholder="Digite um email" id="inputEmail"
                            value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    </div>
                    <div class="form-group">
                        <label class="col-form-label mt-4" htmlFor="inputTelefone">Telefone</label>
                        <input type="tel" class="form-control" placeholder="Digite um telefone" id="inputTelefone"
                            value={this.state.telefone} onChange={(e) => this.setState({ telefone: e.target.value })} />
                    </div>
                    <br />
                    <button onClick={this.find} type="button" class="btn btn-success">Buscar
                    
                        <i class="pi pi-search"></i>
                   </button>
                    <br />
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="bs-component" >
                                <br />
                                <InstituicaoTables instituicoes = {this.state.instituicoes} 
                                delete ={this.delete}
                                edit= {this.edit} />
                            </div>
                        </div>  
                    </div>          
                    
                </form>
            </div>


        )
    }

}
export default withRouter(ViewInstituicao);