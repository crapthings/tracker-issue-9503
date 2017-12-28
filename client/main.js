import React, { Component } from 'react'
import { render } from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from 'react-router-dom'

class PageA extends Component {
  componentWillMount() {
    console.log('layout a will mount', 1)
  }

  componentWillUnmount() {
    console.log('layout a will unmount', 1)
  }

  render() {
    return <A />
  }
}

class A extends Component {
  componentWillMount() {
    console.log('component a will mount', 2)
  }

  componentWillUnmount() {
    console.log('component a will unmount', 2)
  }

  render() {
    return <div>A</div>
  }
}

class PageB extends Component {
  componentWillMount() {
    console.log('layout b will mount', 1)
  }

  componentWillUnmount() {
    console.log('layout b will unmount', 1)
  }

  render() {
    return <B />
  }
}

class B extends Component {
  componentWillMount() {
    console.log('component b will mount', 2)
  }

  componentWillUnmount() {
    console.log('component b will unmount', 2)
  }

  render() {
    return <div>B</div>
  }
}

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <h3><Link to='/'>a</Link></h3>
          <h3><Link to='/b'>b</Link></h3>
        </div>

        <Route exact path='/' component={PageA} />
        <Route exact path='/b' component={PageB} />
      </div>
    </Router>
  )
}

Meteor.startup(function () {
  const div = document.createElement('div')
  document.body.appendChild(div)
  render(<App />, div)
})
