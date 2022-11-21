import React ,{Component} from 'react'


class Message extends Component {
    constructor(){
        super()
        this.state = {
            message : 'Welcome To My Portfolilo '
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for Subscribing'
        })
        
    }
    render() {
        return (
          <div className='message'>
            <h2> {this.state.message}</h2>
            <button className='button' onClick={()=> this.changeMessage()}> Subscribe</button>
          </div>
        );
    }
}

export default Message