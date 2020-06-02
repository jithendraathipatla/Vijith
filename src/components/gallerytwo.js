import React from 'react';
import Lightboxcomponent from '../components/lightbox';
import InteriorFirst from '../images/interior1.jpeg'
import InteriorSecond from '../images/interior2.jpeg';
import InteriorThird from '../images/interior3.jpeg';
import InteriorFourth from '../images/interior4.jpeg';
import InteriorFifth from '../images/interior5.jpeg';


const Galleryone = () => {
    const interior = [
        {
            image: InteriorFirst,
            name:"Outdoor",
        },
        
        {
            image: InteriorThird,
            name:"Outdoor"
        },
        {
            image: InteriorFourth,
            name:"Outdoor"
        },
        {
            image: InteriorFifth,
            name:"Outdoor"
        }
    ]
    return (
        <div>
            <Lightboxcomponent images={[InteriorFirst, InteriorThird, InteriorFourth, InteriorFifth]} state={interior}/>
        </div>
    );
};

export default Galleryone;