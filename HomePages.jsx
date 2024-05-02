import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'


import ViewAllJobs from '../components/ViewAllJobs'
import JobsListings from '../components/JobsListings'

const HomePages = () => {
  return (
    <div>
        <Hero/>
        <HomeCards />
        <JobsListings isHome={true} />
        
   
        <ViewAllJobs/>
        
    </div>
  )
}

export default HomePages