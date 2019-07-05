import React, {Component} from 'react';
import Item from '../Rutinas/item';
import Button from '../Rutinas/boton';
import _ from 'lodash';
import '../Rutinas/App.css';
import Handlebars from 'handlebars';


class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      data : [
        {
          name  : "Sentadillas",
          cant   : "40", 
        }
      ]
      }
    };
    handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        username: event.target.username.value,
        Email: event.target.email.value,
        //phone_number: event.target.phone_number.value,
        password: event.target.password.value,
      };
      console.log(data);
      fetch("/signup", {
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
  

  
  /*componentDidMount() 
  {
    this.fetchData();
  };
  /*console.log(data);
  fetch("/signup" ,
 {
   router.post('/new',function(req, res, next) {
    res.locals.connection.query('insert into members(name,email) values(''+req.body.name+'',''+req.body.email+'')', function (error, results, fields) {
        if(error) throw error;
        res.send(JSON.stringify(results));
    }
    });
  });*/
   
 
  _remove(position)
  {
    let { data } = this.state;
 
    let newData = [
      ...data.slice(0, position),
      ...data.slice(position + 1),
    ]
 
    this.setState({ data : newData });
 
  }
 
  _add()
  {
    let { data } = this.state;
    let newData = [
      ...data,
      {
        name  : "Flexiones",
        portion : "40",
       
      },
      {
        name : "Mancuernas",
        portion: "40",
      
      },
      {
        name : "Barras",
        portion : "40",
       
      },
    ]
    this.setState({ data : newData });
  }
 
  _getTotal()
  {
    return _.sumBy(this.state.data, function(o) { return o.price; });;
  }

  render() 
  {
    return (
      <div className="app">
        <h1>Selecciona tu rutina</h1>
        <ul className="todo-list">
          {this.state.data.map(
            (item,index) =>
              <Item data={item} key={index} onRemove={ () => this._remove(index)} />
            )
          }
        </ul>
        <div className="footer">
          <Button
            onClick={this._add.bind(this)}
            name="Añadir ejercicio"
          />
          <h4> {this._getTotal()}</h4>
        </div>
      </div>
    );
  }

/*render()
{
  return(
    <div className="container p-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card text-center">
            <div className="card-body">
            <h3 className="card-title text-uppercase">
        

            </h3>
            <p className="m-2"> Descripcion </p>
            <a href="" className="btn btn-danger">Eliminar link</a>
            <a href="" className="btn btn-secondary">Editar</a>
            
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
}*/
}
 
export default App;