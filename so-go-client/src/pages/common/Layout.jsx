import '@/css/common/Layout.css';
import React from 'react';
import Header from '@/pages/common/TheHeader';
import Menu from '@/pages/common/Menu';

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main className='layout'>
        {props.children}
      </main>
      <Menu />
    </div>
  );
}