import React from 'react';

const DropdownMenuLink = () => {
    const {href, text, logout} = props;
    return (
        <React.Fragment>
            <p className={`dropdown-menu__p`}>
                <a className={`dropdown-menu__link`} href={href}>
                    {text}
                </a>
                {logout}?<div className={`dropdown-menu__out logout`}></div>:""
            </p>
        </React.Fragment>
    )
}

export default DropdownMenuLink;