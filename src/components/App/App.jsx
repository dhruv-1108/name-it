import React from 'react';
import './App.css';
import Header from './../Header/Header';
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';


const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            headerExpanded: true,
            suggestedNames: [], 
        };
    }

    handleInputchange = (inputText) => {
        this.setState({headerExpanded: !(inputText), suggestedNames: name(inputText)});
    };

    render(){
        return (
            <div>
                <Header 
                    headerExpanded = {this.state.headerExpanded}
                />
                <SearchBox handleInputchange = {this.handleInputchange} />
                <ResultsContainer suggestedNames = {this.state.suggestedNames}/>
                
            </div>
        )
    }
}

export default App;