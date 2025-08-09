import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import Category2 from './components/Category2'
import Services from './components/Services'
import Banner from './components/Banner'
import Products from './components/Products'
import Blogs from './components/Blogs'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Popup from './components/Popup'
import AOS from 'aos'
import 'aos/dist/aos.css'

import headphone from './assets/hero/headphone.png'
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png'

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter sale",
  title4: "Lorem ipusm dolor sit amet consecteture adipisicing elit.",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter sale",
  title4: "Lorem ipusm dolor sit amet consecteture adipisicing elit.",
  bgColor: "#2dcc6f",
};

const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }

  React.useEffect(() => {
    AOS.init(
        {
        duration: 800,
        easing: "ease-in-out",
        delay: 100,
        offest: 100,
      }
    );
    AOS.refresh();
  }, []);

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App