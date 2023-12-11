import Carousel from 'react-bootstrap/Carousel';

import Banner1 from '/bannerCarousel/75off.jpg';
import Banner2 from '/bannerCarousel/banner-xmas.jpg';
import Banner3 from '/bannerCarousel/25off.jpg';

import './CarouselBanner.css';

const CarouselBanner = () => {
    return (
        <Carousel className='carousel-container'>
            <Carousel.Item>
                <img src={Banner1} alt="mega sale 85% off" />
            </Carousel.Item>
            <Carousel.Item >
                <img src={Banner2} alt="xmas 30% off"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src={Banner3} alt="new year 2024 50% off" />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselBanner;
