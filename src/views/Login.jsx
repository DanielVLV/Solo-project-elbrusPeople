const React = require('react');

const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <div id="loginAllDiv">
        <div className="table">
          <input required="required" className="text" id="email" type="email" placeholder="Email" />
          <input required="required" className="text" id="password" type="password" placeholder="Password" />
          <a id="loginBtn" className="aNavbar">Push Me</a>
          <script src="/js/loginFetch.js" />
        </div>
      </div>
    </Layout>
  );
};
