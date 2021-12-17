import React from 'react';

const MenuList = (props) => {
    const {href, special, text, user} = props;
    return (
        <React.Fragment>
            <li className={`header__li ${special}`}>
                <a href={href} className={`header__link`}>{text}</a>
                {user}?<div className={`header__sparrow sparrow`}></div>:""
            </li>
        </React.Fragment>
    )
}

export default MenuList;