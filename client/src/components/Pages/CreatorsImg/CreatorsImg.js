import React from 'react';
import './CreatorsImg.css'
import imgCreators from './cofoundersImg.jpg'


export default function CreatorsImg() {

    return (
        <section>
            <img src={imgCreators} alt="creators" className='heroCreators' />
        </section>
    )
}
