import React from 'react'
import { Navbar, Header, Featured, PropertyList, FeaturedProperties, MailList, Footer } from '../../components'
import "./home.css"

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
          <Featured />
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList />
          <h1 className='homeTitle'>Explore Thailand</h1>
          <FeaturedProperties />
          <MailList />
          <Footer/>
        </div>
    </div>
  )
}


export default Home