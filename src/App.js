import React from 'react'
import './App.css'
import json from './data.json'

var pressed = false
window.addEventListener('mousedown', () => pressed = true)
window.addEventListener('mouseup', () => pressed = false)

var types = [
  'Sedan',
  'Hatchback',
  'Jeep',
  'Mini Jeep',
  'Mini Van'
]

class Types extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      types: types,
      value: null
    }
  }
  
  onChange = (type) => {
    this.setState({value: type})
  }
  
  checkOnHover = (type) => {
    if (pressed) {
      this.setState({value: type})
    }
  }
  
  render () {
    var { types, value } = this.state
    var { mark, model } = this.props
    
    return <dl className='types'>
      {
        types.map((type, key) =>
          <dt key={key}>
            <input type='radio' 
              name={mark + model} 
              onChange={e => this.onChange(type)}
              onMouseOver={e => this.checkOnHover(type)}
              value={type}
              checked={type === value} />
            <span>{type}</span>
          </dt>
        )
      }
    </dl>
  }
}

var App = () =>
  <div className='app'>
    <h1>Model Types</h1>

    <hr />

    <dl className='marks'>
      {
        Object.keys(json).map((mark, key) =>
          [
            <dt key={key}>
              <h2>{ mark }</h2>

              <dl className='models'>
                {
                  Object.keys(json[mark]).map((model, key) =>
                    <dt key={key}>
                      <h4>{ model }</h4>

                      <Types mark={mark} model={model} />
                    </dt>
                  )
                }
              </dl>
            </dt>,
            <hr key='hr' />
          ]
        )
      }
    </dl>
  </div>

export default App
