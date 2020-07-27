import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, CardButton } from './styles';

export default function Register() {
  const history = useHistory();

  function goToHome() {
    history.push('/');
  }

  return (
    <>
      <Container>
        <h1>Welcome to Register Page</h1>
        <CardButton onClick={goToHome}>Go back to home page</CardButton>
      </Container>
    </>
  );
}
