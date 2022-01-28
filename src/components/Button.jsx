import React from 'react';


const Button = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="button-verificar">
            {children}
        </button>
    );
}

export default Button;