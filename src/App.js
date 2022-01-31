import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Login from './login';
import Form from './customer';
import Admin from './admin';
import Home from './home';
import CustomerLogin from './customerLogin';
import History  from './history';
import Policies from './policy';
import NewPolicy from './newpolicy';
import GetData from './getdata';
import NewData from './newpolicyemploye';
function App() {
  return (
    <>
    <BrowserRouter style={{float:"right"}}>
      <History /> <br /><br />
     <Link style={{fontSize:"16px", padding:"6px 10px 10px 10px", borderRadius:"3px",  background:"#4169e1", color:"whitesmoke"}} to="/">Home</Link>
    <Switch>
    <Route  path="/login" >
    <Login />
    </Route>
    <Route exact path="/" render={()=><Home />}/>
    <Route path="/register">
      <Form />
    </Route>
    <Route path="/admin" render={()=><Admin />} />
    <Route path="/customer-login" render={()=><CustomerLogin />} />
    <Route path="/policies" render={()=><Policies />} />
    <Route path="/new-policy" render={()=><NewPolicy />} />
    <Route path="/data" render={()=><GetData />} />
    <Route path="/newdata" render={()=><NewData />} />
    </Switch>
    </BrowserRouter>
    
    </>
  );
}

export default App;
