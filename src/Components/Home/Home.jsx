import React from 'react'
import Banner from './Banner';
import ChefSection from './ChefSection';
import Section1 from './Section1';
import Section2 from './Section2';

function Home() {
  return (
    <div className='md:container  md:mx-auto mx-5'>
      <Banner></Banner>
      <Section1></Section1>
      <ChefSection></ChefSection>
      <Section2></Section2>
    </div>
  )
}

export default Home;