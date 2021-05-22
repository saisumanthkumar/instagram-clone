import React from 'react';
import '../componentstyles.css';
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <>
        <div className="mainerror">
            <div className="emoji">😕</div>
           <h2>OOPS! You have come to wrong page.</h2> 
           <div className="link">
            <Link to="/">
                    Go Home
            </Link> 
           </div>          
        </div>
        
        </>
    )
}
