import React from 'react'
import Banner from '../Bannner/Banner'
import JobPost from '../JobPost/JobPost'
import MyNavbar from '../MyNavbar/MyNavbar'
import Services from '../Services/Services'

function Home() {
  return (
    <div>
                              <MyNavbar></MyNavbar>
                              <div style={{marginLeft:20,marginRight:20}}>
                              <Banner></Banner>
                              </div>
                              <div style={{marginTop:50}}>
                              <Services></Services>
                              </div>
                              <JobPost></JobPost>
                            
    </div>
  )
}

export default Home