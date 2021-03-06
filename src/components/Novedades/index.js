import React, { Component } from 'react';



class Novedades extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.username.value,
      email: event.target.email.value,
      //phone_number: event.target.phone_number.value,
      dob: event.target.dob.value,
    };
    console.log(data);
    fetch("/signup", {
      method: 'POST',
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
      <div className="section-content-block section-process">
        <div className="col-md-12 col-sm-12 text-center">
          <h2 className="section-heading"><span>Inicia</span> Sesión</h2>
          <p className="section-subheading">Hacer ejercicio nunca fue tan fácil<span className="highlightme"></span></p>
        </div>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8 appointment-form-wrapper text-center clearfix">
            <form onSubmit={event => this.handleSubmit(event)} className="appoinment-form">
              <div className="form-group col-md-6">
                <input required name="username" className="form-control" placeholder="Nombre de Usuario" type="text" />
              </div>
              <div className="form-group col-md-6">
                <input required id="dob" className="form-control" placeholder="contraseña" type="text" />
              </div>
              <div className="form-group col-md-12 col-sm-12 col-xs-12">
                <button className="btn-submit" type="submit">Inicia Sesion</button>
              </div>
            </form>
          </div>
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}
export default Novedades;