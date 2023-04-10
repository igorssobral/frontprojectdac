import axios from 'axios';
import React from 'react'


import { withRouter  } from 'react-router-dom';

import Card from '../../components/Card';
import FormGroup from '../../components/FormGroup';





class DeleteCurso extends React.Component{

    state = {
        id: 0,
    }



    delete = () => {
        axios.put(`http://localhost:8080/curso/${this.state.id}`
        ).then( response => 
            {
                alert(`Usuário ${this.state.id} deletado com sucesso`);
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
    }

    cancel = () => {
        this.props.history.push('/');
    }

    render(){
        return (
            <div className='container'>
                <Card title="Exclusão de Curso">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                                <FormGroup label="Id: *" htmlFor="inputId">
                                    <input type="text" 
                                        id="inputId" 
                                        className="form-control"
                                        name="name"
                                        onChange={e => this.setState({id: e.target.value})} />
                                </FormGroup>
                                <button onClick={this.delete} type="button" className="btn btn-success">
                                    <i className="pi pi-save"></i> Deletar
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

export default withRouter(DeleteCurso);