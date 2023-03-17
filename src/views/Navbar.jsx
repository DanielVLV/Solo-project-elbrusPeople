const React = require('react');

module.exports = function Navbar({ user }) {
  return (
    <nav>
      {user ? (
        user.status === 'admin' ? (
          <>
            <div className="navbarAllDiv">
              <div className="navbarLeftDiv">
                <a className="aNavbar" href="/">Elbrus People</a>
              </div>
              <div className="navbarRightDiv">
                <span className="helloUser">{`Hello ${user.firstName}`}</span>
                <a className="aNavbar" href="/adminRoom">Admin Room</a>
                <a className="aNavbar" href="/logout">Logout</a>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="navbarAllDiv">
              <div className="navbarLeftDiv">
                <a className="aNavbar" href="/">Elbrus People</a>
              </div>
              <div className="navbarRightDiv">
                <span className="helloUser">{`Hello ${user.firstName}`}</span>
                <a className="aNavbar" href="/profile">Profile</a>
                <a className="aNavbar" href="/logout">Logout</a>
              </div>
            </div>
          </>
        )
      ) : (
        <div className="navbarAllDiv">
          <div className="navbarLeftDiv">
            <a className="aNavbar" href="/">Elbrus People</a>
          </div>
          <div className="navbarRightDiv">
            <a className="aNavbar" href="/registration">Registration</a>
            <a className="aNavbar" href="/login">Login</a>
          </div>
        </div>
      )}
    </nav>
  );
};
