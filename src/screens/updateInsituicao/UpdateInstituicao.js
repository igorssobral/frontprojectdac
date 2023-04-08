import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";



class UpdateInstituicao extends React.Component {


    state = {
        id: 0,
        name : 'fff',
        email: 'fgfg',
        telefone: '3434', 
        
    }

  

   

    update = () => {
        axios.put(`http://localhost:8080/Instituicao/${this.state.id}`, 
            {
                name: this.state.name,
                email: this.state.email,
                telfone: this.state.telefone
               
            }
        )

        
    }

    cancel = () => {
        this.props.history.push('/ViewHome');
    }




    render() {
        return (
            <div>
                <h2>Atualizar</h2>
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
                    <button  type="button" class="btn btn-success">Buscar</button>
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

                </form>
            </div>
        )
    }
}

export default withRouter(UpdateInstituicao);