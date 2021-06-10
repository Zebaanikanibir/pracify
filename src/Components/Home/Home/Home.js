import React from 'react';
import Navbar from '../../../Components/Home/Navbar/Navbar';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Proud from '../../../Components/Home/Proud/Proud'
import Info from '../../../Components/Home/Info/Info'
import Subscribe from '../Subscribe/Subscribe';
import Blog from '../Blog/Blog';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Header></Header>
      <Welcome></Welcome>
      <Proud></Proud>
      <Info></Info>
      <Subscribe></Subscribe>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default Home;
