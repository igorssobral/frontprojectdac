import React from "react";
import { withRouter } from "react-router-dom";
import FormGroup from "../../components/FormGroup";
import Card from "../../components/Card";
import CursoApiService from "../../services/CursoApiService";



class UpdateCurso extends React.Component {





    constructor(){
        super();
        this.service = new CursoApiService();
    }

    state = {
        id: 0,
        nome: '',
        cargaHoraria: '',
        periodos: '',
        mensalidade: '',
        instituicaoId: ''

    }


    findById = (cursoId) => {
        this.service.find(cursoId)
        .then( response => 
            {
                const curso = response.data[0];
                const id = curso.id;
                const name = curso.name;
                const cargaHoraria = curso.cargaHoraria;
                const mensalidade = curso.mensalidade;
                const instituicaoId = curso.instituicaoId;

                this.setState({id, name, cargaHoraria, mensalidade, instituicaoId});
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
    }



    update = () => {
       this.service.update(this.state.id,

            {
                nome: this.state.nome,
                cargaHoraria: this.state.cargaHoraria,
                periodos: this.state.periodos,
                mensalidade: this.state.mensalidade,
                instituicaoId: this.state.instituicaoId

            }
        ).then(response => {
            console.log(response);
            alert(`Curso ${this.state.nome} atualizado com sucesso`);
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

                                <FormGroup label="ID" htmlFor="inputId">

                                    <input type="text"
                                        className="form-control"
                                        placeholder="Digite o Id" id="inputId"
                                        
                                        onChange={(e) => this.setState({ id: e.target.value })} />
                                </FormGroup>
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
                                        placeholder="Digite o ID da Instituição"
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