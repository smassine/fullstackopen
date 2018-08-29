import React from 'react'
import ReactDOM from 'react-dom'

// Tehtävä 1.1
/*
const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
}

const Sisalto = (props) => {
    return (
      <div>
        <p>{props.osa1} {props.tehtavia1}</p>
        <p>{props.osa2} {props.tehtavia2}</p>
        <p>{props.osa3} {props.tehtavia3}</p>
      </div>
    )
}

const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.summa} tehtävää</p>
      </div>
    )
}

const App = () => {
    // const-määrittelyt
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
  
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osa1={osa1} tehtavia1={tehtavia1} osa2={osa2} tehtavia2={tehtavia2} osa3={osa3} tehtavia3={tehtavia3}/>
        <Yhteensa summa={tehtavia1 + tehtavia2 + tehtavia3} />
      </div>
    )
  }
*/

// Tehtävä 1.2
/*
const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
}

const Osa = (props) => {
    return (
      <div>
        <p>{props.osa} {props.tehtavia}</p>
      </div>
    )
}

const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osa1} tehtavia={props.tehtavia1}/>
        <Osa osa={props.osa2} tehtavia={props.tehtavia2}/>
        <Osa osa={props.osa3} tehtavia={props.tehtavia3}/>
      </div>
    )
}

const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.summa} tehtävää</p>
      </div>
    )
}

const App = () => {
    // const-määrittelyt
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = 'Reactin perusteet'
    const tehtavia1 = 10
    const osa2 = 'Tiedonvälitys propseilla'
    const tehtavia2 = 7
    const osa3 = 'Komponenttien tila'
    const tehtavia3 = 14
  
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osa1={osa1} tehtavia1={tehtavia1} osa2={osa2} tehtavia2={tehtavia2} osa3={osa3} tehtavia3={tehtavia3} />
        <Yhteensa summa={tehtavia1 + tehtavia2 + tehtavia3} />
      </div>
    )
  }
*/

// Tehtävä 1.3
/*
const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
}

const Osa = (props) => {
    return (
      <div>
        <p>{props.osa} {props.tehtavia}</p>
      </div>
    )
}

const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osa1['nimi']} tehtavia={props.osa1['tehtavia']}/>
        <Osa osa={props.osa2['nimi']} tehtavia={props.osa2['tehtavia']}/>
        <Osa osa={props.osa3['nimi']} tehtavia={props.osa3['tehtavia']}/>
      </div>
    )
}

const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.summa} tehtävää</p>
      </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osa1 = {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    }
    const osa2 = {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    }
    const osa3 = {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osa1={osa1} osa2={osa2} osa3={osa3} />
        <Yhteensa summa={osa1['tehtavia'] + osa2['tehtavia'] + osa3['tehtavia']} />
      </div>
    )
}
*/

// Tehtävä 1.4
/*
const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
}

const Osa = (props) => {
    return (
      <div>
        <p>{props.osa['nimi']} {props.osa['tehtavia']}</p>
      </div>
    )
}

const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osat[0]}/>
        <Osa osa={props.osat[1]}/>
        <Osa osa={props.osat[2]}/>
      </div>
    )
}

const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.osat[0]['tehtavia'] + props.osat[1]['tehtavia'] + props.osat[2]['tehtavia']} tehtävää</p>
      </div>
    )
}

const App = () => {
    const kurssi = 'Half Stack -sovelluskehitys'
    const osat = [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  
    return (
      <div>
        <Otsikko kurssi={kurssi} />
        <Sisalto osat={osat} />
        <Yhteensa osat={osat} />
      </div>
    )
  }
*/

// Tehtävä 1.5

const Otsikko = (props) => {
    return (
      <div>
        <h1>{props.kurssi}</h1>
      </div>
    )
}

const Osa = (props) => {
    return (
      <div>
        <p>{props.osa['nimi']} {props.osa['tehtavia']}</p>
      </div>
    )
}

const Sisalto = (props) => {
    return (
      <div>
        <Osa osa={props.osat[0]}/>
        <Osa osa={props.osat[1]}/>
        <Osa osa={props.osat[2]}/>
      </div>
    )
}

const Yhteensa = (props) => {
    return (
      <div>
        <p>yhteensä {props.osat[0]['tehtavia'] + props.osat[1]['tehtavia'] + props.osat[2]['tehtavia']} tehtävää</p>
      </div>
    )
}

const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }
  
    return (
      <div>
        <Otsikko kurssi={kurssi['nimi']} />
        <Sisalto osat={kurssi['osat']} />
        <Yhteensa osat={kurssi['osat']} />
      </div>
    )
  }

ReactDOM.render(
    <App />,
    document.getElementById('root')
)