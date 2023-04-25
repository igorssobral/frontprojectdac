import React from "react";

import { withRouter } from 'react-router-dom';

import CursosTables from "../../components/CursosTables";

import './ViewCursos.css'
import FormGroup from "../../components/FormGroup";
import Card from "../../components/Card";
import CursoApiService from "../../services/CursoApiService";

class ViewCursos extends React.Component {

    state = {
        name: '',
        insId: '',
        cursos: [

        ]
    }

    constructor(){
        super();
        this.service = new CursoApiService();
    }

    componentDidMount(){
        this.find();
    }

    find = () => {
        var params = '?';

        if (this.state.name !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}name=${this.state.name}`
        }
        if (this.state.insId !== '') {
            if (params !== '?') {
                params = `${params}&`;
            }

            params = `${params}insId=${this.state.insId}`
        }

        this.service.find(params)
        .then(response => {
            const cursos = response.data;
            this.setState({ cursos });
            console.log(cursos)
        }
        ).catch(error => {
            console.log(error.response);
        }
        );
    }

    delete = (cursoId) => {

        this.service.delete(cursoId)
        .then(response => {

            this.find();
        }
        ).catch(error => {
            console.log(error.response);
        }
        );
    }

    
    render() {
        return (

            <div>
            

                <Card title = "Consulta Cursos">

                    <FormGroup>
                        <label class="col-form-label mt-4"
                            htmlFor="inputNome">Nome</label>
                        <input type="text" class="form-control"
                            placeholder="Digite o nome" id="inputNome"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </FormGroup>

                    <FormGroup>
                        <label class="col-form-label mt-4" htmlFor="inputIdIns">ID da Instituição</label>
                        <input type="number" class="form-control" placeholder="Digite um ID" id="inputIdIns"
                            value={this.state.insId} onChange={(e) => this.setState({ insId: e.target.value })} />
                    </FormGroup>

                    <br />
                    <button onClick={this.find} type="button" class="btn btn-success">Buscar

                        <i class="pi pi-search"></i>

                    </button>
                    <br />
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="bs-component">
                                <br />
                                <CursosTables cursos={this.state.cursos}
                                   delete={this.delete}
                                     />
                            </div>
                        </div>
                    </div>

                </Card>
            </div>


        )
    }

}

export default withRouter(ViewCursos);