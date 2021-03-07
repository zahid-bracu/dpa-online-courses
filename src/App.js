import React, {createContext, useState } from "react";
import "./styles.css";
import Shop from './components/Shop'
import NavBar from "./components/NavBar.js";
import Order from './components/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart.js";
import { addToDatabaseCart, getDatabaseCart } from '../src/utilities/databaseManager';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import CourseDetails from "./components/CourseDetails";
import { PaymentCard } from "./components/PaymentCard";
import ConfirmedOrder from "./components/ConfirmedOrder";
import InformationForm from "./components/InformationForm";
import ConfirmMsg from "./components/ConfirmMsg";
import Footer from './components/Footer';
export const UserInfoContext=React.createContext();

function App() {
 
  const [UserInfo, setUserInfo]=useState({
    name:"",
    business:"",
    flat:"",
    house:"",
    road:"",
    city:"",
    phone:"",
    card:"",
    mail:"",
    savedCart:""
  });


  
  return (
    <UserInfoContext.Provider value={[UserInfo, setUserInfo]}>
    <div className="">
      <NavBar ></NavBar>
      
      <Router>{/*Router Whole Wrapper*/}
        <Switch>{/*Switch for other page*/}
          <Route path='/shop'>
            <Shop></Shop>
          </Route>

          <Route path='/order'>
            <Order></Order>
          </Route>

           
          <Route path='/home'>
            <Home></Home>
          </Route>


          <Route path='/paymentcard'>
            <PaymentCard/>
          </Route>


          <Route path='/orderconfirm'>
            <ConfirmedOrder/>
          </Route>


          <Route path='/confirmmsg'>
              <ConfirmMsg/>
          </Route>


          <Route path='/informationform'>
             <InformationForm/>
          </Route>


          <Route path='/CourseDetails/:pd'> {/*The Path for dynamic Data key*/}
            <CourseDetails></CourseDetails> {/*Page for Dynamic Key Passing*/}
          </Route>



          <Route exact path='/'> {/*This is default for Homepage...when the page is loaded*/}
            <Home></Home> {/*The Homepage*/}
          </Route>
          
          

          <Route path='*'>{/*Path for wrong URL*/}
            <Error></Error>{/*Wrong URL Page*/}
          </Route>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
    </UserInfoContext.Provider>
  );
}
export default App;