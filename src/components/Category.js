import React from 'react';
import {
    Card,
    Button
  } from "react-bootstrap";

const Category = (props) => {
    function setName(value){
        document.getElementById("Courses").innerText=value;
    }
    return (
        <div className='text-center my-5'>
            <h5 className="text-dark mb-3">Sort Courses by Topic:</h5>
            <Button onClick={()=>{props.onCategoryChange("All");setName("All Courses")}} variant="success" className="px-5 mr-3"> All </Button>
            <Button onClick={()=>{props.onCategoryChange("Programming");setName("Programming Courses")}} variant="success" className="mr-3">Programming</Button>
            <Button onClick={()=>{props.onCategoryChange("Business");setName("Business Courses")}} variant="success" className="mr-3 px-4">Business</Button>
            <Button onClick={()=>{props.onCategoryChange("Medical");setName("Medical Courses")}} variant="success" className="px-4">Medical</Button>
            <h4 className="my-3 text-primary" id="Courses">All Courses</h4>
        </div>
    );
};

export default Category;