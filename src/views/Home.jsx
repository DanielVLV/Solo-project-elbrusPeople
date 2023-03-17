const React = require('react');

const Layout = require('./Layout');

const User = require('./User');

module.exports = function Home({ user, newAllUsers }) {
  return (
    <Layout user={user}>
      <div id="muderolisag">
        {/* <h1>Elbrus People</h1> */}
      </div>
      <div className="homeAllDiv">
        {newAllUsers
          ? (
            <>
              {newAllUsers.map((el) => (
                <User el={el} />
              ))}
            </>
          ) : (null)}
        <User />
      </div>
    </Layout>
  );
};
