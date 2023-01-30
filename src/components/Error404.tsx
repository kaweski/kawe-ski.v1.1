import React from 'react'
import { Link } from 'react-router-dom'
import Box from './Box'

const Error: React.FC = () => {
    return (
        <Box>
            Oops! Something wrent wrong!
            <Link to="/">Go to the home page</Link>
        </Box>
    )
}

export default Error