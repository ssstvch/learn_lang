import React from 'react';

const UserSettingsInfo = () => {
    return (
        <React.Fragment>
            <h3 className={`user-settings__title`}>{title}</h3>
            <div className={`user-settings__text`}>{text}</div>
        </React.Fragment>
    )
}

export default UserSettingsInfo;