import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Container, Form, FormLabel } from 'react-bootstrap';
import './register.css';

const Register = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loginStatus, setLoginStatus] = useState("");
    const history = useHistory();

    const regUser = () => {
            axios.post("http://localhost:3001/register", {
                name: name,
                password: password,
            }).then((res) => {
                if(res.data.message) {
                    setLoginStatus(res.data.message)
                } else {
                    setLoginStatus("Hello " + res.data[0].name);
                    history.push('/login');
                }
            });
        }
    
    return (
        <div className="registerFormContainer">
            <h1>Register</h1>
                <Form.Group className="formGroupName">
                    <Form.Label style={{float: "left"}}>Name:</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Name"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="formGroupPassword">
                    <Form.Label style={{float: "left"}}>Password:</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Enter Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}>
                    </Form.Control>
                </Form.Group>
            <button
                className="registerBtn"
                type="submit" 
                onClick={regUser}
                >Register
            </button>
        </div>
    )
}
export default Register;