import React, { Component } from 'react';
import './App.css';
import Buttons from "./Buttons";
import CalcResult from './CalcResult';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = btn => {

        if(btn === "="){
            this.calculate()
        }
        else if(btn === "C"){
            this.reset()
        }
        else {
            this.setState({
                result: this.state.result + btn
            })
        }
    };


    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(this.state.result) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1>Calculator App</h1>
                    <CalcResult result={this.state.result}/>
                    <Buttons onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;
