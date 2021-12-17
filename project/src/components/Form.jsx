import React from 'react';
import FormInput from './FormInput';
import ButtonReg from './ButtonReg';
import styles from '../styles/form.module.scss';

import {inputs} from '../data/inputs';
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';


const Form = () => {
    return (
        <React.Fragment>
            <section className={styles.logotype}>
                    <img src={`./images/logo_cycle.png`} className={styles.image} alt="logotype"/>
            </section>

            <Box
                component="form"
                sx={{
                    m: '0 auto', 
                    width: '29vw',
                    border: '1px solid #D3D3D3',
                    borderRadius: '8px',
                    p: '2vw',
                    mt: '2vw',
                    '& .MuiTextField-root': {
                        m: '0.7vw 0', 
                        width: '25vw'
                    }
                }}
                noValidate
            >
                <Typography 
                    component="h1"
                    sx={{
                        fontSize: '1.9rem',
                        textAlign: 'center',
                        mb: '1vw',
                        textTransform: 'uppercase',
                        letterSpasing: '0.1vw',
                        fontWeight: '300'
                    }}
                >
                    Create an account
                </Typography>
        
                    {
                        inputs.map((input) => {
                            return(
                                <FormInput 
                                    label={input.label} 
                                    key={input.id}
                                    id={input.id} 
                                    type={input.type} 
                                    helperText={input.helperText} 
                                />
                            )
                        })
                    }

                <ButtonReg 
                    variant='contained'
                >
                    Submit
                </ButtonReg>

                <Typography
                    variant="body1"
                    component="p"
                    className={styles.text}
                >
                    Have an account?
                    <Button
                        variant="text"
                        className={styles.signUp}
                    >
                        Sign in
                    </Button>
                </Typography>

            </Box>
        </React.Fragment>
    )
}

export default Form;