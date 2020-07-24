import React from 'react';
import './card.css';

export default function card(props) {
    const {title, content} = props;
    return (
        <div className='Card'>
            <button
            type='button'
        >
            delete
            </button>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}