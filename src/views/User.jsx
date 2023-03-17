const React = require('react');

module.exports = function User({ el }) {
  return (
    <>
      { el ? (
        <div className="userCardAllDiv">
          <div className="userAvatar">
            <img className="avatarImg" src={el?.avatar} alt="avatar" />
            <div className="userInfo">

              <div className="firstName">{el?.firstName}</div>
              <div className="lastName">{el?.lastName}</div>
              <div className="country">{el?.country}</div>
              <div className="email">{el?.email}</div>
              <div className="time">{el?.time}</div>
              <div className="temp">{el?.temp}</div>
              <div className="weather">{el?.weather}</div>
              { el?.icon ? (
                <img className="icon" src={`https://openweathermap.org/img/w/${el?.icon}.png`} alt="" />
              )
                : (null)}
            </div>
          </div>
        </div>

      ) : (null)}
    </>
  );
};
