import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import styles from '../css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Page from './Page/Page'


export default () => {
     return <Router>
        <div className={styles.header}>
            <Container fluid={true}>
                <Page></Page>
            </Container>
        </div>
        <div className="page">
            <Switch>
                <Route exact path='/' />
            </Switch>
        </div>
    </Router>
}
