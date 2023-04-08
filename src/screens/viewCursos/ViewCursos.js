import React from "react";

import { withRouter } from 'react-router-dom';

// import axios from 'axios';
import CursosTables from "../../components/CursosTables";

import './ViewCursos.css'

class ViewCursos extends React.Component{

    state = {
        nome: 'ADS',
        InstituicaoID: '',
        id: '',
        cursos: [
            {
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },
              {
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },
              {
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              },{
                id: 1,
                nome: 'ADS',
                cargaHoraria: 2000,
                periodos: 7,
                mensalidade: 0,
                instituicaoID: 1
              
              }

        ]
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
        if (this.state.InstituicaoID != '') {
            if (params != '?') {
                params = `${params}$`;
            }

            params = `${params}name=${this.state.InstituicaoID}`
        }
        

           
        
    //     axios.get(`http://localhost:8080/Instituicao${params}`)
    //         .then(response => {
    //             const instituicoes = response.data;
    //             this.setState({ instituicoes });
    //             console.log(instituicoes)
    //         }
    //         ).catch(error => {
    //             console.log(error.response);
    //         }
    //         );
    }


    render() {
        return (
            <div>
                <h2>Consultar</h2>
                <hr />
                <form>
                    <div class="form-group">
                        <label class="col-form-label mt-4" 
                        htmlFor="inputID">Id</label>
                        <input type="text" class="form-control" 
                        placeholder="Digite o ID" id="inputID"
                        value={this.state.id} 
                        onChange={(e) => this.setState({ id: e.target.value })} />
                    </div>
                    <div class="form-group">
                        <label class="col-form-label mt-4" 
                        htmlFor="inputNome">Nome</label>
                        <input type="text" class="form-control" 
                        placeholder="Digite o nome" id="inputNome"
                        value={this.state.nome} 
                        onChange={(e) => this.setState({ nome: e.target.value })} />
                    </div>
                    <div class="form-group">
                        <label class="col-form-label mt-4" htmlFor="inputIdIns">ID da Instituição</label>
                        <input type="number" class="form-control" placeholder="Digite um ID" id="inputIdIns"
                            value={this.state.InstituicaoID} onChange={(e) => this.setState({ InstituicaoID: e.target.value })} />
                    </div>
                    
                    <br />
                    <button onClick={this.find} type="button" class="btn btn-success">Buscar
                    
                        <i class="pi pi-search"></i>
                   </button>
                    <br />
                    <div className="row" >
                        <div className="col-md-12">
                            <div className="bs-component">
                                <br />
                                <CursosTables cursos = {this.state.cursos} />
                                
                            </div>
                        </div>  
                    </div>          
                    
                </form>
            </div>


        )
    }

}

export default withRouter(ViewCursos);