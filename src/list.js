import React from 'react';
import './list.css';
import Card from './card';

export default function list(props) {
    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{props.header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card) => 
                    <Card
                    key={card.id}
                    title={card.title}
                    content={card.content}
                  />
                )}
                <button
                    type='button'
                    className='List-add-button'
                >
                    + Add Random Card
                </button>
            </div>
        </section>
    );
}