import React from 'react';
import s from './profileInfo.module.css'


const ProfileInfo = () => {
  return (
  <div>
    <div>
      <img src='https://cherepah.ru/wp-content/uploads/9/0/7/9072f1698dc9802481d5abe5c7314500.jpg'></img>
    </div>
    <div className={s.descriptionBlock}>ava + description
    </div>
  </div>
  )
}

export default ProfileInfo;
