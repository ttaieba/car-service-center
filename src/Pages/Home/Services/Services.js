import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css';


const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <h1 id="services" className="text-center text-primary my-4"> Our Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;