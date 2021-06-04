import { Component } from "react";
import Navbar from './Navbar'
import "./home.css"

export default  class Home extends Component{
    constructor(props) {
        super(props)
        this.state={
        }
    }



    render(){
        return(<>
          
            <div className="container mr-auto homelayout">
            <Navbar />
            
            <div className="row online">
                <h1>Online</h1>
            </div>
            <div className="row banking">
                <p>Banking System</p>
            </div>
            <div className="row quotes">
            <p>"If banks cannot truly be customer intimate, they are doomed to be just dumb commodities, acting behind the scenes, like utilities"</p>

            </div>
            </div>
            
        </>);
    }
}