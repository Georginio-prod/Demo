import React,{Component} from "react";
import HighScore  from "./HighScore";
import './css/style.css';

class Application extends Component{
    constructor(propos) {
        super(propos);

        this.state = {
            count: 0,
            overTen: false
        }

    }

    handleClick = () => {
       this.setState({count: this.state.count +1})
    }

    componentDidUpdate(props, state, snapshot) {
        if(this.state.count > 10 && this.state.count != state.count && !this.state.overTen){
            console.log("Updating over ten");
            this.setState({overTen: true});
        }
    }


    resetCount = (e) => {
        console.log("Event is", e);
        this.setState({
            count: 0,
            overTen: false
        });
    }


    render() {
        let {count} = this.state;

        return (
           <div>
               <h1>Cliquer sur le boutton {count} times</h1>
                <HighScore
                    overTen={this.state.overTen}
                    onReset={this.resetCount}
                />
               }
               <span>
                   <button onClick={() => this.handleClick()}>Click here</button>
               </span>
           </div>
        );
    }
}

export default Application;