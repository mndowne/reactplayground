import React from 'react';
import ReactDOM from 'react-dom';

class PassedProps extends React.Component{
    handleChange(e) {
        var txt = e.target.value;
        this.props.changePreview(txt);
    }

    render() {
        return (
                <div>
                    <input 
                    type="text"  
                    onChange={this.handleChange.bind(this)}
                    value={this.props.preview}
                    />
                        
                    <h1>{ this.props.preview }</h1>
                </div>
               );
    }
}


class App extends React.Component{
    constructor() {
        super();
        this.state = {
            field : "hello world"
        }; 
    }

    changePreview(preview) {
        this.setState({field: preview});
    }

    render() {

        return (
                <div>
                    <PassedProps changePreview={ this.changePreview.bind(this) } preview={this.state.field} />
                </div>
               );
    }
};

const app = document.getElementById('display');
ReactDOM.render(<App />, app)
