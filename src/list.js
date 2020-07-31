import React from 'react';
import './list.css';
import Card from './card';

export default function list(props) {
    const {
        id,
        header,
        onClickAdd = () => {},
        onClickDelete = () => {}
    } = props;

    return (
        <section className='List'>
            <header className='List-header'>
                <h2>{header}</h2>
            </header>
            <div className='List-cards'>
                {props.cards.map((card) => 
                    <Card
                    key={card.id}
                    id={card.id}
                    title={card.title}
                    content={card.content}
                    onClickDelete={onClickDelete}
                  />
                )}
                <button
                    type='button'
                    className='List-add-button'
                    onClick={() => onClickAdd(id)}
                >
                    + Add Random Card
                </button>
            </div>
        </section>
    );
}