import React from 'react'

class Keypad extends React.Component {

  constructor() {
    super()
    this.keyyy = this.keyyy.bind(this)
  }

  keyyy() {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <input type='password' onKeyUp={this.keyyy} >Enter your password</input>
      </div>
    )
  }
}

module.exports = Keypad
