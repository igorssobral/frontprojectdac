import React from "react";
import NavbarItems from "./NavbarItems";


export default class Navbar extends React.Component {
    
   state = {
        instituicaoDropdown : false,
        cursoDropdown : false
    }

   handleclickInstituicao = () => {
        this.setState(state => {
            return {instituicaoDropdown: !state.instituicaoDropdown}
        })
    }

  handleclickCurso = () =>{
       this.setState(state =>{
            return {cursoDropdown: !state.cursoDropdown}
        });
    }

    render(){
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Gerenciamento Instituicional </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav">
                        <NavbarItems href="/ViewHome" label="Home" />
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" 
                                data-bs-toggle="dropdown"
                                href="#instituicaoDropdown" role="button" 
                                aria-haspopup="true"
                                aria-expanded="false"
                                 onClick={this.handleclickInstituicao }>Instituição</a>

                            <div class={this.state.instituicaoDropdown ? "dropdown-menu show" : "dropdown-menu"} >
                                <a class="dropdown-item" href="/UpdateInstituicao">Update</a>
                                <a class="dropdown-item" href="/ViewInstituicoes">Find</a>
                                <a class="dropdown-item" href="/">Delete</a>
                            </div>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                href="#cursoDropdown" role="button" 
                                aria-haspopup="true"
                                aria-expanded="false"
                                onClick={this.handleclickCurso}>Curso
                            </a>
                            <div class={this.state.cursoDropdown ? "dropdown-menu show" : "dropdown-menu"} >
                                <a class="dropdown-item" href="/">Update</a>
                                <a class="dropdown-item" href="/ViewCursos">Find</a>                               
                                <a class="dropdown-item" href="/">Delete</a>
                            </div>
                        </li>

                        <NavbarItems href="/" label="About" />
                    </ul>

                </div>
            </div>
        </nav>
    )}


}

