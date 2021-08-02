import './App.css';
import { Component } from 'react';

class App extends Component {
  state =  {
      name: 'Julio Araujo',
      counter: 0
    }

  handleNameClick =() => {
   this.setState({ name: 'Cezar' })
  }

  handleAClick =(event) => {
    event.preventDefault()
    const {counter} = this.state
    this.setState({ counter: counter + 1 })
  }

  render() {
    const { name,counter } = this.state
    return (
      <div>
          <div onClick={this.handleNameClick}>
            {name}  {counter}
          
          </div>
          <a 
          onClick={this.handleAClick}
          href='https://www.youtube.com/'
          target='_blank'
        > 
          Link aqui
        </a>      
      </div>
    );
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
