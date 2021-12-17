import React from 'react';
import DropdownMenuLink from './DropdowmMenuLink';

const languages = [
    {lang: "English", href: "#"},
    {lang: "Italian", href: "#"}
];

const userLinks = [
    {text: "Account settings", href: "#"},
    {text: "Log out", href: "#", logout: true}
];

const addLanguage = () => {
    languages.map(language => {
        <DropdownMenuLink href={language.href} text={language.lang}/>
    })
}

const addUserMenu = () => {
    userLinks.map(link => {
        <DropdownMenuLink href={link.href} text={link.text} logout={logout}/>
    })
}

const DropdownMenu = () => {
    const {specialMenu} = props;
    return (
        <React.Fragment>
            <div className={`dropdown-menu ${specialMenu}`}>
                        if({specialMenu} === "language__menu") {addLanguage()}
                        else if({specialMenu} === "user-menu__menu") {addUserMenu()}
            </div>
        </React.Fragment>
    )
}

export default DropdownMenu;