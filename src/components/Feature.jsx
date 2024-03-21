import React from 'react';

import Featurebox from './Featurebox';

import fimagel from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';


function Feature() {
    return (
        <div id='features'>

            <h1>FEATURES</h1>

            <div className='a-container'>
                <Featurebox image={fimagel} title="Weightlifting" text="Here you can lift weight and build strength" />
                <Featurebox image={fimage2} title="Specific Muscle" text="With machinary we can target Specific Muscle" />

                <Featurebox image={fimage3} title="Flex Your Muscle" text="By flexing you can shape your muscle" />
                <Featurebox image={fimage4} title="Cardio Exercise" text="Here you can also cardio to lose weight" />

            </div>

        </div>



    )



}



export default Feature;


