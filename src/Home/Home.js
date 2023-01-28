import React from 'react'
import Banner from '../Bannner/Banner'
import JobPost from '../JobPost/JobPost'
import MyNavbar from '../MyNavbar/MyNavbar'
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
        <Banner></Banner>
        <div style={{marginTop:50,marginRight:15,marginLeft:15}}>
          <h2 style={{textAlign:"center", color:'green', fontFamily:"monospace"}}>Job DashBoard</h2>
        <Services></Services>
        </div>
    </div>
  )
}

export default Home