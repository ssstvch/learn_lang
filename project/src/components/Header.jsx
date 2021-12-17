import React from 'react';
import MenuList from "./MenuList";

const links = [
    {special: "new-words", href: "#", text: "Learn new words"},
    {special: "training", href: "#", text: "Training"},
    {special: "word-list", href: "#", text: "Your word list"},
    {special: "language", href: "#", text: "Change language"},
    {special: "user-menu", href: "#", text: "User", user: true}
]

const Header = (props) => {
    const {src} = props;
    return (
        <React.Fragment>
            <header className={`header`}>
                <div className={`header__logo`}>
                    <h1 className={`hidden`}>Logotype</h1>
                    <img className={`header__image`} src={src} />
                </div>
                <nav className={`header__menu`}>
                    <ul className={`header__ul`}>
                        {
                            links.map((link) => {
                                <MenuList special={link.special} href={link.href} text={link.text} user={link.user}/>
                            })
                        }
                    </ul>
                </nav>
            </header>
        </React.Fragment>
    )
}

export default Header;