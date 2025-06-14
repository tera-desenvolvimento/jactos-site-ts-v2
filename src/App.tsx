import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import MainBanner from './components/mainBanner';
import SmallCards from './components/smallCards';
import Plans from './components/plans';
import Apps from './components/apps';
import Infomercial from './components/infomercial';
import AutoAtendimento from './components/autoatendimento';
import Testimonial from './components/testimonial';
import Whatsapp from './components/misc/whatsapp';

function App() {
  return (
    <React.Fragment>
      <Header/>
        <MainBanner/>
        <SmallCards/>
        <Plans/>
        <Apps/>
        <Infomercial/>
        <Testimonial/>
        <AutoAtendimento/>
        <Whatsapp/>
      <Footer/>
    </React.Fragment>
  );
}

export default App; 