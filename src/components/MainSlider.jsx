import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

const items = [
    {
        src: 'images/01.webp',
        smallText: 'SPORTS',
        bigText: 'POWERFUL RACING BIKE',
        key: 1,
    },
    {
        src: 'images/03.webp',
        smallText: 'EXPLORE',
        bigText: 'STUNNING SPORTS BIKE',
        key: 2,
    },
    {
        src: 'images/04.webp',
        smallText: 'SPEED',
        bigText: 'NEW WAY OF RUNNING',
        key: 3,
    },
];

function MainSlider(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <div className='slider-image' style={{ "backgroundImage": "url(" + item.src + ")" }}>
                    <div className='container h-100'>
                        <div className='row slider-content'>
                            <div className='col-sm-6'>
                                <h4 className='smalltext'>{item.smallText}</h4>
                                <h2 className='bigtext'>{item.bigText}</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    Deserunt, facilis? Perferendis est nobis debitis dicta dolorem.
                                    Nobis dolorum inventore veniam odit itaque rerum nisi quod.
                                </p>
                                <button className='btn btn-outline-primary rounded-pill btn-lg'>View Details</button>
                            </div>
                        </div>
                    </div>
                </div>

            </CarouselItem>
        );
    });
    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            slide
            dark
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}

        </Carousel>
    );
}

export default MainSlider;