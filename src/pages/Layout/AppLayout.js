import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Sidebar } from '../../components';

export default function AppLayout() {
  return (
    <>
      <Sidebar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
