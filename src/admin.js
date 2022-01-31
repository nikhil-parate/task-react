import React, {
    Component
} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './admin.css';
toast.configure();
const API_URL1 =  'https://task-i.herokuapp.com/admin';

class demo extends Component {
    constructor() {
         super();
        this.routeChange = this.routeChange.bind(this);
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
        this.state = {
            success : "false",
            email: "",
            password: "",
            errors: {
                email: "" ,
                password: "",
              },
            touched: {
                email: false,
                password : false,
              },
        }
        
    }
    routeChange() {
        let path = `/data`;
        this.props.history.push(path);
      }
    handle = async ({ target: { name, value } }) => {
        const errors = this.state.errors;
        switch (name) {
            case "email": {
                if (!value) {
                  errors[name] = "username is empty";
                } else if(!isNaN(name)){
                  errors[name] = "username must be email format";
                } else {
                  errors[name] = "";  
                }
                break;
              } 
            case "password": {
              if (!value) {
                errors[name] = "password is empty";
              } else {
                errors[name] = "";
              }
              break;
            }
            default: {
                console.log("Hi");
            }
          }
          this.setState({ [name]: value, errors });

    }
    handleBlur = ({ target: { name } }) => {
        const touched = { ...this.state.touched };
        touched[name] = true;
        this.setState({ touched });
      };
     
    submit = async (event) => {
        event.preventDefault();    
      try {  
        axios({
          method: 'post',
          url: API_URL1,
          data : {
            email: this.myRef1.current.value,
            password: this.myRef2.current.value
          }
        }).then((response)=>{
        if(!response.data.error) {
           toast.success("login successeful, wait for a sec...");
           this.routeChange() ;
        }
        else{
          toast.error("wrong userid or password", {position: toast.POSITION.TOP_CENTER});
          console.log(response.data.error);
      }
        });
      } catch (err) {
        console.log(err,"error is here");
    }
};
    
    render() {
        return ( <>
              <form  className="form" onSubmit={this.submit}>
                  <br />< br />
              <label className="label" style={{paddingRight: "20px"}}> Email <input className="input" ref = {this.myRef1} 
            type = "email" required style={{marginLeft:"44px"}}
            value = {this.state.email.value}
            name = "email"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label >   <br />
            <label  className="label"> Password <input className="input" ref = {
                this.myRef2
            }
            type = "password" required style={{marginLeft:"20px"}}
            value = {
                this.state.password.value
            }
            name = "password"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label >  <br />
            <input className="button" type = "submit" 
            value = "Login" />
            </form> 
            </>
        )
    }
}
 
 export default withRouter(demo);