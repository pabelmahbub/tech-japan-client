import React from 'react'
import Banner from '../Bannner/Banner'
import JobPost from '../JobPost/JobPost'
import MyNavbar from '../MyNavbar/MyNavbar'
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
                              <MyNavbar></MyNavbar>
                            
                              <Banner></Banner>
                          
                              <div style={{marginTop:50,marginRight:15,marginLeft:15}}>
                              <Services></Services>
                             </div>
                             
                            
                             <div style={{marginTop:50}}>
                              <Footer></Footer>
                              </div>
                             
                            
    </div>
  )
}

export default Home