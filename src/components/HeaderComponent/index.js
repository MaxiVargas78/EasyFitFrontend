import React from "react";

const HeaderComponent = () => (
  <header className="main-header clearfix" data-sticky_header="true">
    <div className="top-bar clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <p>Bienvenido a EasyFit, tu gimnasio inteligente</p>
          </div>
          <div className="col-md-4col-sm-12">
            <div className="top-bar-social">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sticky-wrapper">
      <section className="header-wrapper navgiation-wrapper">
        <div className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="logo" href="/">
                <img alt="" src="images/Easyfit.png" />
              </a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="/registro" title="Registro">Registrate</a></li>
                <li><a href="/inicio-sesion" title="Inicio Sesión">Inicia Sesión</a></li>
                <li><a href="/Novedades" title="Novedades">Novedades</a></li>

              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </header>
);

export default HeaderComponent;
