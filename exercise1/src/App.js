import React from 'react'


const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}
const Part = (props) =>{
  return (
    <div>
      <p> {props.part1}</p>
      <p> {props.part2}</p>
      <p> {props.part3}</p>
    </div>
  )
}

const Content =() =>{
  return (
    <div>
      <Part part1 = "Fundamentals of React"/>
      <Part part2 = "Using props to pass data"/>
      <Part part3 = "State of a component"/>
    </div>
  )
}


const App = () => {
  // const-definitions

  return (
    <div>
      <Header course= "Half Stack Application Development " />
      <Content/>
      </div>
  )
}

export default App