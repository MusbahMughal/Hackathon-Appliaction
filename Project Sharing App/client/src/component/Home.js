
import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import '../component/app.css'; // Import your CSS file

function Home() {

  const location = useLocation();
  
  const token = location.state.token;
  console.log(token);
  const api = `https://authentication-2wzz65y4q-iqranaz240.vercel.app/user/getUser`;
  axios.get(api, { headers: { "x-access-token": `${token}` } })
    .then(res => {
      console.log("Get User: ", res.data);
      this.setState({
        items: res.data,  /*set response data in items array*/
        isLoaded: true,
        redirectToReferrer: false
      })
    })

    axios.get("https://authentication-2wzz65y4q-iqranaz240.vercel.app/user/allUser")
    .then(res => {
      console.log("All User :", res.data);
      // this.setState({
      //   items: res.data,  /*set response data in items array*/
      //   isLoaded: true,
      //   redirectToReferrer: false
      // })
    })
      return (
        <div>
          <Navbar />
          <h3 className="pt-5 text-center">Welcome to Student Project Showcase</h3>
          <p className="para">At Student Project Showcase, we're passionate about empowering students to showcase their creative projects to the world. Whether you're a budding developer, designer, engineer, or artist, this platform is your canvas to exhibit your talents, share your innovations, and inspire others.</p>
          {/* <h5>{token}</h5> */}
          <h4 className="sec-head">Discover Inspiring Projects</h4>
          <p className="para-2">Browse through a diverse collection of projects created by students from various disciplines and backgrounds. From innovative software applications to stunning visual artworks, there's something here for everyone. Get inspired by the creativity and ingenuity of your peers.</p>

          <div className="project-card">
//         <img src={project.image} alt={project.name} />
//         <h3>Shopify Hub</h3>
//         <p>{project.description}Shopify Hub is a fully functional e-commerce platform with features such as product browsing, user authentication, and secure checkout. It emphasizes a clean and intuitive design to enhance the user shopping experience.</p>
//       </div>

//       <div className="project-card">
//       <img src={project.image} alt={project.name} />
//       <h3>Weather App</h3>
//       <p>Weatherly is a responsive web application that provides real-time weather information based on the user's location. It offers current conditions, hourly forecasts, and a seven-day outlook, ensuring users are prepared for any weather.</p>
//     </div>

//     <div className="project-card">
//       <img src={project.image} alt={project.name} />
//       <h3>{project.name}Task Management App</h3>
//       <p>{project.description} Taskify is a task management app designed to help users organize their daily activities. With features like task creation, priority setting, and completion tracking, it's a handy tool for maintaining productivity.</p>
//     </div>

//     <div className="project-card">
//       <img src={project.image} alt={project.name} />
//       <h3>{project.name}Social Media Dashboard</h3>
//       <p>{project.description}SocialPulse is a dynamic social media dashboard that aggregates feeds from multiple platforms. It provides users with a unified view of their social interactions, allowing them to stay engaged and responsive across different networks.</p>
//     </div>
        </div>
        
      )
    }

export default Home;
