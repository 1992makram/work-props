import React from 'react'

function Component(props) {
  const handleClick=()=>{
    props.handleName(props.Fullname)
  }
    console.log(props)

  return (
      <>
    <h1>{props.Fullname}</h1>
    <h2>{props.Bio}</h2>
    <h3>{props.Profession}</h3>
    <button onClick={handleClick}>showname</button>
  {props.children}
    
    </>
  )
}

export default Component