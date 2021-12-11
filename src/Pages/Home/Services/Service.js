import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {

    const { id, name, img, price, time, des } = props.service;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3>{name} </h3>
            <h4>{price}</h4>
            <h4>{time}</h4>
            <p>{des}</p>
            <Link to={`/booking/${id}`}>
                <button className=" btn-warning p-2 rounded" >Book {name} </button></Link>
        </div>
    );
};

export default Service;