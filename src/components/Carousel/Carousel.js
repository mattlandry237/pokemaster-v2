import React from 'react'
import RoundResultItem from '../RoundResultItem/RoundResultItem'
import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'

const Carousel = ({ items, setFunc }) => {
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            slideChanged() {
                console.log('slide changed')
            },
            loop: true,
            slides: {
                perView: 3,
                spacing: -150
            }
        }
    )

    return (
        <div ref={sliderRef} className="keen-slider">
            {items.map((item, index) =>
                <div className="keen-slider__slide" onClick={() => { setFunc(item.pokemon) }}>
                    <RoundResultItem
                        onClick={() => { setFunc(item.pokemon) }}
                        pokemon={item.pokemon}
                        selectedTypes={item.selectedTypes}
                        roundNum={index + 1}>
                    </RoundResultItem>
                </div>
            )}
        </div>
    )
}

export default Carousel;