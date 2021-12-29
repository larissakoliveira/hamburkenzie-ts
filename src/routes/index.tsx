import Login from "../components/Login";
import { Routes as Switch} from "react-router";
import Home from "../components/Home";
import Register from "../components/Register";
import { Route } from "react-router";
import Checkout from "../components/Checkout";



const Routes = () => {

  return (
    <Switch>
       <Route path="/" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/checkout" element={<Checkout/>}/>
    </Switch>
  );
};

export default Routes;