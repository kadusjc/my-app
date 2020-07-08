import 'materialize-css/dist/css/materialize.min.css'
import './App.css'
import Table from './Tabela'
import Form from './Formulario'
import Header from './Header'
import React, { Component, Fragment } from 'react'

class App extends Component {
  state = {
    autores: [
      {
        id: 1,
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        id: 2,
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        id: 3,
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        id: 4,
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      },
      {
        id: 5,
        nome: 'Kadu',
        livro: 'Eng',
        preco: '100'
      }
    ]
  }

  removeAutor = (index) => {
    const { autores } = this.state
    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      })
    })
  }

  adicionaAutor = newAutor => {
    const allAuthors = this.state.autores
    allAuthors.push(newAutor)
    this.setState({ autores: allAuthors })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <Table autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form adicionaAutor={this.adicionaAutor} />
        </div>

      </Fragment>
    )
  }
}

export default App;
