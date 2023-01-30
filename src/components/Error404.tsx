import React from 'react'
import Box from './Box'
import Button from './Button/Button'

const Error: React.FC = () => {
    return (
        <Box>
            Oops! Something wrent wrong!
            <Button url='/'>Go to the home page</Button>
        </Box>
    )
}

export default Error