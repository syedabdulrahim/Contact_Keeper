import React from 'react'
import spinner from './spinner.gif';

 const Spinner = () => 
     (
        <React.Fragment>
            <img src={spinner} alt="loading" style={{width:"200px",margin:"auto",display:"block"}}></img>
        </React.Fragment>
    )


    export default Spinner;
