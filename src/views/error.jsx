const React = require('react');

const Layout = require('./Layout');

module.exports = function ErrorPage() {
  return (
    <Layout>
      <div className="error">
        <img className="errorImg" src="img/404.jpg" />
      </div>
    </Layout>
  );
};
