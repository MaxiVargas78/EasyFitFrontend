class LoginBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }
  
    submitLogin(e) {}
  
    render() {
      return (
        <div className="inner-container">
          <div className="header">
            Iniciar Sesión
          </div>
          <div className="box">
  
            <div className="input-group">
              <label htmlFor="username">Nombre de Usuario</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            <button
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Iniciar Sesión</button>
          </div>
        </div>
      );
    }
  
  }