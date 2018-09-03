import React from 'react'

const Kurssi = ({kurssi}) => {
    return (
        <div>
            <Otsikko nimi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

const Otsikko = ({nimi}) => {
    return (
        <h1>
            {nimi}
        </h1>
    )
}
 
const Sisalto = ({osat}) => {
    return (
        <div>
            {osat.map(osa => <Osa key={osa.id} osa={osa} />)}
        </div>
    )
}
 
const Osa = ({osa}) => {
    return (
        <p>
            {osa.nimi} {osa.tehtavia}
        </p>
    )
}

const Yhteensa = ({osat}) => {
    // Reduce-funktiosta: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    return (
        <p>
            yhteensä {osat.reduce((accumulator, currentValue) => accumulator + currentValue.tehtavia, 0)} tehtävää
        </p>
    )
}

const Kurssit = ({kurssit}) => {
    return (
        <div>
            {kurssit.map(kurssi => <Kurssi key={kurssi.id} kurssi={kurssi}/>)}
        </div>
    )
}

export default Kurssit