import React from 'react';


const Avatar = ({url,  ...props}) => {
    
    return (
        <div {...props}>
        <img src={url} alt="foto" id="img"/>
        </div>
    );
}

export default Avatar;