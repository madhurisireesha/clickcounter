import {Component} from 'react'
import '../styles/clickcounter.css'

class ClickCounter extends Component{
    state={bananacount:0,
            mangocount:0
        }
    onEatBanana=()=>{
        this.setState((prevState)=>({
            bananacount:prevState.bananacount+1
        }));
    }
    onEatMango=()=>{
        this.setState((prevState)=>({
            mangocount:prevState.mangocount+1
        }));
    }
    render(){
        const{bananacount}=this.state;
        const{mangocount}=this.state;
        return(
            <div className="container">
                
                <h1 className="count">Bob eat bananas <span style={{color:"red"}}>{bananacount}</span> times and mangoes<span style={{color:"red"}}>{mangocount}</span>times</h1>
                <div className='fruits'>
                    <div className='m'>
                        <img src="https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=0&k=20&c=MAc8AXVz5KxwWeEmh75WwH6j_HouRczBFAhulLAtRUU=" alt="mango" className="i"/>
                        <button className="button" onClick={this.onEatBanana}>Banana</button>
                    </div>
                    <div className='m'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKI15swBeYhpt_dBQPz_sB3Kj35zal1eGHCtA-IKUe4w&s" alt="banana" className="i"/>
                        <button className="button" onClick={this.onEatMango}>Mango</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ClickCounter;