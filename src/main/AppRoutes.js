import React from "react";

import { Route, BrowserRouter, Switch } from "react-router-dom";

import ViewInstituicoes from '../screens/viewInstituicao/viewInstituicoes';
import ViewHome from '../screens/viewHome/ViewHome'
import ViewCursos from "../screens/viewCursos/ViewCursos";
import UpdateInstituicao from "../screens/updateInstituicao/UpdateInstituicao";
import UpdateCurso from "../screens/updateCurso/UpdateCurso";
import DeleteInstituicao from "../screens/deleteInstituicao/DeleteInstituicao";
import DeleteCurso from "../screens/deleteCurso/DeleteCurso";

function AppRoutes() {
    
    return (
        <BrowserRouter>

            <Switch>
                <Route component={ViewHome} path="/viewHome" />
                <Route component={ViewInstituicoes} path="/viewInstituicoes" />
                <Route component={ViewCursos} path="/viewCursos" />
                <Route component={UpdateInstituicao} path="/updateInstituicao/:id" />
                <Route component={UpdateCurso} path="/updateCurso/:id" />
                <Route component={DeleteInstituicao} path="/deleteInstituicao" />
                <Route component={DeleteCurso} path="/deleteCurso" />
            </Switch>
        </BrowserRouter>
    );
}


export default AppRoutes;