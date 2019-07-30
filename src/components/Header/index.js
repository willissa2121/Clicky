import React from 'react'



export default function Header(props) {
  const styles={
    display:'flex',
    background:"orange",
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    height: '8vh',
    color:props.color,
    position:'fixed',
    width:'100vw'
  
  }
  return (
    <div>
      <div style={styles} className="header-group">
        <h3>Clicky Game</h3>
        <h3>{props.quote}</h3>
        <h3>Current Score: {props.counter} High Score : {props.maxScore}</h3>
      </div>
      
    </div>
  )
}
