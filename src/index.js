import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
field : "hello world"
        }; 
    }

    handleChange(e) {
        var txt = e.target.value;
        this.setState({field: e.target.value});
    }

    render() {

        return (
                <div>
                <input type="text"  
                onChange={this.handleChange}
                value={this.state.field}
                />
                <h1>{this.state.field}</h1>
                </div>
               );
    }
};

const app = document.getElementById('display');
ReactDOM.render(<App />, app)
