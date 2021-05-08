import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Menu from './Menu'
import ListNft from './listNft'

window.ethereum.enable()

ReactDOM.render(
    <React.StrictMode>
        <ListNft/>
  </React.StrictMode>,
  document.getElementById('root')
)
