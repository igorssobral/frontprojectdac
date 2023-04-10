import React from "react";

import { withRouter } from "react-router-dom";
import axios from 'axios';

import InstituicaoTables from "../../components/InstituicaoTables";

import './ViewInstituicoes.css'
import FormGroup from "../../components/FormGroup";
import Card from "../../components/Card";

class ViewInstituicao extends React.Component {


    state = {
        name: '',
        email: '',
        telefone: '',
        id: '',
        instituicoes: [

        ]
    }

    find = () => {
        var params = '?';

        if (this.state.id !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}id=${this.state.id}`
        }
        if (this.state.name !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}name=${this.state.name}`
        }
        if (this.state.email !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}email=${this.state.email}`
        }
        if (this.state.telefone !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}telefone=${this.state.telefone}`
        }
        axios.get(`http://localhost:8080/instituicao${params}`

        ).then(response => {
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
        axios.delete(`http://localhost:8080/instituicao/${instituicaoId}`
        ).then(response => {
            alert('Instituição deletada com  Sucesso!')
            this.find();
        }
        ).catch(error => {
            console.log(error.response);
            alert('Delete primeiramente o curso que está ligado a essa instituição!');
        }
        );
    }

    edite = (instituicaoId) => {
        this.props.history.push(`/updateInstituicao/${instituicaoId}`);
    }


    render() {
        return (

            <div>
                <Card title="Consulta Instituições">

                  

                    <FormGroup label="ID" htmlFor="inputId">
                        <input type="text" className="form-control"
                            placeholder="Digite um ID" id="inputId"
                            value={this.state.id}
                            onChange={(e) => this.setState({ id: e.target.value })} />

                    </FormGroup>

                    <FormGroup label="Nome" htmlFor="inputNome">
                        <input type="text" className="form-control"
                            placeholder="Digite o nome" id="inputNome"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />

                    </FormGroup>

                    <FormGroup label="Email" htmlFor="inputEmail">
                        <input type="email" className="form-control"
                            placeholder="Digite um email"
                            id="inputEmail"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })} />

                    </FormGroup>

                    <FormGroup label="Telefone" htmlFor="inputTelefone">
                        <input type="tel"
                            className="form-control"
                            placeholder="Digite um telefone"
                            id="inputTelefone"
                            value={this.state.telefone}
                            onChange={(e) => this.setState({ telefone: e.target.value })} />

                    </FormGroup>

                   

                    <button onClick={this.find} type="button" className="btn btn-success">Buscar

                        <i className="pi pi-search"></i>
                    </button>

                   

                    <div className="row" >
                        <div className="col-md-12">
                            <div className="bs-component" >
                                <br />
                                <InstituicaoTables instituicoes={this.state.instituicoes}
                                    edite={this.edite} delete={this.delete}
                                />
                            </div>
                        </div>
                    </div>

                </Card>
            </div>


        )
    }

}
export default withRouter(ViewInstituicao);