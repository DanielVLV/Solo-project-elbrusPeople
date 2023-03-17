const React = require('react');
const Layout = require('./Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div id="registrationAllDiv">
        <div className="table">
          <input id="firstName" className="text" type="text" placeholder="firstName" name="firstName" />
          <input id="lasttName" className="text" type="text" placeholder="lasttName" name="lasttName" />
          <input id="country" className="text" type="text" placeholder="Sity" name="country" />
          <input id="email" className="text" type="email" placeholder="Email" name="email" />
          <input id="password" className="text" type="password" placeholder="Password" name="password" />
          <input id="avatar" className="text" type="avatar" placeholder="URL:image" name="avatar" />
          <a id="registration" className="aNavbar">Push Me</a>
          <script defer src="/js/registrationFetch.js" />
        </div>
      </div>
    </Layout>
  );
};
