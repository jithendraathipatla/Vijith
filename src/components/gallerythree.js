import React from 'react';
import Lightboxcomponent from '../components/lightbox';
import BusFirst from '../images/bus1.jpeg'
import BusSecond from '../images/bus2.jpeg';
import BusThird from '../images/bus3.jpeg';



const Galleryone = () => {
    const interior = [
        {
            image: BusFirst,
            name:"Outdoor",
        },
        
        {
            image: BusSecond,
            name:"Outdoor"
        },
        {
            image: BusThird,
            name:"Outdoor"
        },
    ]

    return (
        <div>
            <Lightboxcomponent images={[BusFirst, BusThird, BusThird]} state={interior}/>
        </div>
    );
};

export default Galleryone;