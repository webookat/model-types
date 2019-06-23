import React from 'react'
import './App.css'
import json from './data.json'

console.log(json)

var types = [
  'Sedan',
  'Hatchbadk',
  'Jeep',
  'Mini Jeep',
  'Mini Van'
]

var Types = ({ mark, model }) =>
  types.map((type, key) =>
    <dt key={key}>
      <input type='radio' name={mark + model} />
      {type}
    </dt>
  )

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

                      <dl className='types'>
                        {
                          <Types mark={mark} model={model} />
                        }
                      </dl>
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
