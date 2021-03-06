import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css';
import './App.css'
import Table from './Tabela'
import Form from './Formulario'
import Header from './Header'
import React, { Component, Fragment } from 'react'
import ApiService from './services/ApiService'

class App extends Component {
  state = { autores: [] }

  async updateAuthorsList() {
    let { data } = await ApiService.getAuthors()
    this.setState({ autores: data })
  }

  async componentDidMount() {
    await this.updateAuthorsList()
  }

  adicionaAutor = async (newAutor) => {
    const { autores } = this.state
     await ApiService.createAuthors(newAutor)
     M.toast({ html: 'Autor criado com sucesso', classes: 'light-green', displayLenght: 2000 })
     await this.updateAuthorsList()
  }

  removeAutor = async (id) => {
    await ApiService.removeAuthor(id)
    M.toast({ html: 'Autor removido com sucesso', classes: 'light-green', displayLenght: 2000 })
    await this.updateAuthorsList()   
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Ferreiro Correa Software</h1>
          <Table autores={this.state.autores} removeAutor={this.removeAutor} />
          <br /><br />

          <Form adicionaAutor={this.adicionaAutor} />
        </div>

      </Fragment>
    )
  }
}


export default App;

