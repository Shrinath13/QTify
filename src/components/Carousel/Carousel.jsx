import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from './Carousel.module.css';
import 'swiper/css';
import CarouselLeftNavigation from './CarouselLeftNavigation/CarouselLeftNavigation';
import CarouselRightNavigation from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({ data }) => {
    const swiper = useSwiper();
    useEffect(() => {
        swiper.slideTo(0);
    }, [data, swiper]);
    return <null />;
}

function Carousel({ data, renderComponent }) {
    return (
        <div>
        <Swiper
            style={{ padding: "0px 20px" }}
            initialSlide={0}
            modules={[Navigation]}
            slidesPerView={"auto"}
            spaceBetween={40}
            allowTouchMove
            breakpoints={{
                0: {
                    slidesPerView: 2,
                },
                480: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 7,
                },
            }}
        >
            <Controls data={data} />
            <CarouselLeftNavigation />
            <CarouselRightNavigation />
            {data.map((ele) => (
                <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
            ))}
        </Swiper>
        </div >
    );
}

export default Carousel;