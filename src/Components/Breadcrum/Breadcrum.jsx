import React from 'react';
import './Breadcrum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const Breadcrum = (props) => {
    const {product} = props;
    return (
        <div className='Breadcrum'>
            HOME <FontAwesomeIcon icon={faAngleRight} /> CATEGORY <FontAwesomeIcon icon={faAngleRight} /> {product.category} <FontAwesomeIcon icon={faAngleRight} /> {product.name}
        </div>
    )
}
