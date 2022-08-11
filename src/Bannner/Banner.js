import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                   
                    className="d-block w-100 mr-5"
                    src="https://img.freepik.com/free-vector/recruitment-concept-landing-page-template_52683-43519.jpg?w=826&t=st=1659714363~exp=1659714963~hmac=d91b08b419b3f9aa1b3757b0b8359e2110499b9ab247d3e689e9466550dd82fb&w=996" height={570}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h4 style={{color:'black',paddingBottom:"10px",fontFamily:'fantasy'}}>Are You a Developer?</h4>
                    <p style={{color:'#fff',paddingTop:"10px",fontFamily:'fantasy',fontWeight:800}}>You are in the right place!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                   
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/recruitment-concept-landing-page-template_52683-43519.jpg?w=826&t=st=1659714363~exp=1659714963~hmac=d91b08b419b3f9aa1b3757b0b8359e2110499b9ab247d3e689e9466550dd82fb&w=996" height={570}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h4 style={{color:'black',paddingBottom:"10px",fontFamily:'fantasy'}}>Are You looking for a position?</h4>
                    <p style={{color:'#fff',paddingTop:"10px",fontFamily:'fantasy',fontWeight:800}}>Check details and choose the best job!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    //  style={{borderRadius:'15px'}}
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/recruitment-concept-landing-page-template_52683-43519.jpg?w=826&t=st=1659714363~exp=1659714963~hmac=d91b08b419b3f9aa1b3757b0b8359e2110499b9ab247d3e689e9466550dd82fb&w=996" height={570}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h4 style={{color:'black',paddingBottom:"10px",fontFamily:'fantasy'}}>Here we are! click and apply!!!</h4>
                    <p style={{color:'#fff',paddingTop:"10px",fontFamily:'fantasy',fontWeight:800}}>Awesome positions are for you!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;