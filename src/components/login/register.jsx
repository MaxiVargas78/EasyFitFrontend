import React, {Component} from "react";
import loginImg from "../../Easyfit.png";


export class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Registrate </div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="Username">Nombre de Usuario</label>
              <input type="text" name="Username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input type="text" name="Email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick type="button" className="btn">
                        Registrate
          </button>
        </div>
      </div>
    );
  }
}
