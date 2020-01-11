import React from 'react';
import Slider from '../components/Slider';
import Banner from '../components/Banner';

export default function Home () {
  return (
    <React.Fragment>
      <Slider>
        <Banner
          title="Welcome to Archimydes User Story"
          subtitle="We are here to serve you better"
        />
      </Slider>
    </React.Fragment>
  );
}
