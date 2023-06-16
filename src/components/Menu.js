import React from 'react'

class Menu extends React.Component {


  render() {

    return <div className='menu'>
      <p>TicTacToe</p>
      <img src={process.env.PUBLIC_URL+'/favicon.ico'} className='logo'/>
    </div>
  }
}


export default Menu;