import React from 'react'
import Navbar from "./Navbar";

function About() {
  return (
    <div>
    <Navbar/>
    <h3 className="pt-5 text-center">hello,i am About Page</h3>
   
    <div style={{ backgroundColor: '#92C7CF', padding: '20px' }}>
      <h1 style={{ color: '#FFF' }}>About Us</h1>
      <p style={{ color: '#FFF' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec lectus sed turpis
        consequat iaculis. Vestibulum posuere urna non ex facilisis, ut volutpat lorem aliquam.
        Curabitur fermentum ipsum eu purus dictum, vel euismod turpis fermentum. Vivamus
        condimentum quam quis nibh consectetur, in congue lacus ultricies. Cras laoreet, erat ut
        ullamcorper iaculis, risus ipsum commodo magna, ac tincidunt turpis justo eget eros.
      </p>
    </div>
  </div>
  )
}

export default About