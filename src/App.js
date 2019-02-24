// create your App component here
import React, { Component } from "react"


class App extends Component{
state={
  people:[]
}

componentDidMount(){

  fetch("http://api.open-notify.org/astros.json")
  .then(r=>r.json())
  .then(resp=>{
    this.setState({
      people: resp.people
    })
  })
}

render(){
  console.log(this.state.people)

  return(
    <div>
      {this.state.people.map((person)=><li>{person.name}</li>)}
    </div>
  )
}




}

export default App
