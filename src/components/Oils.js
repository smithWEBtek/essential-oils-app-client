import React from 'react';

const Oils = ({ oils }) => {
    const renderOils = oils.map(oil =>
        <p key={oil.id}>{oil.name}</p>
    )

    
    return (
        <div>
            {renderOils}
        </div>
    )
}

export default Oils