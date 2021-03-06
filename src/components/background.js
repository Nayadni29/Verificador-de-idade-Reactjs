import React from 'react';

const Background = ({color,...props}) => {
    return (
        <div className="background" style={{
            transition: '0.25s all',
            backgroundColor: color,
            height: '100vh'}} {...props}>
            {props.children}
        </div>
    );
}

export default Background;