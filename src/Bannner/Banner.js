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
                    src="https://img.freepik.com/free-vector/recruitment-concept-landing-page-template_52683-43519.jpg?w=826&t=st=1659714363~exp=1659714963~hmac=d91b08b419b3f9aa1b3757b0b8359e2110499b9ab247d3e689e9466550dd82fb&w=996" height={600}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 >Are a a developer?</h1>
                    <p>You are in the right place!!!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?w=996&t=st=1659714280~exp=1659714880~hmac=51dea5c2d7b4343626988dda2d0b357d599bfd32c80ba4f4c77a801889985561" height={600}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://t4.ftcdn.net/jpg/04/83/96/45/240_F_483964563_ZNIvOoLDWKg4gJNqx5k7CUgaF9Ws5ORq.jpg" height={600}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;