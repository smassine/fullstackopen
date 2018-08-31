import React from 'react';
import ReactDOM from 'react-dom';

// Tehtävä 1.6
/*
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  klikHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
    })
  }

  klikNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
    })
  }

  klikHuono = () => {
    this.setState({
      huono: this.state.huono + 1,
    })
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
        <button onClick={this.klikHyva}>
          hyva
        </button>
        <button onClick={this.klikNeutraali}>
          neutraali
        </button>
        <button onClick={this.klikHuono}>
          huono
        </button>
        </div>
        <h1>statistiikka</h1>
        <p>hyvä {this.state.hyva}</p>
        <p>neutraali {this.state.neutraali}</p>
        <p>huono {this.state.huono}</p>
      </div>
    )
  }
}
*/

// Tehtävä 1.7

class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        hyva: 0,
        neutraali: 0,
        huono: 0
      }
    }
  
    klikHyva = () => {
      this.setState({
        hyva: this.state.hyva + 1,
      })
    }
  
    klikNeutraali = () => {
      this.setState({
        neutraali: this.state.neutraali + 1,
      })
    }
  
    klikHuono = () => {
      this.setState({
        huono: this.state.huono + 1,
      })
    }
  
    render() {
        
        const statistiikka = this.state
        statistiikka.lukumaara = statistiikka.hyva + statistiikka.neutraali + statistiikka.huono
        statistiikka.summa = statistiikka.hyva *1 + statistiikka.neutraali *0 + statistiikka.huono *(-1)
        statistiikka.keskiarvo = statistiikka.summa / statistiikka.lukumaara
        statistiikka.positiiviset = statistiikka.hyva *100 / statistiikka.lukumaara

      return (
        <div>
          <h1>anna palautetta</h1>
          <div>
          <button onClick={this.klikHyva}>
            hyva
          </button>
          <button onClick={this.klikNeutraali}>
            neutraali
          </button>
          <button onClick={this.klikHuono}>
            huono
          </button>
          </div>
          <h1>statistiikka</h1>
          <p>hyvä {this.state.hyva}</p>
          <p>neutraali {this.state.neutraali}</p>
          <p>huono {this.state.huono}</p>
          <p>keskiarvo {statistiikka.keskiarvo}</p>
          <p>positiivisia {statistiikka.positiiviset}</p>
        </div>
      )
    }
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )