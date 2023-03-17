const React = require('react');

const Layout = require('./Layout');
const User = require('./User');

// const UserForAdmin = require('./UserForAdmin');

module.exports = function Home({ user, allUsers }) {
  return (
    <Layout user={user}>
      {/* <h1 id="muderolisag">Admin Room</h1> */}
      <div id="adminAllDiv" className="adminAllDiv">

        {allUsers
          ? (
            <>
              {allUsers.map((el) => (
                <div className="cardAndDelBtn">
                  <User el={el} />
                  <a className="delBtn" id="deliteUser" data-id={el.id}>Delite</a>
                </div>
              ))}
            </>
          ) : (null)}
      </div>
      <script defer src="/js/adminRoomFetch.js" />
    </Layout>
  );
};
