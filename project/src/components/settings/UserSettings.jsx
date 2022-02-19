import React from "react";
import UserSettingsInput from "./UserSettingsInfo";

// при дальнейшей реализации text будет подгружаться из localStorage, в идеале с сервера
const settings = [
  { title: "Name", text: "Alexandra" },
  { title: "E-mail", text: "alexandra.sitovich@gmail.com" },
  { title: "Password", text: "********" },
];

const UserSettings = () => {
  <section className={`user-settings`}>
    <article className={`user-settings__user-info`}>
      <div className={`user-settings__avatar`}></div>
      <div className={`user-settings__info`}>
        {settings.map((setting) => {
          <UserSettingsInput title={setting.title} text={setting.text} />;
        })}
      </div>
    </article>
    <article className={`user-settings__app-settings app-settings`}>
      <div className={`user-settings__sound`}>
        <h3 className={`user-settings__title`}>Sound</h3>
        <input className={`user-settings__sound-input`} />
      </div>
      <div className={`user-settings__words`}>
        <h3 className={`user-settings__title`}>Daily words</h3>
        <input className={`user-settings__daily-input`} />
      </div>
    </article>
  </section>;
};

export default UserSettings;
