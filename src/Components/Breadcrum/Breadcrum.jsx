import React from 'react';
import './Breadcrum.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

export const Breadcrum = (props) => {
    const {product} = props;
    const navigate = useNavigate();

    const goBack = () =>{
        navigate(-1);
    }
    return (
        <div className='breadcrum'>
            <Link to ='/' style={{ textDecoration: 'none', color: 'black'}}>HOME</Link> <FontAwesomeIcon icon={faAngleRight} /><Link to='#' onClick={goBack} style={{ textDecoration: 'none', color: 'black'}}> {product.category} </Link><FontAwesomeIcon icon={faAngleRight} /> {product.name}
        </div>
    )
}
