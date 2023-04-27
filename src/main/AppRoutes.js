import React from "react";

import { Route,  Redirect,Switch, BrowserRouter as Router} from "react-router-dom";


import ViewInstituicoes from '../screens/viewInstituicao/viewInstituicoes'
import ViewHome from '../screens/viewHome/ViewHome'
import ViewCursos from "../screens/viewCursos/ViewCursos";
import UpdateInstituicao from "../screens/updateInstituicao/UpdateInstituicao";
import UpdateCurso from "../screens/updateCurso/UpdateCurso";
import DeleteInstituicao from "../screens/deleteInstituicao/DeleteInstituicao";
import DeleteCurso from "../screens/deleteCurso/DeleteCurso";
import ScreenLogin from "../screens/login/ScreenLogin";
import ScreenCreateUser from "../screens/createUser/ScreenCreateUser";


import { AuthConsumer } from '../main/SessionProvider';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <AuthConsumer>
      {({ isAuthenticated }) => (
        isAuthenticated
          ? <Component {...props} />
          : <Redirect to='/login' />
      )}
    </AuthConsumer>
  )} />
);

const AppRoutes = () => (
  <Router>
    <Switch>
       
        <Route path="/login" component={ScreenLogin} />
        <Route path="/createUser" component={ScreenCreateUser} />

        <PrivateRoute path="/viewHome" component={ViewHome} />
        <PrivateRoute path="/viewInstituicoes" component={ViewInstituicoes} />
        <PrivateRoute path="/viewCursos" component={ViewCursos} />
        <PrivateRoute path="/updateInstituicao" component={UpdateInstituicao} />
        <PrivateRoute path="/updateCurso" component={UpdateCurso} />
        <PrivateRoute path="/deleteInstituicao" component={DeleteInstituicao} />
        <PrivateRoute path="/deleteCurso" component={DeleteCurso} />
     </Switch>
  </Router>
);

export default AppRoutes;