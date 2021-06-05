import { Component } from "react";
import { withRouter } from "react-router";

import axios from 'axios'
import TransferHistory from './TransferHistory'
import Navbar from './Navbar'
class TransferPage extends Component{
    constructor(props) {
        super(props)
        this.ev = this.ev.bind(this);
        this.pv = this.pv.bind(this);
        this.gv = this.gv.bind(this);
        this.handleclick = this.handleclick.bind(this);
      
        this.state={
            transferdetails:[],
            sender:"",
            receiver:"",
            amount:"",
            transferhistory:false,
            receiverAmount:"",
            loading:false,
            Dates:"",
            Times:"",
            error:false
            
        }
    }
    componentDidMount(){
        let today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      
        
      this.setState({Dates:date})
      this.setState({Times:time})

     
    }
    
   
   
    ev(e){
        this.setState({amount:e.target.value})
        
    }

    pv(e){
        this.setState({sender:e.target.value})
        
    }

    gv(e){
        this.setState({receiver:e.target.value})
        
    }

    async handleclick(e){
        e.preventDefault()
        
        try {
            const res = await axios.get('https://banking-online-system.herokuapp.com/')

            let obj = res.data.find(o => o.Name === this.state.receiver);
            console.log(obj);
            if(obj===undefined)
            {
               this.setState({error:true})
            }
            else{
                this.setState({receiverAmount : obj.AccountBalance})
                console.log(this.state.receiverAmount);
            }
           
           
            
      
            
        } catch (error) {
            console.log(error);
        }


        

        const formData = {
        'sname' : this.state.sender,
       'rname' : this.state.receiver,
       'transferedamount' : this.state.amount,
       'date' : this.state.Dates,
       'time' : this.state.Times
        }

        if(!this.state.error){
            axios.post("https://banking-online-system.herokuapp.com/history", formData, {
            }).then(res => {
                console.log(res)
            })
        }

       



        this.setState({loading:true})
        
    
        const data={
            "name" : this.state.receiver,
            "amount" :parseInt(this.state.receiverAmount)+parseInt(this.state.amount)
        }
        axios.put("https://banking-online-system.herokuapp.com/transfer", data, {
        }).then(res => {
            console.log(res)
        }).catch((e)=>{
            console.log(e);
        })

        setTimeout(()=>{
            this.setState({loading:false})
        },1000)

       
    }
   


    render(){
       if(this.state.loading)
       {    
           return(
               <div className="container mr-auto homelayout">
                  <p style={{fontSize:"200px",marginLeft:"170px",marginTop:"200px"}}>  <i class="fa fa-spinner fa-spin"></i></p>
               </div>
           );
       }
      else if(this.state.error){
        return(
            <div className="errorlayout">
                <p id="errormsg" >User not found </p>

            </div>
        );
      }
       else{
        return(<>
            <form className="container mr-auto homelayout" method="PUT" onSubmit={this.handleclick}>
                <Navbar />
                    <div className="row nameholder">
                    
                        <h1>Start Transaction</h1> 
                    </div>
                    
                    <div className="row sendername">
                        <div className="col-md-6">
                            <label>Sender Name</label>
                        </div>
                        <div className="col-md-4">
                            <input style={{backgroundColor:"transparent"}} type="text" name="sender" value={this.state.sender} onChange={this.pv} required="on"></input>
                        </div>
                    </div>
                    <div className="row receivername" >
                        <div className="col-md-6">
                            <label>Recevier Name</label>
                        </div>
                        <div className="col-md-4">
                            <input style={{backgroundColor:"transparent"}} type="text" value={this.state.receiver} onChange={this.gv} required="on"></input>
                        </div>
                    </div>
                    <div className="row amounttransfered" >
                        <div className="col-md-6">
                            <label>Amount</label>
                        </div>
                        <div className="col-md-4">
                            <input style={{backgroundColor:"transparent"}} type="text" value={this.state.amount} onChange={this.ev} required="on"></input>
                        </div>
                    </div>
                     <div className="row transferbutton" >
                    
                            <button type="submit" class="btn">Transfer
                            </button>
            
                     </div>
                     
                    

        

            </form>
           

        </>);
       }
    }
}

export default withRouter(TransferPage);