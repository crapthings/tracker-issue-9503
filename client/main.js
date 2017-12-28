import React, { Component } from 'react'
import { render } from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from 'react-router-dom'

import {
  WithSubscribe,
  WithTracker,
  WithCall,
  WithUserId,
  WithoutUserId,
  config,
} from 'meteor/crapthings:react-meteor-components'

const Demo1 = () => {
  return (
    <div>
      <h3>subscribe to an reactive list</h3>
      <WithSubscribe name='test1'>
        <WithTracker list={context => Test1.find()}>
          {({ data: { list: test1 } }) => (
            test1.map(({ _id, content }) => (
              <div key={_id}>{content}</div>
            ))
          )}
        </WithTracker>
      </WithSubscribe>
    </div>
  )
}

const Demo2 = () => {
  return (
    <div>
      <h3>subscribe to an reactive list</h3>
      <WithSubscribe name='test2'>
        <WithTracker list={context => Test1.find()}>
          {({ data: { list: test1 } }) => {
            return (
              <div>
                {test1.map(({ _id, content }) => (
                  <div key={_id}>{content}</div>
                ))}

                <Demo1 />
              </div>
            )
          }}
        </WithTracker>
      </WithSubscribe>
    </div>
  )
}

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
    return <Demo1 />
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
    return <Demo2 />
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
