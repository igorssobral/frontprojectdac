import React from "react";

import{Route, BrowserRouter} from "react-router-dom";

import ViewInstituicoes from '../screens/viewInstituicao/viewInstituicoes';
import ViewHome from '../screens/viewHome/ViewHome'
import ViewCursos from "../screens/viewCursos/ViewCursos";
import UpdateInstituicao from "../screens/updateInsituicao/UpdateInstituicao";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Route component={ViewHome} path="/viewHome" />
            <Route component={ViewInstituicoes} path="/viewInstituicoes"/>
            <Route component={ViewCursos} path="/viewCursos"/>
            <Route component={UpdateInstituicao} path="/updateInstituicao/:id"/>
            
        </BrowserRouter>
    );
}


export default AppRoutes;