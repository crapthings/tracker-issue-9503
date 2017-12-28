import React, { Component } from 'react'
import { render } from 'react-dom'
import { mount } from 'react-mounter'

class LayoutA extends Component {
  componentWillMount() {
    console.log('layout a did mount', 1)
  }

  componentWillUnmount() {
    console.log('layout a will unmount', 1)
  }

  render() {
    return <div>
      {this.props.children()}
    </div>
  }
}

class A extends Component {
  componentWillMount() {
    console.log('component a did mount', 2)
  }

  componentWillUnmount() {
    console.log('component a will unmount', 2)
  }

  render() {
    return <div>A</div>
  }
}

FlowRouter.route('/', {
  action() {
    mount(LayoutA, {
      children() {
        return <A />
      }
    })
  }
})

class LayoutB extends Component {
  componentWillMount() {
    console.log('layout b did mount', 1)
  }

  componentWillUnmount() {
    console.log('layout b will unmount', 1)
  }

  render() {
    return <div>
      {this.props.children()}
    </div>
  }
}

class B extends Component {
  componentWillMount() {
    console.log('component b did mount', 2)
  }

  componentWillUnmount() {
    console.log('component b will unmount', 2)
  }

  render() {
    return <div>B</div>
  }
}

FlowRouter.route('/b', {
  action() {
    mount(LayoutB, {
      children() {
        return <B />
      }
    })
  }
})
