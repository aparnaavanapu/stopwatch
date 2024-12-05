import {Component} from 'react'
import './index.css'


class Stopwatch extends Component{
    state={timer:0,
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick=()=>{
        this.setState(prevState=>({
            timer:prevState.timer+1
        })
            
        )
    }
    startTimer=()=>{
        this.setState(()=>{
            if(!this.timerId){
                this.timerId=setInterval(this.tick,1000);
            }
        })
    }
    stopTimer=()=>{
        clearInterval(this.timerId);
        this.timerId=null;
    }
    resetTimer=()=>{
        clearInterval(this.timerId);
        this.setState({timer:0})
    }



    render(){
        const {timer}=this.state
        const minutes = String(Math.floor(timer / 60)).padStart(2, '0'); // Format minutes
        const seconds = String(timer % 60).padStart(2, '0'); // Format seconds

        return(
            <div className="bg-container">
                <h1 className="heading">StopWatch</h1>
                <div className="card-container">
                    <div className="timer-img-container">
                        <img src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png" alt="stopwatch" className="img"/>
                        <p className="timer-text">Timer</p>
                    </div>
                    <h1>{minutes}:{seconds}</h1>
                    <div className="btns-container">
                        <button className="btn start-btn" onClick={this.startTimer}>Start</button>
                        <button className="btn stop-btn" onClick={this.stopTimer}>Stop</button>
                        <button className="btn reset-btn" onClick={this.resetTimer}>Reset</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default Stopwatch