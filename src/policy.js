import { useState } from "react";
import { policies } from "./allPolicies";
import {Button} from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { withRouter } from 'react-router-dom';
toast.configure();

const API_URL="https://task-i.herokuapp.com/policy";

 function App(props) {
  const [checkedState, setCheckedState] = useState(
    new Array(policies.length).fill(false)
  );
  const [inputValue, setInputValue] = useState("");

  let[count,setCount] = useState(0);

  const handleOnChange = (position) => {
      setCount(count + 1);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const changeRoute = () =>{
    let path = `/new-policy`;
    props.history.push(path);
  }

  const handleSubmit = () =>{
     if(count >= 3) {
        axios({
            method: 'post',
            url: API_URL,
            data : {
              email :  inputValue,
              policy1: "infosec policy", 
              policy2: "acceptable-use policy",
              policy3: "cryptographic policy"
            }
          }).then((response)=>{
          if(!response.data.error) {
             toast.success("policy acceptance is successful");
          }
          else{
              toast.error("policy already accepted by you.");
          }
         })}
     else {
        toast.error("please select all three policies", {position: toast.POSITION.TOP_CENTER});
     }
  }
  return (
    <div className="App">
        <Button onClick={()=>{changeRoute()}}>create new policy</Button>
      <h3>Select all policies</h3>
      <label>Enter Email Id</label>
      <input
        type="text"
        placeholder="EmailId"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <ul className="policies-list">
        {policies.map(({ name}, index) => {
          return (
            <li key={index}>
              <div className="policies-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="policies-list-item">
            <Button onClick={()=>{handleSubmit()}}>Submit</Button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(App);