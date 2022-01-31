import React, {
    Component
} from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';

const API_URL1 = 'https://task-i.herokuapp.com/data';
const API_URL2 = 'https://task-i.herokuapp.com/dataemploye';
const API_URL3 = 'https://task-i.herokuapp.com/newdata'
class demo extends Component {
    constructor() {
        super();
        this.changeState = this.changeState.bind(this);
        this.state = {
            b : "Approve",
            posts : [],
            posts2: [],
            posts3: []
        }
    }
    componentDidMount = () => this.getPost();
    getPost = async () => {
        try {
            const {
                data
            } = await axios.get(API_URL1);
            console.log(data);
            this.setState({
                posts: data
            });
        } catch (err) {
            console.log(err);
        }
        try {
            const {
                data
            } = await axios.get(API_URL2);
            console.log(data);
            this.setState({
                posts2: data
            });
        } catch (err) {
            console.log(err);
        }

        try {
            const {
                data
            } = await axios.get(API_URL3);
            console.log(data);
            this.setState({
                posts3: data
            });
        } catch (err) {
            console.log(err);
        }
    }
    
    changeState = () =>{
        this.setState(
            {b : "DisApprove"}
        );

    }
    render() {
        return ( 
             <>
             <h3 >Admin Page</h3>
             <h5>Customer Details</h5>
            <Table>
            <thead >
            <th > Email </th> 
            <th > Policy1 </th> 
            <th > Policy2 </th> 
            <th > Policy3 </th> 
            </thead > <tbody> {
                this.state.posts.map(({
                    _id,
                    email,
                    policy1,
                    policy2,
                    policy3
                }) => {
                    return ( 
                        <
                        tr key = {
                            _id
                        } style={{background:"#EFC9AF"}}>
                        <
                        td style={{fontWeight:"bold", color:"#104c91"}}> {
                            email
                        } < /td> <
                        td style={{fontWeight:"bold", color:"#104c91"}}> {
                            policy1
                        } < /td> <
                        td style={{fontWeight:"bold", color:"#104c91"}}> {
                            policy2
                        } < /td> <
                        td style={{fontWeight:"bold", color:"#104c91"}}> {
                            policy3
                        } < /td>
                        </tr>
                    );
                })
            } </tbody> 
            </Table>
            <h5>New Policies</h5> 
            <Table>
                <thead >
            </thead >
                <tbody>
                    {
                         this.state.posts3.map(({
                            _id,
                            email,
                            policy1,
                            policy2,
                            policy3
                        }) => {
                            return ( 
                                <
                                tr key = {
                                    _id
                                } style={{background:"#EFC9AF"}}>
                                <
                                td style={{fontWeight:"bold", color:"#104c91"}}> {
                                    email
                                } < /td> <
                                td style={{fontWeight:"bold", color:"#104c91"}}> {
                                    policy1
                                } < /td> <
                                td style={{fontWeight:"bold", color:"#104c91"}}> {
                                    policy2
                                } < /td> <
                                td style={{fontWeight:"bold", color:"#104c91"}}> {
                                    policy3
                                } < /td> <
                                td > < Button style={{background:"#ff6347"}}  onClick={()=>this.changeState()}> {this.state.b} < /Button></td >
                                </tr>
                            );
                        })
                    }
                </tbody>
            </Table>
             <h5>Employe Details</h5>
             <Table>
            <thead >
            <th > Email </th> 
            </thead > <tbody> {
                this.state.posts2.map(({
                    _id,
                    email,
                }) => {
                    return ( 
                        <
                        tr key = {
                            _id
                        } style={{background:"#EFC9AF"}}>
                        <
                        td style={{fontWeight:"bold", color:"#104c91"}}> {
                            email
                        } < /td>
                        </tr>
                    );
                })
            } </tbody> 
            </Table> 
            </>
        )
    }
}

export default demo;