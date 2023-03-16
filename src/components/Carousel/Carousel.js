import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import RoundResultItem from '../RoundResultItem/RoundResultItem'

const Carousel = ({ items }) => {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
        },
        [

            // add plugins here
        ]
    )

    return (
        <div ref={sliderRef} className="keen-slider">
            {items.map((item) =>
                <div className="keen-slider__slide">
                    <RoundResultItem pokemon={item.pokemon} ></RoundResultItem>
                </div>

            )}
            {/* <div className="keen-slider__slide">1</div>
            <div className="keen-slider__slide">2</div>
            <div className="keen-slider__slide">3</div> */}
        </div>
    )
}

// const Carousel = ({ items }) => {

// }

export default Carousel;