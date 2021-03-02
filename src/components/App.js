import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor()
  {
    super()
    this.state={
      time:(new Date().toLocaleTimeString()) 
    }
  }
    
    componentDidMount(){
    
    this.interval=setInterval(()=>{
      this.setState({time:(new Date().toLocaleTimeString())})
    },1000)
  }


  componentWillUnmount()
  {
    clearInterval(this.interval);
  }

    render() {

        return(
            <>
               <div className="Clock">
        <h3 id="time">
        {this.state.time}
        </h3>
        </div>
            </>
        )
    }
}


export default App;
