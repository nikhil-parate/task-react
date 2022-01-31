import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
toast.configure();
const API_URL = 'https://task-i.herokuapp.com/newpolicy'; 
class newpolicy extends React.Component {
   constructor() {
       super();
       this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.myRef3 = React.createRef();
        this.myRef4 = React.createRef();
       this.state = {
           email: "",
           policy1: "",
           policy2: "",
           policy3: ""
       }
   }
   submit = async (event) => {
    event.preventDefault();
        axios({ 
            method: 'POST',
            url: API_URL,
            data : {
              email: this.myRef1.current.value,
              policy1: this.myRef2.current.value,
              policy2: this.myRef3.current.value,
              policy3: this.myRef4.current.value
          }
          })
          .then((response)=>{
            if(!response.data.error) {
               toast.success('Policy Successfully updated.', {position: toast.POSITION.TOP_CENTER});
            }
            else{
              toast.error(response.data.error);
          }
          }) 
        }     
     render(){
         return(
            <>
             <form onSubmit = {this.submit} >
                <br /><br />
                <label > Email <input ref = {this.myRef1} style={{marginLeft:"10px"}}
            type = "text" required
            value = {this.state.email.value}
            name = "email"
            /> </ label > 

            <label > Policy1 <input ref = {this.myRef2} style={{marginLeft:"10px"}}
            type = "text" required
            value = {this.state.policy1.value}
            name = "policy1"
            /> </ label >  <br />

             <label > Policy2 <input ref = {
                this.myRef3
            } style={{marginLeft:"45px"}}
            type = "text" required
            value = {
                this.state.policy2.value
            }
            name = "policy2"
            /> </ label >  <br />

             <label > Policy3 <input ref = {
                this.myRef4
            } style={{marginLeft:"36px"}}
            type = "text" required
            value = {
                this.state.policy3.value
            }
            name = "policy3"
            /> </ label > 
             <input type = "submit" style={{marginLeft:"300px", background:"#4cbb17", color: "white"}}
            value = "Update" />
            </form> 
            </>
     )   
         }    
}
export default newpolicy;