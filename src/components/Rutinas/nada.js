import React from 'react';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ContactRow = /** @class */ (function (_super) {
    __extends(ContactRow, _super);
    function ContactRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactRow.prototype.render = function () {
        return (React.createElement("tr", null,
            React.createElement("td", null, this.props.contact.name),
            React.createElement("td", null, this.props.contact.phone),
            React.createElement("td", null, this.props.contact.email)));
    };
    return ContactRow;
}(React.Component));
var ContactTable = /** @class */ (function (_super) {
    __extends(ContactTable, _super);
    function ContactTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactTable.prototype.render = function () {
        var _this = this;
        var rows = [];
        this.props.contacts.forEach(function (contact) {
            if (contact.name.indexOf(_this.props.filterText) === -1) {
                return;
            }
            rows.push(React.createElement(ContactRow, { contact: contact }));
        });
        return (React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Phone"),
                    React.createElement("th", null, "Email"))),
            React.createElement("tbody", null, rows)));
    };
    return ContactTable;
}(React.Component));
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFilterTextInputChange = _this.handleFilterTextInputChange.bind(_this);
        return _this;
    }
    SearchBar.prototype.handleFilterTextInputChange = function (e) {
        this.props.onFilterTextInput(e.target.value);
    };
    SearchBar.prototype.render = function () {
        return (React.createElement("form", null,
            React.createElement("input", { className: "form-control", type: "text", placeholder: "Search...", value: this.props.filterText, onChange: this.handleFilterTextInputChange })));
    };
    return SearchBar;
}(React.Component));
var FilterableContactTable = /** @class */ (function (_super) {
    __extends(FilterableContactTable, _super);
    function FilterableContactTable(props) {
        var _this = _super.call(this, props) || this;
        // FilterableContactTable is the owner of the state as the filterText is needed in both nodes (searchbar and table) that are below in the hierarchy tree.
        _this.state = {
            filterText: ''
        };
        _this.handleFilterTextInput = _this.handleFilterTextInput.bind(_this);
        return _this;
    }
    FilterableContactTable.prototype.handleFilterTextInput = function (filterText) {
        //Call to setState to update the UI
        this.setState({
            filterText: filterText
        });
        //React knows the state has changed, and calls render() method again to learn what should be on the screen
    };
    FilterableContactTable.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, "Filterable React List"),
            React.createElement(SearchBar, { filterText: this.state.filterText, onFilterTextInput: this.handleFilterTextInput }),
            React.createElement(ContactTable, { contacts: this.props.contacts, filterText: this.state.filterText })));
    };
    return FilterableContactTable;
}(React.Component));
var CONTACTS = [
    { name: 'Tom Jackson', phone: '555-444-333', email: 'tom@gmail.com' },
    { name: 'Mike James', phone: '555-777-888', email: 'mikejames@gmail.com' },
    { name: 'Janet Larson', phone: '555-222-111', email: 'janetlarson@gmail.com' },
    { name: 'Clark Thompson', phone: '555-444-333', email: 'clark123@gmail.com' },
    { name: 'Emma Page', phone: '555-444-333', email: 'emma1page@gmail.com' },
];
ReactDOM.render(React.createElement(FilterableContactTable, { contacts: CONTACTS }), document.getElementById('container'));