import React, { Fragment, Component } from 'react'
import Header from './Header'

export default class NotFound extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container mb-10">
                    <h1>NotFound</h1>
                </div>

            </Fragment>
        )
    }
}