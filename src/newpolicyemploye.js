import React, {
    Component
} from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';

const API_URL3 = 'https://task-i.herokuapp.com/newdata'
class demo extends Component {
    constructor() {
        super();
        this.changeState = this.changeState.bind(this);
        this.state = {
            b : "Accept",
            posts3: []
        }
    }
    componentDidMount = () => this.getPost();
    getPost = async () => {

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
            {b : "Accepted"}
        );

    }
    render() {
        return ( 
             <>
             <h3 >New Policy</h3>
            <Table>
                <thead >
                <th > Policy1 </th> 
            <th > Policy2 </th> 
            <th > Policy3 </th> 
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
            </>
        )
    }
}

export default demo;