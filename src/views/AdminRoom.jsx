const React = require('react');

const Layout = require('./Layout');

const User = require('./User');

module.exports = function Home({ user, allUsers }) {
  return (
    <Layout user={user}>
      {/* <h1 id="muderolisag">Admin Room</h1> */}
      <div className="adminAllDiv">

        {allUsers
          ? (
            <>
              {allUsers.map((el) => (
                <div className="cardAndDelBtn">
                  <User el={el} />
                  <a className="delBtn" id="deliteUser" data-id={el.id} type="submit">Delite</a>
                </div>
              ))}
            </>
          ) : (null)}
        <User />
        <script defer src="/js/adminRoom.js" />
      </div>
      <script defer src="/js/adminRoomFetch.js" />
    </Layout>
  );
};
