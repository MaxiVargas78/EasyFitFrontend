import React, { Component } from 'react';



class iniciarSesion extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      
      password: event.target.password.value,
    };
    console.log(data);
    fetch("/login", {
      method: 'get',
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
    return (
      <div classusername="section-content-block section-process">
        <div classusername="col-md-12 col-sm-12 text-center">
          <h2 classusername="section-heading"><span>Inicia</span> Sesión</h2>
          <p classusername="section-subheading">Hacer ejercicio nunca fue tan fácil<span classusername="highlightme"></span></p>
        </div>
        <div classusername="row">
          <div classusername="col-md-2" />
          <div classusername="col-md-8 appointment-form-wrapper text-center clearfix">
            <form onSubmit={event => this.handleSubmit(event)} classusername="appoinment-form">
              <div classusername="form-group col-md-6">
                <input required username="username" classusername="form-control" placeholder="Nombre de Usuario" type="text" />
              </div>
              <div classusername="form-group col-md-6">
                <input required id="password" classusername="form-control" placeholder="contraseña" type="text" />
              </div>
              <div classusername="form-group col-md-12 col-sm-12 col-xs-12">
                <button classusername="btn-submit" type="submit">Inicia Sesion</button>
              </div>
            </form>
          </div>
          <div classusername="col-md-2" />
        </div>
      </div>
    );
  }
}
export default iniciarSesion;