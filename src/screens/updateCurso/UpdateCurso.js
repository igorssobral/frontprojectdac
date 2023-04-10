import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import FormGroup from "../../components/FormGroup";
import Card from "../../components/Card";



class UpdateCurso extends React.Component {


    state = {
        id: 0,
        nome: '',
        cargaHoraria: 0,
        periodos: 0,
        mensalidade: 0,
        instituicaoId: 0

    }





    update = () => {
        axios.put(`http://localhost:8080/curso/${this.state.id}`,

            {
                nome: this.state.nome,
                cargaHoraria: this.state.cargaHoraria,
                periodos: this.state.periodos,
                mensalidade: this.state.mensalidade,
                instituicaoId: this.state.instituicaoId

            }
        ).then(response => {
            console.log(response);
            alert(`Curso ${this.state.name} atualizado com sucesso`);
            this.props.history.push('/viewCurso');
        }
        ).catch(error => {
            console.log(error.response);
        }


        );


    }

    cancel = () => {
        this.props.history.push('/viewHome');
    }




    render() {

        return (

            <div className='container' >
                <Card title="Atualização de Curso">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">

                                <FormGroup label="Nome" htmlFor="inputNome">

                                    <input type="text"
                                        className="form-control"
                                        placeholder="Digite o nome" id="inputNome"
                                        value={this.state.nome}
                                        onChange={(e) => this.setState({ nome: e.target.value })} />
                                </FormGroup>

                                <FormGroup label="Carga Horária" htmlFor="inputCh">
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Digite uma carga horária"
                                        id="inputCh"
                                        value={this.state.cargaHoraria}
                                        onChange={(e) => this.setState({ cargaHoraria: e.target.value })} />
                                </FormGroup>

                                <FormGroup label="Periodo" htmlFor="inputPeriodo">
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Digite um Periodo"
                                        id="inputPeriodo"
                                        value={this.state.periodos}
                                        onChange={(e) => this.setState({ periodos: e.target.value })} />
                                </FormGroup>

                                <FormGroup label="Mensalidade" htmlFor="inputMensalidade">
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Digite uma mensalidade"
                                        id="inputMensalidade"
                                        value={this.state.mensalidade}
                                        onChange={(e) => this.setState({ mensalidade: e.target.value })} />
                                </FormGroup>

                                <FormGroup label="Instituição ID" htmlFor="inputInsID">
                                    <input type="number"
                                        className="form-control"
                                        placeholder="Digite um Periodo"
                                        id="inputInsID"
                                        value={this.state.instituicaoId}
                                        onChange={(e) => this.setState({ instituicaoId: e.target.value })} />
                                        
                                </FormGroup>

                                <br />
                                <br />

                                <button onClick={this.update} type="button" className="btn btn-success">
                                    <i className="pi pi-save"></i> Atualizar
                                </button>

                                <button onClick={this.cancel} type="button" className="btn btn-danger">
                                    <i className="pi pi-times"></i> Cancelar

                                </button>

                                <br />
                                <div className="row" >
                                    <div className="col-md-12">
                                        <div className="bs-component" >



                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                </Card>
            </div>
        )
    }
}

export default withRouter(UpdateCurso);