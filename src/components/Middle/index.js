import React from 'react'


const styles = {
  paddingTop:'20vh',
  background:'blue'
}

const styles2 = {
  color:'#fff',
  fontWeight:600
}

export default function Middle() {
  return (
    <div style={styles} className="jumbotron text-center">
      <h1 style={styles2} className="display-4">The Basketball Clicky Game</h1>
      <p style={styles2} className="lead">Click on a picture to begin. If you have never clicked it before, you get a point. If its been clicked before, you lose!</p>


    </div>
  )
}
