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
      <h3>subscribe to test1</h3>
      <WithSubscribe name='test1'>
        {({ _subscriptionId }) => {
          return (
            <WithTracker list={context => Test1.find({ _subscriptionId })}>
              {({ data: { list: test1 } }) => (
                test1.map(({ _id, content }) => (
                  <div key={_id}>{content}</div>
                ))
              )}
            </WithTracker>
          )
        }}
      </WithSubscribe>
    </div>
  )
}

const Demo2 = () => {
  return (
    <div>
      <h3>subscribe to test2</h3>
      <WithSubscribe name='test2'>
        {({ _subscriptionId }) => {
          return (
            <WithTracker list={context => Test1.find({ _subscriptionId })}>
              {({ data: { list: test1 } }) => (
                test1.map(({ _id, content }) => (
                  <div key={_id}>{content}</div>
                ))
              )}
            </WithTracker>
          )
        }}
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
    return <div>
      <Demo1 />
      <Demo2 />
    </div>
  }
}

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component={PageA} />
      </div>
    </Router>
  )
}

Meteor.startup(function () {
  const div = document.createElement('div')
  document.body.appendChild(div)
  render(<App />, div)
})
