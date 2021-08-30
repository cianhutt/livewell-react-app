import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./home/home";
import Register from "./auth/register/register";
import Login from "./auth/login/login";
import { useState, useEffect } from "react";
import axios from "axios";
import MealPlanInfo from "./mealPlanInfo/mealPlanInfo.js"
import { AuthContext } from "./helpers/AuthContext";
import Navigation from "./navigation/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav,Link, Container } from 'react-bootstrap';


function App() {
  const [authState, setAuthState] = useState({
    name: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        if (res.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            name: res.data.name,
            id: res.data.id,
            status: true,
          });
        }
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Navigation authState={authState} setAuthState={setAuthState}/>
            <Route exact path="/"><Home/></Route>
            <Route path="/getPlan"><MealPlanInfo/></Route>
            <Route path="/register"><Register/></Route>
            <Route path="/login"><Login/></Route>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;