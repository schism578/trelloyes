import React from 'react';
import './card.css';

export default function card(props) {
    const {
        title, 
        content,
        id,
        onClickDelete = () => {}
    } = props;

    return (
        <div className='Card'>
            <button
            type='button'
            onClick={() => onClickDelete(id)}
        >
            delete
            </button>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    );
}