import {Component} from 'react'
import { withRouter } from "react-router";
import axios from 'axios'
import Navbar from './Navbar'

  class CutomersDetail extends Component{
    constructor(props) {
        super(props)
        this.state={
            individuals:[]
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        console.log(id);
       axios.get('https://banking-online-system.herokuapp.com/' + id)
            .then(res=>{
                console.log(res.data);
                 this.setState({individuals:res.data})
            })
            .catch(err =>{
                console.log(err);
            })
    }





    render(){
        const {individuals} = this.state;
        return(
                <div className="container mr-auto homelayout">
                <Navbar />
                <div className="row name">
                    <p>Name : {individuals.Name}</p>
                </div>
                
                <div className="row email">
                    <p>Email :{individuals.Email}</p>
                </div>
               
                <div className="row balance">
                    <p>Account Balance : {individuals.AccountBalance}</p>
                </div>
                
                </div>
        );
    }
}

export default withRouter(CutomersDetail)