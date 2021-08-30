import React from 'react'
import { Link } from 'react-router-dom'
// import bgimg from './images/bgimg.jpg';
// import Image from 'react-bootstrap/Image';
// import bgimg from './images/bgimg';
// import { Container } from 'react-bootstrap';
import bgimg from '../images/homeimg.jpg';
import './home.css';
import { Container, Row, Card, Col } from 'react-bootstrap';


const Home = () => {
    // const [loggedIn, setLoggedIn] = useState(false);
    
    return (
    //    <div class="cont">
    //     {/* <div class="bg">
    //             <button></button>
    //         </div> */}
    //         <Image src="frontend/src/images/bgimg.jpg" fluid />
    //         </div>
    // <div className="cont">
    <div className="homeContainer" fluid>
        <Row className="align-items-center mainimage">
        {/* <div className="postion-relative"> */}
        {/* <Col sm={12} md={8} lg={7}  */}
            {/* className="mainimg"  */}
            {/* style={{padding: "50px"}}> */}
            {/* <div className="image"> */}
            <div className="bgimg">
                <img src={bgimg} className="img-fluid"/>
            </div>
          <Col 
            // xs={8} 
            sm={12} 
            md={6}
            lg={6}
            xxl={4}
            className="
                    offset-md-3
                    offset-lg-3
                    offset-xxl-4
                    content
                    ">
          {/* <div className="content"> */}
              <h1>Meal Planning, but simple</h1>
            <h3>Find Your Meal Plan</h3>
            <Link to="/getplan">
                <button className="btn">
                    Get Meal Plan
                </button>
            </Link>
            {/* </div> */}
            </Col>
            {/* </div> */}
            {/* </Col> */}
            {/* </Col> */}
        {/* <Col sm={12} md={4} lg={5} className="content" >
            <h3>Lets Get That Meal Plan</h3>
            <button style={{
                backgroundColor: "#336e9e",
                fontWeight: "bold",
                width: "200px",
                border: "0px",
                color: "white",
                borderRadius: "5px",
                padding: "10px 10px"
                }}>
                Get Meal Plan
                <Link to="/getplan"></Link>
            </button>
        </Col> */}
        </Row>
        </div>
        // {/* // </div> */}
    //   {/* </div> */}
            // {/* <div style={{position: "relative"}}>
            //     <img src={bgimg} style={{width: "1500px"}}></img>
            //     <button style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}><Link to="/getPlan">Get Meal PLan</Link></button>
            // </div> */} 
    )
}

export default Home
