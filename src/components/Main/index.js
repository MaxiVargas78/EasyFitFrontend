import React from 'react';
import { Router, Route } from 'react-router';
import HomePage from '../HomePage';
import PageNotFound from '../PageNotFound';
import NuevoRegistro from '../NuevoRegistro';
import iniciarSesion from '../InicioSesion';
import Novedades from '../Novedades';
<<<<<<< HEAD
import Perfil from'../Perfil';
import EditPerfil from '../EditPerfil';
import  FilterableContactTable from '../Rutinas';
=======
>>>>>>> FrontReal-1

const Routes = props => (
  <Router {...props}>
    <Route path="/" component={HomePage} />
    <Route path="/registro" component={NuevoRegistro} />
    <Route path="/inicio-sesion" component={iniciarSesion} />
    <Route path="/novedades" component={Novedades}/>
    <Route path="/perfil" component={Perfil} />
    <Route path="/inicio-sesion-edit" component={EditPerfil} />
    <Route path="/Rutinas" component={FilterableContactTable} />
    <Route path="*" component={PageNotFound} />
    
  </Router>

  
);

export default Routes;




