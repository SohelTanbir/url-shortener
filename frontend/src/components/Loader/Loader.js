import React from 'react';
import './Loader.css';
import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
    return (
        <div className='loader'>
             <HashLoader
                color="#ddd"
                size={40}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loader;