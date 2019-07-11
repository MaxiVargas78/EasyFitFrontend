import React, { Component } from 'react';
import iniciarSesion from '../InicioSesion';



class Perfil extends Component {
    handleDidMount = (event) => {
      event.preventDefault();
      const data = {
        username: event.target.username.value,
        email: event.target.email.value,
        //phone_number: event.target.phone_number.value,
        dob: event.target.dob.value,
      };
      console.log(data);
      fetch("/profile", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      }).then((respData) => {
        console.log(respData);
      }).catch((err) => {
        console.log(err);
      });
    }
  
    render() {
      return(
        <div className="section-content-block section-process">
          <div className="col-md-12 col-sm-12 text-center">
            <h2 className="section-heading"><span>PERFIL DE</span> USUARIO</h2>
            <p className="section-subheading">Revisa tus datos y mantenlos actualizados para mejorar los resultados.<span className="highlightme"></span></p>
          </div>
          <div className="col-md-12 col-sm-12 text-center">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 appointment-form-wrapper text-center clearfix">
              <form onSubmit={event => this.handleDidMount(event)} className="appoinment-form">
              <div className="input-group">
        
              <label htmlFor="text">Nombre Usuario:  </label>
              <input
                type="text"
                name="text"
                className="login-input"
                placeholder=""/>
            </div>
            <div className="input-group">
              <label htmlFor="text">Edad: </label>
              <input
                type="text"
                name="text"
                className="login-input"
                placeholder=""/>
            </div>
            <div className="input-group">
              <label htmlFor="text">Estatura: </label>
              <input
                type="text"
                name="text"
                className="login-input"
                placeholder= "" />
            </div>
            <div className="input-group">
              <label htmlFor="text">Peso:</label>
              <input
                type="text"
                name="text"
                className="login-input"
                placeholder=""/>
            </div>
            <div className="input-group">
              <label htmlFor="text">IMC:</label>
              <input
                type="text"
                name="text"
                className="login-input"
                placeholder=""/>
            </div>
               
                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <button>
                  <a href="/inicio-sesion" className="btn-submit"  type="submit "type="button" href="./inicio-sesion-edit" type="submit" >Actualizar datos </a>
                  </button>

                  <div className="form-group col-md-12 col-sm-12 col-xs-12">
                  <button>
                  <a href="/Rutinas" className="btn-submit"  type="submit "type="button" href="./Rutinas" type="submit" >Iniciar Rutina </a>
                  </button>
                </div>
                </div>
                </form>
              </div>
            </div>
      
            <div className="col-md-2" />
            </div>
          </div>
        
      );
    }
  }
  
  export default Perfil;
/*
  <div className="form-group col-md-6">
  <input required name="username" className="form-control" placeholder="Nombre de Usuario" type="text" />
</div>
<div className="form-group col-md-6">
  <input required name="email" className="form-control" placeholder="" type="email" />
</div>
<div className="form-group col-md-6">
  <input required id="dob" className="form-control" placeholder="" type="text" />
</div>
<div className="form-group col-md-6">
  <input required name="email" className="form-control" placeholder="" type="email" />
</div>
<div className="form-group col-md-6">
  <input required name="email" className="form-control" placeholder="" type="email" />
</div>
<div className="form-group col-md-6">
  <input required name="email" className="form-control" placeholder="" type="email" />
</div>
<div className="form-group col-md-6">
  <input required name="email" className="form-control" placeholder="" type="email" />
</div>*/


