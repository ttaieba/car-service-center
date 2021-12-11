import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Loging = () => {
    const { signInUsingGoogle } = useAuth
    return (
        <div>

            <h1 className="text-center text-success my-5">Please Login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-warning" >Login with google</button>
        </div>
    );
};

export default Loging;