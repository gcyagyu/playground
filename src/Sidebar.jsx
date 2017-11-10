import React, { Component } from 'react'
import './alert.js'
import './Sidebar.css'

class Sidebar extends Component {
  render () {
    return (
      <div id='sidebar'>
        <div className='overlay'>
          <div className='button'>戻る</div>
        </div>
        <div className='navbar'>
          <ul>
            <li>about</li>
            <li>news</li>
            <li>service</li>
            <li>work</li>
          </ul>
        </div>
        <div className='container'>
          <div className='left-bar'>
            <h1>
              デザインワークショップ
              <div>
                  <p>どこに表示されるかな</p>
                aaa
              </div>
              <p>どこに表示されるかな</p>
            </h1>
            <h2>デザインワークショップ</h2>
            <h3>Overlaybutton</h3>
          </div>
          <div className='right-bar'>
            <div className='flex-content'>
              <div className='boxA'>BoxA</div>
              <div className='boxB'>BoxB</div>
              <div className='boxC'>BoxC</div>
              <div className='boxD'>BoxD</div>
              <div className='boxE'>BoxE</div>
              <div className='boxF'>BoxF</div>
              <div className='boxG'>BoxG</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
