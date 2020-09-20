import React from 'react';
import Datas from './Datas';
import { Link, useParams } from 'react-router-dom';

const CourseDetails = () => {
    const {pd}=useParams();
    var data=Datas.find(id=> pd==id.key);
    console.log(data);
    return (
        <div className="container">
            <img src={data.img} style={{width:"300px",margin:"10px auto",display:"block",boxShadow:"2px 2px 10px solid black"}}/>
            <div style={{maxWidth:"700px",display:"block",margin:"5px auto"}}>
                <h3 className="text-center">{data.name}</h3>
                <h4 className="text-center">{data.tag}</h4>
                <p className="text-justify">{data.details}</p>
                <h3>Price: <span style={{color:"red"}}>{data.price}$</span> </h3>
                <Link to="/shop">
                    <button className="btn btn-dark">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseDetails;