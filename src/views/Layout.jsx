const React = require('react');

const Navbar = require('./Navbar');

module.exports = function Layout({ children, user }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style/home.css" />
        <link rel="stylesheet" href="/style/userCards.css" />
        <link rel="stylesheet" href="/style/navbar.css" />
        <link rel="stylesheet" href="/style/adminRoom.css" />
        <link rel="stylesheet" href="/style/registration.css" />
        <link rel="stylesheet" href="/style/alert.css" />
        <link rel="stylesheet" href="/style/error.css" />
        <meta charSet="UTF-8" />
        <script defer src="" />
        <title />
      </head>
      <body>
        <header>
          <Navbar user={user} />
        </header>
        <div>
          {children}
        </div>
        <footer />
      </body>
    </html>
  );
};
