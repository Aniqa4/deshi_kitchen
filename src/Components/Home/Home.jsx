import React from 'react'
import Banner from './Banner';
import ChefSection from './ChefSection';
import Section1 from './Section1';
import Section2 from './Section2';

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Section1></Section1>
      <ChefSection></ChefSection>
      <Section2></Section2>
    </div>
  )
}

export default Home;