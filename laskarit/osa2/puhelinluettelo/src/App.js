import React from 'react';

// Tehtävät 2.6 & 2.7

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }

  addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: this.state.newName
    }
    const names = this.state.persons.map(person => person.name)
    // console.log(names)
    // console.log(nameObject.name)

    if (names.includes(nameObject.name)) {

      console.log("Not added")

    } else {

      const persons = this.state.persons.concat(nameObject)

      this.setState({
        persons,
        newName: ''
      })
    }

  }

  handleNameChange = (event) => {
    console.log(event.target.value)
    this.setState({ newName: event.target.value })
  }

  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <form onSubmit={this.addPerson}>
          <div>
            nimi:
            <input value={this.state.newName} onChange={this.handleNameChange} />
          </div>
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
          {this.state.persons.map(person => <li key={person.name}>{person.name}</li>)}
        </ul>
      </div>
    )
  }
}

export default App
