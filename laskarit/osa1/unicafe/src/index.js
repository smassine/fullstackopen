import React from 'react';
import ReactDOM from 'react-dom';

// Tehtävät 1.6–1.9 & 1.11

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const Statistic = ({nimi, arvo, prosentti}) => {
    return (
        <tbody>
            <tr>
                <td>{nimi}</td>
                <td>{arvo}</td>
                <td>{prosentti}</td>
            </tr>
        </tbody>
    )
}

const Statistics = ({statistiikka}) => {
    if (statistiikka.lukumaara===0) {
        return(
          "Ei yhtään palautetta annettu"
        )
    } else {
        return (
            <table>
                <Statistic nimi= "Hyvä: " arvo={statistiikka.hyva} />
                <Statistic nimi= "Neutraali: " arvo={statistiikka.neutraali} />
                <Statistic nimi= "Huono: " arvo={statistiikka.huono} />
                <Statistic nimi= "Keskiarvo: " arvo={statistiikka.keskiarvo.toFixed(1)} /> 
                <Statistic nimi= "Positiivisia: " arvo={statistiikka.positiiviset.toFixed(1)} prosentti=" %" />
            </table>
        )
    }
}

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
          <h1>Anna palautetta</h1>
          <div>
            <Button handleClick={this.klikHyva} text="hyvä" />
            <Button handleClick={this.klikNeutraali} text="neutraali" />
            <Button handleClick={this.klikHuono} text="huono" />
          </div>
          <h1>Statistiikka</h1>
            <Statistics statistiikka={statistiikka} />
        </div>
      )
    }
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
  )