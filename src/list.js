import React from 'react';
import './list.css';
import Card from './card';

export default function list(props) {
    const {
        id,
        title,
        header,
        content,
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
                    key={id}
                    id={id}
                    title={title}
                    content={content}
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