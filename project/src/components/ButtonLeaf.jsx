import React from 'react';
import { Button } from '@mui/material'

const ButtonLeaf = ({ color, text }) => {
    return (
        <React.Fragment>
            <Button 
                variant="contained" 
                color={color}
                sx={{
                    fontWeight: 600,
                    fontSize: '0.9vw',
                    letterSpacing: '0.05vw',
                    width: '8vw',
                    padding: '0.4vw 0'
                }}
            >
                {text}
            </Button>
        </React.Fragment>
    )
}

export default ButtonLeaf
