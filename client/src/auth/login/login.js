import React, { useState, useContext} from 'react';
import axios from 'axios';
import './login.css';
import { Container, Form, FormLabel } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { AuthContext } from '../../helpers/AuthContext';

const Login = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {setAuthState} = useContext(AuthContext);

    axios.defaults.withCredentials = true;

  const loginUser = () => {
    const data = { name: name, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
          console.log(res.data.name);
          console.log("Logged In")
        localStorage.setItem("accessToken", res.data.token);
        setAuthState({
          name: res.data.name,
          id: res.data.id,
          status: true,
        });
        history.push("/");
      }
    });
  };

    return (
        <div className="loginFormContainer">
            <h1>Login</h1>
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
                  className="loginBtn"
                  type="submit" 
                  onClick={loginUser}
                  >Login
                </button>
         </div>
    );
}
export default Login;