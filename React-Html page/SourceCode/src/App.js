

import './App.css';
import React from "react";
import Header from './components/header' 
import Content from "./components/content";
import ReactDOM from "react-dom/client";
import Footer from './components/footer';


class App extends React.Component {

 
constructor(){
  super();
  console.log("constructor")
}


componentDidMount(){
  console.log("componentDidMount");

 


}


componentDidUpdate(prevProps,prevState){
  console.log("componentDidUpdate");

}
  render() {
    console.log("render") ;
    <div className="App" >
    <button onClick={this.handleClick}>Add</button>
        <button onClick={this.handleDelete}>Delete</button>
</div>
    return (
      <div>
        <Header />
        <Content />
        <Footer/>
        
      </div>
    );
  }
}


function Name(props) {
  return <h2>My Name is {props.Student}!</h2>;
}


export default App;
