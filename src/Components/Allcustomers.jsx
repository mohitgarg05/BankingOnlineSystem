import { Component } from "react";
import axios from 'axios'
import Navbar from './Navbar'


export default  class Allcustomers extends Component{
    constructor(props) {
        super(props)
        this.state={
            customer:[]
        }
    }

    componentDidMount(){
        axios.get('https://banking-online-system.herokuapp.com/')
             .then(res=>{
                 console.log(res.data);
                 this.setState({customer:res.data})
                
             })
             .catch(err =>{
                 console.log(err);
             })
     }
 


    render(){
        const {customer} =this.state
        return(<>
      
                <div className="container mr-auto homelayout" >
                <Navbar />
                    <h1 className="allcustomers">Account Holders</h1>
                    { customer.map(items=>(
                        <>
                            <div className="row">
                              
                                <div className="col-md-4">
                                    <ul id="customerlist">
                                        <li ><a href={'/customers/'+ items._id}>{items.Name}</a></li>
                                       
                                    </ul>
                                </div>
                              
                                <div className="col-md-1 offset-md-3" >
                                        <a href={'/customers/'+ items._id}>  <i class="fa fa-arrow-right"></i></a>
                                </div>
                               
                            </div>

                        </>
                    ))}
                    </div>

        </>);
    }
}