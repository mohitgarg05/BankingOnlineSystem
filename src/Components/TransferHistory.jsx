import { Component } from "react";
import axios from 'axios'
import Navbar from './Navbar'
class TransferHistory extends Component{
    constructor(props) {
        super(props);
        this.state={
            historys:[]
        }
    }

    componentDidMount(){
        axios.get("https://banking-online-system.herokuapp.com/history/customers")
        .then((res)=>{
            this.setState({historys: res.data})
       
    
    })
        .catch(err =>{ console.log(err); })
    
    }

    render(){
        const {historys} = this.state
 
        return(
            <>
               <div className="container mr-auto homelayout">
               <Navbar />
               <div className="table">
               <table >
                            <tr >
                                <th style={{paddingLeft:"23px",paddingTop:"20px"}}>Sender Name</th>
                                <th style={{paddingLeft:"27px",paddingTop:"20px"}}>Recevier Name</th>
                                <th style={{paddingLeft:"22px",paddingTop:"20px"}}>Amount</th>
                                <th style={{paddingLeft:"47px",paddingTop:"20px"}}>Date and Time</th>
                            </tr>
                          
               {historys.map((items)=>(
                    <>
                       
                            <tr>
                                <td>{items.SName}</td>
                                <td>{items.RName}</td>
                                <td>{items.TransferedAmount}</td>
                                <td>{items.Date}  {items.Time}</td>

                            </tr>
                        
                    </>
                ))}
                </table>
                </div>
               </div>
                
                
            </>
        );
    }
}

export default TransferHistory;