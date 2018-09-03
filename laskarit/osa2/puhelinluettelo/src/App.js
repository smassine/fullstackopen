import React from 'react';

// Tehtävät 2.6–2.8 & 2.10

const Persons = ({list}) => {
  return (
    <table>
      <tbody>
        {list.map(person => <Person key={person.name} person={person} />)}
      </tbody>
    </table>
  )
}

const Person = ({person}) => {
  return (
    <tr>
      <td>{person.name}</td>
      <td>{person.number}</td>
    </tr>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456'}
      ],
      newName: '',
      newNumber: ''
    }
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

    if (names.includes(person.name)) {

      console.log("Not added")

    } else {

      const persons = this.state.persons.concat(person)

      this.setState({
        persons,
        newName: '',
        newNumber: ''
      })
    }

  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  handleNumberChange = (event) => {
    console.log(event.target.value)
    this.setState({ newNumber: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
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
          <Persons list={this.state.persons} />
        </ul>
      </div>
    )
  }
}

export default App
