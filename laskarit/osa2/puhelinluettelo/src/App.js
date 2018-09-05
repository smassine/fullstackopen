import React from 'react';
import numberService from './services/personslist'

// Tehtävät 2.6–2.8 & 2.10–2.11 & 2.14–2.16 & 2.18

const Persons = ({list, deleteperson}) => {
  return (
    <table>
      <tbody>
        {list.map(person => <Person key={person.name} person={person} deleteperson={deleteperson} />)}
      </tbody>
    </table>
  )
}

const Person = ({person, deleteperson}) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
      <td>
        <DeleteButton text={"poista"} onClick={deleteperson(person.id)} />
      </td>
    </tr>
  )
}

const DeleteButton = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Notification = ({message}) => {
  if (message === null) {
    return null
  }
  return (
    <div className="message">
      {message}
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      message: null
    }
  }

  componentDidMount() {
    numberService
      .getAll()
      .then(response => {
        this.setState({ persons: response })
        console.log('response (getAll): ', response)
      })
  }

  addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const names = this.state.persons.map(person => person.name)
    // console.log(names)
    // console.log(person.name)
    const text = "Lisättiin " + person.name

    if (names.includes(person.name)) {
      console.log("Not added")
    } else {
      numberService
        .create(person)
          .then(person => {
            console.log("response (create): ", person)
            this.setState({
              persons: this.state.persons.concat(person),
              newName: '',
              newNumber: '',
              message: text
            })
            setTimeout(() => {
              this.setState({message: null})
            }, 3000)
          })
    }
  }

  deletePerson = (id) => {
    return () => {
      const person = this.state.persons.find(person => person.id === id)
      // console.log("delete ", person)
      const text = "Poistettiin " + person.name

      if (!window.confirm(`Poistetaanko ${person.name}?`)) {
        return
      } else {
        numberService
          .deletePerson(id)
          .then(response => {
            console.log("response (deletePerson): ", response)
            this.setState({
              persons: this.state.persons.filter(person => person.id !== id),
              message: text
            })
            setTimeout(() => {
              this.setState({message: null})
            }, 3000)
          })
      }
    }
  }

  handleNameChange = (event) => {
    // console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    // console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  render() {
    // console.log('render')
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <Notification message={this.state.message}/>
        <form onSubmit={this.addPerson}>
          <div>
            Nimi:
            <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            Numero:
            <input value={this.state.newNumber} onChange={this.handleNumberChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          <Persons list={this.state.persons} deleteperson={this.deletePerson} />
        </ul>
      </div>
    )
  }
}

export default App
