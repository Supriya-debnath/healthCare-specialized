import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Footer from '../Footer/Footer';
import Header from '../Footer/Header/Header';

const DetailsInfo = () => {
    const {cart} = useContext(UserContext)
    return (

        <div>
            <Header/>
            <Container className="pt-5">
                <h1 className="text-center" style={{color:"crimson"}} >{cart.name}</h1>
                <img className="text-center" style={{width:"100%",height:"auto"}} src={cart.img} alt="" />
                <p className="pt-3" style={{color:"#212529", fontSize:"15px" }} >{cart.detailsInfo}</p>
            </Container>
            <Footer/>
        </div>
    );
};

export default DetailsInfo;