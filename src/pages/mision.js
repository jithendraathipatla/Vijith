import React from 'react';
import LayoutComponent from '../components/layout'
import LocationComponent from '../components/location';

const Mision = () => {
    return (
       <LayoutComponent>
        I am from the Mission Component
        <hr/>
        <LocationComponent/>
       </LayoutComponent>
    );
};

export default Mision;