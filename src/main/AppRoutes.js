import React from "react";

import { Route, BrowserRouter, Switch, Redirect} from "react-router-dom";

import ViewInstituicoes from '../screens/viewInstituicao/ViewInstituicoes';
import ViewHome from '../screens/viewHome/ViewHome'
import ViewCursos from "../screens/viewCursos/ViewCursos";
import UpdateInstituicao from "../screens/updateInstituicao/UpdateInstituicao";
import UpdateCurso from "../screens/updateCurso/UpdateCurso";
import DeleteInstituicao from "../screens/deleteInstituicao/DeleteInstituicao";
import DeleteCurso from "../screens/deleteCurso/DeleteCurso";
import ScreenLogin from "../screens/login/ScreenLogin";
import ScreenCreateUser from "../screens/createUser/ScreenCreateUser";


import { AuthConsumer } from '../main/SessionProvider';

function RestrictedRoute( { component: Component, show, ...props } ){
   return (
       <Route exact {...props} render={ (componentProps) => {
           if(show){
               return (
                   <Component {...componentProps} />
               )
           }else{
               return(
                   <Redirect to={ {pathname : '/login', state : { from: componentProps.location } } } />
               )
           }
       }}  />
   )
}

function AppRoutes(props) {
    return (
        <BrowserRouter>

            <Switch> 
                <Route component={ScreenLogin} path="/login" />
                <Route component={ScreenCreateUser} path="/cadastroUser" />
               
                <RestrictedRoute show={props.isAuthenticade} component={ViewInstituicoes} path="/viewInstituicoes" />
                <RestrictedRoute show={props.isAuthenticade} component={ViewHome} path="/viewHome" />
                <RestrictedRoute show={props.isAuthenticade} component={ViewCursos} path="/viewCursos" />
                <RestrictedRoute show={props.isAuthenticade} component={UpdateInstituicao} path="/updateInstituicao" />
                <RestrictedRoute show={props.isAuthenticade} component={UpdateCurso} path="/updateCurso" />
                <RestrictedRoute show={props.isAuthenticade} component={DeleteInstituicao} path="/deleteInstituicao" />
                <RestrictedRoute show={props.isAuthenticade} component={DeleteCurso} path="/deleteCurso" />
               
            </Switch>
        </BrowserRouter>
    );
    }

export default () => (
    <AuthConsumer>
        { (context) => (<AppRoutes isAuthenticated={context.isAuthenticated} />) }
    </AuthConsumer>
 )