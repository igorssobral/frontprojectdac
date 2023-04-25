import React,{ useState, useEffect } from "react";
import NavbarItems from "./NavbarItems";
import { AuthConsumer } from "../main/SessionProvider";
import "./Navbar.css";

function Navbar(props){


    const [state, setState] = useState({
        instituicaoDropdown: false,
        cursoDropdown: false
      });
    
      const handleClickInstituicao = () => {
        setState({ ...state, instituicaoDropdown: !state.instituicaoDropdown });
      }
    

      const handleClickCurso = () => {
        setState({ ...state, cursoDropdown: !state.cursoDropdown });
      }

 const getLoggedUser = () =>{
        var value = localStorage.getItem('loggedUser');
        var user = JSON.parse(value);

        if (!user) {
            useEffect(() => {
                const userLoggedElement = document.querySelector('.user-logged');
                userLoggedElement.style.backgroundColor = 'red';
                userLoggedElement.style.borderColor = 'red';
        
              }, []);
            return " ";
    
          }

        return user;
      }

     
    
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/ViewHome">Gerenciamento Instituicional </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav">
                        <NavbarItems render={props.isAuthenticated} href="/ViewHome" label="Home" />
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" 
                                data-bs-toggle="dropdown"
                                href="#instituicaoDropdown" role="button" 
                                aria-haspopup="true"
                                aria-expanded="false"
                                 onClick={handleClickInstituicao }>Instituição</a>

                            <div render={props.isAuthenticated} className={state.instituicaoDropdown ? "dropdown-menu show" : "dropdown-menu"} >
                                <a className="dropdown-item" href="/ViewInstituicoes">Find</a>
                                <a className="dropdown-item" href="/UpdateInstituicao">Update</a>
                                <a className="dropdown-item" href="/DeleteInstituicao">Delete</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                href="#cursoDropdown" role="button" 
                                aria-haspopup="true"
                                aria-expanded="false"
                                onClick={handleClickCurso}>Curso
                            </a>
                            <div className={state.cursoDropdown ? "dropdown-menu show" : "dropdown-menu"} >
                                <a className="dropdown-item" href="/ViewCursos">Find</a>                               
                                <a className="dropdown-item" href="/UpdateCurso">Update</a>                               
                                <a className="dropdown-item" href="/DeleteCurso">Delete</a>
                            </div>
                            <div render={props.isAuthenticated}>
                               
                                <span  className="tittle-logged">Usuario Logado:</span>
                                <label className="user-logged" > 
                                <label className="user-name">{getLoggedUser().name}</label></label>
                            </div>
                            
                        </li>

                        <NavbarItems render={props.isAuthenticated} href="/" label="About" />
                        <NavbarItems render={!props.isAuthenticated} href="/login" label="Login" />
                    <NavbarItems render={props.isAuthenticated} href='/login' onClick={props.logout} label="Sair" />
                    </ul>

                </div>
            </div>
        </nav>
    )}
    export default () => (
        <AuthConsumer>
          {(context) => (
              <Navbar isAuthenticated={context.isAuthenticated} logout={context.end} />
          )}
        </AuthConsumer>
      )



