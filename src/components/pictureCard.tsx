import React from 'react'

const Picturecard = (props: any) => {
  return (
    <div>
        <img className="navimg" alt={`${props.name} pic`} src={`/${props.name}.jpg`}/>
        <h3>{props.name}</h3>
    </div>
  )
}

export default Picturecard