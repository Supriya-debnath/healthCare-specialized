import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Footer/Header/Header';
import NewsLatter from '../NewsLatter/NewsLatter';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services/>
            <About/>
            <NewsLatter/>
            <Footer/>
        </div>
    );
};

export default Home;