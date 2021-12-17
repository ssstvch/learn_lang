import React from 'react';
import Button from './Button';

const WordCard = () => {
    const {type, text, className} = props;
    return (
        <React.Fragment>
            <section className={`wordcard`}>
                <arcticle className={`wordcard__card`}></arcticle>
                <arcticle className={`wordcard__buttons`}>
                    <Button type={type} className={className} text={text}/>
                </arcticle>
            </section>
        </React.Fragment>
    )
}

export default WordCard;