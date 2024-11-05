import React from 'react';
import { MyFooter, MyNavbar } from '../../components';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

export default function BoardLayout() {
  return (
    <>
      <MyNavbar brandTitle="My-React-Board" />
      <Container className="min-vh-100">
        {/* Outlet : 자식 컴포넌트를 렌더링해준다.  */}
        <Outlet />
      </Container>
      <MyFooter brandTitle="My-React-Board" />
    </>
  );
}
