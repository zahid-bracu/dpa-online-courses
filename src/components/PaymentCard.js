import React, {useEffect, useState, useContext} from 'react';
import {UserInfoContext} from '../App';
import './styles.css';
import { useHistory } from "react-router-dom";

export function PaymentCard(props) {
  let history = useHistory();
  const [number, setNumber] = useState("");
  const [UserInfo, setUserInfo]=useContext(UserInfoContext)
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      var infos={...UserInfo};
      infos.card=number;
      //console.log(infos)
      setUserInfo(infos);
      if(infos.card!=""){
        history.push("/orderconfirm");
      }
       
  }
  console.log(UserInfo);

   
  return (
    <div className="container">
        
        <form class="form-group form-custom-card" onSubmit={handleSubmit}>
        <h4 className="text-center my-3">Enter Your Credit Card Number</h4>
            {
                number && <h5 className="  text-center my-3">
                
                Number: <span className="text-danger">{number}</span>
                
                </h5>
            }

            <input
            class="form-control"
            type="number"
            
            onBlur={e => setNumber(e.target.value)}
            />
        
             
            {
              !UserInfo.card && <input class="btn btn-info btn btn-pay-custom" type="submit" value="Enter" />
            }

            {
              UserInfo.card && <input class="btn btn-warning btn btn-pay-custom" type="submit" value="Proceed" />
            }
        </form>
    </div>
  );
}