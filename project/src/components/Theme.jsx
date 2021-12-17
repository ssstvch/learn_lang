import React from 'react';

// Новые слова выглядят как и компонент темы

const Theme = () => {
    const {src, alt, themeName, text} = props;
    return (
        <React.Fragment>
            <article className={`theme`}>
                <div className={`theme_img-box`}>
                    <img src={src} alt={alt} className={`theme__img`} />
                </div>
                <h3 className={`theme__title`}>{themeName}</h3>
                <p className={`theme__text`}>{text}</p>
            </article>
        </React.Fragment>
    )
}

export default Theme