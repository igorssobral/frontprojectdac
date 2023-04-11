import React from "react";
import axios from "axios";

import FormGroup from "../../components/FormGroup";
import Card from "../../components/Card";
import { withRouter } from "react-router-dom";


class UpdateInstituicao extends React.Component {

    state = {
        id: '' ,
        name : '',
        email: '',
        telefone: '', 
        
    }


    componentDidMount(){
        const params = this.props.match.params;
        const id = params.id;
       return  this.findById(id);
    }
  
    findById = (instituicaoId) => {
        axios.get(`http://localhost:8080/instituicao/${instituicaoId}`)
        .then( response => 
            {
                const instituicao = response.data[0];
                const id = instituicao.id;
                const name = instituicao.name;
                const email = instituicao.email;
                const telefone = instituicao.telefone;

                this.setState({id, name, email,telefone});
            }
        ).catch( error => 
            {
                console.log(error.response);
            }
        );
    }
   

    update = () => {
        axios.put(`http://localhost:8080/instituicao/${this.state.id}`, 
           
        {
                nome: this.state.name,
                email: this.state.email,
                telefone: this.state.telefone
               
            }
        ).then(response => {
            
            console.log(response)
        }
        ).catch(error => {
            console.log(error.response);
        }
        );

        
    }

    
    
    cancel = () => {
       this.props.history.push("/ViewHome")
    }




    render() {
        return (
            <div className='container'>
                <Card title="Atualização da Instituicao">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">
                    <FormGroup label="ID" htmlFor="inputId">
                        
                        <input type="text" className="form-control"
                             id="inputId" 
                            value={this.state.id}
                            placeholder="Digite um Id"
                           
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

export default withRouter(UpdateInstituicao);