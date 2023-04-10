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

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/ViewHome">Gerenciamento Instituicional </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav">
                        <NavbarItems href="/ViewHome" label="Home" />
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                                data-bs-toggle="dropdown"
                                href="#instituicaoDropdown" role="button" 
                                aria-haspopup="true"
                                aria-expanded="false"
                                 onClick={this.handleclickInstituicao }>Instituição</a>

                            <div className={this.state.instituicaoDropdown ? "dropdown-menu show" : "dropdown-menu"} >
                                <a className="dropdown-item" href="/ViewInstituicoes">Find</a>
                                <a className="dropdown-item" href="/DeleteInstituicao">Delete</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                href="#cursoDropdown" role="button" 
                                aria-haspopup="true"
                                aria-expanded="false"
                                onClick={this.handleclickCurso}>Curso
                            </a>
                            <div className={this.state.cursoDropdown ? "dropdown-menu show" : "dropdown-menu"} >
                                <a className="dropdown-item" href="/ViewCursos">Find</a>                               
                                <a className="dropdown-item" href="/DeleteCurso">Delete</a>
                            </div>
                        </li>

                        <NavbarItems href="/" label="About" />
                    </ul>

                </div>
            </div>
        </nav>
    )}


}

