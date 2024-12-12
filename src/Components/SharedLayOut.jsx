import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function SharedLayOut() {
  return (
    <>
      <Header />
     <Outlet/>
      <Footer />
    </>
  );
}

export default SharedLayOut