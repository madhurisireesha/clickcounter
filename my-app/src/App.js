import {Component} from 'react'
import './styles/app.css'
class App extends Component{
  state={
    withdrawInput:2000
  }
  
   
  amountFifty=()=>{
    const{withdrawInput}=this.state
    if(withdrawInput===0 || withdrawInput<50){
      this.setState({
        withdrawInput:"Insufficient balance"
      })
    }
    
      else{
        this.setState((prevState)=>({
          withdrawInput:prevState.withdrawInput-50
        }))
      }
  }
  amountHundred=()=>{
    const{withdrawInput}=this.state
    if(withdrawInput===0 || withdrawInput<100){
      this.setState({
        withdrawInput:"Insufficient balance"
      })
    }
    
      else{
        this.setState((prevState)=>({
          withdrawInput:prevState.withdrawInput-100
        }))
      }
  }
  amountFiveHundred=()=>{
    const{withdrawInput}=this.state
    if(withdrawInput===0 || withdrawInput<500){
      this.setState({
        withdrawInput:"Insufficient balance"
      })
     
    }
    
      else{
        this.setState((prevState)=>({
          withdrawInput:prevState.withdrawInput-500
        }))
      }
  }
  amountThousand=()=>{
    const{withdrawInput}=this.state
    if(withdrawInput===0 || withdrawInput<1000){
      this.setState({
        withdrawInput:"Insufficient balance"
      })
    }
    
      else{
        this.setState((prevState)=>({
          withdrawInput:prevState.withdrawInput-1000
        }))
      }
  }
 
  render(){
    const{withdrawInput}=this.state;
    return(
      <div className='container'>
        <div className="up">
          <p className="pro">S</p>
          <p className='name'>Sreelekha</p>
        </div>
        <div className='search'>
      <input type="search" value={withdrawInput} className="in"/>Your balance
      </div>
      <p className='ru'>Your balance in rupees</p>
      <div className='one'>
      <button type="button" value="50" onClick={this.amountFifty}>50</button> 
      <button type="button" value="50" onClick={this.amountHundred}>100</button> 
      </div>
      
      <div className='two'>
      <button type="button" value="50" onClick={this.amountFiveHundred}>500</button> 
      <button type="button" value="50" onClick={this.amountThousand}>1000</button> 
      </div>
      </div>

    )
  }
}
export default App