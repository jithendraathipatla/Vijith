import React from 'react';
import AdmisionComponent from '../components/admissionform';
import LocationComponent from '../components/location';
import LayoutComponent from '../components/layout';

const Admission = () => {
    return (
        <LayoutComponent>
          
          <hr/>
          <LocationComponent/>
        </LayoutComponent>
    );
};

export default Admission;