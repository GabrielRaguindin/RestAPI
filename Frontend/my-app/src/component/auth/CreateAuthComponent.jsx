import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Card, FloatingLabel, Form, Button, Stack, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../../src/App.css';
import Service from '../../service/Service'

function CreateAuthComponent() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birth, setBirth] = useState('');
    const [password, setPassword] = useState('');

    const createUsers = () => {
        const user = { name, email, password, phone, birth };
        Service.newUser(user)
            .then((response) => {
                console.log(response.data);
                handleShow();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const renderTooltip = (props) => (
        <Tooltip className='labels' id="button-tooltip" {...props}>
            Password must be at least 8 characters in length.
        </Tooltip>
    );

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ marginBottom: '2rem' }}>
            <Card className='mt-4 mx-auto card_style' style={{ width: '67rem' }}>

                <Stack direction='horizontal'>
                    <div className='mx-auto mb-2'>
                        <img
                            src="src\logo.png"
                            width="320px"
                            height="320px"
                            className="logo"
                            alt="React Bootstrap logo" />
                    </div>
                    <div>
                        <Form>
                            <h4 className='mt-3 text-light text-center labels bi bi-at'> Create Account</h4>

                            <Card.Body>

                                <FloatingLabel controlId='floatingInput' label='Enter Full Name' className='mb-3 labels'>
                                    <Form.Control
                                        className='input'
                                        type='text'
                                        placeholder='Full Name'
                                        onChange={(e) => setName(e.target.value)}
                                        required />
                                </FloatingLabel>

                                <Stack direction='horizontal' gap={'3'}>
                                    <div>
                                        <FloatingLabel controlId='floatingInput' label='Email' className='mb-3 labels'>
                                            <Form.Control
                                                className='input'
                                                type='email'
                                                placeholder='Email'
                                                style={{ width: '15.5rem' }}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required />
                                        </FloatingLabel>
                                    </div>
                                    <div>
                                        <FloatingLabel controlId='floatingInput' label='Phone Number' className='mb-3 labels'>
                                            <Form.Control
                                                className='input'
                                                placeholder='Number'
                                                style={{ width: '16rem' }}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required />
                                        </FloatingLabel>
                                    </div>
                                </Stack>

                                <Stack direction='horizontal' gap={'3'} className='mb-2'>
                                    <div>
                                        <FloatingLabel controlId='floatingInput' label='Enter your birthday' className='mb-2 labels'>
                                            <Form.Control
                                                className='input'
                                                type='date'
                                                placeholder='Birthday'
                                                style={{ width: '15.5rem' }}
                                                onChange={(e) => setBirth(e.target.value)} />
                                        </FloatingLabel>
                                    </div>

                                    <div className='text-light labels'>
                                        Gender
                                        <Stack direction='horizontal' gap={'4'}>
                                            <div>
                                                <Form.Check
                                                    type='radio'
                                                    name='gndr'
                                                    className='mt-1 text-light labels'
                                                    label='Male' />
                                            </div>
                                            <div>
                                                <Form.Check
                                                    type='radio'
                                                    name='gndr'
                                                    className='mt-1 text-light labels'
                                                    label='Female' />
                                            </div>
                                            <div>
                                                <Form.Check
                                                    type='radio'
                                                    name='gndr'
                                                    className='mt-1 text-light labels'
                                                    label='Other' />
                                            </div>
                                        </Stack>
                                    </div>
                                </Stack>

                                <OverlayTrigger
                                    placement="left"
                                    delay={{ show: 100, hide: 200 }}
                                    overlay={renderTooltip}>
                                    <FloatingLabel controlId='floatingInput' label='New Password' className='labels'>
                                        <Form.Control
                                            className='input'
                                            type='password'
                                            placeholder='Password'
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />
                                    </FloatingLabel>
                                </OverlayTrigger>

                                <FloatingLabel controlId='floatingInput' label='Confirm Password' className='mt-3 labels'>
                                    <Form.Control className='input' type='password' placeholder='Password' required />
                                </FloatingLabel>

                                <Stack direction='horizontal' gap={'1'} className='mt-2'>
                                    <div>
                                        <Form.Check className='mt-1 text-light labels' label='I agree to the' />
                                    </div>
                                    <div>
                                        <a href='#' className='text-info labels'> Terms & Conditions</a>
                                    </div>
                                </Stack>

                                <div className='text-center'>
                                    <Button
                                        type='submit'
                                        onClick={createUsers}
                                        className='mt-3 mb-2 button'
                                        variant='info'
                                        style={{ width: '12rem' }}>
                                        Sign Up
                                    </Button>
                                </div>

                                <div className='text-center text-light mt-2 mb-2 labels'>
                                    Already have an account? <Link to='/' className='text-info'>Login</Link>
                                </div>

                            </Card.Body>
                        </Form>
                    </div>
                </Stack>

            </Card>
            <Modal
                size='sm'
                data-bs-theme='dark'
                className='text-light labels'
                show={show}
                onHide={handleClose}>
                <Modal.Body>Account successfully created!</Modal.Body>
            </Modal>
        </div>
    )
}

export default CreateAuthComponent;