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
                   
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={570}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h4 style={{color:'#fff',paddingBottom:"10px",fontFamily:'fantasy',fontWeight:800, fontSize:40}}>Are You looking for a position or Posting Job?</h4>
                    <p style={{color:'yellow',paddingTop:"10px",fontFamily:'fantasy',fontWeight:800,fontSize:30}}>Yes!!! You are in the right place!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                   
                    className="d-block w-100 mr-5"
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={570}
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    //  style={{borderRadius:'15px'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1458179424/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E3%83%93%E3%82%B8%E3%83%8D%E3%82%B9%E5%88%86%E6%9E%90%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF%E7%AE%A1%E7%90%86%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0%E3%81%A7%E3%82%B3%E3%83%B3%E3%83%94%E3%83%A5%E3%83%BC%E3%82%BF%E3%83%BC%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AB%E6%8E%A5%E7%B6%9A%E3%81%95%E3%82%8C%E3%81%9Fkpi%E3%81%A8%E3%83%A1%E3%83%88%E3%83%AA%E3%83%83%E3%82%AF%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%A6%E3%83%AC%E3%83%9D%E3%83%BC%E3%83%88%E3%82%92%E4%BD%9C%E6%88%90%E3%81%99%E3%82%8B%E3%82%A2%E3%83%8A%E3%83%AA%E3%82%B9%E3%83%88%E8%B2%A1%E5%8B%99%E9%81%8B%E7%94%A8%E8%B2%A9%E5%A3%B2%E3%83%9E%E3%83%BC%E3%82%B1%E3%83%86%E3%82%A3%E3%83%B3%E3%82%B0.jpg?s=612x612&w=0&k=20&c=iIV_MZV2h2-EmSKEC6_9hW4sGGwmB6NsFjG4e-g3d6k=" height={570}
                    alt="Third slide"
                />

                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;