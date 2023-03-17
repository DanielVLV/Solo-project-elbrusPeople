const React = require('react');
const Layout = require('./Layout');

module.exports = function UserRoom({ user }) {
  return (
    <Layout user={user}>
      <div id="userAllDiv">
        {/* <div className="navbarLeftDiv"> */}
        {/* </div> */}
        {/* <div className="navbarRightDiv"> */}
        <div className="table">
          <img src={`https://openweathermap.org/img/w/${user?.icon}.png`} alt="" />
          <div>{`${user.time}`}</div>
          {/* <div>{`${user.temp}`}</div> */}
          <div>{user.email}</div>
          <div className="inputColomn">

            <div className="userInputLeftDiv">

              <img className="avatarImgUserRoom" src={user?.avatar} alt="avatar" />
            </div>
            <div className="userInputRightDiv">

              <input className="text" required="required" id="UserRoomfirstName" type="text" placeholder={user.firstName} name="firstName" />
              <input className="text" required="required" id="UserRoomlasttName" type="text" placeholder={user.lastName} name="lasttName" />
              <input className="text" required="required" id="UserRoomcountry" type="text" placeholder={user.sity} name="Sity" />
              <input className="text" id="URLAvatar" type="text" placeholder="URL:image" name="avatar" />
              <a className="aNavbar" data-id={user.id} id="UserRoomregistration">Save</a>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <script src="/js/userRoomFetch.js" />
    </Layout>
  );
};
