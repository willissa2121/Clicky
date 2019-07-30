import React from 'react'

const cardStyle = {
  height:'250px',
  width:"300px",
  margin:'10px',
  boxShadow: '3px 3px 5px 6px #ccc',
  border:"4px solid #FFF"
}

export default function Cards(props) {
  return (
    <div >
      <div onClick={()=>props.clicked(props.id)} className="card" >
        <img style={cardStyle} className="card-img-top" src={props.image} alt="Card image cap" />
      </div>
    </div>
  )
}
