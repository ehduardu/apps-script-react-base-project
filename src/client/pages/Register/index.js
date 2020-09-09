import React from 'react';
import { useHistory } from 'react-router-dom';

import server from '../../utils/server';
import { Container, CardButton } from './styles';

export default function Register() {
  const history = useHistory();

  const { getScriptToken } = server;

  async function goToHome() {
    console.log(await getScriptToken());
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
