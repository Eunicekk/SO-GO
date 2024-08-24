import React from 'react';
import Header from '@/pages/common/TheHeader';
import Menu from '@/pages/common/TheMenu';

export default function Layout(props) {
  return (
    <div>
      <Header />
      <main id="layout">{props.children}</main>
      <Menu />
    </div>
  );
}
