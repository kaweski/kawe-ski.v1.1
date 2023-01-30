import React from 'react'

const Box: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const BoxStyles = {
        padding: '16px',
        borderRadius: '16px',
        border: '1px solid gray',
        backgroundColor: '#333',
        color: '#f5f5f5',
        margin: '2em'
    }

    return (
        <div style={BoxStyles}>
            {children}
        </div>
    )
}

export default Box