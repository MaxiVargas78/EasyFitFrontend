import React, {Component} from 'react';
import _ from 'lodash';
import '../Rutinas/App.css';
import ReactDOM from 'react-dom';
//import ContactRow from './Clases/ContactRow';
import ContactTable from './Clases/ContactTable';
import SearchBar from './Clases/SearchBar';
 
var CONTACTS = [
  {Ejercicio: '', Tipo: '', Calorias: ''},
  {Ejercicio: '', Tipo: '', Calorias: ''},
  {Ejercicio: '', Tipo: '', Calorias: ''},
  {Ejercicio: '', Tipo: '', Calorias: ''},
  {Ejercicio: '', Tipo: '', Calorias: ''},
  
];
 
class FilterableContactTable extends Component {
  constructor(props) {
    super(props);
    // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
    this.state = {
      filterText: ''
    };
    
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    
  }

  handleFilterTextInput(filterText) {
    //Call to setState to update the UI
    this.setState({
      filterText: filterText
    });
    //React knows the state has changed, and calls render() method again to learn what should be on the screen
  }
  
  render() {
    
    return (
      <div>
        <h1>Inicia tu Rutina</h1>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <ContactTable
          contacts={CONTACTS}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}


/*
ReactDOM.render(
  <FilterableContactTable contacts={CONTACTS} />,
  document.getElementById('root')
);*/

export default FilterableContactTable;