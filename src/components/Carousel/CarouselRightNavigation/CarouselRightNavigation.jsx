import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightArrow } from '../../../assets/RightArrow.svg'; 
import styles from '../CarouselNavigation.module.css';

export default function CarouselRightNavigation() {
    const swiper = useSwiper();
    
    const [isEnd, setIsEnd] = useState(swiper.isEnd);

    useEffect(() => {
        const handler = () => {
            setIsEnd(swiper.isEnd);
        };
        
        swiper.on("slideChange", handler);
        
        return () => {
            swiper.off("slideChange", handler);
        };
    }, [swiper]);

    return (
        <div className={styles.rightNavigation}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    );
}