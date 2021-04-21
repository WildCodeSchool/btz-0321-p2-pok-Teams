import React from 'react';
import Footer from './components/footer';
import Header from './components/Header';

function Layout({ children }) {
  return (
    <div className="grid  grid-rows-PhoneRows w-screen min-h-screen  bg-gradient-to-r from-yellow-300 to-yellow-500 pc:grid-rows-PCRows">
      <Header />
      <div className="bg-yellow-100  m-2">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
