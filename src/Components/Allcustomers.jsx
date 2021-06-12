import { Component } from "react";
import axios from 'axios'
import Navbar from './Navbar'


export default  class Allcustomers extends Component{
    constructor(props) {
        super(props)
        this.state={
            customer:[],loading:false
        }
    }

    componentDidMount(){
        this.setState({loading:true})
        axios.get('https://banking-online-system.herokuapp.com/')
             .then(res=>{
                 console.log(res.data);
                 this.setState({customer:res.data})
                
             })
             .catch(err =>{
                 console.log(err);
             })

             
        setTimeout(()=>{
            this.setState({loading:false})
            
        },1600)

     }
 


    render(){
        const {customer} =this.state
        if(this.state.loading)
       {    
           return(
               <div className="container mr-auto homelayout">
                  <p style={{fontSize:"200px",marginLeft:"170px",marginTop:"200px"}}>  <i class="fa fa-spinner fa-spin"></i></p>
               </div>
           );
       }
        return(<>
      
                <div className="container mr-auto homelayout" >
                <Navbar />
                    <h1 className="allcustomers">Account Holders</h1>
                    { customer.map(items=>(
                        <>
                            <div className="row" style={{marginLeft:"50px"}}>
                              
                                <div className="col-md-4">
                                    <ul id="customerlist">
                                        <li><a  href={'/customers/'+ items._id}>{items.Name}</a></li>
                                       
                                    </ul>
                                </div>
                              
                                <div id="icon" className="col-md-1 offset-md-3" >
                                        <a href={'/customers/'+ items._id}>  <i class="fa fa-arrow-right"></i></a>
                                </div>
                               
                            </div>

                            

                        </>
                    ))}
                    </div>

        </>);
    }
}