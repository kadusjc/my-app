import React, { Fragment, Component } from 'react'
import Header from './Header'

export default class Sobre extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container mb-10">
                    <h1>Sobre</h1>
                </div>

            </Fragment>
        )
    }
}