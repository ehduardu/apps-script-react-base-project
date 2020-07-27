import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container, CardButton } from './styles';

export default function Home() {
  const history = useHistory();

  function goToRegisterPage() {
    history.push('/register');
  }

  return (
    <>
      <Container>
        <h1>Hello world!</h1>
        <CardButton onClick={goToRegisterPage}>Go to register page</CardButton>
      </Container>
    </>
  );
}
