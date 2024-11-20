import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Card, FloatingLabel, Button, Form, Stack} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import '../../../src/App.css';

const LogInAuthComponent = () => {
    return(
        <Stack direction='horizontal' gap={'5'} className='d-flex justify-content-center'>

        <div className='me-4 mt-5'>
            <h1 className='intro_styl'> <span> React Bootstrap </span> </h1>
            <p className='intro_styl'> <span> Rebuilt in React with Bootstrap at its core. </span> </p>
        </div>

        <div style={{marginTop: '3rem'}}>
            <Card className='mt-5 mx-auto card_style' style={{ width: '23rem' }}>

                <h4 className='mt-3 mx-auto text-light labels bi bi-door-open'> Welcome</h4>

                <Card.Body>
                    
                    <Form>
                    <FloatingLabel controlId='floatingInput' label='Email address' className='mb-3 labels'>
                        <Form.Control 
                            required
                            className='input' 
                            type='email' 
                            placeholder='name@example.com'/>
                    </FloatingLabel>
                    
                    <FloatingLabel controlId='floatingPassword' label='Password' className='mb-2 labels'>
                        <Form.Control
                            required
                            className='input' 
                            type='password' 
                            placeholder='Password'/>
                    </FloatingLabel>

                    <Stack direction='horizontal' gap={'5'}>
                        <div>
                            <Form.Check
                                className='ms-1 text-light labels'
                                type='switch'
                                label='Remember me'>
                            </Form.Check>
                        </div>
                        <div className='ms-4'>
                            <a href='#' className='text-info labels'>Forgot password?</a>
                        </div>
                    </Stack>

                    <div className='text-center'>
                        <Button
                            type='submit'
                            className='mt-3 mb-2 button' 
                            variant="info" 
                            style={{width: '12rem'}}>
                            Login
                        </Button>
                    </div>

                    <div className='text-center text-light mt-2 mb-2 labels'>
                        Don't have an Account? <Link to='/create' className='text-info'>Create</Link>
                    </div>

                </Form>                    
                </Card.Body>
            </Card>
        </div>
        </Stack>
    )
}

export default LogInAuthComponent;