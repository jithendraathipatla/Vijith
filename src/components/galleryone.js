import React from 'react';
import Lightboxcomponent from '../components/lightbox';
import ExteriorFirst from '../images/slider1.jpeg'
import ExteriorSecond from '../images/slider2.jpeg';
import ExteriorThird from '../images/slider3.jpeg';
import ExteriorFourth from '../images/exterior1.jpeg'


const Galleryone = () => {
    const exterior = [
        {
            image: ExteriorFirst,
            name:"Outdoor",
        },
        {
            image: ExteriorSecond,
            name:"Outdoor"
        },
        {
            image: ExteriorThird,
            name:"Outdoor"
        },
        {
            image: ExteriorFourth,
            name:"Outdoor"
        }
    ]
    return (
        <div>
            <Lightboxcomponent images={[ExteriorFirst, ExteriorSecond, ExteriorThird, ExteriorFourth]} state={exterior}/>
        </div>
    );
};

export default Galleryone;