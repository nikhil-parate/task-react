import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
class home extends Component {
    constructor(){
        super();
         this.routeChange1 = this.routeChange1.bind(this);
         this.routeChange2 = this.routeChange2.bind(this);
         this.routeChange3 = this.routeChange3.bind(this);
         this.routeChange4 = this.routeChange4.bind(this);
    }
     routeChange1() {
         console.log("you clicked login")
        let path = `/login`;
        this.props.history.push(path);
    }
    routeChange2() {
        let path = `/register`;
        this.props.history.push(path);
      }
    routeChange3() {
        let path = `/admin`;
        this.props.history.push(path);
    }
    routeChange4() {
        let path = `/customer-login`;
        this.props.history.push(path);
    }  
    changeRoute1 = (prod)=> {
        console.log("cr")
        this.routeChange1();
    }
    changeRoute2 = (prod)=>{
          this.routeChange2();
    }
    changeRoute3 = (prod)=>{
        this.routeChange3();
    }
    changeRoute4 = (prod)=>{
        this.routeChange4();
    }
    render() {
        return(
            
                <>
                    <img src = "https://sprinto.com/wp-content/uploads/2021/10/logo-sprinto.svg" alt="Sprinto Webpage" align="right" width="800"/>
                     <Button onClick={()=>this.changeRoute1()}>Employee Log In</Button>
                    <Button onClick={()=>this.changeRoute2()}>New Customer</Button>
                    <Button onClick={()=>this.changeRoute4()}>Customer Login</Button>
                    <Button onClick={()=>this.changeRoute3()}>Admin</Button>
                </>
            
        )
    }
}
export default withRouter(home);